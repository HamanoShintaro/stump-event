import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import styles from "./page.module.css";
import { JoinRallyButton, BookmarkRouteButton, FloatingMapButton } from "./ClientRallyButtons";
import ClientSpotList from "./ClientSpotList";
import RouteBadgeTeaser from "./RouteBadgeTeaser";
import CommunityEchoesSection from "@/components/CommunityEchoesSection";
import RouteMicroFeedbackCard from "@/components/RouteMicroFeedbackCard";
import RouteOverviewMapWrapper from "@/components/RouteOverviewMapWrapper";
import BackButton from "@/components/BackButton";
import { getRouteStatsMap } from "@/utils/routeStats";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";
import { parseWKBPoint } from "@/utils/wkb";
import {
  buildRouteJsonLd,
  buildRouteSeoMetadata,
  extractRouteAreaInfo,
} from "@/utils/seo";
import { Footprints, Star, MapPin, Clock, Wallet, Search } from "lucide-react";

export const revalidate = 0; // 常に最新データを取得

async function fetchRouteWithSpots(routeId: string) {
  const { data: rally, error: rallyError } = await supabase
    .from("routes")
    .select("*")
    .eq("id", routeId)
    .single();

  if (rallyError || !rally) {
    return null;
  }

  const { data: spots } = await supabase
    .from("spots")
    .select("*")
    .eq("route_id", rally.id)
    .order("order_index", { ascending: true });

  const spotsList = (spots || []).map((s: any) => {
    let lat = typeof s.lat === "number" ? s.lat : null;
    let lng = typeof s.lng === "number" ? s.lng : null;
    if ((lat === null || lng === null) && typeof s.location === "string") {
      const parsed = parseWKBPoint(s.location);
      if (parsed) {
        lat = parsed.lat;
        lng = parsed.lng;
      }
    }
    return {
      ...s,
      lat,
      lng,
    };
  });

  const walkMetrics = computeRouteWalkMetrics(
    spotsList,
    rally.rarity_estimated_min
  );

  return { rally, spotsList, walkMetrics };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const loaded = await fetchRouteWithSpots(resolvedParams.id);
  if (!loaded) {
    return {
      title: "ルートが見つかりません",
    };
  }
  return buildRouteSeoMetadata(
    loaded.rally,
    loaded.spotsList,
    loaded.walkMetrics
  );
}

