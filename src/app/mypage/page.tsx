"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { isSiteUsageBadge } from "@/utils/badgeEvaluator";
import { useBadgeNotifications } from "@/hooks/useBadgeNotifications";
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
  Compass,
} from "lucide-react";
import { useMyPageData } from "@/hooks/useMyPageData";
import { useLifelogStats } from "@/hooks/useLifelogStats";
import { useCompanionArchive } from "@/hooks/useCompanionArchive";
import { getCategoryStampUrl } from "@/utils/stampHelper";
import styles from "./page.module.css";

// 街の便り（最新のものを1行＋要約で案内）
const LATEST_NEWS = {
  date: "2026.10.25",
  title:
    "【秋の大型更新】「連れ立ち旅路のしおり（共有アルバム）」、「保存したルートのお散歩プランナー」、スポット詳細「街角の余韻」が登場",
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
  const { companionSummaries, recentGroupSessions } = useCompanionArchive(user?.id);
  const {
    activeRallies,
    bookmarkedRallies,
    dataLoading,
    userBadges,
    badgesLoading,
    diary,
    diaryLoading,
    isJoining,
    joinCompanionGroupByCode,
    leaveNarrative,
  } = useMyPageData(user);

  const router = useRouter();
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [inviteCodeInput, setInviteCodeInput] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <LoadingOverlay />;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  // 獲得した称号（サイト利用度に応じた称号）
  const allEarnedSiteBadges = userBadges
    .map((ub) => (ub.badges ? { ...ub.badges, acquired_at: ub.acquired_at } : null))
    .filter((b): b is any => isSiteUsageBadge(b));
  const earnedBadgesPreview = allEarnedSiteBadges.slice(0, 2);

  const handleJoinGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    const redirectUrl = await joinCompanionGroupByCode(inviteCodeInput);
    if (redirectUrl) {
      setShowJoinDialog(false);
      router.push(redirectUrl);
    }
  };

  const displayedCities = lifelogStats.visitedCitiesList.slice(0, 5);
  const hiddenCitiesCount = Math.max(0, lifelogStats.visitedCitiesList.length - displayedCities.length);

  return (
    <div className="container">
      <header
        style={{
          padding: "14px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="nav-logo">
          <img
            src="/shuin-logo-horizontal.png"
            alt="SHUIN まちのしるし"
            style={{ height: "30px", display: "block", objectFit: "contain" }}
          />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "760px", margin: "0 auto", paddingBottom: "88px" }}>
        {/* 上部ナビゲーション（ホームへ戻る ＆ 未読称号/便りの軽量ショートカット） */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            gap: "8px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "2px",
              color: "#8A7E72",
              textDecoration: "none",
              fontSize: "0.84rem",
              fontWeight: 700,
            }}
          >
            <ChevronLeft size={16} /> ホームへ
          </Link>

          <Link
            href="/notifications"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.75rem",
              color: "#5C4E43",
              textDecoration: "none",
              fontWeight: 700,
              background: "rgba(255, 253, 249, 0.85)",
              border: "1px solid #E5DEC9",
              borderRadius: "999px",
              padding: "4px 10px",
            }}
          >
            <Bell size={12} color="var(--primary-color)" />
            <span>街の便り</span>
            <span
              style={{
                fontSize: "0.66rem",
                color: "var(--primary-color)",
                fontWeight: 800,
              }}
            >
              NEW
            </span>
          </Link>
        </div>

        {/* =========================================================
            Stage 1: ページの顔 — プロフィール ＋ 活動実績サマリー（統合ヘッダー）
           ========================================================= */}
        <section
          className="glass-card"
          style={{
            padding: "20px",
            borderRadius: "18px",
            border: "1px solid #E5DEC9",
            background: "linear-gradient(180deg, #FFFDF9 0%, #FAF6EE 100%)",
            boxShadow: "0 4px 16px rgba(92, 78, 67, 0.05)",
            marginBottom: "16px",
          }}
        >
          {/* プロフィール行 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
              <img
                src={
                  user.user_metadata?.avatar_url ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`
                }
                alt="Profile"
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  background: "#FFFDF9",
                  border: "2px solid var(--primary-color)",
                  flexShrink: 0,
                  objectFit: "cover",
                }}
              />
              <div style={{ minWidth: 0 }}>
                <h1
                  style={{
                    fontWeight: 800,
                    fontSize: "1.22rem",
                    color: "var(--text-color)",
                    margin: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.user_metadata?.full_name || "ユーザー"}
                </h1>
                <p
                  style={{
                    fontSize: "0.76rem",
                    color: "#8A7E72",
                    margin: "2px 0 0 0",
                  }}
                >
                  訪れた場所が、あなたのしるしになる。
                </p>
              </div>
            </div>

            <Link
              href="/settings"
              className="btn-secondary"
              style={{
                padding: "7px 12px",
                fontSize: "0.78rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#5C4E43",
                border: "1px solid #D6CEC3",
                background: "#FFFDF9",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            >
              <Settings size={14} />
              <span>設定</span>
            </Link>
          </div>

          {/* 3大実績サマリー（1行・3列の横並び数値） */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              background: "#FFFDF9",
              border: "1px solid #EBE5D9",
              borderRadius: "12px",
              padding: "12px 6px",
            }}
          >
            <Link
              href="/mypage/diary"
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
                borderRight: "1px solid #EBE5D9",
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 900,
                  color: "var(--text-color)",
                  fontFamily: "'Noto Serif JP', serif",
                  lineHeight: 1.1,
                }}
              >
                {lifelogLoading ? "—" : lifelogStats.totalStamps}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#8A7E72",
                  marginTop: "3px",
                }}
              >
                押印
              </div>
            </Link>

            <Link
              href="/mypage/diary"
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
                borderRight: "1px solid #EBE5D9",
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 900,
                  color: "var(--text-color)",
                  fontFamily: "'Noto Serif JP', serif",
                  lineHeight: 1.1,
                }}
              >
                {lifelogLoading ? "—" : lifelogStats.visitedCitiesCount}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#8A7E72",
                  marginTop: "3px",
                }}
              >
                訪れた街
              </div>
            </Link>

            <Link
              href="/mypage/diary"
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 900,
                  color: "var(--text-color)",
                  fontFamily: "'Noto Serif JP', serif",
                  lineHeight: 1.1,
                }}
              >
                {lifelogLoading ? "—" : lifelogStats.completedRoutesCount}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#8A7E72",
                  marginTop: "3px",
                }}
              >
                歩き終えたルート
              </div>
            </Link>
          </div>

          {/* 足跡を残した街チップ（一部のみ抜粋）＆ 称号ショートカット */}
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {displayedCities.length > 0 ? (
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "5px" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#8A7E72",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <MapPin size={12} color="var(--primary-color)" /> 歩いた街:
                </span>
                {displayedCities.map((city) => (
                  <Link
                    key={city}
                    href="/mypage/diary"
                    style={{
                      fontSize: "0.7rem",
                      padding: "2px 8px",
                      borderRadius: "999px",
                      background: "#FFFDF9",
                      border: "1px solid #E5DEC9",
                      color: "var(--text-color)",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {city}
                  </Link>
                ))}
                {hiddenCitiesCount > 0 && (
                  <Link
                    href="/mypage/diary"
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--primary-color)",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    +{hiddenCitiesCount}街 →
                  </Link>
                )}
              </div>
            ) : (
              <span style={{ fontSize: "0.74rem", color: "#8A7E72" }}>
                街を歩いて、最初のしるしを刻みましょう。
              </span>
            )}

            <Link
              href="/badges"
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--primary-color)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                marginLeft: "auto",
              }}
            >
              <Award size={13} />
              <span>
                獲得した称号 ({allEarnedSiteBadges.length})
                {unseenCount > 0 ? ` · 新着${unseenCount}` : ""} →
              </span>
            </Link>
          </div>
        </section>

        {/* =========================================================
            Stage 2: 次の一歩 — 進行中のルート ＆ 連れ立ち合流（最優先アクション）
           ========================================================= */}
        <section
          className="glass-card"
          style={{
            padding: "16px 18px",
            borderRadius: "16px",
            border:
              activeRallies.length > 0
                ? "1.5px solid var(--primary-color)"
                : "1px solid #E5DEC9",
            background: "#FFFDF9",
            boxShadow: "0 4px 14px rgba(92, 78, 67, 0.04)",
            marginBottom: "18px",
          }}
        >
          {dataLoading ? (
            <p style={{ color: "#A39687", fontSize: "0.85rem", margin: 0 }}>
              進行状況を確認しています...
            </p>
          ) : activeRallies.length > 0 ? (
            (() => {
              const ur = activeRallies[0];
              const totalSpots = ur.totalSpots || 0;
              const stampedCount = ur.stampedCount || 0;
              const progressPct =
                totalSpots > 0 ? Math.min(100, Math.round((stampedCount / totalSpots) * 100)) : 0;
              return (
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.74rem",
                        fontWeight: 800,
                        color: "var(--primary-color)",
                        background: "rgba(199, 68, 46, 0.1)",
                        padding: "2px 9px",
                        borderRadius: "999px",
                      }}
                    >
                      <Footprints size={13} strokeWidth={2} />
                      進行中のルート
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.72rem", color: "#8A7E72" }}>
                      <span>
                        開始: {new Date(ur.joined_at).toLocaleDateString("ja-JP")}
                      </span>
                      {ur.remainingHours != null && (
                        <span style={{ color: "var(--primary-color)", fontWeight: 700 }}>
                          残り約{ur.remainingHours}時間
                        </span>
                      )}
                    </div>
                  </div>

                  <h2
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--text-color)",
                      margin: "0 0 8px 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {ur.routes?.title}
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#5C4E43",
                      marginBottom: "5px",
                    }}
                  >
                    <span>押印済みスポット</span>
                    <span>
                      {totalSpots > 0 ? `${stampedCount} / ${totalSpots} 箇所` : `${stampedCount} 箇所`}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "7px",
                      background: "#EBE5D9",
                      borderRadius: "4px",
                      overflow: "hidden",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: `${progressPct}%`,
                        height: "100%",
                        background: "var(--primary-color)",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>

                  {ur.group && (
                    <div
                      style={{
                        marginBottom: "12px",
                        padding: "8px 12px",
                        background: "#FAF6EE",
                        border: "1px dashed var(--accent-color)",
                        borderRadius: "8px",
                        fontSize: "0.76rem",
                        color: "#5C4E43",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontWeight: 700 }}>
                        <Users size={13} color="var(--primary-color)" />
                        {ur.group.partners.length > 0
                          ? `同行中: ${ur.group.partners.map((p: any) => p.displayName).join("、")} さん`
                          : "連れ立ち合流待ち"}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          background: "#FFFDF9",
                          border: "1px solid #EBE5D9",
                          padding: "1px 7px",
                          borderRadius: "4px",
                          color: "var(--primary-color)",
                          fontWeight: 800,
                        }}
                      >
                        招待コード: {ur.group.inviteCode}
                      </span>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() => leaveNarrative(ur.route_id)}
                        className="btn-secondary"
                        style={{
                          padding: "7px 11px",
                          fontSize: "0.75rem",
                          borderRadius: "8px",
                        }}
                      >
                        中断する
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setInviteCodeInput("");
                          setShowJoinDialog(true);
                        }}
                        className="btn-secondary"
                        style={{
                          padding: "7px 11px",
                          fontSize: "0.75rem",
                          borderRadius: "8px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Users size={13} color="var(--primary-color)" />
                        連れ立ちコード入力
                      </button>
                    </div>

                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginLeft: "auto" }}>
                      {ur.group && (
                        <Link
                          href={`/groups/${ur.group.id}`}
                          className="btn-secondary"
                          style={{
                            padding: "8px 12px",
                            fontSize: "0.78rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            borderColor: "var(--accent-color)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <ScrollText size={13} />
                          旅路のしおり
                        </Link>
                      )}
                      <Link
                        href={
                          ur.group
                            ? `/routes/${ur.route_id}/map?groupId=${ur.group.id}`
                            : `/routes/${ur.route_id}`
                        }
                        className="btn-primary"
                        style={{
                          padding: "9px 18px",
                          fontSize: "0.84rem",
                          borderRadius: "8px",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span>続きを歩く</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            /* 進行中ルートがない場合：空箱を残さず「次の一歩」と「連れ立ち参加」を1行に集約 */
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    marginBottom: "2px",
                  }}
                >
                  次の街歩きへ出かけませんか？
                </div>
                <div style={{ fontSize: "0.75rem", color: "#8A7E72" }}>
                  {bookmarkedRallies.length > 0
                    ? `保存したルートが ${bookmarkedRallies.length} 件あります。友達の招待コードからの合流もできます。`
                    : "気になる街の物語を選んで歩くか、招待コードで友達と合流できます。"}
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => {
                    setInviteCodeInput("");
                    setShowJoinDialog(true);
                  }}
                  className="btn-secondary"
                  style={{
                    padding: "8px 13px",
                    fontSize: "0.78rem",
                    borderRadius: "8px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "#FFFDF9",
                  }}
                >
                  <Users size={14} color="var(--primary-color)" />
                  <span>連れ立ちに参加</span>
                </button>
                <Link
                  href={bookmarkedRallies.length > 0 ? "/mypage/bookmarks" : "/routes"}
                  className="btn-primary"
                  style={{
                    padding: "8px 15px",
                    fontSize: "0.8rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Compass size={14} />
                  <span>
                    {bookmarkedRallies.length > 0 ? "保存したルートから選ぶ" : "ルートを探す"}
                  </span>
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================
            Stage 3: アカウントハブ導線（自分の記録・保存・称号の3つの入口）
           ========================================================= */}
        <section style={{ marginBottom: "22px" }} aria-label="自分の記録・保存">
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "#8A7E72",
              marginBottom: "8px",
              letterSpacing: "0.04em",
            }}
          >
            自分の記録・保存
          </div>
          <div className={styles.hubGrid}>
            <Link
              href="/mypage/diary"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#FFFDF9",
                border: "1px solid #E5DEC9",
                borderRadius: "14px",
                padding: "14px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "6px",
                boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <BookOpen size={18} color="var(--primary-color)" />
                <span style={{ fontSize: "0.72rem", color: "#A39687", fontWeight: 700 }}>
                  {lifelogStats.totalStamps}印 ›
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                  }}
                >
                  SHUIN帳
                </div>
                <div style={{ fontSize: "0.68rem", color: "#8A7E72", marginTop: "2px" }}>
                  押印と旅のアルバム
                </div>
              </div>
            </Link>

            <Link
              href="/mypage/bookmarks"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#FFFDF9",
                border: "1px solid #E5DEC9",
                borderRadius: "14px",
                padding: "14px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "6px",
                boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Bookmark size={18} color="var(--primary-color)" />
                <span style={{ fontSize: "0.72rem", color: "#A39687", fontWeight: 700 }}>
                  {bookmarkedRallies.length}件 ›
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                  }}
                >
                  保存したルート
                </div>
                <div style={{ fontSize: "0.68rem", color: "#8A7E72", marginTop: "2px" }}>
                  これから歩きたい栞
                </div>
              </div>
            </Link>

            <Link
              href="/badges"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#FFFDF9",
                border: unseenCount > 0 ? "1.5px solid var(--primary-color)" : "1px solid #E5DEC9",
                borderRadius: "14px",
                padding: "14px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "6px",
                boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Award size={18} color="var(--accent-color)" />
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: unseenCount > 0 ? "var(--primary-color)" : "#A39687",
                    fontWeight: 800,
                  }}
                >
                  {unseenCount > 0 ? `新着${unseenCount} ›` : `${allEarnedSiteBadges.length}個 ›`}
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                  }}
                >
                  獲得した称号
                </div>
                <div style={{ fontSize: "0.68rem", color: "#8A7E72", marginTop: "2px" }}>
                  歩みで授かった証
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* =========================================================
            Stage 4: 記録の振り返りと次の候補（PC 2カラム 7:5 / 表示形式に強弱）
           ========================================================= */}
        <div className={styles.splitColumns}>
          {/* 左カラム：これまでの記録（最近の押印罫線リスト ＆ 記憶の一頁） */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* 最近の押印（帳面のような罫線リスト） */}
            <section
              style={{
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "16px",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <BookOpen size={16} color="var(--primary-color)" />
                  <span>最近の押印</span>
                </h2>
                <Link
                  href="/mypage/diary"
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--primary-color)",
                    fontWeight: 800,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  SHUIN帳へ <ArrowRight size={13} />
                </Link>
              </div>

              {diaryLoading ? (
                <p style={{ color: "#A39687", fontSize: "0.84rem", margin: 0 }}>読み込み中...</p>
              ) : diary.length > 0 ? (
                <div>
                  {diary.slice(0, 4).map((d, idx, arr) => (
                    <Link
                      key={d.id}
                      href="/mypage/diary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom: idx < arr.length - 1 ? "1px dashed #EBE5D9" : "none",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "0.7rem",
                              color: "#8A7E72",
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            {new Date(d.created_at).toLocaleDateString("ja-JP")}
                          </span>
                          <span
                            style={{
                              fontSize: "0.86rem",
                              fontWeight: 800,
                              color: "var(--text-color)",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {d.spotName || "スポット"}
                          </span>
                        </div>
                        {d.routeName && (
                          <div
                            style={{
                              fontSize: "0.72rem",
                              color: "#8A7E72",
                              marginTop: "2px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {d.routeName}
                          </div>
                        )}
                      </div>
                      {d.photo_url ? (
                        <img
                          src={d.photo_url}
                          alt="思い出写真"
                          style={{
                            width: "38px",
                            height: "38px",
                            objectFit: "cover",
                            borderRadius: "6px",
                            border: "1px solid #EBE5D9",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <span style={{ fontSize: "0.75rem", color: "#B3A598" }}>›</span>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <p style={{ margin: "12px 0 0 0", fontSize: "0.84rem", color: "#8A7E72" }}>
                  まだ押印の記録がありません。
                </p>
              )}
            </section>

            {/* 記憶の一頁（写真と短い言葉を情緒的に見せるハイライト） */}
            {memoryHighlight && (
              <section
                style={{
                  padding: "18px 20px",
                  borderRadius: "16px",
                  border: "1px solid var(--accent-color)",
                  background: "linear-gradient(135deg, #FFFDF9 0%, #FAF4E6 100%)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--text-color)",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Sparkles size={15} color="var(--primary-color)" />
                    <span>記憶の一頁（あの日のしるし）</span>
                  </h2>
                  {hasMultipleHighlights && (
                    <button
                      type="button"
                      onClick={nextMemoryHighlight}
                      style={{
                        padding: "4px 10px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "999px",
                        border: "1px solid var(--accent-color)",
                        background: "#FFFDF9",
                        color: "#5C4E43",
                        cursor: "pointer",
                      }}
                    >
                      <RefreshCw size={11} />
                      <span>めくる</span>
                    </button>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "#FFFDF9",
                      border: "1px solid #EBE5D9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={getCategoryStampUrl(memoryHighlight.routeCategory)}
                      alt="SHUIN印影"
                      style={{ width: "42px", height: "42px", objectFit: "contain" }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        flexWrap: "wrap",
                        fontSize: "0.72rem",
                        color: "var(--primary-color)",
                        fontWeight: 800,
                      }}
                    >
                      <span>
                        {new Date(memoryHighlight.visitedAt).toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {memoryHighlight.spotArea && (
                        <span style={{ color: "#8A7E72", fontWeight: 700 }}>
                          · {memoryHighlight.spotArea}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "0.94rem",
                        fontWeight: 800,
                        color: "var(--text-color)",
                        marginTop: "2px",
                      }}
                    >
                      {memoryHighlight.spotName}
                    </div>
                    {(memoryHighlight.memo || memoryHighlight.spotFragment) && (
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "#5C4E43",
                          marginTop: "6px",
                          lineHeight: 1.5,
                          borderLeft: "2px solid var(--accent-color)",
                          paddingLeft: "8px",
                        }}
                      >
                        {memoryHighlight.memo
                          ? `「${memoryHighlight.memo}」`
                          : memoryHighlight.spotFragment}
                      </div>
                    )}
                  </div>

                  {memoryHighlight.photoUrl && (
                    <img
                      src={memoryHighlight.photoUrl}
                      alt={memoryHighlight.spotName}
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: "1px solid #EBE5D9",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              </section>
            )}
          </div>

          {/* 右カラム：連れ立ちの記録 ＆ 保存したルート ＆ 最近の称号 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* 連れ立ちの記録（コンパクト統合） */}
            {(companionSummaries.length > 0 || recentGroupSessions.length > 0) && (
              <section
                style={{
                  background: "#FFFDF9",
                  border: "1px solid #EBE5D9",
                  borderRadius: "16px",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--text-color)",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Users size={16} color="var(--primary-color)" />
                    <span>連れ立ちの記録</span>
                  </h2>
                  <Link
                    href="/mypage/diary?view=album"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--primary-color)",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    アルバムへ →
                  </Link>
                </div>

                {/* 一緒に歩いた仲間ピル */}
                {companionSummaries.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: recentGroupSessions.length > 0 ? "12px" : 0,
                    }}
                  >
                    {companionSummaries.map((comp) => (
                      <Link
                        key={comp.companionName}
                        href={`/mypage/diary?companion=${encodeURIComponent(comp.companionName)}`}
                        style={{
                          textDecoration: "none",
                          color: "var(--text-color)",
                          background: "#FAF6EE",
                          border: "1px solid #E5DEC9",
                          borderRadius: "999px",
                          padding: "4px 10px",
                          fontSize: "0.74rem",
                          fontWeight: 800,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span>{comp.companionName} さん</span>
                        <span style={{ fontSize: "0.68rem", color: "#8A7E72", fontWeight: 700 }}>
                          ({comp.sharedStampsCount})
                        </span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 最近の旅路（直近2件までコンパクト表示） */}
                {recentGroupSessions.slice(0, 2).map((sess, idx, arr) => (
                  <div
                    key={sess.groupId}
                    style={{
                      padding: "8px 0",
                      borderTop: idx === 0 && companionSummaries.length > 0 ? "1px dashed #EBE5D9" : "none",
                      borderBottom: idx < arr.length - 1 ? "1px dashed #EBE5D9" : "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {sess.routeTitle}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "#8A7E72", marginTop: "1px" }}>
                        {new Date(sess.walkedAt).toLocaleDateString("ja-JP")}
                        {sess.partnerNames.length > 0
                          ? ` · ${sess.partnerNames.join("、")} さんと同行`
                          : ""}
                      </div>
                    </div>
                    <Link
                      href={`/groups/${sess.groupId}`}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--primary-color)",
                        textDecoration: "none",
                        background: "#FAF6EE",
                        border: "1px solid var(--accent-color)",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      しおり ›
                    </Link>
                  </div>
                ))}
              </section>
            )}

            {/* 保存したルート（次に歩きたい2件プレビュー） */}
            <section
              style={{
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "16px",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Bookmark size={16} color="var(--primary-color)" />
                  <span>保存したルート</span>
                </h2>
                <Link
                  href="/mypage/bookmarks"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--primary-color)",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  すべて見る →
                </Link>
              </div>

              {dataLoading ? (
                <p style={{ color: "#A39687", fontSize: "0.84rem", margin: 0 }}>読み込み中...</p>
              ) : bookmarkedRallies.length > 0 ? (
                <div>
                  {bookmarkedRallies.slice(0, 2).map((bm, idx, arr) => (
                    <Link
                      key={bm.route_id}
                      href={`/routes/${bm.route_id}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "8px",
                        padding: "9px 0",
                        borderBottom: idx < arr.length - 1 ? "1px dashed #EBE5D9" : "none",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: "0.84rem",
                            fontWeight: 800,
                            color: "var(--text-color)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {bm.routes?.title}
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "#8A7E72", marginTop: "2px" }}>
                          保存日: {new Date(bm.created_at).toLocaleDateString("ja-JP")}
                        </div>
                      </div>
                      <span style={{ fontSize: "0.75rem", color: "var(--primary-color)", fontWeight: 800 }}>
                        詳細 ›
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#8A7E72" }}>
                  保存したルートはありません。
                </p>
              )}
            </section>

            {/* 最近獲得した称号（最新2件コンパクト表示） */}
            <section
              style={{
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "16px",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Award size={16} color="var(--accent-color)" />
                  <span>最近獲得した称号</span>
                </h2>
                <Link
                  href="/badges"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--primary-color)",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  すべて見る →
                </Link>
              </div>

              {badgesLoading ? (
                <p style={{ color: "#A39687", fontSize: "0.84rem", margin: 0 }}>読み込み中...</p>
              ) : earnedBadgesPreview.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                  {earnedBadgesPreview.map((badge, idx) => (
                    <Link
                      key={badge.code + idx}
                      href="/badges"
                      style={{
                        textDecoration: "none",
                        background: "#FAF6EE",
                        border: "1px solid var(--accent-color)",
                        borderRadius: "10px",
                        padding: "10px 8px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ color: "var(--accent-color)", fontSize: "0.6rem" }}>
                        {"★".repeat(badge.rarity || 1)}
                      </div>
                      <div
                        style={{
                          color: "var(--text-color)",
                          fontSize: "0.8rem",
                          fontWeight: 800,
                          marginTop: "2px",
                        }}
                      >
                        {badge.name_ja}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#8A7E72" }}>
                  獲得した称号はまだありません。
                </p>
              )}
            </section>
          </div>
        </div>

        {/* =========================================================
            Stage 5: 下部補助導線（街の便り ＆ アカウント設定・ログアウト）
           ========================================================= */}
        <footer
          style={{
            marginTop: "24px",
            paddingTop: "16px",
            borderTop: "1px dashed #D6CEC3",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Link
            href="/notifications"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              background: "rgba(255, 253, 249, 0.85)",
              border: "1px solid #EBE5D9",
              borderRadius: "12px",
              textDecoration: "none",
              color: "var(--text-color)",
              fontSize: "0.78rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0, flex: 1 }}>
              <Bell size={14} color="var(--primary-color)" style={{ flexShrink: 0 }} />
              <span style={{ color: "#8A7E72", fontSize: "0.72rem", flexShrink: 0 }}>
                {LATEST_NEWS.date}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {LATEST_NEWS.title}
              </span>
            </div>
            <span style={{ color: "var(--primary-color)", fontWeight: 800, flexShrink: 0 }}>
              一覧 ›
            </span>
          </Link>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 4px",
              fontSize: "0.78rem",
            }}
          >
            <Link
              href="/settings"
              style={{
                color: "#5C4E43",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Settings size={14} />
              アカウント設定
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                color: "#D9655B",
                fontSize: "0.78rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 6px",
              }}
            >
              <LogOut size={14} />
              ログアウト
            </button>
          </div>
        </footer>
      </main>

      {/* 招待コード入力モーダル（createPortalでbody直下に描画） */}
      {typeof document !== "undefined" &&
        showJoinDialog &&
        createPortal(
          <div
            onClick={() => setShowJoinDialog(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(92, 78, 67, 0.45)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "16px",
                padding: "24px 20px",
                width: "100%",
                maxWidth: "380px",
                boxShadow: "0 10px 25px rgba(92, 78, 67, 0.15)",
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() => setShowJoinDialog(false)}
                aria-label="閉じる"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#A39687",
                }}
              >
                <X size={20} />
              </button>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#5C4E43",
                  margin: "0 0 8px 0",
                }}
              >
                連れ立ちに加わる
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#8A7E72",
                  margin: "0 0 20px 0",
                  lineHeight: 1.4,
                }}
              >
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
                    outline: "none",
                  }}
                />

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setShowJoinDialog(false)}
                    disabled={isJoining}
                    className="btn-secondary"
                    style={{
                      flex: 1,
                      padding: "10px",
                      fontSize: "0.85rem",
                      border: "1px solid #EBE5D9",
                      borderRadius: "8px",
                    }}
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    disabled={isJoining}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: "10px",
                      fontSize: "0.85rem",
                      borderRadius: "8px",
                    }}
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
