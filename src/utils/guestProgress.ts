import type { SupabaseClient, User } from "@supabase/supabase-js";
import { evaluateBadges } from "@/utils/badgeEvaluator";
import { activateUserRoute } from "@/utils/userRoutes";

const STORAGE_KEY = "shuin_guest_progress_v1";
const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

export interface GuestStampRecord {
  spotId: string;
  routeId: string;
  method: "gps" | "qr";
  qrTokenUsed: string | null;
  lat: number | null;
  lng: number | null;
  distanceToSpotM: number | null;
  acquiredAt: string;
}

export interface GuestJoinedRoute {
  routeId: string;
  joinedAt: string;
}

export interface GuestProgressState {
  joinedRoutes: GuestJoinedRoute[];
  stamps: GuestStampRecord[];
  activeSpotId: string | null;
}

const EMPTY_STATE: GuestProgressState = {
  joinedRoutes: [],
  stamps: [],
  activeSpotId: null,
};

let isSyncing = false;

export function loadGuestProgress(): GuestProgressState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw);
    return {
      joinedRoutes: Array.isArray(parsed?.joinedRoutes) ? parsed.joinedRoutes : [],
      stamps: Array.isArray(parsed?.stamps) ? parsed.stamps : [],
      activeSpotId: typeof parsed?.activeSpotId === "string" ? parsed.activeSpotId : null,
    };
  } catch {
    return EMPTY_STATE;
  }
}

function saveGuestProgress(state: GuestProgressState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Failed to save guest progress:", e);
  }
}

export function clearGuestProgress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function saveGuestJoinedRoute(routeId: string): void {
  const state = loadGuestProgress();
  const filtered = state.joinedRoutes.filter((r) => r.routeId !== routeId);
  filtered.push({ routeId, joinedAt: new Date().toISOString() });
  saveGuestProgress({ ...state, joinedRoutes: filtered });
}

export function isGuestRouteJoined(routeId: string): boolean {
  const state = loadGuestProgress();
  const found = state.joinedRoutes.find((r) => r.routeId === routeId);
  if (!found) return false;
  const joinedMs = new Date(found.joinedAt).getTime();
  return Number.isFinite(joinedMs) && Date.now() - joinedMs <= TWENTY_FOUR_HOURS_MS;
}

export function saveGuestStamp(record: GuestStampRecord): void {
  const state = loadGuestProgress();
  saveGuestProgress({
    ...state,
    stamps: [record, ...state.stamps],
  });
}

export function getGuestStampsForSpot(spotId: string): GuestStampRecord[] {
  const state = loadGuestProgress();
  return state.stamps.filter((s) => s.spotId === spotId);
}

export function getGuestStampsForRoute(routeId: string): GuestStampRecord[] {
  const state = loadGuestProgress();
  return state.stamps.filter((s) => s.routeId === routeId);
}

export function setGuestActiveSpotId(spotId: string | null): void {
  const state = loadGuestProgress();
  saveGuestProgress({ ...state, activeSpotId: spotId });
}

export function getGuestActiveSpotId(): string | null {
  return loadGuestProgress().activeSpotId;
}

export function hasPendingGuestProgress(): boolean {
  const state = loadGuestProgress();
  return (
    state.joinedRoutes.length > 0 ||
    state.stamps.length > 0 ||
    Boolean(state.activeSpotId)
  );
}

/**
 * ゲスト状態で localStorage に仮保存していた参加ルート・押印・目的地を
 * ログイン後のユーザーアカウント（Supabase）へ自動引き継ぎする。
 * 成功したレコードのみローカルから除外し、失敗分は次回リトライのため保持する。
 */
