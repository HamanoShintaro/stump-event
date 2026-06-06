import Link from "next/link";
import styles from "./page.module.css";
import { supabase } from "../lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import SplashAnimation from "@/components/SplashAnimation";
import ClientSearchButton from "@/components/ClientSearchButton";
import { getRouteStats } from "@/utils/routeStats";
import { Footprints, Star, Map } from "lucide-react";

// Next.js App Router: サーバーコンポーネントとしてSupabaseから直接データを取得
export const revalidate = 0; // 最新のデータを常に取得

export default async function Home() {
  // 公開中（is_published = true）のナラティブを最新順に取得
  const { data: rallies, error } = await supabase
    .from('routes')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  // デバッグ用のログ出力（ターミナルに表示されます）
  console.log('--- Supabase Connection Check ---');
  console.log('Fetched Rallies:', rallies);
  console.log('Fetch Error:', error);

  if (error) {
    console.error('Error fetching rallies:', error);
  }

  return (
    <main>
      <header className="container" style={{ justifyContent: "flex-end", position: "absolute", top: 0, width: "100%", zIndex: 1000, padding: "20px" }}>
        {/* トップページのみ左上のロゴを非表示にし、コンテンツ側に配置する */}
        <HeaderNav />
      </header>

      {/* 初回訪問時のみ表示されるスプラッシュアニメーション */}
      <SplashAnimation />

      {/* ヒーローロゴ部分 (通常スクロール) */}
      <div className={styles.heroLogoSection}>
        <div className={styles.heroLogoBox}>
          <img src="/main-mark.png" alt="" className={styles.heroMark} />
          <img src="/service-logo.png" alt="SHUIN まちのしるし" className={styles.heroLogo} />
        </div>
      </div>

      {/* スティッキーになるアクションボタンバー */}
      <div className={styles.stickyActionBar}>
        <Link href="/map" className={styles.heroActionBtnWrapper}>
          <div className={styles.heroActionBtn}>
            <Map size={56} strokeWidth={1.5} />
          </div>
          <span className={styles.heroActionText}>地図から探す</span>
        </Link>
        
        <ClientSearchButton />
      </div>

      {/* コンテンツ部分 (通常スクロール) */}
      <div className={styles.contentSection}>
        {/* 注目ナラティブ（データベースから取得した一覧） */}
        <section className={`${styles.featuredSection} container`}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className={styles.sectionTitle}>注目のルート</h2>
          </div>
          <div className={styles.rallyGrid}>
            {rallies && rallies.length > 0 ? (
              rallies.map((rally) => (
                <Link href={`/routes/${rally.id}`} key={rally.id} className={styles.rallyCard}>
                  <div className={styles.cardImageContainer}>
                    <img 
                      src={rally.thumbnail_url || 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80'} 
                      alt={rally.title} 
                      className={styles.cardImage} 
                    />
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
                          <span style={{ display: "flex", alignItems: "center", gap: "2px" }}><Footprints size={12} strokeWidth={2} />{getRouteStats(rally).participants}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "2px", color: "#FFD700" }}><Star size={12} fill="currentColor" strokeWidth={2} />{getRouteStats(rally).favorites}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{rally.title}</h3>
                    <p className={styles.cardDesc}>{rally.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p style={{ textAlign: "center", width: "100%", color: "#888", padding: "40px 0" }}>
                現在公開中のルートはありません。<br/>
                Supabaseの「routes」テーブルにデータを追加してください！
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
