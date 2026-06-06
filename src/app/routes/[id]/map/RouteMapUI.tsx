"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Footprints, Map as MapIcon, Star } from "lucide-react";
import { getDistance } from "geolib";
import styles from "./page.module.css";

// LeafletアイコンのNext.js用のバグ修正
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// カスタムアイコン：現在地用
const UserLocationIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// カスタムアイコン：目的地ピン (🎯)
const ActiveSpotIcon = L.divIcon({
  html: `
    <div style="
      background-color: var(--primary-color, #C7442E); 
      border: 3px solid white; 
      width: 44px; height: 44px; 
      border-radius: 50%; 
      display: flex; justify-content: center; align-items: center; 
      font-size: 20px; 
      box-shadow: 0 4px 12px rgba(199,68,46,0.4);
      position: relative;
      animation: pulseMarker 2s infinite ease-in-out;
    ">
      🎯
      <div style="
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 8px solid var(--primary-color, #C7442E);
      "></div>
    </div>
  `,
  className: 'active-spot-pin',
  iconSize: [44, 52],
  iconAnchor: [22, 52]
});

// カスタムアイコン：通常のスポットピン (順番番号)
const getNumberIcon = (index: number) => {
  return L.divIcon({
    html: `
      <div style="
        background-color: white; 
        border: 3px solid var(--secondary-color, #111111); 
        width: 36px; height: 36px; 
        border-radius: 50%; 
        display: flex; justify-content: center; align-items: center; 
        font-size: 14px; 
        font-weight: 800;
        color: var(--secondary-color, #111111);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        position: relative;
      ">
        ${index}
        <div style="
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid var(--secondary-color, #111111);
        "></div>
      </div>
    `,
    className: 'spot-number-pin',
    iconSize: [36, 43],
    iconAnchor: [18, 43]
  });
};

// カスタムアイコン：ナビゲーション用矢印（現在地から目的地を指す）
const getArrowIcon = (angle: number) => {
  return L.divIcon({
    html: `
      <div style="
        transform: rotate(${angle}deg);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
      ">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="
          filter: drop-shadow(0 2px 5px rgba(0,0,0,0.35));
          animation: arrowGuideFloat 1.2s infinite ease-in-out;
        ">
          <!-- 目的地へ向かう上向き矢印 -->
          <path d="M12 2L3 11H8V21H16V11H21L12 2Z" fill="var(--primary-color, #C7442E)" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>
      </div>
    `,
    className: 'nav-arrow-icon',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
};

// 現在地が特定された際、マップをそこへセンタリングするコンポーネント
function MapController({ center, bounds }: { center: [number, number] | null; bounds: L.LatLngBounds | null }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15, animate: true, duration: 1.2 });
    } else if (center) {
      map.setView(center, 14, { animate: true });
    }
  }, [center, bounds, map]);
  return null;
}

interface Spot {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  lat: number;
  lng: number;
}

interface RouteMapUIProps {
  rally: any;
  spots: Spot[];
  activeSpotId: string | null;
}

