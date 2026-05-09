<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 開発方針 (Architecture Guidelines)

- **ネイティブアプリ化を見据えた責務分割**: 将来的な React Native 等でのネイティブアプリ化を想定し、「API通信（Firebase等）や状態管理を行うロジック（Custom Hooks）」と「DOMやCSSに依存するUIコンポーネント」を明確に分離した設計を徹底してください。
- **Hooksの活用**: ロジック部分は可能な限り `src/hooks/` などの別ファイルに切り出し、UIコンポーネント側はHooksを呼び出して状態を受け取るだけのクリーンな実装（UIとロジックの分離）を行ってください。
