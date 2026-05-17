"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Coffee, BookOpen, CakeSlice, Music, Camera } from "lucide-react";

export default function SplashAnimation() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // セッションストレージで初回訪問を判定
    const hasVisited = sessionStorage.getItem("has_visited_splash");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("has_visited_splash", "true");
      
      // 7.2秒後にフェードアウトを開始（AnimatePresenceがexitアニメーションを処理）
      const timer = setTimeout(() => setShowSplash(false), 7200);
      return () => clearTimeout(timer);
    }
  }, []);

  const spots = [
    { Icon: Coffee, x: "18%", y: "35%", color: "#14b8a6", delay: 1.0, label: "レトロ喫茶" },
    { Icon: BookOpen, x: "72%", y: "25%", color: "#14b8a6", delay: 1.35, label: "本屋めぐり" },
    { Icon: CakeSlice, x: "78%", y: "58%", color: "#fbbf24", delay: 1.7, label: "ごほうび甘味" },
    { Icon: Music, x: "28%", y: "72%", color: "#fbbf24", delay: 2.05, label: "音楽のある街" },
    { Icon: Camera, x: "52%", y: "45%", color: "#fb7185", delay: 2.4, label: "写真スポット" }
  ];

  const pathD = "M 170 330 C 280 210, 420 220, 520 350 S 720 520, 800 310";

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "#fffdf7",
            zIndex: 9999,
            fontFamily: "var(--font-family)",
            color: "#4a321f"
          }}
        >
          {/* Watercolor edge background blobs */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.8 }}>
            <div style={{ position: "absolute", left: "-6rem", top: "-6rem", height: "24rem", width: "24rem", borderRadius: "50%", backgroundColor: "#ffe4e6", filter: "blur(64px)" }} />
            <div style={{ position: "absolute", right: "-6rem", top: "4rem", height: "20rem", width: "20rem", borderRadius: "50%", backgroundColor: "#fef3c7", filter: "blur(64px)" }} />
            <div style={{ position: "absolute", bottom: "-6rem", left: "2.5rem", height: "24rem", width: "24rem", borderRadius: "50%", backgroundColor: "#ccfbf1", filter: "blur(64px)" }} />
            <div style={{ position: "absolute", bottom: "-5rem", right: 0, height: "24rem", width: "24rem", borderRadius: "50%", backgroundColor: "#ecfccb", filter: "blur(64px)" }} />
          </div>

          {/* dotted decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <svg style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }} viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
              <path d="M40 120 C180 40,260 180,410 90 S680 50,790 120" fill="none" stroke="#F2B84B" strokeWidth="5" strokeDasharray="12 16" strokeLinecap="round" opacity="0.55" />
              <path d="M110 520 C220 450,280 620,390 540" fill="none" stroke="#20B7B1" strokeWidth="5" strokeDasharray="10 15" strokeLinecap="round" opacity="0.45" />
              <path d="M820 440 C760 350,890 315,830 250" fill="none" stroke="#F2707B" strokeWidth="5" strokeDasharray="10 15" strokeLinecap="round" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Main animated map route */}
          <svg style={{ position: "absolute", height: "520px", width: "880px", maxWidth: "92vw" }} viewBox="0 0 1000 700">
            <motion.path
              d={pathD}
              fill="none"
              stroke="#F2707B"
              strokeWidth="7"
              strokeDasharray="14 18"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ delay: 2.8, duration: 1.8, ease: "easeInOut" }}
            />
          </svg>

          {/* floating spot icons */}
          {spots.map(({ Icon, x, y, color, delay, label }) => (
            <motion.div
              key={label}
              initial={{ scale: 0, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay, type: "spring", stiffness: 260, damping: 16 }}
              style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", left: x, top: y }}
            >
              <div style={{ borderRadius: "1rem", backgroundColor: "rgba(255,255,255,0.9)", padding: "12px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)" }}>
                <Icon size={28} color={color} strokeWidth={2.4} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.25 }}
                style={{ borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.8)", padding: "4px 12px", fontSize: "0.75rem", fontWeight: "bold", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)" }}
              >
                {label}
              </motion.div>
            </motion.div>
          ))}

          {/* pins */}
          {["16%", "48%", "79%"].map((left, i) => (
            <motion.div
              key={left}
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 3.15 + i * 0.28, type: "spring", stiffness: 320, damping: 14 }}
              style={{ position: "absolute", left, top: ["48%", "37%", "43%"][i] }}
            >
              <MapPin size={48} color={["#14b8a6", "#fbbf24", "#fb7185"][i]} fill="currentColor" stroke="white" strokeWidth={1.8} style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }} />
            </motion.div>
          ))}

          {/* Text Overlay */}
          <motion.div 
            style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "32px", background: "rgba(255, 255, 255, 0.75)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.6)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", margin: "0 20px" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.5, duration: 1, ease: "easeOut" }}
          >
            <h1 style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)", lineHeight: 1.4, fontWeight: 800, color: "var(--primary-color)", marginBottom: "20px", letterSpacing: "-0.05em" }}>
              <span style={{ display: "inline-block" }}>すべての好きが、</span><br/>
              <span style={{ display: "inline-block" }}>地図になる。</span>
            </h1>
            <p style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)", lineHeight: 1.6, fontWeight: 500, color: "var(--text-color)" }}>
              誰かが作った「好き」の足跡をたどる。<br/>
              移動を、制覇に変える新しい週末の形。
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
