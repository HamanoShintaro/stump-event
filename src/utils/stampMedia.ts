"use client";

import { SupabaseClient, User } from "@supabase/supabase-js";

export interface CompanionMember {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  joinedAt?: string;
  isMe: boolean;
}

export interface SharedStampMemory {
  id: string;
  userId: string;
  spotId: string;
  displayName: string;
  avatarUrl: string | null;
  memo: string | null;
  photoUrl: string | null;
  acquiredAt: string;
  isMe: boolean;
}

/**
 * Authユーザー情報から表示名を安全に取得する
 */
export function getDisplayNameFromAuthUser(user: User | null | undefined): string {
  if (!user) return "旅人";
  const meta = user.user_metadata || {};
  const name =
    meta.display_name ||
    meta.full_name ||
    meta.name ||
    meta.user_name ||
    (user.email ? user.email.split("@")[0] : "");
  return (typeof name === "string" && name.trim()) ? name.trim() : "旅人";
}

/**
 * Authユーザー情報からアバターURLを取得する
 */
export function getAvatarFromAuthUser(user: User | null | undefined): string | null {
  if (!user) return null;
  const meta = user.user_metadata || {};
  return meta.avatar_url || meta.picture || null;
}

/**
 * group_members.status に埋め込まれた表示名 ("ACTIVE:名前") または users リレーションから表示名を解決する
 * public.users の RLS により他ユーザーの行が null になる場合でも確実に同行者として認識させる
 */
export function parseMemberDisplayName(
  memberRow: any,
  currentUserId?: string,
  fallbackIndex?: number
): string {
  const u = Array.isArray(memberRow?.users) ? memberRow.users[0] : memberRow?.users;
  if (u?.display_name && String(u.display_name).trim()) {
    return String(u.display_name).trim();
  }
  const statusStr = typeof memberRow?.status === "string" ? memberRow.status : "";
  if (statusStr.startsWith("ACTIVE:")) {
    const embedded = statusStr.slice("ACTIVE:".length).trim();
    if (embedded) return embedded;
  }
  if (currentUserId && memberRow?.user_id === currentUserId) {
    return "自分";
  }
  return fallbackIndex !== undefined ? `同行の友だち${fallbackIndex > 0 ? ` (${fallbackIndex + 1})` : ""}` : "同行の友だち";
}

/**
 * group_members 用に自分の表示名を埋め込んだ status 文字列を生成する
 */
export function buildMemberStatusWithDisplayName(user: User | null | undefined): string {
  const name = getDisplayNameFromAuthUser(user);
  return `ACTIVE:${name.slice(0, 40)}`;
}

/**
 * ログインユーザーのプロフィールを public.users および参加中の group_members.status に同期する
 */
export async function syncUserProfileAndGroupStatus(
  supabase: SupabaseClient,
  user: User | null | undefined,
  groupId?: string | null
): Promise<void> {
  if (!user) return;
  const displayName = getDisplayNameFromAuthUser(user);
  const avatarUrl = getAvatarFromAuthUser(user);

  try {
    await supabase.from("users").upsert(
      {
        id: user.id,
        display_name: displayName,
        ...(avatarUrl ? { avatar_url: avatarUrl } : {}),
      },
      { onConflict: "id" }
    );
  } catch {
    // public.users のスキーマ・RLS差分で失敗しても処理は継続する
  }

  const statusValue = buildMemberStatusWithDisplayName(user);
  try {
    if (groupId) {
      await supabase
        .from("group_members")
        .update({ status: statusValue })
        .eq("group_id", groupId)
        .eq("user_id", user.id);
    } else {
      await supabase
        .from("group_members")
        .update({ status: statusValue })
        .eq("user_id", user.id);
    }
  } catch {
    // ignore
  }
}

/**
 * 特定ルートに対するユーザーの有効な連れ立ちグループ（groupId, inviteCode）を自動解決する
 * URLパラメータに groupId が無い場合でも、参加中のアクティブなグループを自動検出する
 */
