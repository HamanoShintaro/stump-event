import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import ClientSearchButton from "@/components/ClientSearchButton";
import NearbyDiscoverySection from "@/components/NearbyDiscoverySection";
import { getCachedPublishedRoutesWithStats } from "@/utils/routeStats";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";
import { getSiteUrl } from "@/utils/seo";
import { Star, Map, MapPin, Search } from "lucide-react";
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

// Next.js App Router: サーバーコンポーネントとして5分キャッシュ（ISR）で高速配信
export const revalidate = 300;

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "SHUIN｜あなたの知らない、あなたの街 — 駅からはじまる街歩き・散歩・散策ルート",
  description:
    "「あなたの知らない、あなたの街」を歩く。全国47都道府県の駅や地元の路地を徒歩でめぐる街歩き・散歩・散策ルートガイド。ひとり散歩や休日のお出かけに、5つのスポットを訪れて現地で「SHUIN」を押印できます。",
  alternates: {
    canonical: siteUrl,
  },
};

const FEATURED_ROUTES_LIMIT = 6;

export default async function Home() {
  // 公開中（is_published = true）のルート一覧＋参加・栞統計をサーバーキャッシュから取得
  const { routes: allRallies, statsMap } =
    await getCachedPublishedRoutesWithStats();

  const featuredRallies = allRallies.slice(0, FEATURED_ROUTES_LIMIT);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SHUIN",
    alternateName: ["SHUIN｜あなたの知らない、あなたの街", "SHUIN まちのしるし", "まちのしるし"],
    url: siteUrl,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <header
        className="container"
        data-nosnippet
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

      {/* スティッキーになるアクションボタンバー（上に「ルートを探す」、アイコン下に1語ラベル） */}
      <div className={styles.stickyActionBar} data-nosnippet>
        <span className={styles.stickyBarCaption}>ルートを探す</span>
        <div className={styles.stickyActionRow}>
          <ClientSearchButton />

          <Link href="/map" className={styles.heroActionBtnWrapper} aria-label="地図から探す">
            <div className={styles.heroActionBtn}>
              <Map size={36} strokeWidth={1.5} />
            </div>
            <span className={styles.heroActionText}>地図</span>
          </Link>

          <Link href="/areas" className={styles.heroActionBtnWrapper} aria-label="エリアから探す">
            <div className={styles.heroActionBtn}>
              <MapPin size={36} strokeWidth={1.5} />
            </div>
            <span className={styles.heroActionText}>エリア</span>
          </Link>
        </div>
      </div>

      {/* コンテンツ部分 (通常スクロール) */}
      <div className={styles.contentSection}>
        {/* サイトコンセプト・リード文（SEOスニペットおよび初回訪問者向け案内） */}
        <section
          className="container"
          style={{
            padding: "4px 20px 12px",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1 className={styles.mainCopyHeading}>
            <span className={styles.mainCopyLine}>街を歩いて、しるしを刻む。</span>
            <span className={styles.mainCopyLine}>訪れた場所が、あなたのしるしになる。</span>
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-small)",
              color: "var(--text-color)",
              opacity: 0.82,
              margin: "0 auto",
              maxWidth: "760px",
              lineHeight: 1.65,
            }}
          >
            SHUIN（まちのしるし）は、全国47都道府県の駅や街を徒歩（車なし）でめぐる観光モデルコース・街歩きルートガイドです。5つのスポットをめぐって街の物語を紐解き、現地で「SHUIN」を押印して集めることができます。
          </p>
        </section>

        {/* はじめての方へ・街歩きの手引き（罫線区切り） */}
        <div
          className="container"
          data-nosnippet
          style={{
            padding: "8px 20px 12px",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/guide"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              padding: "12px 4px",
              borderTop: "1px solid rgba(17, 17, 17, 0.14)",
              borderBottom: "1px solid rgba(17, 17, 17, 0.14)",
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
              <IconScroll size={18} color="var(--primary-color)" />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--text-color)",
                    lineHeight: 1.4,
                  }}
                >
                  はじめての方へ・街歩きの手引き
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(43, 43, 43, 0.68)",
                    marginTop: "2px",
                  }}
                >
                  ルート選択・押印・SHUIN帳の4ステップ
                </div>
              </div>
            </div>
            <IconChevronRight size={18} color="var(--primary-color)" />
          </Link>
        </div>

        {/* ご近所の再発見・気軽な街歩きコンパス */}
        <NearbyDiscoverySection routes={allRallies} statsMap={statsMap} />

        {/* 注目のルート（データベースから取得した一覧・最大6件） */}
        <section className={`${styles.featuredSection} container`}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className={styles.sectionTitle}>注目のルート</h2>
          </div>
          <div className={styles.rallyGrid}>
            {featuredRallies.length > 0 ? (
              featuredRallies.map((rally) => {
                const walkMetrics =
                  rally.walkMetrics ||
                  computeRouteWalkMetrics(
                    rally.spots || [],
                    (rally as any).rarity_estimated_min
                  );
                const thumbSrc =
                  rally.thumbnail_url ||
                  "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80";
                const canOptimize =
                  thumbSrc.startsWith("/") ||
                  thumbSrc.startsWith("https://images.unsplash.com/");
                const budgetLabel =
                  rally.budget_tier === 1
                    ? "~1,000円"
                    : rally.budget_tier === 2
                      ? "~5,000円"
                      : "5,000円~";
                return (
                  <Link
                    href={`/routes/${rally.id}`}
                    key={rally.id}
                    className={styles.rallyCard}
                  >
                    <div className={styles.entryMeta}>
                      {rally.prefecture} ／ {rally.category}
                    </div>
                    <h3 className={styles.cardTitle}>{rally.title}</h3>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={thumbSrc}
                        alt={rally.title}
                        width={600}
                        height={375}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                        unoptimized={!canOptimize}
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.entrySpecBar}>
                      {walkMetrics.spotCount > 0 && (
                        <>
                          <span>全{walkMetrics.spotCount}箇所</span>
                          <span>・</span>
                          <span>
                            約{walkMetrics.distanceKm}km（約{walkMetrics.estimatedMinutes}分）
                          </span>
                          <span>・</span>
                        </>
                      )}
                      <span>{budgetLabel}</span>
                    </div>
                    <p className={styles.cardDesc}>{rally.description}</p>
                    <span className={styles.entryCta}>詳細を確認</span>
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

          {allRallies.length > FEATURED_ROUTES_LIMIT && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "8px",
                marginTop: "32px",
              }}
            >
              <Link
                href="/routes"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  padding: "12px 6px",
                  borderRadius: "2px",
                  border: "1px solid rgba(17, 17, 17, 0.24)",
                  background: "#FAF8F3",
                  color: "var(--text-color)",
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                <Search size={14} color="var(--primary-color)" />
                <span>検索して探す</span>
              </Link>
              <Link
                href="/map"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  padding: "12px 6px",
                  borderRadius: "2px",
                  border: "1px solid rgba(17, 17, 17, 0.24)",
                  background: "#FAF8F3",
                  color: "var(--text-color)",
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                <Map size={14} color="var(--primary-color)" />
                <span>地図から探す</span>
              </Link>
              <Link
                href="/areas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  padding: "12px 6px",
                  borderRadius: "2px",
                  border: "1px solid rgba(17, 17, 17, 0.24)",
                  background: "#FAF8F3",
                  color: "var(--text-color)",
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                <IconMapPin size={14} color="var(--primary-color)" />
                <span>エリアから探す</span>
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
