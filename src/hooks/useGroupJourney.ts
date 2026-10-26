"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { computeRouteWalkMetrics, RouteWalkMetrics } from "@/utils/routeMetrics";
import { activateUserRoute } from "@/utils/userRoutes";
import { triggerNavigationLoading } from "@/hooks/useNavigationLoading";
import {
  parseMemberDisplayName,
  extractStampMemories,
} from "@/utils/stampMedia";

export interface GroupJourneyInfo {
  id: string;
  routeId: string;
  routeTitle: string;
  routeCategory?: string;
  routePrefecture?: string;
  routeDescription?: string;
  inviteCode: string;
  status: string;
  isActive: boolean;
  createdAt: string;
  walkMetrics: RouteWalkMetrics;
}

export interface GroupMemberProgress {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  isMe: boolean;
  stampedSpotIds: string[];
  stampedCount: number;
  totalSpots: number;
}

export interface GroupSpotSharedMemory {
  id: string;
  userId: string;
  displayName: string;
  photoUrl: string | null;
  comment: string | null;
  createdAt: string;
}

export interface GroupSpotMatrixItem {
  spotId: string;
  orderIndex: number;
  name: string;
  address: string;
  storyFragment: string;
  stampedMembers: Array<{ userId: string; displayName: string }>;
  memories: GroupSpotSharedMemory[];
}

