import { supabase } from "@/lib/supabase";
import { Badge } from "@/types";

// 称号（バッジ）の静的マスタ定義
interface BadgeDefinition {
  code: string;
  category: string;
  name_ja: string;
  subtitle_en: string;
  rarity: number;
  description: string;
  condition_type: string;
  condition_params: any;
}

// 季節バッジの判定ヘルパー
function matchSeasonalBadges(date: Date): string[] {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();
  const codes: string[] = [];

  // 1. 桜の頃の訪問者 (3/20〜4/10)
  if ((month === 3 && day >= 20) || (month === 4 && day <= 10)) {
    codes.push("cherry_blossom_visitor");
  }
  // 2. 盛夏の踏破者 (7/20〜8/20)
  if ((month === 7 && day >= 20) || (month === 8 && day <= 20)) {
    codes.push("midsummer_pathfinder");
  }
  // 3. 紅葉の証人 (10/15〜11/15)
  if ((month === 10 && day >= 15) || (month === 11 && day <= 15)) {
    codes.push("autumn_witness");
  }
  // 4. 冬至の歩者 (12/22前後3日 = 12/19〜12/25)
  if (month === 12 && day >= 19 && day <= 25) {
    codes.push("winter_solstice_walker");
  }
  // 5. 年越しの使者 (1/1〜1/3)
  if (month === 1 && day >= 1 && day <= 3) {
    codes.push("new_years_pilgrim");
  }

  return codes;
}

/**
 * 称号を評価し、新規獲得した称号があれば Supabase に保存して返す
 */
