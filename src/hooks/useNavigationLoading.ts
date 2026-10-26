"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NAVIGATION_START_EVENT = "shuin:navigation-start";
const MIN_DISPLAY_MS = 450;
const MAX_LOADING_MS = 8000;

interface NavigationStartDetail {
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
    } catch {
      // 相対パス等のパース失敗時はそのままイベント発火に進む
    }
  }

  window.dispatchEvent(
    new CustomEvent<NavigationStartDetail>(NAVIGATION_START_EVENT, {
      detail: { message },
    })
  );
}

export function useNavigationLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams?.toString() ?? "";

  const [isNavigating, setIsNavigating] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("しるしを辿っています…");

  const startedAtRef = useRef<number | null>(null);
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
    (customMessage?: string) => {
      clearTimers();
      startedAtRef.current = Date.now();
      setLoadingMessage(customMessage || "しるしを辿っています…");
      setIsNavigating(true);

      safetyTimerRef.current = setTimeout(() => {
        startedAtRef.current = null;
        setIsNavigating(false);
      }, MAX_LOADING_MS);
    },
    [clearTimers]
  );

  // パスまたはクエリパラメータが変化したら遷移完了としてローディングを解除
  // キャッシュ済みの戻る遷移等で一瞬で切り替わった場合も、最低表示時間(MIN_DISPLAY_MS)はアニメーションを見せる
  useEffect(() => {
    if (startedAtRef.current === null) {
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
      setIsNavigating(false);
    }, remaining);
  }, [pathname, searchKey, clearTimers]);

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

        // 同一パス＆同一クエリへのリンク押下時は遷移が発生しないため無視
        if (
          destUrl.pathname === window.location.pathname &&
          destUrl.search === window.location.search
        ) {
          return;
        }

        startNavigation();
      } catch {
        // 無効なURLは無視
      }
    };

    const handleCustomNavigationStart = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationStartDetail>;
      startNavigation(customEvent.detail?.message);
    };

    const handlePopState = () => {
      startNavigation();
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
