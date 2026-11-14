"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  X,
  User,
  BookOpen,
  Compass,
  Map as MapIcon,
  MapPin,
  Bookmark,
  Bell,
  Settings,
  LogOut,
  Award,
  HelpCircle,
} from "lucide-react";
import { useBadgeNotifications } from "@/hooks/useBadgeNotifications";
import { triggerNavigationLoading } from "@/hooks/useNavigationLoading";

const PREFECTURE_LIST = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県",
  "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];

export default function HeaderNav() {
  const { user, loading, logout } = useAuth();
  const { unseenCount } = useBadgeNotifications(user?.id);
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
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

  if (pathname === "/login") return null;

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = (formData.get("q") as string)?.trim();
    const pref = formData.get("prefecture") as string;
    const cat = formData.get("category") as string;
    const bud = formData.get("budget_tier") as string;

    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (pref) params.set("prefecture", pref);
    if (cat) params.set("category", cat);
    if (bud) params.set("budget_tier", bud);

    const targetUrl = `/routes?${params.toString()}`;
    triggerNavigationLoading(targetUrl);
    router.push(targetUrl);
    setSearchOpen(false);
  };

  const searchModalNode =
    mounted && searchOpen
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="ルートを検索"
            onClick={() => setSearchOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(30, 24, 20, 0.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--bg-color)",
                border: "1.5px solid var(--accent-color)",
                borderRadius: "20px",
                padding: "24px",
                width: "100%",
                maxWidth: "400px",
                position: "relative",
                boxShadow: "0 20px 45px rgba(0,0,0,0.22)",
              }}
            >
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="閉じる"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#5C4E43",
                }}
              >
                <X size={22} />
              </button>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "800",
                  color: "var(--text-color)",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Search size={20} color="var(--primary-color)" />
                ルートを探す
              </h2>

              {/* クイック探索ショートカット（地図から探す・都道府県一覧・手引き） */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <Link
                  href="/map"
                  onClick={() => {
                    triggerNavigationLoading("/map");
                    setSearchOpen(false);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: "10px 8px",
                    borderRadius: "10px",
                    background: "rgba(199, 68, 46, 0.08)",
                    border: "1.5px solid var(--primary-color)",
                    color: "var(--primary-color)",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <MapIcon size={15} />
                  <span>地図から探す</span>
                </Link>
                <Link
                  href="/areas"
                  onClick={() => {
                    triggerNavigationLoading("/areas");
                    setSearchOpen(false);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: "10px 8px",
                    borderRadius: "10px",
                    background: "#FFFDF9",
                    border: "1px solid #D6CEC3",
                    color: "var(--text-color)",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <MapPin size={15} color="var(--primary-color)" />
                  <span>47都道府県一覧</span>
                </Link>
              </div>

              <form
                onSubmit={handleSearchSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.84rem",
                      fontWeight: "700",
                      color: "#5C4E43",
                      marginBottom: "6px",
                    }}
                  >
                    キーワード（街名・駅名・スポット）
                  </label>
                  <input
                    type="text"
                    name="q"
                    placeholder="例: 谷根千、鎌倉、カフェ、神社..."
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "8px",
                      border: "1px solid #D6CEC3",
                      background: "#FFFDF9",
                      fontSize: "0.95rem",
                      color: "var(--text-color)",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.84rem",
                      fontWeight: "700",
                      color: "#5C4E43",
                      marginBottom: "6px",
                    }}
                  >
                    都道府県
                  </label>
                  <select
                    name="prefecture"
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "8px",
                      border: "1px solid #D6CEC3",
                      background: "#FFFDF9",
                      fontSize: "0.95rem",
                      color: "var(--text-color)",
                    }}
                  >
                    <option value="">すべての都道府県</option>
                    {PREFECTURE_LIST.map((pref) => (
                      <option key={pref} value={pref}>
                        {pref}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: "700",
                        color: "#5C4E43",
                        marginBottom: "6px",
                      }}
                    >
                      カテゴリ
                    </label>
                    <select
                      name="category"
                      style={{
                        width: "100%",
                        padding: "10px 8px",
                        borderRadius: "8px",
                        border: "1px solid #D6CEC3",
                        background: "#FFFDF9",
                        fontSize: "0.88rem",
                        color: "var(--text-color)",
                      }}
                    >
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
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: "700",
                        color: "#5C4E43",
                        marginBottom: "6px",
                      }}
                    >
                      予算
                    </label>
                    <select
                      name="budget_tier"
                      style={{
                        width: "100%",
                        padding: "10px 8px",
                        borderRadius: "8px",
                        border: "1px solid #D6CEC3",
                        background: "#FFFDF9",
                        fontSize: "0.88rem",
                        color: "var(--text-color)",
                      }}
                    >
                      <option value="">すべて</option>
                      <option value="1">〜1,000円</option>
                      <option value="2">〜5,000円</option>
                      <option value="3">5,000円〜</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "13px",
                    marginTop: "4px",
                    fontSize: "0.95rem",
                  }}
                >
                  条件でルートを検索する
                </button>
              </form>

              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "12px",
                  borderTop: "1px dashed #E5DEC9",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link
                  href="/guide"
                  onClick={() => setSearchOpen(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#5C4E43",
                    textDecoration: "underline",
                  }}
                >
                  <HelpCircle size={14} color="var(--primary-color)" />
                  <span>街歩きの手引き（SHUINの使い方）を見る</span>
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <nav ref={menuRef} className="shuin-header-nav">
        {/* 地図から探す（スマホでも1タップで全国マップへ遷移可能） */}
        <Link
          href="/map"
          title="地図からルートを探す"
          className="shuin-header-pill"
          style={{
            background:
              pathname === "/map"
                ? "var(--primary-color)"
                : "rgba(255, 253, 249, 0.94)",
            border:
              pathname === "/map"
                ? "1px solid var(--primary-color)"
                : "1px solid #D6CEC3",
            color: pathname === "/map" ? "#FFFDF9" : "var(--text-color)",
          }}
        >
          <MapIcon
            size={14}
            color={pathname === "/map" ? "#FFFDF9" : "var(--primary-color)"}
          />
          <span>地図</span>
        </Link>

        {/* 共通探索導線：ルート一覧を探す */}
        <Link
          href="/routes"
          title="ルートを探す"
          className="shuin-header-pill"
          style={{
            background:
              pathname === "/routes"
                ? "var(--primary-color)"
                : "rgba(255, 253, 249, 0.94)",
            border:
              pathname === "/routes"
                ? "1px solid var(--primary-color)"
                : "1px solid #D6CEC3",
            color: pathname === "/routes" ? "#FFFDF9" : "var(--text-color)",
          }}
        >
          <Compass
            size={14}
            color={pathname === "/routes" ? "#FFFDF9" : "var(--primary-color)"}
          />
          <span className="shuin-header-label-desktop">ルートを探す</span>
          <span className="shuin-header-label-mobile">一覧</span>
        </Link>

        {/* 街歩きの手引き（PCヘッダー表示＋スマホは検索モーダル＆メニュー内） */}
        <Link
          href="/guide"
          title="街歩きの手引き（使い方）"
          aria-label="街歩きの手引き（使い方）"
          className="shuin-header-pill shuin-header-desktop-only"
          style={{
            background: "rgba(255, 253, 249, 0.92)",
            border: "1px solid #D6CEC3",
            color: "#5C4E43",
          }}
        >
          <HelpCircle size={15} color="var(--primary-color)" />
          <span>手引き</span>
        </Link>

        {/* 検索ボタン（キーワード・条件で直接探す） */}
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="条件を指定してルートを検索"
          title="条件を指定してルートを検索"
          className="shuin-header-icon-btn"
        >
          <Search size={16} />
        </button>

        {loading ? (
          <div style={{ width: "40px", height: "40px" }}></div>
        ) : user ? (
          <>
            {/* ログイン済み：アカウントメニュー開閉ボタン */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="アカウントメニューを開く"
              style={{
                position: "relative",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0",
                outline: "none",
                transform: menuOpen
                  ? "scale(1.05) translateY(-2px)"
                  : "scale(1) translateY(0)",
                transition:
                  "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                filter: menuOpen
                  ? "drop-shadow(0 6px 8px rgba(199, 68, 46, 0.3))"
                  : "drop-shadow(0 4px 4px rgba(0,0,0,0.15))",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#fff",
                  border: "2px solid var(--primary-color)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    user.user_metadata?.avatar_url ||
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`
                  }
                  alt="Profile"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    background: "#fff",
                    objectFit: "cover",
                  }}
                />
              </div>
              {unseenCount > 0 && (
                <span
                  aria-label={`新着称号 ${unseenCount}件`}
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-6px",
                    minWidth: "20px",
                    height: "20px",
                    padding: "0 5px",
                    borderRadius: "10px",
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                    fontSize: "0.72rem",
                    fontWeight: "800",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #FFFDF9",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  {unseenCount}
                </span>
              )}
            </button>

            {/* アカウントメニュー（自分に紐づく記録・通知・設定に限定） */}
            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 14px)",
                  right: 0,
                  background: "#FFFDF9",
                  border: "1.5px solid #EBE5D9",
                  borderRadius: "16px",
                  width: "248px",
                  boxShadow: "0 12px 28px rgba(92, 78, 67, 0.18)",
                  zIndex: 1000,
                  overflow: "hidden",
                }}
              >
                {/* クローズボタン */}
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="メニューを閉じる"
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#B3A598",
                    fontSize: "1.1rem",
                    lineHeight: 1,
                  }}
                >
                  ✕
                </button>

                {/* 上部：マイページへの入口 */}
                <div
                  style={{
                    padding: "16px",
                    borderBottom: "1px dashed #EBE5D9",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#FAF6EE",
                  }}
                >
                  <img
                    src={
                      user.user_metadata?.avatar_url ||
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`
                    }
                    alt="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #EBE5D9",
                      background: "#FFFDF9",
                    }}
                  />
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <div
                      style={{
                        fontWeight: "800",
                        fontSize: "0.95rem",
                        color: "var(--text-color)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {user.user_metadata?.full_name || "ユーザー"}
                    </div>
                    <Link
                      href="/mypage"
                      onClick={() => setMenuOpen(false)}
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--primary-color)",
                        textDecoration: "none",
                        fontWeight: "800",
                        display: "inline-block",
                        marginTop: "2px",
                      }}
                    >
                      マイページを見る →
                    </Link>
                  </div>
                </div>

                {/* 中段：自分の活動・所有情報 */}
                <div style={{ padding: "8px" }}>
                  <MenuItem
                    href="/mypage/diary"
                    icon={BookOpen}
                    label="SHUIN帳"
                    onClick={() => setMenuOpen(false)}
                  />
                  <MenuItem
                    href="/mypage/bookmarks"
                    icon={Bookmark}
                    label="保存したルート（栞）"
                    onClick={() => setMenuOpen(false)}
                  />
                  <MenuItem
                    href="/badges"
                    icon={Award}
                    label="獲得した称号"
                    onClick={() => setMenuOpen(false)}
                    badge={unseenCount > 0 ? unseenCount : undefined}
                  />

                  <div
                    style={{ borderTop: "1px dashed #EBE5D9", margin: "6px 8px" }}
                  />

                  {/* 下段：お知らせ・アカウント管理 */}
                  <MenuItem
                    href="/notifications"
                    icon={Bell}
                    label="街の便り"
                    onClick={() => setMenuOpen(false)}
                    badge={3}
                  />
                  <MenuItem
                    href="/settings"
                    icon={Settings}
                    label="設定"
                    onClick={() => setMenuOpen(false)}
                  />

                  <div
                    style={{ borderTop: "1px dashed #EBE5D9", margin: "6px 8px" }}
                  />

                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      padding: "11px 14px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#D9655B",
                      fontWeight: "700",
                      fontSize: "0.86rem",
                      borderRadius: "8px",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(217, 101, 91, 0.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "24px",
                        marginRight: "10px",
                      }}
                    >
                      <LogOut size={18} />
                    </span>
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
            title="ログイン"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              height: "34px",
              padding: "0 9px",
              borderRadius: "999px",
              background: "#FFFDF9",
              border: "1.5px solid #D6CEC3",
              textDecoration: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <User size={15} color="var(--primary-color)" />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: "800",
                color: "#5C4E43",
              }}
            >
              ログイン
            </span>
          </Link>
        )}
      </nav>
      {searchModalNode}
    </>
  );
}

// メニュー項目の共通コンポーネント
function MenuItem({
  href,
  icon: Icon,
  label,
  onClick,
  badge,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "11px 14px",
        color: "#5C4E43",
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "0.88rem",
        borderRadius: "8px",
        transition: "background 0.2s",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.background = "rgba(92, 78, 67, 0.05)")
      }
      onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            marginRight: "10px",
            color: "var(--primary-color)",
          }}
        >
          <Icon size={19} />
        </span>
        <span>{label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {badge && (
          <span
            style={{
              background: "#D9655B",
              color: "white",
              fontSize: "0.75rem",
              fontWeight: "800",
              padding: "2px 6px",
              borderRadius: "10px",
              lineHeight: 1,
            }}
          >
            {badge}
          </span>
        )}
        <span style={{ color: "#B3A598", fontSize: "0.85rem" }}>＞</span>
      </div>
    </Link>
  );
}
