"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { mockRallies } from "@/data/mock";
import { MapPolyline } from "@/components/MapPolyline";
import styles from "./page.module.css";

export default function MapPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const rally = mockRallies.find(r => r.id === resolvedParams.id);
  if (!rally) return notFound();

  // Calculate center based on spots
  const centerLat = rally.spots.reduce((sum, spot) => sum + spot.lat, 0) / rally.spots.length;
  const centerLng = rally.spots.reduce((sum, spot) => sum + spot.lng, 0) / rally.spots.length;

  // Mocking trajectory path (visited spots)
  const trajectoryPath = rally.spots.map(s => ({ lat: s.lat, lng: s.lng }));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={`/rallies/${rally.id}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
          ← 戻る
        </Link>
        <h1 className={styles.title}>{rally.title}</h1>
      </header>
      
      <main className={styles.mapContainer}>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <Map 
            defaultCenter={{ lat: centerLat, lng: centerLng }} 
            defaultZoom={13}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId="DEMO_MAP_ID"
          >
            {rally.spots.map((spot, index) => (
              <AdvancedMarker 
                key={spot.id} 
                position={{ lat: spot.lat, lng: spot.lng }} 
                title={spot.name}
              >
                <div className={styles.marker}>
                  {index + 1}
                </div>
              </AdvancedMarker>
            ))}
            
            <MapPolyline path={trajectoryPath} strokeColor="#f72585" strokeWeight={3} />
          </Map>
        </APIProvider>
      </main>
      
      <div className={"glass-card " + styles.infoOverlay}>
        <p>💡 現在地から近いスタンプポイントを探すことができます。線は進行履歴（予測）です。</p>
      </div>
    </div>
  );
}
