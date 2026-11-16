import Link from "next/link";

export default function Footer() {
  return (
    <footer
      data-nosnippet
      style={{
      background: "#ECE7DC",
      padding: "48px 20px 36px",
      marginTop: "auto",
      color: "var(--text-color)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
        
        {/* サイトタイトルと説明 */}
        <div>
          <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--primary-color)", marginBottom: "10px", letterSpacing: "0.02em" }}>
            SHUIN まちのしるし
          </h2>
          <p style={{ fontSize: "0.8125rem", color: "var(--secondary-color)", lineHeight: "1.7", fontWeight: "600", wordBreak: "keep-all" }}>
            街を歩いて、しるしを刻む。<br />
            訪れた場所が、あなたのしるしになる。
          </p>
        </div>

        {/* SNSシェア */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a href="#" aria-label="Instagram" style={{ 
            display: "flex", justifyContent: "center", alignItems: "center", 
            width: "44px", height: "44px", borderRadius: "2px", background: "#FAF8F3",
            border: "1px solid rgba(17, 17, 17, 0.14)",
            color: "var(--text-color)", transition: "transform 0.2s" 
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" aria-label="X" style={{ 
            display: "flex", justifyContent: "center", alignItems: "center", 
            width: "44px", height: "44px", borderRadius: "2px", background: "#FAF8F3",
            border: "1px solid rgba(17, 17, 17, 0.14)",
            color: "var(--text-color)", transition: "transform 0.2s" 
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        </div>

        {/* リンク集 */}
        <div style={{ 
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px 20px", 
          fontSize: "0.8125rem", fontWeight: "700", color: "#5C4E43"
        }}>
          <Link href="/guide" style={{ textDecoration: "none", color: "var(--primary-color)", fontWeight: 800 }}>街歩きの手引き・使い方</Link>
          <Link href="/routes" style={{ textDecoration: "none", color: "inherit" }}>検索して探す</Link>
          <Link href="/map" style={{ textDecoration: "none", color: "inherit" }}>地図から探す</Link>
          <Link href="/areas" style={{ textDecoration: "none", color: "inherit" }}>エリアから探す</Link>
          <Link href="/terms" style={{ textDecoration: "none", color: "inherit" }}>利用規約</Link>
          <Link href="/privacy" style={{ textDecoration: "none", color: "inherit" }}>プライバシーポリシー</Link>
          <Link href="/tokushoho" style={{ textDecoration: "none", color: "inherit" }}>特定商取引法に基づく表記</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>お問合せ</Link>
        </div>

        {/* コピーライト */}
        <div style={{ fontSize: "0.75rem", color: "#8C8072", marginTop: "4px", fontWeight: "600" }}>
          &copy; {new Date().getFullYear()} SHUIN まちのしるし All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
