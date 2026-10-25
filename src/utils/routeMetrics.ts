import { getDistance } from "geolib";
import { parseWKBPoint } from "@/utils/wkb";

export interface RouteWalkMetrics {
  spotCount: number;
  distanceKm: number;
  estimatedMinutes: number;
  centerLat: number | null;
  centerLng: number | null;
}

function extractSpotCoord(spot: any): { lat: number; lng: number } | null {
  if (!spot) return null;
  if (typeof spot.lat === "number" && typeof spot.lng === "number" && !Number.isNaN(spot.lat) && !Number.isNaN(spot.lng)) {
    return { lat: spot.lat, lng: spot.lng };
  }
  if (typeof spot.latitude === "number" && typeof spot.longitude === "number" && !Number.isNaN(spot.latitude) && !Number.isNaN(spot.longitude)) {
    return { lat: spot.latitude, lng: spot.longitude };
  }
  if (typeof spot.location === "string") {
    const parsed = parseWKBPoint(spot.location);
    if (parsed) return parsed;
  }
  if (spot.location && typeof spot.location === "object") {
    if (Array.isArray(spot.location.coordinates) && spot.location.coordinates.length >= 2) {
      const [lng, lat] = spot.location.coordinates;
      if (typeof lat === "number" && typeof lng === "number") {
        return { lat, lng };
      }
    }
  }
  return null;
}

/**
 * Compute realistic street-walk metrics for a route from its spots.
 */
export function computeRouteWalkMetrics(
  spots: any[] = [],
  rarityEstimatedMin?: number | null
): RouteWalkMetrics {
  const safeSpots = Array.isArray(spots) ? [...spots] : [];
  safeSpots.sort((a, b) => (a?.order_index ?? 0) - (b?.order_index ?? 0));

  const validCoords: { lat: number; lng: number }[] = [];
  for (const spot of safeSpots) {
    const coord = extractSpotCoord(spot);
    if (coord) {
      validCoords.push(coord);
    }
  }

  let straightMeters = 0;
  for (let i = 0; i < validCoords.length - 1; i++) {
    const prev = validCoords[i];
    const next = validCoords[i + 1];
    try {
      straightMeters += getDistance(
        { latitude: prev.lat, longitude: prev.lng },
        { latitude: next.lat, longitude: next.lng }
      );
    } catch {
      // ignore invalid coord pair
    }
  }

  // Urban street winding factor (1.25x straight-line distance)
  const walkingMeters = straightMeters * 1.25;
  const rawKm = walkingMeters / 1000;
  // Minimum 0.3km if there is at least 1 spot so UI doesn't show 0.0km when spots are close
  const distanceKm =
    safeSpots.length === 0
      ? 0
      : Math.max(0.2, Math.round(rawKm * 10) / 10);

  const estimatedMinutes =
    typeof rarityEstimatedMin === "number" && rarityEstimatedMin > 0
      ? rarityEstimatedMin
      : safeSpots.length === 0
        ? 0
        : Math.max(20, Math.round(walkingMeters / 65 + safeSpots.length * 6));

  let centerLat: number | null = null;
  let centerLng: number | null = null;
  if (validCoords.length > 0) {
    const sum = validCoords.reduce(
      (acc, c) => ({ lat: acc.lat + c.lat, lng: acc.lng + c.lng }),
      { lat: 0, lng: 0 }
    );
    centerLat = sum.lat / validCoords.length;
    centerLng = sum.lng / validCoords.length;
  }

  return {
    spotCount: safeSpots.length,
    distanceKm,
    estimatedMinutes,
    centerLat,
    centerLng,
  };
}
