# 30. データモデル

> 最終更新: 2026-05-31 / 出典: SHUIN_統合仕様書.md §0-3, §4-2, §4-6
> 関連: [10_glossary.md](./10_glossary.md) / [40_api_spec.md](./40_api_spec.md)
>
> **DB層は英語識別子固定。日本語混入禁止。**

---

## 1. 技術スタック前提

- **DB:** PostgreSQL 15+ with **PostGIS** 拡張（地理情報クエリ）
- **マイグレーション:** Prisma（推奨） or knex
- **ID戦略:** UUID v4（全テーブル `id` カラム）
- **タイムスタンプ:** UTC（`created_at`, `updated_at` 全テーブル必須）

---

## 2. ER概略

```
users ─< stamp_events >─ spots ─< routes_spots >─ routes
                                                       │
                                                       ├─< narratives >─< narrative_fragments
                                                       │
                                                       └─< badges
users ─< badge_assignments >─ badges
users ─< user_route_progress >─ routes
spots ─< trigger_qrs（B②入口）
```

---

## 3. テーブル定義（Phase 1 MVP）

### 3-1. users

| カラム | 型 | NN | デフォルト | 説明 |
|---|---|---|---|---|
| `id` | UUID | ✓ | gen_random_uuid() | 主キー |
| `firebase_uid` | TEXT | ✓ | | Firebase Auth UID |
| `display_name` | TEXT | | | 表示名 |
| `email` | TEXT | | | メール |
| `age_verified` | BOOLEAN | ✓ | false | 年齢確認済（Phase 2機能だがカラムは先行） |
| `date_of_birth` | DATE | | | 年齢確認済の場合のみ保存 |
| `notification_enabled` | BOOLEAN | ✓ | true | プッシュ通知許可 |
| `created_at` | TIMESTAMPTZ | ✓ | NOW() | |
| `updated_at` | TIMESTAMPTZ | ✓ | NOW() | |

インデックス: `firebase_uid` UNIQUE

---

### 3-2. routes

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `name` | TEXT | ✓ | ルート名 |
| `description` | TEXT | | 説明文 |
| `area_name` | TEXT | ✓ | エリア名（例: 「中目黒」） |
| `category` | TEXT | ✓ | 欲求軸: discover / see / achieve / experience / collect / eat |
| `scene_tags` | TEXT[] | | シーン軸: date / family / solo / friends / special |
| `route_type` | TEXT | ✓ | platform / facility / event / sponsored |
| `display_terminology` | TEXT | ✓ | 'shuin' \| 'stamp' （④例外用、デフォルト 'shuin'） |
| `rarity_estimated_min` | INT | ✓ | 推定所要時間（分） |
| `cover_image_url` | TEXT | | |
| `is_published` | BOOLEAN | ✓ | 公開フラグ |
| `published_at` | TIMESTAMPTZ | | |
| `valid_from` | TIMESTAMPTZ | | イベントルートの期間開始（platform/facility は NULL） |
| `valid_until` | TIMESTAMPTZ | | イベントルートの期間終了 |
| `partner_org_id` | UUID | | facility/sponsored の場合の協力企業 |
| `created_at` / `updated_at` | TIMESTAMPTZ | ✓ | |

インデックス: `area_name`, `category`, `route_type`, `is_published`, `(valid_from, valid_until)`

**`category` の取りうる値（[詳細](./00_product_overview.md)）:**
- `discover` 発見したい
- `see` 見たい
- `achieve` 達成したい
- `experience` 体験したい
- `collect` 集めたい
- `eat` 食べたい
- `pilgrimage` 推しに触れたい（Phase 2〜）

---

### 3-3. spots

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `name` | TEXT | ✓ | スポット名 |
| `description` | TEXT | | |
| `address` | TEXT | ✓ | 住所 |
| `location` | GEOGRAPHY(POINT, 4326) | ✓ | PostGIS座標（経度・緯度） |
| `qr_token` | TEXT | | QR押印用トークン（任意・存在する場合はGPSフォールバック可） |
| `radius_m` | INT | ✓ | 50 (デフォルト) | 押印有効半径 |
| `cover_image_url` | TEXT | | |
| `is_published` | BOOLEAN | ✓ | |
| `created_at` / `updated_at` | TIMESTAMPTZ | ✓ | |

インデックス:
- `location` GIST（PostGIS空間インデックス）
- `qr_token` UNIQUE WHERE qr_token IS NOT NULL

---

### 3-4. routes_spots（中間テーブル）

ルートに含まれるスポットの順序を管理。

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `route_id` | UUID | ✓ | FK → routes.id |
| `spot_id` | UUID | ✓ | FK → spots.id |
| `sequence` | INT | ✓ | 訪問順序（1始まり） |
| `is_final` | BOOLEAN | ✓ | 最終スポットフラグ |
| `created_at` | TIMESTAMPTZ | ✓ | |

