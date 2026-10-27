"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import {
  EMBEDDED_CHECKOUT_OPEN_EVENT,
  EmbeddedCheckoutPayload,
} from "@/hooks/useEmbeddedCheckout";

export const FREE_PHOTO_LIMIT = 10;
export const PREMIUM_MONTHLY_PRICE_JPY = 480;

const SUBSCRIPTION_UPDATED_EVENT = "shuin-subscription-updated";

function getLocalPremiumKey(userId: string): string {
  return `shuin_premium_status_${userId}`;
}

export interface UseSubscriptionOptions {
  activeGroupId?: string | null;
}

export function useSubscription(options?: UseSubscriptionOptions) {
  const activeGroupId = options?.activeGroupId || null;
  const { user } = useAuth();
  const { showAlert } = useCustomAlert();

  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<string>("free");
  const [stripeCustomerId, setStripeCustomerId] = useState<string | null>(null);
  const [usedPhotoCount, setUsedPhotoCount] = useState<number>(0);
  const [photoSpotIds, setPhotoSpotIds] = useState<Set<string>>(new Set());
  const [isHostPremiumGroup, setIsHostPremiumGroup] = useState<boolean>(false);
  const [loadingSubscription, setLoadingSubscription] = useState<boolean>(true);
  const [processingCheckout, setProcessingCheckout] = useState<boolean>(false);

  const fetchSubscriptionAndQuota = useCallback(async () => {
    if (!user?.id) {
      setIsPremium(false);
      setSubscriptionStatus("free");
      setStripeCustomerId(null);
      setUsedPhotoCount(0);
      setPhotoSpotIds(new Set());
      setIsHostPremiumGroup(false);
      setLoadingSubscription(false);
      return;
    }

    setLoadingSubscription(true);
    try {
      // 1. ローカルキャッシュ / プレビュー状態を確認
      let localPremium = false;
      try {
        localPremium =
          typeof window !== "undefined" &&
          localStorage.getItem(getLocalPremiumKey(user.id)) === "active";
      } catch {
        // ignore storage error
      }

      // 2. Supabase users テーブルからプレミアム状態を取得（未マイグレーション環境でもエラーにしない）
      let dbPremium = false;
      let dbStatus = "free";
      let dbCustomerId: string | null = null;

      try {
        const { data: userRow, error: userErr } = await supabase
          .from("users")
          .select(
            "is_premium, subscription_status, stripe_customer_id, premium_until"
          )
          .eq("id", user.id)
          .maybeSingle();

        if (!userErr && userRow) {
          dbStatus = userRow.subscription_status || "free";
          dbCustomerId = userRow.stripe_customer_id || null;
          dbPremium =
            Boolean(userRow.is_premium) ||
            dbStatus === "active" ||
            dbStatus === "trialing";
        }
      } catch {
        // カラム未追加環境の場合はフォールバック
      }

      let resolvedPremium = dbPremium || localPremium;
      let resolvedStatus = resolvedPremium
        ? dbStatus !== "free"
          ? dbStatus
          : "active"
        : "free";
      let resolvedCustomerId = dbCustomerId;

      // 2.5. Stripe APIキー設定時はStripeの最新契約状態とリアルタイム同期（解約・削除の即時反映）
      try {
        const syncParams = new URLSearchParams({
          userId: user.id,
          ...(user.email ? { email: user.email } : {}),
          ...(dbCustomerId ? { customerId: dbCustomerId } : {}),
        });
        const syncRes = await fetch(
          `/api/stripe/checkout?${syncParams.toString()}`,
          { cache: "no-store" }
        );
        const syncData = await syncRes.json().catch(() => null);

        if (syncRes.ok && syncData?.synced) {
          resolvedPremium = Boolean(syncData.isPremium);
          resolvedStatus = resolvedPremium ? "active" : "free";
          if (syncData.customerId) {
            resolvedCustomerId = String(syncData.customerId);
          }

          try {
            if (resolvedPremium) {
              localStorage.setItem(getLocalPremiumKey(user.id), "active");
            } else {
              localStorage.removeItem(getLocalPremiumKey(user.id));
            }
          } catch {
            // ignore storage error
          }

          if (
            dbPremium !== resolvedPremium ||
            dbStatus !== resolvedStatus ||
            (resolvedCustomerId && dbCustomerId !== resolvedCustomerId)
          ) {
            try {
              await supabase
                .from("users")
                .update({
                  is_premium: resolvedPremium,
                  subscription_status: resolvedStatus,
                  ...(resolvedCustomerId
                    ? { stripe_customer_id: resolvedCustomerId }
                    : {}),
                })
                .eq("id", user.id);
            } catch {
              // ignore db update error
            }
          }
        }
      } catch {
        // ネットワークエラー時はDB/ローカルキャッシュを維持
      }

      setIsPremium(resolvedPremium);
      setSubscriptionStatus(resolvedStatus);
      setStripeCustomerId(resolvedCustomerId);

      // 3. ユーザーがこれまでに登録した思い出写真の枚数（スポット単位で重複排除）を集計
      const { data: photoRows } = await supabase
        .from("stamp_events")
        .select("id, spot_id, photo_url")
        .eq("user_id", user.id)
        .not("photo_url", "is", null);

      const spotSet = new Set<string>();
      let fallbackCount = 0;

      (photoRows || []).forEach((r: any) => {
        const url = typeof r?.photo_url === "string" ? r.photo_url.trim() : "";
        if (!url) return;
        if (r.spot_id) {
          spotSet.add(String(r.spot_id));
        } else {
          fallbackCount += 1;
        }
      });

      setPhotoSpotIds(spotSet);
      setUsedPhotoCount(spotSet.size + fallbackCount);

      // 4. 連れ立ち参加中の場合、ホストが有料会員のグループかどうかを判定
      if (activeGroupId) {
        try {
          const { data: grpData } = await supabase
            .from("groups")
            .select("id, created_by, is_active")
            .eq("id", activeGroupId)
            .maybeSingle();

          if (grpData && grpData.is_active !== false) {
            // 連れ立ちグループはホストがプレミアム会員で結成される仕様のため、
            // 有効な連れ立ちグループに合流している間は同行者も写真記録ボーナス対象とする
            setIsHostPremiumGroup(true);
          } else {
            setIsHostPremiumGroup(false);
          }
        } catch {
          setIsHostPremiumGroup(true);
        }
      } else {
        setIsHostPremiumGroup(false);
      }
    } finally {
      setLoadingSubscription(false);
    }
  }, [user?.id, user?.email, activeGroupId]);

  useEffect(() => {
    fetchSubscriptionAndQuota();
  }, [fetchSubscriptionAndQuota]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleSync = () => {
      fetchSubscriptionAndQuota();
    };
    window.addEventListener(SUBSCRIPTION_UPDATED_EVENT, handleSync);
    return () => {
      window.removeEventListener(SUBSCRIPTION_UPDATED_EVENT, handleSync);
    };
  }, [fetchSubscriptionAndQuota]);

  // URLパラメータ ?checkout=success で戻ってきた場合の自動反映（処理後にURLパラメータをクリーンアップ）
  useEffect(() => {
    if (typeof window === "undefined" || !user?.id) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      const sessionId = params.get("session_id");
      params.delete("checkout");
      params.delete("session_id");
      const cleanSearch = params.toString();
      const cleanUrl =
        window.location.pathname + (cleanSearch ? `?${cleanSearch}` : "");
      window.history.replaceState({}, "", cleanUrl);

      (async () => {
        if (sessionId) {
          try {
            const verifyRes = await fetch("/api/stripe/checkout", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sessionId }),
            });
            const verifyData = await verifyRes.json().catch(() => null);
            if (verifyData?.customerId) {
              await supabase
                .from("users")
                .upsert(
                  {
                    id: user.id,
                    is_premium: true,
                    subscription_status: "active",
                    stripe_customer_id: String(verifyData.customerId),
                  },
                  { onConflict: "id" }
                );
            }
          } catch {
            // ignore
          }
        }
        await fetchSubscriptionAndQuota();
      })();
    }
  }, [user?.id, fetchSubscriptionAndQuota]);

  const remainingFreePhotos = Math.max(0, FREE_PHOTO_LIMIT - usedPhotoCount);
  const isCompanionPhotoBonusActive = Boolean(
    !isPremium && activeGroupId && isHostPremiumGroup
  );

  /**
   * 指定したスポットで写真を新規追加または更新できるか判定する
   * - プレミアム会員は無制限で true
   * - 有料ホストとの連れ立ち中（isCompanionPhotoBonusActive）はゲストも true
   * - すでにそのスポットに自分の写真が登録済み（差し替え）なら枚数が増えないため true
   * - 無料枠（10枚）未満なら true
   */
  const canUploadPhotoForSpot = useCallback(
    (spotId?: string | null): boolean => {
      if (isPremium) return true;
      if (isCompanionPhotoBonusActive) return true;
      if (spotId && photoSpotIds.has(spotId)) return true;
      return usedPhotoCount < FREE_PHOTO_LIMIT;
    },
    [isPremium, isCompanionPhotoBonusActive, photoSpotIds, usedPhotoCount]
  );

  /**
   * 連れ立ちグループを新規結成（招待コードを発行してホストになる）できるか
   * ※ 招待された側（6桁コードを入力して合流するゲスト）は無料プランでも常に可能
   */
  const canCreateCompanionGroup = isPremium;

  /**
   * Stripe Checkout を開始する（Stripeキー未設定環境では検証用アクティベーションを提供）
   */
  const startCheckout = useCallback(
    async (returnUrl?: string): Promise<boolean> => {
      if (!user) {
        await showAlert({
          text: "SHUIN プレミアムへのお申し込みにはログインが必要です。",
          okText: "確認",
        });
        return false;
      }

      setProcessingCheckout(true);
      try {
        const currentPath =
          returnUrl ||
          (typeof window !== "undefined"
            ? window.location.pathname + window.location.search
            : "/settings");

        const res = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            email: user.email,
            returnUrl: currentPath,
            embedded: true,
          }),
        });

        const data = await res.json();

        if (!res.ok || !data.ok) {
          await showAlert({
            text: data.error || "決済画面の準備に失敗しました。",
            okText: "確認",
          });
          return false;
        }

        if (
          data.embedded &&
          data.clientSecret &&
          data.publishableKey &&
          typeof window !== "undefined"
        ) {
          const payload: EmbeddedCheckoutPayload = {
            clientSecret: String(data.clientSecret),
            publishableKey: String(data.publishableKey),
            sessionId: String(data.sessionId || ""),
            userId: user.id,
          };
          window.dispatchEvent(
            new CustomEvent<EmbeddedCheckoutPayload>(
              EMBEDDED_CHECKOUT_OPEN_EVENT,
              { detail: payload }
            )
          );
          return false;
        }

        if (data.url && !data.mockMode) {
          window.location.href = data.url;
          return true;
        }

        // Stripe APIキー未設定時（開発・プレビュー環境）の確認ダイアログ
        const confirmPreview = await showAlert({
          text: `【プレビュー決済確認】\n現在 Stripe APIキー（STRIPE_SECRET_KEY）が未設定のため、テスト環境用の即時有効化モードで動作します。\n\n「SHUIN プレミアム（月額${PREMIUM_MONTHLY_PRICE_JPY}円）」を有効化しますか？`,
          okText: "有効化する（テスト）",
          ngText: "キャンセル",
        });

        if (!confirmPreview) {
          return false;
        }

        try {
          localStorage.setItem(getLocalPremiumKey(user.id), "active");
        } catch {
          // ignore
        }

        try {
          await supabase.from("users").upsert(
            {
              id: user.id,
              is_premium: true,
              subscription_status: "active",
            },
            { onConflict: "id" }
          );
        } catch {
          // カラム未マイグレーション時でもlocalStorageで動作継続
        }

        await fetchSubscriptionAndQuota();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent(SUBSCRIPTION_UPDATED_EVENT));
        }

        await showAlert({
          text: "SHUIN プレミアムが有効になりました。\n「思い出写真の無制限記録・見返し」および「連れ立ちの招待コード発行（ホスト機能）」をご利用いただけます。",
          okText: "はじめる",
        });
        return true;
      } catch (err: any) {
        await showAlert({
          text: `決済処理中にエラーが発生しました: ${err?.message || ""}`,
          okText: "確認",
        });
        return false;
      } finally {
        setProcessingCheckout(false);
      }
    },
    [user, showAlert, fetchSubscriptionAndQuota]
  );

  /**
   * 契約管理・解約ポータルを開く
   */
  const openCustomerPortal = useCallback(
    async (returnUrl?: string): Promise<void> => {
      if (!user) return;
      setProcessingCheckout(true);
      try {
        const currentPath =
          returnUrl ||
          (typeof window !== "undefined" ? window.location.pathname : "/settings");

        const res = await fetch("/api/stripe/portal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customerId: stripeCustomerId,
            email: user.email,
            returnUrl: currentPath,
          }),
        });

        const data = await res.json();

        if (data?.url && !data.mockMode) {
          window.location.href = data.url;
          return;
        }

        const confirmCancel = await showAlert({
          text: "現在プレビュー用のプレミアム状態が有効です。\n無料プラン（旅人プラン）へ戻しますか？\n※これまでに記録した写真やSHUINが消えることはありません。",
          okText: "無料プランへ戻す",
          ngText: "継続する",
        });

        if (!confirmCancel) return;

        try {
          localStorage.removeItem(getLocalPremiumKey(user.id));
        } catch {
          // ignore
        }

        try {
          await supabase
            .from("users")
            .update({
              is_premium: false,
              subscription_status: "free",
            })
            .eq("id", user.id);
        } catch {
          // ignore
        }

        await fetchSubscriptionAndQuota();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent(SUBSCRIPTION_UPDATED_EVENT));
        }

        await showAlert({
          text: "無料プラン（旅人プラン）へ変更しました。",
          okText: "確認",
        });
      } finally {
        setProcessingCheckout(false);
      }
    },
    [user, stripeCustomerId, showAlert, fetchSubscriptionAndQuota]
  );

  return {
    isPremium,
    subscriptionStatus,
    usedPhotoCount,
    freePhotoLimit: FREE_PHOTO_LIMIT,
    remainingFreePhotos,
    isCompanionPhotoBonusActive,
    canUploadPhotoForSpot,
    canCreateCompanionGroup,
    loadingSubscription,
    processingCheckout,
    startCheckout,
    openCustomerPortal,
    refreshSubscription: fetchSubscriptionAndQuota,
  };
}
