# 80. 開発ハンドオフ（別AI・共同開発者向け）

> 最終更新: 2026-05-31
> 関連: [README.md](./README.md) / [81_current_state_audit.md](./81_current_state_audit.md)

---

## このファイルの対象

- SHUIN Phase 1 MVP の **実装担当者**（別AI / 人間エンジニア）
- 既存 Vercel版（<https://stump-event.vercel.app/>）の保守・拡張を引き継ぐ者

---

## 1. 最初にやること

### 1-1. ドキュメント読込

順序:

1. [README.md](./README.md) — フォルダ全体の地図
2. [00_product_overview.md](./00_product_overview.md) — SHUIN とは
3. [10_glossary.md](./10_glossary.md) — 用語定義（**最重要**）
4. [70_phase1_scope.md](./70_phase1_scope.md) — 実装範囲
5. [71_non_goals.md](./71_non_goals.md) — 作らないもの
6. [81_current_state_audit.md](./81_current_state_audit.md) — 現コードベース現状監査

### 1-2. 環境構築

```bash
# 1. リポジトリクローン（Owner支給のGitリポジトリURL）
git clone <repo_url>
cd shuin

# 2. 依存インストール
pnpm install   # or npm/yarn

# 3. 環境変数
cp .env.example .env.local
# 必要な値を Owner から受領:
# - DATABASE_URL
# - FIREBASE_ADMIN_SDK
# - GOOGLE_MAPS_API_KEY
# - SENTRY_DSN

# 4. DBマイグレーション
pnpm db:migrate

# 5. 起動
pnpm dev
```

詳細な環境変数はOwner より別途共有（Notion or 1Password 等）。

---

## 2. ブランチ運用

```
main                       ← 本番。Vercel本番デプロイ
develop                    ← 統合ブランチ。Vercel preview
feature/xxx                ← 機能ブランチ
fix/xxx                    ← 修正ブランチ
chore/terminology-migration ← 用語マイグレーション専用
```

ルール:
- `main` への直接コミット禁止
- `develop` → `main` のマージは Owner承認必須
- PR は **1論点1PR**。用語マイグレーションは機能PRと混ぜない

---

## 3. PR 規約

### PR タイトル

```
[type] 概要

type:
- feat       新機能
- fix        バグ修正
- refactor   リファクタ
- docs       ドキュメント
- chore      雑務
- terminology  用語マイグレーション専用
```

### PR 説明テンプレート

```markdown
## 概要
何をやったか1〜2行

## 関連docs
- docs/XX_xxx.md §X

## 変更点
- ...

## スコープ確認
- [ ] docs/70_phase1_scope.md の範囲内
- [ ] docs/71_non_goals.md に含まれていない

## 用語確認
- [ ] docs/10_glossary.md §0-6 の廃止語が含まれていない
- [ ] UI文言が docs/10_glossary.md §0-5 に準拠

## テスト
- [ ] ユニットテスト追加
- [ ] E2Eテスト追加（必要に応じて）
- [ ] 手動QA実施

## スクリーンショット（UI変更時）
...
```

---

## 4. コーディング規約

### 4-1. 言語・フレームワーク

| 領域 | 採用 |
|---|---|
| 言語 | TypeScript |
| フロント | Next.js 14+ (App Router) |
| バック | Next.js API Routes（薄い） + 別Node.jsサーバー（Fastify、業務ロジック厚い場合） |
| DB | PostgreSQL + PostGIS、Prisma ORM |
| 認証 | Firebase Auth |
| マップ | Google Maps Platform |
| UIライブラリ | Tailwind CSS、shadcn/ui（推奨） |
| アニメ | Framer Motion（Web） |
| アイコン | Lucide React |

### 4-2. 命名規約

- ファイル: `kebab-case.ts`
- コンポーネント: `PascalCase.tsx`
- 関数・変数: `camelCase`
- 定数: `SCREAMING_SNAKE_CASE`
- DB識別子: `snake_case`（英語固定。[10_glossary.md §0-3](./10_glossary.md) 参照）

### 4-3. ディレクトリ構成（推奨）

```
src/
├── app/                     # Next.js App Router
│   ├── (public)/            # 未認証ルート
│   ├── (auth)/              # 認証必要ルート
│   ├── api/v1/              # API Routes
│   └── layout.tsx
├── components/              # UIコンポーネント
│   ├── ui/                  # shadcn/ui
│   ├── ceremony/            # 押印セレモニー
│   └── ...
├── lib/
│   ├── db/                  # Prisma client
│   ├── auth/                # Firebase Admin
│   ├── geo/                 # Haversine等
│   └── ...
├── hooks/                   # React hooks
├── stores/                  # Zustand等
├── types/                   # 型定義
└── styles/                  # Tailwind config 等

docs/                        # 本フォルダ
prisma/                      # スキーマ
tests/                       # テスト
```

### 4-4. テスト

| 種類 | ツール |
|---|---|
| ユニット | Vitest |
| コンポーネント | React Testing Library |
| E2E | Playwright |
| API | Vitest + Supertest |

必須テスト対象:
- 押印ロジック（[60_stamp_logic.md §10](./60_stamp_logic.md)）
- 称号付与ロジック（[62_badge_logic.md §10](./62_badge_logic.md)）
- 重複防止・レートリミット

