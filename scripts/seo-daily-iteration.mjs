#!/usr/bin/env node
/**
 * SHUIN 日次SEOトラフィック分析 ＆ 地域別リアル検索意図（Googleサジェスト＋Search Console）自動反映スクリプト
 *
 * 1. Google Search Console API から直近の検索クエリ・表示回数・CTR・掲載順位を全件取得（固定ワードに限定せず実トラフィックのあるクエリを把握）
 * 2. Google Autocomplete (Suggest) API から、各ルートの「地域名 × 一般的なお出かけ・観光・街歩き検索意図」の上位サジェストワードを取得
 * 3. 両者を統合して各ルートの最適タイトルフック・実検索キーワード群を `src/data/seo_area_keywords.json` に自動生成・更新
 * 4. 分析サマリーと改善候補を `/tmp/shuin_seo_daily_report.json` に出力
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pathToFileURL } from "url";
import ws from "ws";
import { createClient } from "@supabase/supabase-js";
import {
  buildDailySnsPostForRoute,
  dispatchSnsPostIfConfigured,
} from "./sns-daily-post.mjs";

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
  "sc-domain:shuin.app";

const PUBLIC_SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://shuin.app"
).replace(/\/+$/, "");

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

async function getGoogleAccessToken(cred) {
  // Pattern A: gcloud Application Default Credentials (authorized_user — キーレス認証)
  if (cred.type === "authorized_user" && cred.refresh_token) {
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: cred.client_id,
        client_secret: cred.client_secret,
        refresh_token: cred.refresh_token,
        grant_type: "refresh_token",
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Google ADC OAuth token error (${res.status}): ${errText}`);
    }
    const data = await res.json();
    return data.access_token;
  }

  // Pattern B: Service Account JSON Key (service_account)
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: cred.client_email,
    scope:
      "https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const unsignedJwt = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(
    JSON.stringify(payload)
  )}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedJwt);
  const signature = signer.sign(cred.private_key);
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
  const defaultLocalSa = path.resolve(process.cwd(), "gsc-service-account.json");
  if (fs.existsSync(defaultLocalSa)) {
    return JSON.parse(fs.readFileSync(defaultLocalSa, "utf8"));
  }
  // Default gcloud ADC path (~/.config/gcloud/application_default_credentials.json)
  const homeDir = process.env.HOME || "";
  if (homeDir) {
    const adcPath = path.join(
      homeDir,
      ".config/gcloud/application_default_credentials.json"
    );
    if (fs.existsSync(adcPath)) {
      return JSON.parse(fs.readFileSync(adcPath, "utf8"));
    }
  }
  return null;
}

async function fetchSearchConsoleMetrics() {
  const sa = loadServiceAccount();
  if (!sa) {
    return {
      status: "unconfigured",
      message:
        "Google Search Console サービスアカウント未設定のため、Googleサジェスト（実検索トレンド）＋Supabaseルート監査モードで実行しました。",
      rows: [],
      pageRows: [],
    };
  }

  try {
    let token = await getGoogleAccessToken(sa);
    const quotaProject =
      sa.quota_project_id || process.env.GOOGLE_CLOUD_PROJECT || "jba-system";

    // gcloud ADC (authorized_user) の場合、Search Console プロパティ権限を持つサービスアカウントへ impersonate
    if (sa.type === "authorized_user") {
      const impersonateEmail =
        process.env.GSC_IMPERSONATE_SERVICE_ACCOUNT ||
        process.env.GA4_IMPERSONATE_SERVICE_ACCOUNT ||
        "shuin-seo-bot@jba-system.iam.gserviceaccount.com";

      const impRes = await fetch(
        `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${encodeURIComponent(
          impersonateEmail
        )}:generateAccessToken`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "x-goog-user-project": quotaProject,
          },
          body: JSON.stringify({
            scope: ["https://www.googleapis.com/auth/webmasters.readonly"],
          }),
        }
      );

      if (impRes.ok) {
        const impData = await impRes.json();
        if (impData.accessToken) {
          token = impData.accessToken;
        }
      }
    }

    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 30);

    const apiEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      SITE_URL
    )}/searchAnalytics/query`;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const [res, pageRes] = await Promise.all([
      fetch(apiEndpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
          dimensions: ["query", "page"],
          rowLimit: 500,
          dataState: "all",
        }),
      }),
      fetch(apiEndpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
          dimensions: ["page"],
          rowLimit: 200,
          dataState: "all",
        }),
      }),
    ]);

    if (!res.ok) {
      const errText = await res.text();
      return {
        status: "error",
        message: `Search Console API 応答エラー (${res.status}): ${errText}`,
        rows: [],
        pageRows: [],
      };
    }

    const data = await res.json();
    const rows = (data.rows || []).map((r) => ({
      query: r.keys?.[0] || "",
      page: r.keys?.[1] || "",
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: r.ctr || 0,
      position: Number((r.position || 0).toFixed(1)),
    }));

    const pageData = pageRes.ok ? await pageRes.json() : {};
    const pageRows = (pageData.rows || []).map((r) => ({
      page: r.keys?.[0] || "",
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: r.ctr || 0,
      position: Number((r.position || 0).toFixed(1)),
    }));

    return {
      status: "ok",
      period: { startDate: formatDate(startDate), endDate: formatDate(endDate) },
      rows,
      pageRows,
    };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : String(err),
      rows: [],
      pageRows: [],
    };
  }
}

async function submitSitemapToSearchConsole() {
  const sa = loadServiceAccount();
  if (!sa) {
    return {
      status: "unconfigured",
      message: "Google 認証情報が未設定のためサイトマップ送信をスキップしました。",
    };
  }

  const sitemapUrl = `${PUBLIC_SITE_URL}/sitemap.xml`;
  const siteUrlEnc = encodeURIComponent(SITE_URL);
  const feedpathEnc = encodeURIComponent(sitemapUrl);
  const putEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${siteUrlEnc}/sitemaps/${feedpathEnc}`;
  const listEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${siteUrlEnc}/sitemaps`;

  try {
    let token = await getGoogleAccessToken(sa);
    const quotaProject =
      sa.quota_project_id || process.env.GOOGLE_CLOUD_PROJECT || "jba-system";

    // gcloud ADC (authorized_user) の場合、IAM Credentials API でサービスアカウントの webmasters (書き込み可) トークンを取得して送信を試行
    if (sa.type === "authorized_user") {
      const impersonateEmail =
        process.env.GSC_IMPERSONATE_SERVICE_ACCOUNT ||
        process.env.GA4_IMPERSONATE_SERVICE_ACCOUNT ||
        "shuin-seo-bot@jba-system.iam.gserviceaccount.com";

      const impRes = await fetch(
        `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${encodeURIComponent(
          impersonateEmail
        )}:generateAccessToken`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "x-goog-user-project": quotaProject,
          },
          body: JSON.stringify({
            scope: ["https://www.googleapis.com/auth/webmasters"],
          }),
        }
      );

      if (impRes.ok) {
        const impData = await impRes.json();
        if (impData.accessToken) {
          const putRes = await fetch(putEndpoint, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${impData.accessToken}`,
            },
          });

          if (putRes.ok || putRes.status === 204) {
            return {
              status: "submitted",
              sitemapUrl,
              submittedAt: new Date().toISOString(),
              via: impersonateEmail,
            };
          }
        }
      }
    }

    // 直接トークンでの PUT 試行（webmasters フルスコープがある場合）
    const directHeaders = {
      Authorization: `Bearer ${token}`,
    };
    if (sa.type === "authorized_user") {
      directHeaders["x-goog-user-project"] = quotaProject;
    }

    const directPut = await fetch(putEndpoint, {
      method: "PUT",
      headers: directHeaders,
    });

    if (directPut.ok || directPut.status === 204) {
      return {
        status: "submitted",
        sitemapUrl,
        submittedAt: new Date().toISOString(),
        via: "direct_token",
      };
    }

    // 送信権限が不足している場合でも、現在の Search Console 登録済みサイトマップ状況を一覧取得して返す
    const listRes = await fetch(listEndpoint, {
      headers: directHeaders,
    });
    const listData = listRes.ok ? await listRes.json() : {};
    const existingSitemaps = Array.isArray(listData.sitemap)
      ? listData.sitemap.map((s) => ({
          path: s.path,
          lastSubmitted: s.lastSubmitted,
          lastDownloaded: s.lastDownloaded,
          isPending: s.isPending,
          warnings: s.warnings,
          errors: s.errors,
        }))
      : [];

    const errText = await directPut.text();
    return {
      status: existingSitemaps.length > 0 ? "already_registered_readonly" : "needs_owner_grant",
      sitemapUrl,
      existingSitemaps,
      message:
        "Search Console の『設定 > ユーザーと権限』に shuin-seo-bot@jba-system.iam.gserviceaccount.com を『フル』権限で追加すると、毎朝8:00の自動PUT再送信が有効になります。",
      apiDetail: errText.slice(0, 240),
    };
  } catch (err) {
    return {
      status: "error",
      sitemapUrl,
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

async function fetchGa4Metrics() {
  const propertyId = (process.env.GA4_PROPERTY_ID || "562267296")
    .replace(/^properties\//, "")
    .trim();
  if (!propertyId) {
    return {
      status: "unconfigured",
      message:
        "GA4_PROPERTY_ID が未設定です。GA4作成後に GA4_PROPERTY_ID（数字のプロパティID）を .env.local に設定すると、ページ別滞在時間・エンゲージメント率・ルート参加CV数も自動取得されます。",
      rows: [],
    };
  }

  const sa = loadServiceAccount();
  if (!sa) {
    return {
      status: "unconfigured",
      message: "Google 認証情報が未設定のため GA4 Data API をスキップしました。",
      rows: [],
    };
  }

  try {
    let token = await getGoogleAccessToken(sa);
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // gcloud ADC (authorized_user) の場合、IAM Credentials API でキーレス・サービスアカウントの analytics.readonly トークンを自動発行
    if (sa.type === "authorized_user") {
      const impersonateEmail =
        process.env.GA4_IMPERSONATE_SERVICE_ACCOUNT ||
        "shuin-seo-bot@jba-system.iam.gserviceaccount.com";
      const quotaProject =
        sa.quota_project_id || process.env.GOOGLE_CLOUD_PROJECT || "jba-system";

      const impRes = await fetch(
        `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${encodeURIComponent(
          impersonateEmail
        )}:generateAccessToken`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "x-goog-user-project": quotaProject,
          },
          body: JSON.stringify({
            scope: ["https://www.googleapis.com/auth/analytics.readonly"],
          }),
        }
      );

      if (impRes.ok) {
        const impData = await impRes.json();
        if (impData.accessToken) {
          token = impData.accessToken;
          headers.Authorization = `Bearer ${token}`;
        }
      }
    }

    const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(
      propertyId
    )}:runReport`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [
          { name: "screenPageViews" },
          { name: "activeUsers" },
          { name: "engagementRate" },
          { name: "averageSessionDuration" },
          { name: "eventCount" },
        ],
        limit: 250,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return {
        status: "error",
        message: `GA4 Data API 応答エラー (${res.status}): ${errText}`,
        rows: [],
      };
    }

    const data = await res.json();
    const rows = (data.rows || []).map((r) => ({
      pagePath: r.dimensionValues?.[0]?.value || "",
      screenPageViews: Number(r.metricValues?.[0]?.value || 0),
      activeUsers: Number(r.metricValues?.[1]?.value || 0),
      engagementRate: Number(r.metricValues?.[2]?.value || 0),
      averageSessionDuration: Number(r.metricValues?.[3]?.value || 0),
      eventCount: Number(r.metricValues?.[4]?.value || 0),
    }));

    return {
      status: "ok",
      propertyId,
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

// 初期開発・テスト検証アカウントおよびシード用ダミーID（外部の実ユーザー数と明確に区別するため定義）
const KNOWN_INTERNAL_TEST_USER_IDS = new Set([
  "d8a49f45-0c41-4c53-9c75-211156614b78",
  "fb6cadbb-95f5-48c9-8296-fd4a4f881220",
  "dc0b3208-3516-489a-95dd-855f6632e15a",
  "ba0ebacc-6b0e-475a-8121-554cd644a8b3",
]);
const SEED_DUMMY_USER_IDS = new Set([
  "e9999999-9999-9999-9999-999999999999",
]);

async function fetchUserMetrics(supabase, hasServiceRoleKey, ga4Result) {
  const nowMs = Date.now();
  const ms24h = 24 * 60 * 60 * 1000;
  const ms7d = 7 * ms24h;

  const ga4Rows = Array.isArray(ga4Result?.rows) ? ga4Result.rows : [];
  const loginPageRow = ga4Rows.find((r) => r.pagePath === "/login");
  const mypageRow = ga4Rows.find((r) => r.pagePath === "/mypage");

  const ga4AuthFunnel28d = {
    loginPageViews: loginPageRow?.screenPageViews || 0,
    loginActiveUsers: loginPageRow?.activeUsers || 0,
    mypageViews: mypageRow?.screenPageViews || 0,
    mypageActiveUsers: mypageRow?.activeUsers || 0,
  };

  if (!supabase) {
    return {
      status: "unconfigured",
      authSource: "none",
      headline: {
        externalRegisteredUsers: 0,
        internalTestUsers: 0,
        totalRegisteredUsers: 0,
        newExternalUsers24h: 0,
        newExternalUsers7d: 0,
      },
      activity: {
        stampsTotal: 0,
        stamps24h: 0,
        stamps7d: 0,
        routeJoinsTotal: 0,
        routeJoins24h: 0,
        routeJoins7d: 0,
        routeCompletionsTotal: 0,
        bookmarksTotal: 0,
      },
      ga4AuthFunnel28d,
    };
  }

  try {
    // 1. Service Role Key がある場合は auth.users を全件取得
    let authStats = null;
    if (hasServiceRoleKey) {
      const allAuthUsers = [];
      let page = 1;
      const perPage = 1000;
      while (page <= 10) {
        const { data, error } = await supabase.auth.admin.listUsers({
          page,
          perPage,
        });
        if (error || !data?.users?.length) break;
        allAuthUsers.push(...data.users);
        if (data.users.length < perPage) break;
        page++;
      }

      const realUsers = allAuthUsers.filter(
        (u) => u?.id && !SEED_DUMMY_USER_IDS.has(u.id)
      );
      const externalUsers = realUsers.filter(
        (u) => !KNOWN_INTERNAL_TEST_USER_IDS.has(u.id)
      );
      const internalUsers = realUsers.filter((u) =>
        KNOWN_INTERNAL_TEST_USER_IDS.has(u.id)
      );

      const countRecent = (list, windowMs) =>
        list.filter((u) => {
          const ts = u.created_at ? Date.parse(u.created_at) : NaN;
          return Number.isFinite(ts) && nowMs - ts <= windowMs;
        }).length;

      authStats = {
        totalAuthUsers: realUsers.length,
        externalAuthUsers: externalUsers.length,
        internalTestUsers: internalUsers.length,
        newExternalUsers24h: countRecent(externalUsers, ms24h),
        newExternalUsers7d: countRecent(externalUsers, ms7d),
        newTotalUsers24h: countRecent(realUsers, ms24h),
        newTotalUsers7d: countRecent(realUsers, ms7d),
      };
    }

    // 2. アクティビティテーブル横断集計（押印・ルート参加・お気に入り・称号）
    const [urRes, stampsRes, badgesRes, bookmarksRes] = await Promise.all([
      supabase
        .from("user_routes")
        .select("user_id, status, joined_at, completed_at"),
      supabase.from("stamps").select("user_id, acquired_at"),
      supabase.from("badge_assignments").select("user_id, acquired_at"),
      supabase.from("user_bookmarks").select("user_id, created_at"),
    ]);

    const userFirstSeen = new Map();
    const recordSeen = (uid, dateStr) => {
      if (!uid || SEED_DUMMY_USER_IDS.has(uid)) return;
      const ts = dateStr ? Date.parse(dateStr) : NaN;
      const prev = userFirstSeen.get(uid);
      if (prev === undefined) {
        userFirstSeen.set(uid, Number.isFinite(ts) ? ts : Infinity);
      } else if (Number.isFinite(ts) && ts < prev) {
        userFirstSeen.set(uid, ts);
      }
    };

    const userRoutes = Array.isArray(urRes.data) ? urRes.data : [];
    const stamps = (Array.isArray(stampsRes.data) ? stampsRes.data : []).filter(
      (s) => s?.user_id && !SEED_DUMMY_USER_IDS.has(s.user_id)
    );
    const badges = Array.isArray(badgesRes.data) ? badgesRes.data : [];
    const bookmarks = Array.isArray(bookmarksRes.data) ? bookmarksRes.data : [];

    for (const r of userRoutes) recordSeen(r.user_id, r.joined_at);
    for (const s of stamps) recordSeen(s.user_id, s.acquired_at);
    for (const b of badges) recordSeen(b.user_id, b.acquired_at);
    for (const bm of bookmarks) recordSeen(bm.user_id, bm.created_at);

    const allActiveIds = [...userFirstSeen.keys()];
    const externalActiveIds = allActiveIds.filter(
      (id) => !KNOWN_INTERNAL_TEST_USER_IDS.has(id)
    );
    const internalActiveIds = allActiveIds.filter((id) =>
      KNOWN_INTERNAL_TEST_USER_IDS.has(id)
    );

    const newExternalActive24h = externalActiveIds.filter((id) => {
      const ts = userFirstSeen.get(id);
      return Number.isFinite(ts) && nowMs - ts <= ms24h;
    }).length;
    const newExternalActive7d = externalActiveIds.filter((id) => {
      const ts = userFirstSeen.get(id);
      return Number.isFinite(ts) && nowMs - ts <= ms7d;
    }).length;

    const countRowsWithin = (rows, field, windowMs) =>
      rows.filter((r) => {
        const ts = r?.[field] ? Date.parse(r[field]) : NaN;
        return Number.isFinite(ts) && nowMs - ts <= windowMs;
      }).length;

    const externalStamps = stamps.filter(
      (s) => !KNOWN_INTERNAL_TEST_USER_IDS.has(s.user_id)
    );
    const externalUserRoutes = userRoutes.filter(
      (r) => r?.user_id && !KNOWN_INTERNAL_TEST_USER_IDS.has(r.user_id)
    );

    return {
      status: "ok",
      authSource: authStats
        ? "supabase_auth_admin"
        : "public_activity_tables_and_ga4",
      headline: {
        externalRegisteredUsers: authStats
          ? authStats.externalAuthUsers
          : externalActiveIds.length,
        internalTestUsers: authStats
          ? authStats.internalTestUsers
          : internalActiveIds.length,
        totalRegisteredUsers: authStats
          ? authStats.totalAuthUsers
          : allActiveIds.length,
        newExternalUsers24h: authStats
          ? authStats.newExternalUsers24h
          : newExternalActive24h,
        newExternalUsers7d: authStats
          ? authStats.newExternalUsers7d
          : newExternalActive7d,
      },
      activity: {
        stampsTotal: stamps.length,
        externalStampsTotal: externalStamps.length,
        stamps24h: countRowsWithin(stamps, "acquired_at", ms24h),
        stamps7d: countRowsWithin(stamps, "acquired_at", ms7d),
        routeJoinsTotal: userRoutes.length,
        externalRouteJoinsTotal: externalUserRoutes.length,
        routeJoins24h: countRowsWithin(userRoutes, "joined_at", ms24h),
        routeJoins7d: countRowsWithin(userRoutes, "joined_at", ms7d),
        routeCompletionsTotal: userRoutes.filter(
          (r) => r.status === "COMPLETED"
        ).length,
        bookmarksTotal: bookmarks.length,
      },
      ga4AuthFunnel28d,
    };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : String(err),
      authSource: "error",
      headline: {
        externalRegisteredUsers: 0,
        internalTestUsers: 0,
        totalRegisteredUsers: 0,
        newExternalUsers24h: 0,
        newExternalUsers7d: 0,
      },
      activity: null,
      ga4AuthFunnel28d,
    };
  }
}

async function fetchStripeListPages(endpointPath, secretKey, maxPages = 5) {
  const items = [];
  let startingAfter = null;
  for (let page = 0; page < maxPages; page++) {
    const url = new URL(`https://api.stripe.com/v1/${endpointPath}`);
    if (!url.searchParams.has("limit")) {
      url.searchParams.set("limit", "100");
    }
    if (startingAfter) {
      url.searchParams.set("starting_after", startingAfter);
    }
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${secretKey}` },
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Stripe API error (${res.status}) on ${endpointPath}: ${errText}`);
    }
    const data = await res.json();
    const batch = Array.isArray(data.data) ? data.data : [];
    items.push(...batch);
    if (!data.has_more || batch.length === 0) break;
    startingAfter = batch[batch.length - 1].id;
  }
  return items;
}

async function fetchStripeMetrics() {
  const secretKey =
    process.env.STRIPE_LIVE_SECRET_KEY || process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return {
      status: "unconfigured",
      mode: null,
      message: "STRIPE_SECRET_KEY が未設定のため Stripe 集計をスキップしました。",
      customers: { total: 0, new24h: 0, new7d: 0 },
      subscriptions: {
        active: 0,
        cancelAtPeriodEnd: 0,
        canceled: 0,
        pastDue: 0,
        estimatedMrrJpy: 0,
      },
      payments: {
        succeededTotal: 0,
        succeeded24h: 0,
        succeeded7d: 0,
        succeeded30d: 0,
        netRevenueTotalJpy: 0,
        netRevenue24hJpy: 0,
        netRevenue7dJpy: 0,
        netRevenue30dJpy: 0,
        refundedCount: 0,
      },
    };
  }

  const mode = secretKey.startsWith("sk_live_") ? "live" : "test";
  const nowSec = Math.floor(Date.now() / 1000);
  const sec24h = 24 * 60 * 60;
  const sec7d = 7 * sec24h;
  const sec30d = 30 * sec24h;

  try {
    const [customers, subscriptions, charges] = await Promise.all([
      fetchStripeListPages("customers", secretKey),
      fetchStripeListPages("subscriptions?status=all", secretKey),
      fetchStripeListPages("charges", secretKey),
    ]);

    const activeSubs = subscriptions.filter(
      (s) => s.status === "active" || s.status === "trialing"
    );
    const renewingSubs = activeSubs.filter((s) => !s.cancel_at_period_end);
    const cancelAtPeriodEndSubs = activeSubs.filter((s) =>
      Boolean(s.cancel_at_period_end)
    );
    const canceledSubs = subscriptions.filter((s) => s.status === "canceled");
    const pastDueSubs = subscriptions.filter(
      (s) => s.status === "past_due" || s.status === "unpaid"
    );

    let estimatedMrrJpy = 0;
    for (const sub of renewingSubs) {
      const priceObj = sub.items?.data?.[0]?.price || sub.plan || null;
      const unitAmount = Number(
        priceObj?.unit_amount ?? priceObj?.amount ?? 480
      );
      const interval = priceObj?.recurring?.interval || priceObj?.interval || "month";
      if (interval === "year") {
        estimatedMrrJpy += Math.round(unitAmount / 12);
      } else {
        estimatedMrrJpy += unitAmount;
      }
    }

    const succeededCharges = charges.filter(
      (c) => c.paid === true && c.status === "succeeded"
    );
    const refundedCharges = charges.filter(
      (c) => c.refunded === true || Number(c.amount_refunded || 0) > 0
    );

    const netAmountOf = (c) =>
      Math.max(0, Number(c.amount || 0) - Number(c.amount_refunded || 0));

    const filterChargesWithin = (windowSec) =>
      succeededCharges.filter((c) => nowSec - Number(c.created || 0) <= windowSec);

    const charges24h = filterChargesWithin(sec24h);
    const charges7d = filterChargesWithin(sec7d);
    const charges30d = filterChargesWithin(sec30d);

    const sumNet = (list) => list.reduce((acc, c) => acc + netAmountOf(c), 0);

    return {
      status: "ok",
      mode,
      customers: {
        total: customers.length,
        new24h: customers.filter((c) => nowSec - Number(c.created || 0) <= sec24h)
          .length,
        new7d: customers.filter((c) => nowSec - Number(c.created || 0) <= sec7d)
          .length,
      },
      subscriptions: {
        active: activeSubs.length,
        cancelAtPeriodEnd: cancelAtPeriodEndSubs.length,
        canceled: canceledSubs.length,
        pastDue: pastDueSubs.length,
        estimatedMrrJpy,
      },
      payments: {
        succeededTotal: succeededCharges.length,
        succeeded24h: charges24h.length,
        succeeded7d: charges7d.length,
        succeeded30d: charges30d.length,
        netRevenueTotalJpy: sumNet(succeededCharges),
        netRevenue24hJpy: sumNet(charges24h),
        netRevenue7dJpy: sumNet(charges7d),
        netRevenue30dJpy: sumNet(charges30d),
        refundedCount: refundedCharges.length,
      },
    };
  } catch (err) {
    return {
      status: "error",
      mode,
      message: err instanceof Error ? err.message : String(err),
      customers: { total: 0, new24h: 0, new7d: 0 },
      subscriptions: {
        active: 0,
        cancelAtPeriodEnd: 0,
        canceled: 0,
        pastDue: 0,
        estimatedMrrJpy: 0,
      },
      payments: {
        succeededTotal: 0,
        succeeded24h: 0,
        succeeded7d: 0,
        succeeded30d: 0,
        netRevenueTotalJpy: 0,
        netRevenue24hJpy: 0,
        netRevenue7dJpy: 0,
        netRevenue30dJpy: 0,
        refundedCount: 0,
      },
    };
  }
}

export function extractCityFromAddress(address) {
  if (!address || typeof address !== "string") return null;
  const withoutPref = address
    .trim()
    .replace(/^(?:東京都|北海道|(?:京都|大阪)府|.{2,3}県)/, "");
  const match = withoutPref.match(
    /^([^\d\s]+?市[^\d\s]+?区|[^\d\s]+?[市区町村])/
  );
  return match && match[1] ? match[1].trim() : null;
}

export function extractAreaFromTitleOrDesc(title, description, cityName) {
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
  if (title && typeof title === "string") {
    const dashMatch = title.match(
      /(?:[—―─]{1,2}|ー{2})([一-龠々ヶノァ-ヶー]{2,8})の/
    );
    if (dashMatch && dashMatch[1]) return dashMatch[1].trim();
  }
  if (cityName) {
    const wardMatch = cityName.match(/市([^\d\s]+?)区$/);
    if (wardMatch && wardMatch[1] && wardMatch[1].length >= 2) {
      return wardMatch[1].trim();
    }
    const cleanCity = cityName
      .replace(/^.+?郡/, "")
      .replace(/[市区町村]$/, "")
      .trim();
    if (cleanCity.length >= 2) return cleanCity;
  }
  return null;
}

async function fetchGoogleSuggestions(seedQuery) {
  try {
    const url =
      "https://suggestqueries.google.com/complete/search?client=firefox&hl=ja&q=" +
      encodeURIComponent(seedQuery);
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

// 街歩き・お出かけ・観光文脈に合致する一般的な検索意図キーワードの判定
const OUTING_INTENT_PATTERNS = [
  /モデル\s*コース/,
  /車なし/,
  /徒歩/,
  /半日/,
  /日帰り/,
  /食べ歩き/,
  /街歩き/,
  /まち歩き/,
  /散歩/,
  /散策/,
  /観光\s*スポット/,
  /観光\s*おすすめ/,
  /観光\s*マップ/,
  /観光\s*所要時間/,
  /観光/,
  /見どころ/,
  /おすすめ\s*スポット/,
  /名所/,
  /穴場/,
  /カフェ/,
  /ランチ/,
  /グルメ/,
  /お土産/,
  /デート/,
  /休日/,
  /お出かけ/,
  /レトロ/,
  /御朱印/,
  /城下町/,
  /美観地区/,
  /運河/,
  /神社/,
  /神宮/,
  /大社/,
  /八幡/,
  /お寺|寺院|寺社|名刹|古刹/,
];

const NOISE_PATTERNS = [
  /天気/,
  /ホテル/,
  /宿泊/,
  /旅館\s*予約/,
  /賃貸/,
  /マンション/,
  /アパート/,
  /不動産/,
  /土地/,
  /事件/,
  /事故/,
  /火事/,
  /火災/,
  /病院/,
  /クリニック/,
  /皮膚科/,
  /歯医者/,
  /眼科/,
  /内科/,
  /整形外科/,
  /郵便局/,
  /市役所/,
  /区役所/,
  /町役場/,
  /村役場/,
  /ハローワーク/,
  /警察署/,
  /交番/,
  /競艇/,
  /パチンコ/,
  /スロット/,
  /時刻表/,
  /終電/,
  /定期代/,
  /定期券/,
  /駐車場/,
  /レンタカー/,
  /カーシェア/,
  /バスツアー/,
  /移住/,
  /治安/,
  /年収/,
  /高校/,
  /大学/,
  /中学校/,
  /小学校/,
  /幼稚園/,
  /保育園/,
  /美容院/,
  /美容室/,
  /理髪/,
  /ネイル/,
  /求人/,
  /バイト/,
  /パート/,
  /スーパー/,
  /ドラッグストア/,
  /薬局/,
  /犬\s*散歩/,
  /ペット\s*散歩/,
  /じゅん\s*散歩/,
  /散歩\s*番組/,
  /芸能人/,
  /有名人/,
  /有田哲平/,
];

function isOutingIntentSuggestion(s, areaName = "", city = "") {
  if (!s || typeof s !== "string") return false;
  if (NOISE_PATTERNS.some((re) => re.test(s))) return false;

  // 地名（areaName, city）を除去した検索意図部分を抽出して誤判定（地名に含まれる「寺」など）を防止
  let intentPart = s;
  if (areaName) {
    intentPart = intentPart.split(areaName).join(" ");
  }
  if (city) {
    intentPart = intentPart.split(city).join(" ");
  }
  intentPart = intentPart.trim();

  return OUTING_INTENT_PATTERNS.some((re) => re.test(intentPart));
}

function buildSmartHookFromSuggestions(areaName, realSuggestions, gscQueries, routeCategory) {
  const joined = [...gscQueries, ...realSuggestions].join(" ");

  const hasModelCourse = /モデル\s*コース/.test(joined);
  const hasCarFree = /車なし|徒歩/.test(joined);
  const hasHalfDay = /半日/.test(joined);
  const hasFoodWalk = /食べ歩き/.test(joined);
  const hasLunchCafe = /ランチ|カフェ|グルメ/.test(joined);
  const hasMap = /マップ/.test(joined);
  const hasDuration = /所要時間/.test(joined);
  const hasWalkCourse = /散歩|街歩き|散策/.test(joined);
  const hasSpots = /スポット|見どころ|おすすめ|名所|周辺\s*観光/.test(joined);

  // 実際の検索需要（Googleサジェスト・Search Console上位）に合わせて最も検索されやすいフックフレーズを組み立てる
  let mainPhrase = "";

  if (hasModelCourse && hasHalfDay) {
    mainPhrase = "半日観光モデルコース";
  } else if (hasModelCourse && hasCarFree) {
    mainPhrase = "観光モデルコース（車なし・徒歩）";
  } else if (hasModelCourse && hasFoodWalk) {
    mainPhrase = "観光・食べ歩きモデルコース";
  } else if (hasModelCourse) {
    mainPhrase = "観光モデルコース";
  } else if (hasFoodWalk) {
    mainPhrase = "観光・食べ歩きコース";
  } else if (hasWalkCourse && hasLunchCafe) {
    mainPhrase = "散歩コース・カフェ＆ランチ巡り";
  } else if (hasSpots && hasLunchCafe) {
    mainPhrase = "観光スポット・グルメ＆街歩き";
  } else if (hasSpots) {
    mainPhrase = "観光スポット・街歩きコース";
  } else if (hasWalkCourse) {
    mainPhrase = "散歩・街歩きコース";
  } else if (routeCategory === "食べたい" || hasLunchCafe) {
    mainPhrase = "グルメ・カフェ＆街歩きコース";
  } else {
    mainPhrase = "観光・街歩きモデルコース";
  }

  const subHooks = [];
  if (hasFoodWalk && !mainPhrase.includes("食べ歩き")) subHooks.push("食べ歩き");
  if (hasLunchCafe && !mainPhrase.includes("グルメ") && !mainPhrase.includes("ランチ")) {
    subHooks.push("グルメ・カフェ");
  }
  if (hasMap) subHooks.push("マップ");
  if (hasDuration) subHooks.push("所要時間");
  if (subHooks.length === 0) subHooks.push("徒歩マップ・所要時間");

  return {
    titleHook: `${areaName}の${mainPhrase}`,
    subHook: subHooks.slice(0, 2).join("・"),
  };
}

async function loadLocalAreaDefinitionsByTitle() {
  const areasDir = path.resolve(process.cwd(), "scripts/areas");
  const titleMap = new Map();
  if (!fs.existsSync(areasDir)) return titleMap;

  const files = fs
    .readdirSync(areasDir)
    .filter((f) => f.endsWith(".mjs") && !f.startsWith("_"));

  for (const file of files) {
    try {
      const fullPath = path.join(areasDir, file);
      const mod = await import(pathToFileURL(fullPath).href);
      const area = mod.default || mod.area;
      if (area && area.title) {
        titleMap.set(String(area.title).trim(), {
          slug: area.slug || file.replace(/\.mjs$/, ""),
          station: area.station || area.area_name || null,
          area_name: area.area_name || area.station || null,
          line: area.line || null,
          tags: Array.isArray(area.tags) ? area.tags : [],
        });
      }
    } catch {
      // ignore broken area definition
    }
  }
  return titleMap;
}

const REGION_BY_PREFECTURE = {
  北海道: "北海道・東北",
  青森県: "北海道・東北",
  岩手県: "北海道・東北",
  宮城県: "北海道・東北",
  秋田県: "北海道・東北",
  山形県: "北海道・東北",
  福島県: "北海道・東北",
  茨城県: "関東",
  栃木県: "関東",
  群馬県: "関東",
  埼玉県: "関東",
  千葉県: "関東",
  東京都: "関東",
  神奈川県: "関東",
  新潟県: "中部・北陸",
  富山県: "中部・北陸",
  石川県: "中部・北陸",
  福井県: "中部・北陸",
  山梨県: "中部・北陸",
  長野県: "中部・北陸",
  岐阜県: "中部・北陸",
  静岡県: "中部・北陸",
  愛知県: "中部・北陸",
  三重県: "近畿",
  滋賀県: "近畿",
  京都府: "近畿",
  大阪府: "近畿",
  兵庫県: "近畿",
  奈良県: "近畿",
  和歌山県: "近畿",
  鳥取県: "中国・四国",
  島根県: "中国・四国",
  岡山県: "中国・四国",
  広島県: "中国・四国",
  山口県: "中国・四国",
  徳島県: "中国・四国",
  香川県: "中国・四国",
  愛媛県: "中国・四国",
  高知県: "中国・四国",
  福岡県: "九州・沖縄",
  佐賀県: "九州・沖縄",
  長崎県: "九州・沖縄",
  熊本県: "九州・沖縄",
  大分県: "九州・沖縄",
  宮崎県: "九州・沖縄",
  鹿児島県: "九州・沖縄",
  沖縄県: "九州・沖縄",
};

const ALL_PREFECTURES = Object.keys(REGION_BY_PREFECTURE);

async function discoverAreaSearchIntents(routes, gscRows) {
  const existingPath = path.resolve(
    process.cwd(),
    "src/data/seo_area_keywords.json"
  );
  let existingData = { byRouteId: {}, byAreaName: {}, byPrefecture: {} };
  if (fs.existsSync(existingPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(existingPath, "utf8")) || {};
      if (parsed.byRouteId && parsed.byAreaName) {
        existingData = {
          byRouteId: parsed.byRouteId || {},
          byAreaName: parsed.byAreaName || {},
          byPrefecture: parsed.byPrefecture || {},
        };
      }
    } catch {
      existingData = { byRouteId: {}, byAreaName: {}, byPrefecture: {} };
    }
  }

  const localAreaMap = await loadLocalAreaDefinitionsByTitle();

  // Group routes by unique areaName so we don't query the same area twice
  const areaMap = new Map();
  const prefectureMap = new Map();
  const routeToAreaMeta = new Map();

  for (const r of routes) {
    const spots = Array.isArray(r.spots) ? r.spots : [];
    const city =
      spots.map((s) => extractCityFromAddress(s.address)).find(Boolean) || null;
    const localDef = localAreaMap.get(String(r.title || "").trim());
    const extractedArea =
      localDef?.area_name ||
      localDef?.station ||
      extractAreaFromTitleOrDesc(r.title, r.description, city);
    const primaryArea =
      extractedArea ||
      (city ? city.replace(/^.+?郡/, "").replace(/[市区町村]$/, "") : r.prefecture || "街歩き");

    const pref = String(r.prefecture || "").trim();

    routeToAreaMeta.set(r.id, {
      routeId: r.id,
      areaName: primaryArea,
      station: localDef?.station || primaryArea,
      line: localDef?.line || null,
      tags: localDef?.tags || [],
      city,
      prefecture: pref,
      category: r.category || "",
    });

    if (!areaMap.has(primaryArea)) {
      areaMap.set(primaryArea, {
        areaName: primaryArea,
        city,
        prefecture: pref,
        line: localDef?.line || null,
        tags: localDef?.tags || [],
        sampleCategory: r.category || "",
        routeIds: [],
      });
    }
    areaMap.get(primaryArea).routeIds.push(r.id);

    if (pref) {
      if (!prefectureMap.has(pref)) {
        prefectureMap.set(pref, {
          prefecture: pref,
          region: REGION_BY_PREFECTURE[pref] || "全国",
          routeIds: [],
          areaNames: new Set(),
          cities: new Set(),
          lines: new Set(),
          categories: new Set(),
          spotNames: [],
          spotCount: 0,
        });
      }
      const pEntry = prefectureMap.get(pref);
      pEntry.routeIds.push(r.id);
      if (primaryArea && primaryArea !== pref) pEntry.areaNames.add(primaryArea);
      if (city) pEntry.cities.add(city);
      if (localDef?.line) pEntry.lines.add(localDef.line);
      if (r.category) pEntry.categories.add(r.category);
      pEntry.spotCount += spots.length;
      for (const s of spots) {
        if (s?.name && pEntry.spotNames.length < 18 && !pEntry.spotNames.includes(s.name)) {
          pEntry.spotNames.push(s.name);
        }
      }
    }
  }

  const byAreaName = { ...(existingData.byAreaName || {}) };
  const byRouteId = { ...(existingData.byRouteId || {}) };
  const byPrefecture = { ...(existingData.byPrefecture || {}) };

  for (const [areaName, info] of areaMap.entries()) {
    // 1. Check GSC queries matching this area or routes in this area
    const matchingGsc = (gscRows || [])
      .filter(
        (row) =>
          row.query.includes(areaName) ||
          info.routeIds.some((id) => row.page.includes(id))
      )
      .sort((a, b) => b.impressions - a.impressions);

    const gscTopQueries = Array.from(
      new Set(matchingGsc.map((r) => r.query).filter(Boolean))
    ).slice(0, 8);

    // 2. Fetch Google Suggest for general search intent around this area
    const [sugBase, sugKanko, sugSanpo] = await Promise.all([
      fetchGoogleSuggestions(`${areaName} `),
      fetchGoogleSuggestions(`${areaName} 観光 `),
      fetchGoogleSuggestions(`${areaName} 散歩`),
    ]);

    const rawSuggestions = Array.from(
      new Set([...sugKanko, ...sugBase, ...sugSanpo])
    );

    const filteredSuggestions = rawSuggestions.filter((s) =>
      isOutingIntentSuggestion(s, areaName, info.city)
    );

    // If suburban/residential station had few matches on `{areaName} 観光 `, also check `{city} 観光 `
    if (filteredSuggestions.length < 3 && info.city) {
      const sugCity = await fetchGoogleSuggestions(`${info.city} 観光 `);
      for (const s of sugCity) {
        if (
          isOutingIntentSuggestion(s, areaName, info.city) &&
          !filteredSuggestions.includes(s)
        ) {
          filteredSuggestions.push(s);
        }
      }
    }

    // 実際のGoogleサジェスト＋GSCクエリのみでフックを判定（フォールバック混ぜ前）
    const realSuggestions = [...filteredSuggestions];

    const { titleHook, subHook } = buildSmartHookFromSuggestions(
      areaName,
      realSuggestions,
      gscTopQueries,
      info.sampleCategory
    );

    // Ensure essential high-intent general queries are also represented in keywords list
    const fallbackIntents = [
      `${areaName} 観光 モデルコース`,
      `${areaName} 街歩き`,
      `${areaName} 散歩コース`,
      `${areaName} 観光 所要時間`,
      `${areaName} おすすめスポット`,
    ];
    for (const fb of fallbackIntents) {
      if (filteredSuggestions.length < 8 && !filteredSuggestions.includes(fb)) {
        filteredSuggestions.push(fb);
      }
    }

    const areaEntry = {
      areaName,
      city: info.city,
      prefecture: info.prefecture,
      line: info.line,
      tags: info.tags,
      titleHook,
      subHook,
      topSearchKeywords: Array.from(
        new Set([
          ...gscTopQueries,
          ...filteredSuggestions,
          ...(info.line
            ? [`${info.line} 街歩き`, `${info.line} 観光`, `${info.line} 散歩`]
            : []),
          ...(info.tags || []),
        ])
      ).slice(0, 14),
      gscTopQueries,
      updatedAt: new Date().toISOString().split("T")[0],
    };

    byAreaName[areaName] = areaEntry;
    for (const routeId of info.routeIds) {
      byRouteId[routeId] = areaEntry;
    }
  }

  // 都道府県別ハブ（/areas/[prefecture]）の検索意図・充実度ティア・自動ガイド文を更新
  for (const [pref, pInfo] of prefectureMap.entries()) {
    const shortPref = pref.replace(/[都府県]$/, "");
    const routeCount = pInfo.routeIds.length;
    const spotCount = pInfo.spotCount;
    const maturityTier = routeCount >= 3 ? "rich" : routeCount >= 1 ? "growing" : "empty";
    const areaList = Array.from(pInfo.areaNames);
    const cityList = Array.from(pInfo.cities);
    const lineList = Array.from(pInfo.lines);
    const categoryList = Array.from(pInfo.categories);

    const matchingPrefGsc = (gscRows || [])
      .filter(
        (row) =>
          row.query.includes(shortPref) ||
          row.page.includes(encodeURIComponent(pref)) ||
          pInfo.routeIds.some((id) => row.page.includes(id))
      )
      .sort((a, b) => b.impressions - a.impressions);

    const gscTopQueries = Array.from(
      new Set(matchingPrefGsc.map((r) => r.query).filter(Boolean))
    ).slice(0, 8);

    const [sugPrefKanko, sugPrefSanpo] = await Promise.all([
      fetchGoogleSuggestions(`${shortPref} 観光 `),
      fetchGoogleSuggestions(`${shortPref} 街歩き`),
    ]);

    const filteredPrefSuggestions = Array.from(
      new Set([...sugPrefKanko, ...sugPrefSanpo])
    ).filter((s) => isOutingIntentSuggestion(s, shortPref, pref));

    const { titleHook, subHook } = buildSmartHookFromSuggestions(
      pref,
      filteredPrefSuggestions,
      gscTopQueries,
      categoryList[0] || ""
    );

    const fallbackPrefKeywords = [
      `${pref} 観光 モデルコース`,
      `${shortPref} 街歩き`,
      `${shortPref} 散歩コース`,
      `${shortPref} 日帰り 観光 電車`,
      `${shortPref} 穴場スポット`,
      ...lineList.slice(0, 6).map((l) => `${l} 街歩き`),
      ...areaList.slice(0, 6).map((a) => `${a} 街歩き`),
    ];

    const topSearchKeywords = Array.from(
      new Set([...gscTopQueries, ...filteredPrefSuggestions, ...fallbackPrefKeywords])
    ).slice(0, 18);

    const areaPreview =
      areaList.length > 0
        ? `${areaList.slice(0, 6).join("・")}${areaList.length > 6 ? "など" : ""}`
        : pref;
    const linePreview =
      lineList.length > 0
        ? `（${lineList.slice(0, 4).join("・")}${lineList.length > 4 ? "ほか" : ""}沿線）`
        : "";
    const spotPreview =
      pInfo.spotNames.length > 0
        ? `${pInfo.spotNames.slice(0, 5).join("、")}${pInfo.spotNames.length > 5 ? "など" : ""}`
        : "";

    const leadSummary =
      routeCount >= 3
        ? `${pref}では現在、${areaPreview}${linePreview}をめぐる全${routeCount}ルート（計${spotCount}箇所のスポット）を公開しています。${spotPreview ? `${spotPreview}を訪ねながら、` : ""}駅から徒歩（車なし）で1〜2時間ほどで歩ける物語と、現地で押印できる「SHUIN（まちのしるし）」を集める街歩きを楽しめます。`
        : `${pref}では現在、${areaPreview}${linePreview}をめぐる街歩きルート（全${routeCount}ルート・${spotCount}箇所のスポット）を公開中です。${spotPreview ? `${spotPreview}など、` : ""}ガイドブックだけでは見えない街の物語を徒歩で辿りながら、訪れた場所のしるし（SHUIN）を刻むことができます。順次${pref}内の新たな駅・エリアのルートも拡充しています。`;

    byPrefecture[pref] = {
      prefecture: pref,
      region: pInfo.region,
      routeCount,
      spotCount,
      maturityTier,
      areaNames: areaList,
      cities: cityList,
      lines: lineList,
      categories: categoryList,
      featuredSpots: pInfo.spotNames.slice(0, 12),
      titleHook,
      subHook,
      leadSummary,
      topSearchKeywords,
      gscTopQueries,
      updatedAt: new Date().toISOString().split("T")[0],
    };
  }

  const outputPayload = {
    updatedAt: new Date().toISOString(),
    byPrefecture,
    byAreaName,
    byRouteId,
  };

  fs.mkdirSync(path.dirname(existingPath), { recursive: true });
  fs.writeFileSync(
    existingPath,
    JSON.stringify(outputPayload, null, 2) + "\n",
    "utf8"
  );

  return { byAreaName, byPrefecture };
}

async function main() {
  const [gscResult, ga4Result, sitemapSubmitResult, stripeMetrics] =
    await Promise.all([
      fetchSearchConsoleMetrics(),
      fetchGa4Metrics(),
      submitSitemapToSearchConsole(),
      fetchStripeMetrics(),
    ]);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasServiceRoleKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const routes = [];
  const microFeedbackList = [];
  let supabaseClient = null;
  if (supabaseUrl && supabaseKey) {
    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
      realtime: { transport: ws },
    });
    const supabase = supabaseClient;
    const PAGE_SIZE = 1000;
    let offset = 0;
    while (true) {
      const { data, error } = await supabase
        .from("routes")
        .select(
          "id, title, description, prefecture, category, budget_tier, thumbnail_url, is_published, created_at, spots(id, name, description, address, location, order_index)"
        )
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .range(offset, offset + PAGE_SIZE - 1);

      if (error || !data || data.length === 0) break;
      routes.push(...data);
      if (data.length < PAGE_SIZE) break;
      offset += PAGE_SIZE;
    }

    try {
      const { data: fbRows } = await supabase
        .from("inquiries")
        .select("id, name, message, status, created_at")
        .eq("category", "micro_feedback")
        .order("created_at", { ascending: false })
        .limit(30);
      if (Array.isArray(fbRows)) {
        microFeedbackList.push(...fbRows);
      }
    } catch {
      // ignore if inquiries table not accessible
    }
  }

  const [userMetrics, areaIntentResult] = await Promise.all([
    fetchUserMetrics(supabaseClient, hasServiceRoleKey, ga4Result),
    discoverAreaSearchIntents(routes, gscResult.rows || []),
  ]);
  const { byAreaName: areaKeywordsMap, byPrefecture: prefectureKeywordsMap } =
    areaIntentResult;

  // 都道府県ハブ（/areas, /areas/[prefecture]）およびスポット個別ページ（/routes/[id]/spot/[spotId]）監査
  const prefEntries = Object.values(prefectureKeywordsMap);
  const richPrefectures = prefEntries
    .filter((p) => p.maturityTier === "rich")
    .sort((a, b) => b.routeCount - a.routeCount);
  const growingPrefectures = prefEntries
    .filter((p) => p.maturityTier === "growing")
    .sort((a, b) => b.routeCount - a.routeCount);
  const uncoveredPrefectures = ALL_PREFECTURES.filter(
    (pref) => !prefectureKeywordsMap[pref]
  );

  // LLMO (llms.txt / llms-full.txt) 配信データ品質・カバレッジ監査
  const forbiddenRegex = /(?<!ギャ)ラリー|スタンプラリー|ナラティブ|スタンプ/;
  let totalSpotsCount = 0;
  const routesWithSpotGaps = [];
  const routesWithShortDescriptions = [];
  const terminologyViolations = [];

  for (const r of routes) {
    const spots = Array.isArray(r.spots) ? r.spots : [];
    totalSpotsCount += spots.length;

    const missingAddressSpots = spots.filter((s) => !s.address || !String(s.address).trim());
    const missingLocationSpots = spots.filter((s) => !s.location);
    if (spots.length < 5 || missingAddressSpots.length > 0 || missingLocationSpots.length > 0) {
      routesWithSpotGaps.push({
        routeId: r.id,
        title: r.title,
        spotCount: spots.length,
        missingAddressCount: missingAddressSpots.length,
        missingLocationCount: missingLocationSpots.length,
      });
    }

    const descLen = String(r.description || "").trim().length;
    const shortSpotDescs = spots.filter((s) => String(s.description || "").trim().length < 30);
    if (descLen < 60 || shortSpotDescs.length > 0) {
      routesWithShortDescriptions.push({
        routeId: r.id,
        title: r.title,
        routeDescLength: descLen,
        shortSpotNames: shortSpotDescs.map((s) => s.name),
      });
    }

    if (forbiddenRegex.test(String(r.title || "")) || forbiddenRegex.test(String(r.description || ""))) {
      terminologyViolations.push({
        type: "route",
        routeId: r.id,
        title: r.title,
      });
    }
    for (const s of spots) {
      if (forbiddenRegex.test(String(s.name || "")) || forbiddenRegex.test(String(s.description || ""))) {
        terminologyViolations.push({
          type: "spot",
          routeId: r.id,
          spotId: s.id,
          name: s.name,
        });
      }
    }
  }

  const prefectureHubAudit = {
    hubIndexUrl: `${PUBLIC_SITE_URL}/areas`,
    filesPresent: {
      areasIndexPage: fs.existsSync(
        path.resolve(process.cwd(), "src/app/areas/page.tsx")
      ),
      prefectureHubPage: fs.existsSync(
        path.resolve(process.cwd(), "src/app/areas/[prefecture]/page.tsx")
      ),
      spotSeoLayout: fs.existsSync(
        path.resolve(
          process.cwd(),
          "src/app/routes/[id]/spot/[spotId]/layout.tsx"
        )
      ),
    },
    coveredPrefecturesCount: prefEntries.length,
    richPrefecturesCount: richPrefectures.length,
    growingPrefecturesCount: growingPrefectures.length,
    uncoveredPrefecturesCount: uncoveredPrefectures.length,
    uncoveredPrefectures,
    richPrefectures: richPrefectures.map((p) => ({
      prefecture: p.prefecture,
      routeCount: p.routeCount,
      spotCount: p.spotCount,
      areaNames: p.areaNames,
      titleHook: p.titleHook,
    })),
    growingPrefectures: growingPrefectures.map((p) => ({
      prefecture: p.prefecture,
      routeCount: p.routeCount,
      spotCount: p.spotCount,
      areaNames: p.areaNames,
      titleHook: p.titleHook,
    })),
  };

  const llmsAudit = {
    endpoints: [`${PUBLIC_SITE_URL}/llms.txt`, `${PUBLIC_SITE_URL}/llms-full.txt`],
    filesPresent: {
      llmsUtil: fs.existsSync(path.resolve(process.cwd(), "src/utils/llms.ts")),
      llmsRoute: fs.existsSync(path.resolve(process.cwd(), "src/app/llms.txt/route.ts")),
      llmsFullRoute: fs.existsSync(path.resolve(process.cwd(), "src/app/llms-full.txt/route.ts")),
    },
    totalPublishedRoutesInLlms: routes.length,
    totalSpotsInLlms: totalSpotsCount,
    routesWithSpotGapsCount: routesWithSpotGaps.length,
    routesWithShortDescriptionsCount: routesWithShortDescriptions.length,
    terminologyViolationsCount: terminologyViolations.length,
    routesWithSpotGaps: routesWithSpotGaps.slice(0, 10),
    routesWithShortDescriptions: routesWithShortDescriptions.slice(0, 10),
    terminologyViolations: terminologyViolations.slice(0, 10),
  };

  // Top queries from GSC (unfiltered, sorted by impressions so we see real user intent!)
  const topGscQueriesByImpressions = [...(gscResult.rows || [])]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);

  const topGscPages = [...(gscResult.pageRows || [])]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);

  const lowCtrOpportunities = (gscResult.rows || [])
    .filter((r) => r.impressions >= 15 && r.ctr < 0.03)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  const strikingDistanceQueries = (gscResult.rows || [])
    .filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 1)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  const highBounceRoutePages = (ga4Result.rows || [])
    .filter(
      (r) =>
        r.pagePath.startsWith("/routes/") &&
        r.screenPageViews >= 10 &&
        r.engagementRate < 0.45
    )
    .sort((a, b) => b.screenPageViews - a.screenPageViews)
    .slice(0, 15);

  // 本日のSNS紹介ルート選定 ＆ マイクロフィードバック集計
  let dailySnsPick = null;
  if (routes.length > 0) {
    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const pickedRoute = routes[daySeed % routes.length];
    const postPayload = buildDailySnsPostForRoute(pickedRoute, null);
    const shouldAutoPost =
      process.argv.includes("--post-sns") ||
      Boolean(
        process.env.BLUESKY_IDENTIFIER ||
          process.env.SNS_WEBHOOK_URL ||
          process.env.X_USER_ACCESS_TOKEN
      );
    const dispatchResult = await dispatchSnsPostIfConfigured(
      postPayload,
      shouldAutoPost
    );
    dailySnsPick = {
      ...postPayload,
      dispatchResult,
    };
  }

  const microFeedbackSummary = {
    totalRecentCount: microFeedbackList.length,
    openCount: microFeedbackList.filter((f) => f.status === "OPEN").length,
    recentItems: microFeedbackList.slice(0, 15),
  };

  const report = {
    generatedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    gscStatus: gscResult.status,
    gscMessage: gscResult.message || null,
    gscPeriod: gscResult.period || null,
    sitemapSubmission: sitemapSubmitResult,
    ga4Status: ga4Result.status,
    ga4Message: ga4Result.message || null,
    summary: {
      externalRegisteredUsers:
        userMetrics?.headline?.externalRegisteredUsers ?? 0,
      newExternalUsers24h: userMetrics?.headline?.newExternalUsers24h ?? 0,
      newExternalUsers7d: userMetrics?.headline?.newExternalUsers7d ?? 0,
      internalTestUsers: userMetrics?.headline?.internalTestUsers ?? 0,
      totalStamps: userMetrics?.activity?.stampsTotal ?? 0,
      stamps24h: userMetrics?.activity?.stamps24h ?? 0,
      stripeMode: stripeMetrics?.mode || null,
      stripeActiveSubscriptions: stripeMetrics?.subscriptions?.active ?? 0,
      stripeEstimatedMrrJpy:
        stripeMetrics?.subscriptions?.estimatedMrrJpy ?? 0,
      stripeCustomersTotal: stripeMetrics?.customers?.total ?? 0,
      stripePayments24hCount: stripeMetrics?.payments?.succeeded24h ?? 0,
      stripeNetRevenue24hJpy: stripeMetrics?.payments?.netRevenue24hJpy ?? 0,
      stripeNetRevenue30dJpy: stripeMetrics?.payments?.netRevenue30dJpy ?? 0,
      stripeNetRevenueTotalJpy:
        stripeMetrics?.payments?.netRevenueTotalJpy ?? 0,
      totalGscRows: (gscResult.rows || []).length,
      totalGscPages: (gscResult.pageRows || []).length,
      sitemapStatus: sitemapSubmitResult.status,
      lowCtrOpportunityCount: lowCtrOpportunities.length,
      strikingDistanceQueryCount: strikingDistanceQueries.length,
      totalGa4Pages: (ga4Result.rows || []).length,
      highBounceRoutePageCount: highBounceRoutePages.length,
      totalPublishedRoutes: routes.length,
      totalAreasAnalyzed: Object.keys(areaKeywordsMap).length,
      totalPrefecturesCovered: prefEntries.length,
      richPrefecturesCount: richPrefectures.length,
      growingPrefecturesCount: growingPrefectures.length,
      llmsTotalSpots: totalSpotsCount,
      llmsSpotGapsCount: routesWithSpotGaps.length,
      llmsShortDescriptionsCount: routesWithShortDescriptions.length,
      llmsTerminologyViolationsCount: terminologyViolations.length,
      microFeedbackOpenCount: microFeedbackSummary.openCount,
      dailySnsRouteId: dailySnsPick?.routeId || null,
    },
    userMetrics,
    stripeMetrics,
    dailySnsPick,
    microFeedbackSummary,
    prefectureHubAudit,
    llmsAudit,
    topGscQueriesByImpressions,
    topGscPages,
    lowCtrOpportunities,
    strikingDistanceQueries,
    topGa4Pages: (ga4Result.rows || []).slice(0, 20),
    highBounceRoutePages,
    sampleAreaIntents: Object.values(areaKeywordsMap).slice(0, 20),
  };

  const outPath = "/tmp/shuin_seo_daily_report.json";
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`✅ SHUIN SEO Daily Report written to ${outPath}`);
  console.log(
    `✅ Updated src/data/seo_area_keywords.json for ${Object.keys(areaKeywordsMap).length} areas & ${prefEntries.length} prefectures`
  );
  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((err) => {
  console.error("❌ SEO Daily Iteration failed:", err);
  process.exit(1);
});
