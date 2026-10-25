"use client";

import Link from "next/link";
import { use, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/context/AuthContext";
import HeaderNav from "@/components/HeaderNav";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { useGroupJourney } from "@/hooks/useGroupJourney";
import { getCategoryStampUrl } from "@/utils/stampHelper";
import {
  ChevronLeft,
  Copy,
  User,
  Check,
  Share2,
  MapPin,
  Users,
  BookOpen,
  ArrowRight,
  ScrollText,
  Footprints,
  Clock,
  Map as MapIcon,
  CheckCircle2,
  Camera,
} from "lucide-react";

interface PageProps {
  params: Promise<{ groupId: string }>;
}

export default function GroupJourneyPage({ params }: PageProps) {
  const { groupId } = use(params);
  const { user, loading: authLoading } = useAuth();
  const { showAlert } = useCustomAlert();

  const {
    groupInfo,
    memberProgressList,
    spotSharedMatrix,
    loading,
    joining,
    notFound,
    joinAndOpenMap,
  } = useGroupJourney(groupId, user?.id, user?.email);

  const [copiedCode, setCopiedCode] = useState(false);
  const [zoomPhotoUrl, setZoomPhotoUrl] = useState<string | null>(null);

  const handleCopyCode = async () => {
    if (!groupInfo?.inviteCode) return;
    try {
      await navigator.clipboard.writeText(groupInfo.inviteCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      await showAlert({
        text: `招待コード: ${groupInfo.inviteCode}`,
        okText: "閉じる",
      });
    }
  };

  const handleShareJourney = async () => {
    if (!groupInfo) return;
    const shareUrl =
      typeof window !== "undefined" ? window.location.href : "";
    const shareText = `「${groupInfo.routeTitle}」を連れ立ちで巡っています（招待コード: ${groupInfo.inviteCode}） #SHUIN #まちのしるし`;

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: `${groupInfo.routeTitle} — 連れ立ち旅路のしおり`,
          text: shareText,
          url: shareUrl,
        });
        return;
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && shareUrl) {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        await showAlert({
          text: "連れ立ち旅路のしおりURLと招待コードをコピーしました。友人に共有しましょう。",
          okText: "閉じる",
        });
      }
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        await showAlert({
          text: "共有リンクのコピーに失敗しました。",
          okText: "確認",
        });
      }
    }
  };

  if (authLoading || loading) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        <p style={{ color: "#A39687", fontSize: "var(--font-size-body)" }}>
          連れ立ち旅路のしおりを開いています...
        </p>
      </div>
    );
  }

  if (notFound || !groupInfo) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        <p style={{ color: "var(--primary-color)", fontWeight: "bold" }}>
          指定された連れ立ちグループが見つかりませんでした。
        </p>
        <Link
          href="/mypage"
          className="btn-secondary"
          style={{ display: "inline-block", marginTop: "20px", textDecoration: "none" }}
        >
          マイページへ戻る
        </Link>
      </div>
    );
  }

  const displayCode = groupInfo.inviteCode
    ? `${groupInfo.inviteCode.slice(0, 3)} ${groupInfo.inviteCode.slice(3)}`
    : "------";
  const stampImg = getCategoryStampUrl(groupInfo.routeCategory);
  const totalSharedMemories = spotSharedMatrix.reduce(
    (sum, s) => sum + s.memories.length,
    0
  );

  return (
    <div className="container">
      <header
        style={{
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="nav-logo">
          <img
            src="/shuin-logo-horizontal.png"
            alt="SHUIN まちのしるし"
            style={{ height: "32px", display: "block", objectFit: "contain" }}
          />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "640px", margin: "0 auto", paddingBottom: "80px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          <Link
            href="/mypage"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#A39687",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: "bold",
            }}
          >
            <ChevronLeft size={16} /> マイページへ戻る
          </Link>

          {groupInfo.routeId && (
            <Link
              href={`/routes/${groupInfo.routeId}`}
              style={{
                fontSize: "0.82rem",
                color: "var(--primary-color)",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              ルートの詳細を見る <ArrowRight size={13} />
            </Link>
          )}
        </div>

        {/* 1. ヘッダー＆招待・アクションしおりカード */}
        <section
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, #FFFDF9 0%, #FAF4E6 100%)",
            border: "1.5px solid var(--accent-color)",
            borderRadius: "18px",
            padding: "24px 22px",
            boxShadow: "0 6px 20px rgba(92, 78, 67, 0.08)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "0.74rem",
                color: "var(--primary-color)",
                fontWeight: 900,
                letterSpacing: "0.08em",
                background: "rgba(199, 68, 46, 0.1)",
                padding: "4px 12px",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <ScrollText size={13} strokeWidth={1.75} />
              連れ立ち旅路のしおり
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "6px",
                background: groupInfo.isActive
                  ? "rgba(201, 168, 76, 0.2)"
                  : "rgba(92, 78, 67, 0.08)",
                color: groupInfo.isActive ? "#6E5314" : "#8A7E72",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {groupInfo.isActive ? (
                <>
                  <Users size={12} strokeWidth={1.75} /> 連れ立ち進行中
                </>
              ) : (
                <>
                  <BookOpen size={12} strokeWidth={1.75} /> 旅路の記録
                </>
              )}
            </span>
          </div>

          <h1
            style={{
              fontSize: "var(--font-size-h2)",
              fontWeight: 900,
              color: "var(--text-color)",
              margin: "6px 0 8px 0",
              lineHeight: 1.4,
              fontFamily: "'Noto Serif JP', serif",
            }}
          >
            {groupInfo.routeTitle}
          </h1>

          {/* 街歩きメトリクスバー */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "0.78rem",
              color: "#5C4E43",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            {groupInfo.routePrefecture && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                  background: "#FFFDF9",
                  border: "1px solid #EBE5D9",
                  padding: "3px 9px",
                  borderRadius: "10px",
                }}
              >
                <MapPin size={12} color="var(--primary-color)" />
                {groupInfo.routePrefecture}
              </span>
            )}
            <span
              style={{
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                padding: "3px 10px",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                <MapPin size={12} strokeWidth={1.75} color="var(--primary-color)" />
                全{groupInfo.walkMetrics.spotCount}箇所
              </span>
              <span>・</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                <Footprints size={12} strokeWidth={1.75} color="var(--primary-color)" />
                約{groupInfo.walkMetrics.distanceKm}km
              </span>
              <span>・</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                <Clock size={12} strokeWidth={1.75} color="var(--primary-color)" />
                約{groupInfo.walkMetrics.estimatedMinutes}分
              </span>
            </span>
          </div>

          {/* 招待コード＆共有ボックス */}
          <div
            style={{
              background: "#FFFDF9",
              border: "1px dashed var(--accent-color)",
              borderRadius: "14px",
              padding: "14px 16px",
              marginBottom: "18px",
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
                  fontSize: "0.72rem",
                  color: "#8A7E72",
                  fontWeight: 700,
                  marginBottom: "2px",
                }}
              >
                合流用の招待コード（6桁）
              </div>
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "var(--text-color)",
                  letterSpacing: "2px",
                  fontFamily: "monospace",
                }}
              >
                {displayCode}
              </div>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={handleCopyCode}
                className="btn-secondary"
                style={{
                  padding: "8px 12px",
                  fontSize: "0.78rem",
                  borderRadius: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: copiedCode ? "var(--accent-color)" : "#FFFDF9",
                  color: copiedCode ? "#fff" : "var(--text-color)",
                }}
              >
                {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                {copiedCode ? "コピー済み" : "コードをコピー"}
              </button>

              <button
                type="button"
                onClick={handleShareJourney}
                className="btn-secondary"
                style={{
                  padding: "8px 12px",
                  fontSize: "0.78rem",
                  borderRadius: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#FFFDF9",
                }}
              >
                <Share2 size={14} />
                しおりを共有
              </button>
            </div>
          </div>

          {/* メインアクション：連れ立ちマップを開いて巡る */}
          <button
            type="button"
            onClick={joinAndOpenMap}
            disabled={joining}
            className="btn-primary"
            style={{
              width: "100%",
              padding: "14px 20px",
              fontSize: "0.95rem",
              fontWeight: 900,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 4px 14px rgba(199, 68, 46, 0.25)",
            }}
          >
            {joining ? (
              "マップを準備しています..."
            ) : (
              <>
                <MapIcon size={17} strokeWidth={1.75} />
                連れ立ちマップを開いて巡る
              </>
            )}
          </button>
        </section>

        {/* 2. 👥 同行メンバーの歩み（進捗一覧） */}
        <section
          className="glass-card"
          style={{
            background: "#FFFDF9",
            border: "1px solid #EBE5D9",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(92, 78, 67, 0.04)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Users size={17} color="var(--primary-color)" /> 同行メンバーの歩み（
              {memberProgressList.length}名）
            </h2>
            <span style={{ fontSize: "0.75rem", color: "#8A7E72", fontWeight: 700 }}>
              共有された思い出 {totalSharedMemories}件
            </span>
          </div>

          {memberProgressList.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {memberProgressList.map((member) => {
                const pct =
                  member.totalSpots > 0
                    ? Math.min(
                        100,
                        Math.round((member.stampedCount / member.totalSpots) * 100)
                      )
                    : 0;
                return (
                  <div
                    key={member.userId}
                    style={{
                      padding: "12px 14px",
                      background: member.isMe
                        ? "rgba(201, 168, 76, 0.08)"
                        : "#FAF6EE",
                      border: member.isMe
                        ? "1px solid var(--accent-color)"
                        : "1px solid #EBE5D9",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                        gap: "8px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: "#FFFDF9",
                            border: "1.5px solid var(--accent-color)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontWeight: 800,
                            fontSize: "0.85rem",
                            color: "var(--text-color)",
                          }}
                        >
                          {member.avatarUrl ? (
                            <img
                              src={member.avatarUrl}
                              alt={member.displayName}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          ) : (
                            <User size={16} color="#8A7E72" />
                          )}
                        </div>
                        <div>
                          <span
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: 800,
                              color: "var(--text-color)",
                            }}
                          >
                            {member.displayName} さん
                          </span>
                          {member.isMe && (
                            <span
                              style={{
                                fontSize: "0.7rem",
                                color: "var(--primary-color)",
                                marginLeft: "6px",
                                fontWeight: 800,
                              }}
                            >
                              （あなた）
                            </span>
                          )}
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 900,
                          color: "var(--primary-color)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <CheckCircle2 size={13} strokeWidth={1.75} />
                        {member.stampedCount} / {member.totalSpots} 箇所
                      </span>
                    </div>

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
                          background:
                            pct >= 100
                              ? "var(--accent-color)"
                              : "var(--primary-color)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: 0 }}>
              まだ同行メンバーの記録がありません。招待コードを共有して一緒に巡りましょう。
            </p>
          )}
        </section>

        {/* 3. 📖 スポット別・みんなの共有しるし絵巻 */}
        <section
          className="glass-card"
          style={{
            background: "#FFFDF9",
            border: "1px solid #EBE5D9",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(92, 78, 67, 0.04)",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontSize: "1.02rem",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 4px 0",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <BookOpen size={17} color="var(--primary-color)" /> スポット別・みんなの共有しるし絵巻
            </h2>
            <p style={{ fontSize: "0.76rem", color: "#8A7E72", margin: 0 }}>
              各スポットで仲間が刻んだ押印と、共有された写真・一言メモがリアルタイムに並びます。
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {spotSharedMatrix.map((spot, idx) => {
              const hasStamped = spot.stampedMembers.length > 0;
              return (
                <div
                  key={spot.spotId}
                  style={{
                    background: hasStamped ? "#FFFDF9" : "#FAF6EE",
                    border: hasStamped
                      ? "1.5px solid var(--accent-color)"
                      : "1px solid #EBE5D9",
                    borderRadius: "14px",
                    padding: "14px 16px",
                  }}
                >
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
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        padding: "2px 9px",
                        borderRadius: "10px",
                        background: hasStamped
                          ? "rgba(199, 68, 46, 0.12)"
                          : "rgba(92, 78, 67, 0.08)",
                        color: hasStamped ? "var(--primary-color)" : "#8A7E72",
                      }}
                    >
                      第 {idx + 1} 番
                    </span>

                    {hasStamped ? (
                      <span
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 800,
                          color: "#6E5314",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <CheckCircle2 size={13} strokeWidth={1.75} color="var(--primary-color)" />
                        {spot.stampedMembers
                          .map((m) => `${m.displayName}さん`)
                          .join("、")}
                        が押印
                      </span>
                    ) : (
                      <span style={{ fontSize: "0.72rem", color: "#A39687" }}>
                        未訪問
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom:
                        spot.storyFragment || spot.memories.length > 0 ? "10px" : 0,
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "#fff",
                        border: hasStamped
                          ? "1.5px dashed var(--primary-color)"
                          : "1px solid #EBE5D9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        opacity: hasStamped ? 1 : 0.35,
                      }}
                    >
                      <img
                        src={stampImg}
                        alt="SHUIN印"
                        style={{ width: "82%", height: "82%", objectFit: "contain" }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: "0.96rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          margin: "0 0 2px 0",
                        }}
                      >
                        {spot.name}
                      </h3>
                      {spot.address && (
                        <div style={{ fontSize: "0.72rem", color: "#8A7E72", display: "flex", alignItems: "center", gap: "3px" }}>
                          <MapPin size={11} strokeWidth={1.75} />
                          {spot.address}
                        </div>
                      )}
                    </div>
                  </div>

                  {hasStamped && spot.storyFragment && (
                    <div
                      style={{
                        background: "#FAF6EE",
                        borderLeft: "3px solid var(--accent-color)",
                        borderRadius: "6px",
                        padding: "8px 12px",
                        fontSize: "0.76rem",
                        color: "#5C4E43",
                        lineHeight: 1.55,
                        marginBottom: spot.memories.length > 0 ? "10px" : 0,
                      }}
                    >
                      {spot.storyFragment}
                    </div>
                  )}

                  {spot.memories.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        marginTop: "6px",
                      }}
                    >
                      {spot.memories.map((mem) => (
                        <div
                          key={mem.id}
                          style={{
                            background: "#FAF6EE",
                            border: "1px dashed var(--accent-color)",
                            borderRadius: "10px",
                            padding: "10px 12px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "6px",
                              fontSize: "0.72rem",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 800,
                                color: "var(--primary-color)",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <Camera size={12} strokeWidth={1.75} />
                              {mem.displayName} さんの思い出
                            </span>
                            <span style={{ color: "#8A7E72" }}>
                              {new Date(mem.createdAt).toLocaleDateString("ja-JP")}
                            </span>
                          </div>

                          {mem.photoUrl && (
                            <img
                              src={mem.photoUrl}
                              alt={`${mem.displayName}さんの写真`}
                              onClick={() => setZoomPhotoUrl(mem.photoUrl)}
                              style={{
                                width: "100%",
                                maxHeight: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                border: "1px solid #EBE5D9",
                                marginBottom: mem.comment ? "6px" : 0,
                                cursor: "pointer",
                              }}
                            />
                          )}

                          {mem.comment && (
                            <div
                              style={{
                                fontSize: "0.82rem",
                                color: "var(--text-color)",
                                fontStyle: "italic",
                                lineHeight: 1.5,
                              }}
                            >
                              「 {mem.comment} 」
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* 写真拡大ライトボックス */}
      {zoomPhotoUrl &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setZoomPhotoUrl(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(6px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
              cursor: "zoom-out",
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
              }}
            />
            <span
              style={{
                color: "#fff",
                marginTop: "14px",
                fontSize: "0.82rem",
                opacity: 0.75,
              }}
            >
              タップして閉じる
            </span>
          </div>,
          document.body
        )}
    </div>
  );
}
