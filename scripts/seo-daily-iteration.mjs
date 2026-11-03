#!/usr/bin/env node
/**
 * SHUIN 日次SEOトラフィック分析 ＆ ルートSEO監査スクリプト
 *
 * 1. Google Search Console API から直近の検索クエリ・表示回数・CTR・掲載順位を取得
 *    （環境変数 GSC_SERVICE_ACCOUNT_JSON または GOOGLE_APPLICATION_CREDENTIALS が設定されている場合）
 * 2. Supabase 上の公開済みルート（routes / spots）の「地域名＋散策／デート」SEO監査を実行
 * 3. 改善優先度リスト（CTR改善対象・順位引き上げ対象・地域キーワード補強対象）を
 *    /tmp/shuin_seo_daily_report.json に出力
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import ws from "ws";
import { createClient } from "@supabase/supabase-js";

// Load .env.local if present
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

const SITE_URL =
  process.env.GSC_SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://shuin-event.vercel.app";

function formatDate(d) {
  return d.toISOString().split("T")[0];
}

function base64UrlEncode(strOrBuf) {
  const buf = Buffer.isBuffer(strOrBuf)
    ? strOrBuf
    : Buffer.from(String(strOrBuf), "utf8");
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function getGoogleAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const unsignedJwt = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(
    JSON.stringify(payload)
  )}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedJwt);
  const signature = signer.sign(serviceAccount.private_key);
  const jwt = `${unsignedJwt}.${base64UrlEncode(signature)}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google OAuth token error (${res.status}): ${errText}`);
  }
  const data = await res.json();
  return data.access_token;
}

function loadServiceAccount() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    try {
      return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
    } catch {
      if (fs.existsSync(process.env.GSC_SERVICE_ACCOUNT_JSON)) {
        return JSON.parse(
          fs.readFileSync(process.env.GSC_SERVICE_ACCOUNT_JSON, "utf8")
        );
      }
    }
  }
  if (
    process.env.GOOGLE_APPLICATION_CREDENTIALS &&
    fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS)
  ) {
    return JSON.parse(
      fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, "utf8")
    );
  }
  return null;
}

async function fetchSearchConsoleMetrics() {
  const sa = loadServiceAccount();
  if (!sa) {
    return {
      status: "unconfigured",
      message:
        "Google Search Console サービスアカウント（GSC_SERVICE_ACCOUNT_JSON または GOOGLE_APPLICATION_CREDENTIALS）が未設定のため、Supabase上のルートSEO監査モードで実行しました。",
      rows: [],
    };
  }

  try {
    const token = await getGoogleAccessToken(sa);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 2); // GSC data lag is ~2 days
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 14);

    const apiEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      SITE_URL
    )}/searchAnalytics/query`;

    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ["query", "page"],
        rowLimit: 250,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return {
        status: "error",
        message: `Search Console API 応答エラー (${res.status}): ${errText}`,
        rows: [],
      };
    }

    const data = await res.json();
    const rows = (data.rows || []).map((r) => ({
      query: r.keys?.[0] || "",
      page: r.keys?.[1] || "",
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: r.ctr || 0,
      position: r.position || 0,
    }));

    return {
      status: "ok",
      period: { startDate: formatDate(startDate), endDate: formatDate(endDate) },
      rows,
    };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : String(err),
      rows: [],
    };
  }
}

async function auditSupabaseRoutesSeo() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return {
      status: "skipped",
      totalPublishedRoutes: 0,
      improvementCandidates: [],
      areaCoverage: {},
    };
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    realtime: { transport: ws },
  });
  const PAGE_SIZE = 1000;
  const routes = [];
  let offset = 0;

  while (true) {
    const { data, error } = await supabase
      .from("routes")
      .select(
        "id, title, description, prefecture, category, budget_tier, thumbnail_url, is_published, created_at, spots(id, name, address, order_index)"
      )
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + PAGE_SIZE - 1);

    if (error || !data || data.length === 0) break;
    routes.push(...data);
    if (data.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }

  const improvementCandidates = [];
  const prefectureCounts = {};
  const seoTitlePreviews = [];

  function extractCityFromAddress(address) {
    if (!address || typeof address !== "string") return null;
    const withoutPref = address
      .trim()
      .replace(/^(?:東京都|北海道|(?:京都|大阪)府|.{2,3}県)/, "");
    const match = withoutPref.match(/^([^\d\s]+?[市区町村])/);
    return match && match[1] ? match[1].trim() : null;
  }

  function extractAreaFromTitleOrDesc(title, description, cityName) {
    const combined = `${title || ""} ${description || ""}`;
    const stationRegex = /([一-龠々ヶノァ-ヶー]{2,10})駅/g;
    const stopWords = new Set([
      "レトロな",
      "最初の",
      "かつての",
      "現在の",
      "終着の",
      "始発の",
      "無人の",
      "木造の",
      "赤煉瓦の",
    ]);
    let match;
    while ((match = stationRegex.exec(combined)) !== null) {
      const cand = match[1]
        .replace(
          /^(?:JR|北総線|東武|京成|名鉄|近鉄|南海|阪急|阪神|京阪|西鉄|東京メトロ|都営|小田急|東急|西武|相鉄|京王|京急|江ノ電|箱根登山|伊豆箱根|アルピコ交通|島原鉄道|高松琴平電鉄|琴電|道南いさりび鉄道|あいの風とやま鉄道|秋田内陸縦貫鉄道|旧国鉄|旧)+/,
          ""
        )
        .trim();
      if (
        cand.length >= 2 &&
        cand.length <= 8 &&
        !stopWords.has(cand) &&
        !/[のはがをにへでとやもからまでより]$/.test(cand)
      ) {
        return cand;
      }
    }
    if (cityName) {
      const cleanCity = cityName
        .replace(/^.+?郡/, "")
        .replace(/[市区町村]$/, "")
        .trim();
      if (cleanCity.length >= 2) return cleanCity;
    }
    return null;
  }

  for (const r of routes) {
    const pref = (r.prefecture || "未設定").trim();
    prefectureCounts[pref] = (prefectureCounts[pref] || 0) + 1;

    const spots = Array.isArray(r.spots) ? r.spots : [];
    const city =
      spots.map((s) => extractCityFromAddress(s.address)).find(Boolean) || null;
    const extractedArea = extractAreaFromTitleOrDesc(r.title, r.description, city);
    const primaryArea =
      extractedArea || (city ? city.replace(/[市区町村]$/, "") : pref);

    seoTitlePreviews.push({
      routeId: r.id,
      primaryArea,
      city,
      prefecture: pref,
      title: r.title,
    });

    const issues = [];

    if (!extractedArea && !city) {
      issues.push("area_name_fallback_to_prefecture");
    }
    if (!r.description || r.description.trim().length < 100) {
      issues.push("description_short_for_seo");
    }
    const missingAddressSpots = spots.filter(
      (s) => !s.address || String(s.address).trim().length < 5
    );
    if (missingAddressSpots.length > 0) {
      issues.push(`spots_missing_detailed_address(${missingAddressSpots.length})`);
    }
    if (!r.thumbnail_url) {
      issues.push("missing_thumbnail_og_image");
    }

    if (issues.length > 0) {
      improvementCandidates.push({
        routeId: r.id,
        title: r.title,
        prefecture: pref,
        primaryArea,
        city,
        issues,
      });
    }
  }

  // Also load scripts/route_quality_scores.json to find low-score routes that hurt SEO engagement
  let qualityCandidates = [];
  const qualityPath = path.resolve(process.cwd(), "scripts/route_quality_scores.json");
  if (fs.existsSync(qualityPath)) {
    try {
      const qData = JSON.parse(fs.readFileSync(qualityPath, "utf8"));
      qualityCandidates = (qData.routes || [])
        .filter((item) => item.needs_replacement || item.score < 3.5)
        .sort((a, b) => a.score - b.score)
        .slice(0, 15);
    } catch {
      // ignore
    }
  }

  return {
    status: "ok",
    totalPublishedRoutes: routes.length,
    prefectureCounts,
    improvementCandidates: improvementCandidates.slice(0, 30),
    qualityCandidates,
    sampleSeoTitles: seoTitlePreviews.slice(0, 15),
  };
}

async function main() {
  const gscResult = await fetchSearchConsoleMetrics();
  const routeAudit = await auditSupabaseRoutesSeo();

  const walkDateQueries = (gscResult.rows || []).filter((r) =>
    /散策|デート|街歩き|散歩|コース|観光|お出かけ/.test(r.query)
  );

  const lowCtrOpportunities = (gscResult.rows || [])
    .filter((r) => r.impressions >= 15 && r.ctr < 0.03)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  const strikingDistanceQueries = (gscResult.rows || [])
    .filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 5)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  const report = {
    generatedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    gscStatus: gscResult.status,
    gscMessage: gscResult.message || null,
    gscPeriod: gscResult.period || null,
    summary: {
      totalGscRows: (gscResult.rows || []).length,
      walkAndDateQueryCount: walkDateQueries.length,
      lowCtrOpportunityCount: lowCtrOpportunities.length,
      strikingDistanceQueryCount: strikingDistanceQueries.length,
      totalPublishedRoutes: routeAudit.totalPublishedRoutes,
      routeSeoIssueCount: routeAudit.improvementCandidates.length,
    },
    walkDateQueries: walkDateQueries.slice(0, 20),
    lowCtrOpportunities,
    strikingDistanceQueries,
    routeAudit,
  };

  const outPath = "/tmp/shuin_seo_daily_report.json";
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`✅ SHUIN SEO Daily Report written to ${outPath}`);
  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((err) => {
  console.error("❌ SEO Daily Iteration failed:", err);
  process.exit(1);
});
