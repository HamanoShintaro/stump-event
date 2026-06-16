<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 開発方針 (Architecture Guidelines)

- **ネイティブアプリ化を見据えた責務分割**: 将来的な React Native 等でのネイティブアプリ化を想定し、「API通信（Firebase等）や状態管理を行うロジック（Custom Hooks）」と「DOMやCSSに依存するUIコンポーネント」を明確に分離した設計を徹底してください。
- **Hooksの活用**: ロジック部分は可能な限り `src/hooks/` などの別ファイルに切り出し、UIコンポーネント側はHooksを呼び出して状態を受け取るだけのクリーンな実装（UIとロジックの分離）を行ってください。

# トンマナ・用語集 (Tone and Manner / Glossary)

本プロジェクト（SHUIN）では、AIエージェントがテキストやUIを作成・修正する際、以下の言葉のルール（トンマナ）を必ず守ってください。

1. **基本コンセプトの名称**（用語v1.1準拠）
   - 「スタンプラリー」「ラリー」は**使用禁止**。ユーザー向け（UI・コピー）では経路体験を**「ルート」**、ルートに紐づく物語は**「物語」**と表記してください。
   - **「ナラティブ」はユーザー向けでは使用しないでください**。社内・コード（コメント／概念語）に限り可。ユーザーに見える文言では「ルート」または「物語」へ置き換えます。
   - 「スタンプ」はユーザー向けでは**「押印」（取得行為）／「SHUIN」（収集物）**を使用。アプリ名は「SHUIN」。「勝手にスタンプラリー」「みんなのスタンプラリー」等の旧名称は使用しないでください。

2. **ユーザー体験（UX）の表現**
   - ゲームライクな表現（「挑戦する」「挑む」「クリアする」など）は避け、散策的・風流な表現（「めぐる」「巡る」「訪れる」など）を優先して使用してください。（例: このラリーに挑戦する → このナラティブを巡る）
   - 「回遊」という言葉は、ユーザーの文脈に合わせて「シナリオ」や「文脈」という言葉で表現してください。

3. **コピーライティング**
   - サブタイトル: 「まちのしるし」
   - メインコピー: 「街を歩いて、しるしを刻む。」
   - サブコピー: 「訪れた場所が、あなたのしるしになる。」

# UI・コンポーネント実装のルール

- **アラート/確認モーダル**: ブラウザ標準の `window.alert` や `window.confirm` は**使用禁止**です。代わりに、`useCustomAlert` フックを使用し、共通のカスタムモーダルUI（`showAlert`）を呼び出してください。

# UI・デザインのトンマナ (UI & Design Guidelines)

サイトの「散策的・風流」かつ「プレミアム」な統一感を維持するため、AIエージェントがCSSやUIを生成・修正する際は以下のルールを厳守してください。

## 1. カラーとその意味 (Colors & Semantics)
以下に定義された `globals.css` のCSS変数を厳格に使用し、直接のカラーコード（例: `#000` や `#ff0000` など）は使用しないでください。
- **Primary（朱色 / Shu-iro）**: `var(--primary-color)` 
  - **意味・用途**: メインアクション（ナラティブへの参加等）、重要なアイコン、ピン。
- **Accent（黄金 / Kogane）**: `var(--accent-color)`
  - **意味・用途**: プレミアムな体験、特別感、バッジ、星マーク、装飾ライン。
- **Background（和紙 / Washi）**: `var(--bg-color)`
  - **意味・用途**: アプリ全体の背景色。温かみ、アナログ感。
- **Text & Secondary（墨 / Sumi）**: `var(--text-color)`
  - **意味・用途**: 主要テキスト、サブボタンの枠線。完全な黒（#000）は避ける。

## 2. フォントとその意味 (Typography)
- 和文: `Noto Sans JP`, `Yu Gothic` (読みやすさとモダンで風流な印象)
- 欧文: `Avenir Next`, `Söhne` (スタイリッシュでプレミアム感)
- ※ `var(--font-family)` として定義されています。

## 3. テキストサイズ階層 (Text Sizes)
一貫した階層構造を持たせてください。
- **H1**: `var(--font-size-h1)` (28px - 32px / bold) - ページタイトル
- **H2**: `var(--font-size-h2)` (20px - 24px / bold) - セクションタイトル
- **Body**: `var(--font-size-body)` (14px - 16px) - 通常テキスト
- **Small**: `var(--font-size-small)` (11px - 12px) - メタ情報（タグ、日付など）

## 4. ボタンデザインの統一 (Button Design)
UIパーツの散らかりを防ぐため、ボタンは以下の標準クラスを使用してください。インラインスタイルでのボタン独自実装は極力避けてください。
- **Primary Button (`.btn-primary`)**
  - 朱色背景、白文字。最も重要な1つのアクションに使用。
- **Secondary Button (`.btn-secondary`)**
  - 背景透明、墨色のアウトライン。必須ではないサブアクション（キャンセル・戻るなど）に使用。
