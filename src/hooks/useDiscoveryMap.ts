"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { getDistance } from "geolib";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { parseWKBPoint } from "@/utils/wkb";
import { computeRouteWalkMetrics, RouteWalkMetrics } from "@/utils/routeMetrics";
import { isRouteCurrentlyActive } from "@/utils/userRoutes";
import { normalizeLocalImageUrl } from "@/utils/stampMedia";

export type MapLayerMode = "routes" | "footprints";
export type MapDurationFilter = "all" | "short" | "medium";
export type MapStatusFilter = "all" | "in_progress" | "bookmarked" | "completed";

export interface DiscoverySpot {
  id: string;
  name: string;
  order_index: number;
  location?: any;
  address?: string;
  city?: string;
  pos: [number, number];
  lat: number;
  lng: number;
}

export interface RouteProgressInfo {
  stampedCount: number;
  totalCount: number;
  isCompleted: boolean;
  isInProgress: boolean;
}

export interface DiscoveryRoute {
  id: string;
  title: string;
  description: string;
  prefecture?: string;
  category?: string;
  thumbnail_url?: string;
  budget_tier?: number;
  rarity_estimated_min?: number | null;
  created_at?: string;
  spots: DiscoverySpot[];
  avgPos: [number, number];
  walkMetrics: RouteWalkMetrics;
  distanceFromUserKm: number | null;
  progress: RouteProgressInfo;
  isBookmarked: boolean;
}

export interface VisitedFootprint {
  spotId: string;
  spotName: string;
  spotAddress?: string;
  routeId: string;
  routeTitle: string;
  routeCategory?: string;
  lat: number;
  lng: number;
  visitCount: number;
  latestStampedAt: string;
  latestMemo: string | null;
  latestPhotoUrl: string | null;
  visitorNumber: number | null;
}

const DEFAULT_CENTER: [number, number] = [35.9522665, 139.6833445];

function extractLatLng(spot: any): [number, number] | null {
  if (!spot) return null;
  if (typeof spot.lat === "number" && typeof spot.lng === "number" && !Number.isNaN(spot.lat) && !Number.isNaN(spot.lng)) {
    return [spot.lat, spot.lng];
  }
  if (typeof spot.location === "string") {
    const parsed = parseWKBPoint(spot.location);
    if (parsed) return [parsed.lat, parsed.lng];
  }
  if (spot.location && typeof spot.location === "object" && Array.isArray(spot.location.coordinates)) {
    const [lng, lat] = spot.location.coordinates;
    if (typeof lat === "number" && typeof lng === "number") {
      return [lat, lng];
    }
  }
  return null;
}

