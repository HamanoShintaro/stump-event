"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties, ElementType } from "react";
import { useRouter } from "next/navigation";
import HeaderNav from "@/components/HeaderNav";
import LoadingOverlay from "@/components/LoadingOverlay";
import PremiumUpgradeModal from "@/components/PremiumUpgradeModal";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import {
  useSubscription,
  PREMIUM_MONTHLY_PRICE_JPY,
} from "@/hooks/useSubscription";
import {
  Bell,
  FileText,
  Shield,
  LogOut,
  UserX,
  ChevronRight,
  HelpCircle,
  Sparkles,
  Camera,
  Users,
  Scale,
} from "lucide-react";

const cardStyle: CSSProperties = { background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "14px", padding: "18px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" };

function RowLabel({ icon: Icon, label }: { icon: ElementType; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#5C4E43", fontWeight: 700 }}>
      <Icon size={20} color="var(--primary-color)" /> {label}
    </div>
  );
}

function LinkRow({ href, icon, label }: { href: string; icon: ElementType; label: string }) {
  return (
    <Link href={href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px", color: "#5C4E43", textDecoration: "none", fontWeight: 700 }}>
      <RowLabel icon={icon} label={label} />
      <ChevronRight size={18} color="#B3A598" />
    </Link>
  );
}

function actionBtn(color: string): CSSProperties {
  return { width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px", marginTop: "8px", background: "transparent", border: "1px solid " + color + "33", borderRadius: "12px", color, fontWeight: 800, cursor: "pointer", fontSize: "0.95rem" };
}

export default function SettingsPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const { showAlert } = useCustomAlert();
  const {
    isPremium,
    usedPhotoCount,
    freePhotoLimit,
    remainingFreePhotos,
    processingCheckout,
    startCheckout,
    openCustomerPortal,
  } = useSubscription();
  const [pushOn, setPushOn] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    try { setPushOn(localStorage.getItem("shuin_push") === "on"); } catch {}
  }, []);

  const togglePush = () => {
    const next = !pushOn;
    setPushOn(next);
    try { localStorage.setItem("shuin_push", next ? "on" : "off"); } catch {}
  };

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleWithdraw = async () => {
    await showAlert({ text: "退会（アカウント削除）をご希望の場合は、お問い合わせよりご連絡ください。データ削除のお手続きをご案内します。", okText: "確認" });
  };

  if (loading) {
    return <LoadingOverlay />;
  }

  if (!user) {
    return (
      <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
        <p style={{ color: "#5C4E43", marginBottom: "16px" }}>設定を表示するにはログインが必要です。</p>
        <Link href="/login?redirect=/settings" className="btn-primary" style={{ padding: "12px 24px" }}>ログイン</Link>
      </div>
    );
  }

  const name = user.user_metadata?.full_name || "ユーザー";
  const avatar = user.user_metadata?.avatar_url || ("https://api.dicebear.com/7.x/avataaars/svg?seed=" + user.id);

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo"><img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} /></Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "560px", margin: "0 auto", paddingBottom: "60px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-color)", margin: "12px 0 24px" }}>設定</h1>

        <section style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img src={avatar} alt="" style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid #EBE5D9" }} />
            <div style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#5C4E43" }}>{name}</span>
                <span
                  style={{
                    fontSize: "var(--font-size-small)",
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: isPremium ? "rgba(201, 168, 76, 0.2)" : "rgba(0, 0, 0, 0.05)",
                    border: isPremium ? "1px solid var(--accent-color)" : "1px solid #EBE5D9",
                    color: isPremium ? "var(--primary-color)" : "var(--text-color)",
                  }}
                >
                  {isPremium ? "SHUIN プレミアム" : "旅人プラン（無料）"}
                </span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#A39687", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.email}</div>
            </div>
          </div>
        </section>

        {/* ご利用プラン・思い出写真枠・連れ立ち管理セクション */}
        <section
          style={{
            ...cardStyle,
            flexDirection: "column",
            alignItems: "stretch",
            gap: "14px",
            border: isPremium ? "1.5px solid var(--accent-color)" : "1px solid #EBE5D9",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 800, color: "var(--text-color)" }}>
              <Sparkles size={19} color="var(--primary-color)" />
              <span>ご利用プラン・特典状況</span>
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--primary-color)",
              }}
            >
              {isPremium ? `月額 ¥${PREMIUM_MONTHLY_PRICE_JPY}（契約中）` : "無料プラン"}
            </span>
          </div>

          <div
            style={{
              background: "var(--bg-color)",
              borderRadius: "10px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.85rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700, color: "var(--text-color)" }}>
                <Camera size={15} color="var(--primary-color)" />
                <span>思い出の写真記録</span>
              </span>
              <span style={{ fontWeight: 800, color: "var(--primary-color)" }}>
                {isPremium
                  ? `無制限（現在 ${usedPhotoCount}枚 記録済み）`
                  : `${usedPhotoCount} / ${freePhotoLimit} 枚（残り ${remainingFreePhotos}枚）`}
              </span>
            </div>

            {!isPremium && (
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  borderRadius: "999px",
                  background: "rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${Math.min(100, (usedPhotoCount / freePhotoLimit) * 100)}%`,
                    height: "100%",
                    background: "var(--primary-color)",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700, color: "var(--text-color)" }}>
                <Users size={15} color="var(--primary-color)" />
                <span>連れ立ち（同行）機能</span>
              </span>
              <span style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--text-color)" }}>
                {isPremium ? "招待コード発行・合流 どちらも可" : "招待コードでの合流のみ可"}
              </span>
            </div>
          </div>

          {isPremium ? (
            <button
              type="button"
              disabled={processingCheckout}
              onClick={() => openCustomerPortal("/settings")}
              className="btn-secondary"
              style={{ width: "100%", padding: "11px 16px", fontSize: "0.88rem", fontWeight: 700 }}
            >
              {processingCheckout ? "処理中..." : "プラン管理・解約手続き"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowUpgradeModal(true)}
              className="btn-primary"
              style={{ width: "100%", padding: "12px 16px", fontSize: "0.92rem", fontWeight: 800 }}
            >
              SHUIN プレミアムを見る（月額¥{PREMIUM_MONTHLY_PRICE_JPY}）
            </button>
          )}
        </section>

        <section style={cardStyle}>
          <RowLabel icon={Bell} label="プッシュ通知" />
          <button onClick={togglePush} aria-label="プッシュ通知の切替" style={{ width: "52px", height: "30px", borderRadius: "15px", border: "none", cursor: "pointer", background: pushOn ? "var(--primary-color)" : "#D6CEC3", position: "relative", transition: "background 0.2s" }}>
            <span style={{ position: "absolute", top: "3px", left: pushOn ? "25px" : "3px", width: "24px", height: "24px", borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
          </button>
        </section>
        <p style={{ fontSize: "0.75rem", color: "#B3A598", margin: "-8px 4px 16px" }}>※プッシュ通知配信は準備中です。</p>

        <section style={{ ...cardStyle, padding: 0, display: "block" }}>
          <LinkRow href="/guide" icon={HelpCircle} label="街歩きの手引き・よくある質問" />
          <div style={{ borderTop: "1px solid #EBE5D9" }} />
          <LinkRow href="/terms" icon={FileText} label="利用規約" />
          <div style={{ borderTop: "1px solid #EBE5D9" }} />
          <LinkRow href="/privacy" icon={Shield} label="プライバシーポリシー" />
          <div style={{ borderTop: "1px solid #EBE5D9" }} />
          <LinkRow href="/tokushoho" icon={Scale} label="特定商取引法に基づく表記" />
        </section>

        <button onClick={handleLogout} style={actionBtn("#5C4E43")}><LogOut size={18} /> ログアウト</button>
        <button onClick={handleWithdraw} style={actionBtn("#D9655B")}><UserX size={18} /> 退会する</button>
      </main>

      <PremiumUpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={() => startCheckout("/settings")}
        isProcessing={processingCheckout}
        reason="general"
        usedPhotoCount={usedPhotoCount}
      />
    </div>
  );
}
