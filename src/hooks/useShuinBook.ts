"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { isRouteCurrentlyActive } from "@/utils/userRoutes";
import { parseMemberDisplayName } from "@/utils/stampMedia";

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
  loading: boolean;
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
  const [selectedMonth, setSelectedMonth] = useState<string>("すべて");
  const [selectedCity, setSelectedCity] = useState<string>("すべて");
  const [lifeFilter, setLifeFilter] = useState<ShuinLifeFilter>("all");
  const [viewMode, setViewMode] = useState<ShuinViewMode>("grid");
  const [selectedEvent, setSelectedEvent] = useState<ShuinDiaryEvent | null>(null);
  const [completedRoutes, setCompletedRoutes] = useState<any[]>([]);
  const [participatedRoutes, setParticipatedRoutes] = useState<any[]>([]);
  const [showParticipatedModal, setShowParticipatedModal] = useState(false);
  const [zoomPhotoUrl, setZoomPhotoUrl] = useState<string | null>(null);
  const [groupInfo, setGroupInfo] = useState<ShuinGroupInfo | null>(null);

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
        loading: true,
      });

      try {
        const { data: membersData, error: membersError } = await supabase
          .from("group_members")
          .select("user_id, status, users(id, display_name)")
          .eq("group_id", selectedEvent.group_id);

        const membersList: string[] = [];
        if (!membersError && membersData && membersData.length > 0) {
          let partnerIdx = 0;
          membersData.forEach((m: any) => {
            if (m.user_id !== user?.id) {
              const name = parseMemberDisplayName(m, user?.id, partnerIdx++);
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

        const { data: sharedEvents, error: photoError } = await supabase
          .from("stamp_events")
          .select("photo_url, memo, user_id")
          .eq("group_id", selectedEvent.group_id)
          .eq("spot_id", selectedEvent.spot_id)
          .not("photo_url", "is", null)
          .order("created_at", { ascending: false })
          .limit(1);

        let sharedPhoto = selectedEvent.photo_url || null;
        let sharedMemo = selectedEvent.memo || null;
        let photoUploaderName = "";

        if (!photoError && sharedEvents && sharedEvents.length > 0) {
          sharedPhoto = sharedEvents[0].photo_url;
          if (!sharedMemo && sharedEvents[0].memo) {
            sharedMemo = sharedEvents[0].memo;
          }
          if (sharedEvents[0].user_id !== user?.id) {
            const { data: uData } = await supabase
              .from("users")
              .select("display_name")
              .eq("id", sharedEvents[0].user_id)
              .maybeSingle();
            photoUploaderName = uData?.display_name || membersList[0] || "友だち";
          }
        }

        if (!cancelled) {
          setGroupInfo({
            members: membersList,
            sharedPhoto,
            sharedMemo,
            photoUploaderName,
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
        }
      > = {};
      const routeMap: Record<string, { title: string; category?: string; prefecture?: string }> = {};

      if (spotIds.length) {
        const { data: sp } = await supabase
          .from("spots")
          .select("id, name, address, city, prefecture, f7_fragment, f7_full")
          .in("id", spotIds);

        (sp || []).forEach((x: any) => {
          spotDetailMap[x.id] = {
            name: x.name || "スポット",
            address: x.address || "",
            city: x.city || extractCityFromAddress(x.address, x.prefecture) || "",
            prefecture: x.prefecture || "",
            f7_fragment: x.f7_fragment || "",
            f7_full: x.f7_full || "",
          };
        });
      }

      if (routeIds.length) {
        const { data: rt } = await supabase
          .from("routes")
          .select("id, title, category, prefecture")
          .in("id", routeIds);

        (rt || []).forEach((x: any) => {
          routeMap[x.id] = {
            title: x.title,
            category: x.category,
            prefecture: x.prefecture,
          };
        });
      }

      // 各グループのメンバーと共有写真・メモを一括解決（アルバムビューでも表示できるよう）
      const groupEventPairs = events.filter((e: any) => e.group_id);
      const groupIds = [...new Set(groupEventPairs.map((e: any) => e.group_id))];
      const sharedPhotoKeys = new Set<string>(); // "groupId-spotId"
      const sharedEventMap: Record<string, { photo_url: string | null; memo: string | null }> = {};
      const groupCompanionNamesMap: Record<string, string[]> = {};

      if (groupIds.length) {
        const [sharedPhotosRes, groupMembersRes] = await Promise.all([
          supabase
            .from("stamp_events")
            .select("group_id, spot_id, photo_url, memo, created_at")
            .in("group_id", groupIds)
            .order("created_at", { ascending: false }),
          supabase
            .from("group_members")
            .select("group_id, user_id, status, users(id, display_name)")
            .in("group_id", groupIds),
        ]);

        (sharedPhotosRes.data || []).forEach((sp: any) => {
          const key = `${sp.group_id}-${sp.spot_id}`;
          if (sp.photo_url) {
            sharedPhotoKeys.add(key);
          }
          if (!sharedEventMap[key]) {
            sharedEventMap[key] = {
              photo_url: sp.photo_url || null,
              memo: sp.memo || null,
            };
          } else {
            if (!sharedEventMap[key].photo_url && sp.photo_url) {
              sharedEventMap[key].photo_url = sp.photo_url;
            }
            if (!sharedEventMap[key].memo && sp.memo) {
              sharedEventMap[key].memo = sp.memo;
            }
          }
        });

        const idxCounter: Record<string, number> = {};
        (groupMembersRes.data || []).forEach((gm: any) => {
          if (!groupCompanionNamesMap[gm.group_id]) {
            groupCompanionNamesMap[gm.group_id] = [];
          }
          if (gm.user_id !== user.id) {
            const cIdx = idxCounter[gm.group_id] || 0;
            idxCounter[gm.group_id] = cIdx + 1;
            const name = parseMemberDisplayName(gm, user.id, cIdx);
            if (name && !groupCompanionNamesMap[gm.group_id].includes(name)) {
              groupCompanionNamesMap[gm.group_id].push(name);
            }
          }
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
          .select("id, title, category, prefecture")
          .in("id", extraRouteIds);
        (extraRt || []).forEach((x: any) => {
          routeMap[x.id] = { title: x.title, category: x.category, prefecture: x.prefecture };
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
        const rInfo = routeMap[e.route_id] || { title: "ルート" };
        const spInfo = spotDetailMap[e.spot_id] || {
          name: "スポット",
          address: "",
          city: "",
          prefecture: "",
          f7_fragment: "",
          f7_full: "",
        };

        const groupSpotKey = e.group_id ? `${e.group_id}-${e.spot_id}` : "";
        const sharedInfo = groupSpotKey ? sharedEventMap[groupSpotKey] : undefined;
        const localSavedMemo = readLocalMemo(e.id);
        const effectiveMemo = localSavedMemo !== null ? localSavedMemo : e.memo || null;

        const hasPhoto = Boolean(
          e.photo_url || (groupSpotKey && sharedPhotoKeys.has(groupSpotKey))
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
          photo_url: e.photo_url || null,
          group_id: e.group_id || null,
          hasPhoto,
          hasMemory,
          yearMonth,
          visitOrder,
          totalVisitsToSpot,
          isRevisit,
          companionNames: e.group_id ? groupCompanionNamesMap[e.group_id] || [] : [],
          sharedPhotoUrl: sharedInfo?.photo_url || e.photo_url || null,
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

  // 選択された年月・街・ライフログ条件でのフィルタリング
  const filteredDiary = useMemo(() => {
    return diary.filter((d) => {
      if (selectedMonth !== "すべて" && d.yearMonth !== selectedMonth) {
        return false;
      }
      if (selectedCity !== "すべて" && d.spotAreaLabel !== selectedCity) {
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
  }, [diary, selectedMonth, selectedCity, lifeFilter]);

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
    months,
    selectedMonth,
    setSelectedMonth,
    visitedCities,
    selectedCity,
    setSelectedCity,
    lifeFilter,
    setLifeFilter,
    viewMode,
    setViewMode,
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
    visitedCitiesCount,
    tsuredachiCount,
    withMemoryCount,
    revisitCount,
    refreshShuinBook: fetchShuinBook,
  };
}
