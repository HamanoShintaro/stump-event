"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

// Fix standard marker icon issue in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// カスタムアイコン（現在地用）
const UserLocationIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// カスタムアイコン（カテゴリごとのラリー用）
const getCategoryIcon = (category: string) => {
  let emoji = "📍";
  let bgColor = "var(--primary-color)";

  switch (category) {
    case "食べたい": emoji = "🍔"; bgColor = "#E98A5C"; break;
    case "見たい": emoji = "👀"; bgColor = "#5C9BE9"; break;
    case "体験したい": emoji = "🎨"; bgColor = "#9D5CE9"; break;
    case "集めたい": emoji = "💎"; bgColor = "#5CE9A6"; break;
    case "推しに触れたい": emoji = "💖"; bgColor = "#E95C9A"; break;
    case "学びたい": emoji = "📚"; bgColor = "#E9D25C"; break;
    case "癒されたい": emoji = "♨️"; bgColor = "#8CE95C"; break;
    case "達成したい": emoji = "🏆"; bgColor = "#FFD700"; break;
    case "人と過ごしたい": emoji = "🤝"; bgColor = "#5CE9DF"; break;
    case "地域を感じたい": emoji = "🏮"; bgColor = "#D9655B"; break;
    default: emoji = "🚩"; bgColor = "#D9655B"; break;
  }

  return L.divIcon({
    html: `
      <div style="
        background-color: white; 
        border: 3px solid ${bgColor}; 
        width: 44px; height: 44px; 
        border-radius: 50%; 
        display: flex; justify-content: center; align-items: center; 
        font-size: 20px; 
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        position: relative;
      ">
        ${emoji}
        <div style="
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid ${bgColor};
        "></div>
      </div>
    `,
    className: 'category-pin',
    iconSize: [44, 52],
    iconAnchor: [22, 52]
  });
};

// カスタムアイコン（スポット）
const SpotIcon = L.divIcon({
  html: '<div style="font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); text-align: center; line-height: 1; margin-top: -12px; margin-left: -12px;">📍</div>',
  className: 'spot-icon',
  iconSize: [0, 0], // CSS overrides
});

// A component to recenter the map when user location is found
function LocationMarker({ position }: { position: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13);
    }
  }, [position, map]);

  return position === null ? null : (
    <Marker position={position} icon={UserLocationIcon} zIndexOffset={1000}>
      <Popup>
        <div style={{ fontWeight: "bold", textAlign: "center" }}>📍 あなたの現在地</div>
      </Popup>
    </Marker>
  );
}

// Focus map on selected rally's spots
function RallyFocusController({ selectedRally }: { selectedRally: any }) {
  const map = useMap();
  useEffect(() => {
    if (selectedRally && selectedRally.spots && selectedRally.spots.length > 0) {
      const bounds = L.latLngBounds(selectedRally.spots.map((s: any) => s.pos));
      map.flyToBounds(bounds, { padding: [50, 50], duration: 1.0 });
    }
  }, [selectedRally, map]);
  return null;
}

