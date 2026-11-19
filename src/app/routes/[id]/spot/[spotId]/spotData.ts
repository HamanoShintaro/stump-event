import { cache } from "react";
import { supabase } from "@/lib/supabase";
import { mockRallies } from "@/data/mock";
import { computeRouteWalkMetrics, type RouteWalkMetrics } from "@/utils/routeMetrics";
import { parseWKBPoint } from "@/utils/wkb";
import { extractRouteAreaInfo, type RouteAreaSeoInfo } from "@/utils/seo";

export interface ServerSpotItem {
  id: string;
  name: string;
  description?: string;
  cover_image_url?: string;
  image_url?: string;
  lat: number;
  lng: number;
  qr_token?: string;
  address?: string;
  f7_fragment?: string;
  f7_full?: string;
  is_final?: boolean;
  next_spot_id?: string;
  next_spot_name?: string;
  act_1a?: string;
  act_1b?: string;
  act_2?: string;
  qr_only?: boolean;
  radius_meters?: number;
  order_index?: number;
  city?: string;
}

export interface SpotPageServerData {
  rally: any;
  targetSpot: ServerSpotItem;
  spotsList: ServerSpotItem[];
  walkMetrics: RouteWalkMetrics;
  areaInfo: RouteAreaSeoInfo;
}

const DEFAULT_RADIUS_METERS = 50;

export const fetchSpotPageData = cache(
  async (routeId: string, spotId: string): Promise<SpotPageServerData | null> => {
    const [{ data: routeData, error: routeError }, { data: spotsData }] =
      await Promise.all([
        supabase.from("routes").select("*").eq("id", routeId).maybeSingle(),
        supabase
          .from("spots")
          .select("*")
          .eq("route_id", routeId)
          .order("order_index", { ascending: true }),
      ]);

    const mockRoute = mockRallies.find((r) => r.id === routeId);
    if ((routeError || !routeData) && !mockRoute) {
      return null;
    }

    const mockRouteWithoutSpots = mockRoute
      ? (() => {
          const { spots: _ignoredSpots, ...rest } = mockRoute as any;
          return rest;
        })()
      : null;

    const finalRoute = routeData
      ? mockRouteWithoutSpots
        ? { ...routeData, ...mockRouteWithoutSpots }
        : routeData
      : mockRouteWithoutSpots;

    if (!finalRoute) {
      return null;
    }

    const rawSpots =
      Array.isArray(spotsData) && spotsData.length > 0
        ? spotsData
        : Array.isArray(mockRoute?.spots)
          ? mockRoute.spots
          : [];

    const spotsList: ServerSpotItem[] = rawSpots.map((s: any, idx: number) => {
      const pt = typeof s.location === "string" ? parseWKBPoint(s.location) : null;
      const mockSpot = mockRoute?.spots?.find((ms) => ms.id === s.id) as any;
      return {
        id: s.id,
        name: s.name || mockSpot?.name || "",
        description: s.description || mockSpot?.description,
        cover_image_url:
          s.cover_image_url || s.image_url || mockSpot?.cover_image_url,
        image_url: s.image_url || s.cover_image_url || mockSpot?.cover_image_url,
        lat: pt?.lat || (typeof s.lat === "number" ? s.lat : 0) || mockSpot?.lat || 0,
        lng: pt?.lng || (typeof s.lng === "number" ? s.lng : 0) || mockSpot?.lng || 0,
        qr_token: s.qr_token || mockSpot?.qr_token,
        address: s.address || mockSpot?.address,
        f7_fragment: s.f7_fragment || mockSpot?.f7_fragment,
        f7_full: s.f7_full || mockSpot?.f7_full,
        is_final:
          Boolean(s.is_final) ||
          Boolean(mockSpot?.is_final) ||
          idx === rawSpots.length - 1,
        next_spot_id: s.next_spot_id || mockSpot?.next_spot_id,
        next_spot_name: s.next_spot_name || mockSpot?.next_spot_name,
        act_1a: s.act_1a || mockSpot?.act_1a,
        act_1b: s.act_1b || mockSpot?.act_1b,
        act_2: s.act_2 || mockSpot?.act_2,
        qr_only: Boolean(s.qr_only),
        radius_meters:
          typeof s.radius_meters === "number"
            ? s.radius_meters
            : DEFAULT_RADIUS_METERS,
        order_index: typeof s.order_index === "number" ? s.order_index : idx + 1,
        city: s.city,
      };
    });

    const targetSpot = spotsList.find((s) => s.id === spotId) || null;
    if (!targetSpot) {
      return null;
    }

    const walkMetrics = computeRouteWalkMetrics(
      spotsList,
      finalRoute.rarity_estimated_min
    );
    const areaInfo = extractRouteAreaInfo(finalRoute, spotsList);

    return {
      rally: finalRoute,
      targetSpot,
      spotsList,
      walkMetrics,
      areaInfo,
    };
  }
);
