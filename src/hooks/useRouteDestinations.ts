"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getDistance } from "geolib";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { useRouteStamps } from "@/hooks/useRouteStamps";
import { useCompanionGroup } from "@/hooks/useCompanionGroup";
import { parseWKBPoint } from "@/utils/wkb";
import { getDisplayNameFromAuthUser } from "@/utils/stampMedia";

export interface EnrichedDestinationSpot {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  cover_image_url?: string;
  address?: string;
  f7_fragment?: string;
  order_index: number;
  lat: number | null;
  lng: number | null;
  isStamped: boolean;
  isActiveDestination: boolean;
  distanceFromUserM: number | null;
  walkMinutesFromUser: number | null;
  stepDistanceToNextM: number | null;
  stepWalkMinutesToNext: number | null;
  companionNamesAtSpot: string[];
}

function extractSpotCoord(spot: any): { lat: number; lng: number } | null {
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
  return null;
}

export function useRouteDestinations(
  routeId: string,
  urlGroupId: string | null = null
) {
  const router = useRouter();
  const { user } = useAuth();
  const { showAlert } = useCustomAlert();
  const { stampedSpotIds } = useRouteStamps(routeId, user?.id);

  const [route, setRoute] = useState<any>(null);
  const [rawSpots, setRawSpots] = useState<any[]>([]);
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [settingSpotId, setSettingSpotId] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [locating, setLocating] = useState<boolean>(false);

  const spotIdsForGroup = useMemo(
    () => rawSpots.map((s) => s.id).filter(Boolean),
    [rawSpots]
  );

  const { effectiveGroupId, partnerNames, sharedMemoriesBySpot } =
    useCompanionGroup({
      routeId,
      urlGroupId,
      spotIds: spotIdsForGroup,
    });

  const requestUserLocation = useCallback((silent = false) => {
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
        if (!silent) {
          // ignore or keep quiet
        }
      },
      { enableHighAccuracy: false, timeout: 7000, maximumAge: 60000 }
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !navigator.permissions?.query) return;
    let mounted = true;
    navigator.permissions
      .query({ name: "geolocation" as PermissionName })
      .then((res) => {
        if (mounted && res.state === "granted") {
          requestUserLocation(true);
        }
      })
      .catch(() => {
        // ignore
      });
    return () => {
      mounted = false;
    };
  }, [requestUserLocation]);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      try {
        const { data: routeData, error: routeError } = await supabase
          .from("routes")
          .select("*")
          .eq("id", routeId)
          .maybeSingle();

        if (cancelled) return;
        if (!routeData || routeError) {
          setRoute(null);
          setLoading(false);
          return;
        }
        setRoute(routeData);

        const { data: spotsData } = await supabase
          .from("spots")
          .select("*")
          .eq("route_id", routeId)
          .order("order_index", { ascending: true });

        if (!cancelled && spotsData) {
          setRawSpots(spotsData);
        }

        if (user) {
          const { data: userData } = await supabase
            .from("users")
            .select("active_spot_id")
            .eq("id", user.id)
            .maybeSingle();

          if (!cancelled && userData?.active_spot_id) {
            setActiveSpotId(userData.active_spot_id);
          }
        }
      } catch (err) {
        console.error("Error loading destinations:", err);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [routeId, user]);

  const enrichedSpots: EnrichedDestinationSpot[] = useMemo(() => {
    const coords = rawSpots.map((s) => extractSpotCoord(s));

    return rawSpots.map((spot, idx) => {
      const coord = coords[idx];
      const nextCoord = idx + 1 < coords.length ? coords[idx + 1] : null;

      let distanceFromUserM: number | null = null;
      let walkMinutesFromUser: number | null = null;

      if (userLocation && coord) {
        try {
          const straightM = getDistance(
            { latitude: userLocation.lat, longitude: userLocation.lng },
            { latitude: coord.lat, longitude: coord.lng }
          );
          distanceFromUserM = Math.round(straightM * 1.25);
          walkMinutesFromUser = Math.max(1, Math.round(distanceFromUserM / 75));
        } catch {
          distanceFromUserM = null;
          walkMinutesFromUser = null;
        }
      }

      let stepDistanceToNextM: number | null = null;
      let stepWalkMinutesToNext: number | null = null;
      if (coord && nextCoord) {
        try {
          const straightStepM = getDistance(
            { latitude: coord.lat, longitude: coord.lng },
            { latitude: nextCoord.lat, longitude: nextCoord.lng }
          );
          stepDistanceToNextM = Math.max(20, Math.round(straightStepM * 1.25));
          stepWalkMinutesToNext = Math.max(
            1,
            Math.round(stepDistanceToNextM / 75)
          );
        } catch {
          stepDistanceToNextM = null;
          stepWalkMinutesToNext = null;
        }
      }

      const partnerMems = (sharedMemoriesBySpot[spot.id] || []).filter(
        (m) => !m.isMe
      );
      const companionNamesAtSpot = Array.from(
        new Set(partnerMems.map((m) => m.displayName).filter(Boolean))
      );

      return {
        id: spot.id,
        name: spot.name,
        description: spot.description || "",
        image_url: spot.image_url || spot.cover_image_url,
        cover_image_url: spot.cover_image_url || spot.image_url,
        address: spot.address,
        f7_fragment: spot.f7_fragment,
        order_index: spot.order_index ?? idx + 1,
        lat: coord?.lat ?? null,
        lng: coord?.lng ?? null,
        isStamped: Boolean(user && stampedSpotIds.has(spot.id)),
        isActiveDestination: spot.id === activeSpotId,
        distanceFromUserM,
        walkMinutesFromUser,
        stepDistanceToNextM,
        stepWalkMinutesToNext,
        companionNamesAtSpot,
      };
    });
  }, [rawSpots, userLocation, user, stampedSpotIds, activeSpotId, sharedMemoriesBySpot]);

  const { recommendedSpot, recommendationReason } = useMemo(() => {
    const unstamped = enrichedSpots.filter((s) => !s.isStamped);
    const pool = unstamped.length > 0 ? unstamped : enrichedSpots;
    if (pool.length === 0) {
      return { recommendedSpot: null, recommendationReason: "" };
    }

    const withDist = pool.filter((s) => s.distanceFromUserM !== null);
    if (withDist.length > 0) {
      const closest = [...withDist].sort(
        (a, b) => (a.distanceFromUserM ?? 999999) - (b.distanceFromUserM ?? 999999)
      )[0];
      return {
        recommendedSpot: closest,
        recommendationReason:
          unstamped.length > 0
            ? `🧭 現在地から最も近い未押印スポット（徒歩約${closest.walkMinutesFromUser}分）`
            : `🧭 現在地から最も近い再訪スポット（徒歩約${closest.walkMinutesFromUser}分）`,
      };
    }

    const nextInOrder = pool[0];
    return {
      recommendedSpot: nextInOrder,
      recommendationReason:
        unstamped.length > 0
          ? "✨ 順路で次に訪れるおすすめの場所"
          : "✨ すべてのしるしを獲得済み・もう一度訪れる場所",
    };
  }, [enrichedSpots]);

  const selectDestination = useCallback(
    async (spotId: string) => {
      if (!user) {
        await showAlert({
          text: "行き先を設定するにはログインが必要です。",
          okText: "確認",
        });
        return;
      }

      setSettingSpotId(spotId);
      const { error } = await supabase.from("users").upsert(
        {
          id: user.id,
          active_spot_id: spotId,
          display_name: getDisplayNameFromAuthUser(user),
        },
        { onConflict: "id" }
      );
      setSettingSpotId(null);

      if (error) {
        await showAlert({
          text: "行き先の設定に失敗しました: " + error.message,
          okText: "確認",
        });
        return;
      }

      setActiveSpotId(spotId);
      router.push(
        `/routes/${routeId}/map${
          effectiveGroupId ? `?groupId=${effectiveGroupId}` : ""
        }`
      );
    },
    [user, showAlert, routeId, effectiveGroupId, router]
  );

  const stampedCount = useMemo(
    () => enrichedSpots.filter((s) => s.isStamped).length,
    [enrichedSpots]
  );

  return {
    user,
    route,
    enrichedSpots,
    activeSpotId,
    stampedCount,
    totalSpots: enrichedSpots.length,
    recommendedSpot,
    recommendationReason,
    effectiveGroupId,
    partnerNames,
    userLocation,
    locating,
    requestUserLocation: () => requestUserLocation(false),
    loading,
    settingSpotId,
    selectDestination,
  };
}
