# ルート入稿テンプレ v2（用語v1.1準拠）

新エリアを足すときは、この型に沿って `scripts/areas/<slug>.mjs` を作成し、
`node scripts/build-route.mjs scripts/areas/<slug>.mjs` を実行すると、
アプリのデータ形（route / spots / mock.tsオーバーレイ / badges / 自答クイズ）が生成されます。

記入例: `scripts/areas/_example_jiyugaoka.mjs`（自由が丘の実データ）

## 記入フィールド
- slug / area_name / title / description / category / prefecture / budget_tier
- line / station / station_order（路線コンプリート用・任意。同一lineの全駅制覇で路線称号＝Phase2）
- tags（横断称号用） / completion_badge（完走称号: name_ja, subtitle_en, description）
- question（自答の問い） + choices A〜D（text / description / badge）
- spots[]（5件）: name / description / address / lat / lng（GPS実測）/ image_url
  - clue（手がかり：答えを言わない）
  - surprise（物理サプライズ：自力で気づく）
  - hook（次への引き：最終スポットは空でよい）

## 品質ゲート（人手必須）
史実の真偽（一次資料）／GPS実測座標／施設許諾・著作権／トンマナ。AIはF7・英subtitle・称号文の下書きまで。


## 回遊ルール（岩槻FBより・必須）
- 各ルートに **買い物/休憩/食事 のスポットを最低1つ**入れる（滞在時間・回遊の質・②掲載費導線）。各spotに `spot_type`（見どころ/買い物/休憩/食事）を付与。`build-route.mjs` が未充足を警告。
- **アイキャッチはイラスト化を基本**に（AI画像生成＋人手調整＝G4）。実写は現地撮影/施設提供がある場合のみ。
