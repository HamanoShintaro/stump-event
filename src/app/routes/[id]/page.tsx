import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import styles from "./page.module.css";
import { JoinRallyButton } from "./ClientRallyButtons";
import ClientSpotList from "./ClientSpotList";
import RouteBadgeTeaser from "./RouteBadgeTeaser";
import BackButton from "@/components/BackButton";
import { getRouteStatsMap } from "@/utils/routeStats";
import { Footprints, Star } from "lucide-react";

export const revalidate = 0; // 常に最新データを取得

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
  
  // 1. ルート本体のデータを取得
  const { data: rally, error: rallyError } = await supabase
    .from("routes")
    .select("*")
    .eq("id", resolvedParams.id)
    .single();

  if (rallyError || !rally) {
    return notFound();
  }

  // 2. ルートに紐づくスポット一覧を取得
  const { data: spots, error: spotsError } = await supabase
    .from("spots")
    .select("*")
    .eq("route_id", rally.id)
    .order("order_index", { ascending: true });

  const spotsList = spots || [];

  const statsMap = await getRouteStatsMap([rally.id]);
  const stats = statsMap[rally.id];

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BackButton href="/routes" />
        <HeaderNav />
      </header>

      <main className={styles.main}>
        {/* ナラティブヘッダー情報 */}
        <div className={"glass-card " + styles.headerCard}>
          <div 
            className={styles.imageBox} 
            style={{ backgroundImage: `url(${rally.thumbnail_url || 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80'})` }} 
          />
          <div className={styles.headerInfo}>
             <div className={styles.regionTag}>{rally.prefecture} • {rally.category}</div>
             <h1 className={styles.title}>{rally.title}</h1>
             <p className={styles.description}>{rally.description}</p>
             {(stats.participants > 0 || stats.favorites > 0) && (
             <div style={{ display: "flex", gap: "16px", color: "#888", fontWeight: "600", fontSize: "0.95rem", margin: "12px 0 24px 0" }}>
                {stats.participants > 0 && (
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Footprints size={16} strokeWidth={2} />
                  {stats.participants}
                </span>)}
                {stats.favorites > 0 && (
                <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--primary-color)" }}>
                  <Star size={16} fill="currentColor" strokeWidth={2} />
                  {stats.favorites}
                </span>)}
             </div>)}
             <div style={{ marginTop: "auto", marginBottom: "12px" }}>
               <JoinRallyButton 
                 rallyId={rally.id} 
                 routeTitle={rally.title}
                 routeDescription={rally.description}
                 routePrologue={rally.theme_prologue}
                 groupId={groupId}
               />
             </div>
          </div>
        </div>

        {/* スポット一覧セクション */}
        <section className={styles.spotSection}>
          <h2 className={styles.sectionTitle} style={{ marginTop: "40px" }}>スポット一覧 ({spotsList.length}箇所)</h2>
          <ClientSpotList spots={spotsList} routeId={rally.id} routeCategory={rally.category} groupId={groupId} />
        </section>

        <RouteBadgeTeaser routeId={rally.id} />
      </main>
    </div>
  );
}
