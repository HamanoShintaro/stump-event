import { getDistance } from "geolib";
import type { CachedPublishedRoute } from "@/utils/routeStats";

export interface NearbyRouteItem {
  route: CachedPublishedRoute;
  distanceMeters: number | null;
}

/**
 * 現在のルートから地理的に近い公開ルートを抽出する（現在ルート自身は除外）。
 * 座標が取得できない場合は同一都道府県を優先して返す。
 */
export function selectNearbyRoutes(
  allRoutes: CachedPublishedRoute[],
  currentRouteId: string,
  currentCenter: { lat: number | null; lng: number | null },
  currentPrefecture: string,
  limit = 4
): NearbyRouteItem[] {
  const candidates = allRoutes.filter((r) => r.id !== currentRouteId);
  if (candidates.length === 0) return [];

  const hasCurrentCenter =
    typeof currentCenter.lat === "number" &&
    typeof currentCenter.lng === "number" &&
    !Number.isNaN(currentCenter.lat) &&
    !Number.isNaN(currentCenter.lng);

  if (hasCurrentCenter) {
    const withDistance: NearbyRouteItem[] = candidates.map((route) => {
      const lat = route.walkMetrics?.centerLat;
      const lng = route.walkMetrics?.centerLng;
      if (
        typeof lat === "number" &&
        typeof lng === "number" &&
        !Number.isNaN(lat) &&
        !Number.isNaN(lng)
      ) {
        try {
          const distanceMeters = getDistance(
            { latitude: currentCenter.lat!, longitude: currentCenter.lng! },
            { latitude: lat, longitude: lng }
          );
          return { route, distanceMeters };
        } catch {
          return { route, distanceMeters: null };
        }
      }
      return { route, distanceMeters: null };
    });

    withDistance.sort((a, b) => {
      if (a.distanceMeters !== null && b.distanceMeters !== null) {
        return a.distanceMeters - b.distanceMeters;
      }
      if (a.distanceMeters !== null) return -1;
      if (b.distanceMeters !== null) return 1;
      const aSamePref = a.route.prefecture === currentPrefecture ? 0 : 1;
      const bSamePref = b.route.prefecture === currentPrefecture ? 0 : 1;
      return aSamePref - bSamePref;
    });

    return withDistance.slice(0, limit);
  }

  // 座標が取得できない場合は同一都道府県を優先
  const sortedByPref = [...candidates].sort((a, b) => {
    const aSame = a.prefecture === currentPrefecture ? 0 : 1;
    const bSame = b.prefecture === currentPrefecture ? 0 : 1;
    return aSame - bSame;
  });

  return sortedByPref.slice(0, limit).map((route) => ({
    route,
    distanceMeters: null,
  }));
}

/**
 * メートル単位の直線距離をユーザー向けの簡潔な文字列へ整形する。
 */
export function formatNearbyDistanceLabel(distanceMeters: number | null): string | null {
  if (distanceMeters === null || Number.isNaN(distanceMeters)) return null;
  if (distanceMeters < 1000) {
    const rounded = Math.max(100, Math.round(distanceMeters / 100) * 100);
    return `ここから約${rounded}m`;
  }
  const km = (distanceMeters / 1000).toFixed(1);
  return `ここから約${km}km`;
}
