"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { isRouteCurrentlyActive, fetchCurrentActiveUserRoute, activateUserRoute } from "@/utils/userRoutes";
import { useCompanionGroup } from "@/hooks/useCompanionGroup";
import {
  buildMemberStatusWithDisplayName,
  CompanionMember,
  fetchGroupCompanionMembers,
  syncUserProfileAndGroupStatus,
} from "@/utils/stampMedia";
import JoinAnimation from "@/components/JoinAnimation";
import { useRouteBookmark } from "@/hooks/useRouteBookmark";
import { Bookmark, Star, Users, KeyRound, Map as MapIcon, Copy } from "lucide-react";

export function BookmarkRouteButton({
  routeId,
  initialFavoriteCount = 0,
}: {
  routeId: string;
  initialFavoriteCount?: number;
}) {
  const { isBookmarked, favoriteCount, loading, toggleBookmark } = useRouteBookmark(
    routeId,
    initialFavoriteCount
  );

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      disabled={loading}
      style={{
        width: "100%",
        padding: "11px 16px",
        fontSize: "0.88rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "10px",
        border: isBookmarked ? "1px solid var(--accent-color)" : "1px solid #DED6C6",
        background: isBookmarked ? "rgba(201, 168, 76, 0.14)" : "#F6F1E6",
        color: "var(--text-color)",
        fontWeight: 700,
        cursor: loading ? "wait" : "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <Bookmark
        size={16}
        fill={isBookmarked ? "var(--accent-color)" : "none"}
        color={isBookmarked ? "var(--primary-color)" : "currentColor"}
        strokeWidth={2}
      />
      <span>
        {isBookmarked ? "保存済み（いつか歩きたい街）" : "このルートを保存する（栞）"}
      </span>
      {favoriteCount > 0 && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "3px",
            marginLeft: "4px",
            fontSize: "0.78rem",
            color: "var(--primary-color)",
            background: "rgba(199, 68, 46, 0.08)",
            padding: "2px 8px",
            borderRadius: "6px",
          }}
        >
          <Star size={11} fill="currentColor" />
          {favoriteCount}
        </span>
      )}
    </button>
  );
}

