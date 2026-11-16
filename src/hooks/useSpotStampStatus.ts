import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { getGuestStampsForSpot } from "@/utils/guestProgress";

export function useSpotStampStatus(spotId: string, userId: string | undefined) {
  const [isAcquired, setIsAcquired] = useState(false); // 生涯で1回以上押印しているか
  const [isTodayStamped, setIsTodayStamped] = useState(false); // 本日すでに押印したか
  const [visitorNumber, setVisitorNumber] = useState<number>(47);
  const [scannedDate, setScannedDate] = useState<string>("");
  const [visitCount, setVisitCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    if (!spotId) {
      setIsAcquired(false);
      setIsTodayStamped(false);
      setVisitCount(0);
      setLoading(false);
      return;
    }

    if (!userId) {
      const guestStamps = getGuestStampsForSpot(spotId);
      const count = guestStamps.length;
      setVisitCount(count);
      if (count > 0) {
        const latest = guestStamps[0];
        setIsAcquired(true);
        setVisitorNumber(47);
        setScannedDate(new Date(latest.acquiredAt).toLocaleDateString("ja-JP"));
        const jstOffset = 9 * 60 * 60 * 1000;
        const todayJst = new Date(Date.now() + jstOffset);
        const todayStr = `${todayJst.getUTCFullYear()}-${String(todayJst.getUTCMonth() + 1).padStart(2, "0")}-${String(todayJst.getUTCDate()).padStart(2, "0")}`;
        const hasToday = guestStamps.some((s) => {
          const d = new Date(new Date(s.acquiredAt).getTime() + jstOffset);
          const sStr = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
          return sStr === todayStr;
        });
        setIsTodayStamped(hasToday);
      } else {
        setIsAcquired(false);
        setIsTodayStamped(false);
      }
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // 過去のすべての押印レコードを取得 (JSTタイムゾーンを考慮)
      const { data: stamps, error } = await supabase
        .from("stamps")
        .select("id, acquired_at, visitor_number")
        .eq("user_id", userId)
        .eq("spot_id", spotId)
        .order("acquired_at", { ascending: false });

      if (error) {
        console.error("Error fetching stamp status:", error);
        return;
      }

      const count = stamps?.length || 0;
      setVisitCount(count);

      if (count > 0 && stamps) {
        setIsAcquired(true);
        // 最新の押印情報をセット
        const latest = stamps[0];
        setVisitorNumber(latest.visitor_number || 47);
        setScannedDate(new Date(latest.acquired_at).toLocaleDateString("ja-JP"));

        // 本日すでに押印済みかチェック (JST基準)
        const jstOffset = 9 * 60 * 60 * 1000;
        const todayJst = new Date(Date.now() + jstOffset);
        const yyyy = todayJst.getUTCFullYear();
        const mm = String(todayJst.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(todayJst.getUTCDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        const hasTodayStamp = stamps.some(s => {
          const sDateJst = new Date(new Date(s.acquired_at).getTime() + jstOffset);
          const sY = sDateJst.getUTCFullYear();
          const sM = String(sDateJst.getUTCMonth() + 1).padStart(2, '0');
          const sD = String(sDateJst.getUTCDate()).padStart(2, '0');
          return `${sY}-${sM}-${sD}` === todayStr;
        });

        setIsTodayStamped(hasTodayStamp);
      } else {
        setIsAcquired(false);
        setIsTodayStamped(false);
      }
    } catch (err) {
      console.error("Error checking spot stamp status:", err);
    } finally {
      setLoading(false);
    }
  }, [spotId, userId]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  return {
    isAcquired,
    isTodayStamped,
    visitorNumber,
    scannedDate,
    visitCount,
    loading,
    refetch: fetchStatus
  };
}
