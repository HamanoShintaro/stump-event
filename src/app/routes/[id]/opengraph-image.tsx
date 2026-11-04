import { ImageResponse } from "next/og";
import { supabase } from "@/lib/supabase";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";
import { parseWKBPoint } from "@/utils/wkb";
import { extractRouteAreaInfo } from "@/utils/seo";

export const alt = "SHUIN まちのしるし 街歩きルート案内";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const THEME = {
  washiBg: "rgb(249, 246, 240)",
  washiCard: "rgb(255, 253, 249)",
  shuPrimary: "rgb(197, 61, 43)",
  koganeAccent: "rgb(212, 175, 55)",
  sumiText: "rgb(44, 38, 35)",
  sumiMuted: "rgb(108, 96, 86)",
};

export default async function RouteOpengraphImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = await params;
  const { data: rally } = await supabase
    .from("routes")
    .select("*")
    .eq("id", resolved.id)
    .single();

  const { data: spots } = rally
    ? await supabase
        .from("spots")
        .select("*")
        .eq("route_id", rally.id)
        .order("order_index", { ascending: true })
    : { data: [] };

  const spotsList = (spots || []).map((s: any) => {
    let lat = typeof s.lat === "number" ? s.lat : null;
    let lng = typeof s.lng === "number" ? s.lng : null;
    if ((lat === null || lng === null) && typeof s.location === "string") {
      const parsed = parseWKBPoint(s.location);
      if (parsed) {
        lat = parsed.lat;
        lng = parsed.lng;
      }
    }
    return { ...s, lat, lng };
  });

  const walkMetrics = computeRouteWalkMetrics(spotsList);
  const areaInfo = extractRouteAreaInfo(rally || {}, spotsList);

  const title = rally?.title || "街を歩いて、しるしを刻む。";
  const prefLabel = rally?.prefecture || "全国";
  const categoryLabel = rally?.category || "街歩き";
  const spotNames = areaInfo.spotNames.slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "46px 56px",
          backgroundColor: THEME.washiBg,
          color: THEME.sumiText,
          border: `10px solid ${THEME.koganeAccent}`,
          position: "relative",
        }}
      >
        {/* 上部ヘッダーバー */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "999px",
                backgroundColor: THEME.shuPrimary,
                color: THEME.washiCard,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {prefLabel} • {areaInfo.areaName}
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 16px",
                borderRadius: "999px",
                border: `2px solid ${THEME.koganeAccent}`,
                backgroundColor: THEME.washiCard,
                color: THEME.sumiText,
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {categoryLabel}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: 24,
              fontWeight: 800,
              color: THEME.shuPrimary,
            }}
          >
            <span>SHUIN まちのしるし</span>
          </div>
        </div>

        {/* メインタイトル＆スペック */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              color: THEME.shuPrimary,
            }}
          >
            {areaInfo.titleHook}（{areaInfo.subHook}）
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 50,
              fontWeight: 900,
              lineHeight: 1.28,
              color: THEME.sumiText,
            }}
          >
            {title}
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "6px" }}>
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: "12px",
                backgroundColor: THEME.washiCard,
                border: `2px solid ${THEME.koganeAccent}`,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              全 {walkMetrics.spotCount} 箇所
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: "12px",
                backgroundColor: THEME.washiCard,
                border: `2px solid ${THEME.koganeAccent}`,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              徒歩 約 {walkMetrics.estimatedMinutes} 分（約{" "}
              {walkMetrics.distanceKm.toFixed(1)} km）
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: "12px",
                backgroundColor: THEME.washiCard,
                border: `2px solid ${THEME.koganeAccent}`,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              予算目安 {areaInfo.budgetLabel}
            </div>
          </div>
        </div>

        {/* 下部：5スポット順路バー ＆ 朱印モチーフ */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            paddingTop: "18px",
            borderTop: `2px solid ${THEME.koganeAccent}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              maxWidth: "900px",
            }}
          >
            {spotNames.map((sName, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  backgroundColor: THEME.washiCard,
                  border: `1px solid ${THEME.koganeAccent}`,
                  fontSize: 19,
                  fontWeight: 700,
                  color: THEME.sumiMuted,
                }}
              >
                {idx + 1}. {sName}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "104px",
              height: "104px",
              borderRadius: "18px",
              border: `4px solid ${THEME.shuPrimary}`,
              backgroundColor: THEME.washiCard,
              color: THEME.shuPrimary,
              fontWeight: 900,
              fontSize: 22,
            }}
          >
            <span>SHUIN</span>
            <span style={{ fontSize: 14, marginTop: "2px" }}>まちのしるし</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
