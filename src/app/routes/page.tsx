import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import { getRouteStatsMap } from "@/utils/routeStats";
import { getSiteUrl } from "@/utils/seo";
import RoutesClientView from "./RoutesClientView";

export const revalidate = 0; // 常に最新データを取得

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

  // Supabaseからルート一覧（紐づくスポット情報も含む）を取得
  // クイズデータ(completion_quiz_data)やスポット長文解説(spots.description)を除外し、1,000件上限を超えても全件取得できるようページング処理
  const PAGE_SIZE = 1000;
  const ralliesList: any[] = [];
  let offset = 0;

  while (true) {
    let query = supabase
      .from("routes")
      .select(
        "id, title, description, thumbnail_url, category, prefecture, budget_tier, is_published, created_at, spots(id, name, address, order_index, location)"
      )
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + PAGE_SIZE - 1);

    if (prefecture) query = query.eq("prefecture", prefecture);
    if (category) query = query.eq("category", category);
    if (budget_tier) query = query.eq("budget_tier", Number(budget_tier));

    const { data: batch, error } = await query;

    if (error) {
      console.error("Error fetching routes:", error);
      break;
    }

    if (!batch || batch.length === 0) break;
    ralliesList.push(...batch);
    if (batch.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }

  const statsMap = await getRouteStatsMap(ralliesList.map((r) => r.id));

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
