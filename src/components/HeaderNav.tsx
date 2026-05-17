"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export default function HeaderNav() {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // メニュー外クリックで閉じる処理 ＆ 検索モーダルを開くイベントの購読
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleOpenSearch = () => setSearchOpen(true);
    
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("openSearchModal", handleOpenSearch);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("openSearchModal", handleOpenSearch);
    };
  }, []);

  if (pathname === '/login') return null;

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pref = formData.get("prefecture") as string;
    const cat = formData.get("category") as string;
    const bud = formData.get("budget_tier") as string;

    const params = new URLSearchParams();
    if (pref) params.set("prefecture", pref);
    if (cat) params.set("category", cat);
    if (bud) params.set("budget_tier", bud);

    router.push(`/rallies?${params.toString()}`);
    setSearchOpen(false);
  };

  const SearchModal = () => (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
      backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)",
      zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "#FFFDF9", borderRadius: "16px", padding: "24px", 
        width: "100%", maxWidth: "400px", position: "relative",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}>
        <button 
          onClick={() => setSearchOpen(false)}
          style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "#888" }}
        >
          <X size={24} />
        </button>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-color)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Search size={24} color="var(--primary-color)" />
          ラリーを探す
        </h2>

        <form onSubmit={handleSearchSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "#5C4E43", marginBottom: "8px" }}>都道府県</label>
            <select name="prefecture" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #EBE5D9", background: "white", fontSize: "1rem" }}>
              <option value="">すべて</option>
              <option value="東京都">東京都</option>
              <option value="神奈川県">神奈川県</option>
              <option value="埼玉県">埼玉県</option>
              <option value="千葉県">千葉県</option>
              <option value="大阪府">大阪府</option>
              <option value="京都府">京都府</option>
              <option value="福岡県">福岡県</option>
              <option value="北海道">北海道</option>
              <option value="沖縄県">沖縄県</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "#5C4E43", marginBottom: "8px" }}>カテゴリ</label>
            <select name="category" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #EBE5D9", background: "white", fontSize: "1rem" }}>
              <option value="">すべて</option>
              <option value="食べたい">食べたい</option>
              <option value="見たい">見たい</option>
              <option value="体験したい">体験したい</option>
              <option value="集めたい">集めたい</option>
              <option value="推しに触れたい">推しに触れたい</option>
              <option value="学びたい">学びたい</option>
              <option value="癒されたい">癒されたい</option>
              <option value="達成したい">達成したい</option>
              <option value="人と過ごしたい">人と過ごしたい</option>
              <option value="地域を感じたい">地域を感じたい</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "#5C4E43", marginBottom: "8px" }}>予算</label>
            <select name="budget_tier" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #EBE5D9", background: "white", fontSize: "1rem" }}>
              <option value="">すべて</option>
              <option value="1">〜1,000円</option>
              <option value="2">〜5,000円</option>
              <option value="3">5,000円〜</option>
            </select>
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px", marginTop: "12px", fontSize: "1.1rem" }}>
            検索する
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <nav ref={menuRef} style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px" }}>
        {/* 検索ボタン */}
        <button 
          onClick={() => setSearchOpen(true)}
          style={{
            background: "white", border: "1px solid #EBE5D9", borderRadius: "50%",
            width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", color: "var(--primary-color)",
            transition: "transform 0.2s"
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Search size={20} />
        </button>

        {loading ? (
          <div style={{ width: "40px", height: "40px" }}></div>
        ) : user ? (
          <>
            {/* ログイン済み：アイコンのみのボタン（タップでメニュー展開） */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ 
                position: "relative",
                top: "-2px",
                background: "transparent", 
                border: "none", 
                cursor: "pointer", 
                padding: "0", 
                outline: "none",
                transform: menuOpen ? "scale(1.05) translateY(-2px)" : "scale(1) translateY(0)",
                transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                filter: menuOpen ? "drop-shadow(0 6px 8px rgba(58, 183, 183, 0.4))" : "drop-shadow(0 4px 4px rgba(0,0,0,0.15))"
              }}
            >
              <div style={{
                width: "44px", height: "44px", backgroundColor: "#3AB7B7",
                borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <img 
                  src={user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} 
                  alt="Profile" 
                  style={{ 
                    width: "32px", height: "32px", borderRadius: "50%", 
                    background: "#fff", objectFit: "cover", transform: "rotate(45deg)"
                  }} 
                />
              </div>
            </button>

            {/* 展開メニュー */}
            {menuOpen && (
              <div style={{ 
                position: "absolute", top: "calc(100% + 16px)", right: 0, 
                background: "#FFFDF9", border: "2px solid #EBE5D9", borderRadius: "16px", 
                width: "240px", boxShadow: "0 10px 25px rgba(136, 115, 96, 0.15)", 
                zIndex: 100, overflow: "hidden"
              }}>
                {/* クローズボタン */}
                <button 
                  onClick={() => setMenuOpen(false)}
                  style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", cursor: "pointer", color: "#B3A598", fontSize: "1.2rem", lineHeight: 1 }}
                >✕</button>

                {/* 上部：プロフィール領域 */}
                <div style={{ padding: "16px", borderBottom: "2px dashed #EBE5D9", display: "flex", alignItems: "center", gap: "12px" }}>
                  <img 
                    src={user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} 
                    alt="Profile" 
                    style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #EBE5D9" }}
                  />
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <div style={{ fontWeight: "800", fontSize: "1rem", color: "#5C4E43", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {user.user_metadata?.full_name || "ユーザー"}
                    </div>
                    <Link href="/mypage" onClick={() => setMenuOpen(false)} style={{ fontSize: "0.8rem", color: "#3AB7B7", textDecoration: "none", fontWeight: "700" }}>
                      プロフィールを見る ＞
                    </Link>
                  </div>
                </div>

                {/* 下部：メニューリンク */}
                <div style={{ padding: "8px" }}>
                  <MenuItem href="/mypage" icon="📕" label="スタンプ帳" onClick={() => setMenuOpen(false)} />
                  <MenuItem href="/rallies" icon="📍" label="ラリー一覧" onClick={() => setMenuOpen(false)} />
                  <MenuItem href="/mypage" icon="⭐️" label="お気に入り" onClick={() => setMenuOpen(false)} />
                  <MenuItem href="/mypage" icon="🔔" label="お知らせ" onClick={() => setMenuOpen(false)} badge={3} />
                  <MenuItem href="/mypage" icon="⚙️" label="設定" onClick={() => setMenuOpen(false)} />
                  
                  <div style={{ borderTop: "2px dashed #EBE5D9", margin: "8px 0" }}></div>
                  
                  <button 
                    onClick={() => { logout(); setMenuOpen(false); }} 
                    style={{ width: "100%", display: "flex", alignItems: "center", padding: "12px 16px", background: "transparent", border: "none", cursor: "pointer", color: "#D9655B", fontWeight: "700", borderRadius: "8px", transition: "background 0.2s" }}
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(217, 101, 91, 0.05)'} 
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontSize: "1.2rem", marginRight: "12px" }}>🚪</span>
                    <span>ログアウト</span>
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* 未ログイン用アイコン */
          <Link 
            href={`/login?redirect=${pathname}`} 
            style={{ position: "relative", top: "-2px", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", transition: "transform 0.2s" }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
          >
            <div style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.1))" }}>
              <div style={{ 
                width: "44px", height: "44px", backgroundColor: "#D6CEC3", 
                borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: "#FFFDF9", display: "flex", alignItems: "center", justifyContent: "center",
                  transform: "rotate(45deg)"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A39687" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <span style={{ fontSize: "0.65rem", fontWeight: "800", color: "#A39687", marginTop: "2px" }}>ログイン</span>
          </Link>
        )}
      </nav>
      {searchOpen && <SearchModal />}
    </>
  );
}

// メニュー項目の共通コンポーネント
function MenuItem({ href, icon, label, onClick, badge }: { href: string, icon: string, label: string, onClick: () => void, badge?: number }) {
  return (
    <Link 
      href={href} 
      onClick={onClick} 
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", color: "#5C4E43", textDecoration: "none", fontWeight: "700", borderRadius: "8px", transition: "background 0.2s" }}
      onMouseOver={e => e.currentTarget.style.background = 'rgba(92, 78, 67, 0.05)'} 
      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "1.2rem", marginRight: "12px", width: "24px", textAlign: "center" }}>{icon}</span>
        <span>{label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {badge && (
          <span style={{ background: "#D9655B", color: "white", fontSize: "0.75rem", fontWeight: "800", padding: "2px 6px", borderRadius: "10px", lineHeight: 1 }}>{badge}</span>
        )}
        <span style={{ color: "#B3A598", fontSize: "0.9rem" }}>＞</span>
      </div>
    </Link>
  );
}
