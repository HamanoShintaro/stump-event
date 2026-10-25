"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouteStamps } from "@/hooks/useRouteStamps";
import { getCategoryStampUrl } from "@/utils/stampHelper";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { isRouteCurrentlyActive } from "@/utils/userRoutes";
import { useCompanionGroup } from "@/hooks/useCompanionGroup";
import {
  getDisplayNameFromAuthUser,
  uploadStampPhotoWithFallback,
} from "@/utils/stampMedia";
import { Map as MapIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getDistance } from "geolib";
import { parseWKBPoint } from "@/utils/wkb";
import styles from "./page.module.css";

interface Spot {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  address?: string;
  f7_fragment?: string;
  f7_full?: string;
  lat?: number | null;
  lng?: number | null;
  location?: string;
}

function getSpotCoord(spot?: Spot | null): { lat: number; lng: number } | null {
  if (!spot) return null;
  if (typeof spot.lat === "number" && typeof spot.lng === "number" && !Number.isNaN(spot.lat) && !Number.isNaN(spot.lng)) {
    return { lat: spot.lat, lng: spot.lng };
  }
  if (typeof spot.location === "string") {
    return parseWKBPoint(spot.location);
  }
  return null;
}

export default function ClientSpotList({ 
  spots, 
  routeId, 
  routeCategory,
  groupId = null
}: { 
  spots: Spot[]; 
  routeId: string;
  routeCategory?: string;
  groupId?: string | null;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const { showAlert } = useCustomAlert();
  const { stampedSpotIds } = useRouteStamps(routeId, user?.id);

  const spotIds = useMemo(() => spots.map((s) => s.id), [spots]);
  const {
    effectiveGroupId,
    sharedMemoriesBySpot,
    refreshGroupData,
  } = useCompanionGroup({
    routeId,
    urlGroupId: groupId,
    spotIds,
  });

  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [isSettingDest, setIsSettingDest] = useState<string | null>(null);
  const [isJoined, setIsJoined] = useState(false);

  const stampImgUrl = getCategoryStampUrl(routeCategory);
  const [selectedStorySpot, setSelectedStorySpot] = useState<Spot | null>(null);

  // 自分の各スポットの stamp_events (写真・コメント)
  const [mySpotEvents, setMySpotEvents] = useState<
    Record<string, { id: string; memo: string | null; photoUrl: string | null; acquiredAt: string }>
  >({});
  const [isEditingModalMemory, setIsEditingModalMemory] = useState(false);
  const [modalMemoInput, setModalMemoInput] = useState("");
  const [modalPhotoFile, setModalPhotoFile] = useState<File | null>(null);
  const [modalPhotoPreview, setModalPhotoPreview] = useState<string | null>(null);
  const [isSavingModalMemory, setIsSavingModalMemory] = useState(false);

  const fetchMySpotEvents = useCallback(async () => {
    if (!user || spotIds.length === 0) return;
    const { data } = await supabase
      .from("stamp_events")
      .select("id, spot_id, memo, photo_url, created_at")
      .eq("user_id", user.id)
      .in("spot_id", spotIds)
      .order("created_at", { ascending: false });

    if (data) {
      const map: Record<string, { id: string; memo: string | null; photoUrl: string | null; acquiredAt: string }> = {};
      for (const row of data) {
        const existing = map[row.spot_id];
        if (!existing) {
          map[row.spot_id] = {
            id: row.id,
            memo: row.memo || null,
            photoUrl: row.photo_url || null,
            acquiredAt: row.created_at,
          };
        } else {
          if (!existing.photoUrl && row.photo_url) existing.photoUrl = row.photo_url;
          if (!existing.memo && row.memo) existing.memo = row.memo;
        }
      }
      setMySpotEvents(map);
    }
  }, [user, spotIds]);

  useEffect(() => {
    fetchMySpotEvents();
  }, [fetchMySpotEvents, stampedSpotIds]);

  // モーダルを開いたときに自分の既存メモ・写真を初期セット
  useEffect(() => {
    if (!selectedStorySpot) {
      setIsEditingModalMemory(false);
      setModalPhotoFile(null);
      setModalPhotoPreview(null);
      return;
    }
    const myEv = mySpotEvents[selectedStorySpot.id];
    setModalMemoInput(myEv?.memo || "");
    setModalPhotoFile(null);
    setModalPhotoPreview(myEv?.photoUrl || null);
    setIsEditingModalMemory(false);
  }, [selectedStorySpot, mySpotEvents]);

  const handleSaveModalMemory = async () => {
    if (!user || !selectedStorySpot) return;
    setIsSavingModalMemory(true);
    try {
      let finalPhotoUrl = mySpotEvents[selectedStorySpot.id]?.photoUrl || null;
      if (modalPhotoFile) {
        finalPhotoUrl = await uploadStampPhotoWithFallback(
          supabase,
          user.id,
          selectedStorySpot.id,
          modalPhotoFile
        );
      }

      const trimmedMemo = modalMemoInput.trim() || null;
      const existingEv = mySpotEvents[selectedStorySpot.id];

      if (existingEv?.id) {
        const { error } = await supabase
          .from("stamp_events")
          .update({
            memo: trimmedMemo,
            photo_url: finalPhotoUrl,
            ...(effectiveGroupId ? { group_id: effectiveGroupId } : {}),
          })
          .eq("id", existingEv.id)
          .eq("user_id", user.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("stamp_events")
          .insert({
            user_id: user.id,
            spot_id: selectedStorySpot.id,
            group_id: effectiveGroupId || null,
            memo: trimmedMemo,
            photo_url: finalPhotoUrl,
          });
        if (error) throw error;
      }

      await fetchMySpotEvents();
      await refreshGroupData();
      setModalPhotoFile(null);
      setIsEditingModalMemory(false);
      await showAlert({ text: "この印に写真・コメントを記録しました！", okText: "確認" });
    } catch (err: any) {
      await showAlert({ text: `保存に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsSavingModalMemory(false);
    }
  };

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

  // ユーザーがルートに参加（現在進行中）しているかをチェック
  useEffect(() => {
    if (!user) {
      setIsJoined(false);
      return;
    }
    async function checkJoin() {
      if (!user) return;
      const { data } = await supabase
        .from('user_routes')
        .select('status, joined_at')
        .eq('user_id', user.id)
        .eq('route_id', routeId)
        .maybeSingle();
      if (isRouteCurrentlyActive(data)) {
        setIsJoined(true);
      } else {
        setIsJoined(false);
      }
    }
    checkJoin();

    const handleJoinedEvent = (e: Event) => {
      const customEv = e as CustomEvent;
      if (customEv.detail?.routeId === routeId) {
        setIsJoined(true);
      }
    };
    window.addEventListener("shuin-route-joined", handleJoinedEvent);
    return () => window.removeEventListener("shuin-route-joined", handleJoinedEvent);
  }, [user, routeId]);

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
      .upsert(
        {
          id: user.id,
          active_spot_id: spotId,
          display_name: getDisplayNameFromAuthUser(user),
        },
        { onConflict: 'id' }
      );
      
    setIsSettingDest(null);
    
    if (error) {
      await showAlert({ text: "目的地の設定に失敗しました: " + error.message, okText: "確認" });
    } else {
      setActiveSpotId(spotId);
      const targetGroupId = effectiveGroupId || groupId;
      // マップへ自動遷移
      router.push(`/routes/${routeId}/map` + (targetGroupId ? `?groupId=${targetGroupId}` : ""));
    }
  };

  // 次のおすすめ訪問先（未押印の最初のスポット）
  const nextRecommendedSpotId = useMemo(() => {
    const firstUnstamped = spots.find((s) => !stampedSpotIds.has(s.id));
    return firstUnstamped ? firstUnstamped.id : null;
  }, [spots, stampedSpotIds]);

  if (spots.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
        まだスポットが登録されていません。<br/>Supabaseでスポットを追加してみましょう！
      </p>
    );
  }

  const targetGroupQuery = (effectiveGroupId || groupId) ? `?groupId=${effectiveGroupId || groupId}` : "";

  return (
    <>
      {/* 獲得しるし帳セクション */}
      {user && stampedSpotIds.size > 0 && (
        <div className={`glass-card ${styles.stampedSection}`}>
          <h3 className={styles.stampedTitle}>
            💮 獲得したしるし帳
          </h3>
          <p style={{ fontSize: "0.78rem", color: "#8A7E72", margin: "-6px 0 12px 0", textAlign: "center" }}>
            印をタップすると、物語・登録した写真やコメント・同行者の思い出を見られます
          </p>
          <div className={styles.stampedGrid}>
            {spots.map((spot) => {
              const isAcquired = stampedSpotIds.has(spot.id);
              if (!isAcquired) return null;

              const myEv = mySpotEvents[spot.id];
              const spotShared = (sharedMemoriesBySpot[spot.id] || []).filter((m) => !m.isMe);
              const hasPhoto = Boolean(myEv?.photoUrl || spotShared.some((m) => m.photoUrl));
              const hasPartnerMemory = spotShared.length > 0;
              
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedStorySpot(spot)}
                  className={styles.stampCollectBtn}
                  style={{ position: "relative" }}
                >
                  <div className={styles.stampCircle} style={{ position: "relative" }}>
                    <img 
                      src={stampImgUrl} 
                      alt={spot.name} 
                      className={styles.stampImg}
                    />
                    {(hasPhoto || hasPartnerMemory || myEv?.memo) && (
                      <div style={{
                        position: "absolute",
                        bottom: "-4px",
                        right: "-4px",
                        background: "#FFFDF9",
                        border: "1px solid var(--accent-color)",
                        borderRadius: "10px",
                        padding: "1px 5px",
                        fontSize: "0.68rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.12)"
                      }}>
                        {hasPhoto && <span>📷</span>}
                        {myEv?.memo && !hasPhoto && <span>💬</span>}
                        {hasPartnerMemory && <span>👥</span>}
                      </div>
                    )}
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
        const isNextRecommended = !isStamped && spot.id === nextRecommendedSpotId;

        const nextSpot = index < spots.length - 1 ? spots[index + 1] : null;
        let segmentConnector: { distMeters: number; walkMin: number; nextName: string } | null = null;
        if (nextSpot) {
          const currCoord = getSpotCoord(spot);
          const nextCoord = getSpotCoord(nextSpot);
          if (currCoord && nextCoord) {
            try {
              const straight = getDistance(
                { latitude: currCoord.lat, longitude: currCoord.lng },
                { latitude: nextCoord.lat, longitude: nextCoord.lng }
              );
              const distMeters = Math.max(50, Math.round(straight * 1.25));
              const walkMin = Math.max(1, Math.round(distMeters / 70));
              segmentConnector = {
                distMeters,
                walkMin,
                nextName: nextSpot.name,
              };
            } catch {
              segmentConnector = null;
            }
          }
        }

        return (
          <div key={spot.id}>
          <div 
            className={"glass-card " + styles.spotCard + (isActive ? ` ${styles.spotCardActive}` : "")} 
            style={{
              position: "relative",
              overflow: "hidden",
              padding: 0,
              ...(isNextRecommended && !isActive
                ? { border: "1.5px solid var(--accent-color)", boxShadow: "0 6px 22px rgba(201, 168, 76, 0.14)" }
                : {}),
            }}
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
                <Link href={`/routes/${routeId}/spot/${spot.id}${targetGroupQuery}`} style={{ display: "block", width: "100%", height: "100%" }}>
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

                {/* 次のおすすめ訪問先バッジ */}
                {isNextRecommended && (
                  <div style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "rgba(255, 253, 249, 0.96)",
                    border: "1.5px solid var(--accent-color)",
                    color: "var(--primary-color)",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    zIndex: 3,
                  }}>
                    <span>✨ 次のおすすめ訪問先</span>
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
                  <Link href={`/routes/${routeId}/spot/${spot.id}${targetGroupQuery}`} className={styles.spotNameLink}>
                    {spot.name}
                  </Link>
                  {!spot.image_url && isNextRecommended && (
                    <span style={{
                      backgroundColor: "rgba(255, 253, 249, 0.98)",
                      border: "1.5px solid var(--accent-color)",
                      color: "var(--primary-color)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}>
                      ✨ 次のおすすめ訪問先
                    </span>
                  )}
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
                        onClick={() => router.push(`/routes/${routeId}/spot/${spot.id}${targetGroupQuery}`)}
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
                        onClick={() => router.push(`/routes/${routeId}/map${targetGroupQuery}`)}
                      >
                        <MapIcon size={16} />
                        マップを表示
                      </button>
                    )}
                  </div>
                ) : (
                  isJoined && (
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
                  )
                )}
              </div>
            </div>
          </div>

          {/* スポット間の徒歩目安コネクター */}
          {segmentConnector && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "4px 0",
              }}
            >
              <div
                style={{
                  width: "2px",
                  height: "14px",
                  borderLeft: "2px dashed var(--accent-color)",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  background: "rgba(255, 253, 249, 0.94)",
                  border: "1px dashed var(--accent-color)",
                  borderRadius: "999px",
                  padding: "4px 14px",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  color: "var(--text-color)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                🐾 次のスポット「{segmentConnector.nextName}」まで 約
                {segmentConnector.distMeters < 1000
                  ? `${segmentConnector.distMeters}m`
                  : `${(segmentConnector.distMeters / 1000).toFixed(1)}km`}
                （徒歩約{segmentConnector.walkMin}分）
              </div>
              <div
                style={{
                  width: "2px",
                  height: "14px",
                  borderLeft: "2px dashed var(--accent-color)",
                  opacity: 0.7,
                }}
              />
            </div>
          )}
          </div>
        );
      })}
      </div>

      {/* ストーリー＆しるし思い出モーダル */}
      <AnimatePresence>
        {selectedStorySpot && (() => {
          const myEv = mySpotEvents[selectedStorySpot.id];
          const partnerMemories = (sharedMemoriesBySpot[selectedStorySpot.id] || []).filter((m) => !m.isMe);

          return (
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
                  maxWidth: "430px",
                  maxHeight: "88vh",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ height: "6px", backgroundColor: "var(--accent-color)", flexShrink: 0 }} />
                
                <div style={{ padding: "24px 20px", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  {/* しるし印影 */}
                  <div style={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "1px dashed rgba(201,168,76,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.06)",
                    marginBottom: "14px",
                    transform: "rotate(-3deg)"
                  }}>
                    <img 
                      src={stampImgUrl} 
                      alt={selectedStorySpot.name} 
                      style={{ width: "56px", height: "56px", objectFit: "contain" }} 
                    />
                  </div>

                  <h3 style={{ 
                    fontSize: "1.3rem", 
                    fontWeight: "800", 
                    color: "var(--text-color)", 
                    marginBottom: "4px",
                    fontFamily: "serif" 
                  }}>
                    {selectedStorySpot.name}の記憶
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "#888", fontStyle: "italic", marginBottom: "16px" }}>
                    Memory of {selectedStorySpot.name}
                  </p>

                  {/* 自分がこの印に登録した写真・コメント */}
                  <div style={{
                    width: "100%",
                    background: "#FFFDF9",
                    border: "1px solid #EBE5D9",
                    borderRadius: "12px",
                    padding: "14px",
                    marginBottom: "16px",
                    textAlign: "left"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#5C4E43" }}>
                        📸 あなたの印の記録
                      </span>
                      {!isEditingModalMemory && (
                        <button
                          type="button"
                          onClick={() => setIsEditingModalMemory(true)}
                          style={{
                            background: "none",
                            border: "1px solid var(--primary-color)",
                            color: "var(--primary-color)",
                            borderRadius: "6px",
                            padding: "2px 8px",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            cursor: "pointer"
                          }}
                        >
                          {myEv?.photoUrl || myEv?.memo ? "写真・コメントを編集" : "＋ 写真・コメントを残す"}
                        </button>
                      )}
                    </div>

                    {!isEditingModalMemory ? (
                      myEv?.photoUrl || myEv?.memo ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {myEv.photoUrl && (
                            <img
                              src={myEv.photoUrl}
                              alt="押印写真"
                              style={{ width: "100%", maxHeight: "220px", objectFit: "cover", borderRadius: "8px", border: "1px solid #EBE5D9" }}
                            />
                          )}
                          {myEv.memo && (
                            <p style={{ margin: 0, fontSize: "0.88rem", color: "#5C4E43", background: "#F9F6F0", padding: "8px 10px", borderRadius: "6px" }}>
                              💬 {myEv.memo}
                            </p>
                          )}
                        </div>
                      ) : (
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#A39687" }}>
                          この印にはまだ写真やコメントが登録されていません。「＋ 写真・コメントを残す」からいつでも追加できます。
                        </p>
                      )
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {modalPhotoPreview && (
                          <div style={{ position: "relative" }}>
                            <img
                              src={modalPhotoPreview}
                              alt="プレビュー"
                              style={{ width: "100%", maxHeight: "180px", objectFit: "cover", borderRadius: "8px", border: "1px solid #EBE5D9" }}
                            />
                          </div>
                        )}
                        <label style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          border: "1px dashed var(--primary-color)",
                          color: "var(--primary-color)",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          background: "rgba(199,68,46,0.04)"
                        }}>
                          📷 写真を選択・変更する
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) {
                                setModalPhotoFile(f);
                                setModalPhotoPreview(URL.createObjectURL(f));
                              }
                            }}
                          />
                        </label>
                        <input
                          type="text"
                          placeholder="ひとこと感想・コメントを入力..."
                          value={modalMemoInput}
                          onChange={(e) => setModalMemoInput(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "8px 10px",
                            borderRadius: "8px",
                            border: "1px solid #D5CEC4",
                            fontSize: "0.85rem"
                          }}
                        />
                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                          <button
                            type="button"
                            onClick={() => setIsEditingModalMemory(false)}
                            className="btn-secondary"
                            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
                          >
                            キャンセル
                          </button>
                          <button
                            type="button"
                            disabled={isSavingModalMemory}
                            onClick={handleSaveModalMemory}
                            className="btn-primary"
                            style={{ padding: "6px 14px", fontSize: "0.78rem" }}
                          >
                            {isSavingModalMemory ? "保存中..." : "保存する"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 同行メンバーの共有された写真・コメント */}
                  {partnerMemories.length > 0 && (
                    <div style={{
                      width: "100%",
                      background: "rgba(201, 168, 76, 0.08)",
                      border: "1px dashed var(--accent-color)",
                      borderRadius: "12px",
                      padding: "14px",
                      marginBottom: "16px",
                      textAlign: "left"
                    }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#5C4E43", marginBottom: "10px" }}>
                        👥 連れ立ちメンバーの共有された印 ({partnerMemories.length}名)
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {partnerMemories.map((pm) => (
                          <div key={pm.id} style={{ background: "#FFFDF9", padding: "10px", borderRadius: "8px", border: "1px solid #EBE5D9" }}>
                            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-color)", marginBottom: "4px" }}>
                              {pm.displayName} さんの印
                            </div>
                            {pm.photoUrl && (
                              <img
                                src={pm.photoUrl}
                                alt={`${pm.displayName}さんの写真`}
                                style={{ width: "100%", maxHeight: "180px", objectFit: "cover", borderRadius: "6px", marginBottom: pm.memo ? "6px" : 0 }}
                              />
                            )}
                            {pm.memo ? (
                              <div style={{ fontSize: "0.84rem", color: "#5C4E43" }}>💬 {pm.memo}</div>
                            ) : !pm.photoUrl ? (
                              <div style={{ fontSize: "0.78rem", color: "#A39687" }}>💮 このスポットで押印しました</div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ストーリー本文 */}
                  <div style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(0,0,0,0.04)",
                    borderRadius: "12px",
                    padding: "16px",
                    width: "100%",
                    color: "var(--text-color)",
                    fontSize: "0.9rem",
                    lineHeight: "1.75",
                    textAlign: "justify",
                    marginBottom: "18px",
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
          );
        })()}
      </AnimatePresence>
    </>
  );
}
