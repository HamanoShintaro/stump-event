import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";
import { parseWKBPoint } from "@/utils/wkb";
import {
  ALL_PREFECTURE_NAMES,
  buildPrefectureHubJsonLd,
  buildPrefectureHubSeoMetadata,
  extractPrefectureHubSeoInfo,
  extractRouteAreaInfo,
  normalizePrefectureParam,
  PREFECTURE_REGION_MAP,
} from "@/utils/seo";
import { Compass, MapPin, Footprints, Clock, Wallet, Sparkles } from "lucide-react";
import styles from "../page.module.css";

export const revalidate = 1800; // 30分ごとに再検証

function normalizeRouteSpots(route: any) {
  const spots = Array.isArray(route?.spots) ? [...route.spots] : [];
  spots.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
  return spots.map((s) => {
    let lat = typeof s.lat === "number" ? s.lat : null;
    let lng = typeof s.lng === "number" ? s.lng : null;
    if ((lat === null || lng === null) && typeof s.location === "string") {
      const parsed = parseWKBPoint(s.location);
      if (parsed) {
        lat = parsed.lat;
        lng = parsed.lng;
      }
    }
    return { ...s, lat, lng };
  });
}

async function fetchPrefectureAndRegionRoutes(prefecture: string) {
  const region = PREFECTURE_REGION_MAP[prefecture] || "全国";
  const sameRegionPrefs = ALL_PREFECTURE_NAMES.filter(
    (p) => PREFECTURE_REGION_MAP[p] === region && p !== prefecture
  );

  const { data: prefData } = await supabase
    .from("routes")
    .select(
      "id, title, description, thumbnail_url, category, prefecture, budget_tier, is_published, created_at, spots(id, name, description, address, order_index, location)"
    )
    .eq("is_published", true)
    .eq("prefecture", prefecture)
    .order("created_at", { ascending: false });

  const prefRoutes = (prefData || []).map((r) => ({
    ...r,
    spots: normalizeRouteSpots(r),
  }));

  let neighborRoutes: any[] = [];
  if (prefRoutes.length < 4 && sameRegionPrefs.length > 0) {
    const { data: neighborData } = await supabase
      .from("routes")
      .select(
        "id, title, description, thumbnail_url, category, prefecture, budget_tier, is_published, created_at, spots(id, name, description, address, order_index, location)"
      )
      .eq("is_published", true)
      .in("prefecture", sameRegionPrefs)
      .order("created_at", { ascending: false })
      .limit(6);

    neighborRoutes = (neighborData || []).map((r) => ({
      ...r,
      spots: normalizeRouteSpots(r),
    }));
  }

  return { prefRoutes, neighborRoutes, region, sameRegionPrefs };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ prefecture: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const prefecture = normalizePrefectureParam(resolved.prefecture);
  if (!prefecture) {
    return {
      title: "エリアが見つかりません",
    };
  }

  const { prefRoutes } = await fetchPrefectureAndRegionRoutes(prefecture);
  return buildPrefectureHubSeoMetadata(prefecture, prefRoutes);
}

