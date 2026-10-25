"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { computeRouteWalkMetrics, RouteWalkMetrics } from "@/utils/routeMetrics";

export type TimeSceneKey = "morning" | "afternoon" | "evening" | "night";

export interface TimeSceneInfo {
  key: TimeSceneKey;
  icon: string;
  title: string;
  subtitle: string;
}

export type MoodFilterKey =
  | "all"
  | "shrine_history"
  | "cafe_gourmet"
  | "nature_park"
  | "culture_art";

export interface MoodFilterOption {
  value: MoodFilterKey;
  label: string;
}

export const MOOD_FILTER_OPTIONS: MoodFilterOption[] = [
  { value: "all", label: "すべて" },
  { value: "shrine_history", label: "⛩️ 社寺・歴史" },
  { value: "cafe_gourmet", label: "☕ 甘味・カフェ・食" },
  { value: "nature_park", label: "🌿 公園・自然・癒し" },
  { value: "culture_art", label: "🎨 文化・建築・街並み" },
];

export type FortuneLabel = "大吉縁" | "吉縁" | "風流縁" | "発見縁";

export interface OracleResult {
  fortuneLabel: FortuneLabel;
  walkTip: string;
  luckySpot: {
    name: string;
    description?: string;
    address?: string;
  };
  route: {
    id: string;
    title: string;
    description?: string;
    prefecture?: string;
    category?: string;
    thumbnail_url?: string;
    walkMetrics: RouteWalkMetrics;
    [key: string]: any;
  };
}

const FORTUNE_LABELS: FortuneLabel[] = ["大吉縁", "吉縁", "風流縁", "発見縁"];

const WALK_TIPS: string[] = [
  "路地裏の小さな祠や老舗の看板に目を向けると、素敵な発見がありそうです。",
  "いつもより一歩ゆっくり歩いて、街の音や季節の風を感じてみましょう。",
  "気になる脇道があれば、少しだけ覗いてみると新しい景色に出会えます。",
  "歩いたあとの一服を楽しみに、街の空気を味わいながらめぐりましょう。",
  "建物の瓦や石畳、街路樹の彩りなど、足元や頭上の景色にも目を向けてみてください。",
  "地元の人が通う小さな商店や甘味処に、その街ならではの温もりが宿っています。",
  "写真を撮る前にひと呼吸おいて、目の前の風景を心に刻んでみましょう。",
];

const MOOD_KEYWORDS: Record<Exclude<MoodFilterKey, "all">, string[]> = {
  shrine_history: [
    "歴史",
    "社寺",
    "神社",
    "寺",
    "氷川",
    "八幡",
    "天満",
    "観音",
    "不動",
    "城",
    "宿場",
    "古道",
    "江戸",
    "明治",
    "史跡",
    "参道",
    "鳥居",
    "稲荷",
    "大師",
    "弁財天",
    "七福神",
  ],
  cafe_gourmet: [
    "グルメ",
    "カフェ",
    "甘味",
    "食",
    "喫茶",
    "コーヒー",
    "珈琲",
    "茶",
    "スイーツ",
    "和菓子",
    "パン",
    "ベーカリー",
    "ランチ",
    "食べ歩き",
    "老舗",
    "せんべい",
    "団子",
    "だんご",
    "蕎麦",
    "そば",
    "うどん",
    "酒",
    "商店街",
  ],
  nature_park: [
    "自然",
    "公園",
    "緑道",
    "川",
    "水辺",
    "池",
    "森",
    "庭園",
    "桜",
    "花",
    "並木",
    "遊歩道",
    "渓谷",
    "山",
    "坂",
    "湧水",
    "せせらぎ",
    "癒し",
    "植物",
    "沼",
    "見沼",
  ],
  culture_art: [
    "文化",
    "芸術",
    "アート",
    "建築",
    "街並み",
    "美術館",
    "博物館",
    "記念館",
    "文学",
    "人形",
    "伝統",
    "工芸",
    "レトロ",
    "近代",
    "洋館",
    "ギャラリー",
    "映画",
    "アニメ",
    "本",
    "書店",
    "図書館",
  ],
};

function getTimeSceneByHour(hour: number): TimeSceneInfo {
  if (hour >= 5 && hour <= 10) {
    return {
      key: "morning",
      icon: "🌅",
      title: "清々しい朝の街歩き",
      subtitle: "朝の澄んだ空気のなか、静かな社寺や緑道をめぐるひととき。",
    };
  }
  if (hour >= 11 && hour <= 15) {
    return {
      key: "afternoon",
      icon: "☀️",
      title: "陽だまりの昼下がり散策",
      subtitle: "美味しい甘味やランチ、路地裏の小さな名店を訪ねる午後。",
    };
  }
  if (hour >= 16 && hour <= 18) {
    return {
      key: "evening",
      icon: "🌇",
      title: "茜色の夕暮れ逍遥",
      subtitle: "夕日が街並みを染める頃、少し寄り道して帰る風流な散歩道。",
    };
  }
  return {
    key: "night",
    icon: "🌙",
    title: "静寂の宵まち・明日への散歩支度",
    subtitle: "灯りがともる夜の街角や、次に歩きたい物語をゆっくり探す時間。",
  };
}

function getTodayStorageKey(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `shuin_daily_oracle_${yyyy}-${mm}-${dd}`;
}

