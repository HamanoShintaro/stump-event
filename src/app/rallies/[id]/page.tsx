import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import styles from "./page.module.css";
import { JoinRallyButton, SpotButton } from "./ClientRallyButtons";
import { getRallyStats } from "@/utils/rallyStats";
import { Footprints, Star } from "lucide-react";

export const revalidate = 0; // 常に最新データを取得

export default async function RallyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // 1. ラリー本体のデータを取得
  const { data: rally, error: rallyError } = await supabase
    .from("rallies")
    .select("*")
    .eq("id", resolvedParams.id)
    .single();

  if (rallyError || !rally) {
    return notFound();
  }

  // 2. ラリーに紐づくスポット一覧を取得
  const { data: spots, error: spotsError } = await supabase
    .from("spots")
    .select("*")
    .eq("rally_id", rally.id)
    .order("order_index", { ascending: true });

  const spotsList = spots || [];

  return (
    <div className="container">
      <header>
        <Link href="/" className={"btn-primary " + styles.backBtn}>
          ← トップへ戻る
        </Link>
        <HeaderNav />
      </header>

      <main className={styles.main}>
        {/* ラリーヘッダー情報 */}
        <div className={"glass-card " + styles.headerCard}>
          <div 
            className={styles.imageBox} 
            style={{ backgroundImage: `url(${rally.thumbnail_url || 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80'})` }} 
          />
          <div className={styles.headerInfo}>
             <div className={styles.regionTag}>{rally.prefecture} • {rally.category}</div>
             <h1 className={styles.title}>{rally.title}</h1>
             <p className={styles.description}>{rally.description}</p>
             <div style={{ display: "flex", gap: "16px", color: "#888", fontWeight: "600", fontSize: "0.95rem", margin: "12px 0 24px 0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Footprints size={16} strokeWidth={2} />
                  {getRallyStats(rally).participants}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--primary-color)" }}>
                  <Star size={16} fill="currentColor" strokeWidth={2} />
                  {getRallyStats(rally).favorites}
                </span>
             </div>
             <div style={{ marginTop: "auto", marginBottom: "12px" }}>
               <JoinRallyButton rallyId={rally.id} />
             </div>
          </div>
        </div>

        {/* スポット一覧セクション */}
        <section className={styles.spotSection}>
          <h2 className={styles.sectionTitle} style={{ marginTop: "40px" }}>スポット一覧 ({spotsList.length}箇所)</h2>
          
          {spotsList.length > 0 ? (
            <div className={styles.spotList}>
              {spotsList.map((spot, index) => (
                <div key={spot.id} className={"glass-card " + styles.spotCard} style={{ position: "relative", overflow: "hidden", padding: 0 }}>
                  {spot.image_url && (
                    <div style={{
                      width: "100%", height: "180px", 
                      backgroundImage: `url(${spot.image_url})`, 
                      backgroundSize: "cover", backgroundPosition: "center",
                      borderBottom: "1px solid rgba(0,0,0,0.05)"
                    }} />
                  )}
                  <div style={{ padding: "24px" }}>
                    <div className={styles.spotHeader} style={{ position: "relative", zIndex: 2 }}>
                      <div className={styles.spotIndex}>{index + 1}</div>
                      <h3 className={styles.spotName}>{spot.name}</h3>
                    </div>
                    <p className={styles.spotDesc} style={{ whiteSpace: "pre-wrap", position: "relative", zIndex: 2, marginBottom: "16px" }}>
                      {spot.description}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "16px" }}>📍 {spot.address}</p>
                    <div className={styles.spotActions} style={{ position: "relative", zIndex: 2 }}>
                      <SpotButton spotId={spot.id} rallyId={rally.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
              まだスポットが登録されていません。<br/>Supabaseでスポットを追加してみましょう！
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
