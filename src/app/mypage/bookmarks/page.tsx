"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useMyPageData } from "@/hooks/useMyPageData";
import HeaderNav from "@/components/HeaderNav";
import { ChevronLeft } from "lucide-react";

export default function BookmarkedRoutesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const { bookmarkedRallies, dataLoading } = useMyPageData(user);

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

        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-color)", margin: "0 0 24px 0" }}>保存したルート</h1>

        {dataLoading ? (
          <p style={{ color: "#A39687" }}>読み込み中...</p>
        ) : bookmarkedRallies.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {bookmarkedRallies.map((bm) => (
              <div 
                key={bm.route_id} 
                className="glass-card"
                style={{ 
                  padding: "20px", 
                  background: "#FFFDF9", 
                  border: "1px solid #EBE5D9", 
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <span style={{ background: "rgba(0, 196, 204, 0.1)", color: "var(--secondary-color)", fontSize: "0.75rem", padding: "3px 8px", borderRadius: "6px", fontWeight: "bold" }}>保存済み</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: "10px 0 6px 0" }}>{bm.routes?.title}</h3>
                  <p style={{ fontSize: "0.75rem", color: "#A39687", margin: 0 }}>保存日: {new Date(bm.created_at).toLocaleDateString("ja-JP")}</p>
                </div>
                <div style={{ marginTop: "16px", textAlign: "right" }}>
                  <Link href={`/routes/${bm.route_id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.8rem", textDecoration: "none" }}>詳細を見る</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#B3A598" }}>
            <p style={{ margin: 0 }}>保存したルートはありません。</p>
          </div>
        )}
      </main>
    </div>
  );
}
