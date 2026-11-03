#!/usr/bin/env node
/**
 * SHUIN お問い合わせ管理・日次サポートCLI (manage-inquiries.mjs)
 *
 * 非破壊原則（.agents/AGENTS.md）準拠:
 * - レコードの DELETE は一切行いません。
 * - ステータスの更新（OPEN -> REPLIED / NEEDS_REVIEW）と日次ログ保存のみを行います。
 *
 * 使い方:
 *   node scripts/manage-inquiries.mjs list [--status OPEN] [--days 7]
 *   node scripts/manage-inquiries.mjs reply --id <uuid> --subject <件名> --body <本文>
 *   node scripts/manage-inquiries.mjs draft --id <uuid> --subject <件名> --body <本文> [--reason <確認理由>]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";
import ws from "ws";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

// .env.local の簡易読み込み（既存の環境変数を優先）
function loadEnvLocal() {
  const envPath = path.join(ROOT_DIR, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = val;
    }
  }
}

loadEnvLocal();

const FALLBACK_SUPABASE_URL = "https://fbfarkfvzrfzwdhxvahi.supabase.co";
const FALLBACK_SUPABASE_KEY = "sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  FALLBACK_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const CATEGORY_LABELS = {
  general: "サービス・ルートのご利用について",
  premium: "SHUIN プレミアム・決済・解約について",
  bug: "不具合・現地での押印に関するご報告",
  withdraw: "退会（アカウント削除）のご依頼",
  legal: "特定商取引法に基づく開示請求・その他",
};

// 禁止用語チェック（AGENTS.md トンマナ規定）
const PROHIBITED_TERMS = [
  "スタンプラリー",
  "ラリー",
  "ナラティブ",
  "スタンプ",
  "挑戦する",
  "挑む",
  "クリアする",
];

function checkProhibitedTerms(text) {
  const found = [];
  for (const term of PROHIBITED_TERMS) {
    if (text.includes(term)) {
      found.push(term);
    }
  }
  return found;
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith("--")) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    } else {
      args._.push(token);
    }
  }
  return args;
}

async function cmdList(args) {
  const days = Number(args.days || 7);
  const sinceDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  const { data: openInquiries, error: openErr } = await supabase
    .from("inquiries")
    .select("*")
    .in("status", ["OPEN", "NEEDS_REVIEW"])
    .order("created_at", { ascending: true });

  const { data: recentInquiries, error: recentErr } = await supabase
    .from("inquiries")
    .select("*")
    .gte("created_at", sinceDate)
    .order("created_at", { ascending: false });

  if (openErr || recentErr) {
    console.log(
      JSON.stringify(
        {
          ok: false,
          warning:
            "inquiries テーブルの取得中にエラーまたはRLS制限が発生しました。マイグレーションまたはRLSポリシーを確認してください。",
          error: (openErr || recentErr)?.message,
          open_count: 0,
          open_inquiries: [],
          recent_summary: { total: 0, by_status: {}, by_category: {} },
        },
        null,
        2
      )
    );
    return;
  }

  const byStatus = {};
  const byCategory = {};
  for (const row of recentInquiries || []) {
    byStatus[row.status] = (byStatus[row.status] || 0) + 1;
    byCategory[row.category] = (byCategory[row.category] || 0) + 1;
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        fetched_at: new Date().toISOString(),
        open_count: (openInquiries || []).length,
        open_inquiries: (openInquiries || []).map((row) => ({
          ...row,
          category_label: CATEGORY_LABELS[row.category] || row.category,
        })),
        recent_summary: {
          days,
          total: (recentInquiries || []).length,
          by_status: byStatus,
          by_category: byCategory,
        },
      },
      null,
      2
    )
  );
}

async function cmdReplyOrDraft(mode, args) {
  const id = args.id;
  const subject = (args.subject || "").trim();
  const body = (args.body || "").trim();
  const reason = (args.reason || "").trim();

  if (!id || !subject || !body) {
    console.error("Usage: --id <uuid> --subject <subject> --body <body>");
    process.exit(1);
  }

  const prohibited = checkProhibitedTerms(`${subject}\n${body}`);
  if (prohibited.length > 0) {
    console.error(
      `❌ トンマナ規定違反: 回答文に禁止用語が含まれています: ${prohibited.join(", ")}\n` +
        `（「ルート」「物語」「しるし」「押印」「SHUIN」「めぐる」「巡る」に置き換えてください）`
    );
    process.exit(1);
  }

  const { data: inquiry, error: fetchErr } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (fetchErr || !inquiry) {
    console.error(
      `❌ 対象のお問い合わせ (id=${id}) が見つからないか取得できませんでした:`,
      fetchErr?.message || "Not found"
    );
    process.exit(1);
  }

  let emailSent = false;
  let deliveryMethod = "draft_only";

  if (mode === "reply") {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "SHUIN サポート事務局 <onboarding@resend.dev>";
    const notifyEmail =
      process.env.CONTACT_NOTIFY_EMAIL || "shintaro.action@gmail.com";

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [inquiry.email],
          bcc: [notifyEmail],
          subject,
          text: body,
        }),
      });
      if (res.ok) {
        emailSent = true;
        deliveryMethod = "resend_api";
      } else {
        const errText = await res.text();
        console.warn("⚠️ Resend API 送信警告:", errText);
      }
    }
  }

  const nextStatus =
    mode === "reply" ? (emailSent ? "REPLIED" : "REPLIED_LOGGED") : "NEEDS_REVIEW";

  const { error: updateErr } = await supabase
    .from("inquiries")
    .update({ status: nextStatus })
    .eq("id", id);

  if (updateErr) {
    console.warn("⚠️ ステータス更新警告:", updateErr.message);
  }

  // Webhook 通知（設定されている場合）
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    const textBody = [
      mode === "reply"
        ? "✉️ *【SHUIN お問い合わせ自動回答完了】*"
        : "📝 *【SHUIN お問い合わせ 要確認ドラフト作成】*",
      `• *ID*: \`${inquiry.id}\``,
      `• *お客様*: ${inquiry.name}様 (${inquiry.email})`,
      `• *種別*: ${CATEGORY_LABELS[inquiry.category] || inquiry.category}`,
      reason ? `• *エスカレーション理由*: ${reason}` : null,
      `• *件名*: ${subject}`,
      `• *回答文面*:\n${body}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textBody, content: textBody }),
      });
    } catch (whErr) {
      console.warn("Webhook notification warning:", whErr);
    }
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        mode,
        inquiry_id: inquiry.id,
        customer_email: inquiry.email,
        new_status: nextStatus,
        email_sent: emailSent,
        delivery_method: deliveryMethod,
      },
      null,
      2
    )
  );
}

async function main() {
  const args = parseArgs(process.argv);
  const cmd = args._[0] || "list";

  if (cmd === "list") {
    await cmdList(args);
  } else if (cmd === "reply") {
    await cmdReplyOrDraft("reply", args);
  } else if (cmd === "draft") {
    await cmdReplyOrDraft("draft", args);
  } else {
    console.error(`Unknown command: ${cmd}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
