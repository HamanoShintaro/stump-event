# 62. 称号（badge）付与ロジック

> 最終更新: 2026-05-31 / 出典: SHUIN_統合仕様書.md §4-6
> 関連: [30_data_model.md](./30_data_model.md) / [60_stamp_logic.md](./60_stamp_logic.md)

---

## 1. 設計原則

1. **永続・削除不可**: ライフログの信頼性の根幹。ユーザーが「消えない記録」として積み上げる
2. **レア度 ★1〜★5**: 付与頻度と希少性を階層化。★5は生涯数個が上限
3. **物語系称号（カテゴリB）はルート完走で1つ**: スポット単位の物語称号は出さない
4. **SNSシェア想定**: 「モダン和風」スタイル
5. **B09「意味ある報酬は頻度で希薄化する」**: ★1〜2に留め、★3以上を絞る

---

## 2. レア度定義

| ★ | 名称 | 付与基準 | MVP投入 |
|---|---|---|---|
| ★1 | コモン | 初スポット来訪・入門達成 | ✅ |
| ★2 | アンコモン | ルート内複数スポット達成・初ルート完走 | ✅ |
| ★3 | レア | エリア制覇・特定条件の初来訪 | ✅ |
| ★4 | エピック | 創設者・累計高達成・年次マスター | Phase 2 |
| ★5 | レジェンダリー | 全国制覇・特定歴史的来訪・取得者<100人 | Phase 3〜 |

---

## 3. カテゴリA〜J 一覧（MVP実装範囲）

### MVP実装する称号（Phase 1）

#### カテゴリA: 来訪記録系

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| 初めての一歩 | First Step | ★1 | 初スポット来訪（全ユーザー共通） |
| ○○への来訪者 | Visitor of [Spot Name] | ★1 | 各スポット初来訪（スポット固有） |

#### カテゴリB: ルート完走系

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| [ルート名]の踏破者 | Trailblazer of [Route Name] | ★2 | ルート全スポット来訪完了 |
| [ルート名]の語り手 | Storyteller of [Route Name] | ★3 | ルート完走 + F7全テキスト受取済 |
| [エリア名]の制覇者 | Conqueror of [Area Name] | ★3 | エリア内全ルート完走 |

#### カテゴリC: 物語完結系

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| [スポット名]の記憶 | Memory of [Spot Name] | ★1 | スポット来訪後F7テキスト受取 |
| 物語の収集者 | Lore Collector | ★2 | 10スポット分のF7テキスト受取 |
| 語り継ぐ者 | Keeper of Stories | ★3 | 1ルート全F7テキスト受取 |

#### カテゴリD: 創設者系

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| ベータ探索者 | Beta Pioneer | ★3 | Phase 1（β）参加者全員に自動付与 |

#### カテゴリE: シーズナル系

日付比較のみで判定可能。MVPで投入（コストゼロ）。

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| 桜の頃の訪問者 | Cherry Blossom Visitor | ★2 | 3/20〜4/10の来訪 |
| 盛夏の踏破者 | Midsummer Pathfinder | ★2 | 7/20〜8/20の来訪 |
| 紅葉の証人 | Autumn Witness | ★2 | 10/15〜11/15の来訪 |
| 冬至の歩者 | Winter Solstice Walker | ★2 | 12/22前後3日の来訪 |
| 年越しの使者 | New Year's Pilgrim | ★3 | 1/1〜1/3の来訪 |

#### カテゴリF: 累計系

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| 継続する者 | The Persistent | ★1 | 累計来訪10スポット |
| 歩み続ける者 | The Walker | ★2 | 累計来訪50スポット |
| 踏破の記録者 | Record Keeper | ★3 | 累計来訪100スポット |

#### カテゴリG: 地域制覇系

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| [エリア名]マスター | Master of [Area Name] | ★3 | エリア内全スポット来訪済 |

