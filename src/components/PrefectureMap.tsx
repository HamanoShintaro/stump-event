"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import { Compass, MapPin, X, ChevronRight, RotateCcw } from "lucide-react";
import { getCategorySvgMarkup } from "@/components/icons/ShuinIcons";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";

export interface PrefectureMapSpot {
  id: string;
  name: string;
  order_index?: number;
  lat: number | null;
  lng: number | null;
}

export interface PrefectureMapRoute {
  id: string;
  title: string;
  category?: string | null;
  thumbnail_url?: string | null;
  budget_tier?: number | null;
  spots: PrefectureMapSpot[];
}

interface PrefectureMapProps {
  prefecture: string;
  routes: PrefectureMapRoute[];
}

const pinCache = new Map<string, L.DivIcon>();
const orderedSpotCache = new Map<number, L.DivIcon>();

function getRouteStartPinIcon(category?: string | null): L.DivIcon {
  const key = category || "default";
  const cached = pinCache.get(key);
  if (cached) return cached;

  const svgIcon = getCategorySvgMarkup(category || undefined, "var(--primary-color)", 20, 1.9);
  const icon = L.divIcon({
    html: `
      <div style="
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #FFFDF9;
        border: 2.5px solid var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.22);
        cursor: pointer;
      ">
        ${svgIcon}
      </div>
    `,
    className: "pref-route-pin",
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  });
  pinCache.set(key, icon);
  return icon;
}

