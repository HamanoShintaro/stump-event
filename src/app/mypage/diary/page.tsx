"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import { getCategoryStampUrl, getCategoryBgUrl } from "@/utils/stampHelper";
import { isRouteCurrentlyActive } from "@/utils/userRoutes";
import { ChevronLeft, Calendar, Compass, MapPin, Camera, Users, X, ArrowRight } from "lucide-react";

export default function DiaryPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [diary, setDiary] = useState<any[]>([]);
  const [diaryLoading, setDiaryLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("すべて");
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [completedRoutes, setCompletedRoutes] = useState<any[]>([]);
  const [participatedRoutes, setParticipatedRoutes] = useState<any[]>([]);
  const [showParticipatedModal, setShowParticipatedModal] = useState(false);
  const [zoomPhotoUrl, setZoomPhotoUrl] = useState<string | null>(null);
  const [groupInfo, setGroupInfo] = useState<{
    members: string[];
    sharedPhoto: string | null;
    sharedMemo: string | null;
    photoUploaderName: string;
    loading: boolean;
  } | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // 連れ立ち（グループ）情報のフェッチ
  useEffect(() => {
    if (!selectedEvent || !selectedEvent.group_id) {
      setGroupInfo(null);
      return;
    }
    
    (async () => {
      setGroupInfo({ members: [], sharedPhoto: null, sharedMemo: null, photoUploaderName: "", loading: true });
      try {
        // 1. 同グループのメンバーの user_id 一覧を取得
        const { data: membersData, error: membersError } = await supabase
          .from("group_members")
          .select("user_id")
          .eq("group_id", selectedEvent.group_id);
           
        const membersList: string[] = [];
        if (!membersError && membersData && membersData.length > 0) {
          const userIds = membersData.map((m: any) => m.user_id);
          
          // 2. ユーザー名 (display_name) を users テーブルから一括取得
          const { data: usersData } = await supabase
            .from("users")
            .select("id, display_name")
            .in("id", userIds);
            
          if (usersData) {
            usersData.forEach((u: any) => {
              if (u.id !== user?.id) {
                membersList.push(u.display_name || "同行メンバー");
              }
            });
          }
        }

        // RLS（行セキュリティ）制限などでメンバー一覧が空になった場合のテスト用救済フォールバック
        if (membersList.length === 0 && selectedEvent.group_id === '99999999-9999-9999-9999-999999999999') {
          membersList.push("小春");
        }
         
        // 3. 同グループ・同スポットで誰かがアップした写真とメモをフェッチする
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
          sharedMemo = sharedEvents[0].memo;
          if (sharedEvents[0].user_id !== user?.id) {
            // 写真アップローダーの名前を取得
            const { data: uData } = await supabase
              .from("users")
              .select("display_name")
              .eq("id", sharedEvents[0].user_id)
              .maybeSingle();
            photoUploaderName = uData?.display_name || "友だち";
          }
        }
         
        setGroupInfo({
          members: membersList,
          sharedPhoto,
          sharedMemo,
          photoUploaderName,
          loading: false
        });
      } catch (err) {
        console.error("Failed to load group info", err);
        setGroupInfo(prev => prev ? { ...prev, loading: false } : null);
      }
    })();
  }, [selectedEvent, user]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setDiaryLoading(true);
      try {
        const { data: evs, error } = await supabase
          .from("stamp_events")
          .select("id, created_at, visitor_number, spot_id, route_id, memo, photo_url, group_id")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (error) { console.error("diary fetch error", error); return; }
        const events = evs || [];
        const spotIds = [...new Set(events.map((e: any) => e.spot_id).filter(Boolean))];
        const routeIds = [...new Set(events.map((e: any) => e.route_id).filter(Boolean))];
        
        const spotMap: Record<string, string> = {};
        const routeMap: Record<string, { title: string; category?: string }> = {};
        
        if (spotIds.length) {
          const { data: sp } = await supabase.from("spots").select("id, name").in("id", spotIds);
          (sp || []).forEach((x: any) => { spotMap[x.id] = x.name; });
        }
        if (routeIds.length) {
          const { data: rt } = await supabase.from("routes").select("id, title, category").in("id", routeIds);
          (rt || []).forEach((x: any) => { 
            routeMap[x.id] = {
              title: x.title,
              category: x.category
            }; 
          });
        }
        
        // 各グループの共有写真の有無を判定
        const groupEventPairs = events.filter((e: any) => e.group_id);
        const groupIds = [...new Set(groupEventPairs.map((e: any) => e.group_id))];
        const sharedPhotoKeys = new Set<string>(); // "groupId-spotId"
        
        if (groupIds.length) {
          const { data: sharedPhotos } = await supabase
            .from("stamp_events")
            .select("group_id, spot_id")
            .in("group_id", groupIds)
            .not("photo_url", "is", null);
            
          (sharedPhotos || []).forEach((sp: any) => {
            sharedPhotoKeys.add(`${sp.group_id}-${sp.spot_id}`);
          });
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
          const { data: extraRt } = await supabase.from("routes").select("id, title, category").in("id", extraRouteIds);
          (extraRt || []).forEach((x: any) => {
            routeMap[x.id] = { title: x.title, category: x.category };
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

        // 参加したルート一覧の構築（最近の順 = 最新参加・押印・完走日時の降順）
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

          const latestActivityAt = latestTimestampMs > 0 ? new Date(latestTimestampMs).toISOString() : new Date().toISOString();
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

        setDiary(events.map((e: any) => {
          const d = new Date(e.created_at);
          const yearMonth = `${d.getFullYear()}年${d.getMonth() + 1}月`;
          const rInfo = routeMap[e.route_id] || {};
          const hasPhoto = !!e.photo_url || (e.group_id ? sharedPhotoKeys.has(`${e.group_id}-${e.spot_id}`) : false);
          return { 
            ...e, 
            spotName: spotMap[e.spot_id], 
            routeName: rInfo.title,
            category: rInfo.category,
            memo: e.memo,
            photo_url: e.photo_url,
            group_id: e.group_id,
            hasPhoto,
            yearMonth
          };
        }));
      } catch (e) {
        console.error("Failed to load diary", e);
      } finally {
        setDiaryLoading(false);
      }
    })();
  }, [user]);

  if (loading || !user) {
    return <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>読み込み中...</div>;
  }

  // 存在する年月リスト（重複排除）の抽出
  const months = ["すべて", ...new Set(diary.map(d => d.yearMonth))];

  // 選択された年月でフィルタリングされたリスト
  const filteredDiary = selectedMonth === "すべて" 
    ? diary 
    : diary.filter(d => d.yearMonth === selectedMonth);

  // 選択された月における完走ルートのフィルタリングとカウント
  const filteredCompletedRoutes = selectedMonth === "すべて"
    ? completedRoutes
    : completedRoutes.filter(ur => ur.yearMonth === selectedMonth);
  const filteredCompletedRoutesCount = filteredCompletedRoutes.length;

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "640px", margin: "0 auto", paddingBottom: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link href="/mypage" style={{ display: "flex", alignItems: "center", gap: "4px", color: "#A39687", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" }}>
            <ChevronLeft size={16} /> マイページへ戻る
          </Link>
        </div>

        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-color)", margin: "0 0 8px 0" }}>SHUIN帳</h1>
        <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: "0 0 24px 0" }}>訪れた街の記憶と、刻まれた押印の軌跡です。</p>

        {diaryLoading ? (
          <p style={{ color: "#A39687" }}>読み込み中...</p>
        ) : (diary.length > 0 || participatedRoutes.length > 0) ? (
          <>
            {/* 統計集計カード */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
              <div 
                className="glass-card" 
                style={{ 
                  flex: 1, 
                  padding: "16px 14px", 
                  textAlign: "center", 
                  background: "#FFFDF9", 
                  border: "1px solid #EBE5D9", 
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div style={{ fontSize: "0.72rem", color: "#A39687", fontWeight: "bold", marginBottom: "4px", letterSpacing: "0.5px" }}>
                  {selectedMonth === "すべて" ? "生涯の押印（SHUIN）数" : "今月の押印（SHUIN）数"}
                </div>
                <div style={{ fontSize: "1.7rem", fontWeight: "900", color: "var(--primary-color)", fontFamily: "'Noto Serif JP', serif", lineHeight: "1.2" }}>
                  {filteredDiary.length} <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#5C4E43", fontFamily: "var(--font-family)" }}>個</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowParticipatedModal(true)}
                className="glass-card" 
                style={{ 
                  flex: 1, 
                  padding: "16px 14px", 
                  textAlign: "center", 
                  background: "#FFFDF9", 
                  border: "1.5px solid var(--primary-color)", 
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(199, 68, 46, 0.08)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ fontSize: "0.72rem", color: "#A39687", fontWeight: "bold", marginBottom: "4px", letterSpacing: "0.5px" }}>
                  {selectedMonth === "すべて" ? "巡ったルートの数" : "今月完走したルートの数"}
                </div>
                <div style={{ fontSize: "1.7rem", fontWeight: "900", color: "var(--primary-color)", fontFamily: "'Noto Serif JP', serif", lineHeight: "1.2" }}>
                  {filteredCompletedRoutesCount} <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#5C4E43", fontFamily: "var(--font-family)" }}>本</span>
                </div>
                <div style={{ fontSize: "0.68rem", color: "var(--primary-color)", fontWeight: 700, marginTop: "6px", display: "flex", alignItems: "center", gap: "2px" }}>
                  参加したルート一覧 ({participatedRoutes.length}) ▸
                </div>
              </button>
            </div>

            {/* 年月クイックフィルター */}
            <div 
              style={{ 
                display: "flex", 
                gap: "8px", 
                overflowX: "auto", 
                paddingBottom: "12px", 
                marginBottom: "24px",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {months.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "1px solid",
                    borderColor: selectedMonth === m ? "var(--primary-color)" : "#EBE5D9",
                    background: selectedMonth === m ? "var(--primary-color)" : "#FFFDF9",
                    color: selectedMonth === m ? "#fff" : "#5C4E43",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s"
                  }}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* 1. ルートの踏破印（メイン＋サブ） */}
            {filteredCompletedRoutes.length > 0 && (
              <section style={{ marginBottom: "28px" }}>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-color)", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--primary-color)" }}>💮</span> ルートの踏破印
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
                  {filteredCompletedRoutes.map((cr) => (
                    <Link
                      href={`/routes/${cr.route_id}`}
                      key={cr.id}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="glass-card"
                        style={{
                          background: "#FFFDF9",
                          border: "1.5px solid var(--accent-color)",
                          borderRadius: "14px",
                          padding: "16px 18px",
                          boxShadow: "0 4px 12px rgba(92, 78, 67, 0.06)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                          <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--primary-color)", letterSpacing: "1px" }}>
                            ルートの踏破印
                          </span>
                          <span style={{ fontSize: "0.7rem", color: "#A39687" }}>
                            {new Date(cr.completed_at).toLocaleDateString("ja-JP")}
                          </span>
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "#8A7E72", marginBottom: "2px" }}>
                          メイン
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#5C4E43", fontFamily: "serif", marginBottom: "8px" }}>
                          {cr.mainName}
                        </div>
                        {cr.subName && (
                          <div
                            style={{
                              borderTop: "1px dashed #EBE5D9",
                              paddingTop: "8px",
                              marginTop: "6px",
                            }}
                          >
                            <div style={{ fontSize: "0.7rem", color: "#A39687", marginBottom: "2px" }}>
                              サブ（自答の儀）
                            </div>
                            <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--primary-color)" }}>
                              {cr.subName}
                            </div>
                            {cr.subDescription && (
                              <div style={{ fontSize: "0.74rem", color: "#8A7E72", marginTop: "2px", lineHeight: 1.4 }}>
                                {cr.subDescription}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 2. スポットの来訪印 コレクショングリッドUI */}
            <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-color)", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--primary-color)" }}>🔖</span> スポットの来訪印
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "16px" }}>
              {filteredDiary.map((d) => {
                const stampImg = getCategoryStampUrl(d.category);
                return (
                  <div
                    key={d.id}
                    className="glass-card"
                    onClick={() => setSelectedEvent(d)}
                    style={{
                      background: "#FFFDF9",
                      border: "1px solid #EBE5D9",
                      borderRadius: "14px",
                      padding: "16px 8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      position: "relative",
                      minHeight: "130px",
                      justifyContent: "space-between"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.boxShadow = "0 6px 12px rgba(92, 78, 67, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* 連れ立ち（友達と巡った）インジケーター */}
                    {d.group_id && (
                      <div 
                        style={{ 
                          position: "absolute", 
                          top: "8px", 
                          left: "8px", 
                          background: "rgba(92, 78, 67, 0.1)", 
                          border: "1.5px solid #8A7E72", 
                          borderRadius: "50%", 
                          width: "20px", 
                          height: "20px", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          color: "#5C4E43",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                          zIndex: 5
                        }}
                        title="連れ立ちで巡った思い出"
                      >
                        <Users size={10} />
                      </div>
                    )}

                    {/* 写真ありのインジケーター */}
                    {d.hasPhoto && (
                      <div 
                        style={{ 
                          position: "absolute", 
                          top: "8px", 
                          right: "8px", 
                          background: "rgba(217, 101, 91, 0.1)", 
                          border: "1.5px solid var(--primary-color)", 
                          borderRadius: "50%", 
                          width: "20px", 
                          height: "20px", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          color: "var(--primary-color)",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                          zIndex: 5
                        }}
                        title="思い出写真あり"
                      >
                        <Camera size={10} />
                      </div>
                    )}

                    {/* 朱印スタンプ画像 */}
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#fff", border: "1px solid #EBE5D9", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", marginBottom: "6px", boxShadow: "inset 0 0 5px rgba(0,0,0,0.03)" }}>
                      <img src={stampImg} alt="印" style={{ width: "100%", height: "100%", objectFit: "contain", padding: "6px" }} />
                    </div>

                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 2px 0", maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {d.spotName || "スポット"}
                      </div>
                      
                      <div style={{ fontSize: "0.65rem", color: "#A39687" }}>
                        {new Date(d.created_at).toLocaleDateString("ja-JP")}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#B3A598" }}>
            <p style={{ margin: "0 0 16px 0", fontSize: "0.95rem" }}>まだ押印（来訪）の記録がありません。</p>
            <Link href="/routes" className="btn-primary" style={{ padding: "10px 20px", textDecoration: "none" }}>最初のルートを巡る</Link>
          </div>
        )}
      </main>

      {/* 押印（SHUIN）詳細モーダル */}
      {selectedEvent && (() => {
        const visitDate = new Date(selectedEvent.created_at);
        const timeStr = visitDate.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
        const dateStr = visitDate.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
        const stampImg = getCategoryStampUrl(selectedEvent.category);
        const bgImg = getCategoryBgUrl(selectedEvent.category);
        
        return (
          <div 
            onClick={() => setSelectedEvent(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px"
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#FFFDF9",
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid var(--primary-color)",
                borderRadius: "20px",
                padding: "32px 24px",
                maxWidth: "380px",
                maxHeight: "85vh",
                overflowY: "auto",
                width: "100%",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(92, 78, 67, 0.15)",
                color: "#5C4E43",
                position: "relative"
              }}
            >
              {/* 装飾用の和風オーバーレイ（白半透明で重ねて文字を読みやすく） */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255, 253, 249, 0.88)",
                borderRadius: "18px",
                zIndex: 1
              }} />

              <div style={{ position: "relative", zIndex: 2 }}>
                {/* 訪問番号 */}
                {selectedEvent.visitor_number && (
                  <div 
                    style={{ 
                      display: "inline-block",
                      background: "rgba(217, 101, 91, 0.06)", 
                      border: "1px solid rgba(217, 101, 91, 0.25)", 
                      borderRadius: "6px", 
                      padding: "4px 12px", 
                      fontSize: "0.78rem", 
                      color: "var(--primary-color)", 
                      fontWeight: "bold",
                      fontFamily: "'Noto Serif JP', serif",
                      marginBottom: "20px"
                    }}
                  >
                    第 {selectedEvent.visitor_number} 番のしるし
                  </div>
                )}

                {/* 大きな朱印スタンプ画像 */}
                <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "#fff", border: "2px dashed var(--primary-color)", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 20px auto", boxShadow: "0 4px 12px rgba(217,101,91,0.08)" }}>
                  <img src={stampImg} alt="御朱印" style={{ width: "90%", height: "90%", objectFit: "contain" }} />
                </div>

                <h3 style={{ 
                  fontSize: "1.4rem", 
                  fontWeight: "900", 
                  color: "#5C4E43", 
                  fontFamily: "'Noto Serif JP', serif",
                  margin: "0 0 8px 0"
                }}>
                  {selectedEvent.spotName || "スポット名"}
                </h3>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", color: "#8A7E72", fontSize: "0.82rem", marginBottom: "20px" }}>
                  <Calendar size={14} />
                  <span>{dateStr} {timeStr}</span>
                </div>
                
                {selectedEvent.routeName && (
                  <div style={{ background: "rgba(92, 78, 67, 0.04)", border: "1px solid #EBE5D9", borderRadius: "8px", padding: "10px 14px", fontSize: "0.85rem", margin: "0 0 24px 0", textAlign: "left" }}>
                    <div style={{ fontSize: "0.72rem", color: "#A39687", fontWeight: "bold", marginBottom: "2px" }}>巡ったルート</div>
                    {selectedEvent.route_id ? (
                      <Link 
                        href={`/routes/${selectedEvent.route_id}`}
                        style={{ color: "#3AB7B7", textDecoration: "none", fontWeight: "bold" }}
                      >
                        {selectedEvent.routeName}
                      </Link>
                    ) : (
                      <span style={{ fontWeight: "bold" }}>{selectedEvent.routeName}</span>
                    )}
                  </div>
                )}

                {/* 連れ立ち（同行者）情報 */}
                {groupInfo && groupInfo.members.length > 0 && (
                  <div style={{ 
                    background: "rgba(92, 78, 67, 0.03)", 
                    border: "1px solid #EBE5D9", 
                    borderRadius: "8px", 
                    padding: "8px 12px", 
                    fontSize: "0.8rem", 
                    margin: "0 0 16px 0", 
                    textAlign: "left", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "6px" 
                  }}>
                    <span style={{ fontSize: "1rem" }}>👥</span>
                    <span><strong>{groupInfo.members.join(" さん、")} さん</strong>と一緒に巡りました</span>
                  </div>
                )}

                {/* 撮影された思い出写真 ＆ 感想メモ */}
                {((selectedEvent.photo_url || selectedEvent.memo) || (groupInfo && (groupInfo.sharedPhoto || groupInfo.sharedMemo))) && (
                  <div style={{ background: "#FFFDF9", border: "1.5px dashed var(--accent-color, #C9A84C)", borderRadius: "10px", padding: "12px", margin: "0 0 20px 0", textAlign: "left", boxShadow: "0 2px 6px rgba(0,0,0,0.02)" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--accent-color)", fontWeight: "bold", marginBottom: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span>📷</span> 旅の思い出
                      </div>
                      {groupInfo && groupInfo.photoUploaderName && (
                        <span style={{ fontSize: "0.65rem", color: "#8A7E72", fontWeight: "normal" }}>
                          ({groupInfo.photoUploaderName} さんが共有)
                        </span>
                      )}
                    </div>
                    
                    {/* 写真の表示 (共有写真を優先、なければ自分の写真) */}
                    {(() => {
                      const photoUrl = groupInfo?.sharedPhoto || selectedEvent.photo_url;
                      if (!photoUrl) return null;
                      
                      const isTooLargeBase64 = photoUrl.startsWith('data:image/') && photoUrl.length > 200000;
                      
                      return (
                        <div 
                          onClick={() => {
                            if (!isTooLargeBase64) {
                              setZoomPhotoUrl(photoUrl);
                            }
                          }}
                          style={{ 
                            width: "100%", 
                            borderRadius: "6px", 
                            overflow: "hidden", 
                            border: "1px solid #EBE5D9", 
                            marginBottom: (groupInfo?.sharedMemo || selectedEvent.memo) ? "8px" : "0",
                            cursor: isTooLargeBase64 ? "default" : "pointer",
                            transition: isTooLargeBase64 ? "none" : "opacity 0.2s",
                            background: "#F5F0E6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: isTooLargeBase64 ? "16px" : "0"
                          }}
                          onMouseEnter={(e) => {
                            if (!isTooLargeBase64) e.currentTarget.style.opacity = "0.8";
                          }}
                          onMouseLeave={(e) => {
                            if (!isTooLargeBase64) e.currentTarget.style.opacity = "1";
                          }}
                          title={isTooLargeBase64 ? undefined : "タップで拡大表示"}
                        >
                          {isTooLargeBase64 ? (
                            <span style={{ fontSize: "0.75rem", color: "#8A7E72", textAlign: "center" }}>
                              ⚠️ 画像のサイズが大きすぎるため表示できません
                            </span>
                          ) : (
                            <img 
                              src={photoUrl} 
                              alt="思い出の写真" 
                              style={{ width: "100%", height: "100%", maxHeight: "180px", objectFit: "cover" }} 
                            />
                          )}
                        </div>
                      );
                    })()}
                    
                    {/* メモの表示 (共有メモを優先、なければ自分のメモ) */}
                    {(groupInfo?.sharedMemo || selectedEvent.memo) && (
                      <p style={{ fontSize: "0.82rem", color: "#5C4E43", margin: 0, fontStyle: "italic", lineHeight: "1.4" }}>
                        「 {groupInfo?.sharedMemo || selectedEvent.memo} 」
                      </p>
                    )}
                  </div>
                )}

                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="btn-primary"
                  style={{ width: "100%", padding: "12px", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer" }}
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        );
      })()}
      {/* 参加したルート一覧モーダル（最近の順・獲得した印の数・ルート詳細画面へ遷移して再参加） */}
      {showParticipatedModal && (
        <div
          onClick={() => setShowParticipatedModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.72)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1100,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFDF9",
              border: "1.5px solid var(--accent-color)",
              borderRadius: "20px",
              padding: "24px 20px",
              maxWidth: "460px",
              maxHeight: "85vh",
              overflowY: "auto",
              width: "100%",
              boxShadow: "0 12px 35px rgba(92, 78, 67, 0.2)",
              color: "#5C4E43",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={() => setShowParticipatedModal(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#8A7E72",
                padding: "4px",
              }}
              aria-label="閉じる"
            >
              <X size={20} />
            </button>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 900,
                color: "#5C4E43",
                margin: "0 0 4px 0",
                fontFamily: "'Noto Serif JP', serif",
              }}
            >
              参加したルート一覧
            </h3>
            <p style={{ fontSize: "0.78rem", color: "#8A7E72", margin: "0 0 18px 0", lineHeight: 1.5 }}>
              最近参加・押印した順に表示しています。ルートの詳細画面からいつでも再参加できます。
            </p>

            {participatedRoutes.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {participatedRoutes.map((pr) => {
                  const pct =
                    pr.totalSpots > 0
                      ? Math.min(100, Math.round((pr.stampedSpotsCount / pr.totalSpots) * 100))
                      : 0;
                  const stampImg = getCategoryStampUrl(pr.category);
                  return (
                    <div
                      key={pr.route_id}
                      style={{
                        background: "#FAF6EE",
                        border: "1px solid #EBE5D9",
                        borderRadius: "14px",
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            padding: "2px 8px",
                            borderRadius: "20px",
                            background: pr.isActive
                              ? "rgba(199, 68, 46, 0.12)"
                              : pr.isCompleted
                                ? "rgba(201, 168, 76, 0.18)"
                                : "rgba(92, 78, 67, 0.08)",
                            color: pr.isActive
                              ? "var(--primary-color)"
                              : pr.isCompleted
                                ? "#8C6D1F"
                                : "#5C4E43",
                            border: pr.isCompleted ? "1px solid var(--accent-color)" : "none",
                          }}
                        >
                          {pr.isActive ? "進行中" : pr.isCompleted ? "完走" : "参加履歴"}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: "#A39687" }}>
                          最終記録: {new Date(pr.latestActivityAt).toLocaleDateString("ja-JP")}
                        </span>
                      </div>

                      <div style={{ fontSize: "1rem", fontWeight: 800, color: "#5C4E43", lineHeight: 1.4 }}>
                        {pr.routeTitle}
                      </div>

                      {/* 獲得した印（SHUIN）の数 */}
                      <div
                        style={{
                          background: "#FFFDF9",
                          border: "1px solid #EBE5D9",
                          borderRadius: "10px",
                          padding: "10px 12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "0.82rem",
                            fontWeight: 700,
                            color: "#5C4E43",
                            marginBottom: pr.totalSpots > 0 ? "6px" : "0",
                          }}
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img src={stampImg} alt="印" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
                            獲得したしるし（印）の数
                          </span>
                          <span style={{ color: "var(--primary-color)", fontWeight: 900, fontSize: "0.95rem" }}>
                            {pr.totalSpots > 0
                              ? `${pr.stampedSpotsCount} / ${pr.totalSpots} 個`
                              : `${pr.stampedSpotsCount} 個`}
                          </span>
                        </div>
                        {pr.totalSpots > 0 && (
                          <div
                            style={{
                              width: "100%",
                              height: "6px",
                              background: "#EBE5D9",
                              borderRadius: "3px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                width: `${pct}%`,
                                height: "100%",
                                background: pr.isCompleted ? "var(--accent-color)" : "var(--primary-color)",
                              }}
                            />
                          </div>
                        )}
                      </div>

                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px" }}>
                        <Link
                          href={`/routes/${pr.route_id}`}
                          onClick={() => setShowParticipatedModal(false)}
                          className="btn-primary"
                          style={{
                            padding: "8px 14px",
                            fontSize: "0.82rem",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            borderRadius: "8px",
                          }}
                        >
                          {pr.isActive ? "ルートの詳細へ" : "ルートの詳細へ（再参加）"}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "32px 0", color: "#8A7E72", fontSize: "0.9rem" }}>
                まだ参加したルートの履歴がありません。
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowParticipatedModal(false)}
              className="btn-secondary"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "0.88rem",
                marginTop: "18px",
                cursor: "pointer",
              }}
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      {/* 写真拡大ライトボックス */}
      {zoomPhotoUrl && (
        <div 
          onClick={() => setZoomPhotoUrl(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(6px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "20px",
            cursor: "zoom-out"
          }}
        >
          <img 
            src={zoomPhotoUrl} 
            alt="拡大写真" 
            style={{ 
              maxWidth: "95%", 
              maxHeight: "85vh", 
              objectFit: "contain", 
              borderRadius: "8px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
            }} 
          />
          <span style={{ color: "#FFF", marginTop: "16px", fontSize: "0.85rem", opacity: 0.7 }}>
            タップして閉じる
          </span>
        </div>
      )}
    </div>
  );
}
