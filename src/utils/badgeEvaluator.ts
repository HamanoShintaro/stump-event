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

// 路線とエリアの静的マッピング
function getRailwayForArea(areaName?: string): string {
  if (!areaName) return "";
  const map: Record<string, string> = {
    "自由が丘": "東急東横線",
    "九品仏": "東急大井町線",
    "中目黒": "東急東横線"
  };
  return map[areaName] || "";
}

// 一般のレベル閾値マッピング
function getGeneralLevel(count: number): number {
  const thresholds = [1, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 100];
  let level = 0;
  for (let i = 0; i < thresholds.length; i++) {
    if (count >= thresholds[i]) {
      level = i + 1;
    } else {
      break;
    }
  }
  return level;
}

// 地域のレベル閾値（スポット数そのもの、最大15）
function getAreaLevel(count: number): number {
  return Math.min(count, 15);
}

// 路線のレベル閾値（スポット数そのもの、最大15）
function getRailwayLevel(count: number): number {
  return Math.min(count, 15);
}

// 都道府県のレベル閾値
function getPrefectureLevel(count: number): number {
  const thresholds = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 18, 21, 24, 27, 30];
  let level = 0;
  for (let i = 0; i < thresholds.length; i++) {
    if (count >= thresholds[i]) {
      level = i + 1;
    } else {
      break;
    }
  }
  return level;
}

// 印目（カテゴリ）のレベル閾値
function getCategoryLevel(count: number): number {
  return Math.min(count, 15);
}

// 和風レベル表記名を取得するヘルパー
function getLevelName(baseName: string, level: number): string {
  const ranks = ["目録", "免許", "皆伝"];
  const numbers = ["壱", "弐", "参", "肆", "伍"];
  
  const rankIndex = Math.floor((level - 1) / 5);
  const numIndex = (level - 1) % 5;
  
  return `${baseName}${ranks[rankIndex]} ${numbers[numIndex]}`;
}

