import type { Metadata } from "next";
import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";
import { getCachedPublishedRoutesWithStats } from "@/utils/routeStats";
import {
  ALL_PREFECTURE_NAMES,
  extractPrefectureHubSeoInfo,
  getSiteUrl,
  PREFECTURE_REGION_MAP,
  REGION_ORDER,
} from "@/utils/seo";
import { Compass, MapPin, Footprints, Sparkles } from "lucide-react";
import styles from "./page.module.css";

export const revalidate = 1800; // 30分ごとに再検証

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/areas`;
  const title = "全国エリア・都道府県別の観光・街歩きルート一覧｜SHUIN まちのしるし";
  const description =
    "北海道から九州・沖縄まで、日本全国の街の風景と物語を徒歩（車なし）でめぐる街歩きルート一覧。都道府県・駅エリアごとに所要時間・歩行距離・立ち寄りスポットを探し、現地で「SHUIN（まちのしるし）」を押印できます。";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "SHUIN まちのしるし",
      locale: "ja_JP",
      type: "website",
      images: [{ url: `${siteUrl}/shuin-logo-horizontal.png`, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/shuin-logo-horizontal.png`],
    },
  };
}

export default async function AreasIndexPage() {
  const siteUrl = getSiteUrl();
  const { routes: allRoutes } = await getCachedPublishedRoutesWithStats();

  const routesByPref = new Map<string, any[]>();
  for (const r of allRoutes) {
    const pref = String(r?.prefecture || "").trim();
    if (!pref) continue;
    if (!routesByPref.has(pref)) {
      routesByPref.set(pref, []);
    }
    routesByPref.get(pref)!.push(r);
  }

  const coveredPrefectures = ALL_PREFECTURE_NAMES.filter((p) =>
    routesByPref.has(p)
  );
  const totalSpots = allRoutes.reduce(
    (sum, r) => sum + (Array.isArray(r.spots) ? r.spots.length : 0),
    0
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/areas#collection`,
        name: "全国エリア・都道府県別の観光・街歩きルート一覧",
        description:
          "日本全国の都道府県・駅エリア別に徒歩で巡る街歩きルートと立ち寄りスポットをまとめたインデックスページ。",
        url: `${siteUrl}/areas`,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: coveredPrefectures.length,
          itemListElement: coveredPrefectures.map((pref, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: `${pref}の観光・街歩きモデルコース（全${routesByPref.get(pref)?.length || 0}ルート）`,
            url: `${siteUrl}/areas/${encodeURIComponent(pref)}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "SHUIN まちのしるし",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "全国エリア別ルート一覧",
            item: `${siteUrl}/areas`,
          },
        ],
      },
    ],
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      <main className={styles.main}>
        <nav className={styles.breadcrumbNav} aria-label="パンくずリスト">
          <Link href="/" className={styles.breadcrumbLink}>
            ホーム
          </Link>
          <span>/</span>
          <span>全国エリア別ルート一覧</span>
        </nav>

        <section className={"glass-card " + styles.heroCard}>
          <div className={styles.regionBadge}>
            <Compass size={14} color="var(--primary-color)" />
            <span>全国エリア・都道府県インデックス</span>
          </div>
          <h1 className={styles.pageTitle}>
            都道府県・街エリアからルートを探す
          </h1>
          <p className={styles.pageLead}>
            街を歩いて、しるしを刻む。日本各地の駅から歩いて巡れる街の物語と、立ち寄りスポットを都道府県別にまとめています。休日のお出かけや旅先の散策に合わせて、気になる街を訪れてみてください。
          </p>
          <div className={styles.statsRow}>
            <div className={styles.statPill}>
              <Compass size={15} color="var(--primary-color)" />
              <span>公開エリア {coveredPrefectures.length} 都道府県</span>
            </div>
            <div className={styles.statPill}>
              <Footprints size={15} color="var(--primary-color)" />
              <span>全 {allRoutes.length} ルート公開中</span>
            </div>
            <div className={styles.statPill}>
              <MapPin size={15} color="var(--primary-color)" />
              <span>収録スポット 計 {totalSpots} 箇所</span>
            </div>
          </div>
        </section>

        {REGION_ORDER.map((regionName) => {
          const prefsInRegion = ALL_PREFECTURE_NAMES.filter(
            (p) =>
              PREFECTURE_REGION_MAP[p] === regionName && routesByPref.has(p)
          ).sort(
            (a, b) =>
              (routesByPref.get(b)?.length || 0) -
              (routesByPref.get(a)?.length || 0)
          );

          if (prefsInRegion.length === 0) return null;

          return (
            <section key={regionName} className={styles.regionSection}>
              <h2 className={styles.sectionTitle}>
                <Sparkles size={18} color="var(--primary-color)" />
                <span>{regionName}エリアの街歩きルート</span>
              </h2>
              <div className={styles.prefGrid}>
                {prefsInRegion.map((pref) => {
                  const prefRoutes = routesByPref.get(pref) || [];
                  const hubInfo = extractPrefectureHubSeoInfo(pref, prefRoutes);

                  return (
                    <Link
                      key={pref}
                      href={`/areas/${encodeURIComponent(pref)}`}
                      className={"glass-card " + styles.prefCard}
                    >
                      <div>
                        <div className={styles.prefCardHeader}>
                          <h3 className={styles.prefName}>{pref}</h3>
                          <span className={styles.prefCountBadge}>
                            {hubInfo.routeCount}ルート・{hubInfo.spotCount}箇所
                          </span>
                        </div>
                        {hubInfo.areaNames.length > 0 && (
                          <p className={styles.prefAreaPreview}>
                            <strong>街・駅：</strong>
                            {hubInfo.areaNames.slice(0, 6).join(" / ")}
                            {hubInfo.areaNames.length > 6 ? " ほか" : ""}
                          </p>
                        )}
                      </div>
                      {hubInfo.featuredSpots.length > 0 && (
                        <p className={styles.prefSpotPreview}>
                          主な立ち寄り先：
                          {hubInfo.featuredSpots.slice(0, 3).join("、")}など
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div className={styles.actionLinksRow}>
          <Link href="/routes" className="btn-primary">
            すべてのルートを条件で絞り込む
          </Link>
          <Link href="/map" className="btn-secondary">
            全国マップから探す
          </Link>
        </div>
      </main>
    </div>
  );
}
