"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useMyPageData } from "@/hooks/useMyPageData";
import HeaderNav from "@/components/HeaderNav";
import { ChevronLeft } from "lucide-react";

export default function ActiveRoutesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const { activeRallies, dataLoading, leaveNarrative } = useMyPageData(user);

  if (loading || !user) {
    return <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>読み込み中...</div>;
  }

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "60px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link href="/mypage" style={{ display: "flex", alignItems: "center", gap: "4px", color: "#A39687", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" }}>
            <ChevronLeft size={16} /> マイページへ戻る
          </Link>
        </div>

        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-color)", margin: "0 0 24px 0" }}>進行中のルート</h1>

        {dataLoading ? (
          <p style={{ color: "#A39687" }}>読み込み中...</p>
        ) : activeRallies.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {activeRallies.map((ur) => (
              <div 
                key={ur.id} 
                className="glass-card" 
                style={{ 
                  padding: "20px 24px", 
                  borderRadius: "14px", 
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  background: "#121212"
                }}
              >
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--accent-color)", margin: "0 0 8px 0" }}>{ur.routes?.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#A39687", margin: "0 0 16px 0" }}>参加日: {new Date(ur.joined_at).toLocaleDateString("ja-JP")}</p>
                
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "700", color: "#E0D7CD", marginBottom: "8px" }}>
                  <span>進捗状況</span>
                  <span>{ur.status === 'COMPLETED' ? 'クリア！🎉' : '進行中'}</span>
                </div>
                <div style={{ width: "100%", height: "8px", background: "#333", borderRadius: "4px", overflow: "hidden", marginBottom: "16px" }}>
                  <div style={{ width: ur.status === 'COMPLETED' ? "100%" : "15%", height: "100%", background: "var(--primary-color)" }}></div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "12px" }}>
                  <button onClick={() => leaveNarrative(ur.route_id)} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", background: "transparent", border: "1px solid rgba(217,101,91,0.3)", color: "#D9655B", borderRadius: "8px", cursor: "pointer" }}>離脱する</button>
                  <Link href={`/routes/${ur.route_id}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", textDecoration: "none" }}>再開する</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#B3A598" }}>
            <p style={{ margin: "0 0 16px 0" }}>現在、進行中のルートはありません。</p>
            <Link href="/routes" className="btn-primary" style={{ padding: "10px 20px", textDecoration: "none" }}>ルートを探す</Link>
          </div>
        )}
      </main>
    </div>
  );
}
