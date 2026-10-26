"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { getDistance } from "geolib";

export interface RouteSpot {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  lat: number;
  lng: number;
}

export type RouteMapViewportAction =
  | { type: "overview"; id: number }
  | { type: "focus-spot"; spot: RouteSpot; id: number }
  | { type: "focus-user"; id: number };

const DEFAULT_FALLBACK_CENTER: [number, number] = [35.6812, 139.7671];

export function useRouteMap({
  spots,
  activeSpotId,
}: {
  spots: RouteSpot[];
  activeSpotId: string | null;
}) {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<RouteSpot | null>(null);
  const [viewportAction, setViewportAction] = useState<RouteMapViewportAction>({
    type: "overview",
    id: 0,
  });

  // 1. Geolocation tracking (does NOT trigger automatic map zoom/fitBounds on GPS jitter)
  useEffect(() => {
    if (typeof window === "undefined" || !navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (pos) => setUserPos([pos.coords.latitude, pos.coords.longitude]),
      (err) => console.log("User location access denied or failed", err),
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const defaultCenter: [number, number] = useMemo(() => {
    if (spots.length === 0) return DEFAULT_FALLBACK_CENTER;
    return [
      spots.reduce((sum, s) => sum + s.lat, 0) / spots.length,
      spots.reduce((sum, s) => sum + s.lng, 0) / spots.length,
    ];
  }, [spots]);

  const activeSpot = useMemo(
    () => spots.find((s) => s.id === activeSpotId) || null,
    [spots, activeSpotId]
  );

  // スポット選択：下部カードを表示し、そのスポットへ自動で寄る（フォーカス）
  const selectAndFocusSpot = useCallback((spot: RouteSpot) => {
    setSelectedSpot(spot);
    setViewportAction({
      type: "focus-spot",
      spot,
      id: Date.now(),
    });
  }, []);

  // スポット選択解除：ユーザーが操作していたズーム・位置はそのまま維持する
  const clearSelectedSpot = useCallback(() => {
    setSelectedSpot(null);
  }, []);

  // 明示操作①：ルート全体のデフォルト縮尺＆中央に戻す
  const resetToRouteOverview = useCallback(() => {
    setSelectedSpot(null);
    setViewportAction({
      type: "overview",
      id: Date.now(),
    });
  }, []);

  // 明示操作②：自分の現在地へ移動する
  const focusOnUserLocation = useCallback(() => {
    if (!userPos) return;
    setViewportAction({
      type: "focus-user",
      id: Date.now(),
    });
  }, [userPos]);

  // 軌跡ライン・ナビゲーションライン・距離の計算
  const trajectoryPath = useMemo(
    () => spots.map((s) => [s.lat, s.lng] as [number, number]),
    [spots]
  );

  const { navLinePath, navArrowPos, navArrowAngle, distanceToActive } = useMemo(() => {
    if (!userPos || !activeSpot) {
      return {
        navLinePath: [] as [number, number][],
        navArrowPos: null as [number, number] | null,
        navArrowAngle: 0,
        distanceToActive: null as number | null,
      };
    }

    const line: [number, number][] = [userPos, [activeSpot.lat, activeSpot.lng]];
    const arrowPos: [number, number] = [
      (userPos[0] + activeSpot.lat) / 2,
      (userPos[1] + activeSpot.lng) / 2,
    ];
    const dy = activeSpot.lat - userPos[0];
    const dx = activeSpot.lng - userPos[1];
    const angle = Math.atan2(dx, dy) * (180 / Math.PI);
    const dist = getDistance(
      { latitude: userPos[0], longitude: userPos[1] },
      { latitude: activeSpot.lat, longitude: activeSpot.lng }
    );

    return {
      navLinePath: line,
      navArrowPos: arrowPos,
      navArrowAngle: angle,
      distanceToActive: dist,
    };
  }, [userPos, activeSpot]);

  const distanceToSelected = useMemo(() => {
    if (!userPos || !selectedSpot) return null;
    return getDistance(
      { latitude: userPos[0], longitude: userPos[1] },
      { latitude: selectedSpot.lat, longitude: selectedSpot.lng }
    );
  }, [userPos, selectedSpot]);

  return {
    userPos,
    defaultCenter,
    activeSpot,
    selectedSpot,
    viewportAction,
    selectAndFocusSpot,
    clearSelectedSpot,
    resetToRouteOverview,
    focusOnUserLocation,
    trajectoryPath,
    navLinePath,
    navArrowPos,
    navArrowAngle,
    distanceToActive,
    distanceToSelected,
  };
}