export function useDailyWalkOracle(routes: any[] = []) {
  const [timeScene, setTimeScene] = useState<TimeSceneInfo>(() =>
    getTimeSceneByHour(12)
  );
  const [moodFilter, setMoodFilter] = useState<MoodFilterKey>("all");
  const [oracleResult, setOracleResult] = useState<OracleResult | null>(null);
  const [isOracleOpen, setIsOracleOpen] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeScene(getTimeSceneByHour(currentHour));
  }, []);

  const routesWithMetrics = useMemo(() => {
    return (routes || []).map((route) => {
      const walkMetrics: RouteWalkMetrics =
        route.walkMetrics ||
        computeRouteWalkMetrics(
          Array.isArray(route.spots) ? route.spots : [],
          route.rarity_estimated_min
        );
      return {
        ...route,
        walkMetrics,
      };
    });
  }, [routes]);

  const moodFilteredRoutes = useMemo(() => {
    if (moodFilter === "all") return routesWithMetrics;
    const keywords = MOOD_KEYWORDS[moodFilter] || [];
    const matched = routesWithMetrics.filter((route) => {
      const haystacks: string[] = [
        route.category || "",
        route.title || "",
        route.description || "",
      ];
      if (Array.isArray(route.spots)) {
        for (const s of route.spots) {
          if (s?.name) haystacks.push(s.name);
          if (s?.description) haystacks.push(s.description);
        }
      }
      const combined = haystacks.join(" ").toLowerCase();
      return keywords.some((kw) => combined.includes(kw.toLowerCase()));
    });
    return matched;
  }, [routesWithMetrics, moodFilter]);

  const buildOracleFromRoute = useCallback(
    (
      targetRoute: any,
      fortuneIdx: number,
      tipIdx: number,
      spotIdx: number
    ): OracleResult => {
      const fortuneLabel =
        FORTUNE_LABELS[Math.abs(fortuneIdx) % FORTUNE_LABELS.length];
      const walkTip = WALK_TIPS[Math.abs(tipIdx) % WALK_TIPS.length];
      const spots = Array.isArray(targetRoute.spots) ? targetRoute.spots : [];
      const chosenSpot =
        spots.length > 0
          ? spots[Math.abs(spotIdx) % spots.length]
          : {
              name: `${targetRoute.title}の起点スポット`,
              description: targetRoute.description || "",
            };

      return {
        fortuneLabel,
        walkTip,
        luckySpot: {
          name: chosenSpot?.name || "街角の注目スポット",
          description: chosenSpot?.description || undefined,
          address: chosenSpot?.address || chosenSpot?.city || undefined,
        },
        route: targetRoute,
      };
    },
    []
  );

  const generateNewOracle = useCallback(
    (excludeRouteId?: string) => {
      const pool =
        moodFilteredRoutes.length > 0 ? moodFilteredRoutes : routesWithMetrics;
      if (pool.length === 0) return;

      const candidates =
        excludeRouteId && pool.length > 1
          ? pool.filter((r) => r.id !== excludeRouteId)
          : pool;

      const pickedRoute =
        candidates[Math.floor(Math.random() * candidates.length)] || pool[0];
      const fortuneIdx = Math.floor(Math.random() * FORTUNE_LABELS.length);
      const tipIdx = Math.floor(Math.random() * WALK_TIPS.length);
      const spotsLen = Array.isArray(pickedRoute.spots)
        ? Math.max(1, pickedRoute.spots.length)
        : 1;
      const spotIdx = Math.floor(Math.random() * spotsLen);

      const result = buildOracleFromRoute(
        pickedRoute,
        fortuneIdx,
        tipIdx,
        spotIdx
      );
      setOracleResult(result);
      setIsOracleOpen(true);

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(
            getTodayStorageKey(),
            JSON.stringify({
              routeId: pickedRoute.id,
              fortuneIdx,
              tipIdx,
              spotIdx,
            })
          );
        } catch {
          // ignore storage errors
        }
      }
    },
    [moodFilteredRoutes, routesWithMetrics, buildOracleFromRoute]
  );

  const drawWalkOracle = useCallback(() => {
    if (routesWithMetrics.length === 0) return;

    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(getTodayStorageKey());
        if (raw) {
          const parsed = JSON.parse(raw);
          const savedRoute = routesWithMetrics.find(
            (r) => r.id === parsed?.routeId
          );
          if (savedRoute) {
            const result = buildOracleFromRoute(
              savedRoute,
              parsed.fortuneIdx ?? 0,
              parsed.tipIdx ?? 0,
              parsed.spotIdx ?? 0
            );
            setOracleResult(result);
            setIsOracleOpen(true);
            return;
          }
        }
      } catch {
        // ignore parse errors
      }
    }

    generateNewOracle();
  }, [routesWithMetrics, buildOracleFromRoute, generateNewOracle]);

  const redrawWalkOracle = useCallback(() => {
    generateNewOracle(oracleResult?.route?.id);
  }, [generateNewOracle, oracleResult]);

  const closeOracleModal = useCallback(() => {
    setIsOracleOpen(false);
  }, []);

  return {
    timeScene,
    moodFilter,
    setMoodFilter,
    moodFilteredRoutes,
    oracleResult,
    isOracleOpen,
    drawWalkOracle,
    redrawWalkOracle,
    closeOracleModal,
  };
}
