"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useCustomAlert } from "@/hooks/useCustomAlert";

export const EMBEDDED_CHECKOUT_OPEN_EVENT = "shuin-embedded-checkout-open";
const SUBSCRIPTION_UPDATED_EVENT = "shuin-subscription-updated";

export interface EmbeddedCheckoutPayload {
  clientSecret: string;
  publishableKey: string;
  sessionId: string;
  userId: string;
}

interface StripeEmbeddedCheckoutInstance {
  mount: (element: HTMLElement | string) => void;
  destroy: () => void;
}

interface StripeJsInstance {
  createEmbeddedCheckoutPage?: (options: {
    fetchClientSecret: () => Promise<string>;
    onComplete?: () => void;
  }) => Promise<StripeEmbeddedCheckoutInstance>;
  initEmbeddedCheckout?: (options: {
    fetchClientSecret?: () => Promise<string>;
    clientSecret?: string;
    onComplete?: () => void;
  }) => Promise<StripeEmbeddedCheckoutInstance>;
}

declare global {
  interface Window {
    Stripe?: (publishableKey: string) => StripeJsInstance;
  }
}

let stripeScriptPromise: Promise<void> | null = null;

function loadStripeJs(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Stripe) return Promise.resolve();
  if (stripeScriptPromise) return stripeScriptPromise;

  stripeScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      'script[src="https://js.stripe.com/v3/"]'
    ) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Stripe.js の読み込みに失敗しました。"))
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      stripeScriptPromise = null;
      reject(new Error("Stripe.js の読み込みに失敗しました。"));
    };
    document.head.appendChild(script);
  });

  return stripeScriptPromise;
}

export function useEmbeddedCheckout(isOpen: boolean, onClose: () => void) {
  const { showAlert } = useCustomAlert();
  const [embeddedSession, setEmbeddedSession] =
    useState<EmbeddedCheckoutPayload | null>(null);
  const [mountingCheckout, setMountingCheckout] = useState<boolean>(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const checkoutInstanceRef = useRef<StripeEmbeddedCheckoutInstance | null>(
    null
  );

  const destroyCurrentInstance = useCallback(() => {
    if (checkoutInstanceRef.current) {
      try {
        checkoutInstanceRef.current.destroy();
      } catch {
        // ignore destroy error
      }
      checkoutInstanceRef.current = null;
    }
  }, []);

  const resetEmbeddedCheckout = useCallback(() => {
    destroyCurrentInstance();
    setEmbeddedSession(null);
    setMountingCheckout(false);
    setCheckoutError(null);
  }, [destroyCurrentInstance]);

  useEffect(() => {
    if (!isOpen) {
      resetEmbeddedCheckout();
    }
  }, [isOpen, resetEmbeddedCheckout]);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<EmbeddedCheckoutPayload>;
      if (customEvent.detail?.clientSecret && customEvent.detail?.publishableKey) {
        setCheckoutError(null);
        setEmbeddedSession(customEvent.detail);
      }
    };
    window.addEventListener(EMBEDDED_CHECKOUT_OPEN_EVENT, handleOpen);
    return () => {
      window.removeEventListener(EMBEDDED_CHECKOUT_OPEN_EVENT, handleOpen);
    };
  }, [isOpen]);

  const handleCheckoutComplete = useCallback(
    async (payload: EmbeddedCheckoutPayload) => {
      try {
        localStorage.setItem(
          `shuin_premium_status_${payload.userId}`,
          "active"
        );
      } catch {
        // ignore storage error
      }

      let customerId: string | null = null;
      let subscriptionId: string | null = null;

      try {
        const verifyRes = await fetch("/api/stripe/checkout", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: payload.sessionId }),
        });
        const verifyData = await verifyRes.json().catch(() => null);
        if (verifyData?.customerId) customerId = String(verifyData.customerId);
        if (verifyData?.subscriptionId)
          subscriptionId = String(verifyData.subscriptionId);
      } catch {
        // ignore verify error
      }

      try {
        await supabase.from("users").upsert(
          {
            id: payload.userId,
            is_premium: true,
            subscription_status: "active",
            ...(customerId ? { stripe_customer_id: customerId } : {}),
            ...(subscriptionId
              ? { stripe_subscription_id: subscriptionId }
              : {}),
          },
          { onConflict: "id" }
        );
      } catch {
        // ignore db error if unmigrated
      }

      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent(SUBSCRIPTION_UPDATED_EVENT));
      }

      resetEmbeddedCheckout();
      onClose();

      await showAlert({
        text: "SHUIN プレミアムが有効になりました。\n「思い出写真の無制限記録・見返し」および「連れ立ちの招待コード発行（ホスト機能）」をご利用いただけます。",
        okText: "はじめる",
      });
    },
    [onClose, resetEmbeddedCheckout, showAlert]
  );

  useEffect(() => {
    if (!isOpen || !embeddedSession || !containerRef.current) return;

    let cancelled = false;
    setMountingCheckout(true);
    setCheckoutError(null);

    (async () => {
      try {
        await loadStripeJs();
        if (cancelled || !window.Stripe || !containerRef.current) return;

        destroyCurrentInstance();

        const stripe = window.Stripe(embeddedSession.publishableKey);
        const onComplete = () => {
          handleCheckoutComplete(embeddedSession);
        };

        let instance: StripeEmbeddedCheckoutInstance;
        if (typeof stripe.createEmbeddedCheckoutPage === "function") {
          instance = await stripe.createEmbeddedCheckoutPage({
            fetchClientSecret: async () => embeddedSession.clientSecret,
            onComplete,
          });
        } else if (typeof stripe.initEmbeddedCheckout === "function") {
          instance = await stripe.initEmbeddedCheckout({
            fetchClientSecret: async () => embeddedSession.clientSecret,
            onComplete,
          });
        } else {
          throw new Error("埋め込み決済モジュールの初期化に失敗しました。");
        }

        if (cancelled || !containerRef.current) {
          instance.destroy();
          return;
        }

        checkoutInstanceRef.current = instance;
        instance.mount(containerRef.current);
      } catch (err: any) {
        if (!cancelled) {
          setCheckoutError(
            err?.message || "決済フォームの読み込みに失敗しました。"
          );
        }
      } finally {
        if (!cancelled) {
          setMountingCheckout(false);
        }
      }
    })();

    return () => {
      cancelled = true;
      destroyCurrentInstance();
    };
  }, [
    isOpen,
    embeddedSession,
    destroyCurrentInstance,
    handleCheckoutComplete,
  ]);

  return {
    isEmbeddedCheckoutActive: Boolean(embeddedSession),
    mountingCheckout,
    checkoutError,
    containerRef,
    cancelEmbeddedCheckout: resetEmbeddedCheckout,
  };
}