#### カテゴリH: 希少・レア発見系（MVP一部）

| 称号名 | 英字 | ★ | 条件 |
|---|---|---|---|
| 隠された扉を開く者 | Door Opener | ★3 | 非公開スポット発見・来訪（運営設定） |
| 最初の100人 | First Hundred | ★3 | スポット開設後最初の100人 |

#### カテゴリI: イベント系（A③用テンプレート）

イベントルート毎に運営代行で動的生成。

| 称号名（テンプレ） | 英字 | ★ |
|---|---|---|
| [施設名]の特別訪問者 | Special Visitor of [Facility] | ★2 |
| [イベント名]完走者 | [Event Name] Finisher | ★3 |
| [施設名]× [年]の証人 | Witness [Year] | ★3〜4 |

### Phase 2以降に実装

- カテゴリA: 夜の訪問者（Night Wanderer）・暁の者（Dawn Walker）
- カテゴリB: 全路の踏破者（Grand Pathfinder）
- カテゴリC: 歴史の証人（Witness of History）
- カテゴリD: 創設者（Founder）・[エリア]の先人
- カテゴリF: 千の足跡（Thousand Steps）・7日連続・30日連続
- カテゴリG: 守護者・地域の語り部
- カテゴリH: 深夜の証人・幻の踏破者
- カテゴリJ: 全コンテキスト称号（天候・時間帯）

---

## 4. 付与判定アルゴリズム

`POST /checkin` 成功時、以下を実行:

```typescript
async function evaluateBadges(userId, stampEventId, spotId, routeId) {
  const newBadges: string[] = [];

  // (1) カテゴリA: スポット固有 + 全体初来訪
  const visitedSpots = await db.stamps.count({ where: { userId } });
  if (visitedSpots === 1) newBadges.push('first_step');
  newBadges.push(`visitor_of_${spotId}`);

  // (2) カテゴリC: スポット物語
  newBadges.push(`memory_of_${spotId}`);
  if (visitedSpots >= 10) newBadges.push('lore_collector');

  // (3) カテゴリE: 季節
  const today = new Date();
  const seasonalBadges = matchSeasonalBadges(today);
  newBadges.push(...seasonalBadges);

  // (4) カテゴリF: 累計
  if (visitedSpots === 10) newBadges.push('the_persistent');
  if (visitedSpots === 50) newBadges.push('the_walker');
  if (visitedSpots === 100) newBadges.push('record_keeper');

  // (5) カテゴリH: スポット100人目
  const visitorNumber = await getVisitorNumber(spotId);
  if (visitorNumber <= 100) newBadges.push(`first_hundred_${spotId}`);

  // (6) ルート完走判定 → カテゴリB/G
  if (routeId) {
    const routeStamps = await db.stamps.count({ where: { userId, routeId } });
    const totalSpots = await getRouteSpotCount(routeId);
    if (routeStamps === totalSpots) {
      newBadges.push(`trailblazer_of_${routeId}`);
      // 全F7既読チェック → 語り手
      if (await hasReadAllF7(userId, routeId)) {
        newBadges.push(`storyteller_of_${routeId}`);
        // ルート完走+全F7既読 = カテゴリC「語り継ぐ者」も
        newBadges.push('keeper_of_stories');
      }
    }
    // エリア完走 → 制覇者・マスター
    const area = await getAreaName(routeId);
    if (await isAreaConquered(userId, area)) {
      newBadges.push(`conqueror_of_${area}`);
    }
    if (await isAreaMaster(userId, area)) {
      newBadges.push(`master_of_${area}`);
    }
  }

  // 重複除去 → 既取得チェック → 新規分のみ INSERT
  await assignBadges(userId, newBadges, stampEventId);
  return newBadges.filter(isNewlyAcquired);
}
```

各称号は `badges.code` でユニーク識別。`badge_assignments` の `(user_id, badge_id)` UNIQUE制約で重複付与を防止。

