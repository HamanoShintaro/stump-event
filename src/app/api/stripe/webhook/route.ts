import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const dynamic = "force-dynamic";

function verifyStripeSignature(
  payload: string,
  sigHeader: string,
  webhookSecret: string
): boolean {
  try {
    const parts = sigHeader.split(",");
    let timestamp = "";
    const signatures: string[] = [];

    for (const part of parts) {
      const [key, value] = part.split("=");
      if (key === "t") timestamp = value;
      if (key === "v1") signatures.push(value);
    }

    if (!timestamp || signatures.length === 0) return false;

    const signedPayload = `${timestamp}.${payload}`;
    const expectedSig = crypto
      .createHmac("sha256", webhookSecret)
      .update(signedPayload, "utf8")
      .digest("hex");

    return signatures.some((sig) => {
      try {
        return crypto.timingSafeEqual(
          Buffer.from(sig, "hex"),
          Buffer.from(expectedSig, "hex")
        );
      } catch {
        return false;
      }
    });
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const sigHeader = req.headers.get("stripe-signature") || "";
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (webhookSecret) {
      const isValid = verifyStripeSignature(rawBody, sigHeader, webhookSecret);
      if (!isValid) {
        return NextResponse.json(
          { ok: false, error: "Invalid Stripe webhook signature" },
          { status: 400 }
        );
      }
    }

    const event = JSON.parse(rawBody);
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "";

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { ok: false, error: "Supabase credentials not configured" },
        { status: 500 }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data?.object;
        const userId =
          session?.client_reference_id || session?.metadata?.user_id;
        const customerId = session?.customer || null;
        const subscriptionId = session?.subscription || null;

        if (userId) {
          await supabaseAdmin
            .from("users")
            .upsert(
              {
                id: userId,
                is_premium: true,
                subscription_status: "active",
                ...(customerId ? { stripe_customer_id: String(customerId) } : {}),
                ...(subscriptionId
                  ? { stripe_subscription_id: String(subscriptionId) }
                  : {}),
              },
              { onConflict: "id" }
            );
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data?.object;
        const userId = subscription?.metadata?.user_id;
        const customerId = subscription?.customer
          ? String(subscription.customer)
          : null;
        const status = String(subscription?.status || "canceled");
        const isActive = status === "active" || status === "trialing";
        const currentPeriodEnd = subscription?.current_period_end
          ? new Date(Number(subscription.current_period_end) * 1000).toISOString()
          : null;

        const updatePayload: Record<string, unknown> = {
          is_premium: isActive,
          subscription_status: isActive ? "active" : status,
          ...(currentPeriodEnd ? { premium_until: currentPeriodEnd } : {}),
        };

        if (userId) {
          await supabaseAdmin
            .from("users")
            .update(updatePayload)
            .eq("id", userId);
        } else if (customerId) {
          await supabaseAdmin
            .from("users")
            .update(updatePayload)
            .eq("stripe_customer_id", customerId);
        }
        break;
      }

      default:
        break;
    }

    return NextResponse.json({ ok: true, received: true });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Webhook processing error",
      },
      { status: 500 }
    );
  }
}
