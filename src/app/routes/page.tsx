import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import { getCachedPublishedRoutesWithStats } from "@/utils/routeStats";
import { getSiteUrl } from "@/utils/seo";
import RoutesClientView from "./RoutesClientView";

export const revalidate = 300; // 5分間キャッシュ（ISR）で毎回のDB全件クエリ負荷を軽減

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "ルートを探す｜全国の街歩き・散歩・観光モデルコース一覧",
  description:
    "全国47都道府県の駅や街を徒歩でめぐる街歩き・散歩ルートを検索。エリア（都道府県・街名）、テーマ（歴史・グルメ・自然・文化）、所要時間・予算から、今の気分にぴったりの観光モデルコースを探せます。",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Link href="/areas" className="btn-secondary">
            都道府県・街エリア一覧から探す
          </Link>
          {prefecture && (
            <Link
              href={`/areas/${encodeURIComponent(prefecture)}`}
              className="btn-secondary"
            >
              {prefecture}の街歩きまとめページを見る
            </Link>
          )}
        </div>

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
