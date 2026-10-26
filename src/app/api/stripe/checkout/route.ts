import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PREMIUM_MONTHLY_PRICE_JPY = 480;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { userId, email, returnUrl } = body as {
      userId?: string;
      email?: string;
      returnUrl?: string;
    };

    if (!userId) {
      return NextResponse.json(
        { ok: false, error: "ログインが必要です。" },
        { status: 401 }
      );
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
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
    params.append("success_url", successUrl);
    params.append("cancel_url", cancelUrl);
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
        "line_items[0][price_data][product_data][name]",
        "SHUIN プレミアム（月額パス）"
      );
      params.append(
        "line_items[0][price_data][product_data][description]",
        "思い出写真の記録・見返し無制限 ＆ 連れ立ち（招待コード発行）ホスト機能解放"
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

    if (!stripeRes.ok || !sessionData?.url) {
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
      url: sessionData.url,
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