export default async function RallyDetailPage({ 
  params,
  searchParams
}: { 
  params: Promise<{ id: string }>,
  searchParams: Promise<{ groupId?: string }>
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const groupId = resolvedSearchParams.groupId || null;

  const loaded = await fetchRouteWithSpots(resolvedParams.id);
  if (!loaded) {
    return notFound();
  }

  const { rally, spotsList, walkMetrics } = loaded;
  const statsMap = await getRouteStatsMap([rally.id]);
  const stats = statsMap[rally.id] || { participants: 0, favorites: 0 };
  const areaInfo = extractRouteAreaInfo(rally, spotsList);
  const jsonLd = buildRouteJsonLd(rally, spotsList, walkMetrics);
  const budgetLabel = areaInfo.budgetLabel;

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BackButton href="/routes" />
        <HeaderNav />
      </header>

      <main className={styles.main} style={{ paddingBottom: "0" }}>
        {/* ルート概要（紙面・エディトリアル構成） */}
        <section className={styles.headerSection}>
          <div className={styles.metaLine}>
            <span>
              {rally.prefecture}
              {areaInfo.cityName && areaInfo.cityName !== rally.prefecture
                ? ` ${areaInfo.cityName}`
                : ""}
            </span>
            {rally.category && (
              <>
                <span className={styles.metaDivider}>／</span>
                <span>{rally.category}</span>
              </>
            )}
          </div>

          <h1 className={styles.title}>{rally.title}</h1>

          {(stats.participants > 0 || stats.favorites > 0) && (
            <div className={styles.statsInline}>
              {stats.participants > 0 && (
                <span className={styles.statsItem}>
                  <Footprints size={13} strokeWidth={1.8} />
                  {stats.participants}人が巡っています
                </span>
              )}
              {stats.favorites > 0 && (
                <span className={`${styles.statsItem} ${styles.statsItemSaved}`}>
                  <Star size={13} fill="currentColor" strokeWidth={1.8} />
                  {stats.favorites}人が保存
                </span>
              )}
            </div>
          )}

          <div className={styles.headerBody}>
            <div
              className={styles.imageBox}
              style={{ backgroundImage: `url(${rally.thumbnail_url || 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80'})` }}
              role="img"
              aria-label={rally.title}
            />

            <div className={styles.headerTextCol}>
              <p className={styles.description}>{rally.description}</p>

              {/* 街歩きの目安スペックバー（上下罫線のみ） */}
              <div className={styles.walkSpecBar}>
                <div className={styles.walkSpecItem}>
                  <MapPin size={14} strokeWidth={1.8} color="var(--primary-color)" />
                  <span>全 {walkMetrics.spotCount} 箇所</span>
                </div>
                <div className={styles.walkSpecItem}>
                  <Footprints size={14} strokeWidth={1.8} color="var(--primary-color)" />
                  <span>歩行 約 {walkMetrics.distanceKm.toFixed(1)} km</span>
                </div>
                <div className={styles.walkSpecItem}>
                  <Clock size={14} strokeWidth={1.8} color="var(--primary-color)" />
                  <span>目安 約 {walkMetrics.estimatedMinutes} 分</span>
                </div>
                <div className={styles.walkSpecItem}>
                  <Wallet size={14} strokeWidth={1.8} color="var(--primary-color)" />
                  <span>予算 {budgetLabel}</span>
                </div>
              </div>

              <div style={{ margin: "16px 0" }}>
                <RouteOverviewMapWrapper
                  routeId={rally.id}
                  spots={spotsList}
                  groupId={groupId}
                  areaLabel={[rally.prefecture, areaInfo.cityName].filter(Boolean).join(" ")}
                />
              </div>

              <JoinRallyButton
                rallyId={rally.id}
                routeTitle={rally.title}
                routeDescription={rally.description}
                routePrologue={rally.theme_prologue}
                groupId={groupId}
                bookmarkButton={
                  <BookmarkRouteButton
                    routeId={rally.id}
                    initialFavoriteCount={stats.favorites}
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* スポット一覧セクション */}
        <section className={styles.spotSection}>
          <h2 className={styles.sectionTitle} style={{ marginTop: "40px" }}>スポット一覧 ({spotsList.length}箇所)</h2>
          <ClientSpotList spots={spotsList} routeId={rally.id} routeCategory={rally.category} groupId={groupId} />
        </section>

        {/* 街角の余韻（このルートを歩いた旅人の足跡） */}
        <CommunityEchoesSection
          routeId={rally.id}
          spots={spotsList.map((s: any) => ({ id: s.id, name: s.name }))}
        />

        <RouteBadgeTeaser routeId={rally.id} />

        {/* 上スクロール時に右下へ表示する地図ボタン */}
        <FloatingMapButton rallyId={rally.id} groupId={groupId} />

        {/* メインコンテンツ後の付録・回遊ゾーン（背景を和紙から切替） */}
        <div className={styles.appendixZone}>
          {/* 1タップ・マイクロアンケート ＆ SNSシェア */}
          <RouteMicroFeedbackCard
            routeId={rally.id}
            routeTitle={rally.title}
            areaName={areaInfo.areaName}
          />

        {/* 別の街・ルートをフリーワードや地図から探す回遊セクション */}
        <section
          className={styles.discoverSection}
          aria-labelledby="discover-other-routes-title"
        >
          <h2 id="discover-other-routes-title" className={styles.discoverTitle}>
            <Search size={17} strokeWidth={1.8} color="var(--primary-color)" />
            <span>別の街・駅のルートも探してみる</span>
          </h2>
          <p className={styles.discoverDesc}>
            駅名・街名・スポット名のフリーワード入力や、全国マップ・都道府県一覧から次の散策先を探せます。
          </p>

          <form action="/routes" method="get" className={styles.discoverForm}>
            <input
              type="text"
              name="q"
              placeholder="駅名・街名・スポット名で検索..."
              aria-label="駅名・街名・スポット名で検索"
              className={styles.discoverInput}
            />
            <button type="submit" className={styles.discoverSubmitBtn}>
              検索
            </button>
          </form>

          <div className={styles.discoverLinksRow}>
            <Link href="/routes" className={styles.discoverLinkBtn}>
              検索して探す
            </Link>
            <Link href="/map" className={styles.discoverLinkBtn}>
              地図から探す
            </Link>
            <Link href="/areas" className={styles.discoverLinkBtn}>
              エリアから探す
            </Link>
          </div>
        </section>

        {/* エリア別・検索意図マッチ街歩きガイド */}
        <section className={styles.seoGuideSection} aria-labelledby="area-walk-guide-title">
          <h2 id="area-walk-guide-title" className={styles.seoGuideTitle}>
            {areaInfo.titleHook}案内（{areaInfo.subHook}）
          </h2>
          <p className={styles.seoGuideLead}>
            「{rally.title}」は、{areaInfo.fullAreaLabel}の風景と物語を徒歩（車なし）でめぐる街歩きルートです。
            {areaInfo.spotNames.length > 0 && (
              <>
                {areaInfo.spotNames.join("、")}など全{walkMetrics.spotCount}箇所のスポットを訪れながら、
              </>
            )}
            所要時間 約{walkMetrics.estimatedMinutes}分（歩行距離 約{walkMetrics.distanceKm.toFixed(1)}km・予算目安 {budgetLabel}）で巡ることができます。訪れた場所ごとに「SHUIN（まちのしるし）」を押印し、街の記憶を手元に残すことができます。
          </p>

          <div className={styles.seoFaqList}>
            <div className={styles.seoFaqItem}>
              <h3 className={styles.seoFaqQuestion}>
                Q. {areaInfo.areaName}の観光・街歩きにかかる所要時間や距離はどのくらいですか？
              </h3>
              <p className={styles.seoFaqAnswer}>
                全{walkMetrics.spotCount}箇所のスポットを徒歩でめぐるモデルコースで、歩行距離は約{walkMetrics.distanceKm.toFixed(1)}km、立ち寄りを含めた所要時間は約{walkMetrics.estimatedMinutes}分が目安です。食事・カフェや買い物のスポットも組み込まれているため、車なしでの半日観光や休日のお出かけにも適しています。
              </p>
            </div>
            <div className={styles.seoFaqItem}>
              <h3 className={styles.seoFaqQuestion}>
                Q. この{areaInfo.areaName}ルートではどの順番でスポットをめぐりますか？
              </h3>
              <p className={styles.seoFaqAnswer}>
                {spotsList.map((spot: any, i: number) => (
                  <span key={spot.id}>
                    {i > 0 && " → "}
                    <Link
                      href={`/routes/${rally.id}/spot/${spot.id}`}
                      style={{
                        color: "var(--primary-color)",
                        textDecoration: "underline",
                        fontWeight: 600,
                      }}
                    >
                      {i + 1}. {spot.name}
                    </Link>
                  </span>
                ))}{" "}
                の順に一筆書きでめぐる構成になっています。現地を訪れて押印すると、それぞれの場所に眠る物語の断片が開かれます。
              </p>
            </div>
          </div>

          <div className={styles.seoAreaLinks}>
            <Link
              href={`/routes?q=${encodeURIComponent(areaInfo.areaName)}`}
              className={styles.seoAreaLink}
            >
              {areaInfo.areaName}周辺のルートをもっと見る
            </Link>
            {areaInfo.cityName && areaInfo.cityName !== areaInfo.areaName && (
              <Link
                href={`/routes?q=${encodeURIComponent(areaInfo.cityName)}`}
                className={styles.seoAreaLink}
              >
                {areaInfo.cityName}のルート一覧
              </Link>
            )}
            {areaInfo.prefecture && (
              <Link
                href={`/areas/${encodeURIComponent(areaInfo.prefecture)}`}
                className={styles.seoAreaLink}
              >
                {areaInfo.prefecture}の観光・街歩きルートまとめ
              </Link>
            )}
            <Link href="/areas" className={styles.seoAreaLink}>
              全国エリア・都道府県一覧
            </Link>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
