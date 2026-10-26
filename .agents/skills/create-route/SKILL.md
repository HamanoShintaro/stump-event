---
name: create-route
description: >-
  SHUINの新規ルート（物語・5スポット・4択の自答・称号・OpenAI画像・DB/mock.ts反映）を一貫して作成・検証・投入するスキル。
  ユーザーが「新しいルートを作りたい」「〇〇駅のルートを作成して」「ルートを追加して」と依頼したときに必ず使用する。
---

# SHUIN ルート作成スキル (`create-route`)

このスキルは、駅やエリア名・テーマから **「①史実・実在スポット調査＆ドラフト作成 → ②ハルシネーション・住所・電話番号・緯度経度の厳密検証 → ③OpenAIモデルによる画像生成 → ④Supabase非破壊UPSERT＆`mock.ts`反映」** までを一気通貫で実行するための標準ランブックです。

---

## 事前確認: OpenAI APIキーの安全な確認（Safe Credentials Protocol）

Step 3 で OpenAI の画像生成モデルを使用するため、作業開始時に `OPENAI_API_KEY` が `.env.local` または `~/.env` に設定されているか確認します（キーの値は絶対に出力しないこと）。

```bash
grep -sq "^OPENAI_API_KEY=" /Users/shintaro/stump-event/.env.local || grep -sq "^OPENAI_API_KEY=" ~/.env
```

- **終了コードが 0 以外（未設定）の場合**:
  画像生成ステップに進む前に、ユーザーへ以下のコマンドをターミナルで実行してキーを登録するよう案内してください（チャット欄へ直接貼らせないこと）：
  ```bash
  printf "Enter OPENAI_API_KEY (typing hidden): " && read -s val && echo && echo "OPENAI_API_KEY=$val" >> "/Users/shintaro/stump-event/.env.local" && echo "Saved."
  ```

---

## Step 1: 一次情報のWeb調査とエリア定義（`scripts/areas/<slug>.mjs`）の作成

**⚠️ 最重要原則: 記憶や推測でスポット名・住所・電話番号・緯度経度・歴史年号を書かないこと。**

1. **実在スポットと史実のWeb検索（`search_web`）**
   - 対象エリアの歴史・伝承・地形の一次情報／公的資料／信頼できる出典を `search_web` で調査します。
   - ルートを構成する **5つのスポット** を選定し、各スポットについて以下を必ず `search_web` で裏取りします：
     - **実在確認・営業状況**（閉業していないか）
     - **正確な住所（都道府県・市区町村・丁目・番地・号まで）** ※「〜周辺」などの曖昧な住所は禁止
     - **電話番号（店舗等で記載する場合）** が実在の公式情報と一致しているか
2. **ルート構成ルール（[docs/templates/route_input_v2.md](../../docs/templates/route_input_v2.md) 準拠）**
   - **禁止用語の厳守**: ユーザー向け文言に「スタンプラリー」「ラリー」「ナラティブ」「スタンプ」「挑戦する」「クリアする」は絶対に使わない（「ルート」「物語」「しるし」「押印」「SHUIN」「めぐる」「巡る」を使用）。
   - **回遊ルール（必須）**: 5スポットのうち最低1つは `spot_type` を `"買い物"` / `"休憩"` / `"食事"` のいずれかにする（他は `"見どころ"`）。
   - **物語の3要素**: 各スポットに `clue`（手がかり）、`surprise`（現地での発見）、`hook`（次スポットへの引き ※最終スポットは `""`）を設定し、最後に4択の `question` と `choices`（A〜D）へ収束させる。
3. **ファイルの保存**
   - `scripts/areas/<slug>.mjs` を作成します（参考実装: [scripts/areas/higashi_iwatsuki.mjs](../../scripts/areas/higashi_iwatsuki.mjs)）。

---

## Step 2: 座標の自動ジオコーディング校正 ＆ ファクトチェック検証ゲート

LLMが推測した緯度経度は100%ずれるため、**必ず以下の検証スクリプト＋独立サブエージェント検証**を通過させます。

### 2-1. ジオコーディング逆引き＆座標自動補正スクリプトの実行

国土地理院（GSI）API および OpenStreetMap（Overpass API）と照合し、スキーマ・禁止用語・住所番地・緯度経度のズレを検査＆自動補正します。

```bash
node .agents/skills/create-route/scripts/verify-and-geocode.mjs scripts/areas/<slug>.mjs --fix
```

- `--fix` を付けると、設定された住所・POI形状から逆引きした正確な座標（国土地理院 / OSM Overpass）で `.mjs` 内の `lat` / `lng` を自動上書きします。
- 補正後、再度 `--fix` なしで実行し、**エラー0件**であることを確認します：
  ```bash
  node .agents/skills/create-route/scripts/verify-and-geocode.mjs scripts/areas/<slug>.mjs
  ```

### 2-2. 独立サブエージェントによるハルシネーション＆実在性ファクトチェック

スクリプトが出力する「📋 ファクトチェック対象一覧（`description` および `mock.ts` オーバーレイに入る `f7_fragment` / `f7_full` を含む全テキスト）」を対象に、`invoke_subagent`（`research`）を起動して第三者ファクトチェックを行います。

