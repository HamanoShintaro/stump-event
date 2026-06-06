import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";

export function useMyPageData(user: any) {
  const [activeRallies, setActiveRallies] = useState<any[]>([]);
  const [bookmarkedRallies, setBookmarkedRallies] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { showAlert } = useCustomAlert();

  const fetchMyData = useCallback(async () => {
    if (!user) {
      setActiveRallies([]);
      setBookmarkedRallies([]);
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    try {
      // 参加中のルートを取得
      const { data: userRalliesData, error: ralliesError } = await supabase
        .from("user_routes")
        .select(`*, routes(*)`)
        .eq("user_id", user.id)
        .neq("status", "CANCELED")
        .order("joined_at", { ascending: false });
      
      if (ralliesError) {
        console.error("Error fetching user routes:", ralliesError);
      }

      // 保存したルートを取得
      const { data: userBookmarksData, error: bookmarksError } = await supabase
        .from("user_bookmarks")
        .select(`*, routes(*)`)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
        
      if (bookmarksError) {
        console.error("Error fetching user bookmarks:", bookmarksError);
      }

      setActiveRallies(userRalliesData || []);
      setBookmarkedRallies(userBookmarksData || []);
    } catch (e) {
      console.error(e);
    } finally {
      setDataLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchMyData();
  }, [fetchMyData]);

  const leaveNarrative = async (rallyId: string) => {
    if (!user) return;
    
    const confirmLeave = await showAlert({
      text: "本当にこのルートから離脱しますか？\n※現在の進行状況が失われる可能性があります。",
      okText: "離脱する",
      ngText: "キャンセル"
    });
    if (!confirmLeave) return;

    try {
      const { error, count } = await supabase
        .from("user_routes")
        .update({ status: 'CANCELED' }, { count: 'exact' })
        .eq("user_id", user.id)
        .eq("route_id", rallyId);
      
      if (error) {
        console.error("Failed to leave narrative:", error);
        await showAlert({ text: "離脱に失敗しました。もう一度お試しください。", okText: "確認" });
        return;
      }

      if (count === 0) {
        await showAlert({ text: "データが更新されませんでした。Supabaseの権限設定（RLSのUPDATEポリシー）が許可されていない可能性があります。", okText: "確認" });
        return;
      }
      
      // 成功した場合、ローカルのステートを更新して画面に反映
      setActiveRallies((prev) => prev.filter((r) => r.route_id !== rallyId));
    } catch (e) {
      console.error(e);
      await showAlert({ text: "エラーが発生しました。", okText: "確認" });
    }
  };

  return {
    activeRallies,
    bookmarkedRallies,
    dataLoading,
    leaveNarrative,
  };
}
