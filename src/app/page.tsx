import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container">
      <header>
        <div className="nav-logo">
          <img src="/service-logo.png" alt="みんなのスタンプラリー" style={{ height: "80px", width: "auto" }} />
        </div>
        <nav>
          <Link href="/mypage" className="btn-primary">
            マイページ
          </Link>
        </nav>
      </header>
      
      <section className={styles.hero}>
        <div className={"glass-card " + styles.heroBox}>
          <h1 className={styles.title}>
            すべての好きが、<br/>地図になる。
          </h1>
          <p className={styles.subtitle}>
            「あのひと」と「あの作品」と「あの地域」を巡る。<br/>
            知らない週末が、まだある。
          </p>
          <div className={styles.cta}>
            <Link href="/rallies" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.1rem" }}>
              スタンプラリーを探す
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
