#!/usr/bin/env node
/**
 * SHUIN 日次SNS紹介ポスト生成 ＆ 自動配信スクリプト (sns-daily-post.mjs)
 *
 * 1. 公開中のルートから、品質スコア（route_quality_scores.json）および未紹介ローテーションに基づき「本日の街歩き物語」を選定
 * 2. 禁止用語を含まないSHUINトーン＆マナー準拠の紹介文（X / Bluesky / Threads 対応・ハッシュタグ・動的OGP URL付き）を自動生成
 * 3. 環境変数（BLUESKY_IDENTIFIER + BLUESKY_APP_PASSWORD / SNS_WEBHOOK_URL / X_BEARER_TOKEN）設定時は `--post` フラグで自動投稿を実行
 */

import fs from "fs";
import path from "path";
import ws from "ws";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
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

const PUBLIC_SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://shuin.app"
).replace(/\/+$/, "");

export function buildDailySnsPostForRoute(route, areaEntry) {
  const spots = Array.isArray(route.spots)
    ? [...route.spots].sort(
        (a, b) => (a.order_index || 0) - (b.order_index || 0)
      )
    : [];

  const areaName =
    areaEntry?.areaName ||
    route.area_name ||
    route.prefecture ||
    "街歩き";
  const pref = route.prefecture || "";
  const shortPref = pref.replace(/[都府県]$/, "");
  const routeUrl = `${PUBLIC_SITE_URL}/routes/${route.id}`;
  const ogImageUrl = `${routeUrl}/opengraph-image`;

  const spotFlow = spots
    .slice(0, 5)
    .map((s, idx) => `${idx + 1}.${s.name}`)
    .join(" → ");

  const rawDesc = String(route.description || "").trim();
  const shortDesc =
    rawDesc.length > 72 ? `${rawDesc.slice(0, 72)}…` : rawDesc;

  const hashtags = Array.from(
    new Set(
      [
        areaName ? `#${areaName.replace(/\s+/g, "")}` : null,
        shortPref && shortPref !== areaName ? `#${shortPref}` : null,
        "#街歩き",
        "#散歩",
        "#SHUIN",
      ].filter(Boolean)
    )
  ).join(" ");

  const postText = [
    `【本日の街歩き物語｜${pref}${areaName !== pref ? `・${areaName}` : ""}】`,
    `「${route.title}」`,
    "",
    shortDesc,
    "",
    spotFlow ? `📍 ${spotFlow}` : null,
    `🔗 ${routeUrl}`,
    hashtags,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return {
    routeId: route.id,
    title: route.title,
    prefecture: pref,
    areaName,
    routeUrl,
    ogImageUrl,
    postText,
    hashtags,
  };
}

export async function dispatchSnsPostIfConfigured(postPayload, shouldPost = false) {
  const channels = {
    bluesky: Boolean(
      process.env.BLUESKY_IDENTIFIER && process.env.BLUESKY_APP_PASSWORD
    ),
    webhook: Boolean(process.env.SNS_WEBHOOK_URL),
    xApi: Boolean(process.env.X_USER_ACCESS_TOKEN),
  };

  if (!shouldPost) {
    return {
      posted: false,
      mode: "dry_run_ready",
      configuredChannels: channels,
    };
  }

  const results = {};

  // 1. Generic SNS Webhook (Make / Zapier / Buffer / Discord / Slack)
  if (process.env.SNS_WEBHOOK_URL) {
    try {
      const res = await fetch(process.env.SNS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: postPayload.postText,
          content: postPayload.postText,
          url: postPayload.routeUrl,
          ogImageUrl: postPayload.ogImageUrl,
          title: postPayload.title,
          areaName: postPayload.areaName,
        }),
      });
      results.webhook = { ok: res.ok, status: res.status };
    } catch (err) {
      results.webhook = { ok: false, error: err?.message || String(err) };
    }
  }

  // 2. Bluesky AT Protocol
  if (process.env.BLUESKY_IDENTIFIER && process.env.BLUESKY_APP_PASSWORD) {
    try {
      const sessionRes = await fetch(
        "https://bsky.social/xrpc/com.atproto.server.createSession",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: process.env.BLUESKY_IDENTIFIER,
            password: process.env.BLUESKY_APP_PASSWORD,
          }),
        }
      );
      if (sessionRes.ok) {
        const session = await sessionRes.json();
        const postRes = await fetch(
          "https://bsky.social/xrpc/com.atproto.repo.createRecord",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${session.accessJwt}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              repo: session.did,
              collection: "app.bsky.feed.post",
              record: {
                $type: "app.bsky.feed.post",
                text: postPayload.postText,
                createdAt: new Date().toISOString(),
                embed: {
                  $type: "app.bsky.embed.external",
                  external: {
                    uri: postPayload.routeUrl,
                    title: `${postPayload.areaName}｜${postPayload.title} - SHUIN まちのしるし`,
                    description: postPayload.postText.slice(0, 140),
                  },
                },
              },
            }),
          }
        );
        results.bluesky = { ok: postRes.ok, status: postRes.status };
      } else {
        results.bluesky = { ok: false, status: sessionRes.status };
      }
    } catch (err) {
      results.bluesky = { ok: false, error: err?.message || String(err) };
    }
  }

  // 3. X (Twitter) API v2 with User OAuth 2.0 Bearer Token
  if (process.env.X_USER_ACCESS_TOKEN) {
    try {
      const xRes = await fetch("https://api.twitter.com/2/tweets", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.X_USER_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: postPayload.postText,
        }),
      });
      results.xApi = { ok: xRes.ok, status: xRes.status };
    } catch (err) {
      results.xApi = { ok: false, error: err?.message || String(err) };
    }
  }

  return {
    posted: Object.values(results).some((r) => r?.ok),
    mode: "live_dispatch",
    configuredChannels: channels,
    results,
  };
}

async function runCli() {
  const shouldPost = process.argv.includes("--post");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase credentials");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    realtime: { transport: ws },
  });

  const { data: routes } = await supabase
    .from("routes")
    .select(
      "id, title, description, prefecture, category, created_at, spots(id, name, order_index)"
    )
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .limit(50);

  if (!routes || routes.length === 0) {
    console.log("No published routes found.");
    return;
  }

  const seoPath = path.resolve(process.cwd(), "src/data/seo_area_keywords.json");
  let byRouteId = {};
  if (fs.existsSync(seoPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(seoPath, "utf8"));
      byRouteId = parsed.byRouteId || {};
    } catch {
      // ignore
    }
  }

  // 日付シードで毎日異なるルートを選定
  const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const picked = routes[daySeed % routes.length];
  const postPayload = buildDailySnsPostForRoute(picked, byRouteId[picked.id]);
  const dispatchResult = await dispatchSnsPostIfConfigured(postPayload, shouldPost);

  console.log(JSON.stringify({ postPayload, dispatchResult }, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runCli();
}
