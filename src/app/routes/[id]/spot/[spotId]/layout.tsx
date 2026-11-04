import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { computeRouteWalkMetrics } from "@/utils/routeMetrics";
import { parseWKBPoint } from "@/utils/wkb";
import { buildSpotJsonLd, buildSpotSeoMetadata } from "@/utils/seo";

async function fetchRouteAndSpotForSeo(routeId: string, spotId: string) {
  const [{ data: rally }, { data: spots }] = await Promise.all([
    supabase.from("routes").select("*").eq("id", routeId).single(),
    supabase
      .from("spots")
      .select("*")
      .eq("route_id", routeId)
      .order("order_index", { ascending: true }),
  ]);

  if (!rally) return null;

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

  const targetSpot = spotsList.find((s: any) => s.id === spotId) || null;
  if (!targetSpot) return null;

  const walkMetrics = computeRouteWalkMetrics(spotsList);

  return { rally, targetSpot, spotsList, walkMetrics };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; spotId: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const loaded = await fetchRouteAndSpotForSeo(resolved.id, resolved.spotId);
  if (!loaded) {
    return {
      title: "スポット情報｜SHUIN まちのしるし",
    };
  }
  return buildSpotSeoMetadata(
    loaded.rally,
    loaded.targetSpot,
    loaded.spotsList,
    loaded.walkMetrics
  );
}

export default async function SpotDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string; spotId: string }>;
}) {
  const resolved = await params;
  const loaded = await fetchRouteAndSpotForSeo(resolved.id, resolved.spotId);
  const jsonLd = loaded
    ? buildSpotJsonLd(loaded.rally, loaded.targetSpot, loaded.spotsList)
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
