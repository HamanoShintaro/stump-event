# 60. 押印（来訪証明）ロジック

> 最終更新: 2026-05-31 / 出典: SHUIN_統合仕様書.md §4-2
> 関連: [30_data_model.md](./30_data_model.md) / [40_api_spec.md](./40_api_spec.md)

---

## 1. 押印の2方式

| 方式 | 条件 | 用途 |
|---|---|---|
| **GPS** | サーバーサイド Haversine 距離計算・半径50m以内 | 主方式 |
| **QRスキャン** | スポット固有の `qr_token` と一致 | フォールバック・B②入口（後述） |

両方式とも最終的に `stamp_events` テーブルに記録される。

---

## 2. GPS判定ロジック

### 2-1. クライアント側

```typescript
// 5秒おきに位置情報取得（バッテリー消費を考慮）
navigator.geolocation.watchPosition(
  (pos) => {
    // 半径50m以内検知 → 押印ボタンを active 化
    if (distanceTo(spot.location, pos.coords) <= 50) {
      enableStampButton();
    }
  },
  null,
  { enableHighAccuracy: true, maximumAge: 5000 }
);
```

**UX原則**: 自動押印しない。**ユーザーが押印ボタンを能動的にタップする** ことを儀式の一部とする。

### 2-2. サーバー側

```sql
-- POST /checkin 内で実行
SELECT id, ST_Distance(
  location,
  ST_SetSRID(ST_MakePoint($lng, $lat), 4326)::geography
) AS distance_m
FROM spots
WHERE id = $spot_id;

-- distance_m <= radius_m (デフォルト50) なら OK
```

クライアントの座標を信用せず、必ずサーバーで再計算（GPS偽装対策）。

---

## 3. QRトークン判定ロジック

### 3-1. スポットQR（フォールバック）

GPS取得が困難なケース（屋内・地下・電波圏外復帰直後）の救済。

```typescript
// POST /checkin with method: 'qr', qr_token: '...'
const spot = await db.spots.findUnique({ where: { id: spot_id } });
if (spot.qr_token !== qr_token) {
  throw new Error('INVALID_QR_TOKEN');
}
// OK
```

### 3-2. トリガーQR（B②入口）

`trigger_qrs` テーブルとの照合。押印ではなく **ルート起動** に使う。

`POST /triggers/{qr_token}` エンドポイントで処理。

詳細は [40_api_spec.md](./40_api_spec.md) §3-4 参照。

---

## 4. 重複防止ルール

| 条件 | 挙動 |
|---|---|
| 同一 `(user_id, spot_id, date(created_at))` の2回目以降 | `DUPLICATE_STAMP` エラー（409） |
| 翌日以降の再訪 | OK（`stamp_events` にINSERT、`is_first_visit = false`） |

**注意**: `is_first_visit = false` の場合、`stamps` テーブル（個別SHUIN）にはINSERTしない（既に存在）。`badge_assignments` にも追加付与しない（同じ称号は1回のみ）。ライフログ（`stamp_events`）には毎回記録。

実装:

```sql
-- 部分UNIQUE index
CREATE UNIQUE INDEX uq_stamp_events_user_spot_date
ON stamp_events (user_id, spot_id, DATE(created_at AT TIME ZONE 'Asia/Tokyo'));
```

---

## 5. レートリミット

| 制限 | 範囲 |
|---|---|
| 10件/分/user | `POST /checkin` |
| 30件/分/user | `POST /*` 全般 |
| 100件/分/user | `GET /*` 全般 |

実装方式: **Redis** または Vercel Edge Config を使用。発火時は `RATE_LIMITED` (429)。

---

## 6. 不正対策（3層構造）

B11「ルールズ・オブ・プレイ」の三水準ルール設計を適用。

### 6-1. 構成的ルール（サーバーサイド検証）

- Haversine 距離計算をサーバーで実行
- GPS精度 `accuracy_m` が500m超の場合は警告ログ + 50m判定を厳格化（10m厳格モード）
- 同一IPからの大量リクエストはレートリミット強化

### 6-2. 操作的ルール（UX）

