# 82. 実装差分 / 仕様errata（2026-06-21）

> 2026-05-31版の各docと現行実装の世代差を解消するための事実訂正。判断・評価は `_aro_review/SHUIN_総合評価_2026-06-21.md` を参照。
> 本docは事実の現状記録であり、仕様の最終決裁は Owner（HAYASHI）。

## 1. 技術スタック（70_phase1_scope §2-4 の更新）
| 項目 | 旧doc | 実装の現状 |
|---|---|---|
| 認証 | Firebase Authentication | **Supabase Auth**（Google OAuth） |
| DB | PostgreSQL + PostGIS（Railway） | **Supabase**（Postgres + PostGIS） |
| 地図 | Google Maps Platform | **Leaflet / OpenStreetMap（CartoDB）** |
| API層 | Vercel（フロント・APIホスティング） | **API層なし**（クライアントから Supabase 直。押印はRPC化を改修パッケージで予定） |

## 2. パイロットエリア（70_phase1_scope §4 の更新）
- 旧doc: 中目黒（染物・目黒川）。
- 現状: **自由が丘**に移行し実装・公開済（問い×手がかり×最終自答→4称号分岐、起点=熊野神社）。**2本目=岩槻**を再現性エンジンで定義生成済（`scripts/areas/iwatsuki.mjs`、未デプロイ）。

## 3. 画面URL（50_screens_mvp との差）
仕様の `/checkin` `/lifelog` `/badges` 等は入れ子URLで実装：押印=`/routes/[id]/spot/[spotId]`、SHUIN帳=`/mypage`。機能的に充足、URL名のみ差。`/onboarding` は実装済。

## 4. 仕様に無い新機能（実装済）
- **完走自答**：4択クイズ分岐（`completion_ceremony_type='quiz_4choice'`）で授かる称号が変わる。自由が丘ナラティブの核。
- **BadgeReveal**：称号を封印→タップ開封→レア度連動演出（変動報酬）。
- **RouteBadgeTeaser**：ルート詳細で未取得称号をシルエット予告（初回希少性）。
- **日記**：mypageに来訪の時系列ログ。
- **再現性エンジン**：`scripts/build-route.mjs` ＋ 入稿テンプレ `route_input_v2.md` ＋ 生成プロンプト `area-generation-prompt.md`。area定義に line/station（路線コンプリート用）。

## 5. 完成品の定義（Owner指示・2026-06-18）
「Phase1単一エリアβ」→ **「拡大ベータ（複数エリア＋構想の全機能）」**。拡大の律速は機能数でなく〈再現性エンジン＝エリアを安く速く量産する仕組み〉。自由が丘は1本目、岩槻が2本目。

## 6. バックエンド整合性（要対応・改修パッケージ提示済）
仕様40/60が要求する以下が**未実装**。サーバー側RPC化で対応予定（`_aro_review/BE_01_stamp_checkin.sql` ほか、濱野さんハンドオフ）。
- 押印のサーバー側距離再判定（現状クライアントのみ＝GPS偽装に無防備）。
- 重複押印防止・レートリミット。
- `visitor_number` の正値化（現状 固定/誤算出）。
- 完走の永続化（`user_routes.status='completed'` 未更新）→ KPI完走率・リピート率が計測不能。

## 7. 社会的証明の是正（2026-06-21）
`routeStats.ts` の参加者数・お気に入り数の疑似乱数による捏造表示を撤去し、`user_routes`・`user_bookmarks` の**実カウント**に変更（0件は非表示）。
