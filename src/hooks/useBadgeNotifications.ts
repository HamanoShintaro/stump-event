"use client";

import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/types";
import { getUnseenBadges, clearUnseenBadges } from "@/utils/badgeEvaluator";

export function useBadgeNotifications(userId?: string | null) {
  const [unseenBadges, setUnseenBadges] = useState<Badge[]>([]);

  const refresh = useCallback(() => {
    if (!userId) {
      setUnseenBadges([]);
      return;
    }
    setUnseenBadges(getUnseenBadges(userId));
  }, [userId]);

  useEffect(() => {
    refresh();
    const handleUpdate = () => refresh();
    window.addEventListener("shuinBadgesUpdated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("shuinBadgesUpdated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, [refresh]);

  const markAllSeen = useCallback(() => {
    if (!userId) return;
    clearUnseenBadges(userId);
    setUnseenBadges([]);
  }, [userId]);

  return {
    unseenBadges,
    unseenCount: unseenBadges.length,
    markAllSeen,
    refresh,
  };
}
