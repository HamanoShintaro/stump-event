"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { evaluateBadges, isSiteUsageBadge } from "@/utils/badgeEvaluator";
import { useBadgeNotifications } from "@/hooks/useBadgeNotifications";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import HeaderNav from "@/components/HeaderNav";
import LoadingOverlay from "@/components/LoadingOverlay";
import {
  Users,
  X,
  Settings,
  LogOut,
  Bell,
  ArrowRight,
  ChevronLeft,
  RefreshCw,
  MapPin,
  BookOpen,
  Map as MapIcon,
  Sparkles,
  ScrollText,
  Bookmark,
  Footprints,
  Award,
} from "lucide-react";
import { useMyPageData } from "@/hooks/useMyPageData";
import { useLifelogStats } from "@/hooks/useLifelogStats";
import { useCompanionArchive } from "@/hooks/useCompanionArchive";
import { getCategoryStampUrl } from "@/utils/stampHelper";
import { activateUserRoute } from "@/utils/userRoutes";
import {
  buildMemberStatusWithDisplayName,
  fetchGroupCompanionMembers,
  syncUserProfileAndGroupStatus,
} from "@/utils/stampMedia";
import styles from "./page.module.css";

// 街の便り（最新のものを表示）
const LATEST_NEWS = {
  date: "2026.10.25",
  title: "【秋の大型更新】「連れ立ち旅路のしおり（共有アルバム）」、「保存したルートのお散歩プランナー」、スポット詳細「街角の余韻」が登場",
  summary: "仲間との歩みと共有写真を1ページで一覧できる「連れ立ち旅路のしおり（/groups/[groupId]）」、保存したルートを所要時間や進行度で整理できる「お散歩プランナー」、スポット詳細の「街角の余韻」と行き先選択の「街歩きコンパス」が新たに加わりました。"
};