export function JoinRallyButton({ 
  rallyId, 
  routeTitle, 
  routeDescription, 
  routePrologue,
  groupId = null
}: { 
  rallyId: string;
  routeTitle: string;
  routeDescription: string;
  routePrologue?: string;
  groupId?: string | null;
}) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [isJoined, setIsJoined] = useState(false);
  const [hasPastParticipation, setHasPastParticipation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [isDisbanding, setIsDisbanding] = useState(false);
  const [showJoinByCodeInput, setShowJoinByCodeInput] = useState(false);
  const [joinCodeInput, setJoinCodeInput] = useState("");
  const [isJoiningByCode, setIsJoiningByCode] = useState(false);
  const [liveJoinNotice, setLiveJoinNotice] = useState<string | null>(null);
  const { showAlert } = useCustomAlert();

  const handlePartnerJoined = useCallback((partner: CompanionMember) => {
    setLiveJoinNotice(`${partner.displayName} さんが連れ立ちに合流しました。`);
  }, []);

  const {
    effectiveGroupId: activeGroupId,
    setEffectiveGroupId: setActiveGroupId,
    inviteCode,
    setInviteCode,
    partnerNames,
    refreshGroupData,
  } = useCompanionGroup({
    routeId: rallyId,
    urlGroupId: groupId,
    onPartnerJoined: handlePartnerJoined,
  });

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
        const [urRes, stampCountRes] = await Promise.all([
          supabase
            .from('user_routes')
            .select('id, status, joined_at, completed_at')
            .eq('user_id', user.id)
            .eq('route_id', rallyId)
            .maybeSingle(),
          supabase
            .from('stamps')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', user.id)
            .eq('route_id', rallyId),
        ]);

        const data = urRes.data;
        if (urRes.error) {
          console.error("Error checking route join status:", urRes.error);
        }

        const currentlyActive = isRouteCurrentlyActive(data);
        setIsJoined(currentlyActive);
        setHasPastParticipation(Boolean(data) || (stampCountRes.count || 0) > 0);

        // 24時間経過したIN_PROGRESSレコードがあればDB側も整理しておく
        if (data && !currentlyActive && (data.status === 'IN_PROGRESS' || data.status === 'in_progress')) {
          await supabase
            .from('user_routes')
            .update({ status: data.completed_at ? 'COMPLETED' : 'CANCELED' })
            .eq('id', data.id);
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

    // 他に現在進行中（24時間以内）のルートがあるかチェック（最大1個制限）
    const activeOther = await fetchCurrentActiveUserRoute(user.id);
    if (activeOther && activeOther.route_id !== rallyId) {
      const otherRouteObj: any = Array.isArray(activeOther.routes) ? activeOther.routes[0] : activeOther.routes;
      const otherTitle = otherRouteObj?.title || otherRouteObj?.name || "別のルート";
      const confirmSwitch = await showAlert({
        text: `現在「${otherTitle}」が進行中です。\n進行中に設定できるルートは1つまでのため、進行中のルートを切り替えて参加しますか？\n※これまでに獲得した押印（SHUIN）や参加履歴は消えずに残ります。`,
        okText: "切り替えて参加する",
        ngText: "キャンセル",
      });
      if (!confirmSwitch) {
        setIsNavigating(false);
        return;
      }
    }

    // DBに参加データを登録・更新（他の進行中ルートは解除し、このルートのみをIN_PROGRESS＋現在日時に設定）
    const { error } = await activateUserRoute(user.id, rallyId);
      
    if (error) {
      console.error("Join error:", error);
      setIsNavigating(false);
      await showAlert({ text: `参加に失敗しました: ${error.message}`, okText: "確認" });
    } else {
      setIsJoined(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("shuin-route-joined", { detail: { routeId: rallyId } }));
      }
      setShowAnimation(true);
    }
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setIsNavigating(true);
    const targetGroupId = activeGroupId || groupId;
    // アニメーション完了後に一覧画面へ遷移し、最初の行き先を選ばせる
    router.push(`/routes/${rallyId}/destinations${targetGroupId ? `?groupId=${targetGroupId}` : ""}`);
  };

  const handleCreateGroup = async () => {
    if (!user) return;
    setIsCreatingGroup(true);
    try {
      await syncUserProfileAndGroupStatus(supabase, user);
      const newInviteCode = Math.floor(100000 + Math.random() * 900000).toString();
      const { data: newGrp, error: grpError } = await supabase
        .from("groups")
        .insert({
          route_id: rallyId,
          invite_code: newInviteCode,
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

      setActiveGroupId(newGrp.id);
      setInviteCode(newInviteCode);
      await refreshGroupData();

      await showAlert({ 
        text: `連れ立ちグループを作成しました！\n招待コード: ${newInviteCode}\n\n友達にこのコードを伝えて合流してください。`, 
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

  const handleJoinByCode = async (e: React.FormEvent) => {
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
        await showAlert({
          text: "指定された招待コードの連れ立ちグループが見つかりません。コードが正しいかご確認ください。",
          okText: "確認",
        });
        return;
      }

      // もし自分で先に待機用グループを作ってしまっていた場合は非アクティブ化して友達のグループへ合流する
      if (activeGroupId && activeGroupId !== grp.id && partnerNames.length === 0) {
        await supabase
          .from("groups")
          .update({ is_active: false, status: "COMPLETED" })
          .eq("id", activeGroupId)
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

      await activateUserRoute(user.id, grp.route_id);
      setIsJoined(true);
      setActiveGroupId(grp.id);
      setInviteCode(grp.invite_code);
      setShowJoinByCodeInput(false);
      setJoinCodeInput("");

      const currentMembers = await fetchGroupCompanionMembers(supabase, grp.id, user);
      const currentPartners = currentMembers.filter((m) => !m.isMe).map((m) => m.displayName);

      await showAlert({
        text:
          currentPartners.length > 0
            ? `連れ立ちに合流しました。\n同行メンバー: ${currentPartners.join("、")} さん\nマップへ移動します。`
            : `連れ立ちグループ（コード: ${cleanCode}）に参加しました。`,
        okText: "マップへ進む",
      });
      setIsNavigating(true);
      router.push(`/routes/${grp.route_id}/map?groupId=${grp.id}`);
    } catch (err: any) {
      await showAlert({ text: `連れ立ちへの合流に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsJoiningByCode(false);
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
      setLiveJoinNotice(null);
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "8px", flexWrap: "wrap" }}>
                <Users size={18} strokeWidth={2} color="var(--primary-color)" />
                <span style={{ fontWeight: 800, color: "var(--secondary-color)", fontSize: "1rem" }}>連れ立ちセッション進行中</span>
                <span style={{
                  marginLeft: "auto",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "2px 10px",
                  borderRadius: "6px",
                  background: partnerNames.length > 0 ? "#E8F5E9" : "#FFF8E1",
                  color: partnerNames.length > 0 ? "#2E7D32" : "#B78103",
                  border: `1px solid ${partnerNames.length > 0 ? "#A5D6A7" : "#FFE082"}`,
                }}>
                  {partnerNames.length > 0 ? `合流済み（同行 ${partnerNames.length}名）` : "合流待ち"}
                </span>
              </div>

              {liveJoinNotice && (
                <div style={{
                  background: "#E8F5E9",
                  border: "1px solid #81C784",
                  color: "#1B5E20",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}>
                  {liveJoinNotice}
                </div>
              )}
              
              <div style={{ fontSize: "0.88rem", color: "#5C4E43", lineHeight: 1.6 }}>
                {partnerNames.length > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div>
                      同行者: <strong style={{ color: "var(--primary-color)", fontSize: "0.95rem" }}>{partnerNames.join(' さん、')} さん</strong> と一緒に巡っています。
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#8A7E72" }}>
                      スポットで押印（SHUIN）した写真やコメントはお互いに共有されます。
                    </div>
                  </div>
                ) : (
                  <>
                    現在、友達の合流を待っています。<br/>
                    下記の招待コードを友達に教えてください（友達が参加するとこの画面に自動で表示されます）。
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

              {partnerNames.length === 0 && (
                <div style={{ fontSize: "0.8rem" }}>
                  {!showJoinByCodeInput ? (
                    <button
                      type="button"
                      onClick={() => setShowJoinByCodeInput(true)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--primary-color)",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        padding: 0,
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <KeyRound size={13} strokeWidth={2} />
                      <span>友達から受け取った招待コードを入力して合流する場合はこちら</span>
                    </button>
                  ) : (
                    <form onSubmit={handleJoinByCode} style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="6桁の招待コード"
                        value={joinCodeInput}
                        onChange={(e) => setJoinCodeInput(e.target.value)}
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          borderRadius: "8px",
                          border: "1px solid #D5CEC4",
                          fontSize: "0.9rem",
                          letterSpacing: "2px",
                          textAlign: "center",
                        }}
                      />
                      <button
                        type="submit"
                        disabled={isJoiningByCode || joinCodeInput.trim().length !== 6}
                        className="btn-primary"
                        style={{ padding: "8px 14px", fontSize: "0.82rem", whiteSpace: "nowrap" }}
                      >
                        {isJoiningByCode ? "合流中..." : "合流する"}
                      </button>
                    </form>
                  )}
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <button 
                  onClick={() => {
                    setIsNavigating(true);
                    const targetGroupId = activeGroupId || groupId;
                    router.push(`/routes/${rallyId}/map` + (targetGroupId ? `?groupId=${targetGroupId}` : ""));
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
                  <MapIcon size={16} strokeWidth={2} />
                  <span>{isNavigating ? "読み込み中..." : "地図を表示"}</span>
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
                  const targetGroupId = activeGroupId || groupId;
                  router.push(`/routes/${rallyId}/map` + (targetGroupId ? `?groupId=${targetGroupId}` : ""));
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

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button 
                  onClick={handleCreateGroup}
                  disabled={isNavigating || isCreatingGroup}
                  className="btn-secondary"
                  style={{
                    flex: "1 1 200px",
                    fontSize: "0.95rem",
                    padding: "14px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    opacity: (isNavigating || isCreatingGroup) ? 0.7 : 1,
                    cursor: (isNavigating || isCreatingGroup) ? "not-allowed" : "pointer"
                  }}
                >
                  <Users size={16} strokeWidth={2} />
                  <span>{isCreatingGroup ? "作成中..." : "招待コードを発行（連れ立ち開始）"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowJoinByCodeInput((prev) => !prev)}
                  disabled={isNavigating || isCreatingGroup}
                  className="btn-secondary"
                  style={{
                    flex: "1 1 200px",
                    fontSize: "0.95rem",
                    padding: "14px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <KeyRound size={16} strokeWidth={2} />
                  <span>招待コードを入力して合流</span>
                </button>
              </div>

              {showJoinByCodeInput && (
                <form
                  onSubmit={handleJoinByCode}
                  className="glass-card"
                  style={{
                    padding: "16px",
                    borderRadius: "14px",
                    border: "1px solid var(--accent-color)",
                    background: "#FFFDF9",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#5C4E43" }}>
                    友達から共有された6桁の招待コードを入力してください
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="123456"
                      value={joinCodeInput}
                      onChange={(e) => setJoinCodeInput(e.target.value)}
                      style={{
                        flex: 1,
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #D5CEC4",
                        fontSize: "1.1rem",
                        letterSpacing: "4px",
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isJoiningByCode || joinCodeInput.trim().length !== 6}
                      className="btn-primary"
                      style={{ padding: "10px 18px", fontSize: "0.9rem", whiteSpace: "nowrap" }}
                    >
                      {isJoiningByCode ? "合流中..." : "合流する"}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
          {user && hasPastParticipation && (
            <div style={{ fontSize: "0.82rem", color: "#8A7E72", textAlign: "center", lineHeight: 1.5 }}>
              これまでに参加・押印した記録があるルートです。<br />再参加すると本日から24時間「進行中」に設定されます。
            </div>
          )}
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
            {isNavigating
              ? "読み込み中..."
              : user
                ? hasPastParticipation
                  ? "このルートに再参加する"
                  : "このルートに参加する"
                : "ログインしてこのルートに参加する"}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsNavigating(true);
              const targetGroupId = activeGroupId || groupId;
              router.push(`/routes/${rallyId}/map` + (targetGroupId ? `?groupId=${targetGroupId}` : ""));
            }}
            disabled={isNavigating}
            className="btn-secondary"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "0.92rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              opacity: isNavigating ? 0.7 : 1,
              cursor: isNavigating ? "not-allowed" : "pointer",
            }}
          >
            <MapIcon size={16} strokeWidth={2} color="var(--primary-color)" />
            <span>地図でルートを確認する</span>
          </button>

          {user && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button
                type="button"
                onClick={() => setShowJoinByCodeInput((prev) => !prev)}
                className="btn-secondary"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "0.92rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <KeyRound size={15} strokeWidth={2} />
                <span>友達の招待コードで連れ立ち参加する</span>
              </button>
              {showJoinByCodeInput && (
                <form
                  onSubmit={handleJoinByCode}
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid var(--accent-color)",
                    background: "#FFFDF9",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="6桁の招待コード"
                    value={joinCodeInput}
                    onChange={(e) => setJoinCodeInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #D5CEC4",
                      fontSize: "1rem",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isJoiningByCode || joinCodeInput.trim().length !== 6}
                    className="btn-primary"
                    style={{ padding: "10px 16px", fontSize: "0.9rem", whiteSpace: "nowrap" }}
                  >
                    {isJoiningByCode ? "合流中..." : "合流して参加"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export function SpotButton({ spotId, rallyId, groupId }: { spotId: string; rallyId: string; groupId?: string | null }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    // 未ログインでも詳細画面には行けるが、押印獲得などはできない（詳細画面側で制御）
    router.push(`/routes/${rallyId}/spot/${spotId}${groupId ? `?groupId=${groupId}` : ""}`);
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
