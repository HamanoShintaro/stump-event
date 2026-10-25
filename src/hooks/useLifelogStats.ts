"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { supabase } from "@/lib/supabase";

export interface LifelogStats {
  totalStamps: number;
  uniqueSpots: number;
  visitedCitiesCount: number;
  visitedCitiesList: string[];
  completedRoutesCount: number;
  tsuredachiVisitsCount: number;
  memoriesRecordedCount: number;
  revisitCount: number;
}

export interface MemoryHighlight {
  eventId: string;
  spotId: string;
  spotName: string;
  spotArea: string;
  routeName: string;
  routeId: string;
  routeCategory?: string;
  visitedAt: string;
  visitorNumber: number | null;
  memo: string | null;
  photoUrl: string | null;
  isTsuredachi: boolean;
  visitOrder: number;
  visitOrderLabel: string;
  spotFragment: string;
}

function extractCityFromAddress(address?: string | null, prefecture?: string | null): string {
  if (!address) return "";
  let cleaned = address.trim();
  if (prefecture && cleaned.startsWith(prefecture)) {
    cleaned = cleaned.slice(prefecture.length).trim();
  } else {
    cleaned = cleaned.replace(/^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)/, "");
  }
  const match = cleaned.match(/^(.+?[市区町村郡])/);
  return match ? match[1] : "";
}

function readLocalMemo(eventId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const val = window.localStorage.getItem(`shuin_memo_${eventId}`);
    return val && val.trim() ? val.trim() : null;
  } catch {
    return null;
  }
}

function readLocalPhoto(eventId: string, spotId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const byEv = window.localStorage.getItem(`shuin_photo_${eventId}`);
    if (byEv && byEv.trim()) return byEv.trim();
    const bySpot = window.localStorage.getItem(`shuin_photo_spot_${spotId}`);
    if (bySpot && bySpot.trim()) return bySpot.trim();
    return null;
  } catch {
    return null;
  }
}

const DEFAULT_STATS: LifelogStats = {
  totalStamps: 0,
  uniqueSpots: 0,
  visitedCitiesCount: 0,
  visitedCitiesList: [],
  completedRoutesCount: 0,
  tsuredachiVisitsCount: 0,
  memoriesRecordedCount: 0,
  revisitCount: 0,
};

