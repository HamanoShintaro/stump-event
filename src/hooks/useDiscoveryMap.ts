"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
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

export interface MapViewportBounds {
  north: number;
  south: number;
  east: number;
  west: number;
  zoom: number;
  centerLat: number;
  centerLng: number;
}

export interface RouteCluster {
  id: string;
  center: [number, number];
  bounds: [[number, number], [number, number]];
  count: number;
  routes: DiscoveryRoute[];
  hasCompleted: boolean;
  hasInProgress: boolean;
  hasBookmarked: boolean;
  representativeCategory?: string;
}

export type MapRenderableItem =
  | { type: "route"; route: DiscoveryRoute }
  | { type: "cluster"; cluster: RouteCluster };

const DEFAULT_CENTER: [number, number] = [35.9522665, 139.6833445];
const LAST_POS_STORAGE_KEY = "shuin_last_user_pos_v1";
const ROUTE_CACHE_TTL_MS = 3 * 60 * 1000;
const SUPABASE_PAGE_SIZE = 1000;

// モジュールレベルの軽量キャッシュ（画面遷移時の再フェッチ・再計算を防止）
let cachedProcessedRoutes: { data: any[]; timestamp: number } | null = null;

function readInitialUserPos(): [number, number] {
  if (typeof window === "undefined") return DEFAULT_CENTER;
  try {
    const raw = window.sessionStorage.getItem(LAST_POS_STORAGE_KEY);
    if (!raw) return DEFAULT_CENTER;
    const parsed = JSON.parse(raw);
    if (
      Array.isArray(parsed) &&
      parsed.length === 2 &&
      typeof parsed[0] === "number" &&
      typeof parsed[1] === "number" &&
      !Number.isNaN(parsed[0]) &&
      !Number.isNaN(parsed[1])
    ) {
      return [parsed[0], parsed[1]];
    }
  } catch {
    // ignore storage read error
  }
  return DEFAULT_CENTER;
}

function saveLastUserPos(pos: [number, number]): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(LAST_POS_STORAGE_KEY, JSON.stringify(pos));
  } catch {
    // ignore storage write error
  }
}

async function yieldToMainThread(): Promise<void> {
  const win = typeof window !== "undefined" ? (window as any) : null;
  if (win && "scheduler" in win && win.scheduler && "yield" in win.scheduler) {
    await win.scheduler.yield();
  } else {
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
  }
}

function extractLatLng(spot: any): [number, number] | null {
  if (!spot) return null;
  if (
    typeof spot.lat === "number" &&
    typeof spot.lng === "number" &&
    !Number.isNaN(spot.lat) &&
    !Number.isNaN(spot.lng)
  ) {
    return [spot.lat, spot.lng];
  }
  if (typeof spot.location === "string") {
    const parsed = parseWKBPoint(spot.location);
    if (parsed) return [parsed.lat, parsed.lng];
  }
  if (
    spot.location &&
    typeof spot.location === "object" &&
    Array.isArray(spot.location.coordinates)
  ) {
    const [lng, lat] = spot.location.coordinates;
    if (typeof lat === "number" && typeof lng === "number") {
      return [lat, lng];
    }
  }
  return null;
}

function processSingleRoute(rally: any): any | null {
  if (!rally || rally.is_published === false) return null;
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
}

