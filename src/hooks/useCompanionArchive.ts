"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { parseMemberDisplayName } from "@/utils/stampMedia";

export interface CompanionSummary {
  companionName: string;
  avatarUrl: string | null;
  sharedStampsCount: number;
  routesCount: number;
  latestWalkedAt: string;
  routeTitles: string[];
}

export interface RecentGroupSession {
  groupId: string;
  routeId: string;
  routeTitle: string;
  inviteCode: string;
  partnerNames: string[];
  myStampedCount: number;
  sharedMemoriesCount: number;
  walkedAt: string;
  isActive: boolean;
}

interface InternalPartnerInfo {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
}

export function useCompanionArchive(userId: string | undefined) {
  const [companionSummaries, setCompanionSummaries] = useState<CompanionSummary[]>([]);
  const [recentGroupSessions, setRecentGroupSessions] = useState<RecentGroupSession[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userId) {
      setCompanionSummaries([]);
      setRecentGroupSessions([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        // 1. ユーザーが参加している group_members と、group_id 付きの stamp_events を並列取得
        const [myMembershipsRes, myGroupEventsRes] = await Promise.all([
          supabase
            .from("group_members")
            .select(`
              group_id,
              user_id,
              status,
              joined_at,
              groups (
                id,
                route_id,
                invite_code,
                is_active,
                created_at
              )
            `)
            .eq("user_id", userId)
            .order("joined_at", { ascending: false }),
          supabase
            .from("stamp_events")
            .select("id, user_id, spot_id, route_id, group_id, memo, photo_url, created_at")
            .eq("user_id", userId)
            .not("group_id", "is", null)
            .order("created_at", { ascending: false }),
        ]);

        const myMemberships = myMembershipsRes.data || [];
        const myGroupEvents = myGroupEventsRes.data || [];

        const groupMetaMap: Record<
          string,
          {
            id: string;
            route_id: string;
            invite_code: string;
            is_active: boolean;
            created_at: string;
            joined_at: string;
          }
        > = {};

        myMemberships.forEach((m: any) => {
          const g = Array.isArray(m.groups) ? m.groups[0] : m.groups;
          const gid = m.group_id || g?.id;
          if (!gid) return;
          groupMetaMap[gid] = {
            id: gid,
            route_id: g?.route_id || "",
            invite_code: g?.invite_code || "",
            is_active: Boolean(g?.is_active),
            created_at: g?.created_at || m.joined_at || new Date().toISOString(),
            joined_at: m.joined_at || g?.created_at || new Date().toISOString(),
          };
        });

        // stamp_events 側にのみ存在する group_id があれば groups テーブルから補完
        const eventGroupIds = Array.from(
          new Set<string>(
            myGroupEvents
              .map((ev: any) => ev.group_id)
              .filter((gid: any): gid is string => typeof gid === "string" && gid.length > 0)
          )
        );
        const missingGroupIds = eventGroupIds.filter((gid) => !groupMetaMap[gid]);

        if (missingGroupIds.length > 0) {
          const { data: extraGroups } = await supabase
            .from("groups")
            .select("id, route_id, invite_code, is_active, created_at")
            .in("id", missingGroupIds);

          (extraGroups || []).forEach((g: any) => {
            if (!g?.id) return;
            groupMetaMap[g.id] = {
              id: g.id,
              route_id: g.route_id || "",
              invite_code: g.invite_code || "",
              is_active: Boolean(g.is_active),
              created_at: g.created_at || new Date().toISOString(),
              joined_at: g.created_at || new Date().toISOString(),
            };
          });

          // groups テーブルにレコードが無いデモ用等の group_id もフォールバック登録
          missingGroupIds.forEach((gid) => {
            if (!groupMetaMap[gid]) {
              const sampleEv = myGroupEvents.find((ev: any) => ev.group_id === gid);
              groupMetaMap[gid] = {
                id: gid,
                route_id: sampleEv?.route_id || "",
                invite_code: "",
                is_active: false,
                created_at: sampleEv?.created_at || new Date().toISOString(),
                joined_at: sampleEv?.created_at || new Date().toISOString(),
              };
            }
          });
        }

        const allGroupIds = Object.keys(groupMetaMap);
        if (allGroupIds.length === 0) {
          if (!cancelled) {
            setCompanionSummaries([]);
            setRecentGroupSessions([]);
          }
          return;
        }

        // 2. 全対象グループのメンバー一覧と、グループに紐づく全 stamp_events を取得
        const [allGroupMembersRes, allGroupEventsRes] = await Promise.all([
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
            .in("group_id", allGroupIds)
            .order("joined_at", { ascending: true }),
          supabase
            .from("stamp_events")
            .select("id, user_id, spot_id, route_id, group_id, memo, photo_url, created_at")
            .not("group_id", "is", null)
            .in("group_id", allGroupIds)
            .order("created_at", { ascending: false }),
        ]);

        const rawMembers = allGroupMembersRes.data || [];

        // myGroupEvents と allGroupEvents を id で重複排除して統合
        const mergedEventsMap = new Map<string, any>();
        [...myGroupEvents, ...(allGroupEventsRes.data || [])].forEach((ev: any) => {
          if (ev?.id && !mergedEventsMap.has(ev.id)) {
            mergedEventsMap.set(ev.id, ev);
          }
        });
        const allGroupEvents = Array.from(mergedEventsMap.values());

        // 3. 同行者の user_id を収集し、users テーブルからも直接補完（RLSやリレーション差異への対策）
        const otherUserIds = Array.from(
          new Set<string>([
            ...rawMembers
              .map((m: any) => m.user_id)
              .filter((uid: any): uid is string => Boolean(uid && uid !== userId)),
            ...allGroupEvents
              .map((ev: any) => ev.user_id)
              .filter((uid: any): uid is string => Boolean(uid && uid !== userId)),
          ])
        );

        const usersLookupMap: Record<
          string,
          { id: string; display_name?: string | null; avatar_url?: string | null }
        > = {};

        if (otherUserIds.length > 0) {
          const { data: usersData } = await supabase
            .from("users")
            .select("id, display_name, avatar_url")
            .in("id", otherUserIds);

          (usersData || []).forEach((u: any) => {
            if (u?.id) {
              usersLookupMap[u.id] = u;
            }
          });
        }

        // 4. spots と routes を取得してルート名・スポット紐づきルートIDを解決
        const allSpotIds = Array.from(
          new Set<string>(
            allGroupEvents
              .map((ev: any) => ev.spot_id)
              .filter((sid: any): sid is string => typeof sid === "string" && sid.length > 0)
          )
        );

        const spotRouteMap: Record<string, string> = {};
        if (allSpotIds.length > 0) {
          const { data: spotsData } = await supabase
            .from("spots")
            .select("id, name, route_id")
            .in("id", allSpotIds);

          (spotsData || []).forEach((sp: any) => {
            if (sp?.id && sp?.route_id) {
              spotRouteMap[sp.id] = sp.route_id;
            }
          });
        }

        const allRouteIds = Array.from(
          new Set<string>(
            [
              ...Object.values(groupMetaMap).map((g) => g.route_id),
              ...allGroupEvents.map((ev: any) => ev.route_id || spotRouteMap[ev.spot_id] || ""),
            ].filter((rid): rid is string => typeof rid === "string" && rid.length > 0)
          )
        );

        const routeTitleMap: Record<string, string> = {};
        if (allRouteIds.length > 0) {
          const { data: routesData } = await supabase
            .from("routes")
            .select("id, title")
            .in("id", allRouteIds);

          (routesData || []).forEach((rt: any) => {
            if (rt?.id) {
              routeTitleMap[rt.id] = rt.title || "街歩きのルート";
            }
          });
        }

        // 5. グループごとの同行メンバー解決（parseMemberDisplayName + users テーブル補完）
        const groupPartnersMap: Record<string, InternalPartnerInfo[]> = {};
        const partnerIdxCounter: Record<string, number> = {};

        allGroupIds.forEach((gid) => {
          groupPartnersMap[gid] = [];
          partnerIdxCounter[gid] = 0;
        });

        rawMembers.forEach((m: any) => {
          const gid = m.group_id;
          if (!gid || !groupPartnersMap[gid] || m.user_id === userId) return;

          const relUser = Array.isArray(m.users) ? m.users[0] : m.users;
          const lookedUpUser = usersLookupMap[m.user_id];
          const mergedUser = relUser || lookedUpUser || null;

          const idx = partnerIdxCounter[gid] || 0;
          partnerIdxCounter[gid] = idx + 1;

          const displayName = parseMemberDisplayName(
            {
              ...m,
              users: mergedUser,
            },
            userId,
            idx
          );
          const avatarUrl = mergedUser?.avatar_url || null;

          if (!groupPartnersMap[gid].some((p) => p.userId === m.user_id)) {
            groupPartnersMap[gid].push({
              userId: m.user_id,
              displayName,
              avatarUrl,
            });
          }
        });

        // stamp_events にのみ登場する同行メンバーがいれば補完
        allGroupEvents.forEach((ev: any) => {
          const gid = ev.group_id;
          if (!gid || !groupPartnersMap[gid] || !ev.user_id || ev.user_id === userId) return;
          if (groupPartnersMap[gid].some((p) => p.userId === ev.user_id)) return;

          const lookedUpUser = usersLookupMap[ev.user_id];
          const idx = partnerIdxCounter[gid] || 0;
          partnerIdxCounter[gid] = idx + 1;

          const displayName = parseMemberDisplayName(
            {
              user_id: ev.user_id,
              users: lookedUpUser || null,
            },
            userId,
            idx
          );
          groupPartnersMap[gid].push({
            userId: ev.user_id,
            displayName,
            avatarUrl: lookedUpUser?.avatar_url || null,
          });
        });

        // デモ用固定グループIDのフォールバック（小春）
        const DEMO_GROUP_ID = "99999999-9999-9999-9999-999999999999";
        if (
          groupPartnersMap[DEMO_GROUP_ID] &&
          groupPartnersMap[DEMO_GROUP_ID].length === 0
        ) {
          groupPartnersMap[DEMO_GROUP_ID].push({
            userId: "demo-koharu",
            displayName: "小春",
            avatarUrl: null,
          });
        }

        // 6. グループ単位のイベント整理 & recentGroupSessions の構築
        const eventsByGroupMap: Record<string, any[]> = {};
        allGroupIds.forEach((gid) => {
          eventsByGroupMap[gid] = [];
        });
        allGroupEvents.forEach((ev: any) => {
          if (ev.group_id && eventsByGroupMap[ev.group_id]) {
            eventsByGroupMap[ev.group_id].push(ev);
          }
        });

        const sessions: RecentGroupSession[] = allGroupIds.map((gid) => {
          const meta = groupMetaMap[gid];
          const groupEvents = eventsByGroupMap[gid] || [];
          const partners = groupPartnersMap[gid] || [];

          const resolvedRouteId =
            meta.route_id ||
            groupEvents.map((e: any) => e.route_id || spotRouteMap[e.spot_id] || "").find(Boolean) ||
            "";
          const routeTitle =
            (resolvedRouteId && routeTitleMap[resolvedRouteId]) || "街歩きのルート";

          const myEvents = groupEvents.filter((e: any) => e.user_id === userId);
          const myUniqueSpots = new Set(
            myEvents.map((e: any) => e.spot_id || e.id).filter(Boolean)
          );
          const myStampedCount = myUniqueSpots.size;

          const sharedMemoriesCount = groupEvents.filter((e: any) => {
            const hasPhoto = Boolean(e.photo_url && String(e.photo_url).trim());
            const hasMemo = Boolean(e.memo && String(e.memo).trim());
            return hasPhoto || hasMemo;
          }).length;

          const latestEventAt = groupEvents.reduce<string>((latest, e: any) => {
            if (!e?.created_at) return latest;
            if (!latest) return e.created_at;
            return new Date(e.created_at).getTime() > new Date(latest).getTime()
              ? e.created_at
              : latest;
          }, "");

          const walkedAt = latestEventAt || meta.joined_at || meta.created_at;

          return {
            groupId: gid,
            routeId: resolvedRouteId,
            routeTitle,
            inviteCode: meta.invite_code || "",
            partnerNames: Array.from(new Set(partners.map((p) => p.displayName).filter(Boolean))),
            myStampedCount,
            sharedMemoriesCount,
            walkedAt,
            isActive: Boolean(meta.is_active),
          };
        });

        sessions.sort(
          (a, b) => new Date(b.walkedAt).getTime() - new Date(a.walkedAt).getTime()
        );
        const recentSessionsSliced = sessions.slice(0, 6);

        // 7. 同行者ごとの集計（companionSummaries）を構築
        const companionAggMap = new Map<
          string,
          {
            companionName: string;
            avatarUrl: string | null;
            sharedStampKeys: Set<string>;
            routeKeySet: Set<string>;
            routeTitlesSet: Set<string>;
            latestWalkedAt: string;
          }
        >();

        allGroupIds.forEach((gid) => {
          const partners = groupPartnersMap[gid] || [];
          if (partners.length === 0) return;

          const meta = groupMetaMap[gid];
          const groupEvents = eventsByGroupMap[gid] || [];
          const resolvedRouteId =
            meta.route_id ||
            groupEvents.map((e: any) => e.route_id || spotRouteMap[e.spot_id] || "").find(Boolean) ||
            "";
          const routeTitle =
            resolvedRouteId && routeTitleMap[resolvedRouteId]
              ? routeTitleMap[resolvedRouteId]
              : "";

          const myEventsInGroup = groupEvents.filter((e: any) => e.user_id === userId);
          const effectiveStampEvents =
            myEventsInGroup.length > 0 ? myEventsInGroup : groupEvents;

          const latestEventAt = groupEvents.reduce<string>((latest, e: any) => {
            if (!e?.created_at) return latest;
            if (!latest) return e.created_at;
            return new Date(e.created_at).getTime() > new Date(latest).getTime()
              ? e.created_at
              : latest;
          }, "");
          const groupWalkedAt = latestEventAt || meta.joined_at || meta.created_at;

          partners.forEach((partner) => {
            const nameKey = partner.displayName.trim();
            if (!nameKey) return;

            let entry = companionAggMap.get(nameKey);
            if (!entry) {
              entry = {
                companionName: nameKey,
                avatarUrl: partner.avatarUrl || null,
                sharedStampKeys: new Set<string>(),
                routeKeySet: new Set<string>(),
                routeTitlesSet: new Set<string>(),
                latestWalkedAt: groupWalkedAt,
              };
              companionAggMap.set(nameKey, entry);
            } else {
              if (!entry.avatarUrl && partner.avatarUrl) {
                entry.avatarUrl = partner.avatarUrl;
              }
              if (
                groupWalkedAt &&
                (!entry.latestWalkedAt ||
                  new Date(groupWalkedAt).getTime() >
                    new Date(entry.latestWalkedAt).getTime())
              ) {
                entry.latestWalkedAt = groupWalkedAt;
              }
            }

            effectiveStampEvents.forEach((ev: any) => {
              const stampKey = ev.id || `${gid}_${ev.spot_id}_${ev.created_at}`;
              entry!.sharedStampKeys.add(stampKey);
              const evRouteId = ev.route_id || spotRouteMap[ev.spot_id] || resolvedRouteId;
              if (evRouteId) {
                entry!.routeKeySet.add(evRouteId);
                if (routeTitleMap[evRouteId]) {
                  entry!.routeTitlesSet.add(routeTitleMap[evRouteId]);
                }
              }
            });

            if (resolvedRouteId) {
              entry.routeKeySet.add(resolvedRouteId);
            }
            if (routeTitle) {
              entry.routeTitlesSet.add(routeTitle);
            }
          });
        });

        const summaries: CompanionSummary[] = Array.from(companionAggMap.values())
          .map((item) => {
            const routeTitles = Array.from(item.routeTitlesSet);
            const routesCount = Math.max(item.routeKeySet.size, routeTitles.length);
            return {
              companionName: item.companionName,
              avatarUrl: item.avatarUrl,
              sharedStampsCount: item.sharedStampKeys.size,
              routesCount,
              latestWalkedAt: item.latestWalkedAt,
              routeTitles,
            };
          })
          .sort((a, b) => {
            if (b.sharedStampsCount !== a.sharedStampsCount) {
              return b.sharedStampsCount - a.sharedStampsCount;
            }
            return (
              new Date(b.latestWalkedAt).getTime() -
              new Date(a.latestWalkedAt).getTime()
            );
          });

        if (!cancelled) {
          setCompanionSummaries(summaries);
          setRecentGroupSessions(recentSessionsSliced);
        }
      } catch (err) {
        console.error("Failed to fetch companion archive:", err);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return {
    companionSummaries,
    recentGroupSessions,
    loading,
  };
}
