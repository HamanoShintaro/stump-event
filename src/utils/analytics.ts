"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch {
    // ignore analytics errors
  }
}

export function trackRouteJoin(routeId: string, routeTitle?: string) {
  trackEvent("route_join", {
    route_id: routeId,
    route_title: routeTitle || "",
  });
}

export function trackRouteBookmark(routeId: string, isBookmarked: boolean) {
  trackEvent("route_bookmark", {
    route_id: routeId,
    bookmark_action: isBookmarked ? "add" : "remove",
  });
}
