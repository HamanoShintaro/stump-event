import { supabase } from "@/lib/supabase";

/**
 * 進行中ルートの有効期間（24時間 = 1日）
 * 完走するか、参加（または再参加）から24時間が経過すると「進行中」から外れる。
 */
export const ACTIVE_ROUTE_DURATION_MS = 24 * 60 * 60 * 1000;

/**
 * user_routes のレコードが現在「進行中（有効）」かどうかを判定する。
 * - status が IN_PROGRESS / in_progress であること
 * - joined_at から24時間以内であること
 */
export function isRouteCurrentlyActive(
  ur: { status?: string | null; joined_at?: string | null } | null | undefined
): boolean {
  if (!ur) return false;
  const status = (ur.status || "").toUpperCase();
  if (status !== "IN_PROGRESS") return false;
  if (!ur.joined_at) return false;

  const joinedTime = new Date(ur.joined_at).getTime();
  if (Number.isNaN(joinedTime)) return false;

  const elapsed = Date.now() - joinedTime;
  return elapsed < ACTIVE_ROUTE_DURATION_MS;
}

/**
 * 進行中ルートの残り有効時間（時間単位・切り上げ）を返す。
 */
export function getRemainingActiveHours(joinedAt?: string | null): number {
  if (!joinedAt) return 0;
  const joinedTime = new Date(joinedAt).getTime();
  if (Number.isNaN(joinedTime)) return 0;
  const remainingMs = ACTIVE_ROUTE_DURATION_MS - (Date.now() - joinedTime);
  if (remainingMs <= 0) return 0;
  return Math.max(1, Math.ceil(remainingMs / (60 * 60 * 1000)));
}

/**
 * 現在進行中（24時間以内・IN_PROGRESS）のルートを1件取得する。
 * 別のルートが進行中かどうかを確認するために使用する。
 */
export async function fetchCurrentActiveUserRoute(userId: string) {
  const { data, error } = await supabase
    .from("user_routes")
    .select("id, route_id, status, joined_at, completed_at, routes(id, title)")
    .eq("user_id", userId)
    .in("status", ["IN_PROGRESS", "in_progress"])
    .order("joined_at", { ascending: false });

  if (error || !data) return null;

  const activeList = data.filter((ur: any) => isRouteCurrentlyActive(ur));
  return activeList.length > 0 ? activeList[0] : null;
}

/**
 * 指定したルートを「進行中」に設定する（同時進行は最大1個まで）。
 * - 他に IN_PROGRESS のルートがあれば、進行中から外す（過去に完走済みなら COMPLETED、未完走なら CANCELED へ更新）。
 * - 対象ルートが既に user_routes に存在する場合は joined_at を現在時刻に更新して IN_PROGRESS にする（再参加対応）。
 */
export async function activateUserRoute(
  userId: string,
  routeId: string
): Promise<{ error: any }> {
  try {
    const nowIso = new Date().toISOString();

    const { data: existingRows, error: fetchError } = await supabase
      .from("user_routes")
      .select("id, route_id, status, completed_at")
      .eq("user_id", userId);

    if (fetchError) {
      return { error: fetchError };
    }

    const rows = existingRows || [];

    // 対象以外の進行中ルートをすべて進行中から外す（1個制限の担保）
    const otherActiveRows = rows.filter(
      (r: any) =>
        r.route_id !== routeId &&
        (r.status === "IN_PROGRESS" || r.status === "in_progress")
    );

    for (const other of otherActiveRows) {
      const nextStatus = other.completed_at ? "COMPLETED" : "CANCELED";
      await supabase
        .from("user_routes")
        .update({ status: nextStatus })
        .eq("id", other.id);
    }

    // 対象ルートを IN_PROGRESS & joined_at = now として登録・更新
    const targetRow = rows.find((r: any) => r.route_id === routeId);
    if (targetRow) {
      const { error: updateError } = await supabase
        .from("user_routes")
        .update({
          status: "IN_PROGRESS",
          joined_at: nowIso,
        })
        .eq("id", targetRow.id);
      return { error: updateError };
    } else {
      const { error: insertError } = await supabase
        .from("user_routes")
        .insert({
          user_id: userId,
          route_id: routeId,
          status: "IN_PROGRESS",
          joined_at: nowIso,
        });
      return { error: insertError };
    }
  } catch (err) {
    return { error: err };
  }
}