function readLocalBookmarks(userId: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(`shuin_bookmarks_${userId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function readLocalMemo(eventId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(`shuin_memo_${eventId}`);
  } catch {
    return null;
  }
}

export function useDiscoveryMap() {
  const { user } = useAuth();

  const [rawRoutes, setRawRoutes] = useState<any[]>([]);
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [hasRealGps, setHasRealGps] = useState(false);
  const [recenter, setRecenter] = useState(0);
  const [loadingRoutes, setLoadingRoutes] = useState(true);

  // User data states
  const [stampedByRoute, setStampedByRoute] = useState<Record<string, Set<string>>>({});
  const [activeRouteIds, setActiveRouteIds] = useState<Set<string>>(new Set());
  const [completedRouteIds, setCompletedRouteIds] = useState<Set<string>>(new Set());
  const [bookmarkedRouteIds, setBookmarkedRouteIds] = useState<Set<string>>(new Set());
  const [visitedFootprints, setVisitedFootprints] = useState<VisitedFootprint[]>([]);

  // Filter & Layer states
  const [mapLayerMode, setMapLayerMode] = useState<MapLayerMode>("routes");
  const [durationFilter, setDurationFilter] = useState<MapDurationFilter>("all");
  const [statusFilter, setStatusFilter] = useState<MapStatusFilter>("all");

  // Selection & animation states
  const [selectedRallyId, setSelectedRallyId] = useState<string | null>(null);
  const [selectedFootprint, setSelectedFootprint] = useState<VisitedFootprint | null>(null);
  const [drawnSpots, setDrawnSpots] = useState<DiscoverySpot[]>([]);
  const [showModal, setShowModal] = useState(false);

  // 1. Geolocation tracking
  useEffect(() => {
    let watchId: number | null = null;
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setUserPos([pos.coords.latitude, pos.coords.longitude]);
          setHasRealGps(true);
        },
        () => {
          setUserPos((prev) => prev || DEFAULT_CENTER);
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
      );
    } else {
      setUserPos(DEFAULT_CENTER);
    }
    return () => {
      if (watchId !== null && typeof window !== "undefined" && "geolocation" in navigator) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  // 2. Fetch published routes & spots
  useEffect(() => {
    let mounted = true;
    const fetchRoutes = async () => {
      setLoadingRoutes(true);
      try {
        const { data, error } = await supabase
          .from("routes")
          .select("*, spots(id, name, description, order_index, location, address)")
          .order("created_at", { ascending: false });

        if (!error && data && mounted) {
          const published = data.filter((r: any) => r.is_published !== false);
          const processed = published
            .map((rally: any) => {
              const rawSpots = Array.isArray(rally.spots) ? rally.spots : [];
              const validSpots: DiscoverySpot[] = [];
              let totalLat = 0;
              let totalLng = 0;

              for (const spot of rawSpots) {
                const pos = extractLatLng(spot);
                if (pos) {
                  totalLat += pos[0];
                  totalLng += pos[1];
                  validSpots.push({
                    ...spot,
                    pos,
                    lat: pos[0],
                    lng: pos[1],
                  });
                }
              }

              validSpots.sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

              if (validSpots.length === 0) return null;

              const walkMetrics = computeRouteWalkMetrics(validSpots, rally.rarity_estimated_min);
              const avgPos: [number, number] = [
                totalLat / validSpots.length,
                totalLng / validSpots.length,
              ];

              return {
                ...rally,
                spots: validSpots,
                avgPos,
                walkMetrics,
              };
            })
            .filter(Boolean);

          setRawRoutes(processed);
        }
      } catch (err) {
        console.error("Failed to fetch map routes:", err);
      } finally {
        if (mounted) setLoadingRoutes(false);
      }
    };

    fetchRoutes();
    return () => {
      mounted = false;
    };
  }, []);

  // 3. Fetch user stamps, stamp_events, user_routes, and bookmarks
  useEffect(() => {
    if (!user) {
      setStampedByRoute({});
      setActiveRouteIds(new Set());
      setCompletedRouteIds(new Set());
      setBookmarkedRouteIds(new Set());
      setVisitedFootprints([]);
      return;
    }

    let mounted = true;
    const fetchUserMapContext = async () => {
      try {
        const localBm = readLocalBookmarks(user.id);
        const [stampsRes, eventsRes, userRoutesRes, bookmarksRes] = await Promise.all([
          supabase
            .from("stamps")
            .select("spot_id, route_id, acquired_at")
            .eq("user_id", user.id),
          supabase
            .from("stamp_events")
            .select("id, spot_id, route_id, created_at, memo, photo_url, visitor_number")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false }),
          supabase
            .from("user_routes")
            .select("route_id, status, joined_at, completed_at")
            .eq("user_id", user.id),
          supabase
            .from("user_bookmarks")
            .select("route_id")
            .eq("user_id", user.id),
        ]);

        if (!mounted) return;

        // Bookmarks
        const bmSet = new Set<string>(localBm);
        if (!bookmarksRes.error && bookmarksRes.data) {
          bookmarksRes.data.forEach((b: any) => {
            if (b.route_id) bmSet.add(b.route_id);
          });
        }
        setBookmarkedRouteIds(bmSet);

        // User routes status
        const activeSet = new Set<string>();
        const compSet = new Set<string>();
        if (!userRoutesRes.error && userRoutesRes.data) {
          userRoutesRes.data.forEach((ur: any) => {
            if (!ur.route_id) return;
            if (ur.status === "COMPLETED" || ur.status === "completed" || ur.completed_at) {
              compSet.add(ur.route_id);
            } else if (isRouteCurrentlyActive(ur)) {
              activeSet.add(ur.route_id);
            }
          });
        }
        setActiveRouteIds(activeSet);
        setCompletedRouteIds(compSet);

        // Stamps & Stamp Events aggregation
        const routeStampMap: Record<string, Set<string>> = {};
        const stampsData = stampsRes.data || [];
        const eventsData = eventsRes.data || [];

        stampsData.forEach((s: any) => {
          if (!s.route_id || !s.spot_id) return;
          if (!routeStampMap[s.route_id]) routeStampMap[s.route_id] = new Set();
          routeStampMap[s.route_id].add(s.spot_id);
        });
        eventsData.forEach((ev: any) => {
          if (!ev.route_id || !ev.spot_id) return;
          if (!routeStampMap[ev.route_id]) routeStampMap[ev.route_id] = new Set();
          routeStampMap[ev.route_id].add(ev.spot_id);
        });
        setStampedByRoute(routeStampMap);

        // Build lookup map of spots & routes from rawRoutes + fallback query if needed
        const spotLookup = new Map<
          string,
          {
            name: string;
            address?: string;
            routeId: string;
            routeTitle: string;
            routeCategory?: string;
            lat: number;
            lng: number;
          }
        >();

        rawRoutes.forEach((r: any) => {
          (r.spots || []).forEach((sp: DiscoverySpot) => {
            spotLookup.set(sp.id, {
              name: sp.name,
              address: sp.address,
              routeId: r.id,
              routeTitle: r.title,
              routeCategory: r.category,
              lat: sp.lat,
              lng: sp.lng,
            });
          });
        });

        // Collect all visited spot IDs
        const allVisitedSpotIds = new Set<string>();
        eventsData.forEach((e: any) => {
          if (e.spot_id) allVisitedSpotIds.add(e.spot_id);
        });
        stampsData.forEach((s: any) => {
          if (s.spot_id) allVisitedSpotIds.add(s.spot_id);
        });

        const missingSpotIds = Array.from(allVisitedSpotIds).filter((id) => !spotLookup.has(id));
        if (missingSpotIds.length > 0) {
          const { data: extraSpots } = await supabase
            .from("spots")
            .select("id, name, address, location, route_id, routes(id, title, category)")
            .in("id", missingSpotIds);

          (extraSpots || []).forEach((es: any) => {
            const pos = extractLatLng(es);
            if (!pos) return;
            const rObj = Array.isArray(es.routes) ? es.routes[0] : es.routes;
            spotLookup.set(es.id, {
              name: es.name || "スポット",
              address: es.address,
              routeId: es.route_id || rObj?.id || "",
              routeTitle: rObj?.title || "街歩きルート",
              routeCategory: rObj?.category,
              lat: pos[0],
              lng: pos[1],
            });
          });
        }

        // Group events by spot_id to compute visitCount, latestStampedAt, latestMemo, latestPhotoUrl, visitorNumber
        const footprintBySpot = new Map<string, VisitedFootprint>();

        eventsData.forEach((ev: any) => {
          if (!ev.spot_id) return;
          const meta = spotLookup.get(ev.spot_id);
          if (!meta) return;

          const memoText =
            (ev.memo && String(ev.memo).trim()) ||
            readLocalMemo(ev.id) ||
            null;
          const photoUrl = normalizeLocalImageUrl(ev.photo_url);

          const existing = footprintBySpot.get(ev.spot_id);
          if (!existing) {
            footprintBySpot.set(ev.spot_id, {
              spotId: ev.spot_id,
              spotName: meta.name,
              spotAddress: meta.address,
              routeId: ev.route_id || meta.routeId,
              routeTitle: meta.routeTitle,
              routeCategory: meta.routeCategory,
              lat: meta.lat,
              lng: meta.lng,
              visitCount: 1,
              latestStampedAt: ev.created_at,
              latestMemo: memoText,
              latestPhotoUrl: photoUrl,
              visitorNumber: typeof ev.visitor_number === "number" ? ev.visitor_number : null,
            });
          } else {
            existing.visitCount += 1;
            if (!existing.latestMemo && memoText) existing.latestMemo = memoText;
            if (!existing.latestPhotoUrl && photoUrl) existing.latestPhotoUrl = photoUrl;
            if (existing.visitorNumber === null && typeof ev.visitor_number === "number") {
              existing.visitorNumber = ev.visitor_number;
            }
          }
        });

        // Include any stamp from `stamps` table that didn't have a `stamp_events` row
        stampsData.forEach((st: any) => {
          if (!st.spot_id || footprintBySpot.has(st.spot_id)) return;
          const meta = spotLookup.get(st.spot_id);
          if (!meta) return;
          footprintBySpot.set(st.spot_id, {
            spotId: st.spot_id,
            spotName: meta.name,
            spotAddress: meta.address,
            routeId: st.route_id || meta.routeId,
            routeTitle: meta.routeTitle,
            routeCategory: meta.routeCategory,
            lat: meta.lat,
            lng: meta.lng,
            visitCount: 1,
            latestStampedAt: st.acquired_at || st.created_at || new Date().toISOString(),
            latestMemo: null,
            latestPhotoUrl: null,
            visitorNumber: null,
          });
        });

        const sortedFootprints = Array.from(footprintBySpot.values()).sort(
          (a, b) => new Date(b.latestStampedAt).getTime() - new Date(a.latestStampedAt).getTime()
        );
        setVisitedFootprints(sortedFootprints);
      } catch (err) {
        console.error("Failed to fetch user map context:", err);
      }
    };

    fetchUserMapContext();
  }, [user, rawRoutes]);

  // 4. Compute routeProgressMap
  const routeProgressMap = useMemo(() => {
    const map: Record<string, RouteProgressInfo> = {};
    for (const r of rawRoutes) {
      const totalCount = Array.isArray(r.spots) ? r.spots.length : 0;
      const stampedSet = stampedByRoute[r.id];
      const stampedCount = stampedSet ? stampedSet.size : 0;
      const isCompleted =
        completedRouteIds.has(r.id) || (totalCount > 0 && stampedCount >= totalCount);
      const isInProgress =
        !isCompleted && (stampedCount > 0 || activeRouteIds.has(r.id));

      map[r.id] = {
        stampedCount,
        totalCount,
        isCompleted,
        isInProgress,
      };
    }
    return map;
  }, [rawRoutes, stampedByRoute, completedRouteIds, activeRouteIds]);

  // 5. Enrich all routes with distanceFromUserKm, progress, and bookmark status
  const enrichedRoutes: DiscoveryRoute[] = useMemo(() => {
    return rawRoutes.map((r: any) => {
      let distanceFromUserKm: number | null = null;
      if (userPos && r.avgPos) {
        try {
          const distM = getDistance(
            { latitude: userPos[0], longitude: userPos[1] },
            { latitude: r.avgPos[0], longitude: r.avgPos[1] }
          );
          distanceFromUserKm = Math.round((distM / 1000) * 10) / 10;
        } catch {
          distanceFromUserKm = null;
        }
      }

      const progress = routeProgressMap[r.id] || {
        stampedCount: 0,
        totalCount: (r.spots || []).length,
        isCompleted: false,
        isInProgress: false,
      };

      return {
        ...r,
        distanceFromUserKm,
        progress,
        isBookmarked: bookmarkedRouteIds.has(r.id),
      };
    });
  }, [rawRoutes, userPos, routeProgressMap, bookmarkedRouteIds]);

  // 6. Filter routes by durationFilter and statusFilter
  const filteredRoutes: DiscoveryRoute[] = useMemo(() => {
    return enrichedRoutes.filter((r) => {
      const mins = r.walkMetrics.estimatedMinutes;
      if (durationFilter === "short" && mins > 45) return false;
      if (durationFilter === "medium" && (mins <= 45 || mins > 90)) return false;

      if (statusFilter === "in_progress" && !r.progress.isInProgress) return false;
      if (statusFilter === "bookmarked" && !r.isBookmarked) return false;
      if (statusFilter === "completed" && !r.progress.isCompleted) return false;

      return true;
    });
  }, [enrichedRoutes, durationFilter, statusFilter]);

  // 7. Nearby / Featured routes sorted by distance from user (top 5)
  const nearbyRoutes: DiscoveryRoute[] = useMemo(() => {
    const copy = [...filteredRoutes];
    copy.sort((a, b) => {
      if (a.distanceFromUserKm !== null && b.distanceFromUserKm !== null) {
        return a.distanceFromUserKm - b.distanceFromUserKm;
      }
      if (a.distanceFromUserKm !== null) return -1;
      if (b.distanceFromUserKm !== null) return 1;
      return 0;
    });
    return copy.slice(0, 5);
  }, [filteredRoutes]);

  const selectedRally = useMemo(
    () => enrichedRoutes.find((r) => r.id === selectedRallyId) || null,
    [enrichedRoutes, selectedRallyId]
  );

  const setSelectedRally = useCallback((rally: DiscoveryRoute | null) => {
    setSelectedRallyId(rally ? rally.id : null);
    if (rally) {
      setSelectedFootprint(null);
    }
  }, []);

  // 8. Spot drawing animation when a route is selected
  useEffect(() => {
    if (selectedRally && selectedRally.spots && selectedRally.spots.length > 0) {
      const sortedSpots = [...selectedRally.spots].sort(
        (a, b) => (a.order_index ?? 0) - (b.order_index ?? 0)
      );
      setDrawnSpots([sortedSpots[0]]);
      setShowModal(false);

      let i = 1;
      const interval = setInterval(() => {
        if (i < sortedSpots.length) {
          setDrawnSpots((prev) => {
            const nextSpot = sortedSpots[i];
            if (nextSpot && !prev.some((s) => s && s.id === nextSpot.id)) {
              return [...prev, nextSpot];
            }
            return prev;
          });
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowModal(true), 450);
        }
      }, 500);

      return () => clearInterval(interval);
    } else {
      setDrawnSpots([]);
      setShowModal(false);
    }
  }, [selectedRally]);

  const handleLayerModeChange = useCallback((mode: MapLayerMode) => {
    setMapLayerMode(mode);
    setSelectedRallyId(null);
    setSelectedFootprint(null);
    setShowModal(false);
  }, []);

  const triggerRecenter = useCallback(() => {
    setRecenter((n) => n + 1);
  }, []);

  return {
    user,
    userPos,
    hasRealGps,
    recenter,
    triggerRecenter,
    loadingRoutes,
    mapLayerMode,
    setMapLayerMode: handleLayerModeChange,
    durationFilter,
    setDurationFilter,
    statusFilter,
    setStatusFilter,
    routeProgressMap,
    bookmarkedRouteIds,
    visitedFootprints,
    enrichedRoutes,
    filteredRoutes,
    nearbyRoutes,
    selectedRally,
    setSelectedRally,
    selectedFootprint,
    setSelectedFootprint,
    drawnSpots,
    showModal,
    setShowModal,
  };
}
