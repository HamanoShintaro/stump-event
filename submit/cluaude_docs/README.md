# SHUIN 開発仕様 docs/

> 対象: SHUIN（シュイン） Phase 1 MVP — 共同開発者・別AIへのハンドオフ用仕様群
> 正本: `/Users/takaki/Documents/Claude/Projects/SPANS_Company/SHUIN_統合仕様書.md`
> 現行実装: <https://stump-event.vercel.app/>
> 最終更新: 2026-05-31

---

## このフォルダの目的

別AI／共同開発者が **SHUINの仕様を一意に理解し、Phase 1 MVPを実装できる** ことを目的としたMd群です。
正本仕様書（1,000行超）をテーマ別に分割し、各ファイルが自己完結的に読めるよう再構成しています。

不整合を発見した場合は **正本（SHUIN_統合仕様書.md）が優先** されます。本docs/は正本の派生物です。

---

## 読む順（推奨）

### 1. 最初に必ず読むもの（30分）

| # | ファイル | 目的 |
|---|---|---|
| 1 | [00_product_overview.md](./00_product_overview.md) | SHUINとは何か・成功基準 |
| 2 | [10_glossary.md](./10_glossary.md) | 用語定義 v1.1（3層分離） |
| 3 | [70_phase1_scope.md](./70_phase1_scope.md) | Phase 1 MVPの実装範囲 |
| 4 | [71_non_goals.md](./71_non_goals.md) | MVPで作らないもの |

### 2. 実装に着手する前に読むもの（1時間）

| # | ファイル | 目的 |
|---|---|---|
| 5 | [20_user_flows.md](./20_user_flows.md) | B②入口→A①コアループの全フロー |
| 6 | [30_data_model.md](./30_data_model.md) | DBテーブル・スキーマ |
| 7 | [40_api_spec.md](./40_api_spec.md) | REST API一覧 |
| 8 | [50_screens_mvp.md](./50_screens_mvp.md) | MVP画面一覧 |
| 9 | [80_dev_handoff.md](./80_dev_handoff.md) | 開発進め方・ブランチ運用・PR規約 |
| 10 | [81_current_state_audit.md](./81_current_state_audit.md) | 現Vercel版の現状と差分 |
| 11 | [11_terminology_migration.md](./11_terminology_migration.md) | 旧用語→新用語の置換表 |

### 3. 機能実装時に該当箇所を参照

| ファイル | 担当機能 |
|---|---|
| [51_post_scan_card.md](./51_post_scan_card.md) | 押印後カード画面 |
| [52_post_route_card.md](./52_post_route_card.md) | ルート完走カード画面 |
| [53_stamp_ceremony.md](./53_stamp_ceremony.md) | 押印セレモニーUX（F1〜F9） |
| [60_stamp_logic.md](./60_stamp_logic.md) | 来訪証明ロジック・不正対策 |
| [61_narrative_logic.md](./61_narrative_logic.md) | ナラティブ表示ロジック（Act 0〜F7） |
| [62_badge_logic.md](./62_badge_logic.md) | 称号付与ロジック（MVP分） |

### 4. 都度参照

| ファイル | 用途 |
|---|---|
| [90_open_questions.md](./90_open_questions.md) | 未決事項（Owner決裁待ち） |
| [99_appendix_references.md](./99_appendix_references.md) | 参照元・根拠資料 |

---

## ファイル命名規則

| 番号帯 | 種別 |
|---|---|
| 00〜09 | プロダクト概要 |
| 10〜19 | 用語・命名規約 |
| 20〜29 | ユーザーフロー |
| 30〜39 | データモデル |
| 40〜49 | API仕様 |
| 50〜59 | 画面仕様 |
| 60〜69 | ビジネスロジック |
| 70〜79 | スコープ・非スコープ |
| 80〜89 | 開発運用・現状監査 |
| 90〜99 | 未決事項・付録 |

---

## 別AIに渡す場合の最短プロンプト例

```
このフォルダ docs/ は SHUIN（来訪証明型リアル連動ゲーム）の Phase 1 MVP 仕様書です。
まず README.md を読み、続いて 00_product_overview.md → 10_glossary.md → 70_phase1_scope.md →
71_non_goals.md の順で読み込んでください。
用語は 10_glossary.md の v1.1 に厳密に従ってください。
廃止語（スタンプラリー / チェックイン / スキャン / クエスト 等）は使用禁止です。
実装ベースは <https://stump-event.vercel.app/> の継続拡張です。
現状の用語マイグレーション論点は 81_current_state_audit.md と 11_terminology_migration.md を参照。
```

---

## 更新ルール

- docs/ の変更は **正本（SHUIN_統合仕様書.md）の変更とセット** で行うこと
- 各ファイル冒頭の「最終更新」を必ず更新
- 用語追加・変更時は [10_glossary.md](./10_glossary.md) を先に更新し、他ファイルへ波及
