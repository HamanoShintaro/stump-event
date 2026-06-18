"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties, ElementType } from "react";
import { useRouter } from "next/navigation";
import HeaderNav from "@/components/HeaderNav";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { Bell, FileText, Shield, LogOut, UserX, ChevronRight } from "lucide-react";

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
  const [pushOn, setPushOn] = useState(false);

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
    return <div className="container" style={{ padding: "60px 0", textAlign: "center", color: "#A39687" }}>読み込み中...</div>;
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
              <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#5C4E43" }}>{name}</div>
              <div style={{ fontSize: "0.85rem", color: "#A39687", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.email}</div>
            </div>
          </div>
        </section>

        <section style={cardStyle}>
          <RowLabel icon={Bell} label="プッシュ通知" />
          <button onClick={togglePush} aria-label="プッシュ通知の切替" style={{ width: "52px", height: "30px", borderRadius: "15px", border: "none", cursor: "pointer", background: pushOn ? "var(--primary-color)" : "#D6CEC3", position: "relative", transition: "background 0.2s" }}>
            <span style={{ position: "absolute", top: "3px", left: pushOn ? "25px" : "3px", width: "24px", height: "24px", borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
          </button>
        </section>
        <p style={{ fontSize: "0.75rem", color: "#B3A598", margin: "-8px 4px 16px" }}>※プッシュ通知配信は準備中です。</p>

        <section style={{ ...cardStyle, padding: 0, display: "block" }}>
          <LinkRow href="/terms" icon={FileText} label="利用規約" />
          <div style={{ borderTop: "1px solid #EBE5D9" }} />
          <LinkRow href="/privacy" icon={Shield} label="プライバシーポリシー" />
        </section>

        <button onClick={handleLogout} style={actionBtn("#5C4E43")}><LogOut size={18} /> ログアウト</button>
        <button onClick={handleWithdraw} style={actionBtn("#D9655B")}><UserX size={18} /> 退会する</button>
      </main>
    </div>
  );
}
