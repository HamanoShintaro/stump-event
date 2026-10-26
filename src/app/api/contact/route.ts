import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const CATEGORY_LABELS: Record<string, string> = {
  general: "サービス・ルートのご利用について",
  premium: "SHUIN プレミアム・決済・解約について",
  bug: "不具合・GPS押印に関するご報告",
  withdraw: "退会（アカウント削除）のご依頼",
  legal: "特定商取引法に基づく開示請求・その他",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { userId, name, email, category, message } = body as {
      userId?: string | null;
      name?: string;
      email?: string;
      category?: string;
      message?: string;
    };

    const trimmedName = (name || "").trim();
    const trimmedEmail = (email || "").trim();
    const trimmedCategory = (category || "general").trim();
    const trimmedMessage = (message || "").trim();

    if (!trimmedName) {
      return NextResponse.json(
        { ok: false, error: "お名前（または表示名）を入力してください。" },
        { status: 400 }
      );
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { ok: false, error: "返信先となる正しいメールアドレスを入力してください。" },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      return NextResponse.json(
        { ok: false, error: "お問い合わせ内容を5文字以上で入力してください。" },
        { status: 400 }
      );
    }

    // 1. Supabase inquiries テーブルへ保存（未マイグレーション環境でもエラーで止めない）
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
          name: trimmedName.slice(0, 120),
          email: trimmedEmail.slice(0, 255),
          category: trimmedCategory.slice(0, 64),
          message: trimmedMessage.slice(0, 4000),
          status: "OPEN",
        });
      } catch (dbErr) {
        console.warn("Inquiry DB insert warning:", dbErr);
      }
    }

    const categoryLabel =
      CATEGORY_LABELS[trimmedCategory] || trimmedCategory || "その他";

    // 2. Slack / Discord 等の Incoming Webhook 通知（CONTACT_WEBHOOK_URL 設定時）
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const textBody = [
          "📩 *【SHUIN お問い合わせ受信】*",
          `• *種別*: ${categoryLabel}`,
          `• *お名前*: ${trimmedName}`,
          `• *返信先メール*: ${trimmedEmail}`,
          userId ? `• *ユーザーID*: \`${userId}\`` : null,
          `• *内容*:\n${trimmedMessage}`,
        ]
          .filter(Boolean)
          .join("\n");

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: textBody,
            content: textBody, // Discord Webhook 互換
          }),
        });
      } catch (whErr) {
        console.warn("Contact webhook notification warning:", whErr);
      }
    }

    // 3. メール転送通知（サーバーサイドのみで宛先を保持し、公開画面には一切露出しない）
    const notifyEmail =
      process.env.CONTACT_NOTIFY_EMAIL || "shintaro.action@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;
    const mailSubject = `【SHUIN お問い合わせ】${categoryLabel}（${trimmedName}様）`;
    const mailText = `種別: ${categoryLabel}\nお名前: ${trimmedName}\n返信先メールアドレス: ${trimmedEmail}\nユーザーID: ${userId || "未ログイン"}\n\n--- お問い合わせ内容 ---\n${trimmedMessage}`;

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SHUIN Contact <onboarding@resend.dev>",
            to: [notifyEmail],
            reply_to: trimmedEmail,
            subject: mailSubject,
            text: mailText,
          }),
        });
      } catch (mailErr) {
        console.warn("Contact Resend email notification warning:", mailErr);
      }
    } else {
      // RESEND_API_KEY 未設定時は FormSubmit AJAX エンドポイント経由で通知メールを送信
      try {
        const origin =
          req.headers.get("origin") ||
          process.env.NEXT_PUBLIC_SITE_URL ||
          "https://shuin-event.vercel.app";

        await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: origin,
            Referer: `${origin}/contact`,
          },
          body: JSON.stringify({
            _subject: mailSubject,
            _replyto: trimmedEmail,
            category: categoryLabel,
            name: trimmedName,
            email: trimmedEmail,
            user_id: userId || "未ログイン",
            message: trimmedMessage,
          }),
        });
      } catch (fallbackMailErr) {
        console.warn("Contact fallback email warning:", fallbackMailErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error:
          err instanceof Error
            ? err.message
            : "お問い合わせの送信中にエラーが発生しました。",
      },
      { status: 500 }
    );
  }
}