export async function resolveActiveGroupForRoute(
  supabase: SupabaseClient,
  user: User | null | undefined,
  routeId: string,
  urlGroupId?: string | null
): Promise<{ groupId: string; inviteCode: string } | null> {
  if (!user || !routeId) return null;

  // 1. URL指定の groupId がある場合、そのグループ情報を取得しメンバー登録を確実にする
  if (urlGroupId) {
    const { data: gData } = await supabase
      .from("groups")
      .select("id, invite_code, route_id, is_active")
      .eq("id", urlGroupId)
      .maybeSingle();

    if (gData) {
      const statusValue = buildMemberStatusWithDisplayName(user);
      const { data: existingMember } = await supabase
        .from("group_members")
        .select("user_id, status")
        .eq("group_id", gData.id)
        .eq("user_id", user.id)
        .maybeSingle();

      if (!existingMember) {
        await supabase.from("group_members").insert({
          group_id: gData.id,
          user_id: user.id,
          status: statusValue,
        });
      } else if (existingMember.status !== statusValue) {
        await supabase
          .from("group_members")
          .update({ status: statusValue })
          .eq("group_id", gData.id)
          .eq("user_id", user.id);
      }

      return { groupId: gData.id, inviteCode: gData.invite_code || "" };
    }
  }

  // 2. URL指定がない場合、自分が参加している該当ルートのアクティブなグループを検索
  const { data: memberGroups } = await supabase
    .from("group_members")
    .select("group_id, status, joined_at, groups!inner(id, route_id, invite_code, is_active, created_at)")
    .eq("user_id", user.id)
    .eq("groups.route_id", routeId)
    .eq("groups.is_active", true)
    .order("joined_at", { ascending: false });

  if (memberGroups && memberGroups.length > 0) {
    // 複数ある場合は他メンバーが合流しているグループ、または最新のグループを優先
    const groupIds = memberGroups.map((m: any) => m.group_id);
    const { data: allMembers } = await supabase
      .from("group_members")
      .select("group_id, user_id")
      .in("group_id", groupIds);

    let chosen = memberGroups[0] as any;
    if (allMembers && allMembers.length > 0) {
      const withPartner = memberGroups.find((mg: any) =>
        allMembers.some((am: any) => am.group_id === mg.group_id && am.user_id !== user.id)
      );
      if (withPartner) chosen = withPartner;
    }

    const gObj = Array.isArray(chosen.groups) ? chosen.groups[0] : chosen.groups;
    if (gObj?.id) {
      const statusValue = buildMemberStatusWithDisplayName(user);
      if (chosen.status !== statusValue) {
        await supabase
          .from("group_members")
          .update({ status: statusValue })
          .eq("group_id", gObj.id)
          .eq("user_id", user.id);
      }
      return { groupId: gObj.id, inviteCode: gObj.invite_code || "" };
    }
  }

  return null;
}

/**
 * グループメンバー一覧を取得する（public.users が RLS で null でも欠落させない）
 */
export async function fetchGroupCompanionMembers(
  supabase: SupabaseClient,
  groupId: string,
  currentUser?: User | null
): Promise<CompanionMember[]> {
  if (!groupId) return [];

  const { data: rows } = await supabase
    .from("group_members")
    .select("group_id, user_id, status, joined_at, users(id, display_name, avatar_url)")
    .eq("group_id", groupId)
    .order("joined_at", { ascending: true });

  if (!rows || rows.length === 0) return [];

  let partnerIdx = 0;
  return rows.map((r: any) => {
    const isMe = Boolean(currentUser && r.user_id === currentUser.id);
    const u = Array.isArray(r.users) ? r.users[0] : r.users;
    const displayName = isMe
      ? getDisplayNameFromAuthUser(currentUser)
      : parseMemberDisplayName(r, currentUser?.id, partnerIdx++);
    const avatarUrl = isMe
      ? u?.avatar_url || getAvatarFromAuthUser(currentUser)
      : u?.avatar_url || null;

    return {
      userId: r.user_id,
      displayName,
      avatarUrl,
      joinedAt: r.joined_at,
      isMe,
    };
  });
}

