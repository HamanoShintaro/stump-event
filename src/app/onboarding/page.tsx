"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// P4: 初回起動の世界観フック（御朱印×街の来訪ライフログ→押印→称号コレクション）
const SLIDES = [
  { kanji: "朱", title: "街の、しるし。", body: "SHUINは御朱印のデジタル版。訪れた場所を“しるし”として刻む、街の来訪ライフログ。" },
  { kanji: "押", title: "歩いて、押印する。", body: "スポットに着いたら押印。その場所に隠れた物語の断片が解放され、来訪が記録になる。" },
  { kanji: "印", title: "しるしが、称号になる。", body: "歩いた証は称号となり、あなただけのSHUIN帳に積み上がる。さあ、最初のしるしを刻もう。" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [i, setI] = useState(0);
  const last = i === SLIDES.length - 1;
  const s = SLIDES[i];

  const finish = () => {
    try { localStorage.setItem("shuin_onboarded", "1"); } catch {}
    router.push("/");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--bg-color, #F7F3EA)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", fontFamily: "'Noto Sans JP', sans-serif" }}>
      <button onClick={finish} style={{ position: "absolute", top: "20px", right: "20px", background: "transparent", border: "none", color: "#A39687", fontSize: "0.85rem", cursor: "pointer" }}>スキップ</button>

      <div style={{ width: "120px", height: "120px", borderRadius: "16px", background: "#C7442E", border: "3px solid #9e2f1f", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", boxShadow: "0 14px 30px rgba(199,68,46,0.25)" }}>
        <span style={{ fontFamily: "'Yu Mincho','Hiragino Mincho ProN',serif", color: "#fff", fontSize: "60px", fontWeight: 700 }}>{s.kanji}</span>
      </div>

      <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-color, #111)", marginBottom: "16px", textAlign: "center" }}>{s.title}</h1>
      <p style={{ fontSize: "1rem", color: "#5C4E43", lineHeight: 1.9, textAlign: "center", maxWidth: "420px", marginBottom: "40px" }}>{s.body}</p>

      <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
        {SLIDES.map((_, idx) => (
          <span key={idx} style={{ width: idx === i ? "24px" : "8px", height: "8px", borderRadius: "4px", background: idx === i ? "var(--primary-color, #C7442E)" : "#D6CEC3", transition: "all 0.2s" }} />
        ))}
      </div>

      <button onClick={() => (last ? finish() : setI(i + 1))} style={{ width: "100%", maxWidth: "320px", padding: "16px", borderRadius: "28px", background: "var(--primary-color, #C7442E)", color: "#fff", border: "none", fontWeight: 800, fontSize: "1.05rem", cursor: "pointer" }}>
        {last ? "はじめる" : "次へ"}
      </button>
    </div>
  );
}