export default function RouteMapUI({ rally, spots, activeSpotId }: RouteMapUIProps) {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserPos([pos.coords.latitude, pos.coords.longitude]),
        (err) => console.log("User location access denied or failed", err)
      );
    }
  }, []);

  // 地図の初期境界 (Bounds) を算出
  let mapBounds: L.LatLngBounds | null = null;
  const activeSpot = spots.find(s => s.id === activeSpotId);

  if (activeSpot && userPos) {
    // 行き先（目的地）が設定され、現在地も取得できている場合は、その2点にフォーカス
    mapBounds = L.latLngBounds([
      L.latLng(userPos[0], userPos[1]),
      L.latLng(activeSpot.lat, activeSpot.lng)
    ]);
  } else if (spots.length > 0) {
    // 通常時または現在地未取得時は、ルート全体のピンと現在地を含む境界にする
    const latLngs = spots.map(s => L.latLng(s.lat, s.lng));
    if (userPos) {
      latLngs.push(L.latLng(userPos[0], userPos[1]));
    }
    mapBounds = L.latLngBounds(latLngs);
  }

  const defaultCenter: [number, number] = spots.length > 0 
    ? [spots.reduce((sum, s) => sum + s.lat, 0) / spots.length, spots.reduce((sum, s) => sum + s.lng, 0) / spots.length] 
    : [35.6812, 139.7671];

  const trajectoryPath = spots.map(s => [s.lat, s.lng] as [number, number]);

  // 現在地から目的地への角度（方位）と中間地点を計算
  let navLinePath: [number, number][] = [];
  let navArrowPos: [number, number] | null = null;
  let navArrowAngle = 0;

  if (userPos && activeSpot) {
    navLinePath = [userPos, [activeSpot.lat, activeSpot.lng]];
    
    // 現在地と目的地の緯度・経度の中間地点
    navArrowPos = [
      (userPos[0] + activeSpot.lat) / 2,
      (userPos[1] + activeSpot.lng) / 2
    ];
    
    // 方位角の計算
    const dy = activeSpot.lat - userPos[0];
    const dx = activeSpot.lng - userPos[1];
    navArrowAngle = Math.atan2(dx, dy) * (180 / Math.PI);
  }

  // 目的地までの距離を計算
  let distanceToActive: number | null = null;
  if (userPos && activeSpot) {
    distanceToActive = getDistance(
      { latitude: userPos[0], longitude: userPos[1] },
      { latitude: activeSpot.lat, longitude: activeSpot.lng }
    );
  }

  // 選択したスポットまでの距離を計算
  let distanceToSelected: number | null = null;
  if (userPos && selectedSpot) {
    distanceToSelected = getDistance(
      { latitude: userPos[0], longitude: userPos[1] },
      { latitude: selectedSpot.lat, longitude: selectedSpot.lng }
    );
  }

  const formatDistance = (meters: number) => {
    if (meters >= 1000) {
      return `あと ${(meters / 1000).toFixed(1)} km`;
    }
    return `あと ${Math.round(meters)} m`;
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <style>{`
        @keyframes pulseMarker {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); box-shadow: 0 6px 18px rgba(199,68,46,0.6); }
          100% { transform: scale(1); }
        }
        .animated-polyline {
          stroke-dasharray: 10, 10;
          animation: mapdash 1.2s linear infinite;
        }
        @keyframes arrowGuideFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -6px, 0); }
        }
        @keyframes mapdash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>

      {/* 地図コンテナ */}
      <MapContainer 
        center={defaultCenter} 
        zoom={14} 
        style={{ width: "100%", height: "100%", zIndex: 1 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <MapController center={userPos} bounds={mapBounds} />

        {/* ユーザー現在地 */}
        {userPos && (
          <Marker position={userPos} icon={UserLocationIcon}>
            <Popup>
              <div style={{ fontWeight: "700" }}>📍 あなたの現在地</div>
            </Popup>
          </Marker>
        )}

        {/* スポット同士を繋ぐ軌跡ライン */}
        {trajectoryPath.length > 1 && (
          <Polyline 
            positions={trajectoryPath} 
            color="var(--primary-color, #C7442E)" 
            weight={4} 
            opacity={0.7}
            className="animated-polyline"
          />
        )}

        {/* 現在地から目的地へのナビゲーションライン ＆ 向きを示す矢印マーカー */}
        {navLinePath.length > 0 && navArrowPos && (
          <>
            <Polyline 
              positions={navLinePath} 
              color="var(--primary-color, #C7442E)" 
              weight={3} 
              opacity={0.85}
              dashArray="6, 8"
            />
            <Marker 
              position={navArrowPos} 
              icon={getArrowIcon(navArrowAngle)}
              interactive={false}
            />
          </>
        )}

        {/* 各スポットのピン */}
        {spots.map((spot, index) => {
          const isActive = spot.id === activeSpotId;
          return (
            <Marker 
              key={spot.id} 
              position={[spot.lat, spot.lng]} 
              icon={isActive ? ActiveSpotIcon : getNumberIcon(index + 1)}
              eventHandlers={{
                click: () => setSelectedSpot(spot)
              }}
            >
              <Popup>
                <div style={{ fontWeight: "700" }}>{spot.name}</div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {selectedSpot ? (
        <div className={"glass-card " + styles.infoOverlay}>
          <button 
            onClick={() => setSelectedSpot(null)}
            style={{ 
              position: "absolute", top: "12px", right: "12px", 
              background: "rgba(0,0,0,0.05)", border: "none", 
              width: "24px", height: "24px", borderRadius: "50%", 
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", fontWeight: "bold"
            }}
          >
            ✕
          </button>
          
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {selectedSpot.image_url && (
              <div style={{
                width: "80px", height: "80px", borderRadius: "12px",
                backgroundImage: `url(${selectedSpot.image_url})`,
                backgroundSize: "cover", backgroundPosition: "center",
                flexShrink: 0
              }} />
            )}
            <div>
              <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "800", color: "var(--text-color)" }}>
                {selectedSpot.name}
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "#666" }}>
                {activeSpotId === selectedSpot.id 
                  ? "🎯 現在の目的地です" 
                  : "スポット詳細をピンから確認中"}
                {distanceToSelected !== null && ` (${formatDistance(distanceToSelected)})`}
              </p>
            </div>
          </div>
        </div>
      ) : activeSpot ? (
        /* 目的地が設定されている場合のデフォルトナビ表示 */
        <div className={"glass-card " + styles.infoOverlay} style={{ borderLeft: "4px solid var(--primary-color)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "1.5rem" }}>🎯</span>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#888", fontWeight: "600", letterSpacing: "0.5px" }}>現在の目的地</div>
                <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--text-color)", marginTop: "2px" }}>{activeSpot.name}</div>
              </div>
            </div>
            {distanceToActive !== null && (
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: "0.75rem", color: "#888", fontWeight: "600" }}>目的地まで</div>
                <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--primary-color)", marginTop: "2px" }}>
                  {formatDistance(distanceToActive)}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={"glass-card " + styles.infoOverlay}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#5C4E43", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
            <MapIcon size={18} color="var(--primary-color)" />
            しるしピンをタップするとスポット情報を確認できます。
          </p>
        </div>
      )}
    </div>
  );
}
