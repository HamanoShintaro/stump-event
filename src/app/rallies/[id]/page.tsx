"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockRallies } from "@/data/mock";
import { useAcquiredStamps } from "@/hooks/useAcquiredStamps";
import styles from "./page.module.css";

export default function RallyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const rally = mockRallies.find(r => r.id === resolvedParams.id);
  const { hasStamp, isLoaded } = useAcquiredStamps();

  if (!rally) return notFound();

  return (
    <div className="container">
      <header>
        <Link href="/rallies" className={"btn-primary " + styles.backBtn}>
          ← 戻る
        </Link>
      </header>

      <main className={styles.main}>
        <div className={"glass-card " + styles.headerCard}>
          <div className={styles.imageBox} style={{ backgroundImage: `url(${rally.imageUrl})` }} />
          <div className={styles.headerInfo}>
             <div className={styles.regionTag}>{rally.region}</div>
             <h1 className={styles.title}>{rally.title}</h1>
             <p className={styles.description}>{rally.description}</p>
             <div style={{ marginTop: "auto" }}>
               <button className="btn-primary" style={{ width: "100%", fontSize: "1.1rem", padding: "16px", marginBottom: "12px" }}>
                 このラリーに参加する
               </button>
               <Link href={`/rallies/${rally.id}/map`} className="btn-primary" style={{ width: "100%", textAlign: "center", background: "rgba(255,255,255,0.2)", color: "inherit", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "none", display: "block" }}>
                 🗺 マップを見る
               </Link>
             </div>
          </div>
        </div>

        <section className={styles.spotSection}>
          <h2 className={styles.sectionTitle}>スタンプラリーマップ</h2>
          
          <div className={styles.interactiveMapWrapper}>
            <img 
              src={rally.illustrationMapUrl || rally.imageUrl} 
              alt="マップ" 
              className={styles.mapImage} 
            />
            <div className={styles.mapOverlay}></div>
            
            {!rally.hidePinsOnMap && rally.spots.map((spot, index) => {
              const x = spot.mapX ?? 50;
              const y = spot.mapY ?? 50;
              const isAcquired = isLoaded && hasStamp(spot.id);
              
              return (
                <Link 
                  key={spot.id}
                  href={`/rallies/${rally.id}/spot/${spot.id}`} 
                  className={styles.mapPin}
                  style={{ left: `${x}%`, top: `${y}%`, zIndex: isAcquired ? 15 : 10 }}
                >
                  {isAcquired ? (
                    <div style={{ animation: "stampPop 0.5s ease-out forwards", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <img 
                        src={spot.stampImageUrl || `https://api.dicebear.com/7.x/shapes/svg?seed=${spot.id}&backgroundColor=transparent`} 
                        alt="スタンプ" 
                        style={{ width: "80px", height: "80px", objectFit: "contain", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))", transform: "rotate(-10deg)" }} 
                      />
                    </div>
                  ) : (
                    <>
                      <div className={styles.pinIcon}>📍</div>
                      <div className={styles.pinLabel}>
                        <span className={styles.pinIndex}>{index + 1}</span>
                        {spot.name}
                      </div>
                    </>
                  )}
                </Link>
              );
            })}
          </div>
          
          {!rally.hidePinsOnMap && (
            <p style={{ marginTop: "16px", textAlign: "center", opacity: 0.8, fontSize: "0.9rem" }}>
              ピンをタップして詳細を開きます。スタンプを獲得するとマークが変わります！
            </p>
          )}

          <h2 className={styles.sectionTitle} style={{ marginTop: "40px" }}>スポット一覧</h2>
          <div className={styles.spotList}>
            {rally.spots.map((spot, index) => {
              const isAcquired = isLoaded && hasStamp(spot.id);
              return (
                <div key={spot.id} className={"glass-card " + styles.spotCard} style={{ position: "relative", overflow: "hidden" }}>
                  {isAcquired && (
                    <img 
                      src={spot.stampImageUrl || `https://api.dicebear.com/7.x/shapes/svg?seed=${spot.id}&backgroundColor=transparent`} 
                      alt="スタンプ" 
                      style={{ 
                        position: "absolute", 
                        right: "-20px", 
                        top: "50%", 
                        transform: "translateY(-50%) rotate(-15deg)", 
                        width: "160px", 
                        height: "160px", 
                        objectFit: "contain", 
                        opacity: 0.4, 
                        pointerEvents: "none",
                        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))"
                      }} 
                    />
                  )}
                  <div className={styles.spotHeader} style={{ position: "relative", zIndex: 2 }}>
                    <div className={styles.spotIndex}>{index + 1}</div>
                    <h3 className={styles.spotName}>{spot.name}</h3>
                  </div>
                  <p className={styles.spotDesc} style={{ whiteSpace: "pre-wrap", position: "relative", zIndex: 2 }}>{spot.description}</p>
                  <div className={styles.spotActions} style={{ position: "relative", zIndex: 2 }}>
                    <Link href={`/rallies/${rally.id}/spot/${spot.id}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
                      詳細 / スタンプ獲得
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
