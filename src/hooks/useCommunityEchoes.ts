"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { normalizeLocalImageUrl } from "@/utils/stampMedia";

export interface CommunityEchoItem {
  id: string;
  spotId: string;
  spotName: string;
  visitorNumber: number | null;
  visitedAt: string;
  formattedDate: string;
  formattedTime: string;
  seasonTimeLabel: string;
  travelerLabel: string;
  memo: string | null;
  photoUrl: string | null;
  isTsuredachi: boolean;
}

export interface UseCommunityEchoesOptions {
  routeId: string;
  spotId?: string;
  spots?: Array<{ id: string; name: string }>;
  refreshKey?: number | string;
}

function getSeasonLabel(month: number): string {
  if (month >= 3 && month <= 5) return "春";
  if (month >= 6 && month <= 8) return "夏";
  if (month >= 9 && month <= 11) return "秋";
  return "冬";
}

function getTimeOfDayPoetic(hour: number): {
  bandKey: "morning" | "afternoon" | "evening" | "night";
  shortLabel: string;
} {
  if (hour >= 5 && hour <= 10) {
    return { bandKey: "morning", shortLabel: "朝" };
  }
  if (hour >= 11 && hour <= 15) {
    return { bandKey: "afternoon", shortLabel: "昼下がり" };
  }
  if (hour >= 16 && hour <= 18) {
    return { bandKey: "evening", shortLabel: "夕暮れ" };
  }
  return { bandKey: "night", shortLabel: "宵" };
}

const TIME_BAND_LABELS: Record<
  "morning" | "afternoon" | "evening" | "night",
  string
> = {
  morning: "清々しい朝の散歩（5〜10時）",
  afternoon: "陽だまりの昼下がり（11〜15時）",
  evening: "夕暮れの逍遥（16〜18時）",
  night: "宵まちの散策（19時〜）",
};

