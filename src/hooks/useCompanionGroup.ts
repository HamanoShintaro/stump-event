"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import {
  CompanionMember,
  SharedStampMemory,
  resolveActiveGroupForRoute,
  fetchGroupCompanionMembers,
  fetchGroupSharedMemoriesForSpots,
  syncUserProfileAndGroupStatus,
} from "@/utils/stampMedia";

interface UseCompanionGroupOptions {
  routeId: string;
  urlGroupId?: string | null;
  spotIds?: string[];
  onPartnerJoined?: (partner: CompanionMember) => void;
  onMemoryUpdated?: (memory: { userId: string; spotId: string; hasPhoto: boolean; hasMemo: boolean }) => void;
}

let companionChannelCounter = 0;

export function useCompanionGroup({
  routeId,
  urlGroupId,
  spotIds = [],
  onPartnerJoined,
  onMemoryUpdated,
}: UseCompanionGroupOptions) {
  const { user } = useAuth();
  const [effectiveGroupId, setEffectiveGroupId] = useState<string | null>(urlGroupId || null);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [members, setMembers] = useState<CompanionMember[]>([]);
  const [sharedMemoriesBySpot, setSharedMemoriesBySpot] = useState<Record<string, SharedStampMemory[]>>({});
  const [loadingGroup, setLoadingGroup] = useState<boolean>(false);

  const knownPartnerIdsRef = useRef<Set<string>>(new Set());
  const initializedPartnersRef = useRef<boolean>(false);
  const onPartnerJoinedRef = useRef(onPartnerJoined);
  const onMemoryUpdatedRef = useRef(onMemoryUpdated);
  const userIdRef = useRef<string | undefined>(user?.id);
  onPartnerJoinedRef.current = onPartnerJoined;
  onMemoryUpdatedRef.current = onMemoryUpdated;
  userIdRef.current = user?.id;

  const spotIdsKey = spotIds.join(",");

  const refreshMembersAndMemories = useCallback(
    async (targetGroupId: string) => {
      if (!targetGroupId) return;
      const memberList = await fetchGroupCompanionMembers(supabase, targetGroupId, user);
      setMembers(memberList);

      const currentPartners = memberList.filter((m) => !m.isMe);
      if (initializedPartnersRef.current && onPartnerJoinedRef.current) {
        for (const p of currentPartners) {
          if (!knownPartnerIdsRef.current.has(p.userId)) {
            onPartnerJoinedRef.current(p);
          }
        }
      }
      knownPartnerIdsRef.current = new Set(currentPartners.map((p) => p.userId));
      initializedPartnersRef.current = true;

      const currentSpotIds = spotIdsKey ? spotIdsKey.split(",").filter(Boolean) : [];
      if (currentSpotIds.length > 0) {
        const memories = await fetchGroupSharedMemoriesForSpots(
          supabase,
          currentSpotIds,
          targetGroupId,
          memberList,
          user?.id
        );
        setSharedMemoriesBySpot(memories);
      }
    },
    [user, spotIdsKey]
  );

  const refreshRef = useRef(refreshMembersAndMemories);
  refreshRef.current = refreshMembersAndMemories;

  // 初期解決: URLのgroupId または ルートに対する参加中グループを自動検出
  useEffect(() => {
    let cancelled = false;
    async function init() {
      if (!routeId) return;
      if (!user) {
        if (urlGroupId) {
          setEffectiveGroupId(urlGroupId);
        }
        return;
      }

      setLoadingGroup(true);
      try {
        await syncUserProfileAndGroupStatus(supabase, user, urlGroupId);
        const resolved = await resolveActiveGroupForRoute(supabase, user, routeId, urlGroupId);
        if (cancelled) return;

        if (resolved) {
          setEffectiveGroupId(resolved.groupId);
          setInviteCode(resolved.inviteCode);
          await refreshMembersAndMemories(resolved.groupId);
        } else if (urlGroupId) {
          setEffectiveGroupId(urlGroupId);
          await refreshMembersAndMemories(urlGroupId);
        } else {
          setEffectiveGroupId(null);
          setInviteCode(null);
          setMembers([]);
        }
      } finally {
        if (!cancelled) setLoadingGroup(false);
      }
    }
    init();
    return () => {
      cancelled = true;
    };
  }, [user, routeId, urlGroupId, refreshMembersAndMemories]);

  // Realtime 購読 + 定期ポーリング（モバイルでのWebSocket切断対策）
  useEffect(() => {
    if (!effectiveGroupId) return;

    const channelName = `companion_group_${effectiveGroupId}_${++companionChannelCounter}`;
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
            filter: `group_id=eq.${effectiveGroupId}`,
          },
          () => {
            refreshRef.current(effectiveGroupId);
          }
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "stamp_events",
          },
          (payload: any) => {
            const rec = payload.new as any;
            if (!rec) return;
            const currentUserId = userIdRef.current;
            const isGroupMatch = rec.group_id === effectiveGroupId;
            const isMemberMatch =
              knownPartnerIdsRef.current.has(rec.user_id) ||
              Boolean(currentUserId && rec.user_id === currentUserId);
            if (isGroupMatch || isMemberMatch) {
              refreshRef.current(effectiveGroupId);
              if (onMemoryUpdatedRef.current && currentUserId && rec.user_id !== currentUserId) {
                onMemoryUpdatedRef.current({
                  userId: rec.user_id,
                  spotId: rec.spot_id,
                  hasPhoto: Boolean(rec.photo_url),
                  hasMemo: Boolean(rec.memo),
                });
              }
            }
          }
        )
        .subscribe();
    } catch (err) {
      console.warn("Realtime subscription warning:", err);
    }

    const intervalId = setInterval(() => {
      refreshRef.current(effectiveGroupId);
    }, 6000);

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
      clearInterval(intervalId);
    };
  }, [effectiveGroupId]);

  const partners = members.filter((m) => !m.isMe);
  const partnerNames = partners.map((p) => p.displayName);

  return {
    effectiveGroupId,
    setEffectiveGroupId,
    inviteCode,
    setInviteCode,
    members,
    partners,
    partnerNames,
    sharedMemoriesBySpot,
    loadingGroup,
    refreshGroupData: () => (effectiveGroupId ? refreshMembersAndMemories(effectiveGroupId) : Promise.resolve()),
  };
}
