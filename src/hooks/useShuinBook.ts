"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { isRouteCurrentlyActive } from "@/utils/userRoutes";
import {
  normalizeLocalImageUrl,
  parseMemberDisplayName,
  uploadStampPhotoWithFallback,
} from "@/utils/stampMedia";

export type ShuinViewMode = "grid" | "album";
export type ShuinLifeFilter = "all" | "tsuredachi" | "with_memory" | "revisit";

export interface ShuinDiaryEvent {
  id: string;
  created_at: string;
  visitor_number: number | null;
  spot_id: string;
  route_id: string;
  memo: string | null;
  photo_url: string | null;
  group_id: string | null;
  spotName: string;
  spotAddress: string;
  spotCity: string;
  spotPrefecture: string;
  spotAreaLabel: string;
  spotFragment: string;
  spotFullStory: string;
  routeName: string;
  category?: string;
  hasPhoto: boolean;
  hasMemory: boolean;
  yearMonth: string;
  visitOrder: number;
  totalVisitsToSpot: number;
  isRevisit: boolean;
  companionNames: string[];
  sharedPhotoUrl: string | null;
  sharedMemoText: string | null;
}

export interface ShuinGroupInfo {
  members: string[];
  sharedPhoto: string | null;
  sharedMemo: string | null;
  photoUploaderName: string;
  companionMemories: Array<{
    userId: string;
    displayName: string;
    photoUrl: string | null;
    memo: string | null;
  }>;
  loading: boolean;
}

export interface ShuinFilterSummary {
  totalStamps: number;
  uniqueCities: string[];
  uniqueRoutes: Array<{
    id: string;
    title: string;
    count: number;
    storyIntro?: string;
  }>;
  companionsList: string[];
  photosCount: number;
  memosCount: number;
}

/**
 * 住所文字列から市区町村名を簡易抽出するフォールバック
 */
function extractCityFromAddress(address?: string | null, prefecture?: string | null): string {
  if (!address) return "";
  let cleaned = address.trim();
  if (prefecture && cleaned.startsWith(prefecture)) {
    cleaned = cleaned.slice(prefecture.length).trim();
  } else {
    cleaned = cleaned.replace(/^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)/, "");
  }
  const match = cleaned.match(/^(.+?[市区町村郡])/);
  return match ? match[1] : "";
}

function readLocalMemo(eventId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const val = window.localStorage.getItem(`shuin_memo_${eventId}`);
    return val !== null ? val : null;
  } catch {
    return null;
  }
}

function writeLocalMemo(eventId: string, memo: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (memo && memo.trim()) {
      window.localStorage.setItem(`shuin_memo_${eventId}`, memo.trim());
    } else {
      window.localStorage.removeItem(`shuin_memo_${eventId}`);
    }
  } catch {
    // ignore storage error
  }
}

