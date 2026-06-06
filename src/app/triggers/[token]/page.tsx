"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import styles from "./page.module.css";

// 中目黒のプロローグを含むフォールバック用シード
const FALLBACK_NARRATIVES: Record<string, {
  route_id: string;
  route_name: string;
  narrative_title: string;
  act_0_text: string;
}> = {
  "shuin-nakameguro-prologue": {
    route_id: "nakameguro-showa-1", // mock.tsの中目黒ルートIDに準拠
    route_name: "目黒川、昭和の痕跡をたどる物語",
    narrative_title: "目黒川と友禅染の記憶",
    act_0_text: "かつて、目黒川のほとりには友禅染の洗い場が並び、川面は鮮やかな色彩に染まっていたという。\n時代は流れ、職人たちの姿は消えたが、彼らが刻んだしるしは今も街の土台に静かに息づいている。\n\nさあ、しるしを刻み、失われつつある昭和の痕跡をたどる旅へ出かけよう。"
  },
  "nakameguro-qr-trigger": {
    route_id: "nakameguro-showa-1",
    route_name: "目黒川、昭和の痕跡をたどる物語",
    narrative_title: "目黒川と友禅染の記憶",
    act_0_text: "かつて、目黒川のほとりには友禅染の洗い場が並び、川面は鮮やかな色彩に染まっていたという。\n時代は流れ、職人たちの姿は消えたが、彼らが刻んだしるしは今も街の土台に静かに息づいている。\n\nさあ、しるしを刻み、失われつつある昭和の痕跡をたどる旅へ出かけよう。"
  }
};

type AnimationState = 'title' | 'prologue' | 'cta';

