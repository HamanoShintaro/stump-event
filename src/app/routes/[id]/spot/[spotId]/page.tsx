"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { QRScanner } from "@/components/QRScanner";
import { getDistance } from "geolib";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { parseWKBPoint } from "@/utils/wkb";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { motion, AnimatePresence } from "framer-motion";
import { Footprints, Map as MapIcon, Star, CheckCircle, Share2, Compass, Award } from "lucide-react";
import { evaluateBadges } from "@/utils/badgeEvaluator";
import { useSpotStampStatus } from "@/hooks/useSpotStampStatus";
import { getCategoryStampUrl, getCategoryBgUrl } from "@/utils/stampHelper";
import { mockRallies } from "@/data/mock";
import styles from "./page.module.css";

const MAX_DISTANCE_METERS = 100; // 100m within spot to check in

interface Spot {
  id: string;
  name: string;
  description?: string;
  cover_image_url?: string;
  lat: number;
  lng: number;
  qr_token?: string;
  address?: string;
  f7_fragment?: string;
  f7_full?: string;
  is_final?: boolean;
  next_spot_id?: string;
  next_spot_name?: string;
}

type CeremonyStep = 
  | 'idle' 
  | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' 
  | 'post_scan_card' 
  | 'answer_question'
  | 'C1' | 'C2' | 'C3' | 'C4' 
  | 'post_route_card';

