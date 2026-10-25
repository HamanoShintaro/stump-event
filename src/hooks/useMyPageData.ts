import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { isRouteCurrentlyActive, getRemainingActiveHours } from "@/utils/userRoutes";
import { parseMemberDisplayName, syncUserProfileAndGroupStatus } from "@/utils/stampMedia";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";

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

      // 保存したルートを取得 (Supabase + localStorage フォールバック統合)
      const { data: userBookmarksData, error: bookmarksError } = await supabase
        .from("user_bookmarks")
        .select(`*, routes(*, spots(id, name, address, order_index, location))`)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
        
      if (bookmarksError) {
        console.error("Error fetching user bookmarks:", bookmarksError);
      }

      let mergedBookmarks: any[] = userBookmarksData || [];
      if (typeof window !== "undefined") {
        try {
          const rawLocal = window.localStorage.getItem(`shuin_bookmarks_${user.id}`);
          const localRouteIds: string[] = rawLocal ? JSON.parse(rawLocal) : [];
          if (Array.isArray(localRouteIds) && localRouteIds.length > 0) {
            const dbRouteIds = new Set(mergedBookmarks.map((b: any) => b.route_id));
            const missingRouteIds = localRouteIds.filter((id) => !dbRouteIds.has(id));
            if (missingRouteIds.length > 0) {
              const { data: missingRoutes } = await supabase
                .from("routes")
                .select("*, spots(id, name, address, order_index, location)")
                .in("id", missingRouteIds);
              if (missingRoutes && missingRoutes.length > 0) {
                const localItems = missingRoutes.map((r: any) => ({
                  route_id: r.id,
                  user_id: user.id,
                  created_at: new Date().toISOString(),
                  routes: r,
                }));
                mergedBookmarks = [...localItems, ...mergedBookmarks];
              }
            }
          }
        } catch {
          // ignore localStorage read error
        }
      }

      // 保存したルートのお散歩プランナー情報（walkMetrics・stampedCount・progressStatus）を付与
      if (mergedBookmarks.length > 0) {
        const bookmarkRouteIds = Array.from(
          new Set<string>(mergedBookmarks.map((b: any) => b.route_id).filter(Boolean))
        );
        const [bmStampsRes, bmEventsRes] = await Promise.all([
          supabase
            .from("stamps")
            .select("route_id, spot_id")
            .eq("user_id", user.id)
            .in("route_id", bookmarkRouteIds),
          supabase
            .from("stamp_events")
            .select("route_id, spot_id")
            .eq("user_id", user.id)
            .in("route_id", bookmarkRouteIds),
        ]);

        const stampedSpotsByRoute: Record<string, Set<string>> = {};
        [...(bmStampsRes.data || []), ...(bmEventsRes.data || [])].forEach((row: any) => {
          if (!row?.route_id || !row?.spot_id) return;
          if (!stampedSpotsByRoute[row.route_id]) {
            stampedSpotsByRoute[row.route_id] = new Set<string>();
          }
          stampedSpotsByRoute[row.route_id].add(row.spot_id);
        });

        mergedBookmarks = mergedBookmarks.map((bm: any) => {
          const rt = bm.routes || {};
          const spotsList = Array.isArray(rt.spots) ? rt.spots : [];
          const walkMetrics = computeRouteWalkMetrics(
            spotsList,
            rt.rarity_estimated_min ?? rt.estimated_time_min ?? null
          );
          const totalSpots = spotsList.length;
          const stampedCount = stampedSpotsByRoute[bm.route_id]?.size || 0;
          const progressStatus: "unvisited" | "in_progress" | "completed" =
            totalSpots > 0 && stampedCount >= totalSpots
              ? "completed"
              : stampedCount > 0
                ? "in_progress"
                : "unvisited";

          return {
            ...bm,
            walkMetrics,
            stampedCount,
            totalSpots,
            progressStatus,
          };
        });
      }

      // 連れ立ち（グループ）情報のフェッチ
      let activeRalliesWithGroups = activeRalliesFiltered;
      try {
        await syncUserProfileAndGroupStatus(supabase, user);

        const { data: myMemberships } = await supabase
          .from("group_members")
          .select(`
            group_id,
            joined_at,
            groups (
              id,
              route_id,
              invite_code,
              is_active,
              created_at
            )
          `)
          .eq("user_id", user.id)
          .order("joined_at", { ascending: false });

        const activeGroupList = (myMemberships || [])
          .map((m: any) => (Array.isArray(m.groups) ? m.groups[0] : m.groups))
          .filter((g: any) => g && g.is_active);

        const activeGroupIds = activeGroupList.map((g: any) => g.id);
        const groupMembersMap: Record<string, any[]> = {};
        
        if (activeGroupIds.length > 0) {
          const { data: membersData } = await supabase
            .from("group_members")
            .select(`
              group_id,
              user_id,
              status,
              joined_at,
              users:user_id (
                id,
                display_name,
                avatar_url
              )
            `)
            .in("group_id", activeGroupIds)
            .order("joined_at", { ascending: true });
            
          if (membersData) {
            membersData.forEach((m: any) => {
              if (!groupMembersMap[m.group_id]) {
                groupMembersMap[m.group_id] = [];
              }
              if (m.user_id !== user.id) {
                const u = Array.isArray(m.users) ? m.users[0] : m.users;
                const partnerIdx = groupMembersMap[m.group_id].length;
                groupMembersMap[m.group_id].push({
                  id: m.user_id,
                  displayName: parseMemberDisplayName(m, user.id, partnerIdx),
                  avatarUrl: u?.avatar_url || null
                });
              }
            });
          }
        }

        activeRalliesWithGroups = activeRalliesFiltered.map((ur: any) => {
          const candidateGroups = activeGroupList.filter((g: any) => g.route_id === ur.route_id);
          const group =
            candidateGroups.find((g: any) => (groupMembersMap[g.id]?.length || 0) > 0) ||
            candidateGroups[0];
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
      setBookmarkedRallies(mergedBookmarks);
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

  const removeBookmark = async (routeId: string) => {
    if (!user || !routeId) return;

    const confirmRemove = await showAlert({
      text: "このルートを保存一覧（栞）から外しますか？",
      okText: "保存を解除する",
      ngText: "キャンセル",
    });
    if (!confirmRemove) return;

    // localStorage からも削除
    if (typeof window !== "undefined") {
      try {
        const key = `shuin_bookmarks_${user.id}`;
        const raw = window.localStorage.getItem(key);
        const list: string[] = raw ? JSON.parse(raw) : [];
        if (Array.isArray(list)) {
          window.localStorage.setItem(
            key,
            JSON.stringify(list.filter((id) => id !== routeId))
          );
        }
      } catch {
        // ignore storage error
      }
    }

    try {
      await supabase
        .from("user_bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("route_id", routeId);
    } catch (err) {
      console.warn("Bookmark delete warning:", err);
    }

    setBookmarkedRallies((prev) => prev.filter((b) => b.route_id !== routeId));
  };

  return {
    activeRallies,
    bookmarkedRallies,
    dataLoading,
    leaveNarrative,
    removeBookmark,
    refreshMyPageData: fetchMyData,
  };
}