/**
 * 画像ファイルをクライアント側 Canvas でリサイズ・JPEG圧縮する（最大1024px / 品質0.78）
 * 60KB〜150KB程度に軽量化することで、モバイル回線でのアップロード失敗や容量制限エラーを防ぐ
 */
export async function compressImageFile(
  file: File,
  maxDimension = 1024,
  quality = 0.78
): Promise<{ blob: Blob; dataUrl: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("画像の読み込みに失敗しました"));
    reader.onload = () => {
      const dataUrlSource = reader.result as string;
      const img = new Image();
      img.onerror = () => {
        // Image デコードに失敗した場合は元のファイル/DataURLをそのまま返す
        resolve({ blob: file, dataUrl: dataUrlSource });
      };
      img.onload = () => {
        try {
          let { width, height } = img;
          if (width > maxDimension || height > maxDimension) {
            if (width >= height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve({ blob: file, dataUrl: dataUrlSource });
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
          canvas.toBlob(
            (blob) => {
              resolve({
                blob: blob || file,
                dataUrl: compressedDataUrl,
              });
            },
            "image/jpeg",
            quality
          );
        } catch {
          resolve({ blob: file, dataUrl: dataUrlSource });
        }
      };
      img.src = dataUrlSource;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * 押印写真を圧縮して Supabase Storage ('stamps') にアップロードする。
 * Storage の RLS ポリシー制限等で失敗した場合も、軽量化した DataURL に自動フォールバックし、
 * 確実に stamp_events.photo_url に保存できるようにする。
 */
export async function uploadStampPhotoWithFallback(
  supabase: SupabaseClient,
  userId: string,
  spotId: string,
  file: File
): Promise<string> {
  const { blob, dataUrl } = await compressImageFile(file, 1024, 0.78);
  const filePath = `${userId}/${spotId}_${Date.now()}.jpg`;

  try {
    const { error: uploadError } = await supabase.storage
      .from("stamps")
      .upload(filePath, blob, {
        upsert: true,
        contentType: "image/jpeg",
      });

    if (!uploadError) {
      const { data: publicUrlData } = supabase.storage
        .from("stamps")
        .getPublicUrl(filePath);
      if (publicUrlData?.publicUrl) {
        return publicUrlData.publicUrl;
      }
    } else {
      console.warn("Storage upload blocked or failed, using compressed DataURL fallback:", uploadError.message);
    }
  } catch (err) {
    console.warn("Storage upload exception, using compressed DataURL fallback:", err);
  }

  return dataUrl;
}

/**
 * 特定スポット（または複数スポット）におけるグループメンバー全員の押印・写真・コメントを取得する
 * group_id が一致するレコードだけでなく、同じグループのメンバーがそのスポットで刻んだ印も統合して返す
 */
export async function fetchGroupSharedMemoriesForSpots(
  supabase: SupabaseClient,
  spotIds: string[],
  groupId: string | null | undefined,
  members: CompanionMember[],
  currentUserId?: string
): Promise<Record<string, SharedStampMemory[]>> {
  const result: Record<string, SharedStampMemory[]> = {};
  if (!spotIds || spotIds.length === 0) return result;

  const memberUserIds = Array.from(
    new Set([
      ...members.map((m) => m.userId),
      ...(currentUserId ? [currentUserId] : []),
    ])
  );

  const memberMap = new Map<string, CompanionMember>();
  members.forEach((m) => memberMap.set(m.userId, m));

  // メンバー全員の該当スポットでの stamp_events、および group_id 一致分を取得
  let rows: any[] = [];
  if (memberUserIds.length > 0) {
    const { data: byUsers } = await supabase
      .from("stamp_events")
      .select("id, user_id, spot_id, group_id, memo, photo_url, created_at")
      .in("spot_id", spotIds)
      .in("user_id", memberUserIds)
      .order("created_at", { ascending: false });
    if (byUsers) rows.push(...byUsers);
  }

  if (groupId) {
    const { data: byGroup } = await supabase
      .from("stamp_events")
      .select("id, user_id, spot_id, group_id, memo, photo_url, created_at")
      .in("spot_id", spotIds)
      .eq("group_id", groupId)
      .order("created_at", { ascending: false });
    if (byGroup) rows.push(...byGroup);
  }

  // id で重複排除しつつ、(spot_id, user_id) ごとに写真やコメントがある方を優先統合
  const seenIds = new Set<string>();
  const uniqueRows: any[] = [];
  for (const r of rows) {
    if (!r?.id || seenIds.has(r.id)) continue;
    seenIds.add(r.id);
    uniqueRows.push(r);
  }

  const perSpotUser = new Map<string, SharedStampMemory>();
  let unknownIdx = 0;

  for (const r of uniqueRows) {
    const key = `${r.spot_id}__${r.user_id}`;
    const member = memberMap.get(r.user_id);
    const isMe = Boolean(currentUserId && r.user_id === currentUserId);
    const existing = perSpotUser.get(key);

    const memo = r.memo && String(r.memo).trim() ? String(r.memo).trim() : null;
    const photoUrl = normalizeLocalImageUrl(r.photo_url);

    if (!existing) {
      perSpotUser.set(key, {
        id: r.id,
        userId: r.user_id,
        spotId: r.spot_id,
        displayName: member?.displayName || (isMe ? "自分" : `同行の友だち (${++unknownIdx})`),
        avatarUrl: member?.avatarUrl || null,
        memo,
        photoUrl,
        acquiredAt: r.created_at,
        isMe,
      });
    } else {
      // 複数回レコードがある場合は photoUrl / memo が入っている方を補完する
      if (!existing.photoUrl && photoUrl) existing.photoUrl = photoUrl;
      if (!existing.memo && memo) existing.memo = memo;
    }
  }

  for (const mem of perSpotUser.values()) {
    if (!result[mem.spotId]) result[mem.spotId] = [];
    result[mem.spotId].push(mem);
  }

  // 同行メンバー（自分以外）を先に、または写真・コメント付きを優先して並べる
  for (const spotId of Object.keys(result)) {
    result[spotId].sort((a, b) => {
      if (a.isMe !== b.isMe) return a.isMe ? 1 : -1;
      const aHasContent = Boolean(a.photoUrl || a.memo);
      const bHasContent = Boolean(b.photoUrl || b.memo);
      if (aHasContent !== bHasContent) return aHasContent ? -1 : 1;
      return new Date(b.acquiredAt).getTime() - new Date(a.acquiredAt).getTime();
    });
  }

  return result;
}

const OPTIMIZED_LOCAL_DIRS = new Set([
  "jiyugaoka",
  "yono",
  "iwatsuki",
  "kitaurawa",
  "shintoshin",
]);

/**
 * 圧縮最適化済みディレクトリ（/images/{jiyugaoka,yono,iwatsuki,kitaurawa,shintoshin}/）の
 * 旧 .png ローカルパスを .jpg に正規化する
 */
export function normalizeLocalImageUrl(url: string | null | undefined): string | null {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/^\/images\/([^/]+)\/([^/]+)\.png$/i);
  if (match && OPTIMIZED_LOCAL_DIRS.has(match[1].toLowerCase())) {
    return `/images/${match[1]}/${match[2]}.jpg`;
  }
  return trimmed;
}

/**
 * stamp_events レコードから写真URLとコメント（memo）を安全に抽出する
 */
export function extractStampMemories(row: any): {
  photoUrl: string | null;
  comment: string | null;
} {
  if (!row) return { photoUrl: null, comment: null };
  const rawPhoto = normalizeLocalImageUrl(row.photo_url);
  const rawMemo =
    typeof row.memo === "string" && row.memo.trim() ? row.memo.trim() : null;
  return {
    photoUrl: rawPhoto,
    comment: rawMemo,
  };
}

