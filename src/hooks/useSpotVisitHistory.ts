"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface SpotVisitHistoryEntry {
  id: string;
  createdAt: string;
  formattedDate: string;
  formattedTime: string;
  visitIndex: number; // 1 = 初回訪問, 2 = 第2回目...
  visitorNumber: number;
  memo: string | null;
  photoUrl: string | null;
  groupId: string | null;
  isFirstVisit: boolean;
}

export function useSpotVisitHistory(
  spotId: string,
  userId?: string,
  refreshKey?: number
) {
  const [history, setHistory] = useState<SpotVisitHistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = useCallback(async () => {
    if (!spotId || !userId) {
      setHistory([]);
      return;
    }

    setLoading(true);
    try {
      const { data: events, error: evError } = await supabase
        .from("stamp_events")
        .select(
          "id, created_at, visitor_number, memo, photo_url, group_id, is_first_visit"
        )
        .eq("user_id", userId)
        .eq("spot_id", spotId)
        .order("created_at", { ascending: false });

      if (!evError && events && events.length > 0) {
        const total = events.length;
        const mapped: SpotVisitHistoryEntry[] = events.map((ev: any, idx: number) => {
          const dt = new Date(ev.created_at);
          let localMemo: string | null = null;
          if (typeof window !== "undefined") {
            try {
              localMemo = localStorage.getItem(`shuin_memo_${ev.id}`);
            } catch {
              // ignore
            }
          }
          const visitIndex = total - idx;
          return {
            id: ev.id,
            createdAt: ev.created_at,
            formattedDate: dt.toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            formattedTime: dt.toLocaleTimeString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            visitIndex,
            visitorNumber: ev.visitor_number || 47,
            memo: (ev.memo && String(ev.memo).trim()) || localMemo || null,
            photoUrl:
              ev.photo_url && String(ev.photo_url).trim() ? ev.photo_url : null,
            groupId: ev.group_id || null,
            isFirstVisit: visitIndex === 1 || Boolean(ev.is_first_visit),
          };
        });
        setHistory(mapped);
        setLoading(false);
        return;
      }

      // Fallback to stamps table if stamp_events is empty
      const { data: stamps } = await supabase
        .from("stamps")
        .select("id, stamp_event_id, acquired_at, visitor_number")
        .eq("user_id", userId)
        .eq("spot_id", spotId)
        .order("acquired_at", { ascending: false });

      if (stamps && stamps.length > 0) {
        const total = stamps.length;
        const mapped: SpotVisitHistoryEntry[] = stamps.map((st: any, idx: number) => {
          const dt = new Date(st.acquired_at);
          let localMemo: string | null = null;
          if (typeof window !== "undefined") {
            try {
              localMemo =
                localStorage.getItem(`shuin_memo_${st.id}`) ||
                (st.stamp_event_id
                  ? localStorage.getItem(`shuin_memo_${st.stamp_event_id}`)
                  : null);
            } catch {
              // ignore
            }
          }
          const visitIndex = total - idx;
          return {
            id: st.stamp_event_id || st.id,
            createdAt: st.acquired_at,
            formattedDate: dt.toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            formattedTime: dt.toLocaleTimeString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            visitIndex,
            visitorNumber: st.visitor_number || 47,
            memo: localMemo || null,
            photoUrl: null,
            groupId: null,
            isFirstVisit: visitIndex === 1,
          };
        });
        setHistory(mapped);
      } else {
        setHistory([]);
      }
    } catch (e) {
      console.error("Failed to fetch spot visit history:", e);
    } finally {
      setLoading(false);
    }
  }, [spotId, userId]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory, refreshKey]);

  return {
    history,
    loading,
    refetchHistory: fetchHistory,
  };
}