主キー: `(route_id, spot_id)`
インデックス: `(route_id, sequence)`

---

### 3-5. stamp_events（押印イベント・正本）

押印1回 = 1レコード。**監査ログとして不変。**

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `user_id` | UUID | ✓ | FK → users.id |
| `spot_id` | UUID | ✓ | FK → spots.id |
| `route_id` | UUID | | FK → routes.id（マップから来たルートコンテキスト。null可） |
| `method` | TEXT | ✓ | 'gps' \| 'qr' |
| `lat` | DOUBLE PRECISION | | クライアント送信値（GPS時のみ） |
| `lng` | DOUBLE PRECISION | | |
| `accuracy_m` | DOUBLE PRECISION | | GPS精度（クライアント送信） |
| `distance_to_spot_m` | DOUBLE PRECISION | | サーバー計算済距離 |
| `qr_token_used` | TEXT | | QR時のみ |
| `visitor_number` | INT | ✓ | このスポットでの何人目か（連番） |
| `is_first_visit` | BOOLEAN | ✓ | ユーザー初回かどうか |
| `created_at` | TIMESTAMPTZ | ✓ | NOW() |

インデックス:
- `(user_id, spot_id, created_at)` （重複チェック・履歴）
- `(spot_id, created_at)`
- `(user_id, created_at)`

**ビジネスルール:**
- 同一 `(user_id, spot_id, date(created_at))` の重複INSERTは制約で拒否（部分UNIQUE index）
- レートリミット: 10件/分/user は別テーブルまたはRedis

---

### 3-6. stamps（個別SHUIN・集約ビュー候補）

`stamp_events` の **初回来訪のみ** を `stamp` として扱う。

実装案A: マテリアライズドビュー
```sql
CREATE MATERIALIZED VIEW stamps AS
SELECT DISTINCT ON (user_id, spot_id)
  id AS stamp_event_id,
  user_id, spot_id, route_id, visitor_number, created_at AS acquired_at
FROM stamp_events
WHERE is_first_visit = true
ORDER BY user_id, spot_id, created_at;
```

実装案B: 通常テーブル + トリガー（推奨。リアルタイム取得のため）

**Phase 1 MVPでは案Bを採用。** stamp_events INSERT時にトリガーで stamps を作成。

| カラム | 型 | NN |
|---|---|---|
| `id` | UUID | ✓ |
| `stamp_event_id` | UUID | ✓ |
| `user_id` | UUID | ✓ |
| `spot_id` | UUID | ✓ |
| `route_id` | UUID | |
| `visitor_number` | INT | ✓ |
| `acquired_at` | TIMESTAMPTZ | ✓ |

主キー: `id`
UNIQUE: `(user_id, spot_id)`

---

### 3-7. narratives

ルート単位の物語（v1.1で1対1運用、設計は1対多許容）。

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `route_id` | UUID | ✓ | FK → routes.id |
| `title` | TEXT | ✓ | 物語タイトル（例: 「目黒川、昭和の痕跡」） |
| `is_active` | BOOLEAN | ✓ | 同一ルートで複数物語ある場合、表示するもの |
| `act_0_text` | TEXT | ✓ | 80字上限 |
| `created_at` / `updated_at` | TIMESTAMPTZ | ✓ | |

UNIQUE 部分: `(route_id) WHERE is_active = true`（同一ルートで複数アクティブを禁止）

---

### 3-8. narrative_fragments

スポット毎の物語片（Act 1a / Act 1b / Act 2 / F7断片 / F7全文）。

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `narrative_id` | UUID | ✓ | FK → narratives.id |
| `spot_id` | UUID | ✓ | FK → spots.id |
| `act_1a_text` | TEXT | | 60字上限 |
| `act_1b_text` | TEXT | | 50字上限 |
| `act_2_text` | TEXT | | 30字上限 |
| `f7_fragment` | TEXT | ✓ | 30〜40字 |
| `f7_full` | TEXT | ✓ | 120字上限 |
| `created_at` / `updated_at` | TIMESTAMPTZ | ✓ | |

UNIQUE: `(narrative_id, spot_id)`

**バリデーション:**
- アプリケーション層で文字数上限チェック
- ルート最終スポット（is_final）の f7_full は「完結」で終わる（次スポット引力なし）

---

