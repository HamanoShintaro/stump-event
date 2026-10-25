"use client";

import React from "react";
import Link from "next/link";
import { Compass, Footprints, Star, MapPin } from "lucide-react";
import { useNearbyDiscovery, DiscoveryTabMode } from "@/hooks/useNearbyDiscovery";
import type { RouteStat } from "@/utils/routeStats";

interface NearbyDiscoverySectionProps {
  routes: any[];
  statsMap?: Record<string, RouteStat>;
}

export default function NearbyDiscoverySection({
  routes,
  statsMap = {},
}: NearbyDiscoverySectionProps) {
  const {
    userLocation,
    locating,
    locationError,
    requestNearbyLocation,
    activeTab,
    setActiveTab,
    displayedRoutes,
  } = useNearbyDiscovery(routes);

  if (!routes || routes.length === 0) return null;

  const handleTabClick = (tab: DiscoveryTabMode) => {
    if (tab === "nearby" && !userLocation) {
      requestNearbyLocation();
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <section
      className="container"
      style={{
        padding: "16px 20px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: "24px 20px",
          border: "1.5px solid var(--accent-color)",
          borderRadius: "20px",
          background:
            "linear-gradient(145deg, rgba(255,253,248,0.96) 0%, rgba(246,239,224,0.92) 100%)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        {/* ヘッダー部分 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "18px",
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                color: "var(--primary-color)",
                background: "rgba(199, 68, 46, 0.08)",
                border: "1px solid rgba(199, 68, 46, 0.22)",
                padding: "4px 12px",
                borderRadius: "999px",
                marginBottom: "8px",
                letterSpacing: "0.08em",
              }}
            >
              <Compass size={14} />
              <span>ご近所の再発見コンパス</span>
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 6px 0",
                lineHeight: 1.4,
              }}
            >
              🧭 少し外へ出て、街を再発見する
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-body)",
                color: "var(--text-color)",
                opacity: 0.78,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              遠くの観光地へ出かけなくても、いつもの街角や隣の駅に、まだ知らない物語が眠っています。
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              onClick={requestNearbyLocation}
              disabled={locating}
              className={userLocation ? "btn-secondary" : "btn-primary"}
              style={{
                padding: "10px 16px",
                fontSize: "0.85rem",
                fontWeight: 800,
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                cursor: locating ? "wait" : "pointer",
              }}
            >
              <span>📍</span>
              <span>
                {locating
                  ? "現在地を測位中..."
                  : userLocation
                    ? "現在地から再検索"
                    : "現在地から近いルートを見つける"}
              </span>
            </button>
          </div>
        </div>

        {locationError && (
          <div
            style={{
              padding: "10px 14px",
              marginBottom: "14px",
              borderRadius: "10px",
              background: "rgba(199, 68, 46, 0.08)",
              border: "1px solid rgba(199, 68, 46, 0.25)",
              color: "var(--primary-color)",
              fontSize: "var(--font-size-small)",
              fontWeight: 700,
            }}
          >
            {locationError}
          </div>
        )}

        {/* シーン切り替えタブ */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          <button
            type="button"
            onClick={() => handleTabClick("quick")}
            className={activeTab === "quick" ? "btn-primary" : "btn-secondary"}
            style={{
              padding: "7px 14px",
              fontSize: "0.8rem",
              fontWeight: 700,
              borderRadius: "999px",
            }}
          >
            🌿 30〜45分の気軽な散歩
          </button>
          <button
            type="button"
            onClick={() => handleTabClick("immersive")}
            className={activeTab === "immersive" ? "btn-primary" : "btn-secondary"}
            style={{
              padding: "7px 14px",
              fontSize: "0.8rem",
              fontWeight: 700,
              borderRadius: "999px",
            }}
          >
            🍵 じっくり街歩き
          </button>
          <button
            type="button"
            onClick={() => handleTabClick("nearby")}
            className={activeTab === "nearby" ? "btn-primary" : "btn-secondary"}
            style={{
              padding: "7px 14px",
              fontSize: "0.8rem",
              fontWeight: 700,
              borderRadius: "999px",
            }}
          >
            📍 現在地から近い順
          </button>
        </div>

        {/* 提案ルート一覧 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {displayedRoutes.map((route) => {
            const stats = statsMap[route.id];
            return (
              <Link
                key={route.id}
                href={`/routes/${route.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  background: "var(--bg-color)",
                  border: "1px solid rgba(201, 168, 76, 0.45)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ position: "relative", height: "136px", overflow: "hidden" }}>
                  <img
                    src={
                      route.thumbnail_url ||
                      "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                    }
                    alt={route.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    {route.prefecture && (
                      <span
                        style={{
                          background: "rgba(255,255,255,0.92)",
                          color: "var(--text-color)",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          padding: "3px 8px",
                          borderRadius: "999px",
                        }}
                      >
                        {route.prefecture}
                      </span>
                    )}
                    {route.distanceFromUserKm !== null && (
                      <span
                        style={{
                          background: "var(--primary-color)",
                          color: "#FFF",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          padding: "3px 10px",
                          borderRadius: "999px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                        }}
                      >
                        🧭 現在地から約 {route.distanceFromUserKm} km
                      </span>
                    )}
                  </div>

                  {/* 下部オーバーレイ */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "20px 10px 6px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%)",
                      color: "#FFF",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                    }}
                  >
                    <span>
                      👣 全{route.walkMetrics.spotCount}箇所 ・ 約{route.walkMetrics.distanceKm}km（約
                      {route.walkMetrics.estimatedMinutes}分）
                    </span>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      {stats && stats.participants > 0 && (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
                          <Footprints size={11} />
                          {stats.participants}
                        </span>
                      )}
                      {stats && stats.favorites > 0 && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "2px",
                            color: "var(--accent-color)",
                          }}
                        >
                          <Star size={11} fill="currentColor" />
                          {stats.favorites}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 14px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--text-color)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {route.title}
                  </h3>

                  {route.nearestSpotName && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--primary-color)",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <MapPin size={12} />
                      <span>
                        {route.walkMinutesToStart !== null
                          ? `最初のスポット「${route.nearestSpotName}」まで徒歩約 ${route.walkMinutesToStart} 分`
                          : `起点スポット：${route.nearestSpotName}`}
                      </span>
                    </div>
                  )}

                  {route.description && (
                    <p
                      style={{
                        fontSize: "0.76rem",
                        color: "var(--text-color)",
                        opacity: 0.72,
                        margin: 0,
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
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
