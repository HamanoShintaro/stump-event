"use client";

import { use, useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { parseWKBPoint } from "@/utils/wkb";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { useCompanionGroup } from "@/hooks/useCompanionGroup";
import {
  buildMemberStatusWithDisplayName,
  CompanionMember,
  syncUserProfileAndGroupStatus,
} from "@/utils/stampMedia";
import { Copy, Check, X, KeyRound, ChevronLeft } from "lucide-react";
import {
  IconUsers,
  IconBook,
  IconMapPin,
  IconPen,
  IconStampSeal,
  IconSparkles,
} from "@/components/icons/ShuinIcons";
import styles from "./page.module.css";

// RouteMapUI は Leaflet (window 依存) を使用するため、dynamic インポートで SSR を無効化
const RouteMapUI = dynamic(() => import("./RouteMapUI"), { ssr: false });

interface Spot {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  lat: number;
  lng: number;
}

export default function MapPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ id: string }>,
  searchParams: Promise<{ groupId?: string }>
}) {
  const resolvedParams = use(params);
  const resolvedSearchParams = use(searchParams);
  const urlGroupId = resolvedSearchParams.groupId || null;
  const router = useRouter();
  const { user } = useAuth();
  
  const [rally, setRally] = useState<any>(null);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showSharedAlbumModal, setShowSharedAlbumModal] = useState(false);

  // 友達招待・合流関連State
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [joinCodeInput, setJoinCodeInput] = useState("");
  const [isJoiningByCode, setIsJoiningByCode] = useState(false);
  const { showAlert } = useCustomAlert();

  const spotIds = useMemo(() => spots.map((s) => s.id), [spots]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 5500);
  }, []);

  const handlePartnerJoined = useCallback(
    (partner: CompanionMember) => {
      showToast(`${partner.displayName} さんが連れ立ちに合流しました！`);
    },
    [showToast]
  );

  const handleMemoryUpdated = useCallback(
    (mem: { userId: string; spotId: string; hasPhoto: boolean; hasMemo: boolean }) => {
      const spotName = spots.find((s) => s.id === mem.spotId)?.name || "スポット";
      if (mem.hasPhoto || mem.hasMemo) {
        showToast(`同行メンバーが「${spotName}」の印に写真・コメントを共有しました！`);
      } else {
        showToast(`同行メンバーが「${spotName}」に到着し、しるしを刻みました！`);
      }
    },
    [spots, showToast]
  );

  const {
    effectiveGroupId,
    setEffectiveGroupId,
    inviteCode: currentInviteCode,
    setInviteCode: setCurrentInviteCode,
    members,
    partnerNames,
    sharedMemoriesBySpot,
    refreshGroupData,
  } = useCompanionGroup({
    routeId: resolvedParams.id,
    urlGroupId,
    spotIds,
    onPartnerJoined: handlePartnerJoined,
    onMemoryUpdated: handleMemoryUpdated,
  });

  // RouteMapUI に渡す形式への変換 (groupMembers, memberLatestStamps, spotAcquiredMembers)
  const { groupMembersForMap, memberLatestStamps, spotAcquiredMembers, allSharedMemoriesList } = useMemo(() => {
    const groupMembersForMap = members.map((m) => ({
      user_id: m.userId,
      users: {
        id: m.userId,
        display_name: m.displayName,
        avatar_url: m.avatarUrl,
      },
    }));

    const latest: Record<string, string> = {};
    const latestTime: Record<string, number> = {};
    const spotAcquired: Record<string, any[]> = {};
    const allMemories: Array<{ spotName: string; spotId: string; memory: any }> = [];

    spots.forEach((s) => {
      spotAcquired[s.id] = [];
      const mems = sharedMemoriesBySpot[s.id] || [];
      mems.forEach((m) => {
        spotAcquired[s.id].push({
          id: m.userId,
          display_name: m.displayName,
          avatar_url: m.avatarUrl,
          memo: m.memo,
          photo_url: m.photoUrl,
          isMe: m.isMe,
        });
        const t = new Date(m.acquiredAt).getTime() || 0;
        if (!latestTime[m.userId] || t >= latestTime[m.userId]) {
          latestTime[m.userId] = t;
          latest[m.userId] = s.id;
        }
        allMemories.push({
          spotName: s.name,
          spotId: s.id,
          memory: m,
        });
      });
    });

    allMemories.sort(
      (a, b) => new Date(b.memory.acquiredAt).getTime() - new Date(a.memory.acquiredAt).getTime()
    );

    return {
      groupMembersForMap,
      memberLatestStamps: latest,
      spotAcquiredMembers: spotAcquired,
      allSharedMemoriesList: allMemories,
    };
  }, [members, spots, sharedMemoriesBySpot]);

  const handleInviteClick = async () => {
    if (!user) {
      await showAlert({ text: "友達を誘うにはログインが必要です。", okText: "確認" });
      return;
    }

    if (effectiveGroupId) {
      try {
        if (!currentInviteCode) {
          const { data: grp, error } = await supabase
            .from("groups")
            .select("invite_code")
            .eq("id", effectiveGroupId)
            .single();
          if (error) throw error;
          if (grp) setCurrentInviteCode(grp.invite_code);
        }
        setCopySuccess(false);
        setShowInviteModal(true);
      } catch (err: any) {
        await showAlert({ text: `招待コードの取得に失敗しました: ${err.message}`, okText: "確認" });
      }
    } else {
      setIsCreatingGroup(true);
      try {
        await syncUserProfileAndGroupStatus(supabase, user);
        const inviteCode = Math.floor(100000 + Math.random() * 900000).toString();
        const { data: newGrp, error: grpError } = await supabase
          .from("groups")
          .insert({
            route_id: resolvedParams.id,
            invite_code: inviteCode,
            created_by: user.id,
            status: "WAITING"
          })
          .select()
          .single();

        if (grpError) throw grpError;

        const statusValue = buildMemberStatusWithDisplayName(user);
        const { error: memberError } = await supabase
          .from("group_members")
          .insert({
            group_id: newGrp.id,
            user_id: user.id,
            status: statusValue,
          });

        if (memberError) throw memberError;

        setEffectiveGroupId(newGrp.id);
        setCurrentInviteCode(inviteCode);
        setCopySuccess(false);
        setShowInviteModal(true);
        
        router.replace(`/routes/${resolvedParams.id}/map?groupId=${newGrp.id}`);
      } catch (err: any) {
        await showAlert({ text: `グループの作成に失敗しました: ${err.message}`, okText: "確認" });
      } finally {
        setIsCreatingGroup(false);
      }
    }
  };

  const handleJoinGroupFromModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const cleanCode = joinCodeInput.replace(/\s+/g, "");
    if (cleanCode.length !== 6 || !/^\d{6}$/.test(cleanCode)) {
      await showAlert({ text: "招待コードは6桁の半角数字で入力してください。", okText: "確認" });
      return;
    }

    setIsJoiningByCode(true);
    try {
      const { data: grp, error: grpError } = await supabase
        .from("groups")
        .select("*")
        .eq("invite_code", cleanCode)
        .eq("is_active", true)
        .maybeSingle();

      if (grpError) throw grpError;
      if (!grp) {
        await showAlert({ text: "指定された招待コードのグループが見つかりません。", okText: "確認" });
        return;
      }

      if (effectiveGroupId && effectiveGroupId !== grp.id && partnerNames.length === 0) {
        await supabase
          .from("groups")
          .update({ is_active: false, status: "COMPLETED" })
          .eq("id", effectiveGroupId)
          .eq("created_by", user.id);
      }

      await syncUserProfileAndGroupStatus(supabase, user, grp.id);
      const statusValue = buildMemberStatusWithDisplayName(user);

      const { data: existingMember } = await supabase
        .from("group_members")
        .select("user_id, status")
        .eq("group_id", grp.id)
        .eq("user_id", user.id)
        .maybeSingle();

      if (!existingMember) {
        const { error: joinError } = await supabase
          .from("group_members")
          .insert({
            group_id: grp.id,
            user_id: user.id,
            status: statusValue,
          });
        if (joinError) throw joinError;
      } else if (existingMember.status !== statusValue) {
        await supabase
          .from("group_members")
          .update({ status: statusValue })
          .eq("group_id", grp.id)
          .eq("user_id", user.id);
      }

      setEffectiveGroupId(grp.id);
      setCurrentInviteCode(grp.invite_code);
      setJoinCodeInput("");
      setShowInviteModal(false);
      await refreshGroupData();
      router.replace(`/routes/${grp.route_id}/map?groupId=${grp.id}`);
      showToast("連れ立ちグループに合流しました！");
    } catch (err: any) {
      await showAlert({ text: `合流に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsJoiningByCode(false);
    }
  };

  const handleCopyCode = async () => {
    if (!currentInviteCode) return;
    try {
      await navigator.clipboard.writeText(currentInviteCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  useEffect(() => {
    async function fetchRouteAndSpots() {
      const { data: rallyData, error: rallyError } = await supabase
        .from('routes')
        .select('*')
        .eq('id', resolvedParams.id)
        .maybeSingle();
        
      if (!rallyData || rallyError) {
        setLoading(false);
        return;
      }
      setRally(rallyData);

      const { data: spotsData } = await supabase
        .from('spots')
        .select('*')
        .eq('route_id', resolvedParams.id)
        .order('order_index', { ascending: true });

      if (spotsData) {
        const parsedSpots = spotsData.map((s: any) => {
          const pt = parseWKBPoint(s.location);
          return {
            id: s.id,
            name: s.name,
            description: s.description,
            image_url: s.image_url,
            lat: pt?.lat || 0,
            lng: pt?.lng || 0
          };
        }).filter((s) => s.lat !== 0);
        setSpots(parsedSpots);
      }
      
      if (user) {
        const { data: userData } = await supabase
          .from('users')
          .select('active_spot_id')
          .eq('id', user.id)
          .maybeSingle();
          
        if (userData) {
          setActiveSpotId(userData.active_spot_id);
        }
      }
      
      setLoading(false);
    }
    fetchRouteAndSpots();
  }, [resolvedParams.id, user]);

  if (loading) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>読み込み中...</div>;
  }

  if (!rally) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>ルートが見つかりませんでした</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Link
            href={`/routes/${rally.id}${effectiveGroupId ? `?groupId=${effectiveGroupId}` : ""}`}
            className="btn-secondary"
            style={{
              padding: "7px 12px",
              fontSize: "0.82rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              textDecoration: "none",
            }}
          >
            <ChevronLeft size={15} strokeWidth={2} />
            戻る
          </Link>
          <h1 className={styles.title} style={{ fontSize: "0.95rem", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, textAlign: "center", padding: "0 8px" }}>
            {rally.title}
          </h1>
          <button
            onClick={handleInviteClick}
            disabled={isCreatingGroup}
            style={{
              padding: "7px 12px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              background: "transparent",
              border: "1.5px solid var(--primary-color)",
              color: "var(--primary-color)",
              borderRadius: "8px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              whiteSpace: "nowrap"
            }}
          >
            <IconUsers size={14} color="var(--primary-color)" />
            {isCreatingGroup ? "作成中..." : effectiveGroupId ? "連れ立ち設定" : "友達を誘う"}
          </button>
        </div>

        {/* 連れ立ちステータスバー（参加状況・同行メンバー・共有アルバム） */}
        {effectiveGroupId && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            background: partnerNames.length > 0 ? "#E8F5E9" : "#FFFDF9",
            border: `1px solid ${partnerNames.length > 0 ? "#A5D6A7" : "var(--accent-color)"}`,
            borderRadius: "10px",
            padding: "6px 12px",
            fontSize: "0.76rem",
            color: "#5C4E43",
            flexWrap: "wrap"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontWeight: 800,
                  color: partnerNames.length > 0 ? "#2E7D32" : "#B78103",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: partnerNames.length > 0 ? "#2E7D32" : "#B78103",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {partnerNames.length > 0 ? `連れ立ち合流中 (${partnerNames.length + 1}名)` : "友達の合流待ち"}
              </span>
              <span style={{ color: "#5C4E43" }}>
                {partnerNames.length > 0
                  ? `同行: ${partnerNames.join("、")} さん`
                  : currentInviteCode
                    ? `招待コード: ${currentInviteCode}`
                    : ""}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowSharedAlbumModal(true)}
              style={{
                background: "var(--primary-color)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "5px 10px",
                fontSize: "0.72rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <IconBook size={13} color="#fff" />
              共有された印・写真 ({allSharedMemoriesList.length})
            </button>
          </div>
        )}
      </header>

      {/* リアルタイムお祝いトースト */}
      {toastMessage && (
        <div 
          style={{ 
            position: "fixed", 
            top: "95px", 
            left: "50%", 
            transform: "translateX(-50%)", 
            background: "#FFFDF9", 
            border: "1.5px solid var(--primary-color)", 
            color: "var(--text-color)",
            padding: "12px 18px", 
            borderRadius: "30px", 
            zIndex: 99999, 
            boxShadow: "0 6px 20px rgba(199,68,46,0.18)",
            fontSize: "0.82rem",
            fontWeight: "800",
            maxWidth: "92vw",
            textAlign: "center",
            animation: "slideDownToast 0.4s ease-out",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <IconSparkles size={15} color="var(--primary-color)" />
          <span>{toastMessage}</span>
        </div>
      )}
      
      <main className={styles.mapContainer} style={{ position: "relative" }}>
        <RouteMapUI 
          rally={rally} 
          spots={spots} 
          activeSpotId={activeSpotId} 
          groupId={effectiveGroupId}
          groupMembers={groupMembersForMap}
          memberLatestStamps={memberLatestStamps}
          spotAcquiredMembers={spotAcquiredMembers}
          sharedMemoriesBySpot={sharedMemoriesBySpot}
        />
      </main>

      {/* 共有された印・写真アルバムモーダル */}
      {showSharedAlbumModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(92, 78, 67, 0.5)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: "16px"
          }}
          onClick={() => setShowSharedAlbumModal(false)}
        >
          <div
            style={{
              background: "#FFFDF9",
              border: "1.5px solid var(--accent-color)",
              borderRadius: "18px",
              padding: "20px",
              width: "100%",
              maxWidth: "420px",
              maxHeight: "82vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSharedAlbumModal(false)}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#A39687"
              }}
            >
              <X size={20} />
            </button>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 800,
                color: "#5C4E43",
                margin: "0 0 6px 0",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <IconBook size={18} color="var(--primary-color)" />
              連れ立ち共有しるし帳
            </h3>
            <p style={{ fontSize: "0.78rem", color: "#8A7E72", margin: "0 0 14px 0" }}>
              同行メンバー（{members.map((m) => m.displayName).join("、")}）が刻んだ印と写真・コメント
            </p>

            {allSharedMemoriesList.length === 0 ? (
              <div style={{ textAlign: "center", padding: "28px 12px", color: "#A39687", fontSize: "0.85rem" }}>
                まだこのルートで刻まれた印はありません。<br />スポットに到着して押印すると、ここに写真やコメントが共有されます。
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {allSharedMemoriesList.map(({ spotName, spotId, memory }) => (
                  <div
                    key={`${spotId}_${memory.userId}`}
                    style={{
                      background: "#FAF6EE",
                      border: "1px solid #EBE5D9",
                      borderRadius: "12px",
                      padding: "12px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--primary-color)" }}>
                        {memory.displayName} {memory.isMe ? "（あなた）" : "さん"}
                      </span>
                      <Link
                        href={`/routes/${rally.id}/spot/${spotId}${effectiveGroupId ? `?groupId=${effectiveGroupId}` : ""}`}
                        style={{
                          fontSize: "0.75rem",
                          color: "#5C4E43",
                          fontWeight: 700,
                          textDecoration: "underline",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <IconMapPin size={12} color="var(--primary-color)" />
                        {spotName}
                      </Link>
                    </div>
                    {memory.photoUrl && (
                      <img
                        src={memory.photoUrl}
                        alt={`${spotName}の写真`}
                        style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: memory.memo ? "8px" : 0 }}
                      />
                    )}
                    {memory.memo ? (
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#5C4E43",
                          background: "#FFFDF9",
                          padding: "8px 10px",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "6px",
                        }}
                      >
                        <IconPen size={14} color="#8A7E72" style={{ marginTop: "2px", flexShrink: 0 }} />
                        <span>{memory.memo}</span>
                      </div>
                    ) : !memory.photoUrl ? (
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "#8A7E72",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <IconStampSeal size={13} color="var(--primary-color)" />
                        しるしを刻みました
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 招待コード表示・合流モーダル */}
      {showInviteModal && (
        <div 
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            background: "rgba(92, 78, 67, 0.4)", 
            backdropFilter: "blur(4px)",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            zIndex: 99999,
            padding: "20px"
          }}
        >
          <div 
            style={{ 
              background: "#FFFDF9", 
              border: "1px solid #EBE5D9", 
              borderRadius: "16px", 
              padding: "28px 24px", 
              width: "100%", 
              maxWidth: "380px", 
              boxShadow: "0 10px 25px rgba(92, 78, 67, 0.15)",
              position: "relative",
              textAlign: "center"
            }}
          >
            <button 
              onClick={() => setShowInviteModal(false)}
              style={{ 
                position: "absolute", 
                top: "16px", 
                right: "16px", 
                background: "transparent", 
                border: "none", 
                cursor: "pointer",
                color: "#A39687"
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(199, 68, 46, 0.08)",
                border: "1px solid rgba(199, 68, 46, 0.22)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <IconUsers size={24} color="var(--primary-color)" />
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 8px 0" }}>
              友達と連れ立ちで巡る
            </h3>
            <p style={{ fontSize: "0.8rem", color: "#8A7E72", margin: "0 0 16px 0", lineHeight: "1.4" }}>
              この6桁の招待コードを友達に教えてください。友達がコードを入力すると、印の写真やコメントを共有して巡ることができます。
            </p>

            {partnerNames.length > 0 && (
              <div style={{
                background: "#E8F5E9",
                border: "1px solid #A5D6A7",
                color: "#2E7D32",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "0.82rem",
                fontWeight: 700,
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}>
                <Check size={14} strokeWidth={2.5} />
                現在合流中: {partnerNames.join("、")} さん
              </div>
            )}

            {currentInviteCode && (
              <>
                <div 
                  style={{ 
                    fontSize: "2rem", 
                    fontWeight: "800", 
                    color: "var(--primary-color)", 
                    letterSpacing: "4px", 
                    background: "#FAF6EE", 
                    border: "1.5px dashed #EBE5D9",
                    borderRadius: "10px",
                    padding: "14px 0",
                    marginBottom: "14px"
                  }}
                >
                  {currentInviteCode}
                </div>

                <button 
                  onClick={handleCopyCode}
                  className="btn-primary"
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    fontSize: "0.85rem", 
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: copySuccess ? "#4BB543" : "var(--primary-color)",
                    marginBottom: "18px"
                  }}
                >
                  {copySuccess ? (
                    <>
                      <Check size={16} /> コピーしました
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> 招待コードをコピー
                    </>
                  )}
                </button>
              </>
            )}

            <div style={{ borderTop: "1px solid #EBE5D9", paddingTop: "14px", textAlign: "left" }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#5C4E43",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <KeyRound size={14} color="var(--primary-color)" />
                友達から招待コードを受け取った場合:
              </div>
              <form onSubmit={handleJoinGroupFromModal} style={{ display: "flex", gap: "8px" }}>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="6桁のコード"
                  value={joinCodeInput}
                  onChange={(e) => setJoinCodeInput(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #D5CEC4",
                    fontSize: "0.95rem",
                    letterSpacing: "2px",
                    textAlign: "center"
                  }}
                />
                <button
                  type="submit"
                  disabled={isJoiningByCode || joinCodeInput.trim().length !== 6}
                  className="btn-primary"
                  style={{ padding: "8px 14px", fontSize: "0.8rem", whiteSpace: "nowrap" }}
                >
                  {isJoiningByCode ? "合流中..." : "合流する"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDownToast {
          from { transform: translate(-50%, -30px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
