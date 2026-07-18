"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import HeaderNav from "@/components/HeaderNav";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import { ChevronLeft, Copy, User, Check, Play } from "lucide-react";

interface PageProps {
  params: Promise<{ groupId: string }>;
}

export default function GroupWaitRoom({ params }: PageProps) {
  const { groupId } = use(params);
  const { user, loading } = useAuth();
  const router = useRouter();
  const { showAlert } = useCustomAlert();

  const [group, setGroup] = useState<any | null>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // メンバー情報とグループ情報のロード
  const fetchGroupAndMembers = async () => {
    if (!user) return;
    try {
      // 1. グループ情報をロード
      const { data: gData, error: gError } = await supabase
        .from("groups")
        .select("*, routes(title)")
        .eq("id", groupId)
        .single();

      if (gError) {
        console.error("Failed to load group:", gError);
        return;
      }
      setGroup(gData);

      if (gData) {
        router.replace(`/routes/${gData.route_id}/map?groupId=${groupId}`);
        return;
      }

      // 2. メンバーリストをロード
      const { data: mData, error: mError } = await supabase
        .from("group_members")
        .select("*, users:user_id(display_name, avatar_url)")
        .eq("group_id", groupId);

      if (mError) {
        console.error("Failed to load members:", mError);
        return;
      }

      setMembers(mData || []);

      // 3. 自分自身がメンバーに含まれているか確認
      const isMember = (mData || []).some((m: any) => m.user_id === user.id);
      if (!isMember) {
        // 自動で参加メンバーに追加
        const { error: joinError } = await supabase
          .from("group_members")
          .insert({ group_id: groupId, user_id: user.id });

        if (joinError) {
          console.error("Failed to auto-join group:", joinError);
        } else {
          // 再ロード
          const { data: refetchedMembers } = await supabase
            .from("group_members")
            .select("*, users:user_id(display_name, avatar_url)")
            .eq("group_id", groupId);
          setMembers(refetchedMembers || []);
        }
      }
    } catch (err) {
      console.error("Error in fetchGroupAndMembers:", err);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (user && groupId) {
      fetchGroupAndMembers();
    }
  }, [user, groupId]);

  // リアルタイムリスナーと定期ポーリング（ハイブリッド同期）
  useEffect(() => {
    if (!groupId) return;

    // 1. Supabase Realtime リスナー
    const channel = supabase
      .channel(`room-${groupId}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "group_members", filter: `group_id=eq.${groupId}` },
        () => {
          fetchGroupAndMembers();
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "groups", filter: `id=eq.${groupId}` },
        (payload: any) => {
          if (payload.new && payload.new.status === "STARTED") {
            router.push(`/routes/${payload.new.route_id}/map?groupId=${groupId}`);
          }
        }
      )
      .subscribe();

    // 2. ポーリングバックアップ（リアルタイム通信のタイムアウトや切断用）
    const pollInterval = setInterval(() => {
      fetchGroupAndMembers();
    }, 4000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(pollInterval);
    };
  }, [groupId, user]);

  const handleCopyCode = async () => {
    if (!group) return;
    try {
      await navigator.clipboard.writeText(group.invite_code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleStartGroup = async () => {
    if (!group || !user) return;
    setIsStarting(true);
    try {
      // groups のステータスを STARTED に更新
      const { error } = await supabase
        .from("groups")
        .update({ status: "STARTED" })
        .eq("id", groupId);

      if (error) {
        throw error;
      }

      // 同時に進行中ルートとして登録する
      const { error: activeError } = await supabase
        .from("user_routes")
        .insert({
          user_id: user.id,
          route_id: group.route_id,
          status: "IN_PROGRESS"
        });
      
      if (activeError && activeError.code !== "23505") { // 重複は無視
        console.error("Failed to register active route for host:", activeError);
      }

      router.push(`/routes/${group.route_id}/map?groupId=${groupId}`);
    } catch (err: any) {
      await showAlert({ text: `連れ立ちの出発に失敗しました: ${err.message}`, okText: "確認" });
    } finally {
      setIsStarting(false);
    }
  };

  const isHost = group && user && group.created_by === user.id;

  if (loading || pageLoading) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        <p style={{ color: "#A39687" }}>連れ立ちの準備をしています...</p>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        <p style={{ color: "var(--primary-color)", fontWeight: "bold" }}>連れ立ちグループが見つかりませんでした。</p>
        <Link href="/mypage" className="btn-secondary" style={{ display: "inline-block", marginTop: "20px", textDecoration: "none" }}>
          マイページへ戻る
        </Link>
      </div>
    );
  }

  // 招待コードのフォーマット表示（例: 389 421）
  const displayCode = group.invite_code
    ? `${group.invite_code.slice(0, 3)} ${group.invite_code.slice(3)}`
    : "";

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "480px", margin: "0 auto", paddingBottom: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link href="/mypage" style={{ display: "flex", alignItems: "center", gap: "4px", color: "#A39687", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" }}>
            <ChevronLeft size={16} /> マイページへ戻る
          </Link>
        </div>

        <div style={{ background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "16px", padding: "24px 20px", textAlign: "center", boxShadow: "0 4px 12px rgba(92, 78, 67, 0.05)", marginBottom: "24px" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--primary-color)", fontWeight: "900", letterSpacing: "1px", background: "rgba(199, 68, 46, 0.08)", padding: "4px 10px", borderRadius: "20px" }}>
            連れ立ち（グループ）待機中
          </span>
          <h1 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-color)", margin: "16px 0 6px 0", lineHeight: "1.4" }}>
            {group.routes?.title}
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: "0 0 24px 0" }}>友達と同じルートを歩き、しるしを共有しましょう。</p>

          {/* 招待コード */}
          <div style={{ background: "rgba(92, 78, 67, 0.03)", border: "1px dashed #EBE5D9", borderRadius: "12px", padding: "16px", margin: "20px 0" }}>
            <div style={{ fontSize: "0.75rem", color: "#A39687", fontWeight: "bold", marginBottom: "6px" }}>招待コード</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "2rem", fontWeight: "900", color: "var(--text-color)", letterSpacing: "2px", fontFamily: "monospace" }}>
                {displayCode}
              </span>
              <button 
                onClick={handleCopyCode}
                style={{ 
                  background: copied ? "var(--accent-color)" : "#FFFDF9", 
                  border: "1px solid #EBE5D9", 
                  borderRadius: "8px", 
                  padding: "8px", 
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s"
                }}
                title="コードをコピー"
              >
                {copied ? <Check size={16} color="#FFF" /> : <Copy size={16} color="#A39687" />}
              </button>
            </div>
            <div style={{ fontSize: "0.7rem", color: "#A39687", marginTop: "8px" }}>友達にこのコードを共有して参加させてください。</div>
          </div>
        </div>

        {/* 参加メンバー一覧 */}
        <div style={{ background: "#FFFDF9", border: "1px solid #EBE5D9", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 12px rgba(92, 78, 67, 0.05)", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: "800", color: "var(--text-color)", margin: "0 0 16px 0", textAlign: "left", display: "flex", alignItems: "center", gap: "6px" }}>
            <User size={16} color="var(--primary-color)" /> 同行するメンバー ({members.length}人)
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {members.map((m: any) => {
              const u = m.users || {};
              const isMe = m.user_id === user?.id;
              const isGroupHost = m.user_id === group.created_by;
              return (
                <div 
                  key={m.id}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    padding: "10px 12px", 
                    background: "rgba(92, 78, 67, 0.02)", 
                    borderRadius: "8px",
                    border: isMe ? "1px solid var(--accent-color)" : "1px solid transparent"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#EBE5D9", overflow: "hidden", display: "flex", alignItems: "center", justifyItems: "center" }}>
                      {u.avatar_url ? (
                        <img src={u.avatar_url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <User size={18} style={{ margin: "auto" }} color="#8A7E72" />
                      )}
                    </div>
                    <div>
                      <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "var(--text-color)" }}>
                        {u.display_name || "名無しの旅人"}
                      </span>
                      {isMe && <span style={{ fontSize: "0.7rem", color: "var(--accent-color)", marginLeft: "6px", fontWeight: "bold" }}>（あなた）</span>}
                    </div>
                  </div>

                  {isGroupHost && (
                    <span style={{ fontSize: "0.7rem", color: "var(--primary-color)", background: "rgba(199, 68, 46, 0.08)", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                      立ち上げ人
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* アクションボタン */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          {isHost ? (
            <button
              onClick={handleStartGroup}
              disabled={isStarting}
              className="btn-primary"
              style={{ 
                width: "100%", 
                padding: "14px 20px", 
                fontSize: "1rem", 
                fontWeight: "900",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(199, 68, 46, 0.3)"
              }}
            >
              <Play size={18} fill="currentColor" /> {isStarting ? "出発準備中..." : "連れ立ちを出発させる"}
            </button>
          ) : (
            <div style={{ padding: "16px", background: "rgba(92, 78, 67, 0.03)", borderRadius: "12px", border: "1px dashed #EBE5D9" }}>
              <div className="loading-spinner" style={{ width: "24px", height: "24px", border: "3px solid #EBE5D9", borderTop: "3px solid var(--primary-color)", borderRadius: "50%", margin: "0 auto 12px auto", animation: "spin 1s linear infinite" }}></div>
              <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: 0, fontWeight: "bold" }}>
                立ち上げ人が出発するのを待っています...
              </p>
            </div>
          )}
        </div>
      </main>
      
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
