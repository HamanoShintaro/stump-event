import Link from "next/link";
import { mockRallies } from "@/data/mock";
import styles from "./page.module.css";

export default function RalliesPage() {
  return (
    <div className="container">
      <header>
        <Link href="/" className="nav-logo">
          <img src="/service-logo.png" alt="みんなのスタンプラリー" style={{ height: "80px", width: "auto", display: "block" }} />
        </Link>
        <nav>
          <Link href="/mypage" className="btn-primary">
            マイページ
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>スタンプラリーを探す</h1>
        <p className={styles.pageSubtitle}>現在参加可能なスタンプラリー一覧です。気になるエリアを見つけて参加しよう！</p>

        <div className={styles.grid}>
          {mockRallies.map((rally) => (
            <Link href={`/rallies/${rally.id}`} key={rally.id} className={styles.cardWrapper}>
              <div className={"glass-card " + styles.card}>
                <div 
                  className={styles.imageBox} 
                  style={{ backgroundImage: `url(${rally.imageUrl})` }} 
                />
                <div className={styles.cardContent}>
                  <div className={styles.regionTag}>{rally.region}</div>
                  <h2 className={styles.rallyTitle}>{rally.title}</h2>
                  <p className={styles.rallyDesc}>{rally.description}</p>
                  <div className={styles.cardFooter}>
                    <span>📍 {rally.spots.length} スポット</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
