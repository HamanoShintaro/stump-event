"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import styles from "./page.module.css";
import HeaderNav from "@/components/HeaderNav";
import BackButton from "@/components/BackButton";

interface Spot {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  address?: string;
}

export default function DestinationsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user } = useAuth();
  
  const [rally, setRally] = useState<any>(null);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [settingSpotId, setSettingSpotId] = useState<string | null>(null);
  const { showAlert } = useCustomAlert();

  useEffect(() => {
    async function fetchData() {
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

      if (spotsData) {
        setSpots(spotsData);
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
      
      setLoading(false);
    }
    fetchData();
  }, [resolvedParams.id, user]);

  const handleSetDestination = async (spot: Spot) => {
    if (!user) {
      await showAlert({ text: "行き先を設定するにはログインが必要です。", okText: "確認" });
      return;
    }
    
    setSettingSpotId(spot.id);
    
    // public.users テーブルに該当ユーザーの行が存在しない場合でも、
    // 自動的に行が作成されて active_spot_id が確実に保存されるよう upsert を使用します。
    const { error } = await supabase
      .from('users')
      .upsert({ id: user.id, active_spot_id: spot.id }, { onConflict: 'id' });
      
    setSettingSpotId(null);
    
    if (error) {
      await showAlert({ text: "行き先の設定に失敗しました: " + error.message, okText: "確認" });
    } else {
      setActiveSpotId(spot.id);
      // 行き先設定後、マップ画面へ遷移
      router.push(`/routes/${rally.id}/map`);
    }
  };

  if (loading) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>読み込み中...</div>;
  }

  if (!rally) {
    return notFound();
  }

  return (
    <div className="container">
      <header style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BackButton />
        <HeaderNav />
      </header>
      
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>次の行き先を選択</h1>
        <p className={styles.pageDesc}>目指すスポットを選んで出発しましょう！</p>
        
        <div className={styles.spotList}>
          {spots.map((spot, index) => {
            const isActive = spot.id === activeSpotId;
            return (
              <div key={spot.id} className={styles.spotCard}>
                {spot.image_url && (
                  <div 
                    className={styles.spotImage} 
                    style={{ backgroundImage: `url(${spot.image_url})` }} 
                  />
                )}
                <div className={styles.spotContent}>
                  <div className={styles.spotHeader}>
                    <div className={styles.spotIndex}>{index + 1}</div>
                    <h2 className={styles.spotName}>{spot.name}</h2>
                  </div>
                  <p className={styles.spotDesc}>{spot.description}</p>
                  
                  {isActive ? (
                    <div className={styles.activeStatus}>
                      ✅ このスポットに向かっています
                    </div>
                  ) : (
                    <button 
                      className="btn-primary"
                      style={{ width: "100%", padding: "16px", fontSize: "1.1rem" }}
                      onClick={() => handleSetDestination(spot)}
                      disabled={settingSpotId !== null || !user}
                    >
                      {settingSpotId === spot.id ? "設定中..." : "ここを行き先に設定する"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          
          {spots.length === 0 && (
            <p style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
              まだスポットが登録されていません。
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
