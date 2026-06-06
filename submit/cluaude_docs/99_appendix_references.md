# 99. 付録 - 参照元・根拠資料

> 最終更新: 2026-05-31

---

## 1. 正本仕様書

| ファイル | パス | 役割 |
|---|---|---|
| SHUIN_統合仕様書.md | `/Users/takaki/Documents/Claude/Projects/SPANS_Company/SHUIN_統合仕様書.md` | 正本（最優先） |
| SHUIN_統合仕様書_資料.docx | 同上 | docx版（対外説明用） |
| SHUIN_資料.pptx | 同上 | プレゼン版 |

---

## 2. 関連仕様書（参照元）

| ファイル | 内容 |
|---|---|
| SPANS_EngineerSpec.docx | エンジニア向け詳細仕様 |
| narrative_spec.docx | ナラティブ詳細仕様（Act 0〜F7全文の文字数・構成原則） |
| scan_ux_spec.docx | 押印セレモニーUX詳細（F1〜F9・C1〜C4） |
| SHUIN_UI文言ガイド.md | UI文言ガイドライン |
| SPANS_5yrPlan.docx | 5ヵ年計画 |

---

## 3. バイブル根拠（B09〜B11）

SHUIN の設計判断はバイブル20冊（[/Users/takaki/Desktop/SPANS_Company/SPANS_Bible_Books.md](file:///Users/takaki/Desktop/SPANS_Company/SPANS_Bible_Books.md)）のうち、特に以下3冊に基づく:

### B09 ゲームデザインバイブル（Jesse Schell）

主な適用箇所:
- **エレメンタルテトラッド**（メカニクス / ストーリー / 審美 / テクノロジー）
- **八大楽しみの強度設計**（ディスカバリー★5 / フェローシップ★5 等）
- **目標のレンズ（Lens 30）**: 称号の三層設計（短期 / 中期 / 長期）
- **意味ある報酬は頻度で希薄化する**: ★1〜2を多く、★3以上を絞る
- **関心曲線のレンズ**: Act 0〜F7全文の関心曲線設計
- **利益のレンズ（Lens 109）**: 体験品質優先、広告モデル排除
- **ナラティブのレンズ**: F7全文の物語完結性

### B10 中ヒットに導くゲームデザイン

主な適用箇所:
- **Zombies, Run! 設計原理**: 現実の行動（来訪）をメカニクスに完全に組み込む
- **8つのフォーマル要素**: プレイヤー / 目的 / ルール / リソース / 対立 / 結果

### B11 ルールズ・オブ・プレイ

主な適用箇所:
- **魔法円**: 半径50mの内側がゲーム
- **三水準のルール設計**: 構成的 / 操作的 / 暗黙的（不正対策の3層構造）
- **制作者としてのプレイヤー**: Phase別オープン化（Phase 1〜5）

---

## 4. 関連ドキュメント

| ファイル | 内容 |
|---|---|
| SPANS_Core_Foundation.md | SPANSの「芯」（書籍知見統合） |
| Company_Context.md | 会社憲章・役割・判断軸 |
| CLAUDE.md | Aro自動起動設定 |

---

## 5. 現行実装

| URL | 内容 |
|---|---|
| <https://stump-event.vercel.app/> | 現行Vercel版（プロトタイプ） |
| <https://stump-event.vercel.app/map> | マップ画面 |
| <https://stump-event.vercel.app/terms> | 利用規約（要差替） |
| <https://stump-event.vercel.app/privacy> | プライバシーポリシー（要差替） |

---

## 6. 外部参照

| 領域 | 参照 |
|---|---|
| Google Maps Platform | <https://developers.google.com/maps> |
| Firebase Authentication | <https://firebase.google.com/docs/auth> |
| PostgreSQL + PostGIS | <https://postgis.net/> |
| Next.js | <https://nextjs.org/> |
| Vercel | <https://vercel.com/docs> |
| Retool | <https://retool.com/> |
| Sentry | <https://docs.sentry.io/> |
| FCM | <https://firebase.google.com/docs/cloud-messaging> |

---

## 7. デザイン参照

- **モダン和風UIトーン**:
  - NieR:Automata（PlatinumGames）
  - Ghost of Tsushima（Sucker Punch）
- **称号カードビジュアル**: 御朱印帳・西洋紋章・ゲーム実績バッジの折衷

---

## 8. 競合・類似サービス

| サービス | 学び |
|---|---|
| ふらり（JR東日本） | キャンペーン終了で消える設計の限界。SHUINは常設で差別化 |
| Foursquare / Swarm | チェックインの希薄化。SHUINは「演出」で密度を上げる |
| ポケモンGO | 物理空間ゲームの実証。SHUINは物語性で差別化 |
| 御朱印アプリ各種 | 来訪証明の市場存在。SHUINはエリア横断 |
| Zombies, Run! | 現実行動のゲーム化 |

---

## 9. プロジェクト関連メモリ（Aro管理）

Aroセッション間で保持される関連メモリ:

| メモリ名 | 内容 |
|---|---|
| project_shuin | SHUINプロジェクト記録 |
| project_spans_overview | SPANS Inc. 全体 |
| project_spans_3axis | 3軸戦略 |
| project_3yr_plan_v2 | 3ヵ年計画 |
| user_hayashi_profile | Owner プロフィール |
| feedback_route_design_principle | ルート設計の優先順位原則 |

これらは `/Users/takaki/Library/Application Support/Claude/local-agent-mode-sessions/.../memory/` に保存。

---

## 10. 更新履歴

| 日付 | バージョン | 内容 |
|---|---|---|
| 2026-05-31 | docs/ v1.0 | 初版作成（SHUIN_統合仕様書.md v1.7 ベース） |
