"use client";

import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import {
  evaluateBadges,
  isSiteUsageBadge,
  parsePrefectureAndCity,
} from "@/utils/badgeEvaluator";

export type BadgeItem = {
  code: string;
  name_ja: string;
  subtitle_en?: string;
  description?: string;
  rarity?: number;
  category?: string;
  acquired_at?: string | null;
  earned: boolean;
  condition_type?: string;
  condition_params?: any;
};

export interface NextMilestoneItem {
  code: string;
  name_ja: string;
  subtitle_en: string;
  rarity: number;
  currentCount: number;
  targetCount: number;
  remaining: number;
  progressPct: number;
  categoryLabel: string;
}

export interface LifelogRankItem {
  id: string;
  label: string;
  description: string;
  count: number;
  rankTitle: string;
  nextTarget: number;
  progressPct: number;
}

// 称号コードからグループキー、レベル、カテゴリを解析するヘルパー
export function parseLevelBadge(code: string) {
  if (!code || !code.startsWith("level_badge_")) return null;
  const parts = code.split("_");
  const levelStr = parts[parts.length - 1];
  const level = parseInt(levelStr, 10);
  const groupKey = parts.slice(2, parts.length - 1).join("_");

  let category = "general";
  if (code.startsWith("level_badge_area_")) category = "area";
  else if (code.startsWith("level_badge_railway_")) category = "railway";
  else if (code.startsWith("level_badge_prefecture_")) category = "prefecture";
  else if (code.startsWith("level_badge_theme_")) category = "theme";

  return { groupKey, level, category };
}

function getLevelName(baseName: string, level: number): string {
  const ranks = ["目録", "免許", "皆伝"];
  const numbers = ["壱", "弐", "参", "肆", "伍"];
  const rankIndex = Math.floor((level - 1) / 5);
  const numIndex = (level - 1) % 5;
  return `${baseName}${ranks[rankIndex] || "皆伝"} ${numbers[numIndex] || "伍"}`;
}

function getLevelEnglish(baseNameEn: string, level: number): string {
  const ranks = ["Mokuroku", "Menkyo", "Kaiden"];
  const numbers = ["I", "II", "III", "IV", "V"];
  const rankIndex = Math.floor((level - 1) / 5);
  const numIndex = (level - 1) % 5;
  return `${baseNameEn} ${ranks[rankIndex] || "Kaiden"} ${numbers[numIndex] || "V"}`;
}

function getRailwayForSpotOrRoute(areaOrCity?: string, routeTitle?: string): string {
  if (routeTitle) {
    if (
      routeTitle.includes("自由が丘") ||
      routeTitle.includes("中目黒") ||
      routeTitle.includes("東横") ||
      routeTitle.includes("渋谷") ||
      routeTitle.includes("多摩川") ||
      routeTitle.includes("大倉山")
    ) {
      return "東急東横線";
    }
    if (routeTitle.includes("九品仏")) return "東急大井町線";
    if (routeTitle.includes("岩槻") || routeTitle.includes("大宮〜七里") || routeTitle.includes("野田")) {
      return "東武野田線";
    }
  }
  if (!areaOrCity) return "";
  const map: Record<string, string> = {
    自由が丘: "東急東横線",
    九品仏: "東急大井町線",
    中目黒: "東急東横線",
    目黒区: "東急東横線",
    渋谷区: "東急東横線",
  };
  return map[areaOrCity] || "";
}

function computeLifelogRank(
  id: string,
  label: string,
  description: string,
  count: number
): LifelogRankItem {
  const thresholds = [1, 3, 5, 10, 20, 30, 50];
  let rankTitle = "初歩";
  if (count >= 50) rankTitle = "大皆伝";
  else if (count >= 20) rankTitle = "皆伝";
  else if (count >= 5) rankTitle = "免許";
  else if (count >= 3) rankTitle = "目録";
  else if (count >= 1) rankTitle = "初歩";

  const nextTarget = thresholds.find((t) => t > count) ?? 50;
  const progressPct =
    count >= 50 ? 100 : Math.min(100, Math.round((count / nextTarget) * 100));

  return {
    id,
    label,
    description,
    count,
    rankTitle,
    nextTarget,
    progressPct,
  };
}

