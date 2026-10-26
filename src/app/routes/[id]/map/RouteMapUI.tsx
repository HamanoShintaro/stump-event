"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  Map as MapIcon,
  MapPin,
  Navigation,
  MessageSquare,
  Users,
  LocateFixed,
  Maximize2,
  X,
} from "lucide-react";
import { getDistance } from "geolib";
import { useAuth } from "@/context/AuthContext";
import {
  useRouteMap,
  RouteSpot,
  RouteMapViewportAction,
} from "@/hooks/useRouteMap";
import { getUserLocationPinMarkup } from "@/components/icons/ShuinIcons";
import styles from "./page.module.css";

// カスタムアイコン：現在地用（単色SVGピン）
const UserLocationIcon = L.divIcon({
  html: getUserLocationPinMarkup(),
  className: "user-location-pin",
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -16],
});

// カスタムアイコン：目的地ピン（単色SVG）
const ActiveSpotIcon = L.divIcon({
  html: `
    <div style="
      background-color: var(--primary-color, #C7442E); 
      border: 3px solid #FFFDF9; 
      width: 44px; height: 44px; 
      border-radius: 50%; 
      display: flex; justify-content: center; align-items: center; 
      box-shadow: 0 4px 12px rgba(199,68,46,0.4);
      position: relative;
      animation: pulseMarker 2s infinite ease-in-out;
    ">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
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
  className: "active-spot-pin",
  iconSize: [44, 52],
  iconAnchor: [22, 52],
});

// カスタムアイコン：通常のスポットピン (順番番号 / 選択中ハイライト対応)
const getNumberIcon = (index: number, isSelected = false) => {
  const borderColor = isSelected
    ? "var(--primary-color, #C7442E)"
    : "var(--secondary-color, #111111)";
  const bgColor = isSelected ? "var(--primary-color, #C7442E)" : "#FFFFFF";
  const textColor = isSelected ? "#FFFDF9" : "var(--secondary-color, #111111)";
  const size = isSelected ? 42 : 36;
  const height = isSelected ? 50 : 43;

  return L.divIcon({
    html: `
      <div style="
        background-color: ${bgColor}; 
        border: 3px solid ${isSelected ? "#FFFDF9" : borderColor}; 
        width: ${size}px; height: ${size}px; 
        border-radius: 50%; 
        display: flex; justify-content: center; align-items: center; 
        font-size: ${isSelected ? "15px" : "14px"}; 
        font-weight: 800;
        color: ${textColor};
        box-shadow: ${
          isSelected
            ? "0 4px 14px rgba(199,68,46,0.45)"
            : "0 4px 8px rgba(0,0,0,0.15)"
        };
        position: relative;
        transition: all 0.2s ease;
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
          border-top: 7px solid ${borderColor};
        "></div>
      </div>
    `,
    className: "spot-number-pin",
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
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
    className: "nav-arrow-icon",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
};

/**
 * マップのカメラ（縮尺・中心）制御コンポーネント
 *
 * 責務の切り分け：
 * 1. 「デフォルトの縮尺に戻る（overview）」:
 *    - 初回表示時、およびユーザーが「ルート全体」ボタンを押した時のみ実行。
 *    - GPSの微小な変動やピンクリック時の再レンダリングでは絶対に発火させない。
 * 2. 「自動で寄る（focus-spot / focus-user）」:
 *    - スポットピンをクリックした時は、そのスポットへフォーカス（現在ズームが浅ければ17へ寄る、既に拡大中ならその倍率を維持して中心移動）。
 *    - 「現在地」ボタンを押した時は現在地へ寄る（zoom 16）。
 */
function RouteMapViewportController({
  spots,
  activeSpot,
  userPos,
  defaultCenter,
  viewportAction,
}: {
  spots: RouteSpot[];
  activeSpot: RouteSpot | null;
  userPos: [number, number] | null;
  defaultCenter: [number, number];
  viewportAction: RouteMapViewportAction;
}) {
  const map = useMap();
  const initializedRef = useRef(false);
  const lastActionIdRef = useRef<number>(-1);

  const fitRouteOverview = (animate: boolean) => {
    if (spots.length === 0) return;

    if (activeSpot && userPos) {
      const dist = getDistance(
        { latitude: userPos[0], longitude: userPos[1] },
        { latitude: activeSpot.lat, longitude: activeSpot.lng }
      );
      if (dist <= 3000) {
        const bounds = L.latLngBounds([
          L.latLng(userPos[0], userPos[1]),
          L.latLng(activeSpot.lat, activeSpot.lng),
        ]);
        map.fitBounds(bounds, {
          padding: [60, 60],
          maxZoom: 16,
          animate,
          duration: animate ? 0.9 : 0,
        });
        return;
      }
    }

    const latLngs = spots.map((s) => L.latLng(s.lat, s.lng));
    if (userPos) {
      const distFromRouteCenter = getDistance(
        { latitude: userPos[0], longitude: userPos[1] },
        { latitude: defaultCenter[0], longitude: defaultCenter[1] }
      );
      if (distFromRouteCenter <= 2500) {
        latLngs.push(L.latLng(userPos[0], userPos[1]));
      }
    }
    const bounds = L.latLngBounds(latLngs);
    map.fitBounds(bounds, {
      padding: [55, 55],
      maxZoom: 16,
      animate,
      duration: animate ? 0.9 : 0,
    });
  };

  // 初回マウント時（spots読み込み完了時）に1回だけルート全体を表示
  useEffect(() => {
    if (!initializedRef.current && spots.length > 0) {
      fitRouteOverview(false);
      initializedRef.current = true;
      lastActionIdRef.current = viewportAction.id;
    }
  }, [spots]);

  // ユーザーの明示アクション（ピンタップ / ルート全体ボタン / 現在地ボタン）時のみカメラを動かす
  useEffect(() => {
    if (!initializedRef.current) return;
    if (viewportAction.id === lastActionIdRef.current) return;
    lastActionIdRef.current = viewportAction.id;

    if (viewportAction.type === "overview") {
      fitRouteOverview(true);
    } else if (viewportAction.type === "focus-spot") {
      const { spot } = viewportAction;
      // 既に詳しく拡大して見ている場合（zoom 17以上）はその倍率を維持し、全体表示など浅い場合は zoom 17 まで寄る
      const targetZoom = Math.max(map.getZoom(), 17);
      map.flyTo([spot.lat, spot.lng], targetZoom, {
        animate: true,
        duration: 0.65,
      });
    } else if (viewportAction.type === "focus-user" && userPos) {
      const targetZoom = Math.max(map.getZoom(), 16);
      map.flyTo(userPos, targetZoom, {
        animate: true,
        duration: 0.75,
      });
    }
  }, [viewportAction, map, userPos]);

  return null;
}

interface RouteMapUIProps {
  rally: any;
  spots: RouteSpot[];
  activeSpotId: string | null;
  groupId: string | null;
  groupMembers?: any[];
  memberLatestStamps?: Record<string, string>;
  spotAcquiredMembers?: Record<string, any[]>;
  sharedMemoriesBySpot?: Record<string, any[]>;
}

export default function RouteMapUI({
  rally,
  spots,
  activeSpotId,
  groupId,
  groupMembers = [],
  memberLatestStamps = {},
  spotAcquiredMembers = {},
  sharedMemoriesBySpot = {},
}: RouteMapUIProps) {
  const { user } = useAuth();
  const {
    userPos,
    defaultCenter,
    activeSpot,
    selectedSpot,
    viewportAction,
    selectAndFocusSpot,
    clearSelectedSpot,
    resetToRouteOverview,
    focusOnUserLocation,
    trajectoryPath,
    navLinePath,
    navArrowPos,
    navArrowAngle,
    distanceToActive,
    distanceToSelected,
  } = useRouteMap({ spots, activeSpotId });

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
        .leaflet-tile-pane {
          filter: sepia(0.12) saturate(0.85) brightness(1.02);
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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RouteMapViewportController
          spots={spots}
          activeSpot={activeSpot}
          userPos={userPos}
          defaultCenter={defaultCenter}
          viewportAction={viewportAction}
        />

        {/* ユーザー現在地 */}
        {userPos && (
          <Marker position={userPos} icon={UserLocationIcon}>
            <Popup>
              <div
                style={{
                  fontWeight: "700",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <MapPin size={14} color="var(--primary-color)" />
                あなたの現在地
              </div>
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

        {/* 各スポットのピン（タップ時にそのスポットへ自動で寄る。標準Popupは出して画面が二重にならないよう整理） */}
        {spots.map((spot, index) => {
          const isActive = spot.id === activeSpotId;
          const isSelected = selectedSpot?.id === spot.id;
          return (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={isActive ? ActiveSpotIcon : getNumberIcon(index + 1, isSelected)}
              zIndexOffset={isSelected ? 900 : isActive ? 600 : 0}
              eventHandlers={{
                click: () => selectAndFocusSpot(spot),
              }}
            />
          );
        })}

        {/* 同行メンバーのアバターマーカー */}
        {groupId &&
          Object.entries(memberLatestStamps).map(([memberId, spotId]) => {
            const member = groupMembers.find((m) => m.user_id === memberId);
            const spot = spots.find((s) => s.id === spotId);
            if (!spot || !member || memberId === user?.id) return null;

            // 重なりを避けるため経緯度を少しずらす
            const memberLat = spot.lat + 0.00015;
            const memberLng = spot.lng + 0.00015;

            const memberIcon = L.divIcon({
              html: `
                <div style="
                  background-color: var(--accent-color, #C9A84C); 
                  border: 2px solid white; 
                  width: 32px; height: 32px; 
                  border-radius: 50%; 
                  overflow: hidden;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  display: flex; justify-content: center; align-items: center;
                ">
                  ${
                    member.users?.avatar_url
                      ? `<img src="${member.users.avatar_url}" style="width: 100%; height: 100%; object-fit: cover;" />`
                      : member.users?.display_name
                        ? `<span style="font-size: 13px; font-weight: bold; color: white;">${member.users.display_name.slice(0, 1)}</span>`
                        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
                  }
                </div>
              `,
              className: "member-avatar-pin",
              iconSize: [32, 32],
              iconAnchor: [16, 16],
            });

            return (
              <Marker
                key={memberId}
                position={[memberLat, memberLng]}
                icon={memberIcon}
              >
                <Popup>
                  <div style={{ fontWeight: "700", fontSize: "0.85rem" }}>
                    {member.users?.display_name || "同行メンバー"}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#8A7E72" }}>
                    「{spot.name}」に滞在中
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>

      {/* 右側フローティング視点切り替えボタン群（ルート全体に戻す ／ 現在地へ戻る） */}
      <div
        style={{
          position: "absolute",
          right: "16px",
          bottom: selectedSpot ? "205px" : "108px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "flex-end",
          transition: "bottom 0.25s ease",
        }}
      >
        <button
          type="button"
          onClick={resetToRouteOverview}
          title="ルート全体の縮尺・中央に戻す"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "9px 13px",
            borderRadius: "999px",
            background: "rgba(255, 253, 249, 0.96)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid #EBE5D9",
            boxShadow: "0 4px 12px rgba(44, 37, 32, 0.14)",
            color: "var(--text-color)",
            fontSize: "0.78rem",
            fontWeight: 800,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <Maximize2 size={14} color="var(--primary-color)" strokeWidth={2} />
          ルート全体
        </button>

        {userPos && (
          <button
            type="button"
            onClick={focusOnUserLocation}
            title="現在地へ移動"
            aria-label="現在地へ移動"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "9px 13px",
              borderRadius: "999px",
              background: "rgba(255, 253, 249, 0.96)",
              backdropFilter: "blur(8px)",
              border: "1.5px solid #EBE5D9",
              boxShadow: "0 4px 12px rgba(44, 37, 32, 0.14)",
              color: "var(--text-color)",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <LocateFixed size={15} color="var(--primary-color)" strokeWidth={2} />
            現在地
          </button>
        )}
      </div>

      {selectedSpot ? (
        <div className={"glass-card " + styles.infoOverlay}>
          <button
            onClick={clearSelectedSpot}
            aria-label="閉じる"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(0,0,0,0.06)",
              border: "none",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-color)",
            }}
          >
            <X size={14} strokeWidth={2} />
          </button>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {selectedSpot.image_url && (
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "12px",
                  backgroundImage: `url(${selectedSpot.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ flex: 1, minWidth: 0, paddingRight: "18px" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  fontWeight: "800",
                  color: "var(--text-color)",
                }}
              >
                {selectedSpot.name}
              </h3>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "0.82rem",
                  color: "#666",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                {activeSpotId === selectedSpot.id ? (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "var(--primary-color)",
                      fontWeight: 700,
                    }}
                  >
                    <Navigation size={13} strokeWidth={2} />
                    現在の目的地です
                  </span>
                ) : (
                  <span>スポットにフォーカス中</span>
                )}
                {distanceToSelected !== null && (
                  <span>({formatDistance(distanceToSelected)})</span>
                )}
              </p>

              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href={`/routes/${rally.id}/spot/${selectedSpot.id}${groupId ? `?groupId=${groupId}` : ""}`}
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {activeSpotId === selectedSpot.id
                    ? "しるしを刻む"
                    : "スポット詳細 / 押印へ"}
                </Link>
                <button
                  type="button"
                  onClick={resetToRouteOverview}
                  className="btn-secondary"
                  style={{
                    padding: "7px 12px",
                    fontSize: "0.78rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Maximize2 size={12} strokeWidth={2} />
                  全体表示に戻す
                </button>
              </div>

              {/* しるしを獲得したメンバー＆共有された写真・コメント一覧 */}
              {groupId &&
                spotAcquiredMembers[selectedSpot.id] &&
                spotAcquiredMembers[selectedSpot.id].length > 0 && (
                  <div
                    style={{
                      marginTop: "12px",
                      borderTop: "1px solid #EBE5D9",
                      paddingTop: "8px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#A39687",
                        fontWeight: "bold",
                        marginBottom: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Users size={12} color="var(--primary-color)" />{" "}
                      しるしを刻んだメンバー (
                      {spotAcquiredMembers[selectedSpot.id].length}名)
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {(
                        sharedMemoriesBySpot[selectedSpot.id] ||
                        spotAcquiredMembers[selectedSpot.id]
                      ).map((m: any) => {
                        const name =
                          m.displayName || m.display_name || "同行メンバー";
                        const photo = m.photoUrl || m.photo_url;
                        const memo = m.memo;
                        return (
                          <div
                            key={m.userId || m.id}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              background: "#FAF6EE",
                              padding: "5px 8px",
                              borderRadius: "8px",
                              border: "1px solid #EBE5D9",
                              fontSize: "0.75rem",
                            }}
                          >
                            {photo && (
                              <img
                                src={photo}
                                alt=""
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "6px",
                                  objectFit: "cover",
                                  flexShrink: 0,
                                }}
                              />
                            )}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontWeight: 700, color: "#5C4E43" }}>
                                {name} {m.isMe ? "（あなた）" : "さん"}
                              </div>
                              {memo && (
                                <div
                                  style={{
                                    color: "#8A7E72",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  <MessageSquare
                                    size={11}
                                    strokeWidth={1.75}
                                    style={{ flexShrink: 0 }}
                                  />
                                  <span
                                    style={{
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    {memo}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      ) : activeSpot ? (
        /* 目的地が設定されている場合のデフォルトナビ表示（タップでその目的地へ寄る） */
        <div
          className={"glass-card " + styles.infoOverlay}
          style={{
            borderLeft: "4px solid var(--primary-color)",
            cursor: "pointer",
          }}
          onClick={() => selectAndFocusSpot(activeSpot)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(199, 68, 46, 0.1)",
                  border: "1px solid rgba(199, 68, 46, 0.24)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-color)",
                  flexShrink: 0,
                }}
              >
                <Navigation size={18} strokeWidth={2} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#888",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  現在の目的地（タップでフォーカス）
                </div>
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    color: "var(--text-color)",
                    marginTop: "2px",
                  }}
                >
                  {activeSpot.name}
                </div>
              </div>
            </div>
            {distanceToActive !== null && (
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#888",
                    fontWeight: "600",
                  }}
                >
                  目的地まで
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    color: "var(--primary-color)",
                    marginTop: "2px",
                  }}
                >
                  {formatDistance(distanceToActive)}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={"glass-card " + styles.infoOverlay}>
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "#5C4E43",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MapIcon size={18} color="var(--primary-color)" />
            しるしピンをタップするとその場所へ寄り、詳細を確認できます。
          </p>
        </div>
      )}
    </div>
  );
}
