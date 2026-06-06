import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export function useRouteStamps(routeId: string, userId: string | undefined) {
  const [stampedSpotIds, setStampedSpotIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchRouteStamps = useCallback(async () => {
    if (!userId || !routeId) {
      setStampedSpotIds(new Set());
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("stamps")
        .select("spot_id")
        .eq("user_id", userId)
        .eq("route_id", routeId);

      if (error) {
        console.error("Error fetching route stamps:", error);
        return;
      }

      const ids = new Set(data.map((s: any) => s.spot_id));
      setStampedSpotIds(ids);
    } catch (err) {
      console.error("Error in fetchRouteStamps:", err);
    } finally {
      setLoading(false);
    }
  }, [routeId, userId]);

  useEffect(() => {
    fetchRouteStamps();
  }, [fetchRouteStamps]);

  return { stampedSpotIds, loading, refetch: fetchRouteStamps };
}
