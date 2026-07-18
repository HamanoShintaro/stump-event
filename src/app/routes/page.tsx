import Link from "next/link";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import { getRouteStatsMap } from "@/utils/routeStats";
import { Footprints, Star } from "lucide-react";

export const revalidate = 0; // 常に最新データを取得

export default async function RoutesPage({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const prefecture = resolvedParams.prefecture as string | undefined;
  const category = resolvedParams.category as string | undefined;
  const budget_tier = resolvedParams.budget_tier as string | undefined;

  // Supabaseからナラティブ一覧を取得（検索条件があれば付与）
  let query = supabase
    .from('routes')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (prefecture) query = query.eq('prefecture', prefecture);
  if (category) query = query.eq('category', category);
  if (budget_tier) query = query.eq('budget_tier', Number(budget_tier));

  const { data: rallies, error } = await query;

  if (error) {
    console.error('Error fetching rallies:', error);
  }

  const ralliesList = rallies || [];
  const statsMap = await getRouteStatsMap(ralliesList.map((r) => r.id));

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>ルートを探す</h1>
        <p className={styles.pageSubtitle}>
          みんなが作ったこだわりのルート一覧です。気になるテーマを見つけて参加しよう！
        </p>

        <div className={styles.grid}>
          {ralliesList.length > 0 ? (
            ralliesList.map((rally) => (
              <Link href={`/routes/${rally.id}`} key={rally.id} className={styles.cardWrapper}>
                <div className={"glass-card " + styles.card}>
                  <div 
                    className={styles.imageBox} 
                    style={{ backgroundImage: `url(${rally.thumbnail_url || 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80'})` }} 
                  >
                    <div className={styles.overlayTopTags}>
                      <div className={styles.categoryBadge}>{rally.category}</div>
                      <div className={styles.areaBadge}>{rally.prefecture}</div>
                    </div>
                    <div className={styles.cardOverlay}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <span style={{ fontSize: "0.7rem", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                          💰 {rally.budget_tier === 1 ? "~1,000円" : rally.budget_tier === 2 ? "~5,000円" : "5,000円~"}
                        </span>
                        <div style={{ display: "flex", gap: "8px", fontSize: "0.7rem", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                          {statsMap[rally.id]?.participants > 0 && (<span style={{ display: "flex", alignItems: "center", gap: "2px" }}><Footprints size={12} strokeWidth={2} />{statsMap[rally.id].participants}</span>)}
                          {statsMap[rally.id]?.favorites > 0 && (<span style={{ display: "flex", alignItems: "center", gap: "2px", color: "#FFD700" }}><Star size={12} fill="currentColor" strokeWidth={2} />{statsMap[rally.id].favorites}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h2 className={styles.rallyTitle}>{rally.title}</h2>
                    <p className={styles.rallyDesc}>{rally.description}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%", padding: "40px", color: "#888" }}>
              ルートが見つかりません。
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
