"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";

const getLocalBookmarkKey = (userId: string) => `shuin_bookmarks_${userId}`;

function readLocalBookmarks(userId: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(getLocalBookmarkKey(userId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalBookmarks(userId: string, routeIds: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      getLocalBookmarkKey(userId),
      JSON.stringify(Array.from(new Set(routeIds)))
    );
  } catch {
    // ignore storage errors
  }
}

export function useRouteBookmark(routeId: string, initialFavoriteCount = 0) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const { showAlert } = useCustomAlert();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(initialFavoriteCount);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState(false);

  useEffect(() => {
    setFavoriteCount(initialFavoriteCount);
  }, [initialFavoriteCount]);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setIsBookmarked(false);
      setLoading(false);
      return;
    }

    let mounted = true;
    const checkBookmark = async () => {
      try {
        const localIds = readLocalBookmarks(user.id);
        const { data, error } = await supabase
          .from("user_bookmarks")
          .select("id")
          .eq("user_id", user.id)
          .eq("route_id", routeId)
          .maybeSingle();

        if (!mounted) return;
        if (!error && data) {
          setIsBookmarked(true);
          if (!localIds.includes(routeId)) {
            writeLocalBookmarks(user.id, [...localIds, routeId]);
          }
        } else {
          setIsBookmarked(localIds.includes(routeId));
        }
      } catch {
        if (mounted) {
          const localIds = readLocalBookmarks(user.id);
          setIsBookmarked(localIds.includes(routeId));
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    checkBookmark();
    return () => {
      mounted = false;
    };
  }, [user, authLoading, routeId]);

  const toggleBookmark = useCallback(async () => {
    if (!user) {
      const goLogin = await showAlert({
        text: "ルートを保存（お気に入り登録）するにはログインが必要です。\nログイン画面へ移動しますか？",
        okText: "ログインへ",
        ngText: "閉じる",
      });
      if (goLogin) {
        router.push(`/login?redirect=/routes/${routeId}`);
      }
      return;
    }

    if (toggling) return;
    setToggling(true);

    const nextState = !isBookmarked;
    const localIds = readLocalBookmarks(user.id);

    // Optimistic update
    setIsBookmarked(nextState);
    setFavoriteCount((prev) => Math.max(0, prev + (nextState ? 1 : -1)));

    try {
      if (nextState) {
        writeLocalBookmarks(user.id, [...localIds, routeId]);
        const { data: existing } = await supabase
          .from("user_bookmarks")
          .select("id")
          .eq("user_id", user.id)
          .eq("route_id", routeId)
          .maybeSingle();

        if (!existing) {
          const { error } = await supabase.from("user_bookmarks").insert({
            user_id: user.id,
            route_id: routeId,
          });
          if (error) {
            console.warn("Bookmark insert warning (saved locally):", error.message);
          }
        }
      } else {
        writeLocalBookmarks(
          user.id,
          localIds.filter((id) => id !== routeId)
        );
        const { error } = await supabase
          .from("user_bookmarks")
          .delete()
          .eq("user_id", user.id)
          .eq("route_id", routeId);
        if (error) {
          console.warn("Bookmark delete warning:", error.message);
        }
      }
    } catch (err) {
      console.error("Failed to toggle bookmark:", err);
    } finally {
      setToggling(false);
    }
  }, [user, toggling, isBookmarked, routeId, router, showAlert]);

  return {
    isBookmarked,
    favoriteCount,
    loading: loading || toggling,
    toggleBookmark,
  };
}