// 英語レベル表記名を取得するヘルパー
function getLevelEnglish(baseNameEn: string, level: number): string {
  const ranks = ["Mokuroku", "Menkyo", "Kaiden"];
  const numbers = ["I", "II", "III", "IV", "V"];
  
  const rankIndex = Math.floor((level - 1) / 5);
  const numIndex = (level - 1) % 5;
  
  return `${baseNameEn} ${ranks[rankIndex]} ${numbers[numIndex]}`;
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
        .select("id, name, title, area_name, prefecture, category")
        .eq("id", routeId)
        .single();
      route = rData;
    }

    // ユーザーの全押印履歴とルート情報を取得してカウント
    const { data: userStamps, error: stampsError } = await supabase
      .from("stamps")
      .select("id, spot_id, route_id, routes(area_name, prefecture, category)")
      .eq("user_id", userId);

    if (stampsError) {
      console.error("Error fetching user stamps in evaluateBadges:", stampsError);
      return [];
    }

    const stampsList = userStamps || [];
    const totalStamps = stampsList.length;

    // 2. 各カテゴリの進捗カウントを集計
    const areaCounts: Record<string, number> = {};
    const railwayCounts: Record<string, number> = {};
    const prefCounts: Record<string, number> = {};
    const categoryCounts: Record<string, number> = {};

    stampsList.forEach((s: any) => {
      const r = s.routes;
      if (!r) return;
      
      // エリア
      if (r.area_name) {
        areaCounts[r.area_name] = (areaCounts[r.area_name] || 0) + 1;
        
        // 路線
        const railway = getRailwayForArea(r.area_name);
        if (railway) {
          railwayCounts[railway] = (railwayCounts[railway] || 0) + 1;
        }
      }
      
      // 都道府県
      if (r.prefecture) {
        prefCounts[r.prefecture] = (prefCounts[r.prefecture] || 0) + 1;
      }
      
      // カテゴリ（印目）
      if (r.category) {
        categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
      }
    });

    // 獲得候補の称号コード (codes) をリストアップ
    const candidateCodes: string[] = [];
    const customBadgeDefs: Record<string, BadgeDefinition> = {};

    // --- (1) 初回・ベータ等の特別称号 ---
    if (totalStamps === 1) {
      candidateCodes.push("first_step");
      candidateCodes.push("beta_pioneer"); // β版期間内の初押印として自動付与
    }

    // --- (2) 段階的なレベル称号の評価 ---

    // 一般（全体の押印スポット数）
    const generalLevel = getGeneralLevel(totalStamps);
    for (let l = 1; l <= generalLevel; l++) {
      const code = `level_badge_general_stamps_${l}`;
      candidateCodes.push(code);
      
      const thresholds = [1, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 100];
      const reqCount = thresholds[l - 1] || 100;
      
      customBadgeDefs[code] = {
        code,
        category: "general",
        name_ja: getLevelName("しるし刻みし", l),
        subtitle_en: getLevelEnglish("Stamps Engraved", l),
        rarity: Math.floor((l - 1) / 5) + 1,
        description: `累計${reqCount}箇所のスポットへ訪れ、しるしを重ねた証`,
        condition_type: "general_stamps_count",
        condition_params: { count: reqCount }
      };
    }

    // 地域（エリア）
    Object.entries(areaCounts).forEach(([areaName, count]) => {
      const level = getAreaLevel(count);
      for (let l = 1; l <= level; l++) {
        const code = `level_badge_area_${areaName}_${l}`;
        candidateCodes.push(code);
        customBadgeDefs[code] = {
          code,
          category: "area",
          name_ja: getLevelName(`${areaName}探索`, l),
          subtitle_en: getLevelEnglish(`${areaName} Exploration`, l),
          rarity: Math.floor((l - 1) / 5) + 1,
          description: `${areaName}エリアにて、累計${l}箇所のスポットにしるしを刻んだ証`,
          condition_type: "area_stamps_count",
          condition_params: { area_name: areaName, count: l }
        };
      }
    });

    // 路線
    Object.entries(railwayCounts).forEach(([railwayName, count]) => {
      const level = getRailwayLevel(count);
      for (let l = 1; l <= level; l++) {
        const code = `level_badge_railway_${railwayName}_${l}`;
        candidateCodes.push(code);
        customBadgeDefs[code] = {
          code,
          category: "railway",
          name_ja: getLevelName(`${railwayName}沿線`, l),
          subtitle_en: getLevelEnglish(`${railwayName} Line`, l),
          rarity: Math.floor((l - 1) / 5) + 1,
          description: `${railwayName}沿線にて、累計${l}箇所のスポットにしるしを刻んだ証`,
          condition_type: "railway_stamps_count",
          condition_params: { railway_name: railwayName, count: l }
        };
      }
    });

    // 都道府県
    Object.entries(prefCounts).forEach(([prefName, count]) => {
      const level = getPrefectureLevel(count);
      for (let l = 1; l <= level; l++) {
        const code = `level_badge_prefecture_${prefName}_${l}`;
        candidateCodes.push(code);
        
        const thresholds = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 18, 21, 24, 27, 30];
        const reqCount = thresholds[l - 1] || 30;

        customBadgeDefs[code] = {
          code,
          category: "prefecture",
          name_ja: getLevelName(`${prefName}逍遥`, l),
          subtitle_en: getLevelEnglish(`${prefName} Rambling`, l),
          rarity: Math.floor((l - 1) / 5) + 1,
          description: `${prefName}内にて、累計${reqCount}箇所のスポットにしるしを刻んだ証`,
          condition_type: "prefecture_stamps_count",
          condition_params: { prefecture: prefName, count: reqCount }
        };
      }
    });

    // 印目（カテゴリ・属性）
    Object.entries(categoryCounts).forEach(([catName, count]) => {
      const cleanCatName = catName.replace("を感じたい", "");
      const level = getCategoryLevel(count);
      for (let l = 1; l <= level; l++) {
        const code = `level_badge_theme_${catName}_${l}`;
        candidateCodes.push(code);
        customBadgeDefs[code] = {
          code,
          category: "theme",
          name_ja: getLevelName(`${cleanCatName}探究`, l),
          subtitle_en: getLevelEnglish(`${cleanCatName} Theme`, l),
          rarity: Math.floor((l - 1) / 5) + 1,
          description: `「${catName}」カテゴリにて、累計${l}箇所のスポットにしるしを刻んだ証`,
          condition_type: "theme_stamps_count",
          condition_params: { category: catName, count: l }
        };
      }
    });

    // --- (3) カテゴリE: 季節系 ---
    const today = new Date();
    const seasonal = matchSeasonalBadges(today);
    candidateCodes.push(...seasonal);

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
