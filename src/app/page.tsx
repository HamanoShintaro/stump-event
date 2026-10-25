import Link from "next/link";
import styles from "./page.module.css";
import { supabase } from "../lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import SplashAnimation from "@/components/SplashAnimation";
import ClientSearchButton from "@/components/ClientSearchButton";
import NearbyDiscoverySection from "@/components/NearbyDiscoverySection";
import { getRouteStatsMap } from "@/utils/routeStats";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";
import { Star, Map } from "lucide-react";
import {
  IconCoin,
  IconMapPin,
  IconFootprints,
  IconScroll,
  IconChevronRight,
  IconCompass,
  IconStampSeal,
  IconUsers,
  IconBook,
} from "@/components/icons/ShuinIcons";

// Next.js App Router: サーバーコンポーネントとしてSupabaseから直接データを取得
export const revalidate = 0; // 最新のデータを常に取得

export default async function Home() {
  // 公開中（is_published = true）のルートを最新順に取得（スポット座標含む）
  const { data: rallies, error } = await supabase
    .from("routes")
    .select("*, spots(id, name, description, address, order_index, location)")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching rallies:", error);
  }

  const statsMap = await getRouteStatsMap((rallies || []).map((r) => r.id));

  return (
    <main>
      <header
        className="container"
        style={{
          justifyContent: "flex-end",
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 50,
          padding: "20px",
        }}
      >
        {/* トップページのみ左上のロゴを非表示にし、コンテンツ側に配置する */}
        <HeaderNav />
      </header>

      {/* 初回訪問時のみ表示されるスプラッシュアニメーション */}
      <SplashAnimation />

      {/* ヒーローロゴ部分 (通常スクロール) */}
      <div className={styles.heroLogoSection}>
        <div className={styles.heroLogoBox}>
          <img src="/main-mark.png" alt="" className={styles.heroMark} />
          <img
            src="/service-logo.png"
            alt="SHUIN まちのしるし"
            className={styles.heroLogo}
          />
        </div>
      </div>

      {/* スティッキーになるアクションボタンバー */}
      <div className={styles.stickyActionBar}>
        <Link href="/map" className={styles.heroActionBtnWrapper}>
          <div className={styles.heroActionBtn}>
            <Map size={56} strokeWidth={1.5} />
          </div>
          <span className={styles.heroActionText}>地図から探す</span>
        </Link>

        <ClientSearchButton />
      </div>

      {/* コンテンツ部分 (通常スクロール) */}
      <div className={styles.contentSection}>
        {/* はじめての方へ・街歩きの手引きバナー（コンパクト2行構成） */}
        <div
          className="container"
          style={{
            padding: "0 20px 10px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/guide"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "11px 14px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(255,253,249,0.96) 0%, rgba(246,239,224,0.93) 100%)",
              border: "1px solid rgba(201, 168, 76, 0.55)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              textDecoration: "none",
              color: "var(--text-color)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minWidth: 0,
                flex: 1,
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "9px",
                  background: "rgba(199, 68, 46, 0.08)",
                  border: "1px solid rgba(199, 68, 46, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <IconScroll size={17} color="var(--primary-color)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span>はじめての方へ・街歩きの手引き</span>
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#5C4E43",
                    marginTop: "2px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  物語を選ぶ・押印・連れ立ち・SHUIN帳の4ステップ
                </div>
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "2px",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--primary-color)",
                background: "rgba(199, 68, 46, 0.08)",
                border: "1px solid rgba(199, 68, 46, 0.22)",
                padding: "5px 10px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <span>手引き</span>
              <IconChevronRight size={14} color="var(--primary-color)" />
            </div>
          </Link>
        </div>

        {/* ご近所の再発見・気軽な街歩きコンパス */}
        <NearbyDiscoverySection routes={rallies || []} statsMap={statsMap} />

        {/* 注目のルート（データベースから取得した一覧） */}
        <section className={`${styles.featuredSection} container`}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className={styles.sectionTitle}>注目のルート</h2>
          </div>
          <div className={styles.rallyGrid}>
            {rallies && rallies.length > 0 ? (
              rallies.map((rally) => {
                const walkMetrics = computeRouteWalkMetrics(
                  rally.spots || [],
                  rally.rarity_estimated_min
                );
                return (
                  <Link
                    href={`/routes/${rally.id}`}
                    key={rally.id}
                    className={styles.rallyCard}
                  >
                    <div className={styles.cardImageContainer}>
                      <img
                        src={
                          rally.thumbnail_url ||
                          "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                        }
                        alt={rally.title}
                        className={styles.cardImage}
                      />
                      <div className={styles.overlayTopTags}>
                        <div className={styles.categoryBadge}>
                          {rally.category}
                        </div>
                        <div className={styles.areaBadge}>
                          {rally.prefecture}
                        </div>
                      </div>
                      <div className={styles.cardOverlay}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                              textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <IconCoin size={12} color="currentColor" />
                            <span>
                              {rally.budget_tier === 1
                                ? "~1,000円"
                                : rally.budget_tier === 2
                                  ? "~5,000円"
                                  : "5,000円~"}
                            </span>
                          </span>
                          <div
                            style={{
                              display: "flex",
                              gap: "8px",
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                              textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                            }}
                          >
                            {statsMap[rally.id]?.participants > 0 && (
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "2px",
                                }}
                              >
                                <IconFootprints size={12} color="currentColor" />
                                {statsMap[rally.id].participants}
                              </span>
                            )}
                            {statsMap[rally.id]?.favorites > 0 && (
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "2px",
                                  color: "var(--accent-color)",
                                }}
                              >
                                <Star
                                  size={12}
                                  fill="currentColor"
                                  strokeWidth={2}
                                />
                                {statsMap[rally.id].favorites}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{rally.title}</h3>
                      {walkMetrics.spotCount > 0 && (
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "var(--primary-color)",
                            marginBottom: "6px",
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "6px",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <IconMapPin size={12} color="var(--primary-color)" />
                            全{walkMetrics.spotCount}箇所
                          </span>
                          <span>・</span>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <IconFootprints
                              size={12}
                              color="var(--primary-color)"
                            />
                            約{walkMetrics.distanceKm}km（約
                            {walkMetrics.estimatedMinutes}分）
                          </span>
                        </div>
                      )}
                      <p className={styles.cardDesc}>{rally.description}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  color: "#888",
                  padding: "40px 0",
                }}
              >
                現在公開中のルートはありません。
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