export function useShuinBook(user: any) {
  const [diary, setDiary] = useState<ShuinDiaryEvent[]>([]);
  const [diaryLoading, setDiaryLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("すべて");
  const [selectedCity, setSelectedCity] = useState<string>("すべて");
  const [selectedCompanion, setSelectedCompanion] = useState<string>("すべて");
  const [selectedRouteId, setSelectedRouteId] = useState<string>("すべて");
  const [lifeFilter, setLifeFilter] = useState<ShuinLifeFilter>("all");
  const [viewMode, setViewMode] = useState<ShuinViewMode>("grid");
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ShuinDiaryEvent | null>(null);
  const [completedRoutes, setCompletedRoutes] = useState<any[]>([]);
  const [participatedRoutes, setParticipatedRoutes] = useState<any[]>([]);
  const [showParticipatedModal, setShowParticipatedModal] = useState(false);
  const [zoomPhotoUrl, setZoomPhotoUrl] = useState<string | null>(null);
  const [groupInfo, setGroupInfo] = useState<ShuinGroupInfo | null>(null);

  // URLクエリパラメータ（?companion= / ?routeId= / ?view=）からの初期状態復元
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const compParam = params.get("companion");
      const routeParam = params.get("routeId");
      const viewParam = params.get("view");
      if (compParam && compParam.trim()) {
        setSelectedCompanion(compParam.trim());
      }
      if (routeParam && routeParam.trim()) {
        setSelectedRouteId(routeParam.trim());
      }
      if (viewParam === "album" || viewParam === "grid") {
        setViewMode(viewParam);
      }
    } catch {
      // ignore URL parse error
    }
  }, []);

  // 連れ立ち（グループ）詳細情報のフェッチ（モーダル選択時）
  useEffect(() => {
    if (!selectedEvent || !selectedEvent.group_id) {
      setGroupInfo(null);
      return;
    }

    let cancelled = false;
    (async () => {
      setGroupInfo({
        members: selectedEvent.companionNames || [],
        sharedPhoto: selectedEvent.sharedPhotoUrl || selectedEvent.photo_url || null,
        sharedMemo: selectedEvent.sharedMemoText || selectedEvent.memo || null,
        photoUploaderName: "",
        companionMemories: [],
        loading: true,
      });

      try {
        const { data: membersData, error: membersError } = await supabase
          .from("group_members")
          .select("user_id, status, users(id, display_name)")
          .eq("group_id", selectedEvent.group_id);

        const membersList: string[] = [];
        const memberNameByUserId: Record<string, string> = {};
        const partnerUserIds: string[] = [];

        if (!membersError && membersData && membersData.length > 0) {
          let partnerIdx = 0;
          membersData.forEach((m: any) => {
            if (m.user_id !== user?.id) {
              const name = parseMemberDisplayName(m, user?.id, partnerIdx++);
              memberNameByUserId[m.user_id] = name;
              partnerUserIds.push(m.user_id);
              if (name && !membersList.includes(name)) {
                membersList.push(name);
              }
            }
          });
        }

        if (
          membersList.length === 0 &&
          selectedEvent.group_id === "99999999-9999-9999-9999-999999999999"
        ) {
          membersList.push("小春");
        }

        // group_id 一致分 ＋ 同行メンバーがこのスポットで刻んだ stamp_events 全件を取得（写真なしコメントも含める）
        const queries: Promise<any>[] = [
          Promise.resolve(
            supabase
              .from("stamp_events")
              .select("id, photo_url, memo, user_id, created_at")
              .eq("group_id", selectedEvent.group_id)
              .eq("spot_id", selectedEvent.spot_id)
              .order("created_at", { ascending: false })
          ),
        ];
        if (partnerUserIds.length > 0) {
          queries.push(
            Promise.resolve(
              supabase
                .from("stamp_events")
                .select("id, photo_url, memo, user_id, created_at")
                .eq("spot_id", selectedEvent.spot_id)
                .in("user_id", partnerUserIds)
                .order("created_at", { ascending: false })
            )
          );
        }

        const results = await Promise.all(queries);
        const mergedEvents: any[] = [];
        const seenEvIds = new Set<string>();
        results.forEach((res) => {
          (res.data || []).forEach((ev: any) => {
            if (ev?.id && !seenEvIds.has(ev.id)) {
              seenEvIds.add(ev.id);
              mergedEvents.push(ev);
            }
          });
        });

        let sharedPhoto = selectedEvent.photo_url || null;
        let sharedMemo = selectedEvent.memo || null;
        let photoUploaderName = "";
        const companionMemoryMap = new Map<
          string,
          { userId: string; displayName: string; photoUrl: string | null; memo: string | null }
        >();

        for (const ev of mergedEvents) {
          if (ev.user_id === user?.id) continue;
          const displayName = memberNameByUserId[ev.user_id] || membersList[0] || "同行の友だち";
          const existing = companionMemoryMap.get(ev.user_id);
          const photoUrl = normalizeLocalImageUrl(ev.photo_url);
          const memo = ev.memo && String(ev.memo).trim() ? String(ev.memo).trim() : null;

          if (!existing) {
            companionMemoryMap.set(ev.user_id, {
              userId: ev.user_id,
              displayName,
              photoUrl,
              memo,
            });
          } else {
            if (!existing.photoUrl && photoUrl) existing.photoUrl = photoUrl;
            if (!existing.memo && memo) existing.memo = memo;
          }

          if (!sharedPhoto && photoUrl) {
            sharedPhoto = photoUrl;
            photoUploaderName = displayName;
          }
          if (!sharedMemo && memo) {
            sharedMemo = memo;
          }
        }

        if (!cancelled) {
          setGroupInfo({
            members: membersList,
            sharedPhoto,
            sharedMemo,
            photoUploaderName,
            companionMemories: Array.from(companionMemoryMap.values()),
            loading: false,
          });
        }
      } catch (err) {
        console.error("Failed to load group info", err);
        if (!cancelled) {
          setGroupInfo((prev) => (prev ? { ...prev, loading: false } : null));
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedEvent, user]);

  // メインのSHUIN帳データ取得
  const fetchShuinBook = useCallback(async () => {
    if (!user) return;
    setDiaryLoading(true);
    try {
      const { data: evs, error } = await supabase
        .from("stamp_events")
        .select("id, created_at, visitor_number, spot_id, route_id, memo, photo_url, group_id")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("diary fetch error", error);
        return;
      }

      const events = evs || [];
      const spotIds = [...new Set(events.map((e: any) => e.spot_id).filter(Boolean))];
      const routeIds = [...new Set(events.map((e: any) => e.route_id).filter(Boolean))];

      const spotDetailMap: Record<
        string,
        {
          name: string;
          address: string;
          city: string;
          prefecture: string;
          f7_fragment: string;
          f7_full: string;
          route_id?: string;
        }
      > = {};
      const routeMap: Record<
        string,
        { title: string; category?: string; prefecture?: string; description?: string }
      > = {};

      if (spotIds.length) {
        const { data: sp } = await supabase
          .from("spots")
          .select("*")
          .in("id", spotIds);

        (sp || []).forEach((x: any) => {
          spotDetailMap[x.id] = {
            name: x.name || "スポット",
            address: x.address || "",
            city: x.city || extractCityFromAddress(x.address, x.prefecture) || "",
            prefecture: x.prefecture || "",
            f7_fragment: x.f7_fragment || "",
            f7_full: x.f7_full || "",
            route_id: x.route_id,
          };
          if (x.route_id && !routeIds.includes(x.route_id)) {
            routeIds.push(x.route_id);
          }
        });
      }

      if (routeIds.length) {
        const { data: rt } = await supabase
          .from("routes")
          .select("id, title, category, prefecture, description")
          .in("id", routeIds);

        (rt || []).forEach((x: any) => {
          routeMap[x.id] = {
            title: x.title,
            category: x.category,
            prefecture: x.prefecture,
            description: x.description || "",
          };
        });
      }

      // 各グループのメンバーと共有写真・メモを一括解決（URLからgroupIdが欠落して押印されたケースもルート単位で補完）
      const { data: myGroupRows } = await supabase
        .from("group_members")
        .select("group_id, groups(id, route_id, is_active)")
        .eq("user_id", user.id);

      const routeToGroupIdMap: Record<string, string> = {};
      (myGroupRows || []).forEach((row: any) => {
        const g = Array.isArray(row.groups) ? row.groups[0] : row.groups;
        if (g?.id && g?.route_id) {
          routeToGroupIdMap[g.route_id] = g.id;
        }
      });

      const groupIds = [
        ...new Set([
          ...events.map((e: any) => e.group_id).filter(Boolean),
          ...Object.values(routeToGroupIdMap),
        ]),
      ];
      const sharedPhotoKeys = new Set<string>(); // "groupId-spotId"
      const sharedEventMap: Record<string, { photo_url: string | null; memo: string | null }> = {};
      const groupCompanionNamesMap: Record<string, string[]> = {};

      if (groupIds.length) {
        const [sharedPhotosRes, groupMembersRes] = await Promise.all([
          supabase
            .from("stamp_events")
            .select("group_id, spot_id, user_id, photo_url, memo, created_at")
            .in("group_id", groupIds)
            .order("created_at", { ascending: false }),
          supabase
            .from("group_members")
            .select("group_id, user_id, status, users(id, display_name)")
            .in("group_id", groupIds),
        ]);

        const partnerUserIds = new Set<string>();
        const userToGroupIds: Record<string, string[]> = {};
        const idxCounter: Record<string, number> = {};

        (groupMembersRes.data || []).forEach((gm: any) => {
          if (!groupCompanionNamesMap[gm.group_id]) {
            groupCompanionNamesMap[gm.group_id] = [];
          }
          if (gm.user_id !== user.id) {
            partnerUserIds.add(gm.user_id);
            if (!userToGroupIds[gm.user_id]) userToGroupIds[gm.user_id] = [];
            userToGroupIds[gm.user_id].push(gm.group_id);

            const cIdx = idxCounter[gm.group_id] || 0;
            idxCounter[gm.group_id] = cIdx + 1;
            const name = parseMemberDisplayName(gm, user.id, cIdx);
            if (name && !groupCompanionNamesMap[gm.group_id].includes(name)) {
              groupCompanionNamesMap[gm.group_id].push(name);
            }
          }
        });

        let partnerSpotEvents: any[] = [];
        if (partnerUserIds.size > 0 && spotIds.length > 0) {
          const { data: pse } = await supabase
            .from("stamp_events")
            .select("group_id, spot_id, user_id, photo_url, memo, created_at")
            .in("user_id", Array.from(partnerUserIds))
            .in("spot_id", spotIds)
            .order("created_at", { ascending: false });
          if (pse) partnerSpotEvents = pse;
        }

        const allSharedCandidates = [...(sharedPhotosRes.data || []), ...partnerSpotEvents];
        allSharedCandidates.forEach((sp: any) => {
          const candidateGroupIds = sp.group_id
            ? [sp.group_id]
            : userToGroupIds[sp.user_id] || [];
          const normalizedSpPhoto = normalizeLocalImageUrl(sp.photo_url);
          candidateGroupIds.forEach((gid: string) => {
            const key = `${gid}-${sp.spot_id}`;
            if (normalizedSpPhoto) {
              sharedPhotoKeys.add(key);
            }
            if (!sharedEventMap[key]) {
              sharedEventMap[key] = {
                photo_url: normalizedSpPhoto,
                memo: sp.memo || null,
              };
            } else {
              if (!sharedEventMap[key].photo_url && normalizedSpPhoto) {
                sharedEventMap[key].photo_url = normalizedSpPhoto;
              }
              if (!sharedEventMap[key].memo && sp.memo) {
                sharedEventMap[key].memo = sp.memo;
              }
            }
          });
        });

        if (
          groupIds.includes("99999999-9999-9999-9999-999999999999") &&
          (!groupCompanionNamesMap["99999999-9999-9999-9999-999999999999"] ||
            groupCompanionNamesMap["99999999-9999-9999-9999-999999999999"].length === 0)
        ) {
          groupCompanionNamesMap["99999999-9999-9999-9999-999999999999"] = ["小春"];
        }
      }

      // 参加履歴のあるルート全件と「ルートの踏破印（メイン＋サブ）」を取得
      const [urAllRes, routeBadgeRes, userStampsRes] = await Promise.all([
        supabase
          .from("user_routes")
          .select("id, route_id, joined_at, completed_at, updated_at, status")
          .eq("user_id", user.id)
          .order("joined_at", { ascending: false }),
        supabase
          .from("badge_assignments")
          .select("acquired_at, badges(id, code, category, name_ja, subtitle_en, description, rarity, route_id)")
          .eq("user_id", user.id)
          .order("acquired_at", { ascending: false }),
        supabase
          .from("stamps")
          .select("spot_id, route_id, acquired_at")
          .eq("user_id", user.id),
      ]);

      const allUrList = urAllRes.data || [];
      const urList = allUrList.filter((u: any) => u.status === "COMPLETED" || Boolean(u.completed_at));
      const userStampsList = userStampsRes.data || [];
      const assignedRouteBadges = (routeBadgeRes.data || [])
        .map((a: any) => (a.badges ? { ...a.badges, acquired_at: a.acquired_at } : null))
        .filter((b: any) => b && (b.category === "route" || b.category === "quiz") && b.route_id);

      const completedRouteIdSet = new Set<string>([
        ...urList.map((u: any) => u.route_id).filter(Boolean),
        ...assignedRouteBadges.map((b: any) => b.route_id).filter(Boolean),
      ]);

      const participatedRouteIdSet = new Set<string>([
        ...allUrList.map((u: any) => u.route_id).filter(Boolean),
        ...events.map((e: any) => e.route_id).filter(Boolean),
        ...userStampsList.map((s: any) => s.route_id).filter(Boolean),
        ...assignedRouteBadges.map((b: any) => b.route_id).filter(Boolean),
      ]);

      const extraRouteIds = [...participatedRouteIdSet].filter((rid) => !routeMap[rid]);
      if (extraRouteIds.length > 0) {
        const { data: extraRt } = await supabase
          .from("routes")
          .select("id, title, category, prefecture, description")
          .in("id", extraRouteIds);
        (extraRt || []).forEach((x: any) => {
          routeMap[x.id] = {
            title: x.title,
            category: x.category,
            prefecture: x.prefecture,
            description: x.description || "",
          };
        });
      }

      // 参加ルートの総スポット数を取得
      const routeTotalSpotCountMap: Record<string, number> = {};
      if (participatedRouteIdSet.size > 0) {
        const { data: allRouteSpots } = await supabase
          .from("spots")
          .select("id, route_id")
          .in("route_id", [...participatedRouteIdSet]);
        (allRouteSpots || []).forEach((sp: any) => {
          if (sp.route_id) {
            routeTotalSpotCountMap[sp.route_id] = (routeTotalSpotCountMap[sp.route_id] || 0) + 1;
          }
        });
      }

      // 各完走ルートのマスター踏破印（category='route'）も補完取得
      const masterRouteBadgeMap: Record<string, any> = {};
      if (completedRouteIdSet.size > 0) {
        const { data: mbs } = await supabase
          .from("badges")
          .select("*")
          .in("route_id", [...completedRouteIdSet])
          .eq("category", "route");
        (mbs || []).forEach((mb: any) => {
          if (mb.route_id) masterRouteBadgeMap[mb.route_id] = mb;
        });
      }

      const completedItems = [...completedRouteIdSet].map((rid) => {
        const ur = urList.find((u: any) => u.route_id === rid);
        const mainB =
          assignedRouteBadges.find((b: any) => b.route_id === rid && b.category === "route") ||
          masterRouteBadgeMap[rid] ||
          null;
        const subB = assignedRouteBadges.find((b: any) => b.route_id === rid && b.category === "quiz") || null;
        const completedAt = ur?.completed_at || subB?.acquired_at || mainB?.acquired_at || new Date().toISOString();
        const d = new Date(completedAt);
        const yearMonth = `${d.getFullYear()}年${d.getMonth() + 1}月`;
        const rTitle = routeMap[rid]?.title || "ルート";
        return {
          id: ur?.id || `route-shuin-${rid}`,
          route_id: rid,
          routeTitle: rTitle,
          completed_at: completedAt,
          yearMonth,
          mainName: mainB?.name_ja || `${rTitle}の巡礼者`,
          mainSubtitle: mainB?.subtitle_en || "",
          subName: subB?.name_ja || null,
          subDescription: subB?.description || null,
        };
      });

      setCompletedRoutes(completedItems);

      // 参加したルート一覧の構築
      const participatedItems = [...participatedRouteIdSet].map((rid) => {
        const ur = allUrList.find((u: any) => u.route_id === rid);
        const routeEvs = events.filter((e: any) => e.route_id === rid);
        const routeSts = userStampsList.filter((s: any) => s.route_id === rid);
        const uniqueSpotIds = new Set<string>([
          ...routeEvs.map((e: any) => e.spot_id).filter(Boolean),
          ...routeSts.map((s: any) => s.spot_id).filter(Boolean),
        ]);
        const stampedSpotsCount = uniqueSpotIds.size;
        const totalSpots = routeTotalSpotCountMap[rid] || 0;

        const candidateDates = [
          ur?.joined_at,
          ur?.completed_at,
          ur?.updated_at,
          ...routeEvs.map((e: any) => e.created_at),
          ...routeSts.map((s: any) => s.acquired_at),
          ...assignedRouteBadges.filter((b: any) => b.route_id === rid).map((b: any) => b.acquired_at),
        ].filter(Boolean);

        const latestTimestampMs = candidateDates.reduce((maxMs, iso) => {
          const t = new Date(iso).getTime();
          return !Number.isNaN(t) && t > maxMs ? t : maxMs;
        }, 0);

        const latestActivityAt =
          latestTimestampMs > 0 ? new Date(latestTimestampMs).toISOString() : new Date().toISOString();
        const isActive = isRouteCurrentlyActive(ur);
        const isCompleted =
          ur?.status === "COMPLETED" ||
          Boolean(ur?.completed_at) ||
          completedRouteIdSet.has(rid) ||
          (totalSpots > 0 && stampedSpotsCount >= totalSpots);

        return {
          route_id: rid,
          routeTitle: routeMap[rid]?.title || "ルート",
          category: routeMap[rid]?.category,
          prefecture: routeMap[rid]?.prefecture,
          storyIntro: routeMap[rid]?.description || "",
          stampedSpotsCount,
          totalSpots,
          latestActivityAt,
          latestTimestampMs,
          isActive,
          isCompleted,
        };
      });

      participatedItems.sort((a, b) => b.latestTimestampMs - a.latestTimestampMs);
      setParticipatedRoutes(participatedItems);

      // スポットごとの通算訪問回数・何回目の訪問かを計算（古い順にソートしてカウント）
      const chronological = [...events].sort(
        (a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      const spotCountTracker: Record<string, number> = {};
      const visitOrderById: Record<string, number> = {};
      chronological.forEach((ev: any) => {
        if (!ev.spot_id) return;
        spotCountTracker[ev.spot_id] = (spotCountTracker[ev.spot_id] || 0) + 1;
        visitOrderById[ev.id] = spotCountTracker[ev.spot_id];
      });

      const enrichedDiary: ShuinDiaryEvent[] = events.map((e: any) => {
        const d = new Date(e.created_at);
        const yearMonth = `${d.getFullYear()}年${d.getMonth() + 1}月`;
        const spInfo = spotDetailMap[e.spot_id] || {
          name: "スポット",
          address: "",
          city: "",
          prefecture: "",
          f7_fragment: "",
          f7_full: "",
        };
        const resolvedRouteId = e.route_id || spInfo.route_id || "";
        const rInfo = routeMap[resolvedRouteId] || { title: "ルート" };

        const resolvedGroupId = e.group_id || routeToGroupIdMap[resolvedRouteId] || null;
        const groupSpotKey = resolvedGroupId ? `${resolvedGroupId}-${e.spot_id}` : "";
        const sharedInfo = groupSpotKey ? sharedEventMap[groupSpotKey] : undefined;
        const localSavedMemo = readLocalMemo(e.id);
        const effectiveMemo = localSavedMemo !== null ? localSavedMemo : e.memo || null;

        const normalizedEventPhoto = normalizeLocalImageUrl(e.photo_url);
        const hasPhoto = Boolean(
          normalizedEventPhoto || (groupSpotKey && sharedPhotoKeys.has(groupSpotKey))
        );
        const hasMemory = Boolean(
          hasPhoto || effectiveMemo || (sharedInfo && sharedInfo.memo)
        );

        const visitOrder = visitOrderById[e.id] || 1;
        const totalVisitsToSpot = spotCountTracker[e.spot_id] || 1;
        const isRevisit = visitOrder >= 2 || totalVisitsToSpot >= 2;

        const spotCity = spInfo.city || "";
        const spotPrefecture = spInfo.prefecture || rInfo.prefecture || "";
        const spotAreaLabel = spotCity || spotPrefecture || "";

        return {
          ...e,
          route_id: resolvedRouteId,
          spotName: spInfo.name,
          spotAddress: spInfo.address,
          spotCity,
          spotPrefecture,
          spotAreaLabel,
          spotFragment: spInfo.f7_fragment,
          spotFullStory: spInfo.f7_full,
          routeName: rInfo.title,
          category: rInfo.category,
          memo: effectiveMemo,
          photo_url: normalizedEventPhoto,
          group_id: resolvedGroupId,
          hasPhoto,
          hasMemory,
          yearMonth,
          visitOrder,
          totalVisitsToSpot,
          isRevisit,
          companionNames: resolvedGroupId ? groupCompanionNamesMap[resolvedGroupId] || [] : [],
          sharedPhotoUrl: sharedInfo?.photo_url || normalizedEventPhoto,
          sharedMemoText: effectiveMemo || sharedInfo?.memo || null,
        };
      });

      setDiary(enrichedDiary);
    } catch (e) {
      console.error("Failed to load diary", e);
    } finally {
      setDiaryLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchShuinBook();
  }, [fetchShuinBook]);

  // 思い出のあとがき（一言メモ）の保存・更新
  const updateEventMemo = useCallback(
    async (eventId: string, newMemo: string): Promise<boolean> => {
      if (!user || !eventId) return false;
      const trimmed = newMemo.trim();
      const nextMemo = trimmed.length > 0 ? trimmed : null;

      // ローカルストレージにもフォールバック保存
      writeLocalMemo(eventId, nextMemo);

      try {
        const { error } = await supabase
          .from("stamp_events")
          .update({ memo: nextMemo })
          .eq("id", eventId)
          .eq("user_id", user.id);

        if (error) {
          console.warn("Supabase stamp_events memo update warning (saved locally):", error.message);
        }
      } catch (err) {
        console.warn("Failed to update stamp_events memo on remote, using local fallback:", err);
      }

      setDiary((prev) =>
        prev.map((item) => {
          if (item.id !== eventId) return item;
          const nextSharedMemo = nextMemo || item.sharedMemoText || null;
          return {
            ...item,
            memo: nextMemo,
            sharedMemoText: nextSharedMemo,
            hasMemory: Boolean(item.hasPhoto || nextMemo || nextSharedMemo),
          };
        })
      );

      setSelectedEvent((prev) => {
        if (!prev || prev.id !== eventId) return prev;
        const nextSharedMemo = nextMemo || prev.sharedMemoText || null;
        return {
          ...prev,
          memo: nextMemo,
          sharedMemoText: nextSharedMemo,
          hasMemory: Boolean(prev.hasPhoto || nextMemo || nextSharedMemo),
        };
      });

      setGroupInfo((prev) =>
        prev
          ? {
              ...prev,
              sharedMemo: nextMemo || prev.sharedMemo,
            }
          : null
      );

      return true;
    },
    [user]
  );

  // 思い出写真の追加・更新（SHUIN帳からいつでも印に写真を登録できるようにする）
  const updateEventPhoto = useCallback(
    async (eventId: string, spotId: string, file: File): Promise<string | null> => {
      if (!user || !eventId || !file) return null;
      const uploadedUrl = await uploadStampPhotoWithFallback(supabase, user.id, spotId, file);

      const { error } = await supabase
        .from("stamp_events")
        .update({ photo_url: uploadedUrl })
        .eq("id", eventId)
        .eq("user_id", user.id);

      if (error) {
        throw error;
      }

      setDiary((prev) =>
        prev.map((item) =>
          item.id === eventId
            ? {
                ...item,
                photo_url: uploadedUrl,
                sharedPhotoUrl: uploadedUrl,
                hasPhoto: true,
                hasMemory: true,
              }
            : item
        )
      );

      setSelectedEvent((prev) =>
        prev && prev.id === eventId
          ? {
              ...prev,
              photo_url: uploadedUrl,
              sharedPhotoUrl: uploadedUrl,
              hasPhoto: true,
              hasMemory: true,
            }
          : prev
      );

      return uploadedUrl;
    },
    [user]
  );

  // 年月リスト（重複排除）
  const months = useMemo(
    () => ["すべて", ...new Set(diary.map((d) => d.yearMonth))],
    [diary]
  );

  // 訪れた街（市区郡・都道府県）リスト
  const visitedCities = useMemo(() => {
    const citySet = new Set<string>();
    diary.forEach((d) => {
      if (d.spotAreaLabel) {
        citySet.add(d.spotAreaLabel);
      }
    });
    return ["すべて", ...Array.from(citySet)];
  }, [diary]);

  // 一緒に歩いた同行者リスト（出現頻度順・重複排除）
  const companions = useMemo(() => {
    const freqMap = new Map<string, number>();
    diary.forEach((d) => {
      (d.companionNames || []).forEach((name) => {
        const cleaned = name.trim();
        if (cleaned) {
          freqMap.set(cleaned, (freqMap.get(cleaned) || 0) + 1);
        }
      });
    });
    return Array.from(freqMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name);
  }, [diary]);

  // 押印記録があるルート一覧（ルート別フィルターおよびストーリー絵巻用）
  const diaryRoutes = useMemo(() => {
    const map = new Map<
      string,
      {
        id: string;
        title: string;
        count: number;
        category?: string;
        prefecture?: string;
        storyIntro?: string;
      }
    >();
    const prMap = new Map<string, any>();
    participatedRoutes.forEach((pr) => {
      if (pr?.route_id) prMap.set(pr.route_id, pr);
    });

    diary.forEach((d) => {
      if (!d.route_id) return;
      const pr = prMap.get(d.route_id);
      const existing = map.get(d.route_id);
      if (!existing) {
        map.set(d.route_id, {
          id: d.route_id,
          title: d.routeName || pr?.routeTitle || "ルート",
          count: 1,
          category: d.category || pr?.category,
          prefecture: d.spotPrefecture || pr?.prefecture,
          storyIntro: pr?.storyIntro || "",
        });
      } else {
        existing.count += 1;
      }
    });

    return Array.from(map.values());
  }, [diary, participatedRoutes]);

  // 選択されたキーワード・年月・街・同行者・ルート・ライフログ条件でのフィルタリング
  const filteredDiary = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return diary.filter((d) => {
      if (q) {
        const haystacks = [
          d.spotName,
          d.spotAreaLabel,
          d.spotAddress,
          d.routeName,
          d.memo || "",
          d.sharedMemoText || "",
          ...(d.companionNames || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystacks.includes(q)) {
          return false;
        }
      }
      if (selectedMonth !== "すべて" && d.yearMonth !== selectedMonth) {
        return false;
      }
      if (selectedCity !== "すべて" && d.spotAreaLabel !== selectedCity) {
        return false;
      }
      if (
        selectedCompanion !== "すべて" &&
        !(d.companionNames || []).includes(selectedCompanion)
      ) {
        return false;
      }
      if (selectedRouteId !== "すべて" && d.route_id !== selectedRouteId) {
        return false;
      }
      if (lifeFilter === "tsuredachi" && !d.group_id) {
        return false;
      }
      if (lifeFilter === "with_memory" && !d.hasMemory) {
        return false;
      }
      if (lifeFilter === "revisit" && !d.isRevisit) {
        return false;
      }
      return true;
    });
  }, [
    diary,
    searchQuery,
    selectedMonth,
    selectedCity,
    selectedCompanion,
    selectedRouteId,
    lifeFilter,
  ]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim().length > 0) count += 1;
    if (selectedMonth !== "すべて") count += 1;
    if (selectedCity !== "すべて") count += 1;
    if (selectedCompanion !== "すべて") count += 1;
    if (selectedRouteId !== "すべて") count += 1;
    if (lifeFilter !== "all") count += 1;
    return count;
  }, [
    searchQuery,
    selectedMonth,
    selectedCity,
    selectedCompanion,
    selectedRouteId,
    lifeFilter,
  ]);

  const resetAllFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedMonth("すべて");
    setSelectedCity("すべて");
    setSelectedCompanion("すべて");
    setSelectedRouteId("すべて");
    setLifeFilter("all");
  }, []);

  // 現在の絞り込み条件に対する月間・旅路の紀行サマリー
  const currentFilterSummary = useMemo<ShuinFilterSummary>(() => {
    const citySet = new Set<string>();
    const compSet = new Set<string>();
    const routeCountMap = new Map<
      string,
      { id: string; title: string; count: number; storyIntro?: string }
    >();
    let photosCount = 0;
    let memosCount = 0;

    const prMap = new Map<string, any>();
    participatedRoutes.forEach((pr) => {
      if (pr?.route_id) prMap.set(pr.route_id, pr);
    });

    filteredDiary.forEach((d) => {
      if (d.spotAreaLabel) citySet.add(d.spotAreaLabel);
      (d.companionNames || []).forEach((c) => {
        if (c && c.trim()) compSet.add(c.trim());
      });
      if (d.hasPhoto || d.photo_url || d.sharedPhotoUrl) {
        photosCount += 1;
      }
      if (d.memo || d.sharedMemoText) {
        memosCount += 1;
      }
      if (d.route_id) {
        const pr = prMap.get(d.route_id);
        const existing = routeCountMap.get(d.route_id);
        if (!existing) {
          routeCountMap.set(d.route_id, {
            id: d.route_id,
            title: d.routeName || pr?.routeTitle || "ルート",
            count: 1,
            storyIntro: pr?.storyIntro || "",
          });
        } else {
          existing.count += 1;
        }
      }
    });

    return {
      totalStamps: filteredDiary.length,
      uniqueCities: Array.from(citySet),
      uniqueRoutes: Array.from(routeCountMap.values()).sort((a, b) => b.count - a.count),
      companionsList: Array.from(compSet),
      photosCount,
      memosCount,
    };
  }, [filteredDiary, participatedRoutes]);

  // 選択された月における完走ルート
  const filteredCompletedRoutes = useMemo(() => {
    return selectedMonth === "すべて"
      ? completedRoutes
      : completedRoutes.filter((ur) => ur.yearMonth === selectedMonth);
  }, [completedRoutes, selectedMonth]);

  // 統計サマリー
  const visitedCitiesCount = useMemo(() => {
    const target = selectedMonth === "すべて" ? diary : diary.filter((d) => d.yearMonth === selectedMonth);
    const set = new Set<string>();
    target.forEach((d) => {
      if (d.spotAreaLabel) set.add(d.spotAreaLabel);
    });
    return set.size;
  }, [diary, selectedMonth]);

  const tsuredachiCount = useMemo(
    () => diary.filter((d) => Boolean(d.group_id)).length,
    [diary]
  );

  const withMemoryCount = useMemo(
    () => diary.filter((d) => d.hasMemory).length,
    [diary]
  );

  const revisitCount = useMemo(
    () => diary.filter((d) => d.isRevisit).length,
    [diary]
  );

  return {
    diary,
    diaryLoading,
    searchQuery,
    setSearchQuery,
    months,
    selectedMonth,
    setSelectedMonth,
    visitedCities,
    selectedCity,
    setSelectedCity,
    companions,
    selectedCompanion,
    setSelectedCompanion,
    selectedRouteId,
    setSelectedRouteId,
    diaryRoutes,
    currentFilterSummary,
    lifeFilter,
    setLifeFilter,
    viewMode,
    setViewMode,
    isFilterSheetOpen,
    setIsFilterSheetOpen,
    activeFilterCount,
    resetAllFilters,
    filteredDiary,
    completedRoutes,
    filteredCompletedRoutes,
    filteredCompletedRoutesCount: filteredCompletedRoutes.length,
    participatedRoutes,
    showParticipatedModal,
    setShowParticipatedModal,
    selectedEvent,
    setSelectedEvent,
    zoomPhotoUrl,
    setZoomPhotoUrl,
    groupInfo,
    updateEventMemo,
    updateEventPhoto,
    visitedCitiesCount,
    tsuredachiCount,
    withMemoryCount,
    revisitCount,
    refreshShuinBook: fetchShuinBook,
  };
}
