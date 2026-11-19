import type { Metadata } from "next";
import { buildSpotJsonLd, buildSpotSeoMetadata } from "@/utils/seo";
import { fetchSpotPageData } from "./spotData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; spotId: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const loaded = await fetchSpotPageData(resolved.id, resolved.spotId);
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
  const loaded = await fetchSpotPageData(resolved.id, resolved.spotId);
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
