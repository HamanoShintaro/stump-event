import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--card-bg)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderTop: "1px solid rgba(255, 255, 255, 0.6)",
      padding: "48px 20px 32px",
      marginTop: "auto",
      color: "var(--text-color)",
      textAlign: "center",
      boxShadow: "0 -4px 20px rgba(0,0,0,0.02)"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* サイトタイトルと説明 */}
        <div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--primary-color)", marginBottom: "12px", letterSpacing: "-0.05em" }}>
            みんなのスタンプラリー
          </h2>
          <p style={{ fontSize: "0.7rem", color: "var(--secondary-color)", lineHeight: "1.6", fontWeight: "600", wordBreak: "keep-all" }}>
            日常の散歩から旅行まで、すべての「好き」が地図になる。<br />
            あなただけのルートを作って、みんなとシェアしよう！
          </p>
        </div>

        {/* SNSシェア */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a href="#" style={{ 
            display: "flex", justifyContent: "center", alignItems: "center", 
            width: "44px", height: "44px", borderRadius: "50%", background: "#EBE5D9",
            color: "var(--text-color)", transition: "transform 0.2s" 
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" style={{ 
            display: "flex", justifyContent: "center", alignItems: "center", 
            width: "44px", height: "44px", borderRadius: "50%", background: "#EBE5D9",
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
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 24px", 
          fontSize: "0.8rem", fontWeight: "700", color: "#888"
        }}>
          <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>利用規約</Link>
          <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>プライバシーポリシー</Link>
          <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>お問合せ</Link>
          <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>運営会社</Link>
        </div>

        {/* コピーライト */}
        <div style={{ fontSize: "0.75rem", color: "#A39687", marginTop: "8px", fontWeight: "600" }}>
          &copy; {new Date().getFullYear()} みんなのスタンプラリー All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
