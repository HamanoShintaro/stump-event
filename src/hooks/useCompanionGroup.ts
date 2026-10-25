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
  const spotIdsKey = spotIds.join(",");

  const refreshMembersAndMemories = useCallback(
    async (targetGroupId: string) => {
      if (!targetGroupId) return;
      const memberList = await fetchGroupCompanionMembers(supabase, targetGroupId, user);
      setMembers(memberList);

      const currentPartners = memberList.filter((m) => !m.isMe);
      if (initializedPartnersRef.current && onPartnerJoined) {
        for (const p of currentPartners) {
          if (!knownPartnerIdsRef.current.has(p.userId)) {
            onPartnerJoined(p);
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
    [user, spotIdsKey, onPartnerJoined]
  );

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

    const channel = supabase
      .channel(`companion_group_${effectiveGroupId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "group_members",
          filter: `group_id=eq.${effectiveGroupId}`,
        },
        () => {
          refreshMembersAndMemories(effectiveGroupId);
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
          const isGroupMatch = rec.group_id === effectiveGroupId;
          const isMemberMatch = knownPartnerIdsRef.current.has(rec.user_id) || (user && rec.user_id === user.id);
          if (isGroupMatch || isMemberMatch) {
            refreshMembersAndMemories(effectiveGroupId);
            if (onMemoryUpdated && user && rec.user_id !== user.id) {
              onMemoryUpdated({
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

    const intervalId = setInterval(() => {
      refreshMembersAndMemories(effectiveGroupId);
    }, 6000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(intervalId);
    };
  }, [effectiveGroupId, user, refreshMembersAndMemories, onMemoryUpdated]);

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
