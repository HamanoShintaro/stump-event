# 40. API 仕様

> 最終更新: 2026-05-31 / 出典: SHUIN_統合仕様書.md §4-2, §4-3, §4-4
> 関連: [30_data_model.md](./30_data_model.md) / [60_stamp_logic.md](./60_stamp_logic.md)

---

## 1. 共通仕様

### 1-1. ベースURL

- 開発: `https://stump-event.vercel.app/api/v1`
- 本番: `https://api.shuin.app/v1` （TBD）

### 1-2. 認証

- **Firebase Authentication** の ID Token を `Authorization: Bearer {token}` ヘッダで送信
- サーバー側で Firebase Admin SDK で検証
- 未認証エンドポイント: `/health`, `/routes`（一覧取得・公開ルートのみ）

### 1-3. レスポンス形式

```typescript
// 成功時
{
  data: T,
  meta?: { /* pagination 等 */ }
}

// エラー時
{
  error: {
    code: string,    // 'INVALID_DISTANCE' 等
    message: string, // 人間向け（i18n対応）
    details?: any
  }
}
```

### 1-4. エラーコード一覧

| code | HTTP | 説明 |
|---|---|---|
| `UNAUTHORIZED` | 401 | 認証エラー |
| `FORBIDDEN` | 403 | 権限エラー |
| `NOT_FOUND` | 404 | リソース不存在 |
| `INVALID_DISTANCE` | 400 | 押印時に半径50m超 |
| `DUPLICATE_STAMP` | 409 | 同日内重複押印 |
| `RATE_LIMITED` | 429 | レートリミット超過 |
| `INVALID_QR_TOKEN` | 400 | QRトークン不一致 |
| `INTERNAL_ERROR` | 500 | サーバー内部エラー |

### 1-5. レートリミット

| エンドポイント | 制限 |
|---|---|
| `POST /checkin` | 10件/分/user |
| `GET /*` 全般 | 100件/分/user |
| `POST /*` 全般 | 30件/分/user |

---

## 2. エンドポイント一覧（Phase 1 MVP）

| Method | Path | 認証 | 用途 |
|---|---|---|---|
| GET | `/health` | × | ヘルスチェック |
| POST | `/auth/sync` | ✓ | Firebase認証後のユーザー同期 |
| GET | `/routes` | × | ルート一覧（公開分） |
| GET | `/routes/{id}` | △ | ルート詳細 |
| GET | `/routes/{id}/completion-status` | ✓ | ルート完走情報 |
| GET | `/routes/nearby` | × | 現在地周辺ルート（マップ用） |
| GET | `/spots/{id}` | △ | スポット詳細 |
| POST | `/checkin` | ✓ | 押印（来訪証明） |
| POST | `/triggers/{qr_token}` | △ | B② QRトークン読込 |
| GET | `/me` | ✓ | 自分のプロフィール |
| GET | `/me/lifelog` | ✓ | SHUIN帳（自分の押印履歴） |
| GET | `/me/badges` | ✓ | 自分の称号一覧 |
| GET | `/me/routes` | ✓ | 自分のルート進行状態 |
| PATCH | `/me/notification-settings` | ✓ | プッシュ通知設定 |

---

## 3. 主要エンドポイント詳細

### 3-1. POST /checkin（押印）

**最重要エンドポイント。** 押印セレモニーの全データを1レスポンスで返す。

#### Request

```typescript
POST /api/v1/checkin
Authorization: Bearer {firebase_id_token}
Content-Type: application/json

{
  spot_id: string,           // UUID
  method: 'gps' | 'qr',
  lat?: number,              // method=gps 時必須
  lng?: number,              // method=gps 時必須
  accuracy_m?: number,       // GPS精度（クライアント送信）
  qr_token?: string,         // method=qr 時必須
  route_id?: string          // ルートコンテキスト（マップから来た場合）
}
```

#### Response (200 OK)

```typescript
{
  data: {
    checkin_id: string,
    visitor_number: number,      // F8表示用「あなたは#47番目」
    titles_remaining: number,    // F8表示用「次称号まであと何スポット」

    // 称号（ポストスキャンカード表示）
    title: {
      badge_id: string,
      name: string,              // 例:「中目黒橋の記憶」
      subtitle_en: string,       // 例:「Memory of Nakameguro Bridge」
      rarity: 1 | 2 | 3 | 4 | 5,
      visited_at: string,        // ISO8601
      is_new: boolean            // 今回初獲得かどうか
    } | null,

    // ナラティブ
    narrative: {
      f7_fragment: string,       // 30〜40字。セレモニーF7に表示
      f7_full: string,           // 120字以内。ポストスキャンカードに表示
    },

    // 次スポット誘導
    next_spot: {
      id: string,
      name: string,
      distance_m: number,
      is_final: boolean          // trueでCTAを「ルート完走 — 称号を受け取る」に変更
    } | null,                    // ルート最終押印後はnull

    // 副次的に獲得した称号（複数同時獲得あり）
    additional_badges: Array<{
      badge_id: string,
      name: string,
      subtitle_en: string,
      rarity: number
    }>
  }
}
```

