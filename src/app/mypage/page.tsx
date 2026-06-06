"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";

const MENU_ITEMS = [
  { id: "search", icon: "🔍", label: "探す" },
  { id: "active", icon: "🚶", label: "進行中" },
  { id: "achievements", icon: "🏆", label: "実績" },
  { id: "my-rallies", icon: "🎨", label: "マイルート" },
  { id: "comments", icon: "💬", label: "保存リスト" },
  { id: "payment", icon: "💳", label: "お支払い" },
  { id: "profile", icon: "⚙️", label: "設定" },
];

const ALL_STATIC_BADGES = [
  { code: "first_step", name_ja: "初めての一歩", subtitle_en: "First Step", rarity: 1, description: "初めてのスポットへの押印を記録した証" },
  { code: "beta_pioneer", name_ja: "ベータ探索者", subtitle_en: "Beta Pioneer", rarity: 3, description: "SHUINの黎明期（β版）に参加し、街のしるしを巡りはじめた先駆者の証" },
  { code: "cherry_blossom_visitor", name_ja: "桜の頃の訪問者", subtitle_en: "Cherry Blossom Visitor", rarity: 2, description: "桜舞う春の季節（3/20〜4/10）に街を歩き、しるしを刻んだ証" },
  { code: "midsummer_pathfinder", name_ja: "盛夏の踏破者", subtitle_en: "Midsummer Pathfinder", rarity: 2, description: "陽光照りつける夏の季節（7/20〜8/20）に街を歩き、しるしを刻んだ証" },
  { code: "autumn_witness", name_ja: "紅葉の証人", subtitle_en: "Autumn Witness", rarity: 2, description: "紅葉色づく秋の季節（10/15〜11/15）に街を歩き、しるしを刻んだ証" },
  { code: "winter_solstice_walker", name_ja: "冬至の歩者", subtitle_en: "Winter Solstice Walker", rarity: 2, description: "冬至の澄んだ空気の中（12/19〜12/25）を歩き、しるしを刻んだ証" },
  { code: "new_years_pilgrim", name_ja: "年越しの使者", subtitle_en: "New Year's Pilgrim", rarity: 3, description: "新しい年の始まり（1/1〜1/3）に街を訪れ、しるしを刻んだ証" },
  { code: "the_persistent", name_ja: "継続する者", subtitle_en: "The Persistent", rarity: 1, description: "累計10箇所のスポットへ訪れ、しるしを重ねてきた証" },
  { code: "the_walker", name_ja: "歩み続ける者", subtitle_en: "The Walker", rarity: 2, description: "累計50箇所のスポットへ訪れ、街の記憶を巡り続けた証" },
  { code: "record_keeper", name_ja: "踏破の記録者", subtitle_en: "Record Keeper", rarity: 3, description: "累計100箇所のスポットへ訪れ、数多のしるしを刻み込んだ証" },
  { code: "lore_collector", name_ja: "物語の収集者", subtitle_en: "Lore Collector", rarity: 2, description: "10箇所のスポットを訪れ、多くの物語片を集めた証" },
  { code: "keeper_of_stories", name_ja: "語り継ぐ者", subtitle_en: "Keeper of Stories", rarity: 3, description: "ルートの全スポットを巡り、失われつつある物語を心に刻んだ証" }
];

import { useMyPageData } from "@/hooks/useMyPageData";

