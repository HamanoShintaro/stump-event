"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

type Badge = {
  code: string; name_ja: string; subtitle_en?: string; description?: string;
  rarity?: number; category?: string; acquired_at?: string | null; earned: boolean;
};

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{ padding: "6px 14px", borderRadius: "16px", border: active ? "1px solid var(--primary-color)" : "1px solid #EBE5D9", background: active ? "var(--primary-color)" : "#FFFDF9", color: active ? "#fff" : "#5C4E43", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}>{label}</button>
  );
}

// 称号コードからグループキー、レベル、カテゴリを解析するヘルパー
function parseLevelBadge(code: string) {
  if (!code || !code.startsWith("level_badge_")) return null;
  // 例: level_badge_area_自由が丘_3 -> parts: ["level", "badge", "area", "自由が丘", "3"]
  const parts = code.split("_");
  const levelStr = parts[parts.length - 1];
  const level = parseInt(levelStr, 10);
  const groupKey = parts.slice(2, parts.length - 1).join("_");
  
  let category = "general";
  if (code.startsWith("level_badge_area_")) category = "area";
  else if (code.startsWith("level_badge_railway_")) category = "railway";
  else if (code.startsWith("level_badge_prefecture_")) category = "prefecture";
  else if (code.startsWith("level_badge_theme_")) category = "theme";
  
  return { groupKey, level, category };
}

