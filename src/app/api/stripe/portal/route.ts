import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { customerId, email, returnUrl } = body as {
      customerId?: string | null;
      email?: string | null;
      returnUrl?: string;
    };

    const secretKey = process.env.STRIPE_SECRET_KEY;
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const safeReturnUrl =
      returnUrl && returnUrl.startsWith("/")
        ? `${origin}${returnUrl}`
        : `${origin}/settings`;

    let resolvedCustomerId = customerId || null;

    if (secretKey && !resolvedCustomerId && email) {
      const searchParams = new URLSearchParams({ email, limit: "1" });
      const custRes = await fetch(
        `https://api.stripe.com/v1/customers?${searchParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${secretKey}`,
          },
        }
      );
      const custData = await custRes.json().catch(() => null);
      if (custRes.ok && custData?.data?.[0]?.id) {
        resolvedCustomerId = String(custData.data[0].id);
      }
    }

    if (!secretKey || !resolvedCustomerId) {
      return NextResponse.json({
        ok: true,
        mockMode: true,
        returnUrl: safeReturnUrl,
      });
    }

    const params = new URLSearchParams();
    params.append("customer", resolvedCustomerId);
    params.append("return_url", safeReturnUrl);

    const portalRes = await fetch(
      "https://api.stripe.com/v1/billing_portal/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const portalData = await portalRes.json();

    if (!portalRes.ok || !portalData?.url) {
      return NextResponse.json(
        {
          ok: false,
          error:
            portalData?.error?.message ||
            "契約管理ポータルの作成に失敗しました。",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      mockMode: false,
      url: portalData.url,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error:
          err instanceof Error
            ? err.message
            : "ポータル起動中にエラーが発生しました。",
      },
      { status: 500 }
    );
  }
}
