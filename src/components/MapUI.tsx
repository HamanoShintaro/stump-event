"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Compass,
  Footprints,
  MapPin,
  Clock,
  Bookmark,
  CheckCircle2,
  BookOpen,
  LocateFixed,
  X,
} from "lucide-react";
import {
  useDiscoveryMap,
  DiscoveryRoute,
  VisitedFootprint,
} from "@/hooks/useDiscoveryMap";
import {
  CategoryShuinIcon,
  getCategorySvgMarkup,
  getStampSealSvgMarkup,
  getUserLocationPinMarkup,
} from "@/components/icons/ShuinIcons";

// カスタムアイコン（現在地用・単色SVGピン）
const UserLocationIcon = L.divIcon({
  html: getUserLocationPinMarkup(),
  className: "user-location-pin",
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -16],
});

// カスタムアイコン（カテゴリごとのルートピン＋進捗・踏破・保存バッジ）
const getRoutePinIcon = (route: DiscoveryRoute) => {
  const bgColor = "var(--primary-color)";
  const { stampedCount, totalCount, isCompleted, isInProgress } = route.progress;
  const iconColor = isCompleted ? "#8C6A1D" : "var(--primary-color)";
  const svgIcon = getCategorySvgMarkup(route.category, iconColor, 21, 1.9);
  let badgeHtml = "";

  if (isCompleted) {
    badgeHtml = `
      <div style="
        position: absolute;
        top: -6px;
        right: -8px;
        background: var(--primary-color);
        color: #fff;
        border: 1.5px solid var(--accent-color);
        border-radius: 6px;
        padding: 1px 5px;
        font-size: 10px;
        font-weight: 800;
        line-height: 1.2;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        white-space: nowrap;
      ">済</div>
    `;
  } else if (stampedCount > 0 || isInProgress) {
    badgeHtml = `
      <div style="
        position: absolute;
        top: -6px;
        right: -10px;
        background: #FFFDF9;
        color: var(--primary-color);
        border: 1.5px solid var(--primary-color);
        border-radius: 6px;
        padding: 1px 5px;
        font-size: 10px;
        font-weight: 800;
        line-height: 1.2;
        box-shadow: 0 2px 6px rgba(0,0,0,0.18);
        white-space: nowrap;
      ">${stampedCount}/${totalCount}</div>
    `;
  } else if (route.isBookmarked) {
    badgeHtml = `
      <div style="
        position: absolute;
        top: -6px;
        right: -6px;
        background: #FFFDF9;
        color: #6E5314;
        border: 1.5px solid var(--accent-color);
        border-radius: 6px;
        padding: 1px 4px;
        font-size: 9px;
        font-weight: 800;
        line-height: 1.2;
        box-shadow: 0 2px 5px rgba(0,0,0,0.15);
      ">栞</div>
    `;
  }

  return L.divIcon({
    html: `
      <div style="
        background-color: #FFFDF9;
        border: 2.5px solid ${isCompleted ? "var(--accent-color)" : bgColor};
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.18);
        position: relative;
      ">
        ${svgIcon}
        ${badgeHtml}
        <div style="
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid ${isCompleted ? "var(--accent-color)" : bgColor};
        "></div>
      </div>
    `,
    className: "category-pin",
    iconSize: [44, 52],
    iconAnchor: [22, 52],
  });
};

// カスタムアイコン（自分の足跡レイヤー用 SHUIN 印影ピン・単色SVG）
const getFootprintPinIcon = (fp: VisitedFootprint, isSelected: boolean) => {
  const sealSvg = getStampSealSvgMarkup(
    "var(--primary-color)",
    isSelected ? 22 : 20,
    1.95
  );
  const visitBadge =
    fp.visitCount > 1
      ? `<div style="
          position: absolute;
          top: -5px;
          right: -7px;
          background: var(--primary-color);
          color: #fff;
          border: 1.5px solid var(--accent-color);
          border-radius: 10px;
          padding: 1px 5px;
          font-size: 10px;
          font-weight: 800;
          line-height: 1.2;
          box-shadow: 0 2px 5px rgba(0,0,0,0.22);
        ">×${fp.visitCount}</div>`
      : "";

  return L.divIcon({
    html: `
      <div style="
        background-color: #FFFDF9;
        border: ${isSelected ? "3px solid var(--primary-color)" : "2px solid var(--accent-color)"};
        width: ${isSelected ? "48px" : "42px"};
        height: ${isSelected ? "48px" : "42px"};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 12px rgba(199, 68, 46, 0.25);
        position: relative;
        transform: ${isSelected ? "scale(1.08)" : "rotate(-4deg)"};
        transition: transform 0.2s ease;
      ">
        ${sealSvg}
        ${visitBadge}
      </div>
    `,
    className: "footprint-pin",
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });
};