export default function SpotCheckInPage({ params }: { params: Promise<{ id: string; spotId: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user } = useAuth();
  const { showAlert } = useCustomAlert();

  const [route, setRoute] = useState<any>(null);
  const [spot, setSpot] = useState<Spot | null>(null);
  const [allSpots, setAllSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);

  const [locationError, setLocationError] = useState<string | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  // 演出用ステート
  const [ceremonyStep, setCeremonyStep] = useState<CeremonyStep>('idle');
  const [newlyAcquiredBadges, setNewlyAcquiredBadges] = useState<any[]>([]);
  const [nextDestInfo, setNextDestInfo] = useState<{ isComplete: boolean; nextSpot: Spot | null } | null>(null);
  const [selectedQuizBadge, setSelectedQuizBadge] = useState<any>(null);

  // 目的地移動先を算出する関数
  const prepareNextDestination = async (stampedSpotId: string) => {
    if (!user || !route || !spot || allSpots.length === 0) return;
    try {
      const { data: stampData } = await supabase
        .from("stamps")
        .select("spot_id")
        .eq("user_id", user.id)
        .eq("route_id", route.id);
      
      const stampedIds = new Set(stampData?.map(s => s.spot_id) || []);
      stampedIds.add(stampedSpotId);

      // 今の目的地が未所持（スタンプなし）の場合、そのまま（移動しない）
      if (!stampedIds.has(spot.id)) {
        setNextDestInfo({ isComplete: false, nextSpot: spot });
        return;
      }

      const currentIndex = allSpots.findIndex(s => s.id === spot.id);
      if (currentIndex === -1) return;

      let nextSpot = null;
      // 1. 今設定されている目的地の順序より大きい（後にある）スポットのうち、もっとも順序が早く、かつしるし未所持のスポット
      for (let i = currentIndex + 1; i < allSpots.length; i++) {
        if (!stampedIds.has(allSpots[i].id)) {
          nextSpot = allSpots[i];
          break;
        }
      }

      // 2. なければ、今設定されているより小さい（前にある）スポットのうち、もっとも順序が早く、かつしるし未所持のスポット
      if (!nextSpot) {
        for (let i = 0; i < currentIndex; i++) {
          if (!stampedIds.has(allSpots[i].id)) {
            nextSpot = allSpots[i];
            break;
          }
        }
      }

      // 3. 対象となる未所持スポットが一切ない場合、コンプリート
      if (!nextSpot) {
        setNextDestInfo({ isComplete: true, nextSpot: null });
      } else {
        setNextDestInfo({ isComplete: false, nextSpot });
      }
    } catch (err) {
      console.error("Failed to prepare next destination:", err);
    }
  };

  // 押印状態チェック用のカスタムフック
  const {
    isAcquired: stampAcquired,
    isTodayStamped,
    visitorNumber: latestVisitorNumber,
    scannedDate: latestScannedDate,
    visitCount,
    loading: stampLoading,
    refetch: refetchStampStatus
  } = useSpotStampStatus(resolvedParams.spotId, user?.id);

  // 演出時に上書きできるようローカルステートとしても保持する
  const [visitorNumber, setVisitorNumber] = useState<number>(47);
  const [scannedDate, setScannedDate] = useState<string>("");

  useEffect(() => {
    if (stampAcquired) {
      setVisitorNumber(latestVisitorNumber);
      setScannedDate(latestScannedDate);
      if (user && route && allSpots.length > 0 && spot) {
        prepareNextDestination(spot.id);
      }
    }
  }, [stampAcquired, latestVisitorNumber, latestScannedDate, user, route, allSpots, spot]);

  // 1. Supabaseからルート・スポット・全スポット情報をフェッチ
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // ルート情報取得
        const { data: routeData, error: routeError } = await supabase
          .from("routes")
          .select("*")
          .eq("id", resolvedParams.id)
          .maybeSingle();

        if (routeError || !routeData) {
          setLoading(false);
          return;
        }
        
        // マップデータのマージ (ハイブリッドマージ)
        const mockRoute = mockRallies.find(r => r.id === resolvedParams.id);
        const finalRoute = mockRoute ? { ...routeData, ...mockRoute } : routeData;
        setRoute(finalRoute);

        // 全スポット情報取得（完走セレモニーの走馬灯用）
        const { data: allSpotsData } = await supabase
          .from("spots")
          .select("*")
          .eq("route_id", resolvedParams.id)
          .order("order_index", { ascending: true });

        let parsedAllSpots: Spot[] = [];
        if (allSpotsData) {
          parsedAllSpots = allSpotsData.map((s: any) => {
            const pt = parseWKBPoint(s.location);
            const mockSpot = mockRoute?.spots?.find(ms => ms.id === s.id);
            return {
              id: s.id,
              name: s.name,
              description: s.description || mockSpot?.description,
              cover_image_url: s.cover_image_url || s.image_url || mockSpot?.cover_image_url,
              lat: pt?.lat || mockSpot?.lat || 0,
              lng: pt?.lng || mockSpot?.lng || 0,
              qr_token: s.qr_token || mockSpot?.qr_token,
              address: s.address || mockSpot?.address,
              f7_fragment: s.f7_fragment || mockSpot?.f7_fragment,
              f7_full: s.f7_full || mockSpot?.f7_full,
              is_final: s.is_final || mockSpot?.is_final || (allSpotsData[allSpotsData.length - 1].id === s.id), // 最終判定
              next_spot_id: s.next_spot_id || mockSpot?.next_spot_id,
              next_spot_name: s.next_spot_name || mockSpot?.next_spot_name
            };
          });
          setAllSpots(parsedAllSpots);
        }

        // 現在のスポット情報取得
        const currentSpot = parsedAllSpots.find(s => s.id === resolvedParams.spotId) || null;
        if (!currentSpot) {
          setLoading(false);
          return;
        }
        setSpot(currentSpot);
      } catch (e) {
        console.error("Failed to load data", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [resolvedParams.id, resolvedParams.spotId]);

  // 2. GPS監視
  useEffect(() => {
    if (!spot || spot.lat === 0) return;

    if (!navigator.geolocation) {
      setLocationError("お使いのブラウザはGPSをサポートしていません。");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocationError(null);
        const dist = getDistance(
          { latitude: position.coords.latitude, longitude: position.coords.longitude },
          { latitude: spot.lat, longitude: spot.lng }
        );
        setDistance(dist);
      },
      (error) => {
        setLocationError("現在地を取得できませんでした。GPSをオンにしてください。");
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [spot]);

  const isPageLoading = loading || stampLoading;

  if (isPageLoading) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>読み込み中...</div>;
  }

  if (!route || !spot) {
    return notFound();
  }

  const isLocationValid = distance !== null && distance <= MAX_DISTANCE_METERS;

  // 音声再生ヘルパー
  const playSound = (src: string) => {
    try {
      const audio = new Audio(src);
      audio.volume = 0.5;
      audio.play().catch(err => console.log("Audio autoplay blocked by browser policy:", err));
    } catch (e) {
      console.log("Audio context error:", e);
    }
  };

  // 3. 押印（しるし獲得）時の演出タイムライン制御 (F4〜F9)
  const triggerCeremony = (visNum: number) => {
    setVisitorNumber(visNum);
    setScannedDate(new Date().toLocaleDateString("ja-JP"));
    
    // 0.0s: F4（紙を広げる）開始
    setCeremonyStep('F4');
    
    // 2.0s: F5（スタンプ出現・構える）
    setTimeout(() => {
      setCeremonyStep('F5');
    }, 2000);

    // 4.65s: F6（ドンッと押す・インパクト） - 太鼓の音を再生
    setTimeout(() => {
      setCeremonyStep('F6');
      playSound("/sounds/stamp_down.mp3");
    }, 4650);

    // 5.5s: F7（離す・コロンと倒れる・スタンプ印影が浮かび始める） - ぽよ音を再生
    setTimeout(() => {
      setCeremonyStep('F7');
      playSound("/sounds/stamp_up.mp3");
    }, 5500);

    // 7.0s: F8（カメラ近寄る・スタンプが大きく映る）
    setTimeout(() => {
      setCeremonyStep('F8');
    }, 7000);

    // 8.5s: F9（来訪者番号＆しるし帳追加の余韻）
    setTimeout(() => {
      setCeremonyStep('F9');
    }, 8500);
  };

  // 4. 押印 API POST 実行
  const handleScanSuccess = async (decodedText: string) => {
    if (stampAcquired) return;
    if (!spot.qr_token || decodedText === spot.qr_token) {
      await performCheckIn(decodedText);
    } else {
      await showAlert({ text: "このスポットのQRコードではないようです。", okText: "確認" });
    }
  };

  const performCheckIn = async (qrTokenUsed?: string) => {
    if (!user) {
      await showAlert({ text: "押印するにはログインが必要です。", okText: "確認" });
      return;
    }

    setIsCheckingIn(true);
    try {
      let clientLat = 0, clientLng = 0;
      if (navigator.geolocation) {
        await new Promise<void>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => { clientLat = pos.coords.latitude; clientLng = pos.coords.longitude; resolve(); },
            () => resolve(),
            { timeout: 2000 }
          );
        });
      }

      // Supabase: 監査ログ(stamp_events)インサート
      const { data: eventData, error: eventError } = await supabase
        .from("stamp_events")
        .insert({
          user_id: user.id,
          spot_id: spot.id,
          route_id: route.id,
          method: qrTokenUsed ? "qr" : "gps",
          lat: clientLat || null,
          lng: clientLng || null,
          distance_to_spot_m: distance || null,
          qr_token_used: qrTokenUsed || null,
          visitor_number: 1,
          is_first_visit: true
        })
        .select()
        .single();

      if (eventError) throw eventError;

      // 累計来訪者数（ visitor_number ）の仮算出
      const { count } = await supabase
        .from("stamp_events")
        .select("*", { count: "exact", head: true })
        .eq("spot_id", spot.id);
      
      const newVisitorNum = count || 47;

      // Supabase: 獲得SHUIN(stamps)インサート
      await supabase
        .from("stamps")
        .insert({
          stamp_event_id: eventData.id,
          user_id: user.id,
          spot_id: spot.id,
          route_id: route.id,
          visitor_number: newVisitorNum,
          acquired_at: new Date().toISOString()
        });

      // 称号付与の評価
      try {
        const newBadges = await evaluateBadges(user.id, eventData.id, spot.id, route.id);
        if (newBadges && newBadges.length > 0) {
          setNewlyAcquiredBadges(newBadges);
        }
      } catch (badgeErr) {
        console.error("Error evaluating badges:", badgeErr);
      }

      // プレミアム演出開始！ (画面を即座にオーバーレイで覆う)
      triggerCeremony(newVisitorNum);

      // 押印情報を更新
      await refetchStampStatus();
      setIsCheckingIn(false);
      
      // 次の目的地を算出
      await prepareNextDestination(spot.id);
    } catch (e: any) {
      console.error("Checkin error:", e);
      setIsCheckingIn(false);
      await showAlert({ text: `押印に失敗しました: ${e.message || e}`, okText: "確認" });
    }
  };
  const handleQuizAnswerSubmit = async (choice: any) => {
    if (!user || !route) return;
    setIsCheckingIn(true);
    try {
      // 1. バッジマスター情報を取得
      const { data: badge, error: badgeError } = await supabase
        .from("badges")
        .select("*")
        .eq("code", choice.badge_code)
        .maybeSingle();

      if (badgeError) throw badgeError;

      if (badge) {
        // 2. badge_assignments に登録
        const { error: assignError } = await supabase
          .from("badge_assignments")
          .insert({
            user_id: user.id,
            badge_id: badge.id,
            acquired_at: new Date().toISOString()
          });

        if (assignError && assignError.code !== '23505') { // 23505 = unique constraint error (すでに持っている場合は無視)
          console.error("Error assigning quiz badge:", assignError);
        } else {
          // 新規アサインできた、または既に持っている
          setSelectedQuizBadge(badge);
          // newlyAcquiredBadges に追加して表示できるようにする
          setNewlyAcquiredBadges(prev => {
            if (prev.some(b => b.code === badge.code)) return prev;
            return [...prev, badge];
          });
        }
      }
      
      setIsCheckingIn(false);
      // 完走セレモニーを起動する
      triggerCompletionCeremony();
    } catch (e: any) {
      console.error("Quiz assignment error:", e);
      setIsCheckingIn(false);
      await showAlert({ text: `称号の獲得に失敗しました: ${e.message || e}`, okText: "確認" });
      // 失敗しても演出は進める
      triggerCompletionCeremony();
    }
  };

  // 5. ルート完走セレモニータイムライン (C1〜C4)
  const triggerCompletionCeremony = () => {
    setCeremonyStep('C1');

    // C2: 走馬灯のように全スポット出現
    setTimeout(() => {
      setCeremonyStep('C2');
    }, 500);

    // C3: 小さく収縮して中央へ集まる
    setTimeout(() => {
      setCeremonyStep('C3');
    }, 2000);

    // C4: 完走称号スライドイン (post_route_cardへ)
    setTimeout(() => {
      setCeremonyStep('post_route_card');
    }, 2500);
  };

  // 6. SNSシェア処理
  const handleShare = async () => {
    const shareText = `「${route.title || route.name}」を完走しました！✨\n称号:『${route.title || route.name}の踏破者』を授かりました。\n#SHUIN #まちのしるし`;
    const shareUrl = `${window.location.origin}/routes/${route.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "SHUIN まちのしるし",
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Web Share canceled or failed", err);
      }
    } else {
      // フォールバック: クリップボードコピー
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        await showAlert({ text: "シェア文言とURLをクリップボードにコピーしました！SNSに貼り付けて共有してください。", okText: "確認" });
      } catch (err) {
        console.error("Clipboard failed", err);
      }
    }
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", backgroundColor: "var(--bg-color)" }}>
      {/* A. 押印儀式 ＆ ポストカード プレミアムオーバーレイ演出 */}
      <AnimatePresence>
        {ceremonyStep !== 'idle' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
              backgroundColor: ceremonyStep === 'post_scan_card' || ceremonyStep === 'post_route_card' ? "#0D0D0D" : "rgba(0,0,0,0.95)",
              zIndex: 99999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              overflowY: "auto", padding: "20px"
            }}
          >
            {/* 1. 押印セレモニー演出層 (F4〜F9) */}
            {['F4', 'F5', 'F6', 'F7', 'F8', 'F9'].includes(ceremonyStep) && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", width: "100%", maxWidth: "360px" }}>
                {/* A. スタンプアニメーション枠（360px四方） */}
                <div 
                  className={styles.stampDemo} 
                  style={{ 
                    backgroundImage: `url(${getCategoryBgUrl(route.category)})`,
                    width: "100%", 
                    height: "360px"
                  }}
                >
                  {/* アニメーションステージ */}
                  <div className={`${styles.stampStage} ${styles.isPlaying}`}>
                    
                    {/* F5-F6: スタンプ本体 */}
                    <img 
                      src="/stamps/stamp-body.png" 
                      alt="Stamp Body" 
                      className={styles.stampBody} 
                    />

                    {/* F6-F9: インパクト時のフラッシュ */}
                    <div className={styles.stampFlash} />

                    {/* F6-F9: インク飛沫 */}
                    <img 
                      src="/stamps/ink-splash.png" 
                      alt="Ink Splash" 
                      className={styles.inkSplashImage} 
                    />

                    {/* F6-F9: 朱印影の刻印（カテゴリー別画像を表示） */}
                    <img 
                      src={getCategoryStampUrl(route.category)} 
                      alt="Stamp Mark" 
                      className={styles.stampMark} 
                    />

                  </div>
                </div>

                {/* B. 文字情報エリア（枠外） */}
                <div style={{ width: "100%", minHeight: "180px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  {/* F7-F9: 物語片・断片（30〜40字）の刻印 */}
                  {['F7', 'F8', 'F9'].includes(ceremonyStep) && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ 
                        width: "100%",
                        textAlign: "center",
                        padding: "0 10px"
                      }}
                    >
                      <h3 style={{ color: "var(--accent-color)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", borderBottom: "1px dashed rgba(201,168,76,0.3)", paddingBottom: "6px", letterSpacing: "1px" }}>
                        しるしが刻まれました
                      </h3>
                      <p style={{ color: "#E0D7CD", fontSize: "0.95rem", lineHeight: "1.7", wordBreak: "keep-all", fontStyle: "italic" }}>
                        「{spot.f7_fragment || "この地にかつて息づいていた、人々の記憶としるしが呼び覚まされます。" }」
                      </p>
                    </motion.div>
                  )}

                  {/* F8-F9: 来訪者番号「#XX番目」 */}
                  {['F8', 'F9'].includes(ceremonyStep) && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.03)", 
                        backdropFilter: "blur(8px)",
                        padding: "16px 20px", 
                        borderRadius: "16px", 
                        border: "1px solid rgba(255, 255, 255, 0.08)", 
                        width: "100%",
                        textAlign: "center",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "#A39687", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>Visitor Number</div>
                      <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--accent-color)", margin: "4px 0", letterSpacing: "1px" }}>
                        #{visitorNumber}番目の来訪者
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#888", marginTop: "4px" }}>{scannedDate} 刻印</div>
                    </motion.div>
                  )}

                  {/* F9: SHUIN帳追加への余韻（進行アニメ） */}
                  {ceremonyStep === 'F9' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ 
                        width: "100%",
                        textAlign: "center",
                        marginTop: "8px"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", color: "var(--primary-color)", fontSize: "0.85rem", fontWeight: "700" }}>
                        <span style={{ animation: "pulseMarker 1s infinite ease-in-out", display: "inline-block" }}>●</span>
                        <span>SHUIN帳に刻印を記録しています...</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* タップでポストスキャンカードへ進むボタン (F8またはF9時に表示) */}
                {['F8', 'F9'].includes(ceremonyStep) && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setCeremonyStep('post_scan_card')}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "2px solid var(--accent-color)",
                      color: "var(--accent-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      boxShadow: "0 6px 20px rgba(201,168,76,0.3)",
                      backdropFilter: "blur(8px)",
                      zIndex: 10,
                      marginTop: "8px"
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(201,168,76,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ➔
                  </motion.button>
                )}
              </div>
            )}

            {/* 2. ポストスキャンカード (自動スライドイン、深黒プレミアムデザイン) */}
            {ceremonyStep === 'post_scan_card' && (
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                  width: "100%", maxWidth: "360px",
                  background: "#121212", border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
                }}
              >
                {/* 2-1. 上部: 称号と来訪記録 */}
                <div style={{ padding: "32px 24px 24px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "relative" }}>
                  <div style={{ color: "var(--accent-color)", fontSize: "1.3rem", letterSpacing: "6px", marginBottom: "16px" }}>★★★</div>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-color)", marginBottom: "4px", fontFamily: "serif" }}>
                    {spot.name}の記憶
                  </h2>
                  <div style={{ fontSize: "0.8rem", color: "#888888", letterSpacing: "1px", fontStyle: "italic", marginBottom: "16px" }}>
                    Memory of {spot.name}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#A39687", display: "flex", justifyContent: "center", gap: "16px", fontWeight: "600" }}>
                    <span>{scannedDate}</span>
                    <span>•</span>
                    <span>#{visitorNumber}番目の来訪者</span>
                  </div>
                </div>

                {/* 2-2. 中部: F7全文（物語の完結、答え、次スポットへの引力） */}
                <div style={{ padding: "28px 24px", color: "#F2F2F2", lineHeight: "1.8", fontSize: "0.95rem", letterSpacing: "0.02em" }}>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    {spot.f7_full || "職人たちはこの地域から消えた。しかし、当時の洗い場の石積みや別所橋周辺の路地の幅は、今も変わらず当時のままそこに息づいている。"}
                  </p>
                </div>

                {/* 新規獲得称号の表示 */}
                {newlyAcquiredBadges.length > 0 && (
                  <div style={{ padding: "16px 24px", backgroundColor: "rgba(201,168,76,0.05)", borderTop: "1px dashed rgba(201,168,76,0.2)", borderBottom: "1px dashed rgba(201,168,76,0.2)" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--accent-color)", letterSpacing: "1px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>
                      新たなる称号を授かりました
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {newlyAcquiredBadges.map((badge) => (
                        <div key={badge.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ fontSize: "1.1rem" }}>🏆</span>
                          <div>
                            <div style={{ fontSize: "0.9rem", fontWeight: "800", color: "#F2F2F2" }}>
                              {badge.name_ja}
                            </div>
                            <div style={{ fontSize: "0.7rem", color: "#888888", fontStyle: "italic" }}>
                              {badge.subtitle_en} (★{badge.rarity})
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2-3. 下部: アクションボタン */}
                <div style={{ padding: "16px 24px 32px", display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  {nextDestInfo?.isComplete ? (
                    <button 
                      onClick={() => {
                        if (route.completion_ceremony_type === 'quiz_4choice') {
                          setCeremonyStep('answer_question');
                        } else {
                          triggerCompletionCeremony();
                        }
                      }}
                      className="btn-primary"
                      style={{ 
                        width: "100%", 
                        padding: "16px", 
                        fontSize: "1.1rem", 
                        letterSpacing: "2px", 
                        background: "linear-gradient(135deg, var(--primary-color) 0%, #E04E39 100%)", 
                        border: "none",
                        fontWeight: "700"
                      }}
                    >
                      🏆 ルート完走 — 称号を受け取る
                    </button>
                  ) : (
                    <button 
                      onClick={async () => {
                        setCeremonyStep('idle');
                        const nextSpot = nextDestInfo?.nextSpot;
                        if (nextSpot && user) {
                          // 次のスポットに目的地を設定してマップに遷移
                          await supabase
                            .from('users')
                            .update({ active_spot_id: nextSpot.id })
                            .eq('id', user.id);
                          router.push(`/routes/${route.id}/map`);
                        } else {
                          router.push(`/routes/${route.id}/map`);
                        }
                      }}
                      className="btn-primary"
                      style={{ width: "100%", padding: "16px", fontSize: "1.0rem", letterSpacing: "1px", fontWeight: "700" }}
                    >
                      次のスポットへ ➔ {nextDestInfo?.nextSpot?.name || "目的地"}
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* 2.5. 自答 (4択クイズ、深黒プレミアムデザイン) */}
            {ceremonyStep === 'answer_question' && route.completion_quiz_data && (
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                  width: "100%", maxWidth: "380px",
                  background: "#121212", border: "2px solid var(--accent-color)",
                  borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.9)", padding: "28px 24px"
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <span style={{ 
                    color: "var(--accent-color)", fontSize: "0.75rem", letterSpacing: "3px", fontWeight: "900",
                    border: "1px solid var(--accent-color)", padding: "4px 12px", borderRadius: "16px"
                  }}>
                    自答の儀
                  </span>
                  <h2 style={{ 
                    fontSize: "var(--font-size-h2)", fontWeight: "800", color: "#F2F2F2", 
                    marginTop: "16px", marginBottom: "8px", fontFamily: "var(--font-family)",
                    lineHeight: "1.5"
                  }}>
                    {route.completion_quiz_data.question}
                  </h2>
                  <p style={{ fontSize: "var(--font-size-small)", color: "#888888" }}>
                    あなたの歩いた軌跡から、答えをひとつ選んでください。
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {route.completion_quiz_data.choices.map((choice: any) => (
                    <motion.button
                      key={choice.key}
                      onClick={() => handleQuizAnswerSubmit(choice)}
                      disabled={isCheckingIn}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(201,168,76,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: "100%", padding: "16px", textAlign: "left",
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "12px", color: "#F2F2F2", cursor: "pointer",
                        display: "flex", gap: "12px", alignItems: "flex-start",
                        transition: "border-color 0.2s"
                      }}
                    >
                      <span style={{ 
                        color: "var(--accent-color)", fontWeight: "900", fontSize: "1.1rem",
                        minWidth: "20px"
                      }}>
                        {choice.key}
                      </span>
                      <div>
                        <div style={{ fontWeight: "700", fontSize: "0.95rem", marginBottom: "4px" }}>
                          {choice.text}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#888888", lineHeight: "1.4" }}>
                          {choice.description}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {isCheckingIn && (
                  <div style={{ 
                    marginTop: "16px", textAlign: "center", color: "var(--primary-color)", 
                    fontSize: "0.85rem", fontWeight: "700" 
                  }}>
                    <span>しるしを刻んでいます...</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* 3. ルート完走セレモニー層 (C1〜C3) */}
            {['C1', 'C2', 'C3'].includes(ceremonyStep) && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%", maxWidth: "340px", textAlign: "center" }}>
                {/* C1: 静寂・暗転 */}
                {ceremonyStep === 'C1' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div style={{ fontSize: "1.2rem", color: "var(--accent-color)", letterSpacing: "2px", fontWeight: "700" }}>
                      物語が収束していきます...
                    </div>
                  </motion.div>
                )}

                {/* C2: 走馬灯のように全スポット出現 */}
                {ceremonyStep === 'C2' && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
                    <div style={{ fontSize: "0.95rem", color: "#888", marginBottom: "10px" }}>軌跡を振り返る</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                      {allSpots.map((s, idx) => (
                        <motion.div
                          key={s.id}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: idx * 0.2, type: "spring" }}
                          style={{
                            width: "60px", height: "60px", borderRadius: "50%",
                            border: "2px solid var(--primary-color)", background: "rgba(199, 68, 46, 0.1)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "24px", color: "var(--primary-color)", fontWeight: "800"
                          }}
                        >
                          💮
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* C3: スポットが小さく収縮し、中央へ集まる */}
                {ceremonyStep === 'C3' && (
                  <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 0.1, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    style={{
                      width: "80px", height: "80px", borderRadius: "50%",
                      border: "3px double var(--accent-color)", background: "rgba(201, 168, 76, 0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px"
                    }}
                  >
                    👑
                  </motion.div>
                )}
              </div>
            )}

            {/* 4. ポストルートカード (ルート完走、SNSシェア、ゴールドテーマ) */}
            {ceremonyStep === 'post_route_card' && (
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                  width: "100%", maxWidth: "380px",
                  background: "#121212", border: "2px solid var(--accent-color)",
                  borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.9)"
                }}
              >
                {/* 4-1. COMPLETE ヘッダー */}
                <div style={{ padding: "32px 24px 20px", textAlign: "center", borderBottom: "1px solid rgba(201, 168, 76, 0.15)", position: "relative" }}>
                  <div style={{ 
                    position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)",
                    color: "var(--accent-color)", fontSize: "0.7rem", letterSpacing: "4px", fontWeight: "900",
                    border: "1px solid var(--accent-color)", padding: "2px 10px", borderRadius: "12px"
                  }}>
                    COMPLETE
                  </div>
                  
                  <div style={{ height: "16px" }} />
                  
                  <h2 style={{ fontSize: "1.45rem", fontWeight: "900", color: "var(--accent-color)", marginBottom: "6px", fontFamily: "serif" }}>
                    {route.title || route.name}の踏破者
                  </h2>
                  <div style={{ fontSize: "0.85rem", color: "#888888", letterSpacing: "1px", fontStyle: "italic", marginBottom: "12px" }}>
                    Trailblazer of {route.title || route.name}
                  </div>
                  <div style={{ color: "var(--accent-color)", fontSize: "1.2rem", letterSpacing: "4px" }}>★★★</div>
                  {selectedQuizBadge && (
                    <div style={{ 
                      marginTop: "16px", display: "inline-block", 
                      backgroundColor: "rgba(201,168,76,0.08)", 
                      padding: "12px 16px", borderRadius: "8px",
                      border: "1px dashed rgba(201,168,76,0.3)",
                      textAlign: "left"
                    }}>
                      <div style={{ fontSize: "0.75rem", color: "#888", letterSpacing: "1px", marginBottom: "4px", fontWeight: "700" }}>授かりし称号</div>
                      <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--accent-color)" }}>
                        {selectedQuizBadge.name_ja}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#E0D7CD", marginTop: "4px", lineHeight: "1.4" }}>
                        {selectedQuizBadge.description}
                      </div>
                    </div>
                  )}
                </div>

                {/* 4-2. スポット軌跡リストと完走日 */}
                <div style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#A39687", fontWeight: "700", marginBottom: "16px" }}>
                    <span>全{allSpots.length}スポット制覇</span>
                    <span>完走日: {scannedDate}</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {allSpots.map((s, idx) => (
                      <div key={s.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "#E0D7CD" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "var(--accent-color)" }}>▪</span>
                          <span style={{ fontWeight: "700" }}>{s.name}</span>
                        </div>
                        <span style={{ color: "#777", fontSize: "0.75rem" }}>{scannedDate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4-3. 最終F7全文 (完結のナラティブ) */}
                <div style={{ padding: "24px", color: "#F2F2F2", lineHeight: "1.8", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ margin: 0, fontStyle: "italic" }}>
                    「友禅染の職人たちはこの地域から消え去った。しかし、彼らが手作業で積み上げた頑強な護岸の石積みと路地の区割りは、今も中目黒の土台として、美しく息づいている。」
                  </p>
                </div>

                {/* 4-4. SNSシェア ＆ 遷移ボタン */}
                <div style={{ padding: "20px 24px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button 
                      onClick={handleShare}
                      className="btn-primary"
                      style={{ 
                        flex: 1, padding: "14px", fontSize: "0.95rem", letterSpacing: "1px", 
                        background: "linear-gradient(135deg, var(--accent-color) 0%, #B8933D 100%)", 
                        border: "none", color: "#111111", fontWeight: "800",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"
                      }}
                    >
                      <Share2 size={18} />
                      シェアする
                    </button>
                    <button 
                      onClick={() => {
                        setCeremonyStep('idle');
                        router.push(`/mypage`);
                      }}
                      className="btn-secondary"
                      style={{ 
                        flex: 1, padding: "14px", fontSize: "0.95rem", 
                        color: "#E0D7CD", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.03)"
                      }}
                    >
                      保存する
                    </button>
                  </div>

                  <button 
                    onClick={() => {
                      setCeremonyStep('idle');
                      router.push(`/routes`);
                    }}
                    className="btn-primary"
                    style={{ 
                      width: "100%", padding: "16px", fontSize: "1rem", letterSpacing: "1px",
                      background: "var(--secondary-color)", border: "1px solid var(--accent-color)", color: "var(--accent-color)"
                    }}
                  >
                    次のルートを探す ➔
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* B. 通常の押印画面表示層（IDLE時のみインタラクティブ） */}
      <div className="container" style={{ paddingBottom: "100px" }}>
        <header style={{ padding: "20px 0" }}>
          <Link href={`/routes/${resolvedParams.id}`} className={"btn-primary " + styles.backBtn}>
            ← 戻る
          </Link>
        </header>

        <main className={styles.main}>
          <div className={"glass-card " + styles.spotInfoCard} style={{ overflow: "hidden", padding: 0 }}>
            {/* スポット画像 */}
            {spot.cover_image_url && (
              <div style={{
                width: "100%",
                height: "220px",
                backgroundImage: `url(${spot.cover_image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderBottom: "1px solid rgba(0,0,0,0.05)"
              }} />
            )}
            
            <div style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                <h1 className={styles.title} style={{ margin: 0, fontSize: "1.65rem", fontWeight: "800" }}>{spot.name}</h1>
                {stampAcquired && ceremonyStep === 'idle' && (
                  <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid var(--accent-color)",
                    color: "var(--text-color)",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}>
                    <img 
                      src={getCategoryStampUrl(route.category)} 
                      alt="しるし" 
                      style={{ width: "16px", height: "16px", objectFit: "contain" }}
                    />
                    <span>しるし獲得済み（来訪 {visitCount}回目）</span>
                  </div>
                )}
              </div>
              
              <p className={styles.description} style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--text-color)", opacity: 0.85, marginBottom: "20px", whiteSpace: "pre-wrap" }}>
                {spot.description}
              </p>
              
              {spot.address && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#666", borderTop: "1px dashed rgba(0,0,0,0.08)", paddingTop: "12px" }}>
                  <span>📍</span>
                  <span>{spot.address}</span>
                </div>
              )}
            </div>
          </div>

          {isTodayStamped && ceremonyStep === 'idle' ? (
            <div className={"glass-card " + styles.successCard}>
              <h2>🎉 本日のしるしを刻みました</h2>
              <div className={styles.stampImageContainer}>
                <img 
                  src={getCategoryStampUrl(route.category)} 
                  alt="しるし" 
                  className={styles.stampImage} 
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p style={{ margin: "12px 0" }}>{spot.name}のしるしは本日すでに刻まれています！</p>
              <p style={{ fontSize: "0.90rem", color: "#666", marginTop: "4px" }}>
                これまでの来訪回数: {visitCount}回
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "300px", margin: "20px auto 0" }}>
                <button 
                  onClick={() => triggerCeremony(visitorNumber)}
                  className="btn-primary"
                  style={{ width: "100%", padding: "12px" }}
                >
                  💮 セレモニーを再体験する
                </button>
                <Link href={`/routes/${resolvedParams.id}`} className={"btn-secondary " + styles.glowBtn}>
                  ルート詳細に戻る
                </Link>
              </div>
            </div>
          ) : (
            <div className={"glass-card " + styles.scannerSection}>
              <h2 className={styles.sectionTitle}>押印する</h2>
              
              {locationError && <div className={styles.errorBox}>{locationError}</div>}
              
              {distance !== null ? (
                <div className={styles.distanceBox}>
                  <p>現在の距離: <strong>約 {distance}m</strong></p>
                  {isLocationValid ? (
                    <p style={{ color: "green", fontWeight: "bold" }}>押印可能です！QRから押印してください。</p>
                  ) : (
                    <p style={{ color: "red", fontWeight: "bold" }}>あと {distance - MAX_DISTANCE_METERS}m 近づいてください。</p>
                  )}
                </div>
              ) : !locationError ? (
                <p>現在地を取得中...</p>
              ) : null}

              {(isLocationValid || locationError) && !isCheckingIn && (
                <div className={styles.scannerWrapper}>
                  <QRScanner onScanSuccess={handleScanSuccess} />
                  <p style={{ marginTop: "12px", opacity: 0.8, fontSize: "0.9rem" }}>カメラを許可してQRコードを読み取ってください。</p>
                </div>
              )}

              {isCheckingIn && <div style={{ padding: "40px 0", textAlign: "center" }}><h3>確認中...</h3></div>}
              
              {(process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_ENABLE_DEMO === "true") && (
                <div className={styles.demoOverride} onClick={() => performCheckIn(spot.qr_token || "demo-qr")}>
                  🧪 [Demo] 強制押印テスト（Supabase永続化 ＆ プレミアム演出起動）
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