export function useLifelogStats(userId: string | undefined) {
  const [stats, setStats] = useState<LifelogStats>(DEFAULT_STATS);
  const [highlightCandidates, setHighlightCandidates] = useState<MemoryHighlight[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      setStats(DEFAULT_STATS);
      setHighlightCandidates([]);
      setHighlightIndex(0);
      return;
    }

    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const [eventsRes, stampsRes, userRoutesRes, routeBadgesRes, myGroupsRes] = await Promise.all([
          supabase
            .from("stamp_events")
            .select("id, created_at, visitor_number, spot_id, route_id, group_id, memo, photo_url")
            .eq("user_id", userId)
            .order("created_at", { ascending: false }),
          supabase
            .from("stamps")
            .select("spot_id, route_id, acquired_at")
            .eq("user_id", userId),
          supabase
            .from("user_routes")
            .select("route_id, status, completed_at")
            .eq("user_id", userId),
          supabase
            .from("badge_assignments")
            .select("badges(category, route_id)")
            .eq("user_id", userId),
          supabase
            .from("group_members")
            .select("group_id, groups(id, route_id)")
            .eq("user_id", userId),
        ]);

        const events = eventsRes.data || [];
        const stamps = stampsRes.data || [];
        const userRoutes = userRoutesRes.data || [];

        const routeToGroupIdMap: Record<string, string> = {};
        (myGroupsRes.data || []).forEach((row: any) => {
          const g = Array.isArray(row.groups) ? row.groups[0] : row.groups;
          if (g?.id && g?.route_id) {
            routeToGroupIdMap[g.route_id] = g.id;
          }
        });

        const allSpotIds = Array.from(
          new Set<string>([
            ...events.map((e: any) => e.spot_id).filter(Boolean),
            ...stamps.map((s: any) => s.spot_id).filter(Boolean),
          ])
        );

        const allRouteIds = Array.from(
          new Set<string>([
            ...events.map((e: any) => e.route_id).filter(Boolean),
            ...stamps.map((s: any) => s.route_id).filter(Boolean),
            ...userRoutes.map((ur: any) => ur.route_id).filter(Boolean),
          ])
        );

        const spotMap: Record<
          string,
          {
            name: string;
            city: string;
            prefecture: string;
            address: string;
            f7_fragment: string;
            route_id?: string;
          }
        > = {};
        const routeMap: Record<string, { title: string; category?: string; prefecture?: string }> = {};

        if (allSpotIds.length > 0) {
          const { data: spotsData } = await supabase
            .from("spots")
            .select("id, name, address, city, prefecture, f7_fragment, route_id")
            .in("id", allSpotIds);

          (spotsData || []).forEach((sp: any) => {
            const resolvedCity =
              sp.city || extractCityFromAddress(sp.address, sp.prefecture) || sp.prefecture || "";
            spotMap[sp.id] = {
              name: sp.name || "スポット",
              city: resolvedCity,
              prefecture: sp.prefecture || "",
              address: sp.address || "",
              f7_fragment: sp.f7_fragment || "",
              route_id: sp.route_id,
            };
          });
        }

        if (allRouteIds.length > 0) {
          const { data: routesData } = await supabase
            .from("routes")
            .select("id, title, category, prefecture")
            .in("id", allRouteIds);

          (routesData || []).forEach((rt: any) => {
            routeMap[rt.id] = {
              title: rt.title || "ルート",
              category: rt.category,
              prefecture: rt.prefecture,
            };
          });
        }

        // 完走ルート数の算出
        const completedRouteIds = new Set<string>();
        userRoutes.forEach((ur: any) => {
          if ((ur.status === "COMPLETED" || Boolean(ur.completed_at)) && ur.route_id) {
            completedRouteIds.add(ur.route_id);
          }
        });
        (routeBadgesRes.data || []).forEach((ba: any) => {
          const b = Array.isArray(ba.badges) ? ba.badges[0] : ba.badges;
          if (b && (b.category === "route" || b.category === "quiz") && b.route_id) {
            completedRouteIds.add(b.route_id);
          }
        });

        // 訪れた街（市区郡）一覧
        const citySet = new Set<string>();
        allSpotIds.forEach((sid) => {
          const c = spotMap[sid]?.city;
          if (c) citySet.add(c);
        });
        const visitedCitiesList = Array.from(citySet);

        // スポットごとの訪問順序・再訪数カウント
        const chronological = [...events].sort(
          (a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        const spotVisitCounter: Record<string, number> = {};
        const visitOrderById: Record<string, number> = {};
        let revisitCount = 0;

        chronological.forEach((ev: any) => {
          if (!ev.spot_id) return;
          const nextCount = (spotVisitCounter[ev.spot_id] || 0) + 1;
          spotVisitCounter[ev.spot_id] = nextCount;
          visitOrderById[ev.id] = nextCount;
          if (nextCount >= 2) {
            revisitCount += 1;
          }
        });

        let tsuredachiVisitsCount = 0;
        let memoriesRecordedCount = 0;

        const richHighlights: MemoryHighlight[] = [];
        const fallbackHighlights: MemoryHighlight[] = [];

        events.forEach((ev: any) => {
          const sp = spotMap[ev.spot_id];
          const rId = ev.route_id || sp?.route_id || "";
          const rt = routeMap[rId];
          const resolvedGroupId = ev.group_id || routeToGroupIdMap[rId] || null;
          const isTsuredachi = Boolean(resolvedGroupId);
          if (isTsuredachi) {
            tsuredachiVisitsCount += 1;
          }

          const localMemo = readLocalMemo(ev.id);
          const effectiveMemo =
            localMemo !== null ? localMemo : ev.memo && String(ev.memo).trim() ? String(ev.memo).trim() : null;

          const localPhoto = readLocalPhoto(ev.id, ev.spot_id);
          const effectivePhoto =
            ev.photo_url && String(ev.photo_url).trim()
              ? String(ev.photo_url).trim()
              : localPhoto;

          if (effectiveMemo || effectivePhoto) {
            memoriesRecordedCount += 1;
          }

          const order = visitOrderById[ev.id] || 1;
          const highlightItem: MemoryHighlight = {
            eventId: ev.id,
            spotId: ev.spot_id,
            spotName: sp?.name || "街角のスポット",
            spotArea: sp?.city || sp?.prefecture || rt?.prefecture || "",
            routeName: rt?.title || "街歩きの記録",
            routeId: rId,
            routeCategory: rt?.category,
            visitedAt: ev.created_at,
            visitorNumber: ev.visitor_number ?? null,
            memo: effectiveMemo,
            photoUrl: effectivePhoto,
            isTsuredachi,
            visitOrder: order,
            visitOrderLabel: order >= 2 ? `${order}回目の来訪` : "初来訪",
            spotFragment: sp?.f7_fragment || "",
          };

          if (effectivePhoto || effectiveMemo || isTsuredachi || order >= 2) {
            richHighlights.push(highlightItem);
          } else {
            fallbackHighlights.push(highlightItem);
          }
        });

        const totalStamps = Math.max(events.length, stamps.length);
        const uniqueSpots = allSpotIds.length;
        const candidates =
          richHighlights.length > 0
            ? [...richHighlights, ...fallbackHighlights]
            : fallbackHighlights;

        if (!cancelled) {
          setStats({
            totalStamps,
            uniqueSpots,
            visitedCitiesCount: visitedCitiesList.length,
            visitedCitiesList,
            completedRoutesCount: completedRouteIds.size,
            tsuredachiVisitsCount,
            memoriesRecordedCount,
            revisitCount,
          });
          setHighlightCandidates(candidates);
          setHighlightIndex(0);
        }
      } catch (err) {
        console.error("Failed to compute lifelog stats:", err);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  const nextMemoryHighlight = useCallback(() => {
    setHighlightCandidates((prev) => {
      if (prev.length <= 1) return prev;
      setHighlightIndex((idx) => (idx + 1) % prev.length);
      return prev;
    });
  }, []);

  const memoryHighlight = useMemo<MemoryHighlight | null>(() => {
    if (highlightCandidates.length === 0) return null;
    const safeIdx = highlightIndex % highlightCandidates.length;
    return highlightCandidates[safeIdx] || highlightCandidates[0];
  }, [highlightCandidates, highlightIndex]);

  const hasMultipleHighlights = highlightCandidates.length > 1;

  return {
    stats,
    memoryHighlight,
    nextMemoryHighlight,
    hasMultipleHighlights,
    loading,
  };
}
