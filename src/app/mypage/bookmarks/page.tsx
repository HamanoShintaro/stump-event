"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { useAuth } from "@/context/AuthContext";
import { useMyPageData } from "@/hooks/useMyPageData";
import HeaderNav from "@/components/HeaderNav";
import { ChevronLeft, MapPin, BookmarkMinus, ArrowRight } from "lucide-react";

type PlannerFilter = "all" | "quick" | "leisurely" | "unvisited" | "in_progress";

const PLANNER_FILTERS: { value: PlannerFilter; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "quick", label: "🌿 気軽な散歩（〜45分）" },
  { value: "leisurely", label: "🍵 じっくり散策（45分〜）" },
  { value: "unvisited", label: "✨ まだ歩いていないルート" },
  { value: "in_progress", label: "🚶 巡っている途中" },
];

export default function BookmarkedRoutesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [plannerFilter, setPlannerFilter] = useState<PlannerFilter>("all");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const { bookmarkedRallies, dataLoading, removeBookmark } = useMyPageData(user);

  const filteredBookmarks = useMemo(() => {
    return bookmarkedRallies.filter((bm) => {
      const estMin =
        bm.walkMetrics?.estimatedMinutes ?? bm.routes?.estimated_time_min ?? 40;
      const status = bm.progressStatus || "unvisited";

      if (plannerFilter === "quick") {
        return estMin <= 45;
      }
      if (plannerFilter === "leisurely") {
        return estMin > 45;
      }
      if (plannerFilter === "unvisited") {
        return status === "unvisited";
      }
      if (plannerFilter === "in_progress") {
        return status === "in_progress";
      }
      return true;
    });
  }, [bookmarkedRallies, plannerFilter]);

  if (loading || !user) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        読み込み中...
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

      <main style={{ maxWidth: "740px", margin: "0 auto", paddingBottom: "60px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/mypage"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#A39687",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            <ChevronLeft size={16} /> マイページへ戻る
          </Link>
        </div>

        <h1
          style={{
            fontSize: "var(--font-size-h1)",
            fontWeight: 800,
            color: "var(--text-color)",
            margin: "0 0 8px 0",
          }}
        >
          保存したルート（栞）のお散歩プランナー
        </h1>
        <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: "0 0 20px 0" }}>
          いつか歩きたい街や、心惹かれた物語を挟んでおける一覧です。今日の空き時間や進捗に合わせて選ぶことができます。
        </p>

        {/* お散歩プランナー絞り込みバー */}
        {bookmarkedRallies.length > 0 && (
          <div
            className="glass-card"
            style={{
              background: "#FFFDF9",
              border: "1px solid #EBE5D9",
              borderRadius: "14px",
              padding: "12px 14px",
              marginBottom: "22px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#A39687",
                marginRight: "2px",
              }}
            >
              🔖 今日の気分で選ぶ:
            </span>
            {PLANNER_FILTERS.map((pf) => {
              const active = plannerFilter === pf.value;
              return (
                <button
                  key={pf.value}
                  type="button"
                  onClick={() => setPlannerFilter(pf.value)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "16px",
                    border: "1px solid",
                    borderColor: active ? "var(--primary-color)" : "#EBE5D9",
                    background: active ? "var(--primary-color)" : "#FAF6EE",
                    color: active ? "#fff" : "var(--text-color)",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {pf.label}
                </button>
              );
            })}
          </div>
        )}

        {dataLoading ? (
          <p style={{ color: "#A39687" }}>読み込み中...</p>
        ) : bookmarkedRallies.length > 0 ? (
          filteredBookmarks.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                gap: "18px",
              }}
            >
              {filteredBookmarks.map((bm) => {
                const route = bm.routes || {};
                const thumbUrl =
                  route.thumbnail_url ||
                  "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80";
                const spotCount = bm.walkMetrics?.spotCount ?? bm.totalSpots ?? 0;
                const distanceKm = bm.walkMetrics?.distanceKm ?? 0;
                const estMin =
                  bm.walkMetrics?.estimatedMinutes ?? route.estimated_time_min ?? 0;
                const stampedCount = bm.stampedCount ?? 0;
                const totalSpots = bm.totalSpots ?? spotCount;
                const progressStatus: "unvisited" | "in_progress" | "completed" =
                  bm.progressStatus || "unvisited";

                return (
                  <div
                    key={bm.route_id}
                    className="glass-card"
                    style={{
                      padding: 0,
                      background: "#FFFDF9",
                      border: "1px solid #EBE5D9",
                      borderRadius: "16px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 4px 14px rgba(92, 78, 67, 0.05)",
                    }}
                  >
                    {/* サムネイル画像 */}
                    <div
                      style={{
                        height: "150px",
                        backgroundImage: `url(${thumbUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        padding: "12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {route.prefecture && (
                          <span
                            style={{
                              background: "rgba(17, 17, 17, 0.72)",
                              color: "#fff",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              padding: "3px 8px",
                              borderRadius: "6px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <MapPin size={10} />
                            {route.prefecture}
                          </span>
                        )}
                        {route.category && (
                          <span
                            style={{
                              background: "rgba(199, 68, 46, 0.88)",
                              color: "#fff",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              padding: "3px 8px",
                              borderRadius: "6px",
                            }}
                          >
                            {route.category}
                          </span>
                        )}
                      </div>

                      {/* 進捗ステータスバッジ */}
                      <span
                        style={{
                          background: "rgba(255, 253, 249, 0.94)",
                          color:
                            progressStatus === "completed"
                              ? "#6E5314"
                              : progressStatus === "in_progress"
                                ? "var(--primary-color)"
                                : "var(--text-color)",
                          border:
                            progressStatus === "completed"
                              ? "1.5px solid var(--accent-color)"
                              : progressStatus === "in_progress"
                                ? "1.5px solid var(--primary-color)"
                                : "1px solid #EBE5D9",
                          fontSize: "0.68rem",
                          padding: "3px 9px",
                          borderRadius: "8px",
                          fontWeight: 800,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {progressStatus === "completed"
                          ? "💮 踏破済み"
                          : progressStatus === "in_progress"
                            ? `🚶 巡礼中 ${stampedCount}/${totalSpots}箇所`
                            : "✨ 未踏"}
                      </span>
                    </div>

                    {/* 本文 */}
                    <div
                      style={{
                        padding: "18px 20px",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 800,
                            color: "var(--text-color)",
                            margin: "0 0 8px 0",
                            lineHeight: 1.4,
                          }}
                        >
                          {route.title || "ルート"}
                        </h3>

                        {/* 街歩きメトリクスバー ＆ 予算タグ */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "6px",
                            marginBottom: "10px",
                          }}
                        >
                          {spotCount > 0 && (
                            <span
                              style={{
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                color: "#5C4E43",
                                background: "#FAF6EE",
                                border: "1px solid #EBE5D9",
                                padding: "3px 8px",
                                borderRadius: "8px",
                              }}
                            >
                              📍 全{spotCount}箇所 ・ 👣 約{distanceKm}km ・ ⏱️ 約{estMin}分
                            </span>
                          )}
                          {route.budget && (
                            <span
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "#6E5314",
                                background: "rgba(201, 168, 76, 0.14)",
                                padding: "3px 8px",
                                borderRadius: "8px",
                              }}
                            >
                              💴 {route.budget}
                            </span>
                          )}
                        </div>

                        {route.description && (
                          <p
                            style={{
                              fontSize: "0.8rem",
                              color: "#8A7E72",
                              margin: "0 0 10px 0",
                              lineHeight: 1.5,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {route.description}
                          </p>
                        )}
                        <p style={{ fontSize: "0.72rem", color: "#A39687", margin: 0 }}>
                          保存日: {new Date(bm.created_at).toLocaleDateString("ja-JP")}
                        </p>
                      </div>

                      <div
                        style={{
                          marginTop: "16px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => removeBookmark(bm.route_id)}
                          className="btn-secondary"
                          style={{
                            padding: "7px 12px",
                            fontSize: "0.75rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            borderRadius: "8px",
                            borderColor: "#EBE5D9",
                            color: "#8A7E72",
                          }}
                        >
                          <BookmarkMinus size={13} />
                          🔖 保存を解除
                        </button>

                        <Link
                          href={`/routes/${bm.route_id}`}
                          className="btn-primary"
                          style={{
                            padding: "8px 16px",
                            fontSize: "0.8rem",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            borderRadius: "8px",
                          }}
                        >
                          このルートを巡る
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="glass-card"
              style={{
                textAlign: "center",
                padding: "36px 20px",
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "16px",
                color: "#8A7E72",
              }}
            >
              <p style={{ margin: "0 0 12px 0", fontSize: "0.9rem" }}>
                選択した条件に一致する保存ルートがありません。
              </p>
              <button
                type="button"
                onClick={() => setPlannerFilter("all")}
                className="btn-secondary"
                style={{ padding: "8px 16px", fontSize: "0.8rem" }}
              >
                すべての保存ルートを表示する
              </button>
            </div>
          )
        ) : (
          <div style={{ textAlign: "center", padding: "50px 0", color: "#B3A598" }}>
            <p style={{ margin: "0 0 16px 0", fontSize: "0.95rem" }}>
              保存したルートはありません。
            </p>
            <Link
              href="/routes"
              className="btn-primary"
              style={{ padding: "10px 20px", textDecoration: "none" }}
            >
              気になる街のルートを探す
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
