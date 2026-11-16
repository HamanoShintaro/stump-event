"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";

// このルートで授かる「ルートの踏破印（メイン＋自答の儀によるサブ）」を1つの実績として提示
export default function RouteBadgeTeaser({ routeId }: { routeId: string }) {
  const { user } = useAuth();
  const { showAlert } = useCustomAlert();
  const [mainBadge, setMainBadge] = useState<any | null>(null);
  const [quizBadges, setQuizBadges] = useState<any[]>([]);
  const [earnedCodes, setEarnedCodes] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.href,
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error(error);
      setIsSigningIn(false);
      await showAlert({
        text: "Googleアカウント連携の開始に失敗しました。時間をおいて再度お試しください。",
        okText: "確認",
      });
    }
  };

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: bs } = await supabase
        .from("badges")
        .select("*")
        .eq("route_id", routeId)
        .eq("is_active", true);
      const list = bs || [];
      const routeB = list.find((b: any) => b.category === "route") || null;
      const quizBs = list.filter((b: any) => b.category === "quiz");

      const earnedSet = new Set<string>();
      if (user) {
        const { data: as } = await supabase
          .from("badge_assignments")
          .select("acquired_at, badges(code)")
          .eq("user_id", user.id)
          .order("acquired_at", { ascending: false });
        (as || []).forEach((x: any) => {
          if (x.badges && x.badges.code) earnedSet.add(x.badges.code);
        });
      }
      if (active) {
        setMainBadge(routeB);
        setQuizBadges(quizBs);
        setEarnedCodes(earnedSet);
        setLoaded(true);
      }
    })();
    return () => {
      active = false;
    };
  }, [routeId, user]);

  if (!loaded || (!mainBadge && quizBadges.length === 0)) return null;

  const earnedSub = quizBadges.find((b) => earnedCodes.has(b.code)) || null;
  const isCompleted = Boolean((mainBadge && earnedCodes.has(mainBadge.code)) || earnedSub);

  return (
    <section style={{ marginTop: "40px" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-color)", marginBottom: "4px" }}>
        このルートで授かる踏破印（SHUIN）
      </h2>
      <p style={{ fontSize: "0.85rem", color: "#A39687", marginBottom: "16px" }}>
        最後まで巡り「自答の儀」で答えを選ぶと、メイン印にあなただけの副印（サブ）が刻まれます ・ {isCompleted ? "踏破済" : "未踏破"}
      </p>
      <div
        style={{
          background: "#121212",
          border: "1px solid " + (isCompleted ? "var(--accent-color)" : "rgba(201,168,76,0.25)"),
          borderRadius: "2px",
          padding: "20px 18px",
          maxWidth: "360px",
          opacity: isCompleted ? 1 : 0.85,
          filter: isCompleted ? "none" : "grayscale(0.35)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <span style={{ color: "var(--accent-color)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "1px" }}>
            メイン（踏破印）
          </span>
          <span style={{ color: "var(--accent-color)", fontSize: "0.75rem", letterSpacing: "2px" }}>
            {"★".repeat((mainBadge && mainBadge.rarity) || 2)}
          </span>
        </div>
        <div style={{ color: "var(--accent-color)", fontSize: "1.15rem", fontWeight: 800, fontFamily: "serif", marginBottom: "4px" }}>
          {isCompleted ? mainBadge?.name_ja || "ルートの巡礼者" : `◇ ${mainBadge?.name_ja || "ルートの巡礼者"}`}
        </div>
        <div style={{ color: "#9a8f6f", fontSize: "0.72rem", fontStyle: "italic", marginBottom: "14px" }}>
          {isCompleted ? mainBadge?.subtitle_en || "" : "全スポットをめぐると刻印されます"}
        </div>

        {quizBadges.length > 0 && (
          <div
            style={{
              borderTop: "1px dashed rgba(201,168,76,0.3)",
              paddingTop: "12px",
            }}
          >
            <div style={{ color: "#A39687", fontSize: "0.72rem", fontWeight: 700, marginBottom: "4px" }}>
              サブ（自答の儀の選択印）
            </div>
            {earnedSub ? (
              <>
                <div style={{ color: "#F2E9D5", fontSize: "0.95rem", fontWeight: 800 }}>
                  {earnedSub.name_ja}
                </div>
                <div style={{ color: "#9a8f6f", fontSize: "0.75rem", marginTop: "2px" }}>
                  {earnedSub.description}
                </div>
              </>
            ) : (
              <div style={{ color: "#888", fontSize: "0.8rem" }}>
                ◇ 自答の儀での選択に応じて刻印（全{quizBadges.length}種から1つ）
              </div>
            )}
          </div>
        )}
      </div>

      {!user && (
        <div style={{ marginTop: "14px", maxWidth: "360px" }}>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSigningIn}
            style={{
              width: "100%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "14px 16px",
              background: "var(--primary-color)",
              color: "#ffffff",
              border: "1px solid var(--primary-color)",
              borderRadius: "2px",
              fontSize: "0.94rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
              cursor: isSigningIn ? "wait" : "pointer",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "22px",
                height: "22px",
                borderRadius: "2px",
                background: "#ffffff",
                flexShrink: 0,
              }}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt=""
                style={{ width: "14px", height: "14px" }}
              />
            </span>
            <span>
              {isSigningIn ? "連携画面へ移動中..." : "SHUIN帳を作る（無料）"}
            </span>
          </button>
          <p style={{ fontSize: "0.75rem", color: "rgba(17, 17, 17, 0.58)", marginTop: "6px", lineHeight: 1.5 }}>
            押印の記録や踏破印をあなたの手元に残せます。
          </p>
        </div>
      )}
    </section>
  );
}
