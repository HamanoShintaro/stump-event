"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import styles from "./page.module.css";

const MENU_ITEMS = [
  { id: "search", icon: "🔍", label: "スタンプラリーを探す" },
  { id: "active", icon: "🚶", label: "参加中のスタンプラリー" },
  { id: "achievements", icon: "🏆", label: "あなたの実績" },
  { id: "my-rallies", icon: "🎨", label: "マイラリー" },
  { id: "comments", icon: "💬", label: "コメント・保存" },
  { id: "payment", icon: "💳", label: "お支払い情報" },
  { id: "profile", icon: "⚙️", label: "ご登録情報" },
];

import { supabase } from "@/lib/supabase";

export default function MyPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("active");

  const [activeRallies, setActiveRallies] = useState<any[]>([]);
  const [bookmarkedRallies, setBookmarkedRallies] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    const fetchMyData = async () => {
      setDataLoading(true);
      // 参加中のラリーを取得
      const { data: userRalliesData } = await supabase
        .from("user_rallies")
        .select(`*, rallies(*)`)
        .eq("user_id", user.id)
        .order("joined_at", { ascending: false });
      
      // 保存したラリーを取得
      const { data: userBookmarksData } = await supabase
        .from("user_bookmarks")
        .select(`*, rallies(*)`)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setActiveRallies(userRalliesData || []);
      setBookmarkedRallies(userBookmarksData || []);
      setDataLoading(false);
    };
    fetchMyData();
  }, [user]);

  if (loading || !user) {
    return <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>読み込み中...</div>;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return (
          <div>
            <h2 className={styles.sectionTitle}>スタンプラリーを探す</h2>
            <div className={styles.mockCard}>
              <h3 className={styles.mockTitle}>📍 現在地から探す</h3>
              <p className={styles.mockDesc}>あなたの周辺で開催中のラリーをマップに表示します。</p>
              <div style={{ height: "200px", background: "rgba(255,255,255,0.7)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", border: "2px dashed #ccc" }}>
                [Google Maps UI プレースホルダー]
              </div>
            </div>
            <div className={styles.mockCard}>
              <h3 className={styles.mockTitle}>🔍 条件で検索する</h3>
              <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span className={styles.tag}>地域: 埼玉県</span>
                <span className={styles.tag}>タグ: グルメ</span>
                <span className={styles.tag}>所要時間: 2時間〜</span>
              </div>
              <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>検索結果を見る (12件)</button>
            </div>
          </div>
        );
      case "active":
        return (
          <div>
            <h2 className={styles.sectionTitle}>参加中のスタンプラリー</h2>
            {dataLoading ? (
              <p>データを読み込んでいます...</p>
            ) : activeRallies.length > 0 ? (
              activeRallies.map((ur) => (
                <div key={ur.id} className={styles.mockCard}>
                  <h3 className={styles.mockTitle}>{ur.rallies?.title}</h3>
                  <p className={styles.mockDesc}>参加日: {new Date(ur.joined_at).toLocaleDateString()}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "700" }}>
                    <span>ステータス</span>
                    <span>{ur.status === 'COMPLETED' ? 'クリア！🎉' : '進行中'}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: ur.status === 'COMPLETED' ? "100%" : "10%" }}></div>
                  </div>
                  <div style={{ marginTop: "16px", textAlign: "right" }}>
                    <Link href={`/rallies/${ur.rally_id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.85rem" }}>ラリーを見る</Link>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: '#888' }}>現在参加中のラリーはありません。</p>
            )}
          </div>
        );
      case "achievements":
        return (
          <div>
            <h2 className={styles.sectionTitle}>あなたの実績</h2>
            <div className={styles.mockCard} style={{ opacity: 0.85 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className={styles.mockTitle} style={{ marginBottom: 0 }}>🌸 春のさくら名所めぐり2025</h3>
                <span style={{ fontSize: "1.5rem" }}>👑</span>
              </div>
              <hr style={{ border: "none", borderTop: "1px dashed rgba(0,0,0,0.1)", margin: "12px 0" }} />
              <p className={styles.mockDesc} style={{ margin: "4px 0" }}>コンプリート日: 2025/04/10</p>
              <p className={styles.mockDesc} style={{ margin: "4px 0" }}>クリアタイム: 3時間 45分</p>
              <div style={{ marginTop: "12px" }}>
                <span className={styles.tag} style={{ background: "rgba(255, 71, 133, 0.1)", color: "var(--primary-color)" }}>全5スポット制覇！</span>
              </div>
            </div>
          </div>
        );
      case "my-rallies":
        return (
          <div>
            <h2 className={styles.sectionTitle}>マイラリー（自作ラリー）</h2>
            <div style={{ marginBottom: "20px" }}>
              <button className="btn-primary">＋ 新しくラリーを作成する</button>
            </div>
            <div className={styles.mockCard}>
              <h3 className={styles.mockTitle}>地元民しか知らない裏路地カフェ巡り</h3>
              <p className={styles.mockDesc}>作成日: 2026/01/15</p>
              <div style={{ display: "flex", gap: "16px", fontSize: "0.9rem", opacity: 0.8, background: "rgba(255,255,255,0.5)", padding: "12px", borderRadius: "8px" }}>
                <span>▶️ プレイ数: 142</span>
                <span>❤️ いいね: 45</span>
                <span>💬 コメント: 12</span>
              </div>
            </div>
          </div>
        );
      case "comments":
        return (
          <div>
            <h2 className={styles.sectionTitle}>保存したラリー</h2>
            {dataLoading ? (
              <p>データを読み込んでいます...</p>
            ) : bookmarkedRallies.length > 0 ? (
              bookmarkedRallies.map((bm) => (
                <div key={bm.rally_id} className={styles.mockCard}>
                  <span className={styles.tag} style={{ background: "rgba(0, 196, 204, 0.1)", color: "var(--secondary-color)" }}>保存済み</span>
                  <h3 className={styles.mockTitle} style={{ marginTop: "8px" }}>{bm.rallies?.title}</h3>
                  <p className={styles.mockDesc}>保存日: {new Date(bm.created_at).toLocaleDateString()}</p>
                  <div style={{ marginTop: "12px", textAlign: "right" }}>
                    <Link href={`/rallies/${bm.rally_id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.85rem" }}>詳細を見る</Link>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: '#888' }}>保存したラリーはありません。</p>
            )}
          </div>
        );
      case "payment":
        return (
          <div>
            <h2 className={styles.sectionTitle}>お支払い情報</h2>
            <div className={styles.mockCard}>
              <h3 className={styles.mockTitle}>💳 登録済みのクレジットカード</h3>
              <div style={{ background: "rgba(255,255,255,0.6)", padding: "16px", borderRadius: "12px", marginTop: "12px" }}>
                <p className={styles.mockDesc} style={{ fontSize: "1.1rem", letterSpacing: "2px", fontWeight: "700" }}>Visa **** **** **** 1234</p>
                <p className={styles.mockDesc} style={{ marginBottom: 0 }}>有効期限: 12/28</p>
              </div>
              <div style={{ marginTop: "16px", textAlign: "right" }}>
                <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem", background: "var(--text-color)" }}>情報を更新する</button>
              </div>
            </div>
          </div>
        );
      case "profile":
        return (
          <div>
            <h2 className={styles.sectionTitle}>ご登録情報</h2>
            <div className={styles.mockCard}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", opacity: 0.8, marginBottom: "4px" }}>お名前</label>
                <div style={{ fontWeight: "700", fontSize: "1.1rem" }}>{user.user_metadata?.full_name || "ゲストユーザー"}</div>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", opacity: 0.8, marginBottom: "4px" }}>メールアドレス</label>
                <div style={{ fontWeight: "700", fontSize: "1.1rem" }}>{user.email}</div>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", opacity: 0.8, marginBottom: "4px" }}>電話番号</label>
                <div style={{ fontWeight: "700", fontSize: "1.1rem", color: "#999" }}>未登録</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed rgba(0,0,0,0.1)", paddingTop: "20px" }}>
                <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>プロフィールを編集</button>
                <button onClick={handleLogout} style={{ background: "transparent", border: "none", color: "var(--primary-color)", fontWeight: "700", cursor: "pointer", textDecoration: "underline" }}>ログアウト</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>
        <Link href="/" className="nav-logo">
          <img src="/logo-square.png" alt="勝手にスタンプラリー" style={{ height: "56px", width: "56px", display: "block", objectFit: "contain" }} />
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.dashboard}>
          <aside className={"glass-card " + styles.sidebar}>
            <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px", padding: "0 8px" }}>
              <img 
                src={user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} 
                alt="Profile" 
                style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "2px solid var(--primary-color)" }} 
              />
              <div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>ようこそ</div>
                <div style={{ fontWeight: "800", fontSize: "1.1rem", color: "var(--primary-color)" }}>{user.user_metadata?.full_name || "ユーザー"} さん</div>
              </div>
            </div>
            
            <div className={styles.menuList}>
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  className={`${styles.menuItem} ${activeTab === item.id ? styles.active : ""}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </aside>
          
          <div className={"glass-card " + styles.content}>
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