// 1,000〜1,800件規模のルート処理でもメインスレッドを50ms以上ブロックしない非同期バッチ処理
async function processRoutesNonBlocking(rows: any[]): Promise<any[]> {
  const results: any[] = [];
  let deadline =
    typeof performance !== "undefined" ? performance.now() + 50 : Date.now() + 50;

  for (const row of rows) {
    const item = processSingleRoute(row);
    if (item) {
      results.push(item);
    }
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    if (now >= deadline) {
      await yieldToMainThread();
      deadline =
        (typeof performance !== "undefined" ? performance.now() : Date.now()) + 50;
    }
  }
  return results;
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

  const [rawRoutes, setRawRoutes] = useState<any[]>(() =>
    cachedProcessedRoutes &&
    Date.now() - cachedProcessedRoutes.timestamp < ROUTE_CACHE_TTL_MS
      ? cachedProcessedRoutes.data
      : []
  );
  // 初回GPS測位完了を待たずに即座にマップを描画するため、キャッシュ座標またはDEFAULT_CENTERで初期化
  const [userPos, setUserPos] = useState<[number, number]>(readInitialUserPos);
  const [hasRealGps, setHasRealGps] = useState(false);
  const [recenter, setRecenter] = useState(0);
  const [loadingRoutes, setLoadingRoutes] = useState<boolean>(
    () =>
      !(
        cachedProcessedRoutes &&
        Date.now() - cachedProcessedRoutes.timestamp < ROUTE_CACHE_TTL_MS
      )
  );

  // 現在の地図表示領域（Bounding Box & Zoom）
  const [mapViewport, setMapViewport] = useState<MapViewportBounds | null>(null);

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
  const [focusedClusterIds, setFocusedClusterIds] = useState<string[] | null>(null);
  const [drawnSpots, setDrawnSpots] = useState<DiscoverySpot[]>([]);
  const [showModal, setShowModal] = useState(false);
  const hasRealGpsRef = useRef(false);

  // 1. Geolocation tracking (微小なGPS揺れによる不要な再計算を防ぐため10m以上の移動時のみ更新)
  useEffect(() => {
    let watchId: number | null = null;
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const nextLat = pos.coords.latitude;
          const nextLng = pos.coords.longitude;
          setUserPos((prev) => {
            if (!prev || !hasRealGpsRef.current) {
              hasRealGpsRef.current = true;
              const nextPos: [number, number] = [nextLat, nextLng];
              saveLastUserPos(nextPos);
              return nextPos;
            }
            try {
              const movedMeters = getDistance(
                { latitude: prev[0], longitude: prev[1] },
                { latitude: nextLat, longitude: nextLng }
              );
              if (movedMeters < 10) {
                return prev;
              }
            } catch {
              // ignore distance calc error
            }
            const nextPos: [number, number] = [nextLat, nextLng];
            saveLastUserPos(nextPos);
            return nextPos;
          });
          setHasRealGps(true);
        },
        () => {
          // 測位失敗時は現在の座標を維持
        },
        { enableHighAccuracy: false, maximumAge: 15000, timeout: 10000 }
      );
    }
    return () => {
      if (watchId !== null && typeof window !== "undefined" && "geolocation" in navigator) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  // 2. Fetch published routes & spots (軽量カラムのみ取得 + 1,000件上限を超える段階的ページング取得)
  useEffect(() => {
    if (
      cachedProcessedRoutes &&
      Date.now() - cachedProcessedRoutes.timestamp < ROUTE_CACHE_TTL_MS
    ) {
      setRawRoutes(cachedProcessedRoutes.data);
      setLoadingRoutes(false);
      return;
    }

    let mounted = true;
    const fetchAllRoutesPaged = async () => {
      setLoadingRoutes(true);
      try {
        let offset = 0;
        const accumulated: any[] = [];

        while (mounted) {
          const { data, error } = await supabase
            .from("routes")
            .select(
              "id, title, description, thumbnail_url, category, prefecture, budget_tier, is_published, created_at, spots(id, name, order_index, location)"
            )
            .eq("is_published", true)
            .order("created_at", { ascending: false })
            .range(offset, offset + SUPABASE_PAGE_SIZE - 1);

          if (error || !data || !mounted) {
            break;
          }

          const processedBatch = await processRoutesNonBlocking(data);
          if (!mounted) break;

          accumulated.push(...processedBatch);

          // 最初の1ページ目が届いた時点で即座にUIへ反映し、以降（1,001件目〜）はバックグラウンドで追加反映
          setRawRoutes([...accumulated]);
          setLoadingRoutes(false);

          if (data.length < SUPABASE_PAGE_SIZE) {
            break;
          }
          offset += SUPABASE_PAGE_SIZE;
        }

        if (mounted && accumulated.length > 0) {
          cachedProcessedRoutes = {
            data: accumulated,
            timestamp: Date.now(),
          };
        }
      } catch (err) {
        console.error("Failed to fetch map routes:", err);
      } finally {
        if (mounted) setLoadingRoutes(false);
      }
    };

    fetchAllRoutesPaged();
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

  // 7. Viewport Bounding Box による画面内ルート絞り込み（Step B: 画面外DOM生成の排除）
  const viewportRoutes: DiscoveryRoute[] = useMemo(() => {
    if (!mapViewport) {
      // 初回マウント直後（Leafletのbounds通知前）は現在地周辺（約25km圏内）または先頭60件に絞る
      const nearInitial = filteredRoutes.filter((r) => {
        if (!r.avgPos) return false;
        return (
          Math.abs(r.avgPos[0] - userPos[0]) <= 0.22 &&
          Math.abs(r.avgPos[1] - userPos[1]) <= 0.25
        );
      });
      return nearInitial.length > 0 ? nearInitial : filteredRoutes.slice(0, 60);
    }

    // 少しのドラッグ操作でピンが急に消えないよう、現在の表示領域に上下左右25%のバッファを持たせる
    const latSpan = Math.max(0.008, mapViewport.north - mapViewport.south);
    const lngSpan = Math.max(0.008, mapViewport.east - mapViewport.west);
    const minLat = mapViewport.south - latSpan * 0.25;
    const maxLat = mapViewport.north + latSpan * 0.25;
    const minLng = mapViewport.west - lngSpan * 0.25;
    const maxLng = mapViewport.east + lngSpan * 0.25;

    return filteredRoutes.filter((r) => {
      if (!r.avgPos) return false;
      const [lat, lng] = r.avgPos;
      return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
    });
  }, [filteredRoutes, mapViewport, userPos]);

  // 8. ズームレベルに応じた空間グリッド・クラスタリング（Step B: 数百〜1,800件でも同時描画ピン数を数十個以下に制御）
  const mapRenderItems: MapRenderableItem[] = useMemo(() => {
    if (viewportRoutes.length === 0) return [];
    if (viewportRoutes.length === 1) {
      return [{ type: "route", route: viewportRoutes[0] }];
    }

    const zoom = mapViewport?.zoom ?? 13;
    let cellLat: number;
    let cellLng: number;

    if (zoom >= 16) {
      // 最大ズーム付近では実質的に同一座標（同じ駅前など約50m圏内）の重なりピンのみ束ねる
      cellLat = 0.00045;
      cellLng = 0.00055;
    } else if (zoom >= 15) {
      cellLat = 0.0012;
      cellLng = 0.0014;
    } else {
      // 画面上で約55〜65px四方のグリッドで高速クラスタリング（O(N)）
      const baseDeg = 360 / Math.pow(2, zoom + 2.35);
      cellLat = baseDeg * 0.85;
      cellLng = baseDeg;
    }

    const buckets = new Map<string, DiscoveryRoute[]>();
    for (const route of viewportRoutes) {
      const [lat, lng] = route.avgPos;
      const key = `${Math.floor(lat / cellLat)}_${Math.floor(lng / cellLng)}`;
      const bucket = buckets.get(key);
      if (bucket) {
        bucket.push(route);
      } else {
        buckets.set(key, [route]);
      }
    }

    const items: MapRenderableItem[] = [];
    for (const [key, group] of buckets.entries()) {
      if (group.length === 1) {
        items.push({ type: "route", route: group[0] });
      } else {
        let sumLat = 0;
        let sumLng = 0;
        let minLat = Infinity;
        let maxLat = -Infinity;
        let minLng = Infinity;
        let maxLng = -Infinity;
        let hasCompleted = false;
        let hasInProgress = false;
        let hasBookmarked = false;

        for (const r of group) {
          const [lat, lng] = r.avgPos;
          sumLat += lat;
          sumLng += lng;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
          if (lng < minLng) minLng = lng;
          if (lng > maxLng) maxLng = lng;
          if (r.progress.isCompleted) hasCompleted = true;
          if (r.progress.isInProgress || r.progress.stampedCount > 0) hasInProgress = true;
          if (r.isBookmarked) hasBookmarked = true;
        }

        items.push({
          type: "cluster",
          cluster: {
            id: `cluster_${zoom}_${key}`,
            center: [sumLat / group.length, sumLng / group.length],
            bounds: [
              [minLat, minLng],
              [maxLat, maxLng],
            ],
            count: group.length,
            routes: group,
            hasCompleted,
            hasInProgress,
            hasBookmarked,
            representativeCategory: group[0].category,
          },
        });
      }
    }

    return items;
  }, [viewportRoutes, mapViewport?.zoom]);

  // 9. 足跡レイヤーの画面内カリング（選択中の足跡は常に保持）
  const visibleFootprints: VisitedFootprint[] = useMemo(() => {
    if (!mapViewport || visitedFootprints.length <= 80) {
      return visitedFootprints;
    }
    const latSpan = Math.max(0.008, mapViewport.north - mapViewport.south);
    const lngSpan = Math.max(0.008, mapViewport.east - mapViewport.west);
    const minLat = mapViewport.south - latSpan * 0.25;
    const maxLat = mapViewport.north + latSpan * 0.25;
    const minLng = mapViewport.west - lngSpan * 0.25;
    const maxLng = mapViewport.east + lngSpan * 0.25;

    return visitedFootprints.filter((fp) => {
      if (selectedFootprint && fp.spotId === selectedFootprint.spotId) return true;
      return fp.lat >= minLat && fp.lat <= maxLat && fp.lng >= minLng && fp.lng <= maxLng;
    });
  }, [visitedFootprints, mapViewport, selectedFootprint]);

  // 10. 下部カルーセル用ルート一覧（現在の地図表示エリア内のルートを優先し、0件時は現在地から近い順）
  const nearbyRoutes: DiscoveryRoute[] = useMemo(() => {
    if (focusedClusterIds && focusedClusterIds.length > 0) {
      const idSet = new Set(focusedClusterIds);
      const clusterMatches = filteredRoutes.filter((r) => idSet.has(r.id));
      if (clusterMatches.length > 0) {
        return clusterMatches.slice(0, 8);
      }
    }

    const sourceList = viewportRoutes.length > 0 ? viewportRoutes : filteredRoutes;
    const refLat = mapViewport ? mapViewport.centerLat : userPos[0];
    const refLng = mapViewport ? mapViewport.centerLng : userPos[1];

    const copy = [...sourceList];
    copy.sort((a, b) => {
      if (viewportRoutes.length > 0 && a.avgPos && b.avgPos) {
        const distA =
          Math.pow(a.avgPos[0] - refLat, 2) + Math.pow(a.avgPos[1] - refLng, 2);
        const distB =
          Math.pow(b.avgPos[0] - refLat, 2) + Math.pow(b.avgPos[1] - refLng, 2);
        return distA - distB;
      }
      if (a.distanceFromUserKm !== null && b.distanceFromUserKm !== null) {
        return a.distanceFromUserKm - b.distanceFromUserKm;
      }
      if (a.distanceFromUserKm !== null) return -1;
      if (b.distanceFromUserKm !== null) return 1;
      return 0;
    });
    return copy.slice(0, 8);
  }, [focusedClusterIds, viewportRoutes, filteredRoutes, mapViewport, userPos]);

  const selectedRally = useMemo(
    () => enrichedRoutes.find((r) => r.id === selectedRallyId) || null,
    [enrichedRoutes, selectedRallyId]
  );

  const setSelectedRally = useCallback((rally: DiscoveryRoute | null) => {
    setSelectedRallyId(rally ? rally.id : null);
    if (rally) {
      setSelectedFootprint(null);
      setFocusedClusterIds(null);
    }
  }, []);

  const updateMapViewport = useCallback((next: MapViewportBounds) => {
    setMapViewport((prev) => {
      if (
        prev &&
        prev.zoom === next.zoom &&
        Math.abs(prev.north - next.north) < 0.0002 &&
        Math.abs(prev.south - next.south) < 0.0002 &&
        Math.abs(prev.east - next.east) < 0.0002 &&
        Math.abs(prev.west - next.west) < 0.0002
      ) {
        return prev;
      }
      return next;
    });
    setFocusedClusterIds(null);
  }, []);

  // 選択中ルートのスポット一覧（現在地 userPos の更新に影響されない安定したメモ化配列）
  const selectedRallySpots = useMemo(() => {
    if (!selectedRallyId) return null;
    const targetRawRoute = rawRoutes.find((r: any) => r.id === selectedRallyId);
    if (
      !targetRawRoute ||
      !Array.isArray(targetRawRoute.spots) ||
      targetRawRoute.spots.length === 0
    ) {
      return null;
    }
    return [...targetRawRoute.spots].sort(
      (a: DiscoverySpot, b: DiscoverySpot) => (a.order_index ?? 0) - (b.order_index ?? 0)
    );
  }, [selectedRallyId, rawRoutes]);

  // 11. Spot drawing animation when a route is selected
  useEffect(() => {
    if (!selectedRallySpots || selectedRallySpots.length === 0) {
      setDrawnSpots([]);
      setShowModal(false);
      return;
    }

    setDrawnSpots([selectedRallySpots[0]]);
    setShowModal(false);

    let visibleCount = 1;
    let modalTimer: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      if (visibleCount < selectedRallySpots.length) {
        visibleCount += 1;
        setDrawnSpots(selectedRallySpots.slice(0, visibleCount));
      } else {
        clearInterval(interval);
        modalTimer = setTimeout(() => {
          setShowModal(true);
        }, 450);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      if (modalTimer) {
        clearTimeout(modalTimer);
      }
    };
  }, [selectedRallySpots]);

  const handleLayerModeChange = useCallback((mode: MapLayerMode) => {
    setMapLayerMode(mode);
    setSelectedRallyId(null);
    setSelectedFootprint(null);
    setFocusedClusterIds(null);
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
    visibleFootprints,
    enrichedRoutes,
    filteredRoutes,
    viewportRoutes,
    mapRenderItems,
    nearbyRoutes,
    selectedRally,
    setSelectedRally,
    selectedFootprint,
    setSelectedFootprint,
    focusedClusterIds,
    setFocusedClusterIds,
    updateMapViewport,
    drawnSpots,
    showModal,
    setShowModal,
  };
}
