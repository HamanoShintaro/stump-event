import { unstable_cache } from "next/cache";
import { supabase } from "@/lib/supabase";
import { parseWKBPoint } from "@/utils/wkb";
import { computeRouteWalkMetrics, RouteWalkMetrics } from "@/utils/routeMetrics";

export type RouteStat = { participants: number; favorites: number };

export interface CompactRouteSpot {
  id: string;
  name: string;
  address: string;
  order_index: number;
  lat: number | null;
  lng: number | null;
}

export interface CachedPublishedRoute {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  category: string;
  prefecture: string;
  budget_tier: number;
  is_published: boolean;
  created_at: string;
  spots: CompactRouteSpot[];
  walkMetrics: RouteWalkMetrics;
}

const STATS_CHUNK_SIZE = 150;
const ROUTES_PAGE_SIZE = 1000;

// 社会的証明は実データのみ。user_routes(参加) と user_bookmarks(お気に入り) の実カウント。
// 旧実装のルートID由来・疑似乱数による捏造表示は廃止（景表法/信頼性リスク回避）。
// 0件は呼び出し側で非表示にする（見かけの水増しも、空虚な0表示もしない）。
// ルート数が1,000件以上に増加した際のURL長制限（URI Too Long）を防ぐためチャンク分割して取得する。
export async function getRouteStatsMap(routeIds: string[]): Promise<Record<string, RouteStat>> {
  const map: Record<string, RouteStat> = {};
  for (const id of routeIds) map[id] = { participants: 0, favorites: 0 };
  if (!routeIds.length) return map;

  const chunks: string[][] = [];
  for (let i = 0; i < routeIds.length; i += STATS_CHUNK_SIZE) {
    chunks.push(routeIds.slice(i, i + STATS_CHUNK_SIZE));
  }

  await Promise.all(
    chunks.map(async (chunk) => {
      const [ur, bm] = await Promise.all([
        supabase.from("user_routes").select("route_id").in("route_id", chunk),
        supabase.from("user_bookmarks").select("route_id").in("route_id", chunk),
      ]);

      for (const r of (ur.data as { route_id: string }[] | null) || []) {
        if (map[r.route_id]) map[r.route_id].participants++;
      }
      for (const r of (bm.data as { route_id: string }[] | null) || []) {
        if (map[r.route_id]) map[r.route_id].favorites++;
      }
    })
  );

  return map;
}

function normalizeSpotForClient(spot: any): CompactRouteSpot {
  let lat: number | null = typeof spot?.lat === "number" ? spot.lat : null;
  let lng: number | null = typeof spot?.lng === "number" ? spot.lng : null;

  if ((lat === null || lng === null) && typeof spot?.location === "string") {
    const parsed = parseWKBPoint(spot.location);
    if (parsed) {
      lat = Math.round(parsed.lat * 1e6) / 1e6;
      lng = Math.round(parsed.lng * 1e6) / 1e6;
    }
  }

  return {
    id: spot?.id || "",
    name: spot?.name || "",
    address: spot?.address || "",
    order_index: spot?.order_index ?? 0,
    lat,
    lng,
  };
}

async function fetchPublishedRoutesAndStatsUncached(): Promise<{
  routes: CachedPublishedRoute[];
  statsMap: Record<string, RouteStat>;
}> {
  const rawRoutes: any[] = [];
  let offset = 0;

  while (true) {
    const { data: batch, error } = await supabase
      .from("routes")
      .select(
        "id, title, description, thumbnail_url, category, prefecture, budget_tier, is_published, created_at, spots(id, name, address, order_index, location)"
      )
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + ROUTES_PAGE_SIZE - 1);

    if (error) {
      console.error("Error fetching routes:", error);
      break;
    }

    if (!batch || batch.length === 0) break;
    rawRoutes.push(...batch);
    if (batch.length < ROUTES_PAGE_SIZE) break;
    offset += ROUTES_PAGE_SIZE;
  }

  const routes: CachedPublishedRoute[] = rawRoutes.map((route) => {
    const rawSpots: any[] = Array.isArray(route.spots) ? route.spots : [];
    const spots = rawSpots
      .map(normalizeSpotForClient)
      .sort(
        (a: CompactRouteSpot, b: CompactRouteSpot) =>
          (a.order_index || 0) - (b.order_index || 0)
      );
    const walkMetrics = computeRouteWalkMetrics(spots, route.rarity_estimated_min);

    return {
      id: route.id,
      title: route.title || "",
      description: route.description || "",
      thumbnail_url: route.thumbnail_url || "",
      category: route.category || "",
      prefecture: route.prefecture || "",
      budget_tier: route.budget_tier ?? 1,
      is_published: Boolean(route.is_published),
      created_at: route.created_at || "",
      spots,
      walkMetrics,
    };
  });

  const statsMap = await getRouteStatsMap(routes.map((r) => r.id));

  return { routes, statsMap };
}

/**
 * 公開中ルート一覧＋参加・栞統計を5分間（300秒）サーバーキャッシュして返す。
 * トップページ（/）とルート一覧（/routes）の双方でDB全件クエリやWKB解析の重複実行を防ぐ。
 */
export const getCachedPublishedRoutesWithStats = unstable_cache(
  fetchPublishedRoutesAndStatsUncached,
  ["published-routes-with-stats-v1"],
  {
    revalidate: 300,
    tags: ["published-routes"],
  }
);