export async function syncGuestProgressToSupabase(
  supabase: SupabaseClient,
  user: User
): Promise<void> {
  if (typeof window === "undefined" || isSyncing) return;
  if (!hasPendingGuestProgress()) return;

  isSyncing = true;
  try {
    const state = loadGuestProgress();
    let remainingJoinedRoutes = [...state.joinedRoutes];
    const failedStamps: GuestStampRecord[] = [];
    let remainingActiveSpotId = state.activeSpotId;

    // 1. 仮参加ルート（24時間以内の最新1件を既存ルール通りにIN_PROGRESSへ同期）
    const activeGuestRoute = [...state.joinedRoutes]
      .filter((r) => {
        const ms = new Date(r.joinedAt).getTime();
        return Number.isFinite(ms) && Date.now() - ms <= TWENTY_FOUR_HOURS_MS;
      })
      .sort((a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime())[0];

    if (activeGuestRoute) {
      const { error: joinError } = await activateUserRoute(
        user.id,
        activeGuestRoute.routeId
      );
      if (!joinError) {
        remainingJoinedRoutes = [];
      } else {
        console.warn("Guest sync user_routes error:", joinError);
      }
    } else {
      // 期限切れの仮参加レコードのみであれば整理
      remainingJoinedRoutes = [];
    }

    // 2. 仮押印の引き継ぎ（古い順に同期し、成功分のみ消化）
    const orderedStamps = [...state.stamps].reverse();
    for (const stamp of orderedStamps) {
      try {
        const { count: priorCount, error: countErr } = await supabase
          .from("stamps")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id)
          .eq("spot_id", stamp.spotId);

        if (countErr) {
          failedStamps.push(stamp);
          continue;
        }

        const isFirst = (priorCount || 0) === 0;

        // 同時間帯の重複引き継ぎを防止（既にDBにある場合は同期済みとみなしてスキップ）
        if (!isFirst) {
          const { data: latestStamp } = await supabase
            .from("stamps")
            .select("acquired_at")
            .eq("user_id", user.id)
            .eq("spot_id", stamp.spotId)
            .order("acquired_at", { ascending: false })
            .limit(1)
            .maybeSingle();

          if (latestStamp?.acquired_at) {
            const diff = Math.abs(
              new Date(latestStamp.acquired_at).getTime() -
                new Date(stamp.acquiredAt).getTime()
            );
            if (diff < 60 * 60 * 1000) {
              continue;
            }
          }
        }

        const { data: eventData, error: eventError } = await supabase
          .from("stamp_events")
          .insert({
            user_id: user.id,
            spot_id: stamp.spotId,
            route_id: stamp.routeId,
            method: stamp.method,
            lat: stamp.lat,
            lng: stamp.lng,
            distance_to_spot_m: stamp.distanceToSpotM,
            qr_token_used: stamp.qrTokenUsed,
            visitor_number: 1,
            is_first_visit: isFirst,
          })
          .select()
          .single();

        if (eventError || !eventData) {
          console.warn("Guest sync stamp_events error:", eventError);
          failedStamps.push(stamp);
          continue;
        }

        const { count } = await supabase
          .from("stamp_events")
          .select("*", { count: "exact", head: true })
          .eq("spot_id", stamp.spotId);

        const visitorNum = count || 47;

        const { error: stampInsertError } = await supabase.from("stamps").insert({
          stamp_event_id: eventData.id,
          user_id: user.id,
          spot_id: stamp.spotId,
          route_id: stamp.routeId,
          visitor_number: visitorNum,
          acquired_at: stamp.acquiredAt,
        });

        if (stampInsertError) {
          console.warn("Guest sync stamps insert error:", stampInsertError);
          failedStamps.push(stamp);
          continue;
        }

        try {
          await evaluateBadges(user.id, eventData.id, stamp.spotId, stamp.routeId);
        } catch (badgeErr) {
          console.warn("Guest sync badge evaluation error:", badgeErr);
        }
      } catch (stampErr) {
        console.warn("Guest sync stamp error:", stampErr);
        failedStamps.push(stamp);
      }
    }

    // 3. 仮目的地スポットの引き継ぎ
    if (remainingActiveSpotId) {
      const { error: activeSpotError } = await supabase
        .from("users")
        .upsert(
          { id: user.id, active_spot_id: remainingActiveSpotId },
          { onConflict: "id" }
        );
      if (!activeSpotError) {
        remainingActiveSpotId = null;
      } else {
        console.warn("Guest sync active_spot_id error:", activeSpotError);
      }
    }

    // 未同期（失敗）データが残っている場合は保持し、すべて完了した場合のみ削除
    if (
      remainingJoinedRoutes.length === 0 &&
      failedStamps.length === 0 &&
      !remainingActiveSpotId
    ) {
      clearGuestProgress();
    } else {
      saveGuestProgress({
        joinedRoutes: remainingJoinedRoutes,
        stamps: failedStamps.reverse(),
        activeSpotId: remainingActiveSpotId,
      });
    }
  } catch (err) {
    console.error("Failed to sync guest progress:", err);
  } finally {
    isSyncing = false;
  }
}
