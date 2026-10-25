"use client";

import React from "react";
import Link from "next/link";
import { Compass, Footprints, Star, MapPin, Sparkles, X } from "lucide-react";
import { useNearbyDiscovery, DiscoveryTabMode } from "@/hooks/useNearbyDiscovery";
import {
  useDailyWalkOracle,
  MOOD_FILTER_OPTIONS,
} from "@/hooks/useDailyWalkOracle";
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
    timeScene,
    moodFilter,
    setMoodFilter,
    moodFilteredRoutes,
    oracleResult,
    isOracleOpen,
    drawWalkOracle,
    redrawWalkOracle,
    closeOracleModal,
  } = useDailyWalkOracle(routes);

  const {
    userLocation,
    locating,
    locationError,
    requestNearbyLocation,
    activeTab,
    setActiveTab,
    displayedRoutes,
  } = useNearbyDiscovery(moodFilteredRoutes);

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
        {/* 時間帯別・今日の街歩きキュレーションバナー ＆ 街歩きみくじボタン */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            padding: "14px 16px",
            marginBottom: "18px",
            borderRadius: "14px",
            background: "rgba(201, 168, 76, 0.12)",
            border: "1px solid rgba(201, 168, 76, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1 1 260px" }}>
            <span
              style={{
                fontSize: "1.75rem",
                lineHeight: 1,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {timeScene.icon}
            </span>
            <div>
              <div
                style={{
                  fontSize: "var(--font-size-body)",
                  fontWeight: 800,
                  color: "var(--text-color)",
                  marginBottom: "2px",
                }}
              >
                {timeScene.title}
              </div>
              <div
                style={{
                  fontSize: "var(--font-size-small)",
                  color: "var(--text-color)",
                  opacity: 0.78,
                  lineHeight: 1.5,
                }}
              >
                {timeScene.subtitle}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={drawWalkOracle}
            className="btn-primary"
            style={{
              padding: "10px 18px",
              fontSize: "0.84rem",
              fontWeight: 800,
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 4px 14px rgba(199, 68, 46, 0.25)",
              cursor: "pointer",
            }}
          >
            <span>🎴</span>
            <span>今日の街歩きみくじ（縁結び）を引く</span>
          </button>
        </div>

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

        {/* 気分・テーマ別フィルターチップ */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "6px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "var(--font-size-small)",
              fontWeight: 800,
              color: "var(--text-color)",
              opacity: 0.75,
              marginRight: "4px",
            }}
          >
            今の気分:
          </span>
          {MOOD_FILTER_OPTIONS.map((opt) => {
            const isSelected = moodFilter === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setMoodFilter(opt.value)}
                className={isSelected ? "btn-primary" : "btn-secondary"}
                style={{
                  padding: "5px 12px",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  borderRadius: "999px",
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

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
        {displayedRoutes.length > 0 ? (
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
                            color: "var(--bg-color)",
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
                        color: "var(--bg-color)",
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
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "24px 16px",
              background: "var(--bg-color)",
              borderRadius: "14px",
              border: "1px dashed rgba(201, 168, 76, 0.5)",
            }}
          >
            <p
              style={{
                fontSize: "var(--font-size-body)",
                color: "var(--text-color)",
                opacity: 0.8,
                marginBottom: "10px",
              }}
            >
              選択中の気分に合うルートが見つかりませんでした。
            </p>
            <button
              type="button"
              onClick={() => setMoodFilter("all")}
              className="btn-secondary"
              style={{
                padding: "6px 16px",
                fontSize: "0.8rem",
                borderRadius: "999px",
              }}
            >
              すべての気分を表示する
            </button>
          </div>
        )}
      </div>

      {/* 🎴 今日の街歩き縁結び（おみくじ結果モーダル） */}
      {isOracleOpen && oracleResult && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="walk-oracle-title"
          onClick={closeOracleModal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(30, 24, 20, 0.62)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "440px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "var(--bg-color)",
              border: "2px solid var(--accent-color)",
              borderRadius: "22px",
              padding: "24px 20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={closeOracleModal}
              aria-label="閉じる"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "transparent",
                border: "none",
                color: "var(--text-color)",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              <X size={20} />
            </button>

            {/* おみくじ朱印ヘッダー */}
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: "999px",
                  border: "1.5px solid var(--primary-color)",
                  background: "rgba(199, 68, 46, 0.08)",
                  color: "var(--primary-color)",
                  fontSize: "var(--font-size-small)",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}
              >
                🎴 本日の街歩き縁結び
              </div>
              <div
                id="walk-oracle-title"
                style={{
                  fontSize: "var(--font-size-h1)",
                  fontWeight: 900,
                  color: "var(--primary-color)",
                  letterSpacing: "0.14em",
                  margin: "2px 0 4px",
                }}
              >
                【 {oracleResult.fortuneLabel} 】
              </div>
              <p
                style={{
                  fontSize: "var(--font-size-small)",
                  color: "var(--text-color)",
                  opacity: 0.75,
                  margin: 0,
                }}
              >
                今日あなたとご縁が結ばれた街歩きの物語はこちらです
              </p>
            </div>

            {/* 選ばれたルートカード */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1.5px solid var(--accent-color)",
                background: "rgba(255,255,255,0.7)",
                marginBottom: "14px",
              }}
            >
              <div style={{ position: "relative", height: "148px" }}>
                <img
                  src={
                    oracleResult.route.thumbnail_url ||
                    "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                  }
                  alt={oracleResult.route.title}
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
                    gap: "6px",
                  }}
                >
                  {oracleResult.route.prefecture && (
                    <span
                      style={{
                        background: "var(--bg-color)",
                        color: "var(--text-color)",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      {oracleResult.route.prefecture}
                    </span>
                  )}
                  {oracleResult.route.category && (
                    <span
                      style={{
                        background: "var(--accent-color)",
                        color: "var(--text-color)",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      {oracleResult.route.category}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ padding: "12px 14px" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    margin: "0 0 6px 0",
                    lineHeight: 1.4,
                  }}
                >
                  {oracleResult.route.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    color: "var(--primary-color)",
                    marginBottom: "6px",
                  }}
                >
                  📍 全{oracleResult.route.walkMetrics.spotCount}箇所 ・ 👣 約
                  {oracleResult.route.walkMetrics.distanceKm}km ・ ⏱️ 約
                  {oracleResult.route.walkMetrics.estimatedMinutes}分
                </div>
                {oracleResult.route.description && (
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-color)",
                      opacity: 0.8,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {oracleResult.route.description}
                  </p>
                )}
              </div>
            </div>

            {/* 今日の注目スポット ＆ 散策の心得 */}
            <div
              style={{
                borderRadius: "14px",
                padding: "12px 14px",
                background: "rgba(201, 168, 76, 0.12)",
                border: "1px solid rgba(201, 168, 76, 0.35)",
                marginBottom: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    fontWeight: 800,
                    color: "var(--primary-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginBottom: "2px",
                  }}
                >
                  <Sparkles size={13} />
                  <span>✨ 今日の注目スポット</span>
                </div>
                <div
                  style={{
                    fontSize: "0.86rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                  }}
                >
                  {oracleResult.luckySpot.name}
                </div>
                {oracleResult.luckySpot.address && (
                  <div
                    style={{
                      fontSize: "var(--font-size-small)",
                      color: "var(--text-color)",
                      opacity: 0.72,
                    }}
                  >
                    {oracleResult.luckySpot.address}
                  </div>
                )}
              </div>

              <div
                style={{
                  borderTop: "1px dashed rgba(201, 168, 76, 0.45)",
                  paddingTop: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    marginBottom: "2px",
                  }}
                >
                  📜 本日の散策の心得
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-color)",
                    lineHeight: 1.55,
                  }}
                >
                  {oracleResult.walkTip}
                </div>
              </div>
            </div>

            {/* アクションボタン */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link
                href={`/routes/${oracleResult.route.id}`}
                onClick={closeOracleModal}
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  padding: "12px 16px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                }}
              >
                このルートを見る ▸
              </Link>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  type="button"
                  onClick={redrawWalkOracle}
                  className="btn-secondary"
                  style={{
                    flex: 1,
                    padding: "9px 12px",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  🔄 もういちど縁を結ぶ（引き直す）
                </button>
                <button
                  type="button"
                  onClick={closeOracleModal}
                  className="btn-secondary"
                  style={{
                    padding: "9px 16px",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