export function useCommunityEchoes({
  routeId,
  spotId,
  spots = [],
  refreshKey,
}: UseCommunityEchoesOptions) {
  const [totalFootprints, setTotalFootprints] = useState<number>(0);
  const [popularTimeBand, setPopularTimeBand] = useState<string | null>(null);
  const [echoItems, setEchoItems] = useState<CommunityEchoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const spotsKey = spots
    .map((s) => `${s?.id ?? ""}:${s?.name ?? ""}`)
    .join("|");

  const spotMap = useMemo(() => {
    const map = new Map<string, string>();
    if (!spotsKey) return map;
    for (const pair of spotsKey.split("|")) {
      const idx = pair.indexOf(":");
      if (idx > 0) {
        const id = pair.slice(0, idx);
        const name = pair.slice(idx + 1);
        if (id && name) {
          map.set(id, name);
        }
      }
    }
    return map;
  }, [spotsKey]);

  const spotIdsKey = useMemo(
    () => Array.from(spotMap.keys()).join(","),
    [spotMap]
  );

  const fetchEchoes = useCallback(async () => {
    if (!routeId && !spotId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const targetSpotIds = spotId
        ? [spotId]
        : spotIdsKey
          ? spotIdsKey.split(",").filter(Boolean)
          : [];

      let query = supabase
        .from("stamp_events")
        .select(
          "id, spot_id, route_id, user_id, group_id, visitor_number, memo, photo_url, created_at",
          { count: "exact" }
        )
        .order("created_at", { ascending: false })
        .limit(40);

      if (spotId) {
        query = query.eq("spot_id", spotId);
      } else if (targetSpotIds.length > 0) {
        query = query.in("spot_id", targetSpotIds);
      } else {
        query = query.eq("route_id", routeId);
      }

      const { data: rows, count, error } = await query;
      if (error || !rows) {
        setLoading(false);
        return;
      }

      setTotalFootprints(count ?? rows.length);

      if (rows.length === 0) {
        setEchoItems([]);
        setPopularTimeBand(null);
        setLoading(false);
        return;
      }

      // Compute popular time band
      const bandCounts: Record<
        "morning" | "afternoon" | "evening" | "night",
        number
      > = {
        morning: 0,
        afternoon: 0,
        evening: 0,
        night: 0,
      };

      for (const row of rows) {
        if (!row.created_at) continue;
        const dt = new Date(row.created_at);
        if (Number.isNaN(dt.getTime())) continue;
        const { bandKey } = getTimeOfDayPoetic(dt.getHours());
        bandCounts[bandKey] += 1;
      }

      const topBand = (
        Object.entries(bandCounts) as Array<
          ["morning" | "afternoon" | "evening" | "night", number]
        >
      ).sort((a, b) => b[1] - a[1])[0];

      if (topBand && topBand[1] > 0) {
        setPopularTimeBand(TIME_BAND_LABELS[topBand[0]]);
      } else {
        setPopularTimeBand(null);
      }

      // Resolve display names where accessible via public.users
      const userIds = Array.from(
        new Set(rows.map((r: any) => r.user_id).filter(Boolean))
      );
      const userNameMap = new Map<string, string>();
      if (userIds.length > 0) {
        try {
          const { data: usersData } = await supabase
            .from("users")
            .select("id, display_name")
            .in("id", userIds);
          if (usersData) {
            for (const u of usersData) {
              if (u?.id && u?.display_name && String(u.display_name).trim()) {
                userNameMap.set(u.id, String(u.display_name).trim());
              }
            }
          }
        } catch {
          // Ignore if RLS restricts public.users
        }
      }

      // Prioritize events with memo first, then recent visits
      const withMemory = rows.filter(
        (r: any) => r.memo && String(r.memo).trim().length > 0
      );
      const withoutMemory = rows.filter(
        (r: any) => !(r.memo && String(r.memo).trim().length > 0)
      );

      const prioritized = [...withMemory, ...withoutMemory].slice(0, 6);

      const mapped: CommunityEchoItem[] = prioritized.map((row: any, idx: number) => {
        const dt = row.created_at ? new Date(row.created_at) : new Date();
        const validDate = !Number.isNaN(dt.getTime()) ? dt : new Date();
        const season = getSeasonLabel(validDate.getMonth() + 1);
        const { shortLabel } = getTimeOfDayPoetic(validDate.getHours());
        const formattedDate = `${validDate.getFullYear()}.${String(
          validDate.getMonth() + 1
        ).padStart(2, "0")}.${String(validDate.getDate()).padStart(2, "0")}`;
        const formattedTime = `${String(validDate.getHours()).padStart(
          2,
          "0"
        )}:${String(validDate.getMinutes()).padStart(2, "0")}`;

        const resolvedName = row.user_id ? userNameMap.get(row.user_id) : null;
        const visNum =
          typeof row.visitor_number === "number" && row.visitor_number > 0
            ? row.visitor_number
            : Math.max(1, (count ?? rows.length) - idx);

        return {
          id: row.id,
          spotId: row.spot_id,
          spotName: spotMap.get(row.spot_id) || "街角のスポット",
          visitorNumber: visNum,
          visitedAt: row.created_at || new Date().toISOString(),
          formattedDate,
          formattedTime,
          seasonTimeLabel: `${season}の${shortLabel}`,
          travelerLabel: resolvedName ? `${resolvedName} さん` : "街歩きの旅人",
          memo: row.memo && String(row.memo).trim() ? String(row.memo).trim() : null,
          photoUrl: normalizeLocalImageUrl(row.photo_url),
          isTsuredachi: Boolean(row.group_id),
        };
      });

      setEchoItems(mapped);
    } catch (err) {
      console.error("Failed to fetch community echoes:", err);
    } finally {
      setLoading(false);
    }
  }, [routeId, spotId, spotIdsKey, spotMap]);

  useEffect(() => {
    fetchEchoes();
  }, [fetchEchoes, refreshKey]);

  return {
    totalFootprints,
    popularTimeBand,
    echoItems,
    loading,
    refetchEchoes: fetchEchoes,
  };
}
