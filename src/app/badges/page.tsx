"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{ padding: "6px 14px", borderRadius: "16px", border: active ? "1px solid var(--primary-color)" : "1px solid #EBE5D9", background: active ? "var(--primary-color)" : "#FFFDF9", color: active ? "#fff" : "#5C4E43", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}>{label}</button>
  );
}

export default function BadgesPage() {
  const { user, loading } = useAuth();
  const [badges, setBadges] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [rarityFilter, setRarityFilter] = useState<number | null>(null);

  useEffect(() => {
    async function fetchBadges() {
      if (!user) { setDataLoading(false); return; }
      setDataLoading(true);
      const { data, error } = await supabase
        .from("badge_assignments")
        .select("acquired_at, badges(*)")
        .eq("user_id", user.id)
        .order("acquired_at", { ascending: false });
      if (error) console.error("badges fetch error", error);
      const list = (data || []).map((a: any) => ({ ...a.badges, acquired_at: a.acquired_at })).filter((b: any) => b && b.code);
      setBadges(list);
      setDataLoading(false);
    }
    if (!loading) fetchBadges();
  }, [user, loading]);

  const rarities = [1, 2, 3, 4, 5];
  const shown = rarityFilter ? badges.filter((b) => b.rarity === rarityFilter) : badges;

  if (loading || dataLoading) return <div className="container" style={{ padding: "60px 0", textAlign: "center", color: "#A39687" }}>読み込み中...</div>;
  if (!user) return (
    <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
      <p style={{ color: "#5C4E43", marginBottom: "16px" }}>称号を表示するにはログインが必要です。</p>
      <Link href="/login?redirect=/badges" className="btn-primary" style={{ padding: "12px 24px" }}>ログイン</Link>
    </div>
  );

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo"><img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} /></Link>
        <HeaderNav />
      </header>
      <main style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "60px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-color)", margin: "12px 0 4px" }}>称号一覧</h1>
        <p style={{ color: "#A39687", fontSize: "0.9rem", marginBottom: "20px" }}>授かった称号 {badges.length} 件</p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
          <FilterChip active={rarityFilter === null} onClick={() => setRarityFilter(null)} label="すべて" />
          {rarities.map((r) => <FilterChip key={r} active={rarityFilter === r} onClick={() => setRarityFilter(r)} label={"★".repeat(r)} />)}
        </div>

        {shown.length === 0 ? (
          <p style={{ textAlign: "center", color: "#B3A598", padding: "40px 0" }}>該当する称号はまだありません。街を歩いて、しるしを刻みましょう。</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px" }}>
            {shown.map((b, i) => (
              <div key={b.code + i} style={{ background: "#121212", border: "1px solid var(--accent-color, #C9A84C)", borderRadius: "12px", padding: "18px 14px", textAlign: "center" }}>
                <div style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "2px" }}>{"★".repeat(b.rarity || 1)}</div>
                <div style={{ color: "#C9A84C", fontSize: "1.05rem", fontWeight: 800, fontFamily: "serif", margin: "8px 0 4px" }}>{b.name_ja}</div>
                <div style={{ color: "#9a8f6f", fontSize: "0.7rem", fontStyle: "italic" }}>{b.subtitle_en}</div>
                {b.description && <div style={{ color: "#E0D7CD", fontSize: "0.72rem", marginTop: "8px", lineHeight: "1.5" }}>{b.description}</div>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