### 3-9. badges（称号マスタ）

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `code` | TEXT | ✓ | 内部識別子（例: `first_step`, `route_complete_nakameguro_1`） |
| `category` | TEXT | ✓ | A〜J（visit / route_complete / story / founder / seasonal / cumulative / area / rare / event / contextual） |
| `name_ja` | TEXT | ✓ | 例: 「中目黒橋の記憶」 |
| `subtitle_en` | TEXT | ✓ | 例: 「Memory of Nakameguro Bridge」 |
| `rarity` | INT | ✓ | 1〜5 |
| `description` | TEXT | | 付与条件の説明 |
| `condition_type` | TEXT | ✓ | first_visit / route_complete / cumulative_count / date_range / area_master 等 |
| `condition_params` | JSONB | ✓ | 条件パラメータ（例: `{"route_id": "..."}`、`{"count": 10}`、`{"from": "03-20", "to": "04-10"}`） |
| `spot_id` | UUID | | スポット固有称号の場合 |
| `route_id` | UUID | | ルート固有称号の場合 |
| `area_name` | TEXT | | エリア称号の場合 |
| `is_active` | BOOLEAN | ✓ | |
| `created_at` / `updated_at` | TIMESTAMPTZ | ✓ | |

インデックス: `code` UNIQUE, `(condition_type, is_active)`

詳細は [62_badge_logic.md](./62_badge_logic.md) 参照。

---

### 3-10. badge_assignments（称号付与履歴）

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `user_id` | UUID | ✓ | FK → users.id |
| `badge_id` | UUID | ✓ | FK → badges.id |
| `triggered_by_stamp_event_id` | UUID | | 付与トリガーとなった押印 |
| `acquired_at` | TIMESTAMPTZ | ✓ | |

UNIQUE: `(user_id, badge_id)` （同じ称号は1回しか付与しない）
インデックス: `(user_id, acquired_at DESC)`

**永続・削除不可:** DELETE文を発行しない。ライフログの信頼性の根幹。

---

### 3-11. user_route_progress

ユーザー × ルートの進行状態。

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `user_id` | UUID | ✓ | |
| `route_id` | UUID | ✓ | |
| `status` | TEXT | ✓ | 'not_started' \| 'in_progress' \| 'completed' |
| `started_at` | TIMESTAMPTZ | | |
| `completed_at` | TIMESTAMPTZ | | |
| `stamps_collected` | INT | ✓ | 0 |
| `total_spots` | INT | ✓ | このルートの全スポット数 |

UNIQUE: `(user_id, route_id)`

---

### 3-12. trigger_qrs（B② QR/NFC設置場所マスタ）

スポットそのもののQR（spots.qr_token）とは別。B②入口専用。

| カラム | 型 | NN | 説明 |
|---|---|---|---|
| `id` | UUID | ✓ | |
| `qr_token` | TEXT | ✓ | UNIQUE |
| `location_type` | TEXT | ✓ | 'cafe' \| 'shop' \| 'tourism_info' \| 'hotel' \| 'station' \| 'cultural' \| 'mall' |
| `partner_name` | TEXT | | 設置店舗名 |
| `address` | TEXT | | |
| `linked_route_ids` | UUID[] | | このQRから案内するルート群 |
| `is_active` | BOOLEAN | ✓ | |
| `created_at` / `updated_at` | TIMESTAMPTZ | ✓ | |

詳細は [60_stamp_logic.md](./60_stamp_logic.md) 参照。

---

## 4. PostGIS クエリ例

### 4-1. 半径50m以内判定

```sql
SELECT id, ST_Distance(location, ST_SetSRID(ST_MakePoint($lng, $lat), 4326)::geography) AS d
FROM spots
WHERE ST_DWithin(
  location,
  ST_SetSRID(ST_MakePoint($lng, $lat), 4326)::geography,
  50  -- メートル
);
```

### 4-2. 現在地周辺のルート（マップ表示）

```sql
SELECT DISTINCT r.*
FROM routes r
JOIN routes_spots rs ON rs.route_id = r.id
JOIN spots s ON s.id = rs.spot_id
WHERE r.is_published = true
  AND ST_DWithin(
    s.location,
    ST_SetSRID(ST_MakePoint($lng, $lat), 4326)::geography,
    2000  -- 2km
  );
```

---

## 5. マイグレーション順序

1. `users`
2. `routes`, `spots`, `routes_spots`
3. `trigger_qrs`
4. `narratives`, `narrative_fragments`
5. `badges`
6. `stamp_events`
7. `stamps`（トリガー関数含む）
8. `badge_assignments`
9. `user_route_progress`

---

## 6. シードデータ（Phase 1パイロット）

- パイロットエリア: **中目黒**
- ルート: 1〜2本（カテゴリ `discover` + `eat`）
- スポット: ルートあたり3〜5箇所
- 称号: カテゴリA（来訪記録）・B（ルート完走）・C（物語完結）の MVP分のみ

具体的なスポット選定は [Owner決裁待ち](./90_open_questions.md) 参照。
