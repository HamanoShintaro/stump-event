"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import { useAuth } from "@/context/AuthContext";
import { useBadgeNotifications } from "@/hooks/useBadgeNotifications";
import { useBadgesProgress, parseLevelBadge } from "@/hooks/useBadgesProgress";
import BadgeReveal from "@/app/routes/[id]/spot/[spotId]/BadgeReveal";

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        borderRadius: "16px",
        border: active ? "1px solid var(--primary-color)" : "1px solid #EBE5D9",
        background: active ? "var(--primary-color)" : "#FFFDF9",
        color: active ? "#fff" : "#5C4E43",
        fontWeight: 700,
        fontSize: "0.85rem",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export default function BadgesPage() {
  const { user, loading } = useAuth();
  const { unseenBadges, markAllSeen, refresh: refreshUnseen } = useBadgeNotifications(user?.id);
  const [ceremonyBadges, setCeremonyBadges] = useState<any[]>([]);

  const {
    shown,
    categoriesMap,
    earnedCount,
    unearnedCount,
    nextMilestones,
    lifelogRanks,
    dataLoading,
    rarityFilter,
    setRarityFilter,
    showUnearned,
    setShowUnearned,
  } = useBadgesProgress(user, loading, refreshUnseen);

  useEffect(() => {
    if (unseenBadges.length > 0 && ceremonyBadges.length === 0) {
      setCeremonyBadges(unseenBadges);
    }
  }, [unseenBadges, ceremonyBadges.length]);

  const rarities = [1, 2, 3, 4, 5];

  if (loading || dataLoading) {
    return (
      <div
        className="container"
        style={{ padding: "60px 0", textAlign: "center", color: "#A39687" }}
      >
        読み込み中...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
        <p style={{ color: "#5C4E43", marginBottom: "16px" }}>
          称号を表示するにはログインが必要です。
        </p>
        <Link
          href="/login?redirect=/badges"
          className="btn-primary"
          style={{ padding: "12px 24px" }}
        >
          ログイン
        </Link>
      </div>
    );
  }

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
      <main style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "60px" }}>
        {ceremonyBadges.length > 0 && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(13, 13, 13, 0.94)",
              backdropFilter: "blur(6px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                background: "#15120c",
                border: "1.5px solid var(--accent-color)",
                borderRadius: "18px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.85)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "24px 20px 12px", textAlign: "center" }}>
                <span
                  style={{
                    color: "var(--accent-color)",
                    fontSize: "0.72rem",
                    letterSpacing: "3px",
                    fontWeight: 900,
                    border: "1px solid var(--accent-color)",
                    padding: "4px 12px",
                    borderRadius: "14px",
                  }}
                >
                  称号授与の儀
                </span>
                <h2
                  style={{
                    color: "#F2E9D5",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    marginTop: "14px",
                    marginBottom: "4px",
                    fontFamily: "serif",
                  }}
                >
                  歩みの積み重ねにより、新たな称号を授かりました
                </h2>
                <p style={{ color: "#9a8f6f", fontSize: "0.8rem", margin: 0 }}>
                  封印をタップして称号を開封してください
                </p>
              </div>
              <BadgeReveal badges={ceremonyBadges} />
              <div style={{ padding: "20px 24px 24px" }}>
                <button
                  onClick={() => {
                    markAllSeen();
                    setCeremonyBadges([]);
                  }}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  称号を受け取る
                </button>
              </div>
            </div>
          </div>
        )}

        <h1
          style={{
            fontSize: "var(--font-size-h1)",
            fontWeight: 800,
            color: "var(--text-color)",
            margin: "12px 0 4px",
          }}
        >
          称号一覧
        </h1>
        <p style={{ color: "#A39687", fontSize: "0.85rem", marginBottom: "6px" }}>
          街を巡り、しるしを重ねた歩みに応じて授かる称号です。
        </p>
        <p style={{ color: "#A39687", fontSize: "0.9rem", marginBottom: "22px" }}>
          取得 <span style={{ color: "var(--primary-color)", fontWeight: 800 }}>{earnedCount}</span>{" "}
          件 ・ 未取得 {unearnedCount} 件
        </p>

        {/* ✨ 次なる境地への歩み（あと少しで授かる称号） */}
        {nextMilestones.length > 0 && (
          <section
            className="glass-card"
            style={{
              background: "#FFFDF9",
              border: "1.5px solid var(--accent-color)",
              borderRadius: "18px",
              padding: "18px 20px",
              marginBottom: "22px",
              boxShadow: "0 4px 16px rgba(201, 168, 76, 0.08)",
            }}
          >
            <div style={{ marginBottom: "12px" }}>
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
                <span>✨</span> 次なる境地への歩み（あと少しで授かる称号）
              </h2>
              <p style={{ fontSize: "0.76rem", color: "#8A7E72", margin: 0 }}>
                これまでの足跡から、もうすぐ到達できる次の称号をご案内します。
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
              }}
            >
              {nextMilestones.map((m) => (
                <div
                  key={m.code}
                  style={{
                    background: "#FAF6EE",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        color: "#6E5314",
                        background: "rgba(201, 168, 76, 0.18)",
                        padding: "2px 8px",
                        borderRadius: "10px",
                      }}
                    >
                      {m.categoryLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--accent-color)",
                        letterSpacing: "1px",
                        fontWeight: 800,
                      }}
                    >
                      {"★".repeat(m.rarity || 1)}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 900,
                      color: "#5C4E43",
                      fontFamily: "'Noto Serif JP', serif",
                    }}
                  >
                    {m.name_ja}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: "#5C4E43",
                    }}
                  >
                    <span>
                      現在 {m.currentCount} / {m.targetCount} 箇所
                    </span>
                    <span style={{ color: "var(--primary-color)", fontWeight: 800 }}>
                      あと {m.remaining} 箇所
                    </span>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "7px",
                      background: "#EBE5D9",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${m.progressPct}%`,
                        height: "100%",
                        background:
                          "linear-gradient(90deg, var(--accent-color), var(--primary-color))",
                        borderRadius: "4px",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 📖 ライフログの境地（歩みのスタイル） */}
        {lifelogRanks.length > 0 && (
          <section
            className="glass-card"
            style={{
              background: "#FFFDF9",
              border: "1px solid #EBE5D9",
              borderRadius: "18px",
              padding: "18px 20px",
              marginBottom: "26px",
            }}
          >
            <div style={{ marginBottom: "12px" }}>
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
                <span>📖</span> ライフログの境地（歩みのスタイル）
              </h2>
              <p style={{ fontSize: "0.76rem", color: "#8A7E72", margin: 0 }}>
                総印数・連れ立ち・記憶の記録・再訪の4つの軸で深まるあなたの街歩きスタイルです。
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {lifelogRanks.map((lr) => (
                <div
                  key={lr.id}
                  style={{
                    background: "#FAF6EE",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.84rem",
                        fontWeight: 800,
                        color: "#5C4E43",
                      }}
                    >
                      {lr.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 900,
                        color: "#FFF",
                        background: "var(--primary-color)",
                        padding: "2px 8px",
                        borderRadius: "10px",
                        fontFamily: "'Noto Serif JP', serif",
                      }}
                    >
                      {lr.rankTitle}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.7rem", color: "#8A7E72" }}>{lr.description}</div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      fontSize: "0.74rem",
                      color: "#5C4E43",
                      fontWeight: 700,
                      marginTop: "2px",
                    }}
                  >
                    <span>
                      累計{" "}
                      <strong
                        style={{
                          fontSize: "1.05rem",
                          color: "var(--primary-color)",
                          fontFamily: "'Noto Serif JP', serif",
                        }}
                      >
                        {lr.count}
                      </strong>{" "}
                      回
                    </span>
                    <span style={{ fontSize: "0.68rem", color: "#8A7E72" }}>
                      {lr.count >= 50
                        ? "最高境地に到達"
                        : `次の境地まで ${lr.count} / ${lr.nextTarget}`}
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
                        width: `${lr.progressPct}%`,
                        height: "100%",
                        background: "var(--accent-color)",
                        borderRadius: "3px",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "28px",
            alignItems: "center",
          }}
        >
          <FilterChip
            active={rarityFilter === null}
            onClick={() => setRarityFilter(null)}
            label="すべて"
          />
          {rarities.map((r) => (
            <FilterChip
              key={r}
              active={rarityFilter === r}
              onClick={() => setRarityFilter(r)}
              label={"★".repeat(r)}
            />
          ))}
          <span
            style={{ width: "1px", height: "20px", background: "#EBE5D9", margin: "0 4px" }}
          />
          <FilterChip
            active={showUnearned}
            onClick={() => setShowUnearned(!showUnearned)}
            label={showUnearned ? "未取得も表示" : "取得済のみ"}
          />
        </div>

        {shown.length === 0 ? (
          <p style={{ textAlign: "center", color: "#B3A598", padding: "40px 0" }}>
            該当する称号はまだありません。街を歩いて、しるしを刻みましょう。
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {Object.entries(categoriesMap).map(([key, cat]) => {
              if (cat.items.length === 0) return null;
              return (
                <section key={key}>
                  <h2
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#5C4E43",
                      borderBottom: "1px solid #EBE5D9",
                      paddingBottom: "8px",
                      marginBottom: "16px",
                      letterSpacing: "1px",
                    }}
                  >
                    {cat.label} ({cat.items.length})
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                      gap: "14px",
                    }}
                  >
                    {cat.items.map((b, i) => {
                      const info = parseLevelBadge(b.code);
                      return b.earned ? (
                        <div
                          key={b.code + i}
                          style={{
                            background: "#121212",
                            border: "1px solid var(--accent-color)",
                            borderRadius: "12px",
                            padding: "18px 14px",
                            textAlign: "center",
                            transition: "transform 0.2s",
                            cursor: "default",
                          }}
                        >
                          <div
                            style={{
                              color: "var(--accent-color)",
                              fontSize: "0.7rem",
                              letterSpacing: "2px",
                            }}
                          >
                            {"★".repeat(b.rarity || 1)}
                          </div>
                          <div
                            style={{
                              color: "var(--accent-color)",
                              fontSize: "1.05rem",
                              fontWeight: 800,
                              fontFamily: "var(--font-family), serif",
                              margin: "8px 0 4px",
                            }}
                          >
                            {b.name_ja}
                          </div>
                          <div
                            style={{
                              color: "#9a8f6f",
                              fontSize: "0.7rem",
                              fontStyle: "italic",
                            }}
                          >
                            {b.subtitle_en}
                          </div>
                          {b.description && (
                            <div
                              style={{
                                color: "#E0D7CD",
                                fontSize: "0.72rem",
                                marginTop: "8px",
                                lineHeight: "1.5",
                              }}
                            >
                              {b.description}
                            </div>
                          )}
                          {info && (
                            <div
                              style={{
                                fontSize: "0.65rem",
                                color: "#8a8270",
                                background: "rgba(201,168,76,0.1)",
                                borderRadius: "4px",
                                padding: "2px 4px",
                                marginTop: "6px",
                                display: "inline-block",
                              }}
                            >
                              現在の境地
                            </div>
                          )}
                          {b.acquired_at && (
                            <div
                              style={{
                                color: "#6f675a",
                                fontSize: "0.65rem",
                                marginTop: "8px",
                              }}
                            >
                              {new Date(b.acquired_at).toLocaleDateString("ja-JP")} 取得
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          key={b.code + i}
                          style={{
                            background: "#161616",
                            border: "1px dashed rgba(201,168,76,0.35)",
                            borderRadius: "12px",
                            padding: "18px 14px",
                            textAlign: "center",
                            filter: "grayscale(1)",
                            opacity: 0.55,
                          }}
                        >
                          <div
                            style={{
                              color: "#7c7567",
                              fontSize: "0.7rem",
                              letterSpacing: "2px",
                            }}
                          >
                            {"★".repeat(b.rarity || 1)}
                          </div>
                          <div
                            style={{
                              color: "#8a8270",
                              fontSize: "1.05rem",
                              fontWeight: 800,
                              fontFamily: "var(--font-family), serif",
                              margin: "8px 0 4px",
                            }}
                          >
                            ◇ {b.name_ja}
                          </div>
                          <div
                            style={{
                              color: "#6f675a",
                              fontSize: "0.7rem",
                              fontStyle: "italic",
                            }}
                          >
                            {b.subtitle_en}
                          </div>
                          {b.description && (
                            <div
                              style={{
                                color: "#5a5347",
                                fontSize: "0.72rem",
                                marginTop: "8px",
                                lineHeight: "1.5",
                              }}
                            >
                              {b.description}
                            </div>
                          )}
                          <div
                            style={{
                              color: "#6f675a",
                              fontSize: "0.62rem",
                              letterSpacing: "1px",
                              marginTop: "8px",
                              fontWeight: "bold",
                            }}
                          >
                            未取得
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