---

## 5. 称号付与のタイミング

| 称号タイプ | 付与タイミング |
|---|---|
| 来訪系（A） | 押印成功時（`POST /checkin` 内） |
| 物語系（C: メモリー） | 押印成功時（F7全文を返した時点で受取扱い） |
| 物語系（C: 収集者・語り継ぐ者） | 累計条件達成時に押印APIで判定 |
| ルート完走系（B） | 最終スポット押印時 |
| エリア制覇系（G） | 該当エリア最終ルート完走時 |
| 季節系（E） | 押印時に日付判定 |
| 累計系（F） | 押印時にカウント判定 |
| 創設者系（D: ベータ） | Phase 1期間内の初押印時に自動付与 |

**重要**: 全て **押印APIのレスポンス時** に同期的に判定・付与する。バッチ処理は不要（Phase 1 MVP）。

---

## 6. 称号カードビジュアル

### 6-1. デザイン仕様

| 要素 | 仕様 |
|---|---|
| 背景 | 深黒（#0D0D0D） |
| 称号テキスト | 金（#C9A84C） |
| 英字サブタイトル | 細セリフ体（#888888） |
| 装飾 | 細い縦罫線・四隅のわずかな金縁のみ |
| ★表示 | 右下に金色 |
| 来訪日付 | 下部に小さく「YYYY.MM.DD」形式 |
| サイズ（シェア用） | 16:9（Twitter/X）と 1:1（Instagram） |

**禁止**: グラデーション、派手なエフェクト、明るい原色。

### 6-2. 縦書き/横書き選択

Phase 1 MVPでは **横書き固定**。縦書きオプションは Phase 2。

### 6-3. 参考イメージ

NieR:Automata / Ghost of Tsushima のUIトーン。**派手さではなく重み**。

---

## 7. 称号画像の生成

| 方式 | Phase | 用途 |
|---|---|---|
| 静的画像（pre-rendered） | MVP | スポット固有称号など事前生成可能なもの |
| サーバーサイド生成（Vercel OG Image） | MVP | ユーザー名・取得日を含むパーソナライズ称号 |
| クライアントサイド生成（Canvas API） | Phase 2 | リアルタイムカスタマイズ |

MVPは **Vercel OG Image (`@vercel/og`)** で動的生成。称号ID + ユーザーID + 取得日のキーでCDNキャッシュ。

---

## 8. 称号一覧画面（/badges）

[50_screens_mvp.md §7](./50_screens_mvp.md) 参照。

未取得称号は **シルエット表示**（条件文のみ。獲得後にイメージ解放）。

---

## 9. 削除不可の徹底

- DELETE文を発行しない（`badge_assignments` テーブル）
- 退会時もデータは保持（`users.deleted_at` フラグのみ）
- 不正検知で取り消す場合は `revoked_at` カラム追加（Phase 2機能）

---

## 10. テストケース

| # | ケース | 期待挙動 |
|---|---|---|
| 1 | 初回押印 | first_step + visitor_of_{spotId} + memory_of_{spotId} 同時付与 |
| 2 | 同日2回目押印 | エラー、称号付与なし |
| 3 | 翌日再訪 | 称号付与なし（既取得） |
| 4 | 累計10スポット達成 | the_persistent + lore_collector 付与 |
| 5 | ルート最終スポット押印 | trailblazer_of_{routeId} 付与、completion-status APIで取得可能 |
| 6 | 全F7受取済でルート完走 | trailblazer + storyteller + keeper_of_stories 同時付与 |
| 7 | 季節期間内の押印 | 該当seasonal badge付与（複数該当時は全部） |
| 8 | スポット100人目以内 | first_hundred_{spotId} 付与 |
| 9 | エリア内全ルート完走 | conqueror_of_{area} + master_of_{area}（条件達成時） |
| 10 | Phase 1期間内 + 初押印 | beta_pioneer 自動付与 |
