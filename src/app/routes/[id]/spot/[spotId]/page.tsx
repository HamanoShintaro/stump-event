import { notFound } from "next/navigation";
import { fetchSpotPageData } from "./spotData";
import SpotCheckInClient from "./SpotCheckInClient";

export const revalidate = 0;

export default async function SpotCheckInPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; spotId: string }>;
  searchParams: Promise<{ groupId?: string }>;
}) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);

  const loaded = await fetchSpotPageData(resolvedParams.id, resolvedParams.spotId);
  if (!loaded) {
    return notFound();
  }

  return (
    <SpotCheckInClient
      routeId={resolvedParams.id}
      spotId={resolvedParams.spotId}
      urlGroupId={resolvedSearchParams?.groupId || null}
      initialRoute={loaded.rally}
      initialSpot={loaded.targetSpot}
      initialAllSpots={loaded.spotsList}
      prefecture={loaded.areaInfo.prefecture}
      shortAreaName={loaded.areaInfo.shortAreaName}
      walkMinutes={loaded.walkMetrics.estimatedMinutes}
    />
  );
}