#### エラー例

```typescript
// 距離超過
{ error: { code: 'INVALID_DISTANCE', message: '...あと約 35m', details: { distance_m: 85 } } }

// 重複押印
{ error: { code: 'DUPLICATE_STAMP', message: '既に今日このスポットを訪れています' } }
```

詳細ロジックは [60_stamp_logic.md](./60_stamp_logic.md) 参照。

---

### 3-2. GET /routes/{id}/completion-status

最終スポット押印後、完走カードに表示する情報を取得。

#### Request

```
GET /api/v1/routes/{route_id}/completion-status
Authorization: Bearer {firebase_id_token}
```

#### Response (200 OK)

```typescript
{
  data: {
    route_id: string,
    route_name: string,
    completion_title: {
      badge_id: string,
      name: string,                 // 例:「目黒川、昭和の痕跡の踏破者」
      subtitle_en: string,
      rarity: 2 | 3,
    },
    spots_summary: Array<{
      spot_id: string,
      spot_name: string,
      visited_at: string,
    }>,
    final_f7_full: string,          // ルート最終スポットのF7全文（完結版）
    is_first_completion: boolean,
    share_image_url: string         // SNSシェア用静止画URL（事前生成 or オンザフライ）
  }
}
```

---

### 3-3. GET /routes/nearby

マップ画面のピン取得用。

#### Request

```
GET /api/v1/routes/nearby?lat=35.644&lng=139.698&radius_m=2000
```

#### Response (200 OK)

```typescript
{
  data: {
    routes: Array<{
      id: string,
      name: string,
      area_name: string,
      category: string,
      scene_tags: string[],
      route_type: 'platform' | 'facility' | 'event' | 'sponsored',
      cover_image_url: string,
      first_spot: {
        id: string,
        name: string,
        location: { lat: number, lng: number }
      },
      rarity_estimated_min: number,
      // イベント限定の場合
      valid_until?: string,
      days_remaining?: number
    }>
  }
}
```

---

### 3-4. POST /triggers/{qr_token}（B② QR読込）

協力店のQRを読んだ際の起動API。

#### Request

```
POST /api/v1/triggers/{qr_token}
Authorization: Bearer {firebase_id_token}  // 未認証でも返却可（ルート情報のみ）
```

#### Response (200 OK)

```typescript
{
  data: {
    trigger: {
      id: string,
      location_type: string,
      partner_name: string
    },
    act_0: {                              // 認証済ユーザーかつ初回トリガーの場合のみ返却
      text: string,                       // 80字
      narrative_title: string
    } | null,
    linked_routes: Array<{               // このQRに紐づくルート群
      id: string,
      name: string,
      category: string,
      first_spot: { id, name, distance_m },
      rarity_estimated_min: number
    }>
  }
}
```

---

### 3-5. GET /me/lifelog（SHUIN帳）

#### Request

```
GET /api/v1/me/lifelog?limit=50&offset=0&order=desc
```

#### Response (200 OK)

```typescript
{
  data: {
    stamps: Array<{
      stamp_id: string,
      spot: { id, name, address, cover_image_url },
      route: { id, name, area_name } | null,
      acquired_at: string,
      visitor_number: number,
      narrative_fragment: {
        f7_full: string                // 再読可能
      }
    }>
  },
  meta: { total: number, limit: number, offset: number }
}
```

---

### 3-6. GET /me/badges

#### Request

```
GET /api/v1/me/badges?category=B&rarity_min=2
```

#### Response (200 OK)

```typescript
{
  data: {
    badges: Array<{
      badge_id: string,
      name: string,
      subtitle_en: string,
      rarity: number,
      category: string,
      acquired_at: string,
      route?: { id, name },
      area_name?: string
    }>,
    summary: {
      total_count: number,
      rarity_breakdown: { '1': number, '2': number, '3': number, '4': number, '5': number }
    }
  }
}
```

---

## 4. WebSocket / リアルタイム通知（Phase 2以降）

Phase 1 MVPでは **プッシュ通知（FCM）** のみで対応。WebSocketは未実装。

| 通知 | トリガー |
|---|---|
| Act 1a / Act 1b / Act 2 検知 | クライアント側GPSポーリング検知（サーバー通知不要） |
| 称号獲得 | FCM（バックグラウンド時のみ） |
| 期限切れ間近 | スケジュールジョブから FCM |

---

## 5. API Versioning

- URLパス先頭に `/v1` を含める
- Breaking change時は `/v2` を新設し、`/v1` を最低6ヶ月維持
- 非破壊的追加（新フィールド追加）は `/v1` 内で実施可

---

## 6. 監視・ロギング

| 観点 | ツール |
|---|---|
| エラー監視 | Sentry |
| パフォーマンス | Vercel Analytics |
| 不正検知 | `stamp_events` のGPS精度・距離分布を週次でレビュー |

監査用の重要ログ:
- 全 `/checkin` リクエスト/レスポンス（個人情報マスク）
- 認証失敗
- レートリミット発火
