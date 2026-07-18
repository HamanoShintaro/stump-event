"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

// P2: 押印の「驚き＋不確かさ」リビール演出。
// 称号は最初「封印」状態で出現し、タップで開封するまでレア度が分からない（変動報酬）。
// 開封時はレア度に応じて演出が増幅する（★5は全画面フラッシュ＋虹）。

type Badge = { id: string; name_ja: string; subtitle_en?: string | null; rarity?: number | null };

const TIER: Record<number, { c: string; rare: string }> = {
  1: { c: "#B07A4E", rare: "銅 ・ 常しるし" },
  2: { c: "#C2C9D2", rare: "銀 ・ 珍しるし" },
  3: { c: "#E3B63E", rare: "金 ・ 希しるし" },
  4: { c: "#B98BE8", rare: "瑠璃 ・ 極しるし" },
  5: { c: "#ffce4d", rare: "虹 ・ 伝説しるし" },
};

function RevealItem({ badge }: { badge: Badge }) {
  const [open, setOpen] = useState(false);
  const r = Math.min(5, Math.max(1, badge.rarity || 1));
  const t = TIER[r];

  // スパーク（火花）のパラメータを一度だけ確定
  const sparks = useMemo(() => {
    const n = 10 + r * 10;
    return Array.from({ length: n }).map((_, i) => {
      const a = Math.random() * 6.28;
      const d = 40 + Math.random() * (34 + r * 20);
      return {
        tx: Math.cos(a) * d,
        ty: Math.sin(a) * d,
        color: r === 5 && i % 2 ? "#5bb6ff" : t.c,
        delay: Math.random() * 0.12,
      };
    });
  }, [r, t.c]);

  if (!open) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "10px 0" }}>
        <motion.button
          onClick={() => setOpen(true)}
          animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 22px rgba(201,168,76,0.3)", "0 0 46px rgba(201,168,76,0.6)", "0 0 22px rgba(201,168,76,0.3)"] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "96px", height: "96px", borderRadius: "50%", cursor: "pointer",
            background: "radial-gradient(circle at 38% 32%,#3a2f14,#171109)", border: "3px solid #C9A84C",
            color: "#C9A84C", fontSize: "2.4rem", fontFamily: "serif",
          }}
          aria-label="称号を開封する"
        >？</motion.button>
        <div style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "2px" }}>― タップして開封 ―</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "10px 0", position: "relative" }}>
      {r >= 4 && (
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: "absolute", inset: 0, background: "#fff", zIndex: 5, pointerEvents: "none", borderRadius: "12px" }}
        />
      )}

      <div style={{ position: "relative", width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {sparks.map((s, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: s.tx, y: s.ty, opacity: 0, scale: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: s.delay }}
            style={{ position: "absolute", left: "72px", top: "72px", width: "6px", height: "6px", borderRadius: "50%", background: s.color, zIndex: 1 }}
          />
        ))}
        <motion.div
          initial={{ scale: 0, rotate: -25, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          style={{
            width: "118px", height: "118px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.6rem", fontFamily: "serif", color: "#fff8e7", zIndex: 2,
            background: `radial-gradient(circle at 38% 32%,${t.c},#171109)`, border: `3px solid ${t.c}`, boxShadow: `0 0 36px ${t.c}88`,
          }}
        >朱</motion.div>
      </div>

      <div style={{ display: "flex", gap: "5px", fontSize: "1.3rem", height: "26px" }}>
        {[1, 2, 3, 4, 5].map((i) =>
          i <= r ? (
            <motion.span key={i} initial={{ opacity: 0, scale: 0, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.15 * i + 0.1 }} style={{ color: t.c }}>★</motion.span>
          ) : (
            <span key={i} style={{ color: "#3a352b" }}>★</span>
          )
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className={r === 5 ? "shuin-rainbow" : undefined}
        style={{ fontFamily: "serif", fontSize: "1.15rem", fontWeight: 700, textAlign: "center", color: r === 5 ? undefined : "#F2E9D5" }}
      >{badge.name_ja}</motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        style={{ fontSize: "0.72rem", letterSpacing: "2px", color: t.c }}
      >{t.rare}{badge.subtitle_en ? ` ・ ${badge.subtitle_en}` : ""}</motion.div>
    </div>
  );
}

export default function BadgeReveal({ badges }: { badges: Badge[] }) {
  if (!badges || badges.length === 0) return null;
  return (
    <div style={{ padding: "18px 24px", backgroundColor: "rgba(201,168,76,0.05)", borderTop: "1px dashed rgba(201,168,76,0.2)", borderBottom: "1px dashed rgba(201,168,76,0.2)" }}>
      <style>{"@keyframes shuinShift{to{background-position:300% 0}}.shuin-rainbow{background:linear-gradient(90deg,#ff5b5b,#ffce4d,#5bd6a0,#5bb6ff,#b57bff,#ff5b5b);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shuinShift 2.4s linear infinite}"}</style>
      <div style={{ fontSize: "0.75rem", color: "var(--accent-color)", letterSpacing: "1px", fontWeight: 700, marginBottom: "6px", textAlign: "center", textTransform: "uppercase" }}>
        新たなる称号が宿った
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {badges.map((b) => <RevealItem key={b.id} badge={b} />)}
      </div>
    </div>
  );
}