- **サブエージェントへの指示内容**:
  1. **歴史的情報の裏取り**: 年号、人物名、寺社や街の由来、4択の解説（`description`, `clue`, `surprise`, `f7_full`）にハルシネーション（事実誤認や架空の逸話）がないか `search_web` で1件ずつ検証すること。
  2. **スポット実在・住所・電話番号の裏取り**: 全5スポットの名称・住所（番地まで）・電話番号（存在する場合）が実在のものと完全一致しているか確認すること。
  3. **緯度経度の最終確認**: 補正後の `lat` / `lng` が実際の施設位置（押印半径50m圏内）と合致しているか確認すること。
- 指摘事項があれば `scripts/areas/<slug>.mjs` を修正し、再度 2-1 の検証スクリプトを通します。

---

## Step 3: アイキャッチ＆スポット画像のハイブリッド生成（コスト＆クオリティ最適化）

クレジット消費を最小限に抑えつつ一覧画面の顔となるアイキャッチの品質を高めるため、**「アイキャッチ1枚のみOpenAI生成 ＋ スポット5枚はAntigravity内蔵 `image-generator` で多様化生成」** のハイブリッド方式で `public/images/<slug>/` に配置します。

### 3-1. ルートのアイキャッチ画像（`route-eyecatch.png` / 1枚のみ）を OpenAI で生成
```bash
node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs
```
- デフォルトで `route-eyecatch.png` 1枚のみを OpenAI（`gpt-image-1` / `gpt-image-1-mini`）で生成し、幅800pxに自動リサイズします。
- ※ 万一OpenAIクレジット残高切れ（`credit_balance_exhausted`）の場合は、アイキャッチも 3-2 の `image-generator`（ワイド俯瞰構図）で生成します。

### 3-2. 各スポット画像（`spot1.png` 〜 `spot5.png` / 5枚）を Antigravity 内蔵 `image-generator` で生成
Antigravity内蔵の `invoke_subagent`（`TypeName: "image-generator"`）を使用します。**全画像が同じ画風・色味・構図になるのを防ぐため、必ず以下の多様化ルールをプロンプトに適用してください**：

1. **同一の色味・和紙テクスチャ指定を繰り返さない**: 全スポットに「washi paper / vermilion and gold」を一律指定するのは禁止。
2. **スポットごとに「時間帯・アングル・画材タッチ」を必ず変える**:
   - **Spot 1 (`spot1.png`)**: 導入の空気感（爽やかな朝の光、ローアングルまたはアプローチ視点、透明感のある水彩・ガッシュ画調）
   - **Spot 2 (`spot2.png`)**: 買い物・甘味・建築ディテール（手元のクラフトや店頭の温もりに寄ったクローズアップ構図、柔らかな室内光・ボケ味のあるエディトリアルイラスト調）
   - **Spot 3 (`spot3.png`)**: 風景・水辺・街並み（奥行きのある一点透視または水面の反射を活かした構図、鮮やかな色彩のシネマティック・アニメーション背景画調）
   - **Spot 4 (`spot4.png`)**: 歴史・寺社・核心スポット（木漏れ日と深い陰影のコントラスト、重厚な建築ディテールを捉えたペン＆ウォッシュ調）
   - **Spot 5 (`spot5.png`)**: 結末の余韻（夕景・ゴールデンアワーまたは静謐な光、見上げる象徴的なアングル、余韻のある絵画調）
3. 生成後、以下のコマンドで `public/images/<slug>/` のスポット画像を軽量化（幅560px）します：
   ```bash
   for i in 1 2 3 4 5; do sips --resampleWidth 560 public/images/<slug>/spot${i}.png; done
   ```

---

## Step 4: Supabase DBへの非破壊UPSERTと `src/data/mock.ts` への反映

検証と画像生成が完了したら、一括デプロイスクリプトでDBとフロントエンドの両方に反映します。

```bash
# ドライランで確認
node .agents/skills/create-route/scripts/deploy-route.mjs scripts/areas/<slug>.mjs --dry-run

# 本番反映（Supabase routes/spots/badges への非破壊UPSERT + src/data/mock.ts 追記）
node .agents/skills/create-route/scripts/deploy-route.mjs scripts/areas/<slug>.mjs
```

### 最終確認と画像表示・リリース完了ゲート（必須）
1. **型チェック・ビルド確認**: `npx tsc --noEmit` および `npm run build` を実行し、エラーが0件であることを確認します。
2. **全体のファクト＆オーバーレイ最終確認**: [src/data/mock.ts](../../src/data/mock.ts) に追記されたオーバーレイ（`f7_fragment`, `f7_full`, `lat`, `lng`, `address`）および `public/images/<slug>/` 配下の全画像ファイル（`route-eyecatch.png`, `spot1.png`〜`spot5.png`）が実在し破損していないことを確認します。
3. **画像の本番反映（Gitコミット＆プッシュ）**:
   - Supabase DBには即座に反映されますが、`public/images/<slug>/` の画像ファイルと `src/data/mock.ts` はGitへプッシュされない限り本番サイト（Vercel）で画像が表示されません。
   - 必ず [AGENTS.md](../../AGENTS.md) の「AIリリース・品質保証規定（Step 1〜4）」に従い、ローカルコミット → サブエージェントQAレビュー → `git push origin main` → 画像がアクセス可能であることの確認まで完了させてからユーザーに報告してください。