function getOrderedSpotIcon(order: number): L.DivIcon {
  const cached = orderedSpotCache.get(order);
  if (cached) return cached;

  const icon = L.divIcon({
    html: `
      <div style="
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--primary-color);
        color: #FFFDF9;
        border: 2px solid #FFFDF9;
        font-size: 12px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28);
      ">${order}</div>
    `,
    className: "pref-ordered-spot-pin",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
  orderedSpotCache.set(order, icon);
  return icon;
}

function MapBoundsController({
  allBounds,
  selectedRoute,
}: {
  allBounds: L.LatLngBoundsExpression | null;
  selectedRoute: PrefectureMapRoute | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (selectedRoute) {
      const validPoints = selectedRoute.spots
        .filter((s): s is PrefectureMapSpot & { lat: number; lng: number } =>
          typeof s.lat === "number" && typeof s.lng === "number"
        )
        .map((s) => [s.lat, s.lng] as [number, number]);

      if (validPoints.length >= 2) {
        map.stop();
        map.flyToBounds(L.latLngBounds(validPoints), {
          padding: [52, 52],
          maxZoom: 15,
          duration: 0.7,
        });
      } else if (validPoints.length === 1) {
        map.stop();
        map.flyTo(validPoints[0], 14, { duration: 0.7 });
      }
      return;
    }

    if (allBounds) {
      map.stop();
      map.fitBounds(allBounds, {
        padding: [36, 36],
        maxZoom: 12,
      });
    }
  }, [map, allBounds, selectedRoute]);

  return null;
}

export default function PrefectureMap({ prefecture, routes }: PrefectureMapProps) {
  const [selectedRoute, setSelectedRoute] = useState<PrefectureMapRoute | null>(null);
  const [drawnCount, setDrawnCount] = useState(0);

  const routesWithCoords = useMemo(() => {
    return routes
      .map((route) => {
        const validSpots = (route.spots || []).filter(
          (s): s is PrefectureMapSpot & { lat: number; lng: number } =>
            typeof s.lat === "number" && typeof s.lng === "number"
        );
        if (validSpots.length === 0) return null;

        const centerLat =
          validSpots.reduce((sum, s) => sum + s.lat, 0) / validSpots.length;
        const centerLng =
          validSpots.reduce((sum, s) => sum + s.lng, 0) / validSpots.length;

        return {
          ...route,
          validSpots,
          center: [centerLat, centerLng] as [number, number],
          walkMetrics: computeRouteWalkMetrics(route.spots || []),
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null);
  }, [routes]);

  const allBounds = useMemo(() => {
    const points: [number, number][] = [];
    for (const route of routesWithCoords) {
      for (const spot of route.validSpots) {
        points.push([spot.lat, spot.lng]);
      }
    }
    if (points.length === 0) return null;
    return L.latLngBounds(points);
  }, [routesWithCoords]);

  const initialCenter = useMemo<[number, number]>(() => {
    if (routesWithCoords.length > 0) {
      return routesWithCoords[0].center;
    }
    return [36.6959, 137.2137];
  }, [routesWithCoords]);

  // ルート選択時、スポット1→2→3…の順でアニメーション描画
  useEffect(() => {
    if (!selectedRoute) {
      setDrawnCount(0);
      return;
    }

    const total = selectedRoute.spots.filter(
      (s) => typeof s.lat === "number" && typeof s.lng === "number"
    ).length;

    if (total === 0) {
      setDrawnCount(0);
      return;
    }

    setDrawnCount(1);
    if (total === 1) return;

    let current = 1;
    const timer = setInterval(() => {
      current += 1;
      setDrawnCount(current);
      if (current >= total) {
        clearInterval(timer);
      }
    }, 180);

    return () => clearInterval(timer);
  }, [selectedRoute]);

  if (routesWithCoords.length === 0 || !allBounds) {
    return null;
  }

  const activeValidSpots = selectedRoute
    ? selectedRoute.spots.filter(
        (s): s is PrefectureMapSpot & { lat: number; lng: number } =>
          typeof s.lat === "number" && typeof s.lng === "number"
      )
    : [];
  const drawnSpots = activeValidSpots.slice(0, drawnCount);
  const selectedMetrics = selectedRoute
    ? computeRouteWalkMetrics(selectedRoute.spots || [])
    : null;

  return (
    <section
      aria-label={`${prefecture}の街歩きルートマップ`}
      style={{ marginTop: "16px", marginBottom: "28px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "1.05rem",
            fontWeight: 800,
            color: "var(--text-color)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Compass size={17} color="var(--primary-color)" />
          <span>{prefecture}のモデルコースマップ</span>
        </h2>
        {selectedRoute && (
          <button
            type="button"
            onClick={() => setSelectedRoute(null)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "4px 10px",
              borderRadius: "2px",
              border: "1px solid rgba(17, 17, 17, 0.2)",
              background: "#FAF8F3",
              color: "var(--text-color)",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={12} />
            <span>{prefecture}全域に戻す</span>
          </button>
        )}
      </div>

      <div
        style={{
          width: "100%",
          height: "clamp(340px, 48dvh, 460px)",
          borderRadius: "4px",
          overflow: "hidden",
          border: "1px solid rgba(17, 17, 17, 0.16)",
          position: "relative",
          background: "#F2ECE0",
        }}
      >
        <style>{`
          .pref-animated-polyline {
            stroke-dasharray: 10, 10;
            animation: prefMapDash 1s linear infinite;
          }
          @keyframes prefMapDash {
            to { stroke-dashoffset: -20; }
          }
          .pref-hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .pref-hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* 上部ガイドチップ */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "10px",
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(250, 248, 243, 0.96)",
              border: "1px solid rgba(17, 17, 17, 0.14)",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "0.74rem",
              fontWeight: 700,
              color: "var(--text-color)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              pointerEvents: "auto",
              maxWidth: "100%",
            }}
          >
            <MapPin size={13} color="var(--primary-color)" style={{ flexShrink: 0 }} />
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {selectedRoute
                ? selectedRoute.title
                : "ピンやカードをタップするとルート範囲が表示されます"}
            </span>
          </div>
        </div>

        <MapContainer
          center={initialCenter}
          zoom={10}
          preferCanvas={true}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%", zIndex: 1 }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapBoundsController allBounds={allBounds} selectedRoute={selectedRoute} />

          {/* ルート未選択時：各ルートの代表ピン */}
          {!selectedRoute &&
            routesWithCoords.map((route) => (
              <Marker
                key={route.id}
                position={route.center}
                icon={getRouteStartPinIcon(route.category)}
                eventHandlers={{
                  click: () => setSelectedRoute(route),
                }}
              />
            ))}

          {/* ルート選択時：スポットと経路線をアニメーション描画 */}
          {selectedRoute && (
            <>
              <Polyline
                positions={drawnSpots.map((s) => [s.lat, s.lng] as [number, number])}
                color="var(--primary-color)"
                weight={4}
                opacity={0.88}
                className="pref-animated-polyline"
              />
              {drawnSpots.map((spot, idx) => (
                <Marker
                  key={spot.id}
                  position={[spot.lat, spot.lng]}
                  icon={getOrderedSpotIcon(idx + 1)}
                >
                  <Popup>
                    <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>
                      {idx + 1}. {spot.name}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </>
          )}
        </MapContainer>

        {/* 未選択時：下部横スクロールルートカード */}
        {!selectedRoute && (
          <div
            className="pref-hide-scrollbar"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              zIndex: 1000,
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              padding: "2px",
            }}
          >
            {routesWithCoords.map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => setSelectedRoute(route)}
                style={{
                  flex: "0 0 220px",
                  textAlign: "left",
                  background: "rgba(250, 248, 243, 0.97)",
                  border: "1px solid rgba(17, 17, 17, 0.16)",
                  borderRadius: "4px",
                  padding: "8px 10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--primary-color)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {route.category || "街歩き"} ・ 約{route.walkMetrics.estimatedMinutes}分（約
                  {route.walkMetrics.distanceKm}km）
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {route.title}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* 選択時：ルートサマリー＆詳細ページ導線 */}
        {selectedRoute && selectedMetrics && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              zIndex: 1000,
              background: "rgba(250, 248, 243, 0.98)",
              border: "1px solid rgba(17, 17, 17, 0.18)",
              borderRadius: "4px",
              padding: "10px 12px",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--primary-color)",
                  marginBottom: "2px",
                }}
              >
                全{selectedMetrics.spotCount}箇所 ・ 約{selectedMetrics.distanceKm}km（約
                {selectedMetrics.estimatedMinutes}分）
              </div>
              <div
                style={{
                  fontSize: "0.86rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {selectedRoute.title}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
              <Link
                href={`/routes/${selectedRoute.id}`}
                className="btn-primary"
                style={{
                  padding: "7px 12px",
                  fontSize: "0.76rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                <span>詳細を見る</span>
                <ChevronRight size={14} />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedRoute(null)}
                aria-label="選択を閉じる"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "2px",
                  border: "1px solid rgba(17, 17, 17, 0.18)",
                  background: "#fff",
                  color: "var(--text-color)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