export default async function PrefectureHubPage({
  params,
}: {
  params: Promise<{ prefecture: string }>;
}) {
  const resolved = await params;
  const prefecture = normalizePrefectureParam(resolved.prefecture);
  if (!prefecture) {
    return notFound();
  }

  const { prefRoutes, neighborRoutes, region, sameRegionPrefs } =
    await fetchPrefectureAndRegionRoutes(prefecture);

  const hubInfo = extractPrefectureHubSeoInfo(prefecture, prefRoutes);
  const jsonLd = buildPrefectureHubJsonLd(prefecture, prefRoutes);

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
          <Link href="/areas" className={styles.breadcrumbLink}>
            全国エリア別ルート一覧
          </Link>
          <span>/</span>
          <span>{prefecture}の街歩きルート</span>
        </nav>

        <section className={"glass-card " + styles.heroCard}>
          <div className={styles.regionBadge}>
            <Compass size={14} color="var(--primary-color)" />
            <span>{region}エリア • {prefecture}</span>
          </div>
          <h1 className={styles.pageTitle}>
            {hubInfo.titleHook}（{hubInfo.subHook}）
          </h1>
          <p className={styles.pageLead}>{hubInfo.leadSummary}</p>
          <div className={styles.statsRow}>
            <div className={styles.statPill}>
              <Footprints size={15} color="var(--primary-color)" />
              <span>公開ルート 全 {hubInfo.routeCount} 件</span>
            </div>
            <div className={styles.statPill}>
              <MapPin size={15} color="var(--primary-color)" />
              <span>収録スポット 計 {hubInfo.spotCount} 箇所</span>
            </div>
            {hubInfo.areaNames.length > 0 && (
              <div className={styles.statPill}>
                <Compass size={15} color="var(--primary-color)" />
                <span>対象街エリア {hubInfo.areaNames.length} 箇所</span>
              </div>
            )}
          </div>
        </section>

        {hubInfo.areaNames.length > 0 && (
          <section className={styles.areaTagsSection}>
            <h2 className={styles.sectionTitle}>
              <MapPin size={18} color="var(--primary-color)" />
              <span>{prefecture}で巡れる街・駅・沿線エリア</span>
            </h2>
            <div className={styles.tagCloud}>
              {(hubInfo.lines || []).map((line) => (
                <Link
                  key={`line-${line}`}
                  href={`/routes?q=${encodeURIComponent(line)}`}
                  className={styles.areaTagChip}
                >
                  <Compass size={13} color="var(--primary-color)" />
                  <span>{line}沿線の街歩き</span>
                </Link>
              ))}
              {hubInfo.areaNames.map((area) => (
                <Link
                  key={area}
                  href={`/routes?q=${encodeURIComponent(area)}`}
                  className={styles.areaTagChip}
                >
                  <MapPin size={13} color="var(--primary-color)" />
                  <span>{area}の街歩き</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className={styles.sectionTitle}>
            <Footprints size={18} color="var(--primary-color)" />
            <span>{prefecture}の街歩き・観光ルート一覧（{prefRoutes.length}件）</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            それぞれのルートでは、5つの実在スポットを一筆書きの徒歩動線で巡りながら、その土地に眠る物語と「SHUIN（まちのしるし）」を集めることができます。
          </p>

          {prefRoutes.length > 0 ? (
            <div className={styles.routeGrid}>
              {prefRoutes.map((route) => {
                const walkMetrics = computeRouteWalkMetrics(route.spots || []);
                const routeAreaInfo = extractRouteAreaInfo(route, route.spots || []);

                return (
                  <Link
                    key={route.id}
                    href={`/routes/${route.id}`}
                    className={"glass-card " + styles.routeCard}
                  >
                    <div className={styles.routeThumbBox}>
                      <img
                        src={
                          route.thumbnail_url ||
                          "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                        }
                        alt={route.title}
                        className={styles.routeThumb}
                      />
                      <div className={styles.routeBadgeRow}>
                        <span className={styles.routeAreaBadge}>
                          {routeAreaInfo.areaName}
                        </span>
                        <span className={styles.routeCategoryBadge}>
                          {route.category}
                        </span>
                      </div>
                    </div>

                    <div className={styles.routeBody}>
                      <h3 className={styles.routeTitle}>{route.title}</h3>
                      <div className={styles.routeSpecs}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                          <MapPin size={13} />
                          全{walkMetrics.spotCount}箇所
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                          <Footprints size={13} />
                          約{walkMetrics.distanceKm.toFixed(1)}km
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                          <Clock size={13} />
                          約{walkMetrics.estimatedMinutes}分
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                          <Wallet size={13} />
                          {routeAreaInfo.budgetLabel}
                        </span>
                      </div>
                      <p className={styles.routeDesc}>{route.description}</p>

                      {routeAreaInfo.spotNames.length > 0 && (
                        <div className={styles.routeSpotChips}>
                          {routeAreaInfo.spotNames.map((sName, idx) => (
                            <span key={idx} className={styles.spotMiniTag}>
                              {idx + 1}. {sName}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className={"glass-card " + styles.neighborSection}>
              <p className={styles.pageLead} style={{ margin: 0 }}>
                {prefecture}の街歩きルートは現在順次作成・拡充中です。まずは近隣の{region}エリアで公開中のルートから気になる街を巡ってみてください。
              </p>
            </div>
          )}
        </section>

        {/* ルート数がまだ少ない都道府県（1〜3件）では、同地方ブロックのルートも併記して体験と網羅性を補完 */}
        {neighborRoutes.length > 0 && (
          <section className={"glass-card " + styles.neighborSection}>
            <h2 className={styles.sectionTitle}>
              <Sparkles size={18} color="var(--primary-color)" />
              <span>あわせて巡りたい{region}エリアの街歩きルート</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              {prefecture}とあわせて日帰りや週末旅で訪れやすい、{region}エリアの注目ルートです。
            </p>
            <div className={styles.routeGrid} style={{ marginBottom: 0 }}>
              {neighborRoutes.map((route) => {
                const walkMetrics = computeRouteWalkMetrics(route.spots || []);
                const routeAreaInfo = extractRouteAreaInfo(route, route.spots || []);

                return (
                  <Link
                    key={route.id}
                    href={`/routes/${route.id}`}
                    className={"glass-card " + styles.routeCard}
                  >
                    <div className={styles.routeThumbBox}>
                      <img
                        src={
                          route.thumbnail_url ||
                          "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                        }
                        alt={route.title}
                        className={styles.routeThumb}
                      />
                      <div className={styles.routeBadgeRow}>
                        <span className={styles.routeAreaBadge}>
                          {route.prefecture}・{routeAreaInfo.areaName}
                        </span>
                        <span className={styles.routeCategoryBadge}>
                          {route.category}
                        </span>
                      </div>
                    </div>
                    <div className={styles.routeBody}>
                      <h3 className={styles.routeTitle}>{route.title}</h3>
                      <div className={styles.routeSpecs}>
                        <span>全{walkMetrics.spotCount}箇所</span>
                        <span>・</span>
                        <span>約{walkMetrics.distanceKm.toFixed(1)}km（約{walkMetrics.estimatedMinutes}分）</span>
                      </div>
                      <p className={styles.routeDesc}>{route.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <section className={"glass-card " + styles.seoGuideBox} aria-labelledby="pref-faq-heading">
          <h2 id="pref-faq-heading" className={styles.sectionTitle}>
            <span>{prefecture}の街歩き・観光モデルコースに関するよくある質問</span>
          </h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Q. {prefecture}で車なし（電車・徒歩）で巡れる街歩きルートはありますか？
              </h3>
              <p className={styles.faqAnswer}>{hubInfo.leadSummary}</p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Q. {prefecture}のルートではどのような場所を訪れますか？
              </h3>
              <p className={styles.faqAnswer}>
                {hubInfo.areaNames.length > 0
                  ? `${hubInfo.areaNames.join("・")}の各駅周辺を起点に、`
                  : `${prefecture}内の駅や街を起点に、`}
                {hubInfo.featuredSpots.length > 0
                  ? `${hubInfo.featuredSpots.slice(0, 8).join("、")}など`
                  : "歴史ある寺社や史跡、水辺や商店街、地元で愛される甘味・食事処など"}
                のスポットを1ルートあたり5箇所ずつ一筆書きでめぐります。現地で押印すると、その場所ならではの物語の断片を読むことができます。
              </p>
            </div>
          </div>

          {sameRegionPrefs.length > 0 && (
            <div style={{ marginTop: "22px" }}>
              <p style={{ fontSize: "var(--font-size-small)", fontWeight: 700, marginBottom: "10px" }}>
                {region}の他の都道府県から探す：
              </p>
              <div className={styles.tagCloud}>
                {sameRegionPrefs.map((p) => (
                  <Link
                    key={p}
                    href={`/areas/${encodeURIComponent(p)}`}
                    className={styles.areaTagChip}
                  >
                    <span>{p}の街歩きルート</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className={styles.actionLinksRow}>
            <Link href="/areas" className="btn-secondary">
              全国エリア一覧へ戻る
            </Link>
            <Link
              href={`/routes?prefecture=${encodeURIComponent(prefecture)}`}
              className="btn-secondary"
            >
              {prefecture}のルートを条件で絞り込む
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
