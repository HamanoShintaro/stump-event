import { supabase } from "@/lib/supabase";

export type RouteStat = { participants: number; favorites: number };

// 社会的証明は実データのみ。user_routes(参加) と user_bookmarks(お気に入り) の実カウント。
// 旧実装のルートID由来・疑似乱数による捏造表示は廃止（景表法/信頼性リスク回避）。
// 0件は呼び出し側で非表示にする（見かけの水増しも、空虚な0表示もしない）。
export async function getRouteStatsMap(routeIds: string[]): Promise<Record<string, RouteStat>> {
  const map: Record<string, RouteStat> = {};
  for (const id of routeIds) map[id] = { participants: 0, favorites: 0 };
  if (!routeIds.length) return map;

  const [ur, bm] = await Promise.all([
    supabase.from("user_routes").select("route_id").in("route_id", routeIds),
    supabase.from("user_bookmarks").select("route_id").in("route_id", routeIds),
  ]);

  for (const r of (ur.data as { route_id: string }[] | null) || []) {
    if (map[r.route_id]) map[r.route_id].participants++;
  }
  for (const r of (bm.data as { route_id: string }[] | null) || []) {
    if (map[r.route_id]) map[r.route_id].favorites++;
  }
  return map;
}
