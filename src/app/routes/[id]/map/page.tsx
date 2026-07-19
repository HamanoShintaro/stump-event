"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { parseWKBPoint } from "@/utils/wkb";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { Copy, Check, X } from "lucide-react";
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
  const groupId = resolvedSearchParams.groupId || null;
  const router = useRouter();
  const { user } = useAuth();
  
  const [rally, setRally] = useState<any>(null);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 連れ立ち（グループ）用のState
  const [groupMembers, setGroupMembers] = useState<any[]>([]);
  const [memberLatestStamps, setMemberLatestStamps] = useState<Record<string, string>>({}); // user_id -> spot_id (最後のチェックイン場所)
  const [spotAcquiredMembers, setSpotAcquiredMembers] = useState<Record<string, any[]>>({}); // spot_id -> member list
  const [stampEvents, setStampEvents] = useState<any[]>([]); // 共有写真日記用
  const [activeTab, setActiveTab] = useState<"map" | "diary">("map");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 友達招待関連State
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [currentInviteCode, setCurrentInviteCode] = useState<string | null>(null);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { showAlert } = useCustomAlert();

  const handleInviteClick = async () => {
    if (!user) {
      await showAlert({ text: "友達を誘うにはログインが必要です。", okText: "確認" });
      return;
    }

    if (groupId) {
      try {
        const { data: grp, error } = await supabase
          .from("groups")
          .select("invite_code")
          .eq("id", groupId)
          .single();

        if (error) throw error;
        if (grp) {
          setCurrentInviteCode(grp.invite_code);
          setShowInviteModal(false);
          setCopySuccess(false);
          setShowInviteModal(true);
        }
      } catch (err: any) {
        await showAlert({ text: `招待コードの取得に失敗しました: ${err.message}`, okText: "確認" });
      }
    } else {
      setIsCreatingGroup(true);
      try {
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

        const { error: memberError } = await supabase
          .from("group_members")
          .insert({
            group_id: newGrp.id,
            user_id: user.id
          });

        if (memberError) throw memberError;

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

  const fetchData = async () => {
    // Fetch route
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

    // Fetch spots
    const { data: spotsData } = await supabase
      .from('spots')
      .select('*')
      .eq('route_id', resolvedParams.id)
      .order('order_index', { ascending: true });

    let parsedSpots: Spot[] = [];
    if (spotsData) {
      parsedSpots = spotsData.map((s: any) => {
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
    
    // Fetch user's active spot
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

    // 連れ立ち（グループ）データの取得
    if (groupId) {
      // 1. 同行メンバーの取得
      const { data: mData } = await supabase
        .from("group_members")
        .select("*, users:user_id(id, display_name, avatar_url)")
        .eq("group_id", groupId);
      
      const memberList = mData || [];
      setGroupMembers(memberList);

      // 2. グループ内のメンバー全員の stamp_events をロード
      const { data: seData } = await supabase
        .from("stamp_events")
        .select("*, users:user_id(display_name, avatar_url)")
        .eq("group_id", groupId)
        .order("created_at", { ascending: false });

      const events = seData || [];
      setStampEvents(events);

      // 3. 各メンバーが最後に押印したスポット & 各スポットの押印済メンバーを算出
      const latest: Record<string, string> = {};
      const spotAcquired: Record<string, any[]> = {};

      parsedSpots.forEach(s => { spotAcquired[s.id] = []; });

      // 古い順から処理して、最新のものを上書きする
      [...events].reverse().forEach((e: any) => {
        if (e.spot_id) {
          latest[e.user_id] = e.spot_id;
          
          const memberInfo = memberList.find(m => m.user_id === e.user_id)?.users || { id: e.user_id, display_name: "名無しの旅人" };
          
          if (spotAcquired[e.spot_id]) {
            // 重複排除
            if (!spotAcquired[e.spot_id].some(m => m.id === memberInfo.id)) {
              spotAcquired[e.spot_id].push(memberInfo);
            }
          }
        }
      });

      setMemberLatestStamps(latest);
      setSpotAcquiredMembers(spotAcquired);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [resolvedParams.id, user, groupId]);

  // リアルタイムリスナーと定期ポーリング（ハイブリッド同期）
  useEffect(() => {
    if (!groupId) return;

    // 1. Supabase Realtime：このグループでの新規スタンプイベントを監視
    const channel = supabase
      .channel(`play-${groupId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "stamp_events", filter: `group_id=eq.${groupId}` },
        async (payload: any) => {
          // メンバー情報をフェッチ
          const { data: userData } = await supabase
            .from("users")
            .select("display_name")
            .eq("id", payload.new.user_id)
            .single();

          // スポット情報を特定
          const spotName = spots.find(s => s.id === payload.new.spot_id)?.name || "スポット";
          const userName = userData?.display_name || "同行メンバー";

          // 通知を表示
          setToastMessage(`🌸 ${userName} さんが「${spotName}」に到着し、しるしを刻みました！`);
          setTimeout(() => setToastMessage(null), 5000);

          // データを再ロード
          fetchData();
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "group_members", filter: `group_id=eq.${groupId}` },
        () => {
          fetchData();
        }
      )
      .subscribe();

    // 2. 定期ポーリングバックアップ (5秒間隔)
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, [groupId, spots]);

  if (loading) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>読み込み中...</div>;
  }

  if (!rally) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>ルートが見つかりませんでした</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Link href={`/routes/${rally.id}${groupId ? `?groupId=${groupId}` : ""}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
            ← 戻る
          </Link>
          <h1 className={styles.title} style={{ fontSize: "1.0rem", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, textAlign: "center", padding: "0 8px" }}>
            {rally.title}
          </h1>
          <button
            onClick={handleInviteClick}
            disabled={isCreatingGroup}
            style={{
              padding: "8px 14px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              background: "transparent",
              border: "1.5px solid var(--primary-color)",
              color: "var(--primary-color)",
              borderRadius: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}
          >
            👥 {isCreatingGroup ? "作成中..." : groupId ? "コードを確認" : "友達を誘う"}
          </button>
        </div>

      </header>

      {/* リアルタイムお祝いトースト */}
      {toastMessage && (
        <div 
          style={{ 
            position: "fixed", 
            top: "80px", 
            left: "50%", 
            transform: "translateX(-50%)", 
            background: "#FFFDF9", 
            border: "1.5px solid var(--primary-color)", 
            color: "var(--text-color)",
            padding: "12px 18px", 
            borderRadius: "30px", 
            zIndex: 99999, 
            boxShadow: "0 6px 20px rgba(199,68,46,0.18)",
            fontSize: "0.85rem",
            fontWeight: "800",
            whiteSpace: "nowrap",
            animation: "slideDownToast 0.4s ease-out"
          }}
        >
          {toastMessage}
        </div>
      )}
      
      <main className={styles.mapContainer} style={{ position: "relative" }}>
        <RouteMapUI 
          rally={rally} 
          spots={spots} 
          activeSpotId={activeSpotId} 
          groupId={groupId}
          groupMembers={groupMembers}
          memberLatestStamps={memberLatestStamps}
          spotAcquiredMembers={spotAcquiredMembers}
        />
      </main>

      {/* 招待コード表示モーダル */}
      {showInviteModal && currentInviteCode && (
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
              maxWidth: "360px", 
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

            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>👥</div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#5C4E43", margin: "0 0 8px 0" }}>
              友達を連れ立ちに誘う
            </h3>
            <p style={{ fontSize: "0.8rem", color: "#8A7E72", margin: "0 0 24px 0", lineHeight: "1.4" }}>
              この6桁の招待コードを友達に教えてください。友達がマイページに入力すると、同じ日記（ライフログ）を共有して巡ることができます。
            </p>

            <div 
              style={{ 
                fontSize: "2rem", 
                fontWeight: "800", 
                color: "var(--primary-color)", 
                letterSpacing: "4px", 
                background: "#FAF6EE", 
                border: "1.5px dashed #EBE5D9",
                borderRadius: "10px",
                padding: "16px 0",
                marginBottom: "20px"
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
                background: copySuccess ? "#4BB543" : "var(--primary-color)"
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
