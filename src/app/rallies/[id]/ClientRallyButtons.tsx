"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

export function JoinRallyButton({ rallyId }: { rallyId: string }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const checkStatus = async () => {
      const { data } = await supabase
        .from('user_rallies')
        .select('id')
        .eq('user_id', user.id)
        .eq('rally_id', rallyId)
        .maybeSingle();
      if (data) setIsJoined(true);
      setLoading(false);
    };
    checkStatus();
  }, [user, rallyId]);

  const handleJoin = async () => {
    if (!user) {
      // 未ログインなら、この画面に戻ってくるようにリダイレクト先を指定してログイン画面へ
      router.push(`/login?redirect=/rallies/${rallyId}`);
      return;
    }
    
    // DBに参加データを登録
    const { error } = await supabase
      .from('user_rallies')
      .insert({ user_id: user.id, rally_id: rallyId });
      
    if (!error) {
      setIsJoined(true);
      alert("このラリーに参加しました！マイページからも確認できます。");
    }
  };

  if (loading) {
    return <button className="btn-primary" style={{ width: "100%", fontSize: "1.1rem", padding: "16px", opacity: 0.7 }} disabled>確認中...</button>;
  }

  if (isJoined) {
    return (
      <button className="btn-primary" style={{ width: "100%", fontSize: "1.1rem", padding: "16px", background: "var(--secondary-color)", borderColor: "var(--secondary-color)" }} disabled>
        🎉 参加中のラリーです
      </button>
    );
  }

  return (
    <button onClick={handleJoin} className="btn-primary" style={{ width: "100%", fontSize: "1.1rem", padding: "16px" }}>
      {user ? "このラリーに参加する" : "ログインしてこのラリーに参加する"}
    </button>
  );
}

export function SpotButton({ spotId, rallyId }: { spotId: string, rallyId: string }) {
  const { user } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    // 未ログインでも詳細画面には行けるが、スタンプ獲得などはできない（詳細画面側で制御）
    router.push(`/rallies/${rallyId}/spot/${spotId}`);
  };

  return (
    <button onClick={handleClick} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
      {user ? "詳細 / スタンプ獲得" : "詳細を見る"}
    </button>
  );
}
