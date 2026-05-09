"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockRallies } from "@/data/mock";
import { QRScanner } from "@/components/QRScanner";
import { getDistance } from "geolib";
import { useAcquiredStamps } from "@/hooks/useAcquiredStamps";
import styles from "./page.module.css";

const MAX_DISTANCE_METERS = 100; // 100m within spot to check in

export default function SpotCheckInPage({ params }: { params: Promise<{ id: string; spotId: string }> }) {
  const resolvedParams = use(params);
  const rally = mockRallies.find(r => r.id === resolvedParams.id);
  const spot = rally?.spots.find(s => s.id === resolvedParams.spotId);
  
  if (!spot) return notFound();

  const { addStamp, hasStamp, isLoaded } = useAcquiredStamps();
  const [locationError, setLocationError] = useState<string | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [stampAcquired, setStampAcquired] = useState(false);

  // Set initial status on load if already acquired
  useEffect(() => {
    if (isLoaded && hasStamp(spot.id)) {
      setStampAcquired(true);
    }
  }, [isLoaded, hasStamp, spot.id]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("お使いのブラウザはGPSをサポートしていません。");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocationError(null);
        const dist = getDistance(
          { latitude: position.coords.latitude, longitude: position.coords.longitude },
          { latitude: spot.lat, longitude: spot.lng }
        );
        setDistance(dist);
      },
      (error) => {
        setLocationError("現在地を取得できませんでした。GPSをオンにしてください。");
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [spot.lat, spot.lng]);

  const isLocationValid = distance !== null && distance <= MAX_DISTANCE_METERS;

  const handleScanSuccess = (decodedText: string) => {
    // In real app, avoid multiple triggers
    if (stampAcquired) return;
    
    if (decodedText === spot.qrHash) {
      setIsCheckingIn(true);
      // Mock API call delay
      setTimeout(() => {
        addStamp(spot.id);
        setStampAcquired(true);
        setIsCheckingIn(false);
      }, 1000);
    } else {
      alert("このスポットのQRコードではないようです。");
    }
  };

  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <header style={{ padding: "20px 0" }}>
        <Link href={`/rallies/${resolvedParams.id}`} className={"btn-primary " + styles.backBtn}>
          ← 戻る
        </Link>
      </header>

      <main className={styles.main}>
        <div className={"glass-card " + styles.spotInfoCard}>
          <h1 className={styles.title}>{spot.name}</h1>
          <p className={styles.description}>{spot.description}</p>
        </div>

        {stampAcquired ? (
          <div className={"glass-card " + styles.successCard}>
            <h2>🎉 スタンプ獲得！</h2>
            <div className={styles.stampImageContainer}>
              <img 
                src={spot.stampImageUrl || `https://api.dicebear.com/7.x/shapes/svg?seed=${spot.id}&backgroundColor=transparent`} 
                alt="獲得スタンプ" 
                className={styles.stampImage} 
              />
            </div>
            <p>{spot.name}のスタンプをゲットしました！</p>
            <Link href={`/rallies/${resolvedParams.id}`} className={"btn-primary " + styles.glowBtn}>
              次のポイントへ進む
            </Link>
          </div>
        ) : (
          <div className={"glass-card " + styles.scannerSection}>
            <h2 className={styles.sectionTitle}>チェックイン</h2>
            
            {locationError && <div className={styles.errorBox}>{locationError}</div>}
            
            {distance !== null ? (
              <div className={styles.distanceBox}>
                <p>現在の距離: <strong>約 {distance}m</strong></p>
                {isLocationValid ? (
                  <p style={{ color: "green", fontWeight: "bold" }}>チェックイン可能です！QRをスキャンしてください。</p>
                ) : (
                  <p style={{ color: "red", fontWeight: "bold" }}>あと {distance - MAX_DISTANCE_METERS}m 近づいてください。</p>
                )}
              </div>
            ) : !locationError ? (
              <p>現在地を取得中...</p>
            ) : null}

            {isLocationValid && !isCheckingIn && (
              <div className={styles.scannerWrapper}>
                <QRScanner onScanSuccess={handleScanSuccess} />
                <p style={{ marginTop: "12px", opacity: 0.8, fontSize: "0.9rem" }}>カメラを許可してQRコードを読み取ってください。</p>
              </div>
            )}

            {isCheckingIn && <div style={{ padding: "40px 0", textAlign: "center" }}><h3>確認中...</h3></div>}
            
            <div className={styles.demoOverride} onClick={() => handleScanSuccess(spot.qrHash)}>
              🧪 [Demo] 強制スタンプ獲得テスト
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
