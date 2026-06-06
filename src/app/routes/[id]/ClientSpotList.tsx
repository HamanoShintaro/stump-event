"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouteStamps } from "@/hooks/useRouteStamps";
import { SpotButton } from "./ClientRallyButtons";
import { getCategoryStampUrl } from "@/utils/stampHelper";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { Map as MapIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

interface Spot {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  address?: string;
  f7_fragment?: string;
  f7_full?: string;
}

export default function ClientSpotList({ 
  spots, 
  routeId, 
  routeCategory 
}: { 
  spots: Spot[]; 
  routeId: string;
  routeCategory?: string;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const { showAlert } = useCustomAlert();
  const { stampedSpotIds } = useRouteStamps(routeId, user?.id);

  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [isSettingDest, setIsSettingDest] = useState<string | null>(null);

  const stampImgUrl = getCategoryStampUrl(routeCategory);
  const [selectedStorySpot, setSelectedStorySpot] = useState<Spot | null>(null);

  // ユーザーのアクティブ目的地をフェッチ
  useEffect(() => {
    if (!user) return;
    const userId = user.id;
    async function fetchActiveSpot() {
      const { data } = await supabase
        .from('users')
        .select('active_spot_id')
        .eq('id', userId)
        .maybeSingle();
      if (data) {
        setActiveSpotId(data.active_spot_id);
      }
    }
    fetchActiveSpot();
  }, [user]);

  // 目的地設定処理
  const handleSetDestination = async (spotId: string) => {
    if (!user) {
      await showAlert({ text: "目的地を設定するにはログインが必要です。", okText: "確認" });
      return;
    }
    
    setIsSettingDest(spotId);
    
    // upsert でユーザー行の存在を担保しつつ active_spot_id を保存
    const { error } = await supabase
      .from('users')
      .upsert({ id: user.id, active_spot_id: spotId }, { onConflict: 'id' });
      
    setIsSettingDest(null);
    
    if (error) {
      await showAlert({ text: "目的地の設定に失敗しました: " + error.message, okText: "確認" });
    } else {
      setActiveSpotId(spotId);
      // マップへ自動遷移
      router.push(`/routes/${routeId}/map`);
    }
  };

  if (spots.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
        まだスポットが登録されていません。<br/>Supabaseでスポットを追加してみましょう！
      </p>
    );
  }

  return (
    <>
      {/* 獲得しるし帳セクション */}
      {user && stampedSpotIds.size > 0 && (
        <div className={`glass-card ${styles.stampedSection}`}>
          <h3 className={styles.stampedTitle}>
            💮 獲得したしるし帳
          </h3>
          <div className={styles.stampedGrid}>
            {spots.map((spot) => {
              const isAcquired = stampedSpotIds.has(spot.id);
              if (!isAcquired) return null;
              
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedStorySpot(spot)}
                  className={styles.stampCollectBtn}
                >
                  <div className={styles.stampCircle}>
                    <img 
                      src={stampImgUrl} 
                      alt={spot.name} 
                      className={styles.stampImg}
                    />
                  </div>
                  <span className={styles.stampName}>
                    {spot.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className={styles.spotList}>
        {spots.map((spot, index) => {
        const isStamped = user && stampedSpotIds.has(spot.id);
        const isActive = spot.id === activeSpotId;

        return (
          <div 
            key={spot.id} 
            className={"glass-card " + styles.spotCard + (isActive ? ` ${styles.spotCardActive}` : "")} 
            style={{ position: "relative", overflow: "hidden", padding: 0 }}
          >
            {/* 画像がない場合のでかでかと重ねる目的地スタンプ */}
            {!spot.image_url && isActive && (
              <div style={{
                position: "absolute",
                right: "24px",
                top: "24px",
                width: "120px",
                height: "120px",
                transform: "rotate(-15deg)",
                zIndex: 1,
                pointerEvents: "none",
                opacity: 0.7
              }}>
                <img 
                  src="/stamps/destination_stump.png" 
                  alt="目的地" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain"
                  }}
                />
              </div>
            )}

            {spot.image_url && (
              <div className={styles.spotImageContainer}>
                <Link href={`/routes/${routeId}/spot/${spot.id}`} style={{ display: "block", width: "100%", height: "100%" }}>
                  <div 
                    className={styles.spotImage}
                    style={{
                      backgroundImage: `url(${spot.image_url})`,
                    }}
                  />
                </Link>
                {/* 画像にでかでかと重ねる目的地スタンプ */}
                {isActive && (
                  <div style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "15px",
                    width: "135px",
                    height: "135px",
                    transform: "rotate(-15deg)",
                    zIndex: 3,
                    pointerEvents: "none",
                    opacity: 0.95
                  }}>
                    <img 
                      src="/stamps/destination_stump.png" 
                      alt="目的地" 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.95)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35))"
                      }}
                    />
                  </div>
                )}

                {/* 押印済みバッジ */}
                {isStamped && (
                  <div style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.98)",
                    padding: "6px 14px",
                    borderRadius: "30px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    border: "1.5px solid var(--accent-color)",
                    transform: "rotate(3deg)",
                    zIndex: 3
                  }}>
                    <img 
                      src={stampImgUrl} 
                      alt="しるし" 
                      style={{ width: "22px", height: "22px", objectFit: "contain" }}
                    />
                    <span style={{
                      color: "var(--text-color)",
                      fontSize: "0.8rem",
                      fontWeight: "800",
                    }}>
                      しるし獲得済み
                    </span>
                  </div>
                )}
              </div>
            )}
            
            <div style={{ padding: "24px" }}>
              <div className={styles.spotHeader} style={{ position: "relative", zIndex: 2 }}>
                <div className={styles.spotIndex}>{index + 1}</div>
                <h3 className={styles.spotName} style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <Link href={`/routes/${routeId}/spot/${spot.id}`} className={styles.spotNameLink}>
                    {spot.name}
                  </Link>
                  {/* 画像がない場合のしるし獲得済みバッジ */}
                  {!spot.image_url && isStamped && (
                    <span style={{
                      backgroundColor: "rgba(255, 255, 255, 0.98)",
                      border: "1.5px solid var(--accent-color)",
                      color: "var(--text-color)",
                      padding: "3px 10px",
                      borderRadius: "14px",
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transform: "rotate(1deg)"
                    }}>
                      <img 
                        src={stampImgUrl} 
                        alt="しるし" 
                        style={{ width: "16px", height: "16px", objectFit: "contain" }} 
                      />
                      しるし獲得済み
                    </span>
                  )}
                </h3>
              </div>
              <p className={styles.spotDesc} style={{ whiteSpace: "pre-wrap", position: "relative", zIndex: 2, marginBottom: "16px" }}>
                {spot.description}
              </p>
              <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "16px" }}>📍 {spot.address}</p>
              <div className={styles.spotActions} style={{ position: "relative", zIndex: 2 }}>
                {isActive ? (
                  <div style={{ display: "flex", gap: "12px", width: "100%", flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: "120px" }}>
                      <button 
                        className="btn-primary" 
                        style={{ width: "100%", padding: "10px 16px", fontSize: "0.9rem", fontWeight: "700" }}
                        onClick={() => router.push(`/routes/${routeId}/spot/${spot.id}`)}
                      >
                        {isStamped ? "しるしを見る" : (user ? "詳細 / 押印する" : "詳細を見る")}
                      </button>
                    </div>
                    {isStamped ? (
                      <button 
                        className="btn-secondary" 
                        style={{ 
                          flex: 1, 
                          minWidth: "120px", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          gap: "8px", 
                          fontWeight: "700",
                          padding: "10px 16px",
                          fontSize: "0.9rem",
                          opacity: 0.6,
                          cursor: "not-allowed",
                          borderColor: "rgba(0, 0, 0, 0.1)",
                          color: "rgba(0, 0, 0, 0.4)"
                        }}
                        disabled
                      >
                        しるし獲得済み
                      </button>
                    ) : (
                      <button 
                        className="btn-secondary" 
                        style={{ 
                          flex: 1, 
                          minWidth: "120px", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          gap: "8px", 
                          fontWeight: "700",
                          padding: "10px 16px",
                          fontSize: "0.9rem"
                        }}
                        onClick={() => router.push(`/routes/${routeId}/map`)}
                      >
                        <MapIcon size={16} />
                        マップを表示
                      </button>
                    )}
                  </div>
                ) : (
                  <button 
                    className={isStamped ? "btn-secondary" : "btn-primary"} 
                    style={{ 
                      width: "100%", 
                      padding: "12px", 
                      fontSize: "0.95rem",
                      ...(isStamped ? {
                        opacity: 0.8,
                        borderColor: "rgba(0, 0, 0, 0.15)",
                        color: "rgba(0, 0, 0, 0.6)"
                      } : {})
                    }}
                    onClick={() => handleSetDestination(spot.id)}
                    disabled={isSettingDest !== null}
                  >
                    {isSettingDest === spot.id ? "設定中..." : "ここを目的地にする"}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* ストーリーモーダル */}
      <AnimatePresence>
        {selectedStorySpot && (
          <div 
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(5px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10000,
              padding: "20px"
            }}
            onClick={() => setSelectedStorySpot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "var(--bg-color)",
                border: "2px solid var(--accent-color)",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ height: "6px", backgroundColor: "var(--accent-color)" }} />
              
              <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                {/* しるし印影 */}
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: "1px dashed rgba(201,168,76,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.06)",
                  marginBottom: "20px",
                  transform: "rotate(-3deg)"
                }}>
                  <img 
                    src={stampImgUrl} 
                    alt={selectedStorySpot.name} 
                    style={{ width: "60px", height: "60px", objectFit: "contain" }} 
                  />
                </div>

                <h3 style={{ 
                  fontSize: "1.35rem", 
                  fontWeight: "800", 
                  color: "var(--text-color)", 
                  marginBottom: "4px",
                  fontFamily: "serif" 
                }}>
                  {selectedStorySpot.name}の記憶
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#888", fontStyle: "italic", marginBottom: "24px" }}>
                  Memory of {selectedStorySpot.name}
                </p>

                {/* ストーリー本文 */}
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  borderRadius: "12px",
                  padding: "20px",
                  width: "100%",
                  color: "var(--text-color)",
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  textAlign: "justify",
                  maxHeight: "240px",
                  overflowY: "auto",
                  marginBottom: "24px",
                  letterSpacing: "0.03em"
                }}>
                  <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                    {selectedStorySpot.f7_full || selectedStorySpot.description || "このスポットの記憶はまだ謎に包まれています。"}
                  </p>
                </div>

                {/* 閉じるボタン */}
                <button
                  className="btn-secondary"
                  style={{ width: "100%", padding: "12px", fontSize: "0.95rem", fontWeight: "700" }}
                  onClick={() => setSelectedStorySpot(null)}
                >
                  閉じる
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
