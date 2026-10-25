import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { isRouteCurrentlyActive, getRemainingActiveHours } from "@/utils/userRoutes";

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
      // 参加中のルートを取得 (IN_PROGRESSのみ対象。完走・中断済みのものは除外)
      const { data: userRalliesData, error: ralliesError } = await supabase
        .from("user_routes")
        .select(`*, routes(*)`)
        .eq("user_id", user.id)
        .in("status", ["IN_PROGRESS", "in_progress"])
        .order("joined_at", { ascending: false });
      
      if (ralliesError) {
        console.error("Error fetching user routes:", ralliesError);
      }

      // 24時間経過判定 ＆ 同時進行1個制限の適用
      const rawRallies = userRalliesData || [];
      const validActive: any[] = [];
      const expiredOrExtra: any[] = [];

      for (const ur of rawRallies) {
        if (isRouteCurrentlyActive(ur) && validActive.length === 0) {
          validActive.push(ur);
        } else {
          expiredOrExtra.push(ur);
        }
      }

      // 24時間経過したもの、または2件目以降のIN_PROGRESSはDB側でも進行中から外す（非破壊更新）
      if (expiredOrExtra.length > 0) {
        await Promise.all(
          expiredOrExtra.map((ur) =>
            supabase
              .from("user_routes")
              .update({ status: ur.completed_at ? "COMPLETED" : "CANCELED" })
              .eq("id", ur.id)
          )
        );
      }

      // 進行中ルートのスポット総数・獲得済みしるし数を計算し、未完走レコードが全スポット達成済みなら完走扱いに更新
      let activeRalliesFiltered: any[] = [];
      if (validActive.length > 0) {
        const currentUr = validActive[0];
        const routeId = currentUr.route_id;

        const [spotsRes, stampsRes] = await Promise.all([
          supabase.from("spots").select("id").eq("route_id", routeId),
          supabase.from("stamps").select("spot_id, acquired_at").eq("user_id", user.id).eq("route_id", routeId),
        ]);

        const totalSpots = (spotsRes.data || []).length;
        const uniqueStampedSpots = new Set((stampsRes.data || []).map((s: any) => s.spot_id));
        const stampedCount = uniqueStampedSpots.size;

        // 初回進行中（completed_at が未設定）で全スポット獲得済みの場合は完走として進行中から外す
        if (!currentUr.completed_at && totalSpots > 0 && stampedCount >= totalSpots) {
          await supabase
            .from("user_routes")
            .update({
              status: "COMPLETED",
              completed_at: new Date().toISOString(),
            })
            .eq("id", currentUr.id);
        } else {
          activeRalliesFiltered = [
            {
              ...currentUr,
              stampedCount,
              totalSpots,
              remainingHours: getRemainingActiveHours(currentUr.joined_at),
            },
          ];
        }
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

      // 連れ立ち（グループ）情報のフェッチ
      let activeRalliesWithGroups = activeRalliesFiltered;
      try {
        const { data: myMemberships } = await supabase
          .from("group_members")
          .select(`
            group_id,
            groups (
              id,
              route_id,
              invite_code,
              is_active
            )
          `)
          .eq("user_id", user.id);

        const activeGroupList = (myMemberships || [])
          .map((m: any) => m.groups)
          .filter((g: any) => g && g.is_active);

        const activeGroupIds = activeGroupList.map((g: any) => g.id);
        const groupMembersMap: Record<string, any[]> = {};
        
        if (activeGroupIds.length > 0) {
          const { data: membersData } = await supabase
            .from("group_members")
            .select(`
              group_id,
              user_id,
              users:user_id (
                id,
                display_name,
                avatar_url
              )
            `)
            .in("group_id", activeGroupIds);
            
          if (membersData) {
            membersData.forEach((m: any) => {
              if (!groupMembersMap[m.group_id]) {
                groupMembersMap[m.group_id] = [];
              }
              if (m.user_id !== user.id && m.users) {
                groupMembersMap[m.group_id].push({
                  id: m.users.id,
                  displayName: m.users.display_name,
                  avatarUrl: m.users.avatar_url
                });
              }
            });
          }
        }

        activeRalliesWithGroups = activeRalliesFiltered.map((ur: any) => {
          const group = activeGroupList.find((g: any) => g.route_id === ur.route_id);
          if (group) {
            const partners = groupMembersMap[group.id] || [];
            return {
              ...ur,
              group: {
                id: group.id,
                inviteCode: group.invite_code,
                partners: partners
              }
            };
          }
          return ur;
        });
      } catch (grpErr) {
        console.error("Error fetching companion groups for My Page:", grpErr);
      }

      setActiveRallies(activeRalliesWithGroups);
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
      text: "このルートを進行中から外しますか？\n※これまでに獲得した押印（SHUIN）や参加履歴は消えずにSHUIN帳へ残り、いつでも再参加できます。",
      okText: "進行中から外す",
      ngText: "キャンセル"
    });
    if (!confirmLeave) return;

    try {
      const target = activeRallies.find((r) => r.route_id === rallyId);
      const nextStatus = target?.completed_at ? "COMPLETED" : "CANCELED";

      const { error, count } = await supabase
        .from("user_routes")
        .update({ status: nextStatus }, { count: "exact" })
        .eq("user_id", user.id)
        .eq("route_id", rallyId);
      
      if (error) {
        console.error("Failed to leave narrative:", error);
        await showAlert({ text: "進行中からの解除に失敗しました。もう一度お試しください。", okText: "確認" });
        return;
      }

      if (count === 0) {
        await showAlert({ text: "データが更新されませんでした。権限設定が許可されていない可能性があります。", okText: "確認" });
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