// カスタムアイコン（スポット）
const getOrderedSpotIcon = (orderIndex: number) =>
  L.divIcon({
    html: `
      <div style="
        background: var(--primary-color);
        color: #fff;
        border: 2px solid #FFFDF9;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 800;
        box-shadow: 0 3px 8px rgba(0,0,0,0.25);
      ">${orderIndex}</div>
    `,
    className: "spot-icon",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });

// A component to recenter the map when user location is found or explicitly requested
function LocationMarker({
  position,
  recenter,
}: {
  position: [number, number] | null;
  recenter: number;
}) {
  const map = useMap();
  const centered = useRef(false);
  const lastRecenterRef = useRef(0);
  useEffect(() => {
    if (position && !centered.current) {
      map.flyTo(position, 14);
      centered.current = true;
    }
  }, [position, map]);
  useEffect(() => {
    // ユーザーが「現在地へ」ボタンを押した時のみ（GPS更新では発火させない）
    if (recenter > 0 && recenter !== lastRecenterRef.current && position) {
      lastRecenterRef.current = recenter;
      map.flyTo(position, 15);
    }
  }, [recenter, position, map]);

  return position === null ? null : (
    <Marker position={position} icon={UserLocationIcon} zIndexOffset={1000}>
      <Popup>
        <div style={{ fontWeight: "bold", textAlign: "center" }}>あなたの現在地</div>
      </Popup>
    </Marker>
  );
}

// Focus map on selected route's spots or footprints layer ONLY when the selection ID or mode actually changes
function MapViewportController({
  selectedRally,
  selectedFootprint,
  mapLayerMode,
  visitedFootprints,
}: {
  selectedRally: DiscoveryRoute | null;
  selectedFootprint: VisitedFootprint | null;
  mapLayerMode: "routes" | "footprints";
  visitedFootprints: VisitedFootprint[];
}) {
  const map = useMap();
  const lastRallyIdRef = useRef<string | null>(null);
  const lastFootprintIdRef = useRef<string | null>(null);
  const lastLayerModeRef = useRef<"routes" | "footprints">("routes");

  useEffect(() => {
    const currentId = selectedRally?.id || null;
    if (currentId !== lastRallyIdRef.current) {
      lastRallyIdRef.current = currentId;
      if (selectedRally && selectedRally.spots && selectedRally.spots.length > 0) {
        const bounds = L.latLngBounds(selectedRally.spots.map((s) => s.pos));
        map.flyToBounds(bounds, { padding: [70, 70], duration: 1.0, maxZoom: 16 });
      }
    }
  }, [selectedRally, map]);

  useEffect(() => {
    const currentFpId = selectedFootprint?.spotId || null;
    if (currentFpId !== lastFootprintIdRef.current) {
      lastFootprintIdRef.current = currentFpId;
      if (selectedFootprint) {
        const targetZoom = Math.max(map.getZoom(), 16);
        map.flyTo([selectedFootprint.lat, selectedFootprint.lng], targetZoom, { duration: 0.8 });
      }
    }
  }, [selectedFootprint, map]);

  useEffect(() => {
    if (mapLayerMode !== lastLayerModeRef.current) {
      lastLayerModeRef.current = mapLayerMode;
      if (mapLayerMode === "footprints" && visitedFootprints.length > 0) {
        const bounds = L.latLngBounds(
          visitedFootprints.map((fp) => [fp.lat, fp.lng] as [number, number])
        );
        map.flyToBounds(bounds, { padding: [80, 80], duration: 1.0, maxZoom: 15 });
      }
    }
  }, [mapLayerMode, visitedFootprints, map]);

  return null;
}

