"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { getDistance } from "geolib";
import { parseWKBPoint } from "@/utils/wkb";
import { computeRouteWalkMetrics, RouteWalkMetrics } from "@/utils/routeMetrics";

export interface EnrichedDiscoveryRoute {
  [key: string]: any;
  id: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  category?: string;
  prefecture?: string;
  budget_tier?: number;
  walkMetrics: RouteWalkMetrics;
  distanceFromUserKm: number | null;
  walkMinutesToStart: number | null;
  nearestSpotName: string | null;
}

export type DiscoveryTabMode = "quick" | "immersive" | "nearby";

function extractCoord(spot: any): { lat: number; lng: number } | null {
  if (!spot) return null;
  if (
    typeof spot.lat === "number" &&
    typeof spot.lng === "number" &&
    !Number.isNaN(spot.lat) &&
    !Number.isNaN(spot.lng) &&
    (spot.lat !== 0 || spot.lng !== 0)
  ) {
    return { lat: spot.lat, lng: spot.lng };
  }
  if (typeof spot.location === "string") {
    return parseWKBPoint(spot.location);
  }
  if (
    spot.location &&
    typeof spot.location === "object" &&
    Array.isArray(spot.location.coordinates) &&
    spot.location.coordinates.length >= 2
  ) {
    const [lng, lat] = spot.location.coordinates;
    if (typeof lat === "number" && typeof lng === "number") {
      return { lat, lng };
    }
  }
  return null;
}

export function useNearbyDiscovery(routes: any[] = []) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DiscoveryTabMode>("quick");

  const requestNearbyLocation = useCallback((silent = false) => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      if (!silent) {
        setLocationError("お使いのブラウザは現在地の取得に対応していません。");
      }
      return;
    }

    setLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);
        setActiveTab("nearby");
      },
      () => {
        setLocating(false);
        if (!silent) {
          setLocationError("現在地を取得できませんでした。位置情報の許可設定をご確認ください。");
        }
      },
      { enableHighAccuracy: false, timeout: 7000, maximumAge: 60000 }
    );
  }, []);

  // Passively check if geolocation is already granted on mount
  useEffect(() => {
    if (typeof window === "undefined" || !navigator.permissions?.query) return;
    let mounted = true;
    navigator.permissions
      .query({ name: "geolocation" as PermissionName })
      .then((result) => {
        if (mounted && result.state === "granted") {
          requestNearbyLocation(true);
        }
      })
      .catch(() => {
        // Ignore if Permissions API is unsupported
      });
    return () => {
      mounted = false;
    };
  }, [requestNearbyLocation]);

  const enrichedRoutes: EnrichedDiscoveryRoute[] = useMemo(() => {
    return (routes || []).map((route) => {
      const spots = Array.isArray(route.spots) ? route.spots : [];
      const walkMetrics = computeRouteWalkMetrics(spots, route.rarity_estimated_min);

      let distanceFromUserKm: number | null = null;
      let walkMinutesToStart: number | null = null;
      let nearestSpotName: string | null = null;

      if (userLocation) {
        let minMeters = Infinity;
        let closestName: string | null = null;

        for (const spot of spots) {
          const coord = extractCoord(spot);
          if (!coord) continue;
          try {
            const distM = getDistance(
              { latitude: userLocation.lat, longitude: userLocation.lng },
              { latitude: coord.lat, longitude: coord.lng }
            );
            if (distM < minMeters) {
              minMeters = distM;
              closestName = spot.name || null;
            }
          } catch {
            // ignore
          }
        }

        if (minMeters === Infinity && walkMetrics.centerLat != null && walkMetrics.centerLng != null) {
          try {
            minMeters = getDistance(
              { latitude: userLocation.lat, longitude: userLocation.lng },
              { latitude: walkMetrics.centerLat, longitude: walkMetrics.centerLng }
            );
          } catch {
            // ignore
          }
        }

        if (minMeters !== Infinity) {
          const walkingMeters = minMeters * 1.25;
          distanceFromUserKm = Math.max(0.1, Math.round((walkingMeters / 1000) * 10) / 10);
          walkMinutesToStart = Math.max(2, Math.round(walkingMeters / 75));
          nearestSpotName = closestName || (spots[0]?.name ?? null);
        }
      } else if (spots.length > 0) {
        const sortedSpots = [...spots].sort((a, b) => (a?.order_index ?? 0) - (b?.order_index ?? 0));
        nearestSpotName = sortedSpots[0]?.name || null;
      }

      return {
        ...route,
        walkMetrics,
        distanceFromUserKm,
        walkMinutesToStart,
        nearestSpotName,
      };
    });
  }, [routes, userLocation]);

  const nearbyRoutes = useMemo(() => {
    const withDist = enrichedRoutes.filter((r) => r.distanceFromUserKm !== null);
    if (withDist.length === 0) return enrichedRoutes.slice(0, 3);
    return [...withDist]
      .sort((a, b) => (a.distanceFromUserKm ?? 9999) - (b.distanceFromUserKm ?? 9999))
      .slice(0, 3);
  }, [enrichedRoutes]);

  const featuredQuickWalks = useMemo(() => {
    const quick = enrichedRoutes.filter(
      (r) => r.walkMetrics.estimatedMinutes > 0 && r.walkMetrics.estimatedMinutes <= 60
    );
    const pool = quick.length > 0 ? quick : enrichedRoutes;
    return [...pool]
      .sort((a, b) => a.walkMetrics.estimatedMinutes - b.walkMetrics.estimatedMinutes)
      .slice(0, 3);
  }, [enrichedRoutes]);

  const immersiveWalks = useMemo(() => {
    const longer = enrichedRoutes.filter((r) => r.walkMetrics.estimatedMinutes > 45);
    const pool = longer.length > 0 ? longer : enrichedRoutes;
    return [...pool]
      .sort((a, b) => b.walkMetrics.spotCount - a.walkMetrics.spotCount || b.walkMetrics.distanceKm - a.walkMetrics.distanceKm)
      .slice(0, 3);
  }, [enrichedRoutes]);

  const displayedRoutes = useMemo(() => {
    if (activeTab === "nearby") return nearbyRoutes;
    if (activeTab === "immersive") return immersiveWalks;
    return featuredQuickWalks;
  }, [activeTab, nearbyRoutes, immersiveWalks, featuredQuickWalks]);

  return {
    userLocation,
    locating,
    locationError,
    requestNearbyLocation: () => requestNearbyLocation(false),
    activeTab,
    setActiveTab,
    enrichedRoutes,
    nearbyRoutes,
    featuredQuickWalks,
    immersiveWalks,
    displayedRoutes,
  };
}
