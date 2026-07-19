"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import JoinAnimation from "@/components/JoinAnimation";
import LoadingOverlay from "@/components/LoadingOverlay";

export function JoinRallyButton({ 
  rallyId, 
  routeTitle, 
  routeDescription, 
  routePrologue 
}: { 
  rallyId: string;
  routeTitle: string;
  routeDescription: string;
  routePrologue?: string;
}) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const { showAlert } = useCustomAlert();

  useEffect(() => {
    if (authLoading) {
      return;
    }

    if (!user) {
      setLoading(false);
      return;
    }
    const checkStatus = async () => {
      try {
        const { data, error } = await supabase
          .from('user_routes')
          .select('id, status')
          .eq('user_id', user.id)
          .eq('route_id', rallyId)
          .maybeSingle();
        if (error) {
          console.error("Error checking route join status:", error);
        }
        if (data && data.status !== 'CANCELED') setIsJoined(true);
      } catch (err) {
        console.error("checkStatus catch error:", err);
      } finally {
        setLoading(false);
      }
    };
    checkStatus();
  }, [user, authLoading, rallyId]);

  const handleJoin = async () => {
    if (!user) {
      setIsNavigating(true);
      // 未ログインなら、この画面に戻ってくるようにリダイレクト先を指定してログイン画面へ
      router.push(`/login?redirect=/routes/${rallyId}`);
      return;
    }
    setIsNavigating(true);
    // DBに参加データを登録・更新
    const { data: existing } = await supabase
      .from('user_routes')
      .select('id')
      .eq('user_id', user.id)
      .eq('route_id', rallyId)
      .maybeSingle();

    let error;
    if (existing) {
      const { error: updateError } = await supabase
        .from('user_routes')
        .update({ status: 'IN_PROGRESS' })
        .eq('id', existing.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from('user_routes')
        .insert({ user_id: user.id, route_id: rallyId, status: 'IN_PROGRESS' });
      error = insertError;
    }
      
    if (error) {
      console.error("Join error:", error);
      setIsNavigating(false);
      await showAlert({ text: `参加に失敗しました: ${error.message}`, okText: "確認" });
    } else {
      setIsJoined(true);
      setShowAnimation(true);
    }
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setIsNavigating(true);
    // アニメーション完了後に一覧画面へ遷移し、最初の行き先を選ばせる
    router.push(`/routes/${rallyId}/destinations`);
  };

  const handleCreateGroup = async () => {
    if (!user) return;
    setIsCreatingGroup(true);
    try {
      const inviteCode = Math.floor(100000 + Math.random() * 900000).toString();
      const { data: newGrp, error: grpError } = await supabase
        .from("groups")
        .insert({
          route_id: rallyId,
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

      await showAlert({ 
        text: `連れ立ちグループを作成しました！\n招待コード: ${inviteCode}\n\n友達にこのコードを伝えて合流してください。`, 
        okText: "マップへ進む" 
      });
      setIsNavigating(true);
      router.push(`/routes/${rallyId}/map?groupId=${newGrp.id}`);
    } catch (err: any) {
      await showAlert({ text: `グループの作成に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsCreatingGroup(false);
    }
  };

  return (
    <>
      {isNavigating && <LoadingOverlay message="地図へ移動しています..." />}
      {isCreatingGroup && <LoadingOverlay message="連れ立ちを開始しています..." />}

      {showAnimation && (
        <JoinAnimation 
          onComplete={handleAnimationComplete} 
          routeTitle={routeTitle}
          routeDescription={routeDescription}
          routePrologue={routePrologue}
        />
      )}
      
      {loading ? (
        <button className="btn-primary" style={{ width: "100%", fontSize: "1.1rem", padding: "16px", opacity: 0.7 }} disabled>確認中...</button>
      ) : isJoined ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
          <button 
            onClick={() => {
              setIsNavigating(true);
              router.push(`/routes/${rallyId}/map`);
            }}
            disabled={isNavigating || isCreatingGroup}
            className="btn-primary" 
            style={{ 
              width: "100%", 
              fontSize: "1.1rem", 
              padding: "16px",
              background: "linear-gradient(135deg, var(--primary-color) 0%, #E04E39 100%)",
              border: "none",
              boxShadow: "0 4px 15px rgba(199, 68, 46, 0.3)",
              opacity: (isNavigating || isCreatingGroup) ? 0.7 : 1,
              cursor: (isNavigating || isCreatingGroup) ? "not-allowed" : "pointer"
            }}
          >
            参加中｜現在の目的地への地図を見る
          </button>

          <button 
            onClick={handleCreateGroup}
            disabled={isNavigating || isCreatingGroup}
            className="btn-secondary"
            style={{
              width: "100%",
              fontSize: "1.1rem",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              opacity: (isNavigating || isCreatingGroup) ? 0.7 : 1,
              cursor: (isNavigating || isCreatingGroup) ? "not-allowed" : "pointer"
            }}
          >
            👥 友達と連れ立ちを開始する
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
          <button 
            onClick={handleJoin} 
            disabled={isNavigating}
            className="btn-primary" 
            style={{ 
              width: "100%", 
              fontSize: "1.1rem", 
              padding: "16px",
              opacity: isNavigating ? 0.7 : 1,
              cursor: isNavigating ? "not-allowed" : "pointer"
            }}
          >
            {user ? "このルートに参加する" : "ログインしてこのルートに参加する"}
          </button>
        </div>
      )}
    </>
  );
}

export function SpotButton({ spotId, rallyId }: { spotId: string, rallyId: string }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    // 未ログインでも詳細画面には行けるが、スタンプ獲得などはできない（詳細画面側で制御）
    router.push(`/routes/${rallyId}/spot/${spotId}`);
  };

  return (
    <>
      {isNavigating && <LoadingOverlay message="スポットのしるしを読み込んでいます..." />}
      <button 
        onClick={handleClick} 
        disabled={isNavigating}
        className="btn-primary" 
        style={{ 
          padding: "8px 16px", 
          fontSize: "0.9rem",
          opacity: isNavigating ? 0.7 : 1,
          cursor: isNavigating ? "not-allowed" : "pointer"
        }}
      >
        {user ? "詳細 / 押印する" : "詳細を見る"}
      </button>
    </>
  );
}