---

## 5. CI / CD

| ステップ | ツール |
|---|---|
| Lint | ESLint + Prettier |
| 型チェック | tsc --noEmit |
| ユニットテスト | Vitest |
| 用語チェック | カスタムスクリプト（[11_terminology_migration.md §F](./11_terminology_migration.md)） |
| デプロイ | Vercel（preview / production） |

### 5-1. 用語チェックCI

```yaml
- name: Terminology check
  run: |
    if grep -rin "スタンプラリー\|チェックイン\|ラリー\|クエスト\|ポータルクエスト" \
       --include="*.tsx" --include="*.ts" --include="*.md" src/ docs/; then
      echo "❌ 廃止語が混入。docs/10_glossary.md §0-6 を参照"
      exit 1
    fi
```

---

## 6. ローカル開発の注意点

| 項目 | 補足 |
|---|---|
| GPSテスト | Chrome DevTools → Sensors → Override Geolocation で中目黒座標を設定 |
| QRテスト | spots.qr_token を手動入力で代用可能（モバイル実機なくても進められる） |
| PostGIS拡張 | ローカルPostgreSQLに `CREATE EXTENSION postgis;` 必要 |
| Firebase Auth | エミュレータ使用推奨（開発時） |

---

## 7. デプロイ・運用

### 7-1. 環境

| 環境 | URL | 用途 |
|---|---|---|
| Local | http://localhost:3000 | 開発 |
| Preview | vercel自動URL | PR毎 |
| Staging | shuin-staging.vercel.app | 結合テスト |
| Production | shuin.app（TBD） | 本番 |

### 7-2. 監視

- **Sentry**: エラー監視。リリース毎にバージョンタグ付与
- **Vercel Analytics**: パフォーマンス
- **Retool**: KPIダッシュボード（運営確認用）

---

## 8. Owner への報告・承認フロー

| ケース | 報告先 | タイミング |
|---|---|---|
| 仕様の解釈に迷う | Owner（HAYASHI） | docs/ で曖昧な箇所を発見した時点 |
| 機能スコープ拡張 | Owner | 着手前 |
| 重大バグ・障害 | Owner + Sentry通知 | 即時 |
| マイルストーン到達 | Owner | 週次定例（曜日要相談） |
| KPI測定結果 | Owner | 月次 |

---

## 9. 別AIに渡す場合の最短プロンプト

```
このフォルダ docs/ は SHUIN（来訪証明型リアル連動ゲーム）の Phase 1 MVP 仕様書です。

【最優先で読む】
1. docs/README.md
2. docs/00_product_overview.md
3. docs/10_glossary.md ← 用語は厳守
4. docs/70_phase1_scope.md
5. docs/71_non_goals.md

【実装着手前に読む】
6. docs/20_user_flows.md
7. docs/30_data_model.md
8. docs/40_api_spec.md
9. docs/50_screens_mvp.md
10. docs/80_dev_handoff.md（このファイル）
11. docs/81_current_state_audit.md

【ルール】
- 廃止語（スタンプラリー / チェックイン / スキャン / クエスト / ラリー / ポータルクエスト）は使用禁止
- DB識別子は英語固定（route, stamp_event, badge等）
- スコープ外実装はPR時に明示
- 不明点は Owner（HAYASHI）に確認

【既存実装】
<https://stump-event.vercel.app/> を継続拡張。
現状監査は docs/81_current_state_audit.md。
用語マイグレーションは docs/11_terminology_migration.md。

【最重要設計原則】
「面白さの最低ライン」3点を死守：
1. 押印セレモニー（重み）
2. F7物語片（次への引力）
3. ルート完走称号カード（SNSシェア訴求）
```

---

## 10. よくある質問（FAQ）

### Q1. 用語が docs/ で完全に統一されていない箇所があったら？
A. [10_glossary.md](./10_glossary.md) を正本とする。docs/ 内の不整合はPRで修正。

### Q2. 仕様書（SHUIN_統合仕様書.md）と docs/ が食い違ったら？
A. **正本（SHUIN_統合仕様書.md）が優先**。docs/ は派生物。Owner に報告して両方更新。

### Q3. 「Phase 2 以降」となっている機能を Phase 1 で実装したい
A. Owner決裁が必要。PR説明に理由を明記。

### Q4. デザイナーがいない / 称号カードビジュアルが作れない
A. [90_open_questions.md](./90_open_questions.md) #3 参照。Owner に外部委託の検討依頼。

### Q5. テスト用のスポット座標は？
A. 中目黒駅周辺（緯度 35.644, 経度 139.698）周辺。具体的なスポットは Owner支給の seed.sql。

---

## 11. ライセンス・知財

- **コード**: Private リポジトリ。SPANS Inc. 帰属
- **ナラティブ**: SPANS Inc. 著作権。AI生成史実の利用は事前承認必須
- **称号デザイン**: SPANS Inc. 帰属
- **ロゴ・商標**: SPANS Inc.（商標出願は Owner対応）

外部公開コード（OSS）は GitHub Organizations のpublicリポジトリで別管理。