export default function MapUI() {
  const router = useRouter();
  const [rallies, setRallies] = useState<any[]>([]);
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  
  // Animation States
  const [selectedRally, setSelectedRally] = useState<any | null>(null);
  const [drawnSpots, setDrawnSpots] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  // PostGIS EWKB 型を [lat, lng] に変換する
  const parseLocation = (loc: any): [number, number] | null => {
    if (!loc || typeof loc !== 'string') return null;
    if (loc.startsWith("0101000020E6100000")) {
      const lonHex = loc.substring(18, 34);
      const latHex = loc.substring(34, 50);
      const parseDouble = (hexStr: string) => {
        const bytes = new Uint8Array((hexStr.match(/.{1,2}/g) || []).map(byte => parseInt(byte, 16)));
        const view = new DataView(bytes.buffer);
        return view.getFloat64(0, true);
      };
      try { return [parseDouble(latHex), parseDouble(lonHex)]; } catch (e) { return null; }
    }
    return null;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserPos([pos.coords.latitude, pos.coords.longitude]),
        (err) => setUserPos([35.9522665, 139.6833445])
      );
    } else {
      setUserPos([35.9522665, 139.6833445]);
    }

    const fetchRallies = async () => {
      const { data, error } = await supabase.from("rallies").select("*, spots(id, name, order_index, location)");
      if (!error && data) {
        const mapRallies = data.map((rally: any) => {
          let totalLat = 0, totalLng = 0, validSpots = 0;
          if (rally.spots && rally.spots.length > 0) {
            rally.spots = rally.spots.map((spot: any) => {
              const pos = parseLocation(spot.location);
              if (pos) {
                totalLat += pos[0];
                totalLng += pos[1];
                validSpots++;
                return { ...spot, pos };
              }
              return null;
            }).filter(Boolean);
          }
          if (validSpots > 0) {
            return {
              ...rally,
              avgPos: [totalLat / validSpots, totalLng / validSpots] as [number, number]
            };
          }
          return null;
        }).filter(Boolean);
        setRallies(mapRallies);
      }
    };
    fetchRallies();
  }, []);

  // アニメーションロジック
  useEffect(() => {
    if (selectedRally && selectedRally.spots && selectedRally.spots.length > 0) {
      const sortedSpots = [...selectedRally.spots].sort((a: any, b: any) => a.order_index - b.order_index);
      setDrawnSpots([sortedSpots[0]]); // 最初のスポットを置く
      setShowModal(false);
      
      let i = 1;
      const interval = setInterval(() => {
        if (i < sortedSpots.length) {
          setDrawnSpots(prev => {
            const nextSpot = sortedSpots[i];
            if (nextSpot && !prev.some(s => s && s.id === nextSpot.id)) {
              return [...prev, nextSpot];
            }
            return prev;
          });
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowModal(true), 600); // すべて描き終わったらモーダル表示
        }
      }, 700); // 700msごとに次のスポットへ
      
      return () => clearInterval(interval);
    } else {
      setDrawnSpots([]);
      setShowModal(false);
    }
  }, [selectedRally]);

  if (!userPos) {
    return <div style={{ padding: "40px", textAlign: "center", color: "#888" }}>マップを読み込み中...</div>;
  }

  return (
    <div style={{ width: "100%", height: "calc(100vh - 220px)", minHeight: "450px", borderRadius: "16px", overflow: "hidden", border: "2px solid #EBE5D9", zIndex: 1, position: "relative" }}>
      <style>{`
        @keyframes slideUpMapModal {
          from { transform: translateY(150%) translateX(-50%); opacity: 0; }
          to { transform: translateY(0) translateX(-50%); opacity: 1; }
        }
        .animated-polyline {
          stroke-dasharray: 10, 10;
          animation: mapdash 1s linear infinite;
        }
        @keyframes mapdash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>

      <MapContainer center={userPos} zoom={13} style={{ width: "100%", height: "100%", zIndex: 1 }} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <LocationMarker position={userPos} />
        <RallyFocusController selectedRally={selectedRally} />

        {/* ラリー未選択時：すべてのカテゴリーごとのラリーピンを表示 */}
        {!selectedRally && rallies.map((rally) => {
          if (!rally.avgPos) return null;
          return (
            <Marker 
              key={rally.id} 
              position={rally.avgPos} 
              icon={getCategoryIcon(rally.category)}
              eventHandlers={{ click: () => setSelectedRally(rally) }}
            />
          );
        })}

        {/* ラリー選択時：スポットのルートアニメーション */}
        {selectedRally && (
          <>
            <Polyline 
              positions={drawnSpots.filter(s => s && s.pos).map(s => s.pos)} 
              color="var(--primary-color)" 
              weight={4} 
              opacity={0.8}
              className="animated-polyline"
            />
            {drawnSpots.filter(s => s && s.pos).map(spot => (
              <Marker key={spot.id} position={spot.pos} icon={SpotIcon}>
                <Popup>{spot.name}</Popup>
              </Marker>
            ))}
          </>
        )}
      </MapContainer>

      {/* ラリー詳細モーダル（アニメーション後に出現） */}
      {showModal && selectedRally && (
        <div style={{
          position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
          width: "calc(100% - 40px)", maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(12px)",
          borderRadius: "24px", padding: "20px", zIndex: 1000,
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.6)",
          display: "flex", flexDirection: "column", gap: "12px",
          animation: "slideUpMapModal 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
        }}>
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedRally(null); }}
            style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.5)", color: "white", border: "none", width: "28px", height: "28px", borderRadius: "50%", cursor: "pointer", fontWeight: "bold", zIndex: 2 }}
          >✕</button>
          
          <img src={selectedRally.thumbnail_url} alt={selectedRally.title} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "12px", background: "#f0f0f0" }} />
          
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-color)", margin: "0 0 4px" }}>{selectedRally.title}</h3>
            <p style={{ fontSize: "0.85rem", color: "#888", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{selectedRally.description}</p>
          </div>
          
          <button 
            onClick={() => router.push(`/rallies/${selectedRally.id}`)}
            className="btn-primary"
            style={{ width: "100%", padding: "14px", marginTop: "4px" }}
          >
            このラリーに挑戦する！
          </button>
        </div>
      )}
    </div>
  );
}