export default function MyPage() {
  const { user, loading, logout } = useAuth();
  const { unseenCount } = useBadgeNotifications(user?.id);
  const {
    stats: lifelogStats,
    memoryHighlight,
    nextMemoryHighlight,
    hasMultipleHighlights,
    loading: lifelogLoading,
  } = useLifelogStats(user?.id);
  const {
    companionSummaries,
    recentGroupSessions,
  } = useCompanionArchive(user?.id);
  const router = useRouter();
  const [userBadges, setUserBadges] = useState<any[]>([]);
  const [badgesLoading, setBadgesLoading] = useState(false);
  const [diary, setDiary] = useState<any[]>([]);
  const [diaryLoading, setDiaryLoading] = useState(false);

  // 連れ立ち用State
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [inviteCodeInput, setInviteCodeInput] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const { showAlert } = useCustomAlert();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    
    async function loadBadges(userId: string) {
      setBadgesLoading(true);
      try {
        await evaluateBadges(userId);
        const { data, error } = await supabase
          .from("badge_assignments")
          .select(`
            id,
            acquired_at,
            badges (
              id,
              code,
              category,
              name_ja,
              subtitle_en,
              rarity,
              description
            )
          `)
          .eq("user_id", userId)
          .order("acquired_at", { ascending: false });

        if (!error && data) {
          setUserBadges(data);
        }
      } catch (err) {
        console.error("Failed to load user badges", err);
      } finally {
        setBadgesLoading(false);
      }
    }

    loadBadges(user.id);
  }, [user]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setDiaryLoading(true);
      try {
        const { data: evs, error } = await supabase
          .from("stamp_events")
          .select("id, created_at, visitor_number, spot_id, route_id, group_id, memo, photo_url")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (error) { console.error("diary fetch error", error); return; }
        const events = evs || [];
        const spotIds = [...new Set(events.map((e: any) => e.spot_id).filter(Boolean))];
        const spotMap: Record<string, { name: string; routeName: string }> = {};
        if (spotIds.length) {
          const { data: sp } = await supabase
            .from("spots")
            .select("id, name, route_id, routes(id, title)")
            .in("id", spotIds);
          (sp || []).forEach((x: any) => {
            const rt = Array.isArray(x.routes) ? x.routes[0] : x.routes;
            spotMap[x.id] = {
              name: x.name,
              routeName: rt?.title || rt?.name || "",
            };
          });
        }
        setDiary(
          events.map((e: any) => ({
            ...e,
            spotName: spotMap[e.spot_id]?.name,
            routeName: spotMap[e.spot_id]?.routeName,
          }))
        );
      } catch (e) {
        console.error("Failed to load diary", e);
      } finally {
        setDiaryLoading(false);
      }
    })();
  }, [user]);

  const { activeRallies, bookmarkedRallies, dataLoading, leaveNarrative } = useMyPageData(user);

  if (loading || !user) {
    return <LoadingOverlay />;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  // 獲得した称号（サイト利用度に応じた称号のみ、最大3個）
  const earnedBadges = userBadges
    .map(ub => ub.badges ? { ...ub.badges, acquired_at: ub.acquired_at } : null)
    .filter((b): b is any => isSiteUsageBadge(b))
    .slice(0, 3);

  const handleJoinGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    const cleanCode = inviteCodeInput.replace(/\s+/g, "");
    if (cleanCode.length !== 6 || !/^\d{6}$/.test(cleanCode)) {
      await showAlert({ text: "招待コードは6桁の半角数字で入力してください。", okText: "確認" });
      return;
    }
    
    setIsJoining(true);
    try {
      const { data: grp, error: grpError } = await supabase
        .from("groups")
        .select("*")
        .eq("invite_code", cleanCode)
        .eq("is_active", true)
        .maybeSingle();
        
      if (grpError) throw grpError;
      if (!grp) {
        await showAlert({ text: "指定された招待コードの連れ立ちグループが見つかりません。コードが正しいか、またはすでに解散されていないかご確認ください。", okText: "確認" });
        return;
      }
      
      await syncUserProfileAndGroupStatus(supabase, user, grp.id);
      const statusValue = buildMemberStatusWithDisplayName(user);

      const { data: existingMember } = await supabase
        .from("group_members")
        .select("user_id, status")
        .eq("group_id", grp.id)
        .eq("user_id", user.id)
        .maybeSingle();
        
      if (!existingMember) {
        const { error: joinError } = await supabase
          .from("group_members")
          .insert({
            group_id: grp.id,
            user_id: user.id,
            status: statusValue,
          });
          
        if (joinError) throw joinError;
      } else if (existingMember.status !== statusValue) {
        await supabase
          .from("group_members")
          .update({ status: statusValue })
          .eq("group_id", grp.id)
          .eq("user_id", user.id);
      }

      // 連れ立ちのルートを進行中（最大1個）として設定
      await activateUserRoute(user.id, grp.route_id);

      const currentMembers = await fetchGroupCompanionMembers(supabase, grp.id, user);
      const partnerNames = currentMembers.filter((m) => !m.isMe).map((m) => m.displayName);
      
      setShowJoinDialog(false);
      await showAlert({
        text:
          partnerNames.length > 0
            ? `連れ立ちに合流しました。\n同行メンバー: ${partnerNames.join("、")} さん\n同じルートのマップへ移動します。`
            : `連れ立ちグループ（コード: ${cleanCode}）に参加しました。\nマップへ移動します。`,
        okText: "マップへ進む",
      });
      router.push(`/routes/${grp.route_id}/map?groupId=${grp.id}`);
    } catch (err: any) {
      await showAlert({ text: `連れ立ちへの参加に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "4px", color: "#A39687", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" }}>
            <ChevronLeft size={16} /> ホームへ戻る
          </Link>
        </div>

        {/* ユーザープロフィールヘッダー */}
        <section 
          className="glass-card" 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "24px 20px", 
            borderRadius: "16px", 
            border: "1px solid #EBE5D9", 
            background: "#FFFDF9",
            boxShadow: "0 4px 15px rgba(92, 78, 67, 0.04)",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img 
              src={user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} 
              alt="Profile" 
              style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#fff", border: "2px solid var(--primary-color)" }} 
            />
            <div>
              <div style={{ fontSize: "0.8rem", color: "#A39687" }}>ようこそ</div>
              <h1 style={{ fontWeight: "800", fontSize: "1.3rem", color: "var(--primary-color)", margin: "2px 0 0 0" }}>
                {user.user_metadata?.full_name || "ユーザー"} さん
              </h1>
              <div style={{ fontSize: "0.75rem", color: "#8A7E72", marginTop: "2px" }}>{user.email}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link href="/settings" className="btn-secondary" style={{ padding: "8px 12px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", color: "#5C4E43", border: "1px solid #EBE5D9", background: "transparent", borderRadius: "8px" }}>
              <Settings size={16} /> 設定
            </Link>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: "8px 12px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px", color: "#D9655B", border: "1px solid rgba(217,101,91,0.3)", background: "transparent", borderRadius: "8px", cursor: "pointer" }}>
              <LogOut size={16} /> ログアウト
            </button>
          </div>
        </section>

        {/* 連れ立ちクイックアクセス */}
        <section 
          className="glass-card" 
          style={{ 
            padding: "16px 20px", 
            borderRadius: "14px", 
            border: "1px solid #EBE5D9",
            background: "linear-gradient(135deg, #FFFDF9 0%, #FAF6EE 100%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "24px",
            boxShadow: "0 4px 12px rgba(92, 78, 67, 0.04)"
          }}
        >
          <div>
            <h3 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 2px 0", display: "flex", alignItems: "center", gap: "6px" }}>
              <Users size={16} color="var(--primary-color)" /> 友達と「連れ立ち」で巡る
            </h3>
            <p style={{ fontSize: "0.75rem", color: "#8A7E72", margin: 0 }}>
              招待コードを入力して、友達のグループに合流します。
            </p>
          </div>
          <button 
            onClick={() => {
              setInviteCodeInput("");
              setShowJoinDialog(true);
            }}
            className="btn-primary" 
            style={{ 
              padding: "10px 16px", 
              fontSize: "0.85rem", 
              fontWeight: "bold",
              background: "var(--primary-color)",
              boxShadow: "0 2px 8px rgba(199, 68, 46, 0.2)"
            }}
          >
            招待コードを入力
          </button>
        </section>

        {/* 👥 連れ立ちの記憶帳（ともに歩いた仲間と旅路） */}
        {(companionSummaries.length > 0 || recentGroupSessions.length > 0) && (
          <section
            className="glass-card"
            style={{
              padding: "20px 24px",
              borderRadius: "16px",
              border: "1px solid var(--accent-color)",
              background: "linear-gradient(135deg, #FFFDF9 0%, #FAF5E8 100%)",
              marginBottom: "24px",
              boxShadow: "0 4px 14px rgba(201, 168, 76, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--accent-color)",
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                  }}
                >
                  誰かと歩いた街角の風景と、分かち合ったしるし
                </div>
                <h2
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    margin: "2px 0 0 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Users size={18} strokeWidth={2} color="var(--primary-color)" />
                  <span>連れ立ちの記憶帳（ともに歩いた仲間と旅路）</span>
                </h2>
              </div>
              <Link
                href="/mypage/diary?view=album"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--primary-color)",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                旅のアルバムを開く <ArrowRight size={13} />
              </Link>
            </div>

            {/* 一緒に歩いた仲間チップ */}
            {companionSummaries.length > 0 && (
              <div style={{ marginBottom: recentGroupSessions.length > 0 ? "16px" : 0 }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#6E5314",
                    marginBottom: "8px",
                  }}
                >
                  一緒に歩いた仲間（タップでその人とのSHUIN帳を開く）
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {companionSummaries.map((comp) => (
                    <Link
                      key={comp.companionName}
                      href={`/mypage/diary?companion=${encodeURIComponent(comp.companionName)}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        background: "#FFFDF9",
                        border: "1px solid #EBE5D9",
                        borderRadius: "12px",
                        padding: "10px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0 2px 6px rgba(92, 78, 67, 0.04)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          background: "rgba(201, 168, 76, 0.16)",
                          border: "1.5px solid var(--accent-color)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          color: "var(--text-color)",
                          flexShrink: 0,
                          overflow: "hidden",
                        }}
                      >
                        {comp.avatarUrl ? (
                          <img
                            src={comp.avatarUrl}
                            alt={comp.companionName}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        ) : (
                          comp.companionName.slice(0, 1)
                        )}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 800,
                            color: "var(--text-color)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "4px",
                          }}
                        >
                          <span
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {comp.companionName} さん
                          </span>
                          <span style={{ fontSize: "0.7rem", color: "var(--primary-color)" }}>▸</span>
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "#6E5314", fontWeight: 700, marginTop: "2px" }}>
                          ともに刻んだ印 {comp.sharedStampsCount}個 ・ {comp.routesCount}ルート
                        </div>
                        {comp.latestWalkedAt && (
                          <div style={{ fontSize: "0.66rem", color: "#8A7E72", marginTop: "1px" }}>
                            最終同行: {new Date(comp.latestWalkedAt).toLocaleDateString("ja-JP")}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 最近の連れ立ち旅路 */}
            {recentGroupSessions.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#6E5314",
                    marginBottom: "8px",
                  }}
                >
                  最近の連れ立ち旅路
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {recentGroupSessions.slice(0, 3).map((sess) => (
                    <div
                      key={sess.groupId}
                      style={{
                        background: "#FFFDF9",
                        border: "1px solid #EBE5D9",
                        borderRadius: "12px",
                        padding: "10px 14px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "10px",
                      }}
                    >
                      <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            flexWrap: "wrap",
                            marginBottom: "3px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.66rem",
                              fontWeight: 800,
                              padding: "1px 7px",
                              borderRadius: "10px",
                              background: sess.isActive
                                ? "rgba(199, 68, 46, 0.12)"
                                : "rgba(201, 168, 76, 0.16)",
                              color: sess.isActive ? "var(--primary-color)" : "#6E5314",
                            }}
                          >
                            {sess.isActive ? "連れ立ち進行中" : "同行の記録"}
                          </span>
                          <span style={{ fontSize: "0.7rem", color: "#8A7E72" }}>
                            {new Date(sess.walkedAt).toLocaleDateString("ja-JP")}
                          </span>
                          {sess.partnerNames.length > 0 && (
                            <span style={{ fontSize: "0.72rem", color: "var(--text-color)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <Users size={12} strokeWidth={2} color="var(--primary-color)" />
                              <span>{sess.partnerNames.join("、")} さんと同行</span>
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 800,
                            color: "var(--text-color)",
                          }}
                        >
                          {sess.routeTitle}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "#8A7E72", marginTop: "2px" }}>
                          自分の押印 {sess.myStampedCount}個 ・ 共有思い出 {sess.sharedMemoriesCount}件
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        <Link
                          href={`/groups/${sess.groupId}`}
                          className="btn-secondary"
                          style={{
                            padding: "5px 10px",
                            fontSize: "0.74rem",
                            borderRadius: "6px",
                            textDecoration: "none",
                            background: "#FFFDF9",
                            borderColor: "var(--accent-color)",
                            color: "var(--text-color)",
                            fontWeight: 800,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <ScrollText size={13} strokeWidth={2} />
                          <span>旅路のしおり</span>
                        </Link>
                        {sess.routeId && (
                          <Link
                            href={`/mypage/diary?routeId=${encodeURIComponent(sess.routeId)}`}
                            className="btn-secondary"
                            style={{
                              padding: "5px 10px",
                              fontSize: "0.74rem",
                              borderRadius: "6px",
                              textDecoration: "none",
                              background: "#FFFDF9",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <BookOpen size={13} strokeWidth={2} />
                            <span>記録を見る</span>
                          </Link>
                        )}
                        {sess.routeId && (
                          <Link
                            href={`/routes/${sess.routeId}/map?groupId=${sess.groupId}`}
                            className="btn-primary"
                            style={{
                              padding: "5px 10px",
                              fontSize: "0.74rem",
                              borderRadius: "6px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <MapIcon size={13} strokeWidth={2} />
                            <span>マップへ</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 街歩きの軌跡（ライフログ集計） */}
        <section
          className="glass-card"
          style={{
            padding: "20px 24px",
            borderRadius: "16px",
            border: "1px solid #EBE5D9",
            background: "#FFFDF9",
            marginBottom: "24px",
            boxShadow: "0 4px 14px rgba(92, 78, 67, 0.04)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
            <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-color)", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <MapIcon size={18} strokeWidth={2} color="var(--primary-color)" />
              <span>あなたの街歩きの軌跡</span>
            </h2>
            <Link
              href="/mypage/diary"
              style={{
                fontSize: "0.8rem",
                color: "var(--primary-color)",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                textDecoration: "none",
              }}
            >
              SHUIN帳を開く <ArrowRight size={14} />
            </Link>
          </div>

          {lifelogLoading ? (
            <p style={{ color: "#A39687", fontSize: "0.85rem", margin: 0 }}>歩みの記録を集計しています...</p>
          ) : (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
                  gap: "12px",
                }}
              >
                {/* 1. 訪れた街（市区郡） */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FFFDF9 0%, #FAF6EE 100%)",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "14px 12px",
                  }}
                >
                  <div style={{ fontSize: "var(--font-size-small)", color: "#8A7E72", fontWeight: 700, marginBottom: "6px" }}>
                    訪れた街（市区郡）
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-color)", lineHeight: 1 }}>
                      {lifelogStats.visitedCitiesCount}
                    </span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-color)" }}>街</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#A39687", marginTop: "6px" }}>
                    巡った場所 {lifelogStats.uniqueSpots} 箇所
                  </div>
                </div>

                {/* 2. 刻んだしるし（累計押印） */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FFFDF9 0%, #FAF6EE 100%)",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "14px 12px",
                  }}
                >
                  <div style={{ fontSize: "var(--font-size-small)", color: "#8A7E72", fontWeight: 700, marginBottom: "6px" }}>
                    刻んだしるし（累計押印）
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-color)", lineHeight: 1 }}>
                      {lifelogStats.totalStamps}
                    </span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-color)" }}>個</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#A39687", marginTop: "6px" }}>
                    なじみの再訪 {lifelogStats.revisitCount}回
                  </div>
                </div>

                {/* 3. 巡り終えた物語（完走） */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FFFDF9 0%, #FAF6EE 100%)",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "14px 12px",
                  }}
                >
                  <div style={{ fontSize: "var(--font-size-small)", color: "#8A7E72", fontWeight: 700, marginBottom: "6px" }}>
                    巡り終えた物語（完走）
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent-color)", lineHeight: 1 }}>
                      {lifelogStats.completedRoutesCount}
                    </span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-color)" }}>ルート</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#A39687", marginTop: "6px" }}>
                    踏破印を授与
                  </div>
                </div>

                {/* 4. 紡いだ思い出（連れ立ち・写真・言葉） */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FFFDF9 0%, #FAF6EE 100%)",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "14px 12px",
                  }}
                >
                  <div style={{ fontSize: "var(--font-size-small)", color: "#8A7E72", fontWeight: 700, marginBottom: "6px" }}>
                    紡いだ思い出
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-color)", lineHeight: 1.35, marginTop: "4px" }}>
                    連れ立ち <span style={{ color: "var(--primary-color)" }}>{lifelogStats.tsuredachiVisitsCount}</span>回 ・ 記録 <span style={{ color: "var(--primary-color)" }}>{lifelogStats.memoriesRecordedCount}</span>件
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#A39687", marginTop: "6px" }}>
                    写真・あとがきの記憶
                  </div>
                </div>
              </div>

              {lifelogStats.visitedCitiesList.length > 0 && (
                <div
                  style={{
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "1px dashed #EBE5D9",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "var(--font-size-small)", color: "#8A7E72", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={12} color="var(--primary-color)" /> 足跡を残した街:
                  </span>
                  {lifelogStats.visitedCitiesList.map((city) => (
                    <span
                      key={city}
                      style={{
                        fontSize: "0.72rem",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        background: "#FAF6EE",
                        border: "1px solid #EBE5D9",
                        color: "var(--text-color)",
                        fontWeight: 700,
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        {/* 記憶の一頁（あの日のしるし） */}
        {memoryHighlight && (
          <section
            className="glass-card"
            style={{
              padding: "20px 24px",
              borderRadius: "16px",
              border: "1px solid var(--accent-color)",
              background: "linear-gradient(135deg, #FFFDF9 0%, #FAF4E6 100%)",
              marginBottom: "28px",
              boxShadow: "0 6px 18px rgba(201, 168, 76, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
              <div>
                <div style={{ fontSize: "var(--font-size-small)", color: "var(--accent-color)", fontWeight: 800, letterSpacing: "0.06em" }}>
                  ふと振り返る、あの日の街角の記憶
                </div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-color)", margin: "2px 0 0 0", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles size={17} strokeWidth={2} color="var(--primary-color)" />
                  <span>記憶の一頁（あの日のしるし）</span>
                </h2>
              </div>

              {hasMultipleHighlights && (
                <button
                  type="button"
                  onClick={nextMemoryHighlight}
                  className="btn-secondary"
                  style={{
                    padding: "6px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    borderRadius: "8px",
                    border: "1px solid var(--accent-color)",
                    background: "#FFFDF9",
                    color: "var(--text-color)",
                    cursor: "pointer",
                  }}
                >
                  <RefreshCw size={13} />
                  <span>別の記憶をめくる</span>
                </button>
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "12px",
                padding: "16px",
                flexWrap: "wrap",
              }}
            >
              {/* SHUIN印影 */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  background: "#FAF6EE",
                  border: "1px solid #EBE5D9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <img
                  src={getCategoryStampUrl(memoryHighlight.routeCategory)}
                  alt="SHUIN印影"
                  style={{ width: "52px", height: "52px", objectFit: "contain", opacity: 0.9 }}
                />
              </div>

              {/* 記憶の詳細 */}
              <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary-color)" }}>
                    {new Date(memoryHighlight.visitedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {memoryHighlight.spotArea && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        padding: "1px 7px",
                        borderRadius: "10px",
                        background: "#FAF6EE",
                        border: "1px solid #EBE5D9",
                        color: "#5C4E43",
                        fontWeight: 700,
                      }}
                    >
                      {memoryHighlight.spotArea}
                    </span>
                  )}
                  {memoryHighlight.isTsuredachi && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        padding: "1px 7px",
                        borderRadius: "6px",
                        background: "rgba(217, 101, 91, 0.12)",
                        color: "var(--primary-color)",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <Users size={11} strokeWidth={2} />
                      <span>連れ立ちの記憶</span>
                    </span>
                  )}
                  {memoryHighlight.visitOrder >= 2 && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        padding: "1px 7px",
                        borderRadius: "6px",
                        background: "rgba(201, 168, 76, 0.16)",
                        color: "#8C6D1F",
                        fontWeight: 700,
                      }}
                    >
                      {memoryHighlight.visitOrderLabel}
                    </span>
                  )}
                  {memoryHighlight.visitorNumber != null && (
                    <span style={{ fontSize: "0.68rem", color: "#A39687", fontWeight: 700 }}>
                      #{memoryHighlight.visitorNumber}番目の来訪者
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-color)", margin: "0 0 2px 0" }}>
                  {memoryHighlight.spotName}
                </h3>
                <div style={{ fontSize: "0.75rem", color: "#8A7E72", marginBottom: "8px" }}>
                  {memoryHighlight.routeName}
                </div>

                {memoryHighlight.memo ? (
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-color)",
                      background: "#FAF6EE",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      borderLeft: "3px solid var(--accent-color)",
                      lineHeight: 1.5,
                    }}
                  >
                    「{memoryHighlight.memo}」
                  </div>
                ) : memoryHighlight.spotFragment ? (
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#6F6256",
                      background: "#FAF6EE",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #D8CEBE",
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    {memoryHighlight.spotFragment}
                  </div>
                ) : null}
              </div>

              {/* 思い出写真サムネイル */}
              {memoryHighlight.photoUrl && (
                <img
                  src={memoryHighlight.photoUrl}
                  alt={memoryHighlight.spotName}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "1px solid #EBE5D9",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>

            <div style={{ marginTop: "12px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              {memoryHighlight.routeId && (
                <Link
                  href={`/routes/${memoryHighlight.routeId}`}
                  style={{
                    fontSize: "0.78rem",
                    color: "#8A7E72",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  このルートをもう一度見る
                </Link>
              )}
              <Link
                href="/mypage/diary"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--primary-color)",
                  textDecoration: "none",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <BookOpen size={14} /> SHUIN帳でこの記録を見る ▸
              </Link>
            </div>
          </section>
        )}

        {/* メインダッシュボードコンテンツ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          
          {/* 0. 街の便り */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyItems: "center" }}><Bell size={18} color="var(--primary-color)" /></span> 街の便り
              </h2>
              <Link href="/notifications" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                一覧を見る <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ padding: "14px 16px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.75rem", color: "#A39687" }}>{LATEST_NEWS.date}</span>
                <span style={{ fontSize: "0.7rem", background: "rgba(217,101,91,0.1)", color: "var(--primary-color)", padding: "1px 5px", borderRadius: "4px", fontWeight: "bold" }}>最新</span>
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#5C4E43", margin: "0 0 6px 0", lineHeight: "1.4" }}>
                <Link href="/notifications" style={{ textDecoration: "none", color: "inherit" }}>
                  {LATEST_NEWS.title}
                </Link>
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#8A7E72", margin: 0, lineHeight: "1.4" }}>
                {LATEST_NEWS.summary}
              </p>
            </div>
          </section>

          {/* 1. 進行中ルート */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <Footprints size={18} strokeWidth={2} color="var(--primary-color)" />
                <span>進行中のルート</span>
              </h2>
              <Link href="/mypage/active" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {dataLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : activeRallies.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {activeRallies.slice(0, 1).map((ur) => {
                  const totalSpots = ur.totalSpots || 0;
                  const stampedCount = ur.stampedCount || 0;
                  const progressPct = totalSpots > 0 ? Math.min(100, Math.round((stampedCount / totalSpots) * 100)) : 0;
                  return (
                  <div key={ur.id} style={{ padding: "16px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "12px" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#5C4E43", margin: "0 0 8px 0" }}>{ur.routes?.title}</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", color: "#A39687", margin: "0 0 12px 0", flexWrap: "wrap", gap: "6px" }}>
                      <span>参加日: {new Date(ur.joined_at).toLocaleDateString("ja-JP")}</span>
                      {ur.remainingHours != null && (
                        <span style={{ color: "var(--primary-color)", fontWeight: 700 }}>
                          残り有効時間: 約{ur.remainingHours}時間
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: "700", color: "#5C4E43", marginBottom: "6px" }}>
                      <span>獲得したしるし</span>
                      <span>{totalSpots > 0 ? `${stampedCount} / ${totalSpots} 個` : `${stampedCount} 個`}（進行中）</span>
                    </div>
                    <div style={{ width: "100%", height: "8px", background: "#EBE5D9", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ width: `${progressPct}%`, height: "100%", background: "var(--primary-color)", transition: "width 0.3s ease" }}></div>
                    </div>

                    {ur.group && (
                      <div style={{ 
                        marginTop: "12px", 
                        padding: "10px 12px", 
                        background: "rgba(201, 168, 76, 0.08)", 
                        border: "1px dashed var(--accent-color)", 
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        color: "#5C4E43"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "bold", marginBottom: "4px", flexWrap: "wrap" }}>
                          <Users size={14} strokeWidth={2} color="var(--primary-color)" />
                          <span>連れ立ち中</span>
                          <span style={{
                            fontSize: "0.7rem",
                            padding: "1px 8px",
                            borderRadius: "6px",
                            background: ur.group.partners.length > 0 ? "#E8F5E9" : "#FFF8E1",
                            color: ur.group.partners.length > 0 ? "#2E7D32" : "#B78103",
                            border: `1px solid ${ur.group.partners.length > 0 ? "#A5D6A7" : "#FFE082"}`,
                            fontWeight: 700
                          }}>
                            {ur.group.partners.length > 0 ? `合流済み（同行 ${ur.group.partners.length}名）` : "合流待ち"}
                          </span>
                          <span style={{ marginLeft: "auto", fontSize: "0.75rem", background: "#fff", border: "1px solid #EBE5D9", padding: "1px 6px", borderRadius: "4px", color: "var(--primary-color)" }}>
                            コード: {ur.group.inviteCode}
                          </span>
                        </div>
                        <div style={{ color: "#8A7E72" }}>
                          {ur.group.partners.length > 0 ? (
                            <>同行者: <strong style={{ color: "#5C4E43" }}>{ur.group.partners.map((p: any) => p.displayName).join("、")} さん</strong></>
                          ) : (
                            <>同行する友達の合流を待っています（招待コードを共有してください）</>
                          )}
                        </div>
                      </div>
                    )}

                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
                      <button onClick={() => leaveNarrative(ur.route_id)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: "0.8rem", background: "#f5f5f5", color: "#5c4e43", border: "none", borderRadius: "6px", cursor: "pointer" }}>進行中から外す</button>
                      {ur.group && (
                        <>
                          <Link href={`/groups/${ur.group.id}`} className="btn-secondary" style={{ padding: "6px 12px", fontSize: "0.8rem", textDecoration: "none", border: "1px solid var(--accent-color)", color: "var(--text-color)", borderRadius: "6px", fontWeight: 700, background: "#FFFDF9", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <ScrollText size={13} strokeWidth={2} />
                            <span>旅路のしおり</span>
                          </Link>
                          <Link href={`/routes/${ur.route_id}/map?groupId=${ur.group.id}`} className="btn-secondary" style={{ padding: "6px 12px", fontSize: "0.8rem", textDecoration: "none", border: "1px solid var(--primary-color)", color: "var(--primary-color)", borderRadius: "6px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <MapIcon size={13} strokeWidth={2} />
                            <span>連れ立ちマップ</span>
                          </Link>
                        </>
                      )}
                      <Link href={`/routes/${ur.route_id}${ur.group ? `?groupId=${ur.group.id}` : ""}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.8rem", textDecoration: "none" }}>再開する</Link>
                    </div>
                  </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 0", color: "#B3A598" }}>
                <p style={{ margin: "0 0 12px 0", fontSize: "0.9rem" }}>現在、進行中のルートはありません。</p>
                <Link href="/routes" className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", textDecoration: "none", display: "inline-block" }}>ルートを探す</Link>
              </div>
            )}
          </section>

          {/* 2. 最近獲得した称号 */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <Award size={18} strokeWidth={2} color="var(--primary-color)" />
                <span>最近獲得した称号</span>
                {unseenCount > 0 && (
                  <span style={{ backgroundColor: "var(--primary-color)", color: "#fff", fontSize: "0.72rem", padding: "2px 8px", borderRadius: "10px", fontWeight: 800 }}>
                    新着 {unseenCount}
                  </span>
                )}
              </h2>
              <Link href="/badges" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                {unseenCount > 0 ? "称号を受け取る" : "すべて見る"} <ArrowRight size={14} />
              </Link>
            </div>
            
            {badgesLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : earnedBadges.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
                {earnedBadges.map((badge, idx) => (
                  <div key={badge.code + idx} style={{ background: "#FFFDF9", border: "1px solid var(--accent-color, #C9A84C)", borderRadius: "10px", padding: "14px 10px", textAlign: "center" }}>
                    <div style={{ color: "#C9A84C", fontSize: "0.6rem", letterSpacing: "1px", marginBottom: "2px" }}>{"★".repeat(badge.rarity || 1)}</div>
                    <div style={{ color: "#C9A84C", fontSize: "0.85rem", fontWeight: 800, fontFamily: "var(--font-family), serif", margin: "4px 0 2px" }}>{badge.name_ja}</div>
                    <div style={{ color: "#9a8f6f", fontSize: "0.65rem", fontStyle: "italic" }}>{badge.subtitle_en}</div>
                    {badge.acquired_at && (
                      <div style={{ color: "#6f675a", fontSize: "0.6rem", marginTop: "6px" }}>
                        {new Date(badge.acquired_at).toLocaleDateString("ja-JP")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#B3A598" }}>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>獲得した称号はまだありません。街を歩いて、しるしを刻みましょう。</p>
              </div>
            )}
          </section>

          {/* 3. 最近の来訪日記 */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <BookOpen size={18} strokeWidth={2} color="var(--primary-color)" />
                <span>最近の来訪日記</span>
              </h2>
              <Link href="/mypage/diary" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {diaryLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : diary.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {diary.slice(0, 3).map((d) => (
                  <div key={d.id} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "10px" }}>
                    <div style={{ minWidth: "70px", fontSize: "0.75rem", color: "var(--primary-color)", fontWeight: 700 }}>
                      {new Date(d.created_at).toLocaleDateString("ja-JP")}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: "#5C4E43", fontSize: "0.9rem" }}>{d.spotName || "スポット"}</div>
                      <div style={{ fontSize: "0.75rem", color: "#A39687", marginTop: "1px" }}>
                        {d.routeName || ""}
                      </div>
                      {d.memo && (
                        <div style={{ fontSize: "0.8rem", color: "#5C4E43", marginTop: "6px", background: "#F9F6F0", padding: "6px 10px", borderRadius: "6px", borderLeft: "3px solid var(--accent-color)" }}>
                          「{d.memo}」
                        </div>
                      )}
                    </div>
                    {d.photo_url && (
                      <img
                        src={d.photo_url}
                        alt="押印写真"
                        style={{ width: "48px", height: "48px", objectFit: "cover", borderRadius: "8px", border: "1px solid #EBE5D9", flexShrink: 0 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#B3A598" }}>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>押印（来訪）の記録はまだありません。</p>
              </div>
            )}
          </section>

          {/* 4. 保存リスト */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <Bookmark size={18} strokeWidth={2} color="var(--primary-color)" />
                <span>保存したルート</span>
              </h2>
              <Link href="/mypage/bookmarks" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {dataLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : bookmarkedRallies.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
                {bookmarkedRallies.slice(0, 2).map((bm) => (
                  <div key={bm.route_id} style={{ padding: "14px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ background: "rgba(0, 196, 204, 0.1)", color: "var(--secondary-color)", fontSize: "0.7rem", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>保存済み</span>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#5C4E43", margin: "8px 0 4px 0" }}>{bm.routes?.title}</h3>
                      <p style={{ fontSize: "0.7rem", color: "#A39687", margin: 0 }}>保存日: {new Date(bm.created_at).toLocaleDateString("ja-JP")}</p>
                    </div>
                    <div style={{ marginTop: "12px", textAlign: "right" }}>
                      <Link href={`/routes/${bm.route_id}`} className="btn-primary" style={{ padding: "5px 10px", fontSize: "0.75rem", textDecoration: "none" }}>詳細を見る</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#B3A598" }}>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>保存したルートはありません。</p>
              </div>
            )}
          </section>

        </div>
      </main>

      {/* 招待コード入力モーダル（createPortalでbody直下に描画） */}
      {typeof document !== "undefined" &&
        showJoinDialog &&
        createPortal(
          <div 
            style={{ 
              position: "fixed", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              background: "rgba(92, 78, 67, 0.4)", 
              backdropFilter: "blur(4px)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              zIndex: 10000,
              padding: "20px"
            }}
          >
            <div 
              style={{ 
                background: "#FFFDF9", 
                border: "1px solid #EBE5D9", 
                borderRadius: "16px", 
                padding: "24px 20px", 
                width: "100%", 
                maxWidth: "380px", 
                boxShadow: "0 10px 25px rgba(92, 78, 67, 0.15)",
                position: "relative"
              }}
            >
              <button 
                onClick={() => setShowJoinDialog(false)}
                style={{ 
                  position: "absolute", 
                  top: "16px", 
                  right: "16px", 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer",
                  color: "#A39687"
                }}
              >
                <X size={20} />
              </button>

              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 8px 0" }}>
                連れ立ちに加わる
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#8A7E72", margin: "0 0 20px 0", lineHeight: "1.4" }}>
                友達から共有された6桁の招待コードを入力してください。
              </p>

              <form onSubmit={handleJoinGroup}>
                <input 
                  type="text" 
                  value={inviteCodeInput}
                  onChange={(e) => setInviteCodeInput(e.target.value)}
                  placeholder="例: 123 456"
                  maxLength={7}
                  disabled={isJoining}
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    fontSize: "1.2rem", 
                    fontWeight: "bold",
                    textAlign: "center", 
                    letterSpacing: "2px", 
                    border: "1px solid #EBE5D9", 
                    borderRadius: "8px", 
                    background: "#FFFDF9", 
                    color: "var(--text-color)",
                    marginBottom: "16px",
                    outline: "none"
                  }}
                />

                <div style={{ display: "flex", gap: "10px" }}>
                  <button 
                    type="button" 
                    onClick={() => setShowJoinDialog(false)}
                    disabled={isJoining}
                    className="btn-secondary"
                    style={{ flex: 1, padding: "10px", fontSize: "0.85rem", border: "1px solid #EBE5D9", borderRadius: "8px" }}
                  >
                    キャンセル
                  </button>
                  <button 
                    type="submit" 
                    disabled={isJoining}
                    className="btn-primary"
                    style={{ flex: 1, padding: "10px", fontSize: "0.85rem", borderRadius: "8px" }}
                  >
                    {isJoining ? "参加中..." : "参加する"}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