export function useBadgesProgress(
  user: any,
  authLoading: boolean,
  refreshUnseen?: () => void
) {
  const [items, setItems] = useState<BadgeItem[]>([]);
  const [nextMilestones, setNextMilestones] = useState<NextMilestoneItem[]>([]);
  const [lifelogRanks, setLifelogRanks] = useState<LifelogRankItem[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [rarityFilter, setRarityFilter] = useState<number | null>(null);
  const [showUnearned, setShowUnearned] = useState(true);

  useEffect(() => {
    async function fetchBadgesAndProgress() {
      if (!user) {
        setDataLoading(false);
        return;
      }
      setDataLoading(true);
      try {
        await evaluateBadges(user.id);
        if (refreshUnseen) refreshUnseen();

        const [earnedRes, catalogRes, stampsRes, eventsRes] = await Promise.all([
          supabase
            .from("badge_assignments")
            .select("acquired_at, badges(*)")
            .eq("user_id", user.id)
            .order("acquired_at", { ascending: false }),
          supabase.from("badges").select("*").eq("is_active", true),
          supabase
            .from("stamps")
            .select("id, spot_id, route_id, spots(*), routes(*)")
            .eq("user_id", user.id),
          supabase
            .from("stamp_events")
            .select("id, spot_id, route_id, group_id, photo_url, memo, created_at")
            .eq("user_id", user.id),
        ]);

        if (earnedRes.error) {
          console.error("badges earned fetch error", earnedRes.error);
        }

        const earnedList = (earnedRes.data || [])
          .map((a: any) => ({ ...a.badges, acquired_at: a.acquired_at }))
          .filter((b: any) => isSiteUsageBadge(b));
        const earnedCodes = new Set(earnedList.map((b: any) => b.code));

        const unearned = (catalogRes.data || []).filter(
          (b: any) => isSiteUsageBadge(b) && !earnedCodes.has(b.code)
        );

        const allRawItems: BadgeItem[] = [
          ...earnedList.map((b: any) => ({ ...b, earned: true })),
          ...unearned.map((b: any) => ({ ...b, earned: false, acquired_at: null })),
        ];

        const groupedItems: Record<string, BadgeItem[]> = {};
        const nonLevelItems: BadgeItem[] = [];

        allRawItems.forEach((item) => {
          if (item.code.startsWith("visitor_of_") || item.code.startsWith("memory_of_")) {
            return;
          }
          const info = parseLevelBadge(item.code);
          if (info) {
            if (!groupedItems[info.groupKey]) {
              groupedItems[info.groupKey] = [];
            }
            groupedItems[info.groupKey].push(item);
          } else {
            nonLevelItems.push(item);
          }
        });

        const representativeLevelItems: BadgeItem[] = [];
        Object.entries(groupedItems).forEach(([, groupList]) => {
          const earnedListForGroup = groupList.filter((item) => item.earned);
          if (earnedListForGroup.length > 0) {
            const maxEarned = earnedListForGroup.reduce((max, item) => {
              const maxL = parseLevelBadge(max.code)?.level || 0;
              const itemL = parseLevelBadge(item.code)?.level || 0;
              return itemL > maxL ? item : max;
            }, earnedListForGroup[0]);
            representativeLevelItems.push(maxEarned);
          } else {
            const minUnearned = groupList.reduce((min, item) => {
              const minL = parseLevelBadge(min.code)?.level || 999;
              const itemL = parseLevelBadge(item.code)?.level || 999;
              return itemL < minL ? item : min;
            }, groupList[0]);
            representativeLevelItems.push(minUnearned);
          }
        });

        setItems([...nonLevelItems, ...representativeLevelItems]);

        // --- ユーザーの押印実績集計 & 次なる境地（nextMilestones）算出 ---
        const stampsList = stampsRes.data || [];
        const eventsList = eventsRes.data || [];
        const totalStamps = Math.max(stampsList.length, eventsList.length);

        const areaCounts: Record<string, number> = {};
        const railwayCounts: Record<string, number> = {};
        const prefCounts: Record<string, number> = {};
        const categoryCounts: Record<string, number> = {};

        stampsList.forEach((s: any) => {
          const sp = s.spots || {};
          const r = s.routes || {};
          const parsed = parsePrefectureAndCity(sp.address);
          const city = sp.city || parsed.city;
          const pref = sp.prefecture || parsed.prefecture || r.prefecture;
          if (city) areaCounts[city] = (areaCounts[city] || 0) + 1;
          const railway = getRailwayForSpotOrRoute(r.area_name || city, r.title || r.name);
          if (railway) railwayCounts[railway] = (railwayCounts[railway] || 0) + 1;
          if (pref) prefCounts[pref] = (prefCounts[pref] || 0) + 1;
          if (r.category) categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
        });

        const candidateMilestones: NextMilestoneItem[] = [];
        const addedMilestoneCodes = new Set<string>();

        const addMilestone = (m: NextMilestoneItem) => {
          if (
            !earnedCodes.has(m.code) &&
            !addedMilestoneCodes.has(m.code) &&
            m.currentCount > 0 &&
            m.remaining > 0 &&
            m.remaining <= 5
          ) {
            addedMilestoneCodes.add(m.code);
            candidateMilestones.push(m);
          }
        };

        // 1. 全体押印数の次なる段階
        const generalThresholds = [1, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 100];
        const nextGenIdx = generalThresholds.findIndex((t) => t > totalStamps);
        if (nextGenIdx !== -1 && totalStamps > 0) {
          const nextLevel = nextGenIdx + 1;
          const targetCount = generalThresholds[nextGenIdx];
          const remaining = targetCount - totalStamps;
          addMilestone({
            code: `level_badge_general_stamps_${nextLevel}`,
            name_ja: getLevelName("しるし刻みし", nextLevel),
            subtitle_en: getLevelEnglish("Stamps Engraved", nextLevel),
            rarity: Math.floor((nextLevel - 1) / 5) + 1,
            currentCount: totalStamps,
            targetCount,
            remaining,
            progressPct: Math.min(99, Math.round((totalStamps / targetCount) * 100)),
            categoryLabel: "一般（全体実績）",
          });
        }

        // 2. 地域（エリア）の次なる段階
        Object.entries(areaCounts).forEach(([cityName, count]) => {
          if (count > 0 && count < 15) {
            const nextLevel = count + 1;
            const targetCount = nextLevel;
            addMilestone({
              code: `level_badge_area_${cityName}_${nextLevel}`,
              name_ja: getLevelName(`${cityName}探索`, nextLevel),
              subtitle_en: getLevelEnglish(`${cityName} Exploration`, nextLevel),
              rarity: Math.floor((nextLevel - 1) / 5) + 1,
              currentCount: count,
              targetCount,
              remaining: targetCount - count,
              progressPct: Math.min(99, Math.round((count / targetCount) * 100)),
              categoryLabel: `地域（${cityName}）`,
            });
          }
        });

        // 3. 路線沿線の次なる段階
        Object.entries(railwayCounts).forEach(([railName, count]) => {
          if (count > 0 && count < 15) {
            const nextLevel = count + 1;
            const targetCount = nextLevel;
            addMilestone({
              code: `level_badge_railway_${railName}_${nextLevel}`,
              name_ja: getLevelName(`${railName}沿線`, nextLevel),
              subtitle_en: getLevelEnglish(`${railName} Line`, nextLevel),
              rarity: Math.floor((nextLevel - 1) / 5) + 1,
              currentCount: count,
              targetCount,
              remaining: targetCount - count,
              progressPct: Math.min(99, Math.round((count / targetCount) * 100)),
              categoryLabel: `路線沿線（${railName}）`,
            });
          }
        });

        // 4. 都道府県の次なる段階
        const prefThresholds = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 18, 21, 24, 27, 30];
        Object.entries(prefCounts).forEach(([prefName, count]) => {
          const nextIdx = prefThresholds.findIndex((t) => t > count);
          if (count > 0 && nextIdx !== -1) {
            const nextLevel = nextIdx + 1;
            const targetCount = prefThresholds[nextIdx];
            addMilestone({
              code: `level_badge_prefecture_${prefName}_${nextLevel}`,
              name_ja: getLevelName(`${prefName}逍遥`, nextLevel),
              subtitle_en: getLevelEnglish(`${prefName} Rambling`, nextLevel),
              rarity: Math.floor((nextLevel - 1) / 5) + 1,
              currentCount: count,
              targetCount,
              remaining: targetCount - count,
              progressPct: Math.min(99, Math.round((count / targetCount) * 100)),
              categoryLabel: `都道府県（${prefName}）`,
            });
          }
        });

        // 5. 印目（カテゴリ・属性）の次なる段階
        Object.entries(categoryCounts).forEach(([catName, count]) => {
          if (count > 0 && count < 15) {
            const cleanCatName = catName.replace("を感じたい", "");
            const nextLevel = count + 1;
            const targetCount = nextLevel;
            addMilestone({
              code: `level_badge_theme_${catName}_${nextLevel}`,
              name_ja: getLevelName(`${cleanCatName}探究`, nextLevel),
              subtitle_en: getLevelEnglish(`${cleanCatName} Theme`, nextLevel),
              rarity: Math.floor((nextLevel - 1) / 5) + 1,
              currentCount: count,
              targetCount,
              remaining: targetCount - count,
              progressPct: Math.min(99, Math.round((count / targetCount) * 100)),
              categoryLabel: `印目（${cleanCatName}）`,
            });
          }
        });

        // 6. 継続・物語の固定称号（10箇所等）
        if (totalStamps > 0 && totalStamps < 10) {
          addMilestone({
            code: "the_persistent",
            name_ja: "継続する者",
            subtitle_en: "The Persistent",
            rarity: 1,
            currentCount: totalStamps,
            targetCount: 10,
            remaining: 10 - totalStamps,
            progressPct: Math.min(99, Math.round((totalStamps / 10) * 100)),
            categoryLabel: "一般（継続実績）",
          });
        }

        candidateMilestones.sort((a, b) => {
          if (a.remaining !== b.remaining) return a.remaining - b.remaining;
          return b.progressPct - a.progressPct;
        });

        setNextMilestones(candidateMilestones.slice(0, 4));

        // --- 街歩きライフログの4大境地メーター算出 ---
        const tsuredachiCount = eventsList.filter((e: any) => Boolean(e.group_id)).length;
        const withMemoryCount = eventsList.filter((e: any) => {
          const hasPhoto = Boolean(e.photo_url && String(e.photo_url).trim());
          const hasMemo = Boolean(e.memo && String(e.memo).trim());
          let hasLocalMemo = false;
          if (typeof window !== "undefined" && e.id) {
            try {
              hasLocalMemo = Boolean(window.localStorage.getItem(`shuin_memo_${e.id}`));
            } catch {
              // ignore
            }
          }
          return hasPhoto || hasMemo || hasLocalMemo;
        }).length;

        const spotVisitCounts: Record<string, number> = {};
        let revisitCount = 0;
        const sortedEvents = [...eventsList].sort(
          (a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        sortedEvents.forEach((ev: any) => {
          if (!ev.spot_id) return;
          spotVisitCounts[ev.spot_id] = (spotVisitCounts[ev.spot_id] || 0) + 1;
          if (spotVisitCounts[ev.spot_id] >= 2) {
            revisitCount += 1;
          }
        });

        setLifelogRanks([
          computeLifelogRank(
            "total_shuin",
            "街歩きの総印数",
            "訪れたスポットに刻んだ累計のしるし",
            totalStamps
          ),
          computeLifelogRank(
            "tsuredachi",
            "連れ立ちの歩み",
            "友人や家族と共に街を巡ったしるし",
            tsuredachiCount
          ),
          computeLifelogRank(
            "memory_weaver",
            "記憶の紡ぎ手",
            "写真や思い出のあとがきを添えた記録",
            withMemoryCount
          ),
          computeLifelogRank(
            "revisit",
            "なじみの再訪",
            "季節や日を変えて再び訪れた場所のしるし",
            revisitCount
          ),
        ]);
      } finally {
        setDataLoading(false);
      }
    }

    if (!authLoading) {
      fetchBadgesAndProgress();
    }
  }, [user, authLoading, refreshUnseen]);

  const earnedCount = useMemo(() => items.filter((b) => b.earned).length, [items]);
  const unearnedCount = useMemo(() => items.filter((b) => !b.earned).length, [items]);

  const shown = useMemo(() => {
    let list = rarityFilter ? items.filter((b) => b.rarity === rarityFilter) : items;
    if (!showUnearned) list = list.filter((b) => b.earned);
    return [...list].sort((a, b) => Number(b.earned) - Number(a.earned));
  }, [items, rarityFilter, showUnearned]);

  const categoriesMap = useMemo(() => {
    const map: Record<string, { label: string; items: BadgeItem[] }> = {
      area: { label: "地域（エリア）", items: [] },
      railway: { label: "路線沿線", items: [] },
      prefecture: { label: "都道府県", items: [] },
      theme: { label: "印目（カテゴリ・属性）", items: [] },
      general: { label: "一般（全体実績・継続）", items: [] },
      special: { label: "特別・その他（季節・イベント）", items: [] },
    };

    shown.forEach((b) => {
      const info = parseLevelBadge(b.code);
      if (info) {
        if (map[info.category]) {
          map[info.category].items.push(b);
        } else {
          map.general.items.push(b);
        }
      } else if (
        b.category === "seasonal" ||
        b.category === "founder" ||
        b.category === "route" ||
        b.category === "quiz" ||
        b.category === "special"
      ) {
        map.special.items.push(b);
      } else if (
        b.category === "visit" ||
        b.category === "cumulative" ||
        b.category === "story" ||
        b.category === "general"
      ) {
        map.general.items.push(b);
      } else {
        map.special.items.push(b);
      }
    });

    return map;
  }, [shown]);

  return {
    items,
    shown,
    categoriesMap,
    earnedCount,
    unearnedCount,
    nextMilestones,
    lifelogRanks,
    dataLoading,
    rarityFilter,
    setRarityFilter,
    showUnearned,
    setShowUnearned,
  };
}
