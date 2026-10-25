import Link from "next/link";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import { getRouteStatsMap } from "@/utils/routeStats";
import RoutesClientView from "./RoutesClientView";

export const revalidate = 0; // 常に最新データを取得

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
  let query = supabase
    .from("routes")
    .select("*, spots(id, name, description, address, city, order_index, location)")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (prefecture) query = query.eq("prefecture", prefecture);
  if (category) query = query.eq("category", category);
  if (budget_tier) query = query.eq("budget_tier", Number(budget_tier));

  const { data: rallies, error } = await query;

  if (error) {
    console.error("Error fetching routes:", error);
  }

  const ralliesList = rallies || [];
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