export async function evaluateBadges(
  userId: string,
  stampEventId: string,
  spotId: string,
  routeId?: string
): Promise<Badge[]> {
  try {
    // 1. 関連データの事前取得
    // スポット情報を取得 (称号名や説明に使う)
    const { data: spot, error: spotError } = await supabase
      .from("spots")
      .select("id, name")
      .eq("id", spotId)
      .single();

    if (spotError || !spot) {
      console.error("Error fetching spot in evaluateBadges:", spotError);
      return [];
    }

    // ルート情報を取得 (指定されている場合)
    let route: any = null;
    if (routeId) {
      const { data: rData } = await supabase
        .from("routes")
        .select("id, name, title")
        .eq("id", routeId)
        .single();
      route = rData;
    }

    // ユーザーの総スタンプ数（今回の押印を含む）を取得
    const { count: visitedSpotsCount, error: countError } = await supabase
      .from("stamps")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);

    if (countError) {
      console.error("Error counting user stamps:", countError);
      return [];
    }

    const totalStamps = visitedSpotsCount || 0;

    // 2. 獲得候補の称号コード (codes) をリストアップ
    const candidateCodes: string[] = [];
    const customBadgeDefs: Record<string, BadgeDefinition> = {};

    // --- (1) カテゴリA: 来訪記録系 ＆ カテゴリC: 物語完結系 ---
    if (totalStamps === 1) {
      candidateCodes.push("first_step");
      candidateCodes.push("beta_pioneer"); // β版期間内の初押印として自動付与
    }

    // スポット固有称号
    const spotVisitorCode = `visitor_of_${spotId}`;
    candidateCodes.push(spotVisitorCode);
    customBadgeDefs[spotVisitorCode] = {
      code: spotVisitorCode,
      category: "visit",
      name_ja: `${spot.name}への来訪者`,
      subtitle_en: `Visitor of ${spot.name}`,
      rarity: 1,
      description: `${spot.name}へ初めて訪れ、しるしを刻んだ証`,
      condition_type: "first_visit",
      condition_params: { spot_id: spotId }
    };

    const spotMemoryCode = `memory_of_${spotId}`;
    candidateCodes.push(spotMemoryCode);
    customBadgeDefs[spotMemoryCode] = {
      code: spotMemoryCode,
      category: "story",
      name_ja: `${spot.name}の記憶`,
      subtitle_en: `Memory of ${spot.name}`,
      rarity: 1,
      description: `${spot.name}に秘められた物語の断片を紐解いた証`,
      condition_type: "story_read",
      condition_params: { spot_id: spotId }
    };

    // --- (2) カテゴリE: 季節系 ---
    const today = new Date();
    const seasonal = matchSeasonalBadges(today);
    candidateCodes.push(...seasonal);

    // --- (3) カテゴリF: 累計系 ＆ 物語収集者 ---
    if (totalStamps >= 10) {
      candidateCodes.push("the_persistent");
      candidateCodes.push("lore_collector");
    }
    if (totalStamps >= 50) {
      candidateCodes.push("the_walker");
    }
    if (totalStamps >= 100) {
      candidateCodes.push("record_keeper");
    }

    // --- (4) カテゴリB: ルート完走系 ---
    if (routeId && route) {
      const routeTitle = route.title || route.name;

      // そのルートに含まれる全スポットの数を取得
      const { count: totalSpotsCount } = await supabase
        .from("spots")
        .select("*", { count: "exact", head: true })
        .eq("route_id", routeId);

      // ユーザーがそのルートで獲得したスタンプ数を取得
      const { count: routeStampsCount } = await supabase
        .from("stamps")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId)
        .eq("route_id", routeId);

      const totalSpots = totalSpotsCount || 0;
      const routeStamps = routeStampsCount || 0;

      // 完走したか判定
      if (totalSpots > 0 && routeStamps === totalSpots) {
        // 踏破者称号
        const trailblazerCode = `trailblazer_of_${routeId}`;
        candidateCodes.push(trailblazerCode);
        customBadgeDefs[trailblazerCode] = {
          code: trailblazerCode,
          category: "route",
          name_ja: `${routeTitle}の踏破者`,
          subtitle_en: `Trailblazer of ${routeTitle}`,
          rarity: 2,
          description: `ルート「${routeTitle}」の全スポットを巡り、踏破した証`,
          condition_type: "route_complete",
          condition_params: { route_id: routeId }
        };

        // 語り手称号 (完走 + F7全テキスト受取済。全スポット押印でF7全受取とみなせる)
        const storytellerCode = `storyteller_of_${routeId}`;
        candidateCodes.push(storytellerCode);
        customBadgeDefs[storytellerCode] = {
          code: storytellerCode,
          category: "route",
          name_ja: `${routeTitle}の語り手`,
          subtitle_en: `Storyteller of ${routeTitle}`,
          rarity: 3,
          description: `ルート「${routeTitle}」の全スポットを踏破し、すべての物語片を紐解いた証`,
          condition_type: "route_story_complete",
          condition_params: { route_id: routeId }
        };

        // 語り継ぐ者 (1ルート全F7テキスト受取)
        candidateCodes.push("keeper_of_stories");
      }
    }

    // 3. 静的バッジの定義
    const staticBadgeDefs: Record<string, BadgeDefinition> = {
      first_step: {
        code: "first_step",
        category: "visit",
        name_ja: "初めての一歩",
        subtitle_en: "First Step",
        rarity: 1,
        description: "初めてのスポットへの押印を記録した証",
        condition_type: "first_visit_global",
        condition_params: {}
      },
      beta_pioneer: {
        code: "beta_pioneer",
        category: "founder",
        name_ja: "ベータ探索者",
        subtitle_en: "Beta Pioneer",
        rarity: 3,
        description: "SHUINの黎明期（β版）に参加し、街のしるしを巡りはじめた先駆者の証",
        condition_type: "beta_user",
        condition_params: {}
      },
      cherry_blossom_visitor: {
        code: "cherry_blossom_visitor",
        category: "seasonal",
        name_ja: "桜の頃の訪問者",
        subtitle_en: "Cherry Blossom Visitor",
        rarity: 2,
        description: "桜舞う春の季節（3/20〜4/10）に街を歩き、しるしを刻んだ証",
        condition_type: "date_range",
        condition_params: { from: "03-20", to: "04-10" }
      },
      midsummer_pathfinder: {
        code: "midsummer_pathfinder",
        category: "seasonal",
        name_ja: "盛夏の踏破者",
        subtitle_en: "Midsummer Pathfinder",
        rarity: 2,
        description: "陽光照りつける夏の季節（7/20〜8/20）に街を歩き、しるしを刻んだ証",
        condition_type: "date_range",
        condition_params: { from: "07-20", to: "08-20" }
      },
      autumn_witness: {
        code: "autumn_witness",
        category: "seasonal",
        name_ja: "紅葉の証人",
        subtitle_en: "Autumn Witness",
        rarity: 2,
        description: "紅葉色づく秋の季節（10/15〜11/15）に街を歩き、しるしを刻んだ証",
        condition_type: "date_range",
        condition_params: { from: "10-15", to: "11-15" }
      },
      winter_solstice_walker: {
        code: "winter_solstice_walker",
        category: "seasonal",
        name_ja: "冬至の歩者",
        subtitle_en: "Winter Solstice Walker",
        rarity: 2,
        description: "冬至の澄んだ空気の中（12/19〜12/25）を歩き、しるしを刻んだ証",
        condition_type: "date_range",
        condition_params: { from: "12-19", to: "12-25" }
      },
      new_years_pilgrim: {
        code: "new_years_pilgrim",
        category: "seasonal",
        name_ja: "年越しの使者",
        subtitle_en: "New Year's Pilgrim",
        rarity: 3,
        description: "新しい年の始まり（1/1〜1/3）に街を訪れ、しるしを刻んだ証",
        condition_type: "date_range",
        condition_params: { from: "01-01", to: "01-03" }
      },
      the_persistent: {
        code: "the_persistent",
        category: "cumulative",
        name_ja: "継続する者",
        subtitle_en: "The Persistent",
        rarity: 1,
        description: "累計10箇所のスポットへ訪れ、しるしを重ねてきた証",
        condition_type: "cumulative_count",
        condition_params: { count: 10 }
      },
      the_walker: {
        code: "the_walker",
        category: "cumulative",
        name_ja: "歩み続ける者",
        subtitle_en: "The Walker",
        rarity: 2,
        description: "累計50箇所のスポットへ訪れ、街の記憶を巡り続けた証",
        condition_type: "cumulative_count",
        condition_params: { count: 50 }
      },
      record_keeper: {
        code: "record_keeper",
        category: "cumulative",
        name_ja: "踏破の記録者",
        subtitle_en: "Record Keeper",
        rarity: 3,
        description: "累計100箇所のスポットへ訪れ、数多のしるしを刻み込んだ証",
        condition_type: "cumulative_count",
        condition_params: { count: 100 }
      },
      lore_collector: {
        code: "lore_collector",
        category: "story",
        name_ja: "物語の収集者",
        subtitle_en: "Lore Collector",
        rarity: 2,
        description: "10箇所のスポットを訪れ、多くの物語片を集めた証",
        condition_type: "story_count",
        condition_params: { count: 10 }
      },
      keeper_of_stories: {
        code: "keeper_of_stories",
        category: "story",
        name_ja: "語り継ぐ者",
        subtitle_en: "Keeper of Stories",
        rarity: 3,
        description: "ルートの全スポットを巡り、失われつつある物語を心に刻んだ証",
        condition_type: "route_all_stories",
        condition_params: {}
      }
    };

    // 4. すでにユーザーが獲得済みの称号コードを取得
    const { data: acquiredAssignments } = await supabase
      .from("badge_assignments")
      .select("badge_id, badges(code)")
      .eq("user_id", userId);

    const acquiredCodes = new Set<string>();
    if (acquiredAssignments) {
      acquiredAssignments.forEach((assign: any) => {
        if (assign.badges && assign.badges.code) {
          acquiredCodes.add(assign.badges.code);
        }
      });
    }

    // 新たに獲得した（まだ持っていない）候補コードをフィルタ
    const newAcquiredCodes = candidateCodes.filter(c => !acquiredCodes.has(c));
    if (newAcquiredCodes.length === 0) {
      return []; // 新規獲得なし
    }

    // 5. 新規獲得コードに対応するバッジを Supabase の `badges` テーブルに upsert してIDを確保する
    const newlyAcquiredBadges: Badge[] = [];

    for (const code of newAcquiredCodes) {
      const def = staticBadgeDefs[code] || customBadgeDefs[code];
      if (!def) continue;

      // badgesテーブルに存在するかチェック、なければ作成
      let badge: Badge | null = null;
      
      const { data: existingBadge } = await supabase
        .from("badges")
        .select("*")
        .eq("code", code)
        .maybeSingle();

      if (existingBadge) {
        badge = existingBadge;
      } else {
        // 新規登録
        const { data: newBadge, error: insertError } = await supabase
          .from("badges")
          .insert({
            code: def.code,
            category: def.category,
            name_ja: def.name_ja,
            subtitle_en: def.subtitle_en,
            rarity: def.rarity,
            description: def.description,
            condition_type: def.condition_type,
            condition_params: def.condition_params,
            spot_id: (def as any).spot_id || null,
            route_id: (def as any).route_id || null,
            is_active: true
          })
          .select()
          .single();

        if (insertError) {
          console.error(`Error inserting badge master ${code}:`, insertError);
          continue;
        }
        badge = newBadge;
      }

      if (badge) {
        // badge_assignments にインサート (重複は UNIQUE 制約で防ぐ)
        const { error: assignError } = await supabase
          .from("badge_assignments")
          .insert({
            user_id: userId,
            badge_id: badge.id,
            triggered_by_stamp_event_id: stampEventId,
            acquired_at: new Date().toISOString()
          });

        if (assignError) {
          console.error(`Error assigning badge ${code} to user:`, assignError);
        } else {
          newlyAcquiredBadges.push(badge);
        }
      }
    }

    return newlyAcquiredBadges;
  } catch (err) {
    console.error("Fatal error in evaluateBadges:", err);
    return [];
  }
}
