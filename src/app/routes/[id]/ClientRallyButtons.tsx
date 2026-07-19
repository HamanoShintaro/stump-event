"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import JoinAnimation from "@/components/JoinAnimation";

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
  const [isDisbanding, setIsDisbanding] = useState(false);
  const [partnerNames, setPartnerNames] = useState<string[]>([]);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
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

        // アクティブな連れ立ち中の相手をフェッチ (安全なSequential方式)
        const { data: myMemberships } = await supabase
          .from('group_members')
          .select('group_id')
          .eq('user_id', user.id);

        if (myMemberships && myMemberships.length > 0) {
          const groupIds = myMemberships.map(m => m.group_id);
          const { data: activeGroups } = await supabase
            .from('groups')
            .select('id, invite_code')
            .in('id', groupIds)
            .eq('route_id', rallyId)
            .eq('is_active', true);

          if (activeGroups && activeGroups.length > 0) {
            const actGrpId = activeGroups[0].id;
            const code = activeGroups[0].invite_code;
            setActiveGroupId(actGrpId);
            setInviteCode(code);
            const { data: members } = await supabase
              .from('group_members')
              .select('user_id')
              .eq('group_id', actGrpId)
              .neq('user_id', user.id); // 自分以外のメンバー

            if (members && members.length > 0) {
              const userIds = members.map(m => m.user_id);
              const { data: userProfiles } = await supabase
                .from('users')
                .select('display_name')
                .in('id', userIds);

              if (userProfiles) {
                setPartnerNames(userProfiles.map(u => u.display_name));
              }
            }
          }
        }
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

      setActiveGroupId(newGrp.id);
      setInviteCode(inviteCode);

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

  const handleLeaveGroup = async () => {
    if (!user || !activeGroupId) return;

    setIsDisbanding(true);
    try {
      // 自分がグループ作成者かどうかチェック
      const { data: grp } = await supabase
        .from('groups')
        .select('created_by')
        .eq('id', activeGroupId)
        .single();

      if (grp && grp.created_by === user.id) {
        // 作成者の場合: グループ全体を非アクティブ化 (解散)
        await supabase
          .from('groups')
          .update({ is_active: false, status: 'COMPLETED' })
          .eq('id', activeGroupId);
      } else {
        // 一般参加者の場合: メンバーから自分を削除 (退出)
        await supabase
          .from('group_members')
          .delete()
          .eq('group_id', activeGroupId)
          .eq('user_id', user.id);
      }

      await showAlert({ text: "連れ立ちセッションを終了（退出・解散）しました。ソロプレイに戻ります。", okText: "確認" });
      
      // クライアントの状態をソロにリセット
      setActiveGroupId(null);
      setInviteCode(null);
      setPartnerNames([]);
    } catch (err: any) {
      await showAlert({ text: `連れ立ちの終了に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsDisbanding(false);
    }
  };

  return (
    <>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          
          {/* 連れ立ち進行中ダッシュボードカード */}
          {activeGroupId && (
            <div className="glass-card" style={{
              padding: "20px",
              border: "1.5px solid var(--accent-color)",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 8px 24px rgba(201, 168, 76, 0.12)",
              width: "100%"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "8px" }}>
                <span style={{ fontSize: "1.2rem" }}>👥</span>
                <span style={{ fontWeight: 800, color: "var(--secondary-color)", fontSize: "1rem" }}>連れ立ちセッション進行中</span>
              </div>
              
              <div style={{ fontSize: "0.85rem", color: "#5C4E43", lineHeight: 1.5 }}>
                {partnerNames.length > 0 ? (
                  <>
                    同行者: <strong>{partnerNames.join(' さん、')} さん</strong> と一緒に巡っています。
                  </>
                ) : (
                  <>
                    現在、友達の合流を待っています。<br/>
                    下記の招待コードを友達に教えてください。
                  </>
                )}
              </div>

              {inviteCode && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(201, 168, 76, 0.08)",
                  padding: "10px 16px",
                  borderRadius: "12px",
                  border: "1px dashed var(--accent-color)"
                }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#5C4E43" }}>
                    招待コード: <span style={{ fontSize: "1.1rem", letterSpacing: "1px", color: "var(--primary-color)", fontWeight: "bold" }}>{inviteCode}</span>
                  </div>
                  <button 
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(inviteCode);
                        await showAlert({ text: "招待コードをクリップボードにコピーしました！", okText: "確認" });
                      } catch (err) {
                        await showAlert({ text: `招待コードは 【 ${inviteCode} 】 です。`, okText: "閉じる" });
                      }
                    }}
                    style={{
                      background: "white",
                      border: "1px solid #EBE5D9",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    コピー
                  </button>
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <button 
                  onClick={() => {
                    setIsNavigating(true);
                    router.push(`/routes/${rallyId}/map`);
                  }}
                  disabled={isNavigating || isDisbanding}
                  className="btn-primary"
                  style={{
                    flex: 2,
                    fontSize: "0.95rem",
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    boxShadow: "none"
                  }}
                >
                  {isNavigating ? "読み込み中..." : "🗺️ 地図を表示"}
                </button>
                
                <button 
                  onClick={handleLeaveGroup}
                  disabled={isNavigating || isDisbanding}
                  className="btn-secondary"
                  style={{
                    flex: 1.2,
                    fontSize: "0.85rem",
                    padding: "12px",
                    borderColor: "#C7442E",
                    color: "#C7442E",
                    background: "rgba(199, 68, 46, 0.03)"
                  }}
                >
                  {isDisbanding ? "処理中..." : "連れ立ちをやめる"}
                </button>
              </div>
            </div>
          )}

          {/* 連れ立ち中でない場合の通常表示 */}
          {!activeGroupId && (
            <>
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
                {isNavigating ? "読み込み中..." : "現在の目的地への地図を見る"}
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
                {isCreatingGroup ? "グループを作成中..." : "👥 友達と連れ立ちを開始する"}
              </button>
            </>
          )}
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
            {isNavigating ? "読み込み中..." : user ? "このルートに参加する" : "ログインしてこのルートに参加する"}
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
      {isNavigating ? "読み込み中..." : user ? "詳細 / 押印する" : "詳細を見る"}
    </button>
  );
}
