"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

// 62_badge_logic / 自由が丘v2 M5①: このルートで授かる称号を提示し、未取得はシルエットで「欠け」を見せて収集を促す
export default function RouteBadgeTeaser({ routeId }: { routeId: string }) {
  const { user } = useAuth();
  const [badges, setBadges] = useState<any[]>([]);
  const [earned, setEarned] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: bs } = await supabase
        .from("badges")
        .select("*")
        .eq("route_id", routeId)
        .eq("is_active", true);
      const list = (bs || []).filter((b: any) => b.category === "route" || b.category === "quiz");
      list.sort((a: any, b: any) => (a.category === "route" ? 0 : 1) - (b.category === "route" ? 0 : 1));
      const earnedSet = new Set<string>();
      if (user) {
        const { data: as } = await supabase
          .from("badge_assignments")
          .select("badges(code)")
          .eq("user_id", user.id);
        (as || []).forEach((x: any) => { if (x.badges && x.badges.code) earnedSet.add(x.badges.code); });
      }
      if (active) { setBadges(list); setEarned(earnedSet); setLoaded(true); }
    })();
    return () => { active = false; };
  }, [routeId, user]);

  if (!loaded || badges.length === 0) return null;
  const got = badges.filter((b) => earned.has(b.code)).length;

  return (
    <section style={{ marginTop: "40px" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-color)", marginBottom: "4px" }}>
        このルートで授かるしるし
      </h2>
      <p style={{ fontSize: "0.85rem", color: "#A39687", marginBottom: "16px" }}>
        歩き終え、自答すると授かる称号が変わる ・ {got}/{badges.length} 取得
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px" }}>
        {badges.map((b) => {
          const isGot = earned.has(b.code);
          return (
            <div
              key={b.code}
              style={{
                background: "#121212",
                border: "1px solid " + (isGot ? "#C9A84C" : "rgba(201,168,76,0.25)"),
                borderRadius: "12px",
                padding: "16px 12px",
                textAlign: "center",
                opacity: isGot ? 1 : 0.6,
                filter: isGot ? "none" : "grayscale(0.6)",
              }}
            >
              <div style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "2px" }}>{"★".repeat(b.rarity || 1)}</div>
              <div style={{ color: "#C9A84C", fontSize: "1rem", fontWeight: 800, fontFamily: "serif", margin: "8px 0 4px" }}>
                {isGot ? b.name_ja : "◇ " + b.name_ja}
              </div>
              <div style={{ color: "#9a8f6f", fontSize: "0.68rem", fontStyle: "italic" }}>
                {isGot ? b.subtitle_en : "未取得"}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
