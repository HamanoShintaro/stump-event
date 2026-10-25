"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { getDistance } from "geolib";
import { computeRouteWalkMetrics, RouteWalkMetrics } from "@/utils/routeMetrics";
import { RouteStat } from "@/utils/routeStats";

export type DurationFilter = "all" | "short" | "medium" | "long";
export type RouteSortBy = "newest" | "nearby" | "walkable" | "popular";

export interface EnrichedRoute {
  id: string;
  title: string;
  description: string;
  prefecture?: string;
  category?: string;
  budget_tier?: number;
  thumbnail_url?: string;
  created_at?: string;
  area_name?: string;
  spots?: any[];
  walkMetrics: RouteWalkMetrics;
  distanceFromUserKm: number | null;
  stats: RouteStat;
  [key: string]: any;
}

export function useRouteDiscovery(
  initialRoutes: any[],
  statsMap: Record<string, RouteStat>,
  initialKeyword = ""
) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [durationFilter, setDurationFilter] = useState<DurationFilter>("all");
  const [sortBy, setSortBy] = useState<RouteSortBy>("newest");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    setKeyword(initialKeyword);
  }, [initialKeyword]);

  const requestUserLocation = useCallback(() => {
    if (typeof window === "undefined" || !("geolocation" in navigator)) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);
      },
      () => {
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
    );
  }, []);

  // Passively check if geolocation permission is already granted on mount
  useEffect(() => {
    if (typeof window === "undefined" || !("permissions" in navigator)) return;
    navigator.permissions
      .query({ name: "geolocation" as PermissionName })
      .then((res) => {
        if (res.state === "granted") {
          requestUserLocation();
        }
      })
      .catch(() => {
        // ignore
      });
  }, [requestUserLocation]);

  const handleSortChange = useCallback(
    (nextSort: RouteSortBy) => {
      setSortBy(nextSort);
      if (nextSort === "nearby" && !userLocation) {
        requestUserLocation();
      }
    },
    [userLocation, requestUserLocation]
  );

  const enrichedRoutes: EnrichedRoute[] = useMemo(() => {
    return (initialRoutes || []).map((route) => {
      const walkMetrics = computeRouteWalkMetrics(
        route.spots || [],
        route.rarity_estimated_min
      );

      let distanceFromUserKm: number | null = null;
      if (
        userLocation &&
        walkMetrics.centerLat !== null &&
        walkMetrics.centerLng !== null
      ) {
        try {
          const distM = getDistance(
            { latitude: userLocation.lat, longitude: userLocation.lng },
            { latitude: walkMetrics.centerLat, longitude: walkMetrics.centerLng }
          );
          distanceFromUserKm = Math.round((distM / 1000) * 10) / 10;
        } catch {
          distanceFromUserKm = null;
        }
      }

      const stats = statsMap[route.id] || { participants: 0, favorites: 0 };

      return {
        ...route,
        walkMetrics,
        distanceFromUserKm,
        stats,
      };
    });
  }, [initialRoutes, statsMap, userLocation]);

  const filteredRoutes = useMemo(() => {
    const q = keyword.trim().toLowerCase();

    const matches = enrichedRoutes.filter((route) => {
      // Keyword filter
      if (q) {
        const inTitle = (route.title || "").toLowerCase().includes(q);
        const inDesc = (route.description || "").toLowerCase().includes(q);
        const inPref = (route.prefecture || "").toLowerCase().includes(q);
        const inCat = (route.category || "").toLowerCase().includes(q);
        const inArea = (route.area_name || "").toLowerCase().includes(q);
        const inSpots = (route.spots || []).some(
          (s: any) =>
            (s?.name || "").toLowerCase().includes(q) ||
            (s?.address || "").toLowerCase().includes(q) ||
            (s?.city || "").toLowerCase().includes(q)
        );
        if (!inTitle && !inDesc && !inPref && !inCat && !inArea && !inSpots) {
          return false;
        }
      }

      // Duration filter
      const mins = route.walkMetrics.estimatedMinutes;
      if (durationFilter === "short" && mins > 45) return false;
      if (durationFilter === "medium" && (mins <= 45 || mins > 90)) return false;
      if (durationFilter === "long" && mins <= 90) return false;

      return true;
    });

    // Sort
    const sorted = [...matches];
    if (sortBy === "nearby") {
      sorted.sort((a, b) => {
        if (a.distanceFromUserKm === null && b.distanceFromUserKm === null) return 0;
        if (a.distanceFromUserKm === null) return 1;
        if (b.distanceFromUserKm === null) return -1;
        return a.distanceFromUserKm - b.distanceFromUserKm;
      });
    } else if (sortBy === "walkable") {
      sorted.sort(
        (a, b) =>
          a.walkMetrics.estimatedMinutes - b.walkMetrics.estimatedMinutes ||
          a.walkMetrics.distanceKm - b.walkMetrics.distanceKm
      );
    } else if (sortBy === "popular") {
      sorted.sort((a, b) => {
        const scoreA = a.stats.participants * 2 + a.stats.favorites * 3;
        const scoreB = b.stats.participants * 2 + b.stats.favorites * 3;
        return scoreB - scoreA;
      });
    } else {
      // newest
      sorted.sort((a, b) => {
        const tA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const tB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return tB - tA;
      });
    }

    return sorted;
  }, [enrichedRoutes, keyword, durationFilter, sortBy]);

  return {
    keyword,
    setKeyword,
    durationFilter,
    setDurationFilter,
    sortBy,
    handleSortChange,
    userLocation,
    locating,
    requestUserLocation,
    filteredRoutes,
    totalCount: enrichedRoutes.length,
  };
}
