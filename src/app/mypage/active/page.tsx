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
            {activeRallies.map((ur) => {
              const totalSpots = ur.totalSpots || 0;
              const stampedCount = ur.stampedCount || 0;
              const progressPct = totalSpots > 0 ? Math.min(100, Math.round((stampedCount / totalSpots) * 100)) : 0;
              return (
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "#A39687", margin: "0 0 16px 0", flexWrap: "wrap", gap: "6px" }}>
                  <span>参加日: {new Date(ur.joined_at).toLocaleDateString("ja-JP")}</span>
                  {ur.remainingHours != null && (
                    <span style={{ color: "var(--accent-color)", fontWeight: 700 }}>
                      残り有効時間: 約{ur.remainingHours}時間（参加から24時間有効）
                    </span>
                  )}
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "700", color: "#E0D7CD", marginBottom: "8px" }}>
                  <span>獲得したしるし</span>
                  <span>{totalSpots > 0 ? `${stampedCount} / ${totalSpots} 個` : `${stampedCount} 個`}（進行中）</span>
                </div>
                <div style={{ width: "100%", height: "8px", background: "#333", borderRadius: "4px", overflow: "hidden", marginBottom: "16px" }}>
                  <div style={{ width: `${progressPct}%`, height: "100%", background: "var(--primary-color)", transition: "width 0.3s ease" }}></div>
                </div>

                {ur.group && (
                  <div style={{ 
                    marginTop: "16px", 
                    marginBottom: "16px",
                    padding: "12px 16px", 
                    background: "rgba(201, 168, 76, 0.08)", 
                    border: "1px dashed var(--accent-color)", 
                    borderRadius: "10px",
                    fontSize: "0.85rem",
                    color: "#E0D7CD"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "bold", marginBottom: "6px", flexWrap: "wrap" }}>
                      <span>👥 連れ立ち中</span>
                      <span style={{
                        fontSize: "0.7rem",
                        padding: "1px 8px",
                        borderRadius: "10px",
                        background: ur.group.partners.length > 0 ? "rgba(46, 125, 50, 0.25)" : "rgba(201, 168, 76, 0.2)",
                        color: ur.group.partners.length > 0 ? "#81C784" : "var(--accent-color)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}>
                        {ur.group.partners.length > 0 ? `✓ 合流済み（同行 ${ur.group.partners.length}名）` : "合流待ち"}
                      </span>
                      <span style={{ marginLeft: "auto", fontSize: "0.75rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "1px 6px", borderRadius: "4px", color: "var(--accent-color)" }}>
                        コード: {ur.group.inviteCode}
                      </span>
                    </div>
                    <div style={{ color: "#B3A598" }}>
                      {ur.group.partners.length > 0 ? (
                        <>同行者: <strong style={{ color: "#E0D7CD" }}>{ur.group.partners.map((p: any) => p.displayName).join("、")} さん</strong></>
                      ) : (
                        <>同行する友達の合流を待っています</>
                      )}
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
                  <button onClick={() => leaveNarrative(ur.route_id)} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", background: "transparent", border: "1px solid rgba(217,101,91,0.3)", color: "#D9655B", borderRadius: "8px", cursor: "pointer" }}>進行中から外す</button>
                  {ur.group && (
                    <Link href={`/routes/${ur.route_id}/map?groupId=${ur.group.id}`} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", textDecoration: "none", border: "1px solid var(--accent-color)", color: "var(--accent-color)", borderRadius: "8px" }}>🗺️ 連れ立ちマップ</Link>
                  )}
                  <Link href={`/routes/${ur.route_id}${ur.group ? `?groupId=${ur.group.id}` : ""}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", textDecoration: "none" }}>再開する</Link>
                </div>
              </div>
              );
            })}
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
