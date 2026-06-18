# ルート入稿テンプレ v2（用語v1.1準拠）

新エリアを足すときは、この型に沿って `scripts/areas/<slug>.mjs` を作成し、
`node scripts/build-route.mjs scripts/areas/<slug>.mjs` を実行すると、
アプリのデータ形（route / spots / mock.tsオーバーレイ / badges / 自答クイズ）が生成されます。

記入例: `scripts/areas/_example_jiyugaoka.mjs`（自由が丘の実データ）

## 記入フィールド
- slug / area_name / title / description / category / prefecture / budget_tier
- tags（横断称号用） / completion_badge（完走称号: name_ja, subtitle_en, description）
- question（自答の問い） + choices A〜D（text / description / badge）
- spots[]（5件）: name / description / address / lat / lng（GPS実測）/ image_url
  - clue（手がかり：答えを言わない）
  - surprise（物理サプライズ：自力で気づく）
  - hook（次への引き：最終スポットは空でよい）

## 品質ゲート（人手必須）
史実の真偽（一次資料）／GPS実測座標／施設許諾・著作権／トンマナ。AIはF7・英subtitle・称号文の下書きまで。