export default function MapUI() {
  const router = useRouter();
  const {
    user,
    userPos,
    recenter,
    triggerRecenter,
    mapLayerMode,
    setMapLayerMode,
    durationFilter,
    setDurationFilter,
    statusFilter,
    setStatusFilter,
    visitedFootprints,
    filteredRoutes,
    nearbyRoutes,
    selectedRally,
    setSelectedRally,
    selectedFootprint,
    setSelectedFootprint,
    drawnSpots,
    showModal,
  } = useDiscoveryMap();

  if (!userPos) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "var(--text-color)", opacity: 0.7 }}>
        マップを読み込み中...
      </div>
    );
  }

  const isAllFiltersDefault = durationFilter === "all" && statusFilter === "all";

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 200px)",
        minHeight: "520px",
        borderRadius: "20px",
        overflow: "hidden",
        border: "2px solid #EBE5D9",
        zIndex: 1,
        position: "relative",
        background: "var(--bg-color)",
      }}
    >
      <style>{`
        @keyframes slideUpMapModal {
          from { transform: translateY(120%) translateX(-50%); opacity: 0; }
          to { transform: translateY(0) translateX(-50%); opacity: 1; }
        }
        .animated-polyline {
          stroke-dasharray: 10, 10;
          animation: mapdash 1s linear infinite;
        }
        @keyframes mapdash {
          to { stroke-dashoffset: -20; }
        }
        .leaflet-tile-pane {
          filter: sepia(0.12) saturate(0.85) brightness(1.02);
        }
        .map-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .map-hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* 上部フローティングコントロールバー（レイヤー切替＆クイック絞り込み） */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          right: "12px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        {/* レイヤー切り替えセグメントコントロール */}
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            background: "rgba(239, 233, 220, 0.96)",
            backdropFilter: "blur(10px)",
            padding: "4px",
            borderRadius: "10px",
            border: "1px solid #E5DEC9",
            boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
            pointerEvents: "auto",
            gap: "4px",
          }}
        >
          <button
            type="button"
            onClick={() => setMapLayerMode("routes")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "none",
              borderRadius: "7px",
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              background: mapLayerMode === "routes" ? "#FFFDF9" : "transparent",
              color: mapLayerMode === "routes" ? "var(--primary-color)" : "var(--text-color)",
              boxShadow:
                mapLayerMode === "routes" ? "0 1px 4px rgba(44, 37, 32, 0.12)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <Compass size={14} strokeWidth={1.75} />
            ルートを探す ({filteredRoutes.length})
          </button>
          <button
            type="button"
            onClick={() => setMapLayerMode("footprints")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "none",
              borderRadius: "7px",
              padding: "7px 14px",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              background: mapLayerMode === "footprints" ? "#FFFDF9" : "transparent",
              color: mapLayerMode === "footprints" ? "var(--primary-color)" : "var(--text-color)",
              boxShadow:
                mapLayerMode === "footprints" ? "0 1px 4px rgba(44, 37, 32, 0.12)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <Footprints size={14} strokeWidth={1.75} />
            自分の足跡 ({visitedFootprints.length}箇所)
          </button>
        </div>

        {/* ルート探索モード時のクイックフィルターチップ */}
        {mapLayerMode === "routes" && (
          <div
            className="map-hide-scrollbar"
            style={{
              display: "flex",
              gap: "6px",
              overflowX: "auto",
              pointerEvents: "auto",
              paddingBottom: "2px",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setDurationFilter("all");
                setStatusFilter("all");
                setSelectedRally(null);
              }}
              style={{
                border: isAllFiltersDefault
                  ? "1px solid #2C2520"
                  : "1px solid #E5DEC9",
                background: isAllFiltersDefault
                  ? "#2C2520"
                  : "rgba(255, 253, 249, 0.94)",
                color: isAllFiltersDefault ? "#FFFDF9" : "var(--text-color)",
                borderRadius: "6px",
                padding: "5px 11px",
                fontSize: "0.74rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              すべて
            </button>

            <button
              type="button"
              onClick={() => {
                setDurationFilter((prev) => (prev === "short" ? "all" : "short"));
                setSelectedRally(null);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border:
                  durationFilter === "short"
                    ? "1px solid #2C2520"
                    : "1px solid #E5DEC9",
                background:
                  durationFilter === "short"
                    ? "#2C2520"
                    : "rgba(255, 253, 249, 0.94)",
                color: durationFilter === "short" ? "#FFFDF9" : "var(--text-color)",
                borderRadius: "6px",
                padding: "5px 11px",
                fontSize: "0.74rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Clock size={12} strokeWidth={1.75} />
              45分以内の気軽な散歩
            </button>

            <button
              type="button"
              onClick={() => {
                setStatusFilter((prev) => (prev === "in_progress" ? "all" : "in_progress"));
                setSelectedRally(null);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border:
                  statusFilter === "in_progress"
                    ? "1px solid #2C2520"
                    : "1px solid #E5DEC9",
                background:
                  statusFilter === "in_progress"
                    ? "#2C2520"
                    : "rgba(255, 253, 249, 0.94)",
                color: statusFilter === "in_progress" ? "#FFFDF9" : "var(--text-color)",
                borderRadius: "6px",
                padding: "5px 11px",
                fontSize: "0.74rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Footprints size={12} strokeWidth={1.75} />
              巡っている途中
            </button>

            <button
              type="button"
              onClick={() => {
                setStatusFilter((prev) => (prev === "bookmarked" ? "all" : "bookmarked"));
                setSelectedRally(null);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border:
                  statusFilter === "bookmarked"
                    ? "1px solid #2C2520"
                    : "1px solid #E5DEC9",
                background:
                  statusFilter === "bookmarked"
                    ? "#2C2520"
                    : "rgba(255, 253, 249, 0.94)",
                color: statusFilter === "bookmarked" ? "#FFFDF9" : "var(--text-color)",
                borderRadius: "6px",
                padding: "5px 11px",
                fontSize: "0.74rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Bookmark size={12} strokeWidth={1.75} />
              保存済み（栞）
            </button>

            <button
              type="button"
              onClick={() => {
                setStatusFilter((prev) => (prev === "completed" ? "all" : "completed"));
                setSelectedRally(null);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border:
                  statusFilter === "completed"
                    ? "1px solid #2C2520"
                    : "1px solid #E5DEC9",
                background:
                  statusFilter === "completed"
                    ? "#2C2520"
                    : "rgba(255, 253, 249, 0.94)",
                color: statusFilter === "completed" ? "#FFFDF9" : "var(--text-color)",
                borderRadius: "6px",
                padding: "5px 11px",
                fontSize: "0.74rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <CheckCircle2 size={12} strokeWidth={1.75} />
              踏破済み
            </button>
          </div>
        )}
      </div>

      <MapContainer
        center={userPos}
        zoom={13}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={userPos} recenter={recenter} />
        <MapViewportController
          selectedRally={selectedRally}
          selectedFootprint={selectedFootprint}
          mapLayerMode={mapLayerMode}
          visitedFootprints={visitedFootprints}
        />

        {/* モード1: ルートを探す */}
        {mapLayerMode === "routes" && !selectedRally &&
          filteredRoutes.map((rally) => {
            if (!rally.avgPos) return null;
            return (
              <Marker
                key={rally.id}
                position={rally.avgPos}
                icon={getRoutePinIcon(rally)}
                eventHandlers={{ click: () => setSelectedRally(rally) }}
              />
            );
          })}

        {/* ルート選択時：スポットのルートアニメーション */}
        {mapLayerMode === "routes" && selectedRally && (
          <>
            <Polyline
              positions={drawnSpots.filter((s) => s && s.pos).map((s) => s.pos)}
              color="var(--primary-color)"
              weight={4}
              opacity={0.85}
              className="animated-polyline"
            />
            {drawnSpots
              .filter((s) => s && s.pos)
              .map((spot, idx) => (
                <Marker
                  key={spot.id}
                  position={spot.pos}
                  icon={getOrderedSpotIcon(idx + 1)}
                >
                  <Popup>
                    <div style={{ fontWeight: 700 }}>{spot.name}</div>
                  </Popup>
                </Marker>
              ))}
          </>
        )}

        {/* モード2: 自分の足跡（押印ライフログピン） */}
        {mapLayerMode === "footprints" &&
          visitedFootprints.map((fp) => (
            <Marker
              key={fp.spotId}
              position={[fp.lat, fp.lng]}
              icon={getFootprintPinIcon(fp, selectedFootprint?.spotId === fp.spotId)}
              eventHandlers={{
                click: () => setSelectedFootprint(fp),
              }}
            />
          ))}
      </MapContainer>

      {/* 現在地へ戻るボタン */}
      <button
        type="button"
        onClick={triggerRecenter}
        aria-label="現在地へ"
        style={{
          position: "absolute",
          right: "14px",
          bottom:
            mapLayerMode === "routes" && !selectedRally && nearbyRoutes.length > 0
              ? "138px"
              : "18px",
          zIndex: 1000,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "#FFFDF9",
          border: "1px solid #EBE5D9",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary-color)",
          lineHeight: 1,
          transition: "bottom 0.25s ease",
        }}
      >
        <LocateFixed size={19} strokeWidth={1.85} />
      </button>

      {/* ルート未選択時：近くのルート・おすすめルート横スクロールカルーセル */}
      {mapLayerMode === "routes" && !selectedRally && nearbyRoutes.length > 0 && (
        <div
          className="map-hide-scrollbar"
          style={{
            position: "absolute",
            bottom: "14px",
            left: "12px",
            right: "12px",
            zIndex: 1000,
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            padding: "4px 2px",
          }}
        >
          {nearbyRoutes.map((route) => (
            <button
              key={route.id}
              type="button"
              onClick={() => setSelectedRally(route)}
              style={{
                flex: "0 0 245px",
                textAlign: "left",
                background: "rgba(255, 253, 249, 0.96)",
                backdropFilter: "blur(10px)",
                border: "1px solid #EBE5D9",
                borderRadius: "16px",
                padding: "10px 12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                cursor: "pointer",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <img
                src={
                  route.thumbnail_url ||
                  "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=300&q=80"
                }
                alt={route.title}
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  flexShrink: 0,
                  background: "#f0ece1",
                }}
              />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--primary-color)",
                    marginBottom: "2px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <MapPin size={11} strokeWidth={1.75} />
                  {route.distanceFromUserKm !== null
                    ? `現在地から約${route.distanceFromUserKm}km`
                    : `${route.prefecture || "街歩き"}`}{" "}
                  ・ 約{route.walkMetrics.estimatedMinutes}分
                </div>
                <div
                  style={{
                    fontSize: "0.84rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "3px",
                  }}
                >
                  {route.title}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#7A6F63",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>全{route.walkMetrics.spotCount}箇所</span>
                  <span>•</span>
                  <span>約{route.walkMetrics.distanceKm.toFixed(1)}km</span>
                  {route.progress.stampedCount > 0 && (
                    <span
                      style={{
                        marginLeft: "auto",
                        color: "var(--primary-color)",
                        fontWeight: 800,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <CheckCircle2 size={11} strokeWidth={1.75} />
                      {route.progress.stampedCount}/{route.progress.totalCount}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ルート探索モードでフィルター該当0件時の案内カード */}
      {mapLayerMode === "routes" && filteredRoutes.length === 0 && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 32px)",
            maxWidth: "360px",
            background: "rgba(255, 253, 249, 0.96)",
            border: "1px solid #EBE5D9",
            borderRadius: "18px",
            padding: "16px 18px",
            zIndex: 1000,
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          <p style={{ margin: "0 0 10px", fontSize: "0.85rem", color: "var(--text-color)", fontWeight: 700 }}>
            条件に一致するルートがありません
          </p>
          <button
            type="button"
            onClick={() => {
              setDurationFilter("all");
              setStatusFilter("all");
            }}
            className="btn-secondary"
            style={{ padding: "7px 16px", fontSize: "0.78rem" }}
          >
            すべてのルートを表示
          </button>
        </div>
      )}

      {/* ルート詳細ボトムシートモーダル（アニメーション後に出現） */}
      {mapLayerMode === "routes" && showModal && selectedRally && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 32px)",
            maxWidth: "410px",
            background: "rgba(255, 253, 249, 0.97)",
            backdropFilter: "blur(12px)",
            borderRadius: "22px",
            padding: "18px",
            zIndex: 1000,
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            border: "1.5px solid #EBE5D9",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            animation: "slideUpMapModal 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedRally(null);
            }}
            aria-label="閉じる"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(0,0,0,0.55)",
              color: "white",
              border: "none",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              cursor: "pointer",
              fontWeight: "bold",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={15} />
          </button>

          <img
            src={
              selectedRally.thumbnail_url ||
              "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
            }
            alt={selectedRally.title}
            style={{
              width: "100%",
              height: "128px",
              objectFit: "cover",
              borderRadius: "12px",
              background: "#f0f0f0",
            }}
          />

          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                fontSize: "0.73rem",
                fontWeight: 700,
                color: "var(--primary-color)",
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  background: "rgba(199, 68, 46, 0.08)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <MapPin size={12} strokeWidth={1.75} />
                全{selectedRally.walkMetrics.spotCount}箇所
              </span>
              <span
                style={{
                  background: "rgba(199, 68, 46, 0.08)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <Footprints size={12} strokeWidth={1.75} />
                約{selectedRally.walkMetrics.distanceKm.toFixed(1)}km
              </span>
              <span
                style={{
                  background: "rgba(199, 68, 46, 0.08)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <Clock size={12} strokeWidth={1.75} />
                約{selectedRally.walkMetrics.estimatedMinutes}分
              </span>
              {selectedRally.distanceFromUserKm !== null && (
                <span
                  style={{
                    background: "rgba(201, 168, 76, 0.14)",
                    color: "var(--text-color)",
                    padding: "2px 8px",
                    borderRadius: "6px",
                  }}
                >
                  現在地から約{selectedRally.distanceFromUserKm}km
                </span>
              )}
            </div>

            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 4px",
              }}
            >
              {selectedRally.title}
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "#6E655C",
                margin: 0,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {selectedRally.description}
            </p>
          </div>

          {/* ログイン中で押印がある場合の進捗バー */}
          {user && selectedRally.progress.stampedCount > 0 && (
            <div
              style={{
                background: "#FAF6EE",
                border: "1px solid #EBE5D9",
                borderRadius: "10px",
                padding: "8px 10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                  marginBottom: "4px",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <CheckCircle2 size={13} strokeWidth={1.75} color="var(--primary-color)" />
                  獲得したしるし
                </span>
                <span style={{ color: "var(--primary-color)" }}>
                  {selectedRally.progress.stampedCount} / {selectedRally.progress.totalCount} 個
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  background: "#EBE5D9",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${Math.min(
                      100,
                      Math.round(
                        (selectedRally.progress.stampedCount /
                          Math.max(1, selectedRally.progress.totalCount)) *
                          100
                      )
                    )}%`,
                    height: "100%",
                    background: "var(--primary-color)",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => router.push(`/routes/${selectedRally.id}`)}
            className="btn-primary"
            style={{ width: "100%", padding: "12px", marginTop: "2px", fontSize: "0.92rem" }}
          >
            このルートを巡る
          </button>
        </div>
      )}

      {/* 自分の足跡モード：足跡が0件のときの案内カード */}
      {mapLayerMode === "footprints" && visitedFootprints.length === 0 && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 32px)",
            maxWidth: "380px",
            background: "rgba(255, 253, 249, 0.96)",
            border: "1.5px solid var(--accent-color)",
            borderRadius: "20px",
            padding: "20px",
            zIndex: 1000,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ marginBottom: "8px", display: "flex", justifyContent: "center" }}>
            <Footprints size={28} strokeWidth={1.75} color="var(--primary-color)" />
          </div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "var(--text-color)",
              margin: "0 0 6px",
            }}
          >
            {user ? "まだ地図上に刻まれた足跡がありません" : "ログインしてあなたの足跡を表示"}
          </h3>
          <p style={{ fontSize: "0.8rem", color: "#7A6F63", margin: "0 0 14px", lineHeight: 1.5 }}>
            {user
              ? "街を歩いてスポットで押印すると、訪れた場所がこの地図にしるしとして刻まれていきます。"
              : "これまでに訪れた場所のSHUINや写真・ひとこと記録を地図上で振り返ることができます。"}
          </p>
          {user ? (
            <button
              type="button"
              onClick={() => setMapLayerMode("routes")}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "10px 16px",
                fontSize: "0.85rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <Compass size={15} strokeWidth={1.75} />
              ルートを探す
            </button>
          ) : (
            <button
              type="button"
              onClick={() => router.push("/login?redirect=/map")}
              className="btn-primary"
              style={{ width: "100%", padding: "10px 16px", fontSize: "0.85rem" }}
            >
              ログインする
            </button>
          )}
        </div>
      )}

      {/* 自分の足跡ピン選択時：和紙ライフログボトムカード */}
      {mapLayerMode === "footprints" && selectedFootprint && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 32px)",
            maxWidth: "410px",
            background: "rgba(255, 253, 249, 0.98)",
            backdropFilter: "blur(12px)",
            borderRadius: "22px",
            padding: "18px",
            zIndex: 1000,
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            border: "2px solid var(--accent-color)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            animation: "slideUpMapModal 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedFootprint(null)}
            aria-label="閉じる"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(0,0,0,0.12)",
              color: "var(--text-color)",
              border: "none",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={15} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#FFFDF9",
                border: "1.5px dashed var(--accent-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CategoryShuinIcon
                category={selectedFootprint.routeCategory}
                size={24}
                color="var(--primary-color)"
                strokeWidth={1.85}
              />
            </div>
            <div style={{ minWidth: 0, flex: 1, paddingRight: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginBottom: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    background: "rgba(199, 68, 46, 0.1)",
                    color: "var(--primary-color)",
                    padding: "2px 8px",
                    borderRadius: "6px",
                  }}
                >
                  来訪 {selectedFootprint.visitCount}回
                </span>
                <span style={{ fontSize: "0.72rem", color: "#8A7E72", fontWeight: 600 }}>
                  {new Date(selectedFootprint.latestStampedAt).toLocaleDateString("ja-JP")}
                </span>
                {selectedFootprint.visitorNumber !== null && (
                  <span style={{ fontSize: "0.7rem", color: "#8A7E72", fontWeight: 700 }}>
                    • #{selectedFootprint.visitorNumber}番目の来訪者
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                  margin: "0 0 2px",
                }}
              >
                {selectedFootprint.spotName}
              </h3>
              <Link
                href={`/routes/${selectedFootprint.routeId}`}
                style={{
                  fontSize: "0.75rem",
                  color: "var(--primary-color)",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Compass size={12} strokeWidth={1.75} />
                {selectedFootprint.routeTitle} ▸
              </Link>
            </div>
          </div>

          {(selectedFootprint.latestPhotoUrl || selectedFootprint.latestMemo) && (
            <div
              style={{
                background: "#FAF6EE",
                border: "1px solid #EBE5D9",
                borderRadius: "12px",
                padding: "10px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {selectedFootprint.latestPhotoUrl && (
                <img
                  src={selectedFootprint.latestPhotoUrl}
                  alt="記録写真"
                  style={{
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    flexShrink: 0,
                  }}
                />
              )}
              {selectedFootprint.latestMemo && (
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: "var(--text-color)",
                    lineHeight: 1.45,
                    fontStyle: "italic",
                  }}
                >
                  「{selectedFootprint.latestMemo}」
                </p>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: "8px", marginTop: "2px" }}>
            <button
              type="button"
              onClick={() => router.push("/mypage/diary")}
              className="btn-secondary"
              style={{
                flex: 1,
                padding: "10px",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <BookOpen size={14} strokeWidth={1.75} />
              SHUIN帳で見る
            </button>
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/routes/${selectedFootprint.routeId}/spot/${selectedFootprint.spotId}`
                )
              }
              className="btn-primary"
              style={{ flex: 1, padding: "10px", fontSize: "0.82rem" }}
            >
              スポット詳細へ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