- 押印は **ボタンを押す行為が必要**（自動押印しない）
- セレモニーが終わらないと次の操作不可
- 連続押印は短時間で物理的に不可能（移動時間）

### 6-3. 暗黙的ルール

- 「リアルに来る」前提を信頼設計
- コミュニティ報告制度（Phase 2〜）
- 異常な来訪パターン（深夜の連続押印・移動速度が物理的に不可能）はバッチで検知

### 6-4. 検知後の対応

| 検知レベル | 対応 |
|---|---|
| 警告 | ログ記録のみ、ユーザー通知なし |
| 黄信号 | アカウントに `fraud_score` 加算 |
| 赤信号 | 称号・SHUIN取得停止、運営レビュー |
| 確定 | アカウント停止、ライフログから不正分を除外 |

不正検知バッチは Phase 2 以降。Phase 1 MVP は **ログ記録のみ**。

---

## 7. 来訪者番号 (`visitor_number`)

スポット毎の連番。

```sql
-- stamp_events INSERT時に取得
SELECT COALESCE(MAX(visitor_number), 0) + 1
FROM stamp_events
WHERE spot_id = $spot_id;
-- ※ トランザクション内で SELECT FOR UPDATE 推奨
```

**注意**: 重複押印（同日2回目）でも `visitor_number` は加算する設計か、初回のみ加算する設計か。

**確定**: **初回押印（`is_first_visit = true`）のみ加算**。再訪では `visitor_number` を返さない（過去の自分の番号を表示）。

理由: 「あなたは何人目」の体験は1回限り。再訪では F8 を簡略化。

---

## 8. 称号付与判定の起動

押印成功時、`badges` テーブルから該当ユーザー × スポット × ルートに紐づく未取得称号を一括判定。

詳細ロジックは [62_badge_logic.md](./62_badge_logic.md) 参照。

---

## 9. トランザクション設計

`POST /checkin` の処理を1トランザクションで実行:

```
BEGIN
  1. SELECT spots WHERE id = $spot_id   (距離計算)
  2. 距離 > 50m or qr不一致 → ROLLBACK & ERROR
  3. SELECT stamp_events WHERE (user, spot, today) FOR SHARE  (重複チェック)
  4. INSERT stamp_events (visitor_number = MAX+1 if is_first_visit)
  5. INSERT stamps (if is_first_visit)
  6. UPDATE user_route_progress (stamps_collected++)
  7. 称号判定 → INSERT badge_assignments (複数可能性)
  8. F7断片・F7全文を narrative_fragments から取得
  9. 次スポット情報を routes_spots から取得（sequence順）
COMMIT
```

ロールバック時はクライアントには `INTERNAL_ERROR` を返却、Sentryに送信。

---

## 10. テストケース（最低限）

| # | ケース | 期待挙動 |
|---|---|---|
| 1 | 圏内+初回 | 200 OK / SHUIN獲得 |
| 2 | 圏内+再訪（同日） | 409 DUPLICATE_STAMP |
| 3 | 圏内+再訪（翌日） | 200 OK / SHUIN獲得なし / ライフログのみ |
| 4 | 圏外（50m超） | 400 INVALID_DISTANCE |
| 5 | QRトークン不一致 | 400 INVALID_QR_TOKEN |
| 6 | 1分以内に11回 | 429 RATE_LIMITED |
| 7 | GPS精度500m超 | 警告ログ+厳格モード適用 |
| 8 | 最終スポット押印 | next_spot=null / completion-status APIで称号取得可能 |
| 9 | 同時に複数称号獲得 | additional_badges に複数返却 |
| 10 | サーバー側でクライアント座標と再計算が一致しない場合 | サーバー計算を採用 |

---

## 11. 監査ログ

`stamp_events` テーブル自体が監査ログとして機能。**DELETEを発行しない**。

不正検知や監査時は `stamp_events` を直接クエリ:

```sql
-- 1日100スポット押印する異常ユーザー
SELECT user_id, COUNT(*)
FROM stamp_events
WHERE created_at >= NOW() - INTERVAL '24 hours'
GROUP BY user_id
HAVING COUNT(*) > 100;
```
