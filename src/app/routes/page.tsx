import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import { getCachedPublishedRoutesWithStats } from "@/utils/routeStats";
import { getSiteUrl } from "@/utils/seo";
import RoutesClientView from "./RoutesClientView";
import { Search, Map as MapIcon, MapPin } from "lucide-react";

export const revalidate = 300; // 5分間キャッシュ（ISR）で毎回のDB全件クエリ負荷を軽減

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "全国47都道府県の街歩き・散歩ルート一覧｜徒歩マップ・所要時間付き",
  description:
    "「知っている街の、知らない散歩道」を見つける。全国47都道府県の駅や地元を歩いて巡る散歩・散策ルートを検索。気分やエリア、所要時間から、今日のひとり散歩や休日のお出かけにぴったりの街歩きが見つかります。",
  alternates: {
    canonical: `${siteUrl}/routes`,
  },
};

export default async function RoutesPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const prefecture = resolvedParams.prefecture as string | undefined;
  const category = resolvedParams.category as string | undefined;
  const budget_tier = resolvedParams.budget_tier as string | undefined;
  const q = resolvedParams.q as string | undefined;

  // サーバーキャッシュ済みのルート一覧＋参加・栞統計を取得し、URL条件がある場合は高速フィルタリング
  const { routes: allRoutes, statsMap } =
    await getCachedPublishedRoutesWithStats();

  const ralliesList = allRoutes.filter((r) => {
    if (prefecture && r.prefecture !== prefecture) return false;
    if (category && r.category !== category) return false;
    if (budget_tier && r.budget_tier !== Number(budget_tier)) return false;
    return true;
  });

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

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>ルートを探す</h1>
        <p className={styles.pageSubtitle}>
          街の風景や物語をめぐるこだわりのルート一覧。今の気分や歩く時間に合わせて、気になる街を探してみましょう。
        </p>
        {/* 探し方レイヤー（左から：検索して探す ／ 地図から探す ／ エリアから探す） */}
        <nav className={styles.searchModeBar} aria-label="探し方の切り替え">
          <div className={styles.searchModeTabActive} aria-current="page">
            <Search size={13} strokeWidth={2} />
            <span>検索して探す</span>
          </div>
          <Link href="/map" className={styles.searchModeTab}>
            <MapIcon size={13} strokeWidth={1.8} color="var(--primary-color)" />
            <span>地図から探す</span>
          </Link>
          <Link href="/areas" className={styles.searchModeTab}>
            <MapPin size={13} strokeWidth={1.8} color="var(--primary-color)" />
            <span>エリアから探す</span>
          </Link>
        </nav>

        {prefecture && (
          <div style={{ marginBottom: "14px" }}>
            <Link
              href={`/areas/${encodeURIComponent(prefecture)}`}
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--primary-color)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              {prefecture}の街歩きまとめを見る →
            </Link>
          </div>
        )}

        <RoutesClientView
          initialRoutes={ralliesList}
          statsMap={statsMap}
          initialKeyword={q || ""}
          activePrefecture={prefecture}
          activeCategory={category}
          activeBudgetTier={budget_tier}
        />
      </main>
    </div>
  );
}