export default function QRTriggerPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user } = useAuth();
  const { showAlert } = useCustomAlert();

  const [loading, setLoading] = useState(true);
  const [routeId, setRouteId] = useState<string | null>(null);
  const [routeName, setRouteName] = useState<string>("");
  const [narrativeTitle, setNarrativeTitle] = useState<string>("");
  const [act0Text, setAct0Text] = useState<string>("");
  const [animState, setAnimState] = useState<AnimationState>('title');
  const [isJoining, setIsJoining] = useState(false);

  // 1. トリガーデータ ＆ ナラティブデータのフェッチ (Supabase または フォールバック)
  useEffect(() => {
    async function fetchTriggerData() {
      setLoading(true);
      const token = resolvedParams.token;

      try {
        // (A) Supabase の `trigger_qrs` テーブルから検索を試みる
        const { data: triggerData, error: triggerError } = await supabase
          .from("trigger_qrs")
          .select("*")
          .eq("qr_token", token)
          .eq("is_active", true)
          .maybeSingle();

        if (!triggerError && triggerData && triggerData.linked_route_ids && triggerData.linked_route_ids.length > 0) {
          const linkedRouteId = triggerData.linked_route_ids[0];
          setRouteId(linkedRouteId);

          // ルートとナラティブを取得
          const { data: routeData } = await supabase
            .from("routes")
            .select("id, name, title")
            .eq("id", linkedRouteId)
            .maybeSingle();

          const { data: narrativeData } = await supabase
            .from("narratives")
            .select("*")
            .eq("route_id", linkedRouteId)
            .eq("is_active", true)
            .maybeSingle();

          if (routeData) {
            setRouteName(routeData.title || routeData.name || "謎に包まれたルート");
          }
          if (narrativeData) {
            setNarrativeTitle(narrativeData.title || "失われた物語の記憶");
            setAct0Text(narrativeData.act_0_text || "");
          } else {
            // ルートはあるがナラティブがない場合のフォールバック
            setNarrativeTitle(routeData?.title || "失われた物語の記憶");
            setAct0Text("ここから始まる、特別な巡礼の物語。街角のしるしを巡ることで、隠された土地の記憶が呼び覚まされます。");
          }
          setLoading(false);
          triggerPrologueAnimation();
          return;
        }

        // (B) テーブルが無いか、見つからない場合はフロントエンドのフォールバックを利用
        const localFallback = FALLBACK_NARRATIVES[token] || FALLBACK_NARRATIVES["shuin-nakameguro-prologue"];
        if (localFallback) {
          // もし本番の Supabase に該当する実データがあるかもしれないので、フォールバックの route_id を使って実データを引きにいく
          const { data: dbRoute } = await supabase
            .from("routes")
            .select("id, name, title")
            .eq("id", localFallback.route_id)
            .maybeSingle();

          if (dbRoute) {
            setRouteId(dbRoute.id);
            setRouteName(dbRoute.title || dbRoute.name || localFallback.route_name);
          } else {
            // DBにルートがなければ、完全にモックIDとモック名を利用（開発中・実地テストでの強靭性のため）
            setRouteId(localFallback.route_id);
            setRouteName(localFallback.route_name);
          }

          setNarrativeTitle(localFallback.narrative_title);
          setAct0Text(localFallback.act_0_text);
        } else {
          // 万が一どれにも該当しない場合
          setRouteId("unknown");
          setRouteName("謎に包まれた街のしるし");
          setNarrativeTitle("失われた物語");
          setAct0Text("この場所に秘められた物語があります。街を歩いて、しるしを刻む旅へ出かけましょう。");
        }
      } catch (err) {
        console.error("Error fetching trigger data", err);
        // エラー時もフォールバックで続行
        const fallback = FALLBACK_NARRATIVES["shuin-nakameguro-prologue"];
        setRouteId(fallback.route_id);
        setRouteName(fallback.route_name);
        setNarrativeTitle(fallback.narrative_title);
        setAct0Text(fallback.act_0_text);
      } finally {
        setLoading(false);
        triggerPrologueAnimation();
      }
    }

    fetchTriggerData();
  }, [resolvedParams.token]);

  // 2. プロローグ（Act 0）の紙芝居紙風アニメーションタイムライン
  const triggerPrologueAnimation = () => {
    setAnimState('title');

    // 2.5秒後にタイトルからプロローグ本文へ
    setTimeout(() => {
      setAnimState('prologue');
    }, 2800);

    // 7.5秒後にCTA（参加ボタン）表示へ
    setTimeout(() => {
      setAnimState('cta');
    }, 8500);
  };

  // 3. ルートへの参加 ＆ ナビゲーション処理
  const handleJoinRoute = async () => {
    if (!routeId) return;

    if (!user) {
      // ログインしていない場合は、ログイン後にこのトリガーに戻れるように遷移情報をローカルストレージ等に入れておく
      localStorage.setItem("post_login_redirect", `/triggers/${resolvedParams.token}`);
      await showAlert({ text: "物語へ参加するにはログインが必要です。", okText: "ログイン画面へ" });
      router.push("/login");
      return;
    }

    setIsJoining(true);
    try {
      // (A) すでに user_routes (進行状態) に登録されているか確認
      const { data: existingProgress } = await supabase
        .from("user_routes")
        .select("id, status")
        .eq("user_id", user.id)
        .eq("route_id", routeId)
        .maybeSingle();

      if (existingProgress) {
        // すでに参加済みの場合はそのままルート詳細かマップにリダイレクト
        router.push(`/routes/${routeId}`);
      } else {
        // (B) まだ参加していない場合は user_routes にインサート（status: 'in_progress'）
        const { error: joinError } = await supabase
          .from("user_routes")
          .insert({
            user_id: user.id,
            route_id: routeId,
            status: "in_progress",
            joined_at: new Date().toISOString()
          });

        if (joinError) throw joinError;

        // ルートの最初のスポットを取得して、それをアクティブな目的地に設定してあげる
        const { data: firstSpot } = await supabase
          .from("spots")
          .select("id")
          .eq("route_id", routeId)
          .order("order_index", { ascending: true })
          .limit(1)
          .maybeSingle();

        if (firstSpot) {
          await supabase
            .from("users")
            .update({ active_spot_id: firstSpot.id })
            .eq("id", user.id);
        }

        router.push(`/routes/${routeId}/map`);
      }
    } catch (err: any) {
      console.error("Error joining route:", err);
      // テーブルエラーなどの場合も、実機テストの円滑な進行のために詳細画面にフォールバック遷移
      router.push(`/routes/${routeId}`);
    } finally {
      setIsJoining(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0D0D0D", display: "flex", alignItems: "center", justifyContent: "center", color: "#F2F2F2" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ animation: "pulseMarker 1s infinite ease-in-out", color: "var(--accent-color)", fontWeight: "800" }}>●</p>
          <p style={{ fontSize: "0.9rem", color: "#888", letterSpacing: "1px" }}>物語を読み込んでいます...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0D0D0D", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "24px", overflow: "hidden", position: "relative" }}>
      {/* プレミアムな背景装飾：うっすらとした朱の境界マーク */}
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        border: "1px dashed rgba(199, 68, 46, 0.05)",
        top: "10%",
        left: "-50px",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        border: "1px dashed rgba(201, 168, 76, 0.03)",
        bottom: "5%",
        right: "-100px",
        pointerEvents: "none"
      }} />

      <AnimatePresence mode="wait">
        {/* 1. タイトルフェーズ */}
        {animState === 'title' && (
          <motion.div
            key="title-phase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ textAlign: "center", maxWidth: "340px", zIndex: 10 }}
          >
            <div style={{ color: "var(--accent-color)", fontSize: "0.75rem", letterSpacing: "6px", fontWeight: "900", textTransform: "uppercase", marginBottom: "16px" }}>
              SHUIN NARRATIVE ACT 0
            </div>
            <h1 style={{ fontSize: "1.7rem", fontWeight: "900", color: "#F2F2F2", fontFamily: "serif", lineHeight: "1.5", letterSpacing: "2px", borderBottom: "1px solid rgba(251,251,251,0.08)", paddingBottom: "20px", marginBottom: "20px" }}>
              {narrativeTitle}
            </h1>
            <p style={{ fontSize: "0.9rem", color: "#888888", letterSpacing: "1px" }}>
              この街の土台に刻まれた、昭和の物語のプロローグ
            </p>
          </motion.div>
        )}

        {/* 2. プロローグ紙芝居フェーズ */}
        {animState === 'prologue' && (
          <motion.div
            key="prologue-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ maxWidth: "360px", width: "100%", zIndex: 10 }}
          >
            <div style={{ borderLeft: "2px solid var(--accent-color)", paddingLeft: "20px", margin: "20px 0" }}>
              <p style={{ 
                color: "#F2F2F2", 
                fontSize: "1.05rem", 
                lineHeight: "2.1", 
                letterSpacing: "0.05em",
                whiteSpace: "pre-wrap",
                wordBreak: "keep-all",
                fontFamily: "serif"
              }}>
                {act0Text}
              </p>
            </div>
          </motion.div>
        )}

        {/* 3. CTA（参加）フェーズ */}
        {animState === 'cta' && (
          <motion.div
            key="cta-phase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, type: "spring", damping: 20 }}
            style={{ maxWidth: "360px", width: "100%", textAlign: "center", zIndex: 10 }}
          >
            <div style={{ marginBottom: "32px" }}>
              <span style={{ fontSize: "2.5rem" }}>💮</span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--accent-color)", fontFamily: "serif", margin: "16px 0 8px" }}>
                物語の扉が開かれました
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#888888", lineHeight: "1.6" }}>
                これより、ルート『{routeName}』へ入ります。街を歩いてしるしを刻み、残りの物語を紡いでください。
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                onClick={handleJoinRoute}
                disabled={isJoining}
                className="btn-primary"
                style={{ 
                  width: "100%", 
                  padding: "18px", 
                  fontSize: "1.1rem", 
                  fontWeight: "800",
                  letterSpacing: "2px",
                  background: "linear-gradient(135deg, var(--primary-color) 0%, #E04E39 100%)",
                  border: "none",
                  boxShadow: "0 10px 30px rgba(199, 68, 46, 0.3)"
                }}
              >
                {isJoining ? "物語へ入っています..." : "この物語を巡る ➔"}
              </button>

              <Link 
                href="/" 
                className="btn-secondary"
                style={{ 
                  width: "100%", 
                  padding: "16px", 
                  fontSize: "0.95rem", 
                  color: "#888", 
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  background: "transparent",
                  textAlign: "center",
                  display: "block"
                }}
              >
                あとで（ホーム画面へ）
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
