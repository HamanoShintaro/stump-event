"use client";

import { useEffect, useMemo } from "react";
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
import { Maximize2, MapPin } from "lucide-react";

export interface RouteOverviewSpot {
  id: string;
  name: string;
  order_index?: number;
  lat: number | null;
  lng: number | null;
}

interface RouteOverviewMapProps {
  routeId: string;
  spots: RouteOverviewSpot[];
  groupId?: string | null;
  areaLabel?: string;
}

const spotIconCache = new Map<number, L.DivIcon>();

function getOrderedSpotIcon(order: number): L.DivIcon {
  const cached = spotIconCache.get(order);
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
    className: "route-overview-spot-pin",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
  spotIconCache.set(order, icon);
  return icon;
}

function FitRouteBounds({ bounds }: { bounds: L.LatLngBoundsExpression }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(bounds, {
      padding: [42, 42],
      maxZoom: 15,
    });
  }, [map, bounds]);

  return null;
}

export default function RouteOverviewMap({
  routeId,
  spots,
  groupId,
  areaLabel,
}: RouteOverviewMapProps) {
  const validSpots = useMemo(
    () =>
      (spots || []).filter(
        (s): s is RouteOverviewSpot & { lat: number; lng: number } =>
          typeof s.lat === "number" && typeof s.lng === "number"
      ),
    [spots]
  );

  const bounds = useMemo(() => {
    if (validSpots.length === 0) return null;
    return L.latLngBounds(validSpots.map((s) => [s.lat, s.lng] as [number, number]));
  }, [validSpots]);

  if (validSpots.length === 0 || !bounds) {
    return null;
  }

  const center: [number, number] = [validSpots[0].lat, validSpots[0].lng];
  const fullMapHref = groupId
    ? `/routes/${routeId}/map?groupId=${encodeURIComponent(groupId)}`
    : `/routes/${routeId}/map`;

  return (
    <div
      style={{
        width: "100%",
        height: "clamp(280px, 42dvh, 360px)",
        borderRadius: "4px",
        overflow: "hidden",
        border: "1px solid rgba(17, 17, 17, 0.16)",
        position: "relative",
        background: "#F2ECE0",
      }}
    >
      <style>{`
        .route-overview-polyline {
          stroke-dasharray: 8, 8;
          animation: routeOverviewDash 1s linear infinite;
        }
        @keyframes routeOverviewDash {
          to { stroke-dashoffset: -16; }
        }
      `}</style>

      {/* 上部オーバーレイ：エリア表示 ＋ 大きな地図で開く */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          right: "10px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(250, 248, 243, 0.96)",
            border: "1px solid rgba(17, 17, 17, 0.14)",
            borderRadius: "4px",
            padding: "5px 10px",
            fontSize: "0.74rem",
            fontWeight: 700,
            color: "var(--text-color)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            pointerEvents: "auto",
            maxWidth: "calc(100% - 135px)",
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
            {areaLabel || `全${validSpots.length}スポットの散策ルート`}
          </span>
        </div>

        <Link
          href={fullMapHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(250, 248, 243, 0.96)",
            border: "1px solid rgba(17, 17, 17, 0.2)",
            borderRadius: "4px",
            padding: "5px 10px",
            fontSize: "0.74rem",
            fontWeight: 700,
            color: "var(--text-color)",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            pointerEvents: "auto",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <Maximize2 size={12} color="var(--primary-color)" />
          <span>大きな地図で開く</span>
        </Link>
      </div>

      <MapContainer
        center={center}
        zoom={14}
        preferCanvas={true}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitRouteBounds bounds={bounds} />

        <Polyline
          positions={validSpots.map((s) => [s.lat, s.lng] as [number, number])}
          color="var(--primary-color)"
          weight={4}
          opacity={0.88}
          className="route-overview-polyline"
        />
        {validSpots.map((spot, idx) => (
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
      </MapContainer>
    </div>
  );
}
