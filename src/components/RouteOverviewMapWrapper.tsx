"use client";

import dynamic from "next/dynamic";
import type { RouteOverviewSpot } from "./RouteOverviewMap";

const RouteOverviewMap = dynamic(() => import("./RouteOverviewMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "clamp(280px, 42dvh, 360px)",
        borderRadius: "4px",
        border: "1px solid rgba(17, 17, 17, 0.16)",
        background: "#F2ECE0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(43, 43, 43, 0.55)",
        fontSize: "0.8125rem",
        fontWeight: 600,
      }}
    >
      地図を読み込んでいます...
    </div>
  ),
});

export default function RouteOverviewMapWrapper({
  routeId,
  spots,
  groupId,
  areaLabel,
}: {
  routeId: string;
  spots: RouteOverviewSpot[];
  groupId?: string | null;
  areaLabel?: string;
}) {
  return (
    <RouteOverviewMap
      routeId={routeId}
      spots={spots}
      groupId={groupId}
      areaLabel={areaLabel}
    />
  );
}