export default function BadgesPage() {
  const { user, loading } = useAuth();
  const [items, setItems] = useState<Badge[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [rarityFilter, setRarityFilter] = useState<number | null>(null);
  const [showUnearned, setShowUnearned] = useState(true);

  useEffect(() => {
    async function fetchBadges() {
      if (!user) { setDataLoading(false); return; }
      setDataLoading(true);
      // 取得済（badge_assignments）と、収集可能なカタログ（badges）を取得
      const [earnedRes, catalogRes] = await Promise.all([
        supabase.from("badge_assignments").select("acquired_at, badges(*)").eq("user_id", user.id).order("acquired_at", { ascending: false }),
        supabase.from("badges").select("*").eq("is_active", true),
      ]);
      if (earnedRes.error) console.error("badges earned fetch error", earnedRes.error);

      const earnedList = (earnedRes.data || [])
        .map((a: any) => ({ ...a.badges, acquired_at: a.acquired_at }))
        .filter((b: any) => b && b.code);
      const earnedCodes = new Set(earnedList.map((b: any) => b.code));

      // 未取得シルエット＝カタログのうち未取得。ただし自答(quiz)は4択排他なので除外。
      const unearned = (catalogRes.data || [])
        .filter((b: any) => b && b.code && !earnedCodes.has(b.code) && b.category !== "quiz");

      const allRawItems = [
        ...earnedList.map((b: any) => ({ ...b, earned: true })),
        ...unearned.map((b: any) => ({ ...b, earned: false, acquired_at: null })),
      ];

      // --- 重複防止・グループ化ロジックの適用 ---
      const groupedItems: Record<string, Badge[]> = {};
      const nonLevelItems: Badge[] = [];

      allRawItems.forEach((item) => {
        // 旧スポット固有の称号は除外
        if (item.code.startsWith("visitor_of_") || item.code.startsWith("memory_of_")) {
          return;
        }
        
        const info = parseLevelBadge(item.code);
        if (info) {
          if (!groupedItems[info.groupKey]) {
            groupedItems[info.groupKey] = [];
          }
          groupedItems[info.groupKey].push(item);
        } else {
          nonLevelItems.push(item);
        }
      });

      // 各レベルグループから代表を1つだけ選ぶ
      const representativeLevelItems: Badge[] = [];
      Object.entries(groupedItems).forEach(([groupKey, groupList]) => {
        const earnedListForGroup = groupList.filter((item) => item.earned);
        if (earnedListForGroup.length > 0) {
          // 取得済みのうち最大レベルのものを選ぶ
          const maxEarned = earnedListForGroup.reduce((max, item) => {
            const maxL = parseLevelBadge(max.code)?.level || 0;
            const itemL = parseLevelBadge(item.code)?.level || 0;
            return itemL > maxL ? item : max;
          }, earnedListForGroup[0]);
          representativeLevelItems.push(maxEarned);
        } else {
          // 未取得のうち最小レベル（通常はレベル1）のものを選ぶ
          const minUnearned = groupList.reduce((min, item) => {
            const minL = parseLevelBadge(min.code)?.level || 999;
            const itemL = parseLevelBadge(item.code)?.level || 999;
            return itemL < minL ? item : min;
          }, groupList[0]);
          representativeLevelItems.push(minUnearned);
        }
      });

      setItems([
        ...nonLevelItems,
        ...representativeLevelItems
      ]);
      
      setDataLoading(false);
    }
    if (!loading) fetchBadges();
  }, [user, loading]);

  const earnedCount = items.filter((b) => b.earned).length;
  const unearnedCount = items.filter((b) => !b.earned).length;
  const rarities = [1, 2, 3, 4, 5];

  let shown = rarityFilter ? items.filter((b) => b.rarity === rarityFilter) : items;
  if (!showUnearned) shown = shown.filter((b) => b.earned);
  shown = [...shown].sort((a, b) => Number(b.earned) - Number(a.earned)); // 取得済を先頭に

  // カテゴリ別への分類
  const categoriesMap: Record<string, { label: string; items: Badge[] }> = {
    area: { label: "地域（エリア）", items: [] },
    railway: { label: "路線沿線", items: [] },
    prefecture: { label: "都道府県", items: [] },
    theme: { label: "印目（カテゴリ・属性）", items: [] },
    general: { label: "一般（全体実績・継続）", items: [] },
    special: { label: "特別・その他（季節・イベント）", items: [] }
  };

  shown.forEach((b) => {
    const info = parseLevelBadge(b.code);
    if (info) {
      if (categoriesMap[info.category]) {
        categoriesMap[info.category].items.push(b);
      } else {
        categoriesMap.general.items.push(b);
      }
    } else {
      // 共通・その他
      if (b.category === "seasonal" || b.category === "founder" || b.category === "route" || b.category === "quiz" || b.category === "special") {
        categoriesMap.special.items.push(b);
      } else if (b.category === "visit" || b.category === "cumulative" || b.category === "story" || b.category === "general") {
        categoriesMap.general.items.push(b);
      } else {
        categoriesMap.special.items.push(b);
      }
    }
  });

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
        <p style={{ color: "#A39687", fontSize: "0.9rem", marginBottom: "16px" }}>
          取得 <span style={{ color: "var(--primary-color)", fontWeight: 800 }}>{earnedCount}</span> 件 ・ 未取得 {unearnedCount} 件
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px", alignItems: "center" }}>
          <FilterChip active={rarityFilter === null} onClick={() => setRarityFilter(null)} label="すべて" />
          {rarities.map((r) => <FilterChip key={r} active={rarityFilter === r} onClick={() => setRarityFilter(r)} label={"★".repeat(r)} />)}
          <span style={{ width: "1px", height: "20px", background: "#EBE5D9", margin: "0 4px" }} />
          <FilterChip active={showUnearned} onClick={() => setShowUnearned(!showUnearned)} label={showUnearned ? "未取得も表示" : "取得済のみ"} />
        </div>

        {shown.length === 0 ? (
          <p style={{ textAlign: "center", color: "#B3A598", padding: "40px 0" }}>該当する称号はまだありません。街を歩いて、しるしを刻みましょう。</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {Object.entries(categoriesMap).map(([key, cat]) => {
              if (cat.items.length === 0) return null;
              return (
                <section key={key}>
                  <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#5C4E43", borderBottom: "1px solid #EBE5D9", paddingBottom: "8px", marginBottom: "16px", letterSpacing: "1px" }}>
                    {cat.label} ({cat.items.length})
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "14px" }}>
                    {cat.items.map((b, i) => {
                      const info = parseLevelBadge(b.code);
                      return b.earned ? (
                        <div key={b.code + i} style={{ background: "#121212", border: "1px solid var(--accent-color, #C9A84C)", borderRadius: "12px", padding: "18px 14px", textAlign: "center", transition: "transform 0.2s", cursor: "default" }}>
                          <div style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "2px" }}>{"★".repeat(b.rarity || 1)}</div>
                          <div style={{ color: "#C9A84C", fontSize: "1.05rem", fontWeight: 800, fontFamily: "var(--font-family), serif", margin: "8px 0 4px" }}>{b.name_ja}</div>
                          <div style={{ color: "#9a8f6f", fontSize: "0.7rem", fontStyle: "italic" }}>{b.subtitle_en}</div>
                          {b.description && <div style={{ color: "#E0D7CD", fontSize: "0.72rem", marginTop: "8px", lineHeight: "1.5" }}>{b.description}</div>}
                          {info && (
                            <div style={{ fontSize: "0.65rem", color: "#8a8270", background: "rgba(201,168,76,0.1)", borderRadius: "4px", padding: "2px 4px", marginTop: "6px", display: "inline-block" }}>
                              現在の境地
                            </div>
                          )}
                          {b.acquired_at && <div style={{ color: "#6f675a", fontSize: "0.65rem", marginTop: "8px" }}>{new Date(b.acquired_at).toLocaleDateString("ja-JP")} 取得</div>}
                        </div>
                      ) : (
                        <div key={b.code + i} style={{ background: "#161616", border: "1px dashed rgba(201,168,76,0.35)", borderRadius: "12px", padding: "18px 14px", textAlign: "center", filter: "grayscale(1)", opacity: 0.55 }}>
                          <div style={{ color: "#7c7567", fontSize: "0.7rem", letterSpacing: "2px" }}>{"★".repeat(b.rarity || 1)}</div>
                          <div style={{ color: "#8a8270", fontSize: "1.05rem", fontWeight: 800, fontFamily: "var(--font-family), serif", margin: "8px 0 4px" }}>◇ {b.name_ja}</div>
                          <div style={{ color: "#6f675a", fontSize: "0.7rem", fontStyle: "italic" }}>{b.subtitle_en}</div>
                          {b.description && <div style={{ color: "#5a5347", fontSize: "0.72rem", marginTop: "8px", lineHeight: "1.5" }}>{b.description}</div>}
                          <div style={{ color: "#6f675a", fontSize: "0.62rem", letterSpacing: "1px", marginTop: "8px", fontWeight: "bold" }}>未取得</div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