export function useGroupJourney(
  groupId: string,
  userId?: string,
  userEmail?: string
) {
  const router = useRouter();
  const [groupInfo, setGroupInfo] = useState<GroupJourneyInfo | null>(null);
  const [memberProgressList, setMemberProgressList] = useState<GroupMemberProgress[]>([]);
  const [spotSharedMatrix, setSpotSharedMatrix] = useState<GroupSpotMatrixItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [joining, setJoining] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const fetchGroupJourney = useCallback(async () => {
    if (!groupId) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    try {
      // 1. グループ情報およびルート・スポット情報を取得
      const { data: gData, error: gError } = await supabase
        .from("groups")
        .select("*, routes(*, spots(*))")
        .eq("id", groupId)
        .maybeSingle();

      if (gError || !gData) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const routeObj = Array.isArray(gData.routes) ? gData.routes[0] : gData.routes;
      const routeId = gData.route_id || routeObj?.id || "";

      let rawSpots: any[] = Array.isArray(routeObj?.spots) ? routeObj.spots : [];
      if (rawSpots.length === 0 && routeId) {
        const { data: spFallback } = await supabase
          .from("spots")
          .select("*")
          .eq("route_id", routeId)
          .order("order_index", { ascending: true });
        if (spFallback) rawSpots = spFallback;
      }

      const orderedSpots = [...rawSpots].sort(
        (a, b) => (a?.order_index ?? 0) - (b?.order_index ?? 0)
      );
      const spotIds = orderedSpots.map((s) => s.id).filter(Boolean);
      const walkMetrics = computeRouteWalkMetrics(
        orderedSpots,
        routeObj?.rarity_estimated_min ?? routeObj?.estimated_time_min ?? null
      );

      setGroupInfo({
        id: gData.id,
        routeId,
        routeTitle: routeObj?.title || "街歩きのルート",
        routeCategory: routeObj?.category,
        routePrefecture: routeObj?.prefecture,
        routeDescription: routeObj?.description || "",
        inviteCode: gData.invite_code || "",
        status: gData.status || (gData.is_active ? "ACTIVE" : "ENDED"),
        isActive: Boolean(gData.is_active),
        createdAt: gData.created_at || new Date().toISOString(),
        walkMetrics,
      });

      // 2. グループメンバー一覧とグループ内 stamp_events を並列取得
      const [membersRes, groupEventsRes] = await Promise.all([
        supabase
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
          .eq("group_id", groupId)
          .order("joined_at", { ascending: true }),
        supabase
          .from("stamp_events")
          .select("id, user_id, spot_id, route_id, group_id, memo, photo_url, created_at")
          .eq("group_id", groupId)
          .order("created_at", { ascending: false }),
      ]);

      const rawMembers = membersRes.data || [];
      const groupEvents = groupEventsRes.data || [];

      // 3. メンバーまたはイベントに登場する全 user_id を users テーブルから直接補完
      const allUserIds = Array.from(
        new Set<string>([
          ...(userId ? [userId] : []),
          ...rawMembers.map((m: any) => m.user_id).filter(Boolean),
          ...groupEvents.map((e: any) => e.user_id).filter(Boolean),
        ])
      );

      const usersMap: Record<
        string,
        { id: string; display_name?: string | null; avatar_url?: string | null }
      > = {};

      if (allUserIds.length > 0) {
        const { data: usersData } = await supabase
          .from("users")
          .select("id, display_name, avatar_url")
          .in("id", allUserIds);

        (usersData || []).forEach((u: any) => {
          if (u?.id) {
            usersMap[u.id] = u;
          }
        });
      }

      // 4. メンバーが該当ルートのスポットで押印した全 stamp_events も補完取得
      let memberSpotEvents: any[] = [];
      if (allUserIds.length > 0 && spotIds.length > 0) {
        const { data: bySpotUsers } = await supabase
          .from("stamp_events")
          .select("id, user_id, spot_id, route_id, group_id, memo, photo_url, created_at")
          .in("spot_id", spotIds)
          .in("user_id", allUserIds)
          .order("created_at", { ascending: false });
        if (bySpotUsers) {
          memberSpotEvents = bySpotUsers;
        }
      }

      // イベントを id で重複排除して統合
      const eventDedupMap = new Map<string, any>();
      [...groupEvents, ...memberSpotEvents].forEach((ev: any) => {
        if (ev?.id && !eventDedupMap.has(ev.id)) {
          eventDedupMap.set(ev.id, ev);
        }
      });
      const allRelevantEvents = Array.from(eventDedupMap.values());

      // 5. メンバー一覧の解決（parseMemberDisplayName + users テーブル補完）
      const resolvedMembersMap = new Map<
        string,
        { userId: string; displayName: string; avatarUrl: string | null; isMe: boolean }
      >();
      let partnerIdx = 0;

      rawMembers.forEach((m: any) => {
        if (!m?.user_id || resolvedMembersMap.has(m.user_id)) return;
        const isMe = Boolean(userId && m.user_id === userId);
        const relUser = Array.isArray(m.users) ? m.users[0] : m.users;
        const lookedUp = usersMap[m.user_id];
        const mergedUser = relUser || lookedUp || null;

        let displayName = parseMemberDisplayName(
          { ...m, users: mergedUser },
          userId,
          isMe ? undefined : partnerIdx++
        );
        if (isMe && (displayName === "自分" || !displayName)) {
          displayName =
            mergedUser?.display_name ||
            (userEmail ? userEmail.split("@")[0] : "") ||
            "あなた";
        }

        resolvedMembersMap.set(m.user_id, {
          userId: m.user_id,
          displayName,
          avatarUrl: mergedUser?.avatar_url || null,
          isMe,
        });
      });

      // stamp_events にのみ登場するメンバーがいれば補完
      allRelevantEvents.forEach((ev: any) => {
        if (!ev?.user_id || resolvedMembersMap.has(ev.user_id)) return;
        const isMe = Boolean(userId && ev.user_id === userId);
        const lookedUp = usersMap[ev.user_id];
        const displayName = parseMemberDisplayName(
          { user_id: ev.user_id, users: lookedUp || null },
          userId,
          isMe ? undefined : partnerIdx++
        );
        resolvedMembersMap.set(ev.user_id, {
          userId: ev.user_id,
          displayName,
          avatarUrl: lookedUp?.avatar_url || null,
          isMe,
        });
      });

      // 6. メンバーごとの進捗リストを構築
      const totalSpots = orderedSpots.length;
      const validSpotIdSet = new Set(spotIds);

      const progressList: GroupMemberProgress[] = Array.from(
        resolvedMembersMap.values()
      ).map((member) => {
        const memberEvents = allRelevantEvents.filter(
          (ev: any) =>
            ev.user_id === member.userId &&
            ev.spot_id &&
            validSpotIdSet.has(ev.spot_id)
        );
        const stampedSpotIds = Array.from(
          new Set<string>(memberEvents.map((ev: any) => ev.spot_id))
        );
        return {
          userId: member.userId,
          displayName: member.displayName,
          avatarUrl: member.avatarUrl,
          isMe: member.isMe,
          stampedSpotIds,
          stampedCount: stampedSpotIds.length,
          totalSpots,
        };
      });

      // 自分を先頭、次に押印数が多い順に並べる
      progressList.sort((a, b) => {
        if (a.isMe !== b.isMe) return a.isMe ? -1 : 1;
        return b.stampedCount - a.stampedCount;
      });
      setMemberProgressList(progressList);

      // 7. スポット別の共有しるし＆思い出マトリクスを構築
      const matrix: GroupSpotMatrixItem[] = orderedSpots.map((spot: any, idx: number) => {
        const spotEvs = allRelevantEvents.filter((ev: any) => ev.spot_id === spot.id);

        // 押印したメンバー一覧（重複排除）
        const stampedMemberMap = new Map<string, { userId: string; displayName: string }>();
        // 思い出（写真またはコメントがある記録、またはメンバーごとの最新記録）
        const memoryByUserMap = new Map<string, GroupSpotSharedMemory>();

        spotEvs.forEach((ev: any) => {
          const member = resolvedMembersMap.get(ev.user_id);
          const displayName = member?.displayName || "同行の旅人";

          if (ev.user_id && !stampedMemberMap.has(ev.user_id)) {
            stampedMemberMap.set(ev.user_id, {
              userId: ev.user_id,
              displayName,
            });
          }

          const { photoUrl, comment } = extractStampMemories(ev);
          if (photoUrl || comment) {
            const existing = memoryByUserMap.get(ev.user_id);
            if (!existing) {
              memoryByUserMap.set(ev.user_id, {
                id: ev.id,
                userId: ev.user_id,
                displayName,
                photoUrl,
                comment,
                createdAt: ev.created_at,
              });
            } else {
              if (!existing.photoUrl && photoUrl) existing.photoUrl = photoUrl;
              if (!existing.comment && comment) existing.comment = comment;
            }
          }
        });

        return {
          spotId: spot.id,
          orderIndex: spot.order_index ?? idx + 1,
          name: spot.name || `スポット ${idx + 1}`,
          address: spot.address || "",
          storyFragment: spot.f7_fragment || spot.description || "",
          stampedMembers: Array.from(stampedMemberMap.values()),
          memories: Array.from(memoryByUserMap.values()),
        };
      });

      setSpotSharedMatrix(matrix);
      setNotFound(false);
    } catch (err) {
      console.error("Failed to load group journey:", err);
    } finally {
      setLoading(false);
    }
  }, [groupId, userId, userEmail]);

  useEffect(() => {
    fetchGroupJourney();
  }, [fetchGroupJourney]);

  // リアルタイム購読（group_members および stamp_events）
  useEffect(() => {
    if (!groupId) return;

    const channelName = `group-journey-${groupId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    let channel: ReturnType<typeof supabase.channel> | null = null;
    try {
      channel = supabase
        .channel(channelName)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "group_members",
            filter: `group_id=eq.${groupId}`,
          },
          () => {
            fetchGroupJourney();
          }
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "stamp_events",
            filter: `group_id=eq.${groupId}`,
          },
          () => {
            fetchGroupJourney();
          }
        )
        .subscribe();
    } catch (err) {
      console.warn("Group journey realtime subscription warning:", err);
    }

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [groupId, fetchGroupJourney]);

  // グループに参加登録して連れ立ちマップを開く
  const joinAndOpenMap = useCallback(async () => {
    if (!groupInfo?.routeId) return;
    setJoining(true);
    try {
      if (userId) {
        const fallbackName =
          (userEmail ? userEmail.split("@")[0] : "") || "旅人";
        const myMember = memberProgressList.find((m) => m.isMe);
        const resolvedName = (myMember?.displayName || fallbackName).slice(0, 40);
        const statusValue = `ACTIVE:${resolvedName}`;

        const { data: existingMember } = await supabase
          .from("group_members")
          .select("user_id, status")
          .eq("group_id", groupId)
          .eq("user_id", userId)
          .maybeSingle();

        if (!existingMember) {
          await supabase.from("group_members").insert({
            group_id: groupId,
            user_id: userId,
            status: statusValue,
          });
        } else if (existingMember.status !== statusValue) {
          await supabase
            .from("group_members")
            .update({ status: statusValue })
            .eq("group_id", groupId)
            .eq("user_id", userId);
        }

        await activateUserRoute(userId, groupInfo.routeId);
      }

      const mapUrl = `/routes/${groupInfo.routeId}/map?groupId=${groupId}`;
      triggerNavigationLoading(mapUrl);
      router.push(mapUrl);
    } catch (err) {
      console.error("Failed to join and open map:", err);
      const mapUrl = `/routes/${groupInfo.routeId}/map?groupId=${groupId}`;
      triggerNavigationLoading(mapUrl);
      router.push(mapUrl);
    } finally {
      setJoining(false);
    }
  }, [groupId, groupInfo, userId, userEmail, memberProgressList, router]);

  return {
    groupInfo,
    memberProgressList,
    spotSharedMatrix,
    loading,
    joining,
    notFound,
    joinAndOpenMap,
    refreshGroupJourney: fetchGroupJourney,
  };
}
