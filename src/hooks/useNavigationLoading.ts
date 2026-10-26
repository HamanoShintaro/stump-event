"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NAVIGATION_START_EVENT = "shuin:navigation-start";
const MIN_DISPLAY_MS = 450;
const MAX_LOADING_MS = 8000;

interface NavigationStartDetail {
  targetPath?: string;
  message?: string;
}

/**
 * プログラムからの画面遷移（router.push / router.back 等）時に
 * 共通ローディングアニメーションを開始するヘルパー関数
 */
export function triggerNavigationLoading(
  targetHref?: string,
  message?: string
): void {
  if (typeof window === "undefined") return;

  let resolvedTargetPath: string | undefined;

  if (targetHref) {
    try {
      const url = new URL(targetHref, window.location.origin);
      if (
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }
      resolvedTargetPath = `${url.pathname}${url.search}`;
    } catch {
      // 相対パス等のパース失敗時はそのままイベント発火に進む
    }
  }

  window.dispatchEvent(
    new CustomEvent<NavigationStartDetail>(NAVIGATION_START_EVENT, {
      detail: { targetPath: resolvedTargetPath, message },
    })
  );
}

export function useNavigationLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams?.toString() ?? "";
  const currentReactPath = `${pathname}${searchKey ? `?${searchKey}` : ""}`;

  const [isNavigating, setIsNavigating] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("しるしを辿っています…");

  const startedAtRef = useRef<number | null>(null);
  const originPathRef = useRef<string | null>(null);
  const targetPathRef = useRef<string | null>(null);
  const lastLocationRef = useRef<string>(currentReactPath);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const startNavigation = useCallback(
    (
      originPath: string,
      targetPath?: string,
      customMessage?: string
    ) => {
      clearTimers();
      startedAtRef.current = Date.now();
      originPathRef.current = originPath;
      targetPathRef.current = targetPath ?? null;
      setLoadingMessage(customMessage || "しるしを辿っています…");
      setIsNavigating(true);

      safetyTimerRef.current = setTimeout(() => {
        startedAtRef.current = null;
        originPathRef.current = null;
        targetPathRef.current = null;
        setIsNavigating(false);
      }, MAX_LOADING_MS);
    },
    [clearTimers]
  );

  // パスまたはクエリパラメータが変化したら遷移完了としてローディングを解除
  // キャッシュ済みの戻る遷移等で一瞬で切り替わった場合も、最低表示時間(MIN_DISPLAY_MS)はアニメーションを見せる
  useEffect(() => {
    lastLocationRef.current = currentReactPath;

    if (startedAtRef.current === null) {
      return;
    }

    const hasMovedFromOrigin =
      originPathRef.current !== null &&
      currentReactPath !== originPathRef.current;
    const hasReachedTarget =
      targetPathRef.current !== null &&
      currentReactPath === targetPathRef.current;

    if (!hasMovedFromOrigin && !hasReachedTarget) {
      return;
    }

    const elapsed = Date.now() - startedAtRef.current;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      clearTimers();
      startedAtRef.current = null;
      originPathRef.current = null;
      targetPathRef.current = null;
      setIsNavigating(false);
    }, remaining);
  }, [currentReactPath, isNavigating, clearTimers]);

  useEffect(() => {
    // キャプチャフェーズ(true)で検知することで、Next.jsの<Link>がe.preventDefault()を呼ぶ前に確実に捕捉する
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      if (
        anchor.target &&
        anchor.target !== "_self" &&
        anchor.target !== ""
      ) {
        return;
      }

      if (anchor.hasAttribute("download")) return;

      try {
        const destUrl = new URL(anchor.href, window.location.origin);
        if (destUrl.origin !== window.location.origin) return;

        const currentPathAndSearch = `${window.location.pathname}${window.location.search}`;
        const destPathAndSearch = `${destUrl.pathname}${destUrl.search}`;

        // 同一パス＆同一クエリへのリンク（同一ページ内ハッシュ移動 /guide#step-1 等を含む）は無視
        if (destPathAndSearch === currentPathAndSearch) {
          return;
        }

        startNavigation(currentPathAndSearch, destPathAndSearch);
      } catch {
        // 無効なURLは無視
      }
    };

    const handleCustomNavigationStart = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationStartDetail>;
      const currentPathAndSearch = `${window.location.pathname}${window.location.search}`;
      startNavigation(
        currentPathAndSearch,
        customEvent.detail?.targetPath,
        customEvent.detail?.message
      );
    };

    const handlePopState = () => {
      const newPathAndSearch = `${window.location.pathname}${window.location.search}`;
      // 同一ページ内のハッシュ移動（#step-1 等）で発火する popstate は画面遷移ではないため無視
      if (newPathAndSearch === lastLocationRef.current) {
        return;
      }
      const prevPath = lastLocationRef.current;
      lastLocationRef.current = newPathAndSearch;
      startNavigation(prevPath, newPathAndSearch);
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener(NAVIGATION_START_EVENT, handleCustomNavigationStart);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener(
        NAVIGATION_START_EVENT,
        handleCustomNavigationStart
      );
      window.removeEventListener("popstate", handlePopState);
      clearTimers();
    };
  }, [startNavigation, clearTimers]);

  return {
    isNavigating,
    loadingMessage,
  };
}
