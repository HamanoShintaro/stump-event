"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import HeaderNav from "@/components/HeaderNav";
import { Users, X, Settings, LogOut, Bell, ArrowRight, ChevronLeft } from "lucide-react";
import { useMyPageData } from "@/hooks/useMyPageData";
import styles from "./page.module.css";

// 街の便り（仮データ - 最新のものを表示）
const LATEST_NEWS = {
  date: "2026.07.18",
  title: "岩槻ルートの公開と「連れ立ち」機能追加のお知らせ",
  summary: "歴史ある城下町・岩槻をめぐる新しいルートが公開されました。また、友達と一緒に同じルートを巡る「連れ立ち」機能が本日から利用可能になりました。マイページまたはマップ画面から招待コードを入力して合流しましょう！"
};

export default function MyPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [userBadges, setUserBadges] = useState<any[]>([]);
  const [badgesLoading, setBadgesLoading] = useState(false);
  const [diary, setDiary] = useState<any[]>([]);
  const [diaryLoading, setDiaryLoading] = useState(false);

  // 連れ立ち用State
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [inviteCodeInput, setInviteCodeInput] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const { showAlert } = useCustomAlert();

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

  useEffect(() => {
    if (!user) return;
    (async () => {
      setDiaryLoading(true);
      try {
        const { data: evs, error } = await supabase
          .from("stamp_events")
          .select("id, created_at, visitor_number, spot_id, route_id")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (error) { console.error("diary fetch error", error); return; }
        const events = evs || [];
        const spotIds = [...new Set(events.map((e: any) => e.spot_id).filter(Boolean))];
        const routeIds = [...new Set(events.map((e: any) => e.route_id).filter(Boolean))];
        const spotMap: Record<string, string> = {};
        const routeMap: Record<string, string> = {};
        if (spotIds.length) {
          const { data: sp } = await supabase.from("spots").select("id, name").in("id", spotIds);
          (sp || []).forEach((x: any) => { spotMap[x.id] = x.name; });
        }
        if (routeIds.length) {
          const { data: rt } = await supabase.from("routes").select("id, title, name").in("id", routeIds);
          (rt || []).forEach((x: any) => { routeMap[x.id] = x.title || x.name; });
        }
        setDiary(events.map((e: any) => ({ ...e, spotName: spotMap[e.spot_id], routeName: routeMap[e.route_id] })));
      } catch (e) {
        console.error("Failed to load diary", e);
      } finally {
        setDiaryLoading(false);
      }
    })();
  }, [user]);

  const { activeRallies, bookmarkedRallies, dataLoading, leaveNarrative } = useMyPageData(user);

  if (loading || !user) {
    return <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>読み込み中...</div>;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  // 獲得した称号（最大3個）
  const earnedBadges = userBadges.map(ub => ub.badges).filter(Boolean).slice(0, 3);

  const handleJoinGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    const cleanCode = inviteCodeInput.replace(/\s+/g, "");
    if (cleanCode.length !== 6 || !/^\d{6}$/.test(cleanCode)) {
      await showAlert({ text: "招待コードは6桁の半角数字で入力してください。", okText: "確認" });
      return;
    }
    
    setIsJoining(true);
    try {
      const { data: grp, error: grpError } = await supabase
        .from("groups")
        .select("*")
        .eq("invite_code", cleanCode)
        .eq("is_active", true)
        .maybeSingle();
        
      if (grpError) throw grpError;
      if (!grp) {
        await showAlert({ text: "指定された招待コードの連れ立ちグループが見つかりません。コードが正しいか、またはすでに解散されていないかご確認ください。", okText: "確認" });
        return;
      }
      
      const { data: existingMember } = await supabase
        .from("group_members")
        .select("id")
        .eq("group_id", grp.id)
        .eq("user_id", user.id)
        .maybeSingle();
        
      if (!existingMember) {
        const { error: joinError } = await supabase
          .from("group_members")
          .insert({
            group_id: grp.id,
            user_id: user.id
          });
          
        if (joinError) throw joinError;
      }
      
      setShowJoinDialog(false);
      router.push(`/routes/${grp.route_id}/map?groupId=${grp.id}`);
    } catch (err: any) {
      await showAlert({ text: `連れ立ちへの参加に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "4px", color: "#A39687", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" }}>
            <ChevronLeft size={16} /> ホームへ戻る
          </Link>
        </div>

        {/* ユーザープロフィールヘッダー */}
        <section 
          className="glass-card" 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "24px 20px", 
            borderRadius: "16px", 
            border: "1px solid #EBE5D9", 
            background: "#FFFDF9",
            boxShadow: "0 4px 15px rgba(92, 78, 67, 0.04)",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img 
              src={user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} 
              alt="Profile" 
              style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#fff", border: "2px solid var(--primary-color)" }} 
            />
            <div>
              <div style={{ fontSize: "0.8rem", color: "#A39687" }}>ようこそ</div>
              <h1 style={{ fontWeight: "800", fontSize: "1.3rem", color: "var(--primary-color)", margin: "2px 0 0 0" }}>
                {user.user_metadata?.full_name || "ユーザー"} さん
              </h1>
              <div style={{ fontSize: "0.75rem", color: "#8A7E72", marginTop: "2px" }}>{user.email}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link href="/settings" className="btn-secondary" style={{ padding: "8px 12px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", color: "#5C4E43", border: "1px solid #EBE5D9", background: "transparent", borderRadius: "8px" }}>
              <Settings size={16} /> 設定
            </Link>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: "8px 12px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px", color: "#D9655B", border: "1px solid rgba(217,101,91,0.3)", background: "transparent", borderRadius: "8px", cursor: "pointer" }}>
              <LogOut size={16} /> ログアウト
            </button>
          </div>
        </section>

        {/* 連れ立ちクイックアクセス */}
        <section 
          className="glass-card" 
          style={{ 
            padding: "16px 20px", 
            borderRadius: "14px", 
            border: "1px solid #EBE5D9",
            background: "linear-gradient(135deg, #FFFDF9 0%, #FAF6EE 100%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "24px",
            boxShadow: "0 4px 12px rgba(92, 78, 67, 0.04)"
          }}
        >
          <div>
            <h3 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 2px 0", display: "flex", alignItems: "center", gap: "6px" }}>
              <Users size={16} color="var(--primary-color)" /> 友達と「連れ立ち」で巡る
            </h3>
            <p style={{ fontSize: "0.75rem", color: "#8A7E72", margin: 0 }}>
              招待コードを入力して、友達のグループに合流します。
            </p>
          </div>
          <button 
            onClick={() => {
              setInviteCodeInput("");
              setShowJoinDialog(true);
            }}
            className="btn-primary" 
            style={{ 
              padding: "10px 16px", 
              fontSize: "0.85rem", 
              fontWeight: "bold",
              background: "var(--primary-color)",
              boxShadow: "0 2px 8px rgba(199, 68, 46, 0.2)"
            }}
          >
            招待コードを入力
          </button>
        </section>

        {/* メインダッシュボードコンテンツ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          
          {/* 0. 街の便り */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyItems: "center" }}><Bell size={18} color="var(--primary-color)" /></span> 街の便り
              </h2>
              <Link href="/notifications" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                一覧を見る <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ padding: "14px 16px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.75rem", color: "#A39687" }}>{LATEST_NEWS.date}</span>
                <span style={{ fontSize: "0.7rem", background: "rgba(217,101,91,0.1)", color: "var(--primary-color)", padding: "1px 5px", borderRadius: "4px", fontWeight: "bold" }}>最新</span>
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#5C4E43", margin: "0 0 6px 0", lineHeight: "1.4" }}>
                <Link href="/notifications" style={{ textDecoration: "none", color: "inherit" }}>
                  {LATEST_NEWS.title}
                </Link>
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#8A7E72", margin: 0, lineHeight: "1.4" }}>
                {LATEST_NEWS.summary}
              </p>
            </div>
          </section>

          {/* 1. 進行中ルート */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem" }}>🚶</span> 進行中のルート
              </h2>
              <Link href="/mypage/active" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {dataLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : activeRallies.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {activeRallies.slice(0, 1).map((ur) => (
                  <div key={ur.id} style={{ padding: "16px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "12px" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#5C4E43", margin: "0 0 8px 0" }}>{ur.routes?.title}</h3>
                    <p style={{ fontSize: "0.75rem", color: "#A39687", margin: "0 0 12px 0" }}>参加日: {new Date(ur.joined_at).toLocaleDateString("ja-JP")}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: "700", color: "#5C4E43", marginBottom: "6px" }}>
                      <span>クリア状況</span>
                      <span>{ur.status === 'COMPLETED' ? 'クリア！🎉' : '進行中'}</span>
                    </div>
                    <div style={{ width: "100%", height: "8px", background: "#EBE5D9", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ width: ur.status === 'COMPLETED' ? "100%" : "15%", height: "100%", background: "var(--primary-color)" }}></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "14px" }}>
                      <button onClick={() => leaveNarrative(ur.route_id)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: "0.8rem", background: "#f5f5f5", color: "#5c4e43", border: "none", borderRadius: "6px", cursor: "pointer" }}>離脱する</button>
                      <Link href={`/routes/${ur.route_id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.8rem", textDecoration: "none" }}>再開する</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 0", color: "#B3A598" }}>
                <p style={{ margin: "0 0 12px 0", fontSize: "0.9rem" }}>現在、進行中のルートはありません。</p>
                <Link href="/routes" className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", textDecoration: "none", display: "inline-block" }}>ルートを探す</Link>
              </div>
            )}
          </section>

          {/* 2. 最近獲得した称号 */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span> 最近獲得した称号
              </h2>
              <Link href="/badges" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {badgesLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : earnedBadges.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
                {earnedBadges.map((badge, idx) => (
                  <div key={badge.code + idx} style={{ background: "#FFFDF9", border: "1px solid var(--accent-color, #C9A84C)", borderRadius: "10px", padding: "14px 10px", textAlign: "center" }}>
                    <div style={{ color: "#C9A84C", fontSize: "0.6rem", letterSpacing: "1px", marginBottom: "2px" }}>{"★".repeat(badge.rarity || 1)}</div>
                    <div style={{ color: "#C9A84C", fontSize: "0.85rem", fontWeight: 800, fontFamily: "var(--font-family), serif", margin: "4px 0 2px" }}>{badge.name_ja}</div>
                    <div style={{ color: "#9a8f6f", fontSize: "0.65rem", fontStyle: "italic" }}>{badge.subtitle_en}</div>
                    {badge.acquired_at && (
                      <div style={{ color: "#6f675a", fontSize: "0.6rem", marginTop: "6px" }}>
                        {new Date(badge.acquired_at).toLocaleDateString("ja-JP")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#B3A598" }}>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>獲得した称号はまだありません。街を歩いて、しるしを刻みましょう。</p>
              </div>
            )}
          </section>

          {/* 3. 最近の来訪日記 */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem" }}>📖</span> 最近の来訪日記
              </h2>
              <Link href="/mypage/diary" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {diaryLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : diary.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {diary.slice(0, 3).map((d) => (
                  <div key={d.id} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "10px" }}>
                    <div style={{ minWidth: "70px", fontSize: "0.75rem", color: "var(--primary-color)", fontWeight: 700 }}>
                      {new Date(d.created_at).toLocaleDateString("ja-JP")}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: "#5C4E43", fontSize: "0.9rem" }}>{d.spotName || "スポット"}</div>
                      <div style={{ fontSize: "0.75rem", color: "#A39687", marginTop: "1px" }}>
                        {d.routeName || ""}{d.visitor_number ? ` ・ #${d.visitor_number}番目の来訪者` : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#B3A598" }}>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>押印（来訪）の記録はまだありません。</p>
              </div>
            )}
          </section>

          {/* 4. 保存リスト */}
          <section className="glass-card" style={{ padding: "20px 24px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#5C4E43", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem" }}>🔖</span> 保存したルート
              </h2>
              <Link href="/mypage/bookmarks" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            
            {dataLoading ? (
              <p style={{ color: "#A39687", fontSize: "0.9rem" }}>読み込み中...</p>
            ) : bookmarkedRallies.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
                {bookmarkedRallies.slice(0, 2).map((bm) => (
                  <div key={bm.route_id} style={{ padding: "14px", background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ background: "rgba(0, 196, 204, 0.1)", color: "var(--secondary-color)", fontSize: "0.7rem", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>保存済み</span>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#5C4E43", margin: "8px 0 4px 0" }}>{bm.routes?.title}</h3>
                      <p style={{ fontSize: "0.7rem", color: "#A39687", margin: 0 }}>保存日: {new Date(bm.created_at).toLocaleDateString("ja-JP")}</p>
                    </div>
                    <div style={{ marginTop: "12px", textAlign: "right" }}>
                      <Link href={`/routes/${bm.route_id}`} className="btn-primary" style={{ padding: "5px 10px", fontSize: "0.75rem", textDecoration: "none" }}>詳細を見る</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#B3A598" }}>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>保存したルートはありません。</p>
              </div>
            )}
          </section>

        </div>
      </main>

      {/* 招待コード入力モーダル */}
      {showJoinDialog && (
        <div 
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            background: "rgba(92, 78, 67, 0.4)", 
            backdropFilter: "blur(4px)",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            zIndex: 9999,
            padding: "20px"
          }}
        >
          <div 
            style={{ 
              background: "#FFFDF9", 
              border: "1px solid #EBE5D9", 
              borderRadius: "16px", 
              padding: "24px 20px", 
              width: "100%", 
              maxWidth: "380px", 
              boxShadow: "0 10px 25px rgba(92, 78, 67, 0.15)",
              position: "relative"
            }}
          >
            <button 
              onClick={() => setShowJoinDialog(false)}
              style={{ 
                position: "absolute", 
                top: "16px", 
                right: "16px", 
                background: "transparent", 
                border: "none", 
                cursor: "pointer",
                color: "#A39687"
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 8px 0" }}>
              連れ立ちに加わる
            </h3>
            <p style={{ fontSize: "0.8rem", color: "#8A7E72", margin: "0 0 20px 0", lineHeight: "1.4" }}>
              友達から共有された6桁の招待コードを入力してください。
            </p>

            <form onSubmit={handleJoinGroup}>
              <input 
                type="text" 
                value={inviteCodeInput}
                onChange={(e) => setInviteCodeInput(e.target.value)}
                placeholder="例: 123 456"
                maxLength={7}
                disabled={isJoining}
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  fontSize: "1.2rem", 
                  fontWeight: "bold",
                  textAlign: "center", 
                  letterSpacing: "2px", 
                  border: "1px solid #EBE5D9", 
                  borderRadius: "8px", 
                  background: "#FFFDF9", 
                  color: "var(--text-color)",
                  marginBottom: "16px",
                  outline: "none"
                }}
              />

              <div style={{ display: "flex", gap: "10px" }}>
                <button 
                  type="button" 
                  onClick={() => setShowJoinDialog(false)}
                  disabled={isJoining}
                  className="btn-secondary"
                  style={{ flex: 1, padding: "10px", fontSize: "0.85rem", border: "1px solid #EBE5D9", borderRadius: "8px" }}
                >
                  キャンセル
                </button>
                <button 
                  type="submit" 
                  disabled={isJoining}
                  className="btn-primary"
                  style={{ flex: 1, padding: "10px", fontSize: "0.85rem", borderRadius: "8px" }}
                >
                  {isJoining ? "参加中..." : "参加する"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
