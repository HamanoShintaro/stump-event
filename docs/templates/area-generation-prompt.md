# エリア定義 生成プロンプト（再現性エンジン stage2）

このプロンプトをAIに与えると、`build-route.mjs` がそのまま食える **エリア定義 `.mjs` のドラフト**を出力する。
史実は必ず出典付き。GPS・許諾・画像は人手検証フラグを付ける（属人20%）。出力例＝`scripts/areas/iwatsuki.mjs`。

---

## 入力（埋める）
- 駅 / エリア名：
- 路線（line / station / station_order）：
- 狙い・テーマ（任意。例「城下町・食べ歩き多め」）：
- 既知の核となる問い（任意。例「なぜ岩槻は人形の街になったのか」）：

## 指示（AIへ）
あなたは街歩き謎解きの設計者。指定エリアの「エリア定義」を `scripts/areas/iwatsuki.mjs` と同じ構造で出力せよ。

1. **史実接地**：まず公開史実を出典付きで収集し、各 clue/surprise の根拠に出典をコメント併記（`// 出典: …`）。出典のない断定はしない。諸説は「諸説」と明記。
2. **構造**：5スポット。各スポットに `name / spot_type / description / address / lat / lng / clue / surprise / hook`。
   - 物語：clue＝その地の「問い・手がかり」、surprise＝現地で確かめる小さな発見、hook＝次スポットへの引力。全体は1つの大きな問いに収束させる。
   - **回遊ルール（必須）**：買い物・休憩・食事のいずれかを最低1スポット入れる（岩槻FB）。
3. **自答**：大きな問い `question` ＋ 4択 `choices`（A〜D）。各択に `badge`（code / name_ja / subtitle_en / description / rarity 3〜4）。完走 `completion_badge` も付ける。
4. **横断称号**：`tags[]` にエリアを跨ぐ主題語（例: 人形 / 城下町 / 暗渠）。
5. **20%フラグ（人手検証）**：`lat/lng` は暫定値とし、冒頭コメントに「要GPS実測（半径50m）」。施設/店舗は「要許諾」。画像は G4 stage3 で生成。
6. **出力**：実行可能な `.mjs`（`export default {…}`）のみ。

## 出力が満たすべき検証（build-route のルール）
- `slug / title / spots` 必須。
- 各 spot に `name` ＋ **数値の** `lat/lng`。
- `choices` は4択ちょうど。
- 買い物 / 休憩 / 食事 を最低1スポット。

## 出力後の手順
1. `scripts/areas/<slug>.mjs` に保存。
2. `node scripts/build-route.mjs scripts/areas/<slug>.mjs` で**検証エラー0**を確認。
3. 人手検証チェックリスト（`_aro_review/岩槻_投入ハンドオフ…md` 雛形）でGPS実測・出典・許諾・画像を確認。
4. 出力JSON（routes/spots/overlay/badges）をDB・mock.tsへ投入。
