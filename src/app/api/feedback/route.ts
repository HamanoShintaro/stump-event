import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const SENTIMENT_LABELS: Record<string, string> = {
  walk_soon: "実際に歩いてみたい",
  interesting: "物語・テーマが魅力的",
  want_other_area: "別の街・駅のルートも巡りたい",
  hard_to_walk: "距離や場所が少し巡りにくそう",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      userId,
      routeId,
      routeTitle,
      areaName,
      sentiment,
      requestedArea,
      comment,
    } = body as {
      userId?: string | null;
      routeId?: string;
      routeTitle?: string;
      areaName?: string;
      sentiment?: string;
      requestedArea?: string;
      comment?: string;
    };

    const trimmedRouteId = (routeId || "").trim().slice(0, 120);
    const trimmedTitle = (routeTitle || "").trim().slice(0, 160);
    const trimmedArea = (areaName || "").trim().slice(0, 80);
    const trimmedSentiment = (sentiment || "walk_soon").trim().slice(0, 64);
    const trimmedReqArea = (requestedArea || "").trim().slice(0, 120);
    const trimmedComment = (comment || "").trim().slice(0, 500);

    if (!trimmedRouteId || !SENTIMENT_LABELS[trimmedSentiment]) {
      return NextResponse.json(
        { ok: false, error: "フィードバックの形式が正しくありません。" },
        { status: 400 }
      );
    }

    const sentimentLabel = SENTIMENT_LABELS[trimmedSentiment];
    const structuredMessage = [
      `[マイクロアンケート]`,
      `対象ルート: ${trimmedTitle || trimmedRouteId}（${trimmedArea || "エリア未指定"} / ID: ${trimmedRouteId}）`,
      `ユーザーの反応: ${sentimentLabel} (${trimmedSentiment})`,
      trimmedReqArea ? `希望エリア・駅リクエスト: ${trimmedReqArea}` : null,
      trimmedComment ? `ひとことコメント: ${trimmedComment}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "";

    if (supabaseUrl && supabaseKey) {
      try {
        const supabaseClient = createClient(supabaseUrl, supabaseKey);
        await supabaseClient.from("inquiries").insert({
          user_id: userId || null,
          name: trimmedReqArea
            ? `街リクエスト（${trimmedReqArea.slice(0, 40)}）`
            : `マイクロアンケート（${trimmedArea || "ルート閲覧"}）`,
          email: "feedback@shuin.app",
          category: "micro_feedback",
          message: structuredMessage,
          status: "OPEN",
        });
      } catch (dbErr) {
        console.warn("Micro-feedback DB insert warning:", dbErr);
      }
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const textBody = `💡 *【SHUIN マイクロフィードバック受信】*\n${structuredMessage}`;
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: textBody, content: textBody }),
        });
      } catch {
        // ignore webhook error
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "送信に失敗しました。" },
      { status: 500 }
    );
  }
}
