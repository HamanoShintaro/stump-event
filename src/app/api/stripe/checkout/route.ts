import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PREMIUM_MONTHLY_PRICE_JPY = 480;

export async function GET(req: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({
        ok: true,
        mockMode: true,
        synced: false,
      });
    }

    const { searchParams } = new URL(req.url);
    const customerIdParam = searchParams.get("customerId");
    const emailParam = searchParams.get("email");
    const userIdParam = searchParams.get("userId");

    let resolvedCustomerId = customerIdParam || null;

    if (!resolvedCustomerId && emailParam) {
      const custQuery = new URLSearchParams({ email: emailParam, limit: "5" });
      const custRes = await fetch(
        `https://api.stripe.com/v1/customers?${custQuery.toString()}`,
        {
          headers: { Authorization: `Bearer ${secretKey}` },
          cache: "no-store",
        }
      );
      const custData = await custRes.json().catch(() => null);
      if (custRes.ok && Array.isArray(custData?.data) && custData.data.length > 0) {
        resolvedCustomerId = String(custData.data[0].id);
      }
    }

    if (!resolvedCustomerId && userIdParam) {
      const subRes = await fetch(
        `https://api.stripe.com/v1/subscriptions?status=all&limit=10`,
        {
          headers: { Authorization: `Bearer ${secretKey}` },
          cache: "no-store",
        }
      );
      const subData = await subRes.json().catch(() => null);
      if (subRes.ok && Array.isArray(subData?.data)) {
        const matched = subData.data.find(
          (s: any) => s?.metadata?.user_id === userIdParam
        );
        if (matched?.customer) {
          resolvedCustomerId = String(matched.customer);
        }
      }
    }

    if (!resolvedCustomerId) {
      return NextResponse.json({
        ok: true,
        mockMode: false,
        synced: true,
        isPremium: false,
        subscriptionStatus: "free",
        customerId: null,
      });
    }

    const subQuery = new URLSearchParams({
      customer: resolvedCustomerId,
      status: "all",
      limit: "10",
    });
    const subRes = await fetch(
      `https://api.stripe.com/v1/subscriptions?${subQuery.toString()}`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
        cache: "no-store",
      }
    );
    const subData = await subRes.json().catch(() => null);
    const subs: any[] = Array.isArray(subData?.data) ? subData.data : [];

    const activeSub = subs.find(
      (s) =>
        (s.status === "active" || s.status === "trialing") &&
        !s.cancel_at_period_end
    );

    const isPremium = Boolean(activeSub);

    return NextResponse.json({
      ok: true,
      mockMode: false,
      synced: true,
      isPremium,
      subscriptionStatus: isPremium ? "active" : "free",
      customerId: resolvedCustomerId,
      subscriptionId: activeSub?.id ? String(activeSub.id) : null,
    });
  } catch {
    return NextResponse.json({
      ok: false,
      synced: false,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { userId, email, returnUrl, embedded } = body as {
      userId?: string;
      email?: string;
      returnUrl?: string;
      embedded?: boolean;
    };

    if (!userId) {
      return NextResponse.json(
        { ok: false, error: "ログインが必要です。" },
        { status: 401 }
      );
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
    const useEmbedded = Boolean(embedded && publishableKey);
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const safeReturnBase =
      returnUrl && returnUrl.startsWith("/")
        ? `${origin}${returnUrl}`
        : `${origin}/settings`;

    const sep = safeReturnBase.includes("?") ? "&" : "?";
    const successUrl = `${safeReturnBase}${sep}checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${safeReturnBase}${sep}checkout=canceled`;

    // Stripe APIキーが未設定の開発・検証環境ではモックモードとして応答する
    if (!secretKey) {
      return NextResponse.json({
        ok: true,
        mockMode: true,
        priceJpy: PREMIUM_MONTHLY_PRICE_JPY,
        successUrl,
      });
    }

    const params = new URLSearchParams();
    params.append("mode", "subscription");
    if (useEmbedded) {
      params.append("ui_mode", "embedded_page");
      params.append("redirect_on_completion", "if_required");
      params.append("return_url", successUrl);
    } else {
      params.append("success_url", successUrl);
      params.append("cancel_url", cancelUrl);
    }
    params.append("client_reference_id", userId);
    params.append("metadata[user_id]", userId);
    params.append("subscription_data[metadata][user_id]", userId);

    if (email) {
      params.append("customer_email", email);
    }

    const priceId = process.env.STRIPE_PREMIUM_PRICE_ID;
    if (priceId) {
      params.append("line_items[0][price]", priceId);
      params.append("line_items[0][quantity]", "1");
    } else {
      // STRIPE_PREMIUM_PRICE_ID 未設定時でも即座に決済可能なインライン価格定義
      params.append("line_items[0][price_data][currency]", "jpy");
      params.append(
        "line_items[0][price_data][unit_amount]",
        String(PREMIUM_MONTHLY_PRICE_JPY)
      );
      params.append(
        "line_items[0][price_data][recurring][interval]",
        "month"
      );
      params.append(
        "line_items[0][price_data][tax_behavior]",
        "inclusive"
      );
      params.append(
        "line_items[0][price_data][product_data][name]",
        "SHUIN プレミアム（月額パス）"
      );
      params.append(
        "line_items[0][price_data][product_data][description]",
        "思い出写真の記録・見返し無制限 ＆ 連れ立ち（招待コード発行）ホスト機能解放"
      );
      params.append(
        "line_items[0][price_data][product_data][tax_code]",
        "txcd_10103001"
      );
      params.append("line_items[0][quantity]", "1");
    }

    const stripeRes = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const sessionData = await stripeRes.json();

    if (
      !stripeRes.ok ||
      (useEmbedded ? !sessionData?.client_secret : !sessionData?.url)
    ) {
      return NextResponse.json(
        {
          ok: false,
          error:
            sessionData?.error?.message ||
            "Stripe決済セッションの作成に失敗しました。",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      mockMode: false,
      embedded: useEmbedded,
      clientSecret: sessionData.client_secret || null,
      publishableKey: useEmbedded ? publishableKey : null,
      url: sessionData.url || null,
      sessionId: sessionData.id,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error:
          err instanceof Error
            ? err.message
            : "決済の準備中にエラーが発生しました。",
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { sessionId } = body as { sessionId?: string };
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey || !sessionId) {
      return NextResponse.json({ ok: true, customerId: null });
    }

    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );
    const session = await res.json().catch(() => null);

    if (!res.ok || !session) {
      return NextResponse.json({ ok: false, customerId: null });
    }

    return NextResponse.json({
      ok: true,
      status: session.status || null,
      customerId: session.customer ? String(session.customer) : null,
      subscriptionId: session.subscription ? String(session.subscription) : null,
    });
  } catch {
    return NextResponse.json({ ok: false, customerId: null });
  }
}
