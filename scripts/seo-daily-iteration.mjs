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
    };
  }

  try {
    const token = await getGoogleAccessToken(sa);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 2);
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 28);

    const apiEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      SITE_URL
    )}/searchAnalytics/query`;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    if (sa.type === "authorized_user") {
      headers["x-goog-user-project"] =
        sa.quota_project_id || process.env.GOOGLE_CLOUD_PROJECT || "jba-system";
    }

    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ["query", "page"],
        rowLimit: 500,
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

async function discoverAreaSearchIntents(routes, gscRows) {
  const existingPath = path.resolve(
    process.cwd(),
    "src/data/seo_area_keywords.json"
  );
  let existingData = { byRouteId: {}, byAreaName: {} };
  if (fs.existsSync(existingPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(existingPath, "utf8")) || {};
      if (parsed.byRouteId && parsed.byAreaName) {
        existingData = parsed;
      }
    } catch {
      existingData = { byRouteId: {}, byAreaName: {} };
    }
  }

  const localAreaMap = await loadLocalAreaDefinitionsByTitle();

  // Group routes by unique areaName so we don't query the same area twice
  const areaMap = new Map();
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

    routeToAreaMeta.set(r.id, {
      routeId: r.id,
      areaName: primaryArea,
      station: localDef?.station || primaryArea,
      line: localDef?.line || null,
      tags: localDef?.tags || [],
      city,
      prefecture: r.prefecture || "",
      category: r.category || "",
    });

    if (!areaMap.has(primaryArea)) {
      areaMap.set(primaryArea, {
        areaName: primaryArea,
        city,
        prefecture: r.prefecture || "",
        line: localDef?.line || null,
        tags: localDef?.tags || [],
        sampleCategory: r.category || "",
        routeIds: [],
      });
    }
    areaMap.get(primaryArea).routeIds.push(r.id);
  }

  const byAreaName = { ...(existingData.byAreaName || {}) };
  const byRouteId = { ...(existingData.byRouteId || {}) };

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
        new Set([...gscTopQueries, ...filteredSuggestions, ...(info.tags || [])])
      ).slice(0, 12),
      gscTopQueries,
      updatedAt: new Date().toISOString().split("T")[0],
    };

    byAreaName[areaName] = areaEntry;
    for (const routeId of info.routeIds) {
      byRouteId[routeId] = areaEntry;
    }
  }

  const outputPayload = {
    updatedAt: new Date().toISOString(),
    byAreaName,
    byRouteId,
  };

  fs.mkdirSync(path.dirname(existingPath), { recursive: true });
  fs.writeFileSync(
    existingPath,
    JSON.stringify(outputPayload, null, 2) + "\n",
    "utf8"
  );

  return byAreaName;
}

async function main() {
  const [gscResult, ga4Result] = await Promise.all([
    fetchSearchConsoleMetrics(),
    fetchGa4Metrics(),
  ]);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const routes = [];
  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
      realtime: { transport: ws },
    });
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
  }

  const areaKeywordsMap = await discoverAreaSearchIntents(
    routes,
    gscResult.rows || []
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

  const lowCtrOpportunities = (gscResult.rows || [])
    .filter((r) => r.impressions >= 15 && r.ctr < 0.03)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  const strikingDistanceQueries = (gscResult.rows || [])
    .filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 5)
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

  const report = {
    generatedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    gscStatus: gscResult.status,
    gscMessage: gscResult.message || null,
    gscPeriod: gscResult.period || null,
    ga4Status: ga4Result.status,
    ga4Message: ga4Result.message || null,
    summary: {
      totalGscRows: (gscResult.rows || []).length,
      lowCtrOpportunityCount: lowCtrOpportunities.length,
      strikingDistanceQueryCount: strikingDistanceQueries.length,
      totalGa4Pages: (ga4Result.rows || []).length,
      highBounceRoutePageCount: highBounceRoutePages.length,
      totalPublishedRoutes: routes.length,
      totalAreasAnalyzed: Object.keys(areaKeywordsMap).length,
      llmsTotalSpots: totalSpotsCount,
      llmsSpotGapsCount: routesWithSpotGaps.length,
      llmsShortDescriptionsCount: routesWithShortDescriptions.length,
      llmsTerminologyViolationsCount: terminologyViolations.length,
    },
    llmsAudit,
    topGscQueriesByImpressions,
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
    `✅ Updated src/data/seo_area_keywords.json for ${Object.keys(areaKeywordsMap).length} areas`
  );
  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((err) => {
  console.error("❌ SEO Daily Iteration failed:", err);
  process.exit(1);
});
