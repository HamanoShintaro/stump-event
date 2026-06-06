"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { parseWKBPoint } from "@/utils/wkb";
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

export default function MapPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user } = useAuth();
  
  const [rally, setRally] = useState<any>(null);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>読み込み中...</div>;
  }

  if (!rally) {
    return <div style={{ padding: 40, textAlign: "center", paddingTop: "100px" }}>ルートが見つかりませんでした</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={`/routes/${rally.id}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
          ← 戻る
        </Link>
        <h1 className={styles.title}>{rally.title}</h1>
      </header>
      
      <main className={styles.mapContainer}>
        <RouteMapUI 
          rally={rally} 
          spots={spots} 
          activeSpotId={activeSpotId} 
        />
      </main>
    </div>
  );
}
