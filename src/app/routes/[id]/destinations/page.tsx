"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { MapPin, Compass, Footprints, Map as MapIcon, Sparkles } from "lucide-react";
import { useRouteDestinations } from "@/hooks/useRouteDestinations";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import BackButton from "@/components/BackButton";

export default function DestinationsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const urlGroupId = searchParams.get("groupId");

  const {
    user,
    route,
    enrichedSpots,
    stampedCount,
    totalSpots,
    recommendedSpot,
    recommendationReason,
    effectiveGroupId,
    partnerNames,
    userLocation,
    locating,
    requestUserLocation,
    loading,
    settingSpotId,
    selectDestination,
  } = useRouteDestinations(resolvedParams.id, urlGroupId);

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>
        読み込み中...
      </div>
    );
  }

  if (!route) {
    return notFound();
  }

  const progressPct =
    totalSpots > 0 ? Math.min(100, Math.round((stampedCount / totalSpots) * 100)) : 0;

  const mapHref = `/routes/${route.id}/map${
    effectiveGroupId ? `?groupId=${effectiveGroupId}` : ""
  }`;

  return (
    <div className="container">
      <header
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BackButton href={`/routes/${resolvedParams.id}`} />
        <HeaderNav />
      </header>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>次の行き先を選択</h1>
        <p className={styles.pageDesc}>
          街の風景を味わいながら、次に訪れる場所を選んで歩みを進めましょう。
        </p>

        {/* 1. ルート進捗＆コンパス操作ヘッダーカード */}
        <div
          className="glass-card"
          style={{
            padding: "18px 20px",
            borderRadius: "16px",
            border: "1.5px solid var(--accent-color)",
            background: "var(--bg-color)",
            marginBottom: "20px",
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
            <div>
              <div
                style={{
                  fontSize: "var(--font-size-small)",
                  fontWeight: 800,
                  color: "var(--primary-color)",
                }}
              >
                巡っているルート
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                }}
              >
                {route.title}
              </div>
            </div>

            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "var(--primary-color)",
                background: "rgba(199, 68, 46, 0.08)",
                border: "1px solid rgba(199, 68, 46, 0.25)",
                padding: "4px 12px",
                borderRadius: "999px",
              }}
            >
              💮 獲得したしるし {stampedCount} / {totalSpots} 箇所
            </div>
          </div>

          {/* プログレスバー */}
          <div
            style={{
              width: "100%",
              height: "8px",
              borderRadius: "999px",
              background: "rgba(201, 168, 76, 0.2)",
              overflow: "hidden",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: `${progressPct}%`,
                height: "100%",
                background: "var(--primary-color)",
                borderRadius: "999px",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          {partnerNames.length > 0 && (
            <div
              style={{
                fontSize: "var(--font-size-small)",
                fontWeight: 700,
                color: "var(--text-color)",
                background: "rgba(201, 168, 76, 0.14)",
                padding: "6px 12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            >
              👥 {partnerNames.join("さん・")}さんと連れ立ち散策中
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <button
              type="button"
              onClick={requestUserLocation}
              disabled={locating}
              className="btn-secondary"
              style={{
                flex: "1 1 180px",
                padding: "9px 14px",
                fontSize: "0.8rem",
                fontWeight: 700,
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <Compass size={14} />
              <span>
                {locating
                  ? "現在地を測位中..."
                  : userLocation
                    ? "現在地からの距離を更新"
                    : "現在地から各スポットへの距離を測る"}
              </span>
            </button>

            <Link
              href={mapHref}
              className="btn-secondary"
              style={{
                flex: "1 1 160px",
                padding: "9px 14px",
                fontSize: "0.8rem",
                fontWeight: 700,
                borderRadius: "999px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <MapIcon size={14} />
              <span>ルートマップを見る</span>
            </Link>
          </div>
        </div>

        {/* 2. ✨ 次のおすすめ訪問先カード */}
        {recommendedSpot && (
          <div
            className="glass-card"
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              border: "2px solid var(--accent-color)",
              background:
                "linear-gradient(145deg, rgba(255,253,248,0.98) 0%, rgba(246,236,210,0.92) 100%)",
              marginBottom: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                color: "var(--primary-color)",
                background: "rgba(199, 68, 46, 0.1)",
                padding: "3px 10px",
                borderRadius: "999px",
                marginBottom: "8px",
              }}
            >
              <Sparkles size={13} />
              <span>{recommendationReason}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "var(--primary-color)",
                  color: "var(--bg-color)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {recommendedSpot.order_index}
              </span>
              <h2
                style={{
                  fontSize: "1.12rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                  margin: 0,
                }}
              >
                {recommendedSpot.name}
              </h2>
            </div>

            {recommendedSpot.distanceFromUserM !== null && (
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--primary-color)",
                  marginBottom: "8px",
                }}
              >
                📍 現在地から約 {recommendedSpot.distanceFromUserM}m（徒歩約{" "}
                {recommendedSpot.walkMinutesFromUser}分）
              </div>
            )}

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-color)",
                opacity: 0.82,
                margin: "0 0 14px 0",
                lineHeight: 1.55,
              }}
            >
              {recommendedSpot.description}
            </p>

            <button
              type="button"
              onClick={() => selectDestination(recommendedSpot.id)}
              disabled={settingSpotId !== null || !user}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "13px 16px",
                fontSize: "0.95rem",
                fontWeight: 800,
                borderRadius: "999px",
              }}
            >
              {settingSpotId === recommendedSpot.id
                ? "設定中..."
                : "🧭 ここを次の目的地にしてマップを開く"}
            </button>
          </div>
        )}

        {/* 3. スポット一覧 ＆ 順路の徒歩目安コネクタ */}
        <div className={styles.spotList}>
          {enrichedSpots.map((spot, index) => {
            const isActive = spot.isActiveDestination;
            const isStamped = spot.isStamped;
            const spotDetailHref = `/routes/${route.id}/spot/${spot.id}${
              effectiveGroupId ? `?groupId=${effectiveGroupId}` : ""
            }`;

            return (
              <React.Fragment key={spot.id}>
                <div className={styles.spotCard}>
                  {spot.image_url && (
                    <div
                      className={styles.spotImage}
                      style={{ backgroundImage: `url(${spot.image_url})` }}
                    />
                  )}
                  <div className={styles.spotContent}>
                    <div
                      className={styles.spotHeader}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div className={styles.spotIndex}>{index + 1}</div>
                      <h2 className={styles.spotName} style={{ margin: 0 }}>
                        {spot.name}
                      </h2>
                      {isStamped && (
                        <span
                          style={{
                            marginLeft: "auto",
                            backgroundColor: "rgba(201, 168, 76, 0.14)",
                            border: "1px solid var(--accent-color)",
                            color: "var(--text-color)",
                            padding: "3px 10px",
                            borderRadius: "12px",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                          }}
                        >
                          💮 しるし獲得済み
                        </span>
                      )}
                    </div>

                    {/* 現在地からの距離・住所メタ情報 */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "10px",
                      }}
                    >
                      {spot.distanceFromUserM !== null && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "0.76rem",
                            fontWeight: 800,
                            color: "var(--primary-color)",
                            background: "rgba(199, 68, 46, 0.08)",
                            padding: "3px 10px",
                            borderRadius: "999px",
                          }}
                        >
                          <MapPin size={12} />
                          <span>
                            現在地から約 {spot.distanceFromUserM}m（徒歩約{" "}
                            {spot.walkMinutesFromUser}分）
                          </span>
                        </span>
                      )}
                      {spot.address && (
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-color)",
                            opacity: 0.72,
                            alignSelf: "center",
                          }}
                        >
                          {spot.address}
                        </span>
                      )}
                    </div>

                    {/* 連れ立ちメンバーの押印状況 */}
                    {spot.companionNamesAtSpot.length > 0 && (
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--primary-color)",
                          background: "rgba(201, 168, 76, 0.14)",
                          padding: "5px 10px",
                          borderRadius: "8px",
                          marginBottom: "10px",
                        }}
                      >
                        👥 {spot.companionNamesAtSpot.join("さん・")}
                        さんがこの場所で押印しています
                      </div>
                    )}

                    <p className={styles.spotDesc}>{spot.description}</p>

                    {spot.f7_fragment && (
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-color)",
                          padding: "8px 12px",
                          borderRadius: "10px",
                          background: "rgba(201, 168, 76, 0.1)",
                          borderLeft: "3px solid var(--accent-color)",
                          marginBottom: "16px",
                          lineHeight: 1.5,
                        }}
                      >
                        📜 物語の断片: 「{spot.f7_fragment}」
                      </div>
                    )}

                    {isActive ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <div className={styles.activeStatus}>
                          🎯 現在このスポットを目的地に設定しています
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <Link
                            href={mapHref}
                            className="btn-primary"
                            style={{
                              flex: 1,
                              textAlign: "center",
                              padding: "12px",
                              fontSize: "0.9rem",
                              fontWeight: 800,
                              textDecoration: "none",
                              borderRadius: "12px",
                            }}
                          >
                            マップで向かう
                          </Link>
                          <Link
                            href={spotDetailHref}
                            className="btn-secondary"
                            style={{
                              padding: "12px 14px",
                              fontSize: "0.85rem",
                              fontWeight: 700,
                              textDecoration: "none",
                              borderRadius: "12px",
                            }}
                          >
                            スポット詳細
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <button
                          type="button"
                          className="btn-primary"
                          style={{
                            flex: "1 1 200px",
                            padding: "14px",
                            fontSize: "0.98rem",
                            fontWeight: 800,
                          }}
                          onClick={() => selectDestination(spot.id)}
                          disabled={settingSpotId !== null || !user}
                        >
                          {settingSpotId === spot.id
                            ? "設定中..."
                            : "ここを行き先に設定する"}
                        </button>
                        <Link
                          href={spotDetailHref}
                          className="btn-secondary"
                          style={{
                            padding: "14px 16px",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          詳細・押印へ
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* スポット間の歩行目安コネクタ */}
                {index < enrichedSpots.length - 1 &&
                  spot.stepDistanceToNextM !== null && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        fontSize: "var(--font-size-small)",
                        fontWeight: 700,
                        color: "var(--text-color)",
                        opacity: 0.75,
                        margin: "-6px 0",
                      }}
                    >
                      <Footprints size={13} color="var(--primary-color)" />
                      <span>
                        次のスポットまで 約 {spot.stepDistanceToNextM}m（徒歩約{" "}
                        {spot.stepWalkMinutesToNext}分）
                      </span>
                    </div>
                  )}
              </React.Fragment>
            );
          })}

          {enrichedSpots.length === 0 && (
            <p style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
              まだスポットが登録されていません。
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