export default function MyPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("active");
  const [userBadges, setUserBadges] = useState<any[]>([]);
  const [badgesLoading, setBadgesLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    
    async function loadBadges(userId: string) {
      setBadgesLoading(true);
      try {
        const { data, error } = await supabase
          .from("badge_assignments")
          .select(`
            id,
            acquired_at,
            badges (
              id,
              code,
              category,
              name_ja,
              subtitle_en,
              rarity,
              description
            )
          `)
          .eq("user_id", userId)
          .order("acquired_at", { ascending: false });

        if (!error && data) {
          setUserBadges(data);
        }
      } catch (err) {
        console.error("Failed to load user badges", err);
      } finally {
        setBadgesLoading(false);
      }
    }

    loadBadges(user.id);
  }, [user]);

  const { activeRallies, bookmarkedRallies, dataLoading, leaveNarrative } = useMyPageData(user);

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
            <h2 className={styles.sectionTitle}>ルートを探す</h2>
            <div className={styles.mockCard}>
              <h3 className={styles.mockTitle}>📍 現在地から探す</h3>
              <p className={styles.mockDesc}>あなたの周辺で開催中のルートをマップに表示します。</p>
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
            <h2 className={styles.sectionTitle}>進行中のルート</h2>
            {dataLoading ? (
              <p>データを読み込んでいます...</p>
            ) : activeRallies.length > 0 ? (
              activeRallies.map((ur) => (
                <div key={ur.id} className={styles.mockCard}>
                  <h3 className={styles.mockTitle}>{ur.routes?.title}</h3>
                  <p className={styles.mockDesc}>参加日: {new Date(ur.joined_at).toLocaleDateString()}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "700" }}>
                    <span>ステータス</span>
                    <span>{ur.status === 'COMPLETED' ? 'クリア！🎉' : '進行中'}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: ur.status === 'COMPLETED' ? "100%" : "10%" }}></div>
                  </div>
                  <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                    <button onClick={() => leaveNarrative(ur.route_id)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: "0.85rem", background: "#f0f0f0", color: "#333", border: "none", borderRadius: "8px", cursor: "pointer" }}>離脱する</button>
                    <Link href={`/routes/${ur.route_id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.85rem" }}>ルートを見る</Link>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: '#888' }}>現在参加中のルートはありません。</p>
            )}
          </div>
        );
      case "achievements": {
        // 獲得済みのバッジコードのリスト
        const acquiredCodes = new Set(userBadges.map((ub) => ub.badges?.code));

        // 静的バッジの獲得・未獲得を整理
        const staticBadgesToShow = ALL_STATIC_BADGES.map((b) => {
          const isAcquired = acquiredCodes.has(b.code);
          const assignment = userBadges.find((ub) => ub.badges?.code === b.code);
          return {
            ...b,
            isAcquired,
            acquired_at: assignment ? new Date(assignment.acquired_at).toLocaleDateString("ja-JP") : null,
          };
        });

        // 静的バッジにない、動的バッジ（スポット来訪、ルート完走など）を抽出
        const staticCodes = new Set(ALL_STATIC_BADGES.map((b) => b.code));
        const dynamicBadgesAcquired = userBadges
          .filter((ub) => ub.badges && !staticCodes.has(ub.badges.code))
          .map((ub) => ({
            code: ub.badges.code,
            name_ja: ub.badges.name_ja,
            subtitle_en: ub.badges.subtitle_en,
            rarity: ub.badges.rarity,
            description: ub.badges.description || "街のしるしを巡り、物語を紐解いた証",
            isAcquired: true,
            acquired_at: new Date(ub.acquired_at).toLocaleDateString("ja-JP"),
          }));

        // すべてのバッジを結合（獲得済みの動的バッジ ＋ 静的バッジリスト）
        const allBadges = [...dynamicBadgesAcquired, ...staticBadgesToShow];

        return (
          <div>
            <h2 className={styles.sectionTitle}>実績と称号</h2>
            {badgesLoading ? (
              <p>実績を読み込んでいます...</p>
            ) : allBadges.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                {allBadges.map((badge, idx) => (
                  <div 
                    key={badge.code + idx} 
                    className="glass-card"
                    style={{
                      background: badge.isAcquired ? "#0D0D0D" : "rgba(18, 18, 18, 0.4)",
                      border: badge.isAcquired ? "1px solid var(--accent-color)" : "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      opacity: badge.isAcquired ? 1 : 0.45,
                      boxShadow: badge.isAcquired ? "0 4px 20px rgba(201, 168, 76, 0.15)" : "none",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <span style={{ 
                          color: badge.isAcquired ? "var(--accent-color)" : "#888", 
                          fontSize: "0.75rem", 
                          fontWeight: "800",
                          letterSpacing: "1px",
                          textTransform: "uppercase"
                        }}>
                          {badge.isAcquired ? "★".repeat(badge.rarity) : "☆".repeat(badge.rarity)}
                        </span>
                        <h3 style={{ 
                          fontSize: "1.15rem", 
                          fontWeight: "800", 
                          color: badge.isAcquired ? "var(--accent-color)" : "#888",
                          margin: "4px 0 2px",
                          fontFamily: "serif"
                        }}>
                          {badge.isAcquired ? badge.name_ja : "未開のしるし"}
                        </h3>
                        <p style={{ 
                          fontSize: "0.75rem", 
                          color: badge.isAcquired ? "#888888" : "#555555", 
                          fontStyle: "italic", 
                          margin: 0 
                        }}>
                          {badge.subtitle_en}
                        </p>
                      </div>
                      <span style={{ fontSize: "1.6rem", opacity: badge.isAcquired ? 1 : 0.2 }}>
                        {badge.isAcquired ? "🏆" : "🔒"}
                      </span>
                    </div>
                    
                    <p style={{ 
                      fontSize: "0.85rem", 
                      color: badge.isAcquired ? "#F2F2F2" : "#777777", 
                      margin: "8px 0 4px",
                      lineHeight: "1.6"
                    }}>
                      {badge.description}
                    </p>

                    {badge.isAcquired && badge.acquired_at && (
                      <div style={{ 
                        fontSize: "0.75rem", 
                        color: "var(--accent-color)", 
                        alignSelf: "flex-end",
                        fontWeight: "600",
                        marginTop: "4px"
                      }}>
                        獲得日: {badge.acquired_at}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>称号データがありません。</p>
            )}
          </div>
        );
      }
      case "my-rallies":
        return (
          <div>
            <h2 className={styles.sectionTitle}>マイルート（自作ルート）</h2>
            <div style={{ marginBottom: "20px" }}>
              <button className="btn-primary">＋ 新しくルートを作成する</button>
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
            <h2 className={styles.sectionTitle}>保存したルート</h2>
            {dataLoading ? (
              <p>データを読み込んでいます...</p>
            ) : bookmarkedRallies.length > 0 ? (
              bookmarkedRallies.map((bm) => (
                <div key={bm.route_id} className={styles.mockCard}>
                  <span className={styles.tag} style={{ background: "rgba(0, 196, 204, 0.1)", color: "var(--secondary-color)" }}>保存済み</span>
                  <h3 className={styles.mockTitle} style={{ marginTop: "8px" }}>{bm.routes?.title}</h3>
                  <p className={styles.mockDesc}>保存日: {new Date(bm.created_at).toLocaleDateString()}</p>
                  <div style={{ marginTop: "12px", textAlign: "right" }}>
                    <Link href={`/routes/${bm.route_id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.85rem" }}>詳細を見る</Link>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: '#888' }}>保存したルートはありません。</p>
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
      <header style={{ padding: "20px 0" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
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
