import type { Metadata } from "next";
import type { RouteWalkMetrics } from "@/utils/routeMetrics";
import seoAreaKeywordsData from "@/data/seo_area_keywords.json";

interface AreaKeywordEntry {
  areaName: string;
  city?: string | null;
  prefecture?: string;
  line?: string | null;
  tags?: string[];
  titleHook: string;
  subHook: string;
  topSearchKeywords: string[];
  gscTopQueries?: string[];
  updatedAt?: string;
}

export interface PrefectureKeywordEntry {
  prefecture: string;
  region: string;
  routeCount: number;
  spotCount: number;
  maturityTier: "rich" | "growing" | "empty";
  areaNames: string[];
  cities?: string[];
  lines?: string[];
  categories?: string[];
  featuredSpots: string[];
  titleHook: string;
  subHook: string;
  leadSummary: string;
  topSearchKeywords: string[];
  gscTopQueries?: string[];
  updatedAt?: string;
}

export const PREFECTURE_REGION_MAP: Record<string, string> = {
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

export const REGION_ORDER = [
  "関東",
  "近畿",
  "中部・北陸",
  "北海道・東北",
  "中国・四国",
  "九州・沖縄",
] as const;

export const ALL_PREFECTURE_NAMES = Object.keys(PREFECTURE_REGION_MAP);

export function normalizePrefectureParam(rawParam?: string | null): string | null {
  if (!rawParam || typeof rawParam !== "string") return null;
  let decoded = rawParam.trim();
  try {
    decoded = decodeURIComponent(decoded).trim();
  } catch {
    // ignore malformed URI component
  }
  if (PREFECTURE_REGION_MAP[decoded]) return decoded;
  const matched = ALL_PREFECTURE_NAMES.find(
    (p) => p.replace(/[都府県]$/, "") === decoded
  );
  return matched || null;
}

const byRouteIdMap = ((seoAreaKeywordsData as any)?.byRouteId || {}) as Record<
  string,
  AreaKeywordEntry
>;
const byAreaNameMap = ((seoAreaKeywordsData as any)?.byAreaName || {}) as Record<
  string,
  AreaKeywordEntry
>;
const byPrefectureMap = ((seoAreaKeywordsData as any)?.byPrefecture || {}) as Record<
  string,
  PrefectureKeywordEntry
>;

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://shuin.app";
  return raw.replace(/\/+$/, "");
}

export function extractCityFromAddress(address?: string | null): string | null {
  if (!address || typeof address !== "string") return null;
  const trimmed = address.trim();
  if (!trimmed) return null;
  const withoutPref = trimmed.replace(
    /^(?:東京都|北海道|(?:京都|大阪)府|.{2,3}県)/,
    ""
  );
  // 政令指定都市（例: さいたま市岩槻区・北九州市門司区）は「〇〇市〇〇区」まで抽出
  const match = withoutPref.match(
    /^([^\d\s]+?市[^\d\s]+?区|[^\d\s]+?[市区町村])/
  );
  return match && match[1] ? match[1].trim() : null;
}

function stripCountyPrefix(cityName: string): string {
  return cityName.replace(/^.+?郡(?=.+[町村]$)/, "").trim();
}

export function extractAreaFromTitle(
  title?: string | null,
  description?: string | null,
  cityName?: string | null
): string | null {
  const combined = `${title || ""} ${description || ""}`;

  // 1. 「〇〇駅」から駅名を抽出（漢字・カタカナ・ヶ・ノのみで構成される駅名）
  const stationRegex = /([一-龠々ヶノァ-ヶー]{2,10})駅/g;
  const stationStopWords = new Set([
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
  let match: RegExpExecArray | null;
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
      !stationStopWords.has(cand) &&
      !/[のはがをにへでとやもからまでより]$/.test(cand)
    ) {
      return cand;
    }
  }

  // 2. タイトル中の「——〇〇の」パターン（例: 「人形師が宿った城下町——岩槻のしるしを刻む」）
  if (title && typeof title === "string") {
    const dashMatch = title.match(
      /(?:[—―─]{1,2}|ー{2})([一-龠々ヶノァ-ヶー]{2,8})の/
    );
    if (dashMatch && dashMatch[1]) {
      return dashMatch[1].trim();
    }
  }

  // 3. 政令指定都市の区名または市区町村名から郡を除いた地名（例: さいたま市岩槻区 -> 岩槻、上高井郡小布施町 -> 小布施）
  if (cityName) {
    const wardMatch = cityName.match(/市([^\d\s]+?)区$/);
    if (wardMatch && wardMatch[1] && wardMatch[1].length >= 2) {
      return wardMatch[1].trim();
    }
    const cleanCity = stripCountyPrefix(cityName)
      .replace(/[市区町村]$/, "")
      .trim();
    if (cleanCity.length >= 2) {
      return cleanCity;
    }
  }

  return null;
}

export function formatShortAreaLabel(areaName?: string | null): string {
  if (!areaName || typeof areaName !== "string") return "";
  let s = areaName.replace(/（[^）]*）/g, "").trim();
  if (s.includes("・")) {
    const parts = s
      .split("・")
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length > 1) {
      const first = parts[0];
      const isPref = /^(?:北海道|東京都|京都府|大阪府|.{2,3}県)$/.test(first);
      s = isPref && parts[1] ? parts[1] : first;
    }
  }
  s = s.replace(/空港ターミナル$/, "空港").trim();
  s = s.replace(/^(.{2,})(?<!道の)駅$/, "$1").trim();
  return s || areaName.trim();
}

export interface RouteAreaSeoInfo {
  areaName: string;
  shortAreaName: string;
  cityName: string | null;
  prefecture: string;
  line: string | null;
  fullAreaLabel: string;
  titleHook: string;
  subHook: string;
  topSearchKeywords: string[];
  spotNames: string[];
  budgetLabel: string;
}

export function extractRouteAreaInfo(
  rally: any,
  spotsList: any[]
): RouteAreaSeoInfo {
  let cityName: string | null = null;
  for (const s of spotsList || []) {
    if (typeof s?.city === "string" && s.city.trim()) {
      cityName = s.city.trim();
      break;
    }
    const parsed = extractCityFromAddress(s?.address);
    if (parsed) {
      cityName = parsed;
      break;
    }
  }

  const matchedByRoute = rally?.id ? byRouteIdMap[rally.id] : undefined;
  const prefecture = (
    rally?.prefecture ||
    matchedByRoute?.prefecture ||
    ""
  ).trim();

  const explicitArea =
    typeof rally?.area_name === "string" && rally.area_name.trim()
      ? rally.area_name.trim()
      : null;
  const titleArea = extractAreaFromTitle(
    rally?.title,
    rally?.description,
    cityName
  );

  const areaName =
    matchedByRoute?.areaName ||
    explicitArea ||
    titleArea ||
    (cityName ? stripCountyPrefix(cityName).replace(/[市区町村]$/, "") : "") ||
    prefecture ||
    "街歩き";

  const matchedEntry = matchedByRoute || byAreaNameMap[areaName];

  const resolvedCity = cityName || matchedEntry?.city || null;
  const resolvedLine = matchedEntry?.line || null;
  const fullAreaLabel = [
    prefecture,
    resolvedCity && resolvedCity !== areaName ? resolvedCity : null,
    resolvedLine || null,
    areaName && areaName !== prefecture && areaName !== resolvedCity
      ? `${areaName}エリア`
      : null,
  ]
    .filter(Boolean)
    .join("・");

  const spotNames = (spotsList || [])
    .map((s: any) => (typeof s?.name === "string" ? s.name.trim() : ""))
    .filter(Boolean);

  const budgetLabel =
    rally?.budget_tier === 1
      ? "〜1,000円"
      : rally?.budget_tier === 2
        ? "〜5,000円"
        : rally?.budget_tier === 3
          ? "5,000円〜"
          : "気軽に散策";

  const titleHook =
    matchedEntry?.titleHook || `${areaName}の街歩き・散歩散策コース`;
  const subHook = matchedEntry?.subHook || "徒歩マップ・所要時間";
  const topSearchKeywords =
    matchedEntry?.topSearchKeywords && matchedEntry.topSearchKeywords.length > 0
      ? matchedEntry.topSearchKeywords
      : [
          `${areaName} 散歩コース`,
          `${areaName} 街歩き`,
          `${areaName} 散策コース`,
          `${areaName} 散歩 所要時間`,
          `${areaName} おすすめスポット`,
        ];

  const shortAreaName = formatShortAreaLabel(areaName) || areaName;

  return {
    areaName,
    shortAreaName,
    cityName: resolvedCity,
    prefecture,
    line: resolvedLine,
    fullAreaLabel: fullAreaLabel || shortAreaName,
    titleHook,
    subHook,
    topSearchKeywords,
    spotNames,
    budgetLabel,
  };
}

export function buildRouteSeoMetadata(
  rally: any,
  spotsList: any[],
  walkMetrics: RouteWalkMetrics
): Metadata {
  const siteUrl = getSiteUrl();
  const info = extractRouteAreaInfo(rally, spotsList);
  const mins = walkMetrics.estimatedMinutes;
  const distKm = walkMetrics.distanceKm.toFixed(1);
  const spotCount = walkMetrics.spotCount || spotsList.length;

  const shortPref = info.prefecture ? info.prefecture.replace(/[都府県]$/, "") : "";
  const cleanCityDisplay = info.cityName
    ? stripCountyPrefix(info.cityName)
    : "";
  const wardMatch = cleanCityDisplay.match(/^(.+?)市([^\d\s]+?)区$/);
  const cityMatchTokens = wardMatch
    ? [wardMatch[1], wardMatch[2], cleanCityDisplay].filter(
        (t) => Boolean(t) && t.length >= 2
      )
    : [cleanCityDisplay.replace(/[市区町村]$/, ""), cleanCityDisplay].filter(
        (t) => Boolean(t) && t.length >= 2
      );
  const titleHasRegion =
    Boolean(shortPref && info.titleHook.includes(shortPref)) ||
    cityMatchTokens.some((tok) => info.titleHook.includes(tok));
  const regionHint =
    !titleHasRegion && (shortPref || cleanCityDisplay)
      ? [
          shortPref,
          cleanCityDisplay && cleanCityDisplay !== info.prefecture
            ? cleanCityDisplay
            : null,
        ]
          .filter(Boolean)
          .join("・")
      : "";
  const compactTitleHook = info.titleHook.replace(
    /街歩き・散歩散策コース$/,
    "街歩き・散歩コース"
  );
  const routeHeadline = regionHint
    ? `${compactTitleHook}（${regionHint}）`
    : compactTitleHook;
  const seoTitle = `${routeHeadline}｜${rally.title}（徒歩約${mins}分・${info.subHook}）`;

  const spotsPreview =
    info.spotNames.length > 0
      ? `${info.spotNames.slice(0, 3).join("・")}${info.spotNames.length > 3 ? "など" : ""}`
      : "";

  const compactLoc =
    [
      info.prefecture,
      cleanCityDisplay && cleanCityDisplay !== info.prefecture
        ? cleanCityDisplay
        : null,
      info.shortAreaName &&
      info.shortAreaName !== info.prefecture &&
      (!cleanCityDisplay || !cleanCityDisplay.includes(info.shortAreaName))
        ? info.shortAreaName
        : null,
    ]
      .filter(Boolean)
      .join("・") || info.fullAreaLabel;

  const rawDesc = typeof rally?.description === "string" ? rally.description.trim() : "";
  const descExcerpt = rawDesc.length > 80 ? `${rawDesc.slice(0, 80)}…` : rawDesc;

  const seoDescription = `【${compactLoc}】徒歩約${mins}分（約${distKm}km・全${spotCount}箇所）で巡る「${rally.title}」。${
    spotsPreview ? `立ち寄り先：${spotsPreview}。` : ""
  }${descExcerpt}`;

  const keywordSet = new Set<string>([
    ...info.topSearchKeywords,
    `${info.areaName} デート`,
    `${info.areaName} 散歩`,
    `${info.areaName} カフェ`,
    `${info.areaName} お出かけ`,
    `${info.areaName} 休日`,
    `${info.areaName} 街歩き`,
    `${info.areaName} 散策ルート`,
    "街歩き 散歩コース",
    ...(info.cityName
      ? [
          `${info.cityName} 散策`,
          `${info.cityName} 街歩き`,
          `${info.cityName} デート`,
          `${info.cityName} 散歩コース`,
        ]
      : []),
    ...(info.line
      ? [
          `${info.line} 街歩き`,
          `${info.line} 散策`,
          `${info.line} 散歩`,
          `${info.line} 沿線散歩`,
          `SHUIN ${info.line}`,
        ]
      : []),
    ...info.spotNames.slice(0, 5),
    "SHUIN",
    "まちのしるし",
  ]);

  const canonicalUrl = `${siteUrl}/routes/${rally.id}`;
  const dynamicOgUrl = `${canonicalUrl}/opengraph-image`;
  const ogImageUrl = rally?.thumbnail_url
    ? rally.thumbnail_url.startsWith("http")
      ? rally.thumbnail_url
      : `${siteUrl}${rally.thumbnail_url}`
    : `${siteUrl}/shuin-logo-horizontal.png`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: Array.from(keywordSet),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${seoTitle} | SHUIN｜知っている街の、知らない散歩道`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "SHUIN｜知っている街の、知らない散歩道",
      locale: "ja_JP",
      type: "article",
      images: [
        {
          url: dynamicOgUrl,
          width: 1200,
          height: 630,
          alt: `${info.titleHook}「${rally.title}」`,
        },
        {
          url: ogImageUrl,
          alt: `${info.titleHook}「${rally.title}」`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | SHUIN｜知っている街の、知らない散歩道`,
      description: seoDescription,
      images: [dynamicOgUrl],
    },
  };
}

export function buildRouteJsonLd(
  rally: any,
  spotsList: any[],
  walkMetrics: RouteWalkMetrics
) {
  const siteUrl = getSiteUrl();
  const info = extractRouteAreaInfo(rally, spotsList);
  const canonicalUrl = `${siteUrl}/routes/${rally.id}`;
  const mins = walkMetrics.estimatedMinutes;
  const distKm = walkMetrics.distanceKm.toFixed(1);
  const spotCount = walkMetrics.spotCount || spotsList.length;

  const ogImageUrl = rally?.thumbnail_url
    ? rally.thumbnail_url.startsWith("http")
      ? rally.thumbnail_url
      : `${siteUrl}${rally.thumbnail_url}`
    : `${siteUrl}/shuin-logo-horizontal.png`;

  const touristTrip = {
    "@type": "TouristTrip",
    "@id": `${canonicalUrl}#trip`,
    name: `${info.titleHook}：${rally.title}`,
    description: rally.description,
    url: canonicalUrl,
    image: ogImageUrl,
    touristType: info.topSearchKeywords.slice(0, 5),
    keywords: Array.from(
      new Set([
        ...info.topSearchKeywords.slice(0, 8),
        `${info.areaName} デート`,
        `${info.areaName} 散歩`,
        `${info.areaName} 街歩き`,
        `${info.areaName} 散策ルート`,
      ])
    ).join(", "),
    itinerary: {
      "@type": "ItemList",
      numberOfItems: spotsList.length,
      itemListElement: spotsList.map((spot: any, idx: number) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristAttraction",
          name: spot.name,
          description: spot.description || `${info.areaName}の立ち寄りスポット`,
          address: spot.address || info.fullAreaLabel,
          ...(typeof spot.lat === "number" && typeof spot.lng === "number"
            ? {
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: spot.lat,
                  longitude: spot.lng,
                },
              }
            : {}),
        },
      })),
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SHUIN まちのしるし",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "街歩きルート一覧",
        item: `${siteUrl}/routes`,
      },
      ...(info.prefecture
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: `${info.prefecture}の街歩き・散歩ルート`,
              item: `${siteUrl}/areas/${encodeURIComponent(info.prefecture)}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: `${info.areaName}：${rally.title}`,
              item: canonicalUrl,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: `${info.areaName}：${rally.title}`,
              item: canonicalUrl,
            },
          ]),
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${info.titleHook}「${rally.title}」の所要時間と歩行距離は？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${info.areaName}（${info.fullAreaLabel}）を徒歩でめぐるこのルートは、全${spotCount}箇所・歩行距離約${distKm}kmで、所要時間は約${mins}分が目安です。車なしで気軽に巡る半日散歩や街歩きコース、ひとり散歩や休日のお出かけコースとしても楽しめます。`,
        },
      },
      {
        "@type": "Question",
        name: `この${info.areaName}ルートではどんなスポット・立ち寄り先をめぐりますか？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${info.spotNames.join(" → ")}の順に全${spotCount}箇所を訪れます。グルメ・カフェや買い物の立ち寄りを含めた予算目安は「${info.budgetLabel}」です。`,
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [touristTrip, breadcrumb, faqPage],
  };
}

export function extractPrefectureHubSeoInfo(
  prefecture: string,
  routesList: any[]
): PrefectureKeywordEntry {
  const cached = byPrefectureMap[prefecture];
  const region = PREFECTURE_REGION_MAP[prefecture] || cached?.region || "全国";

  const areaSet = new Set<string>(cached?.areaNames || []);
  const citySet = new Set<string>(cached?.cities || []);
  const categorySet = new Set<string>(cached?.categories || []);
  const spotNames: string[] = [...(cached?.featuredSpots || [])];
  let liveSpotCount = 0;

  for (const r of routesList || []) {
    const spots = Array.isArray(r.spots) ? r.spots : [];
    liveSpotCount += spots.length;
    const info = extractRouteAreaInfo(r, spots);
    if (info.areaName && info.areaName !== prefecture) {
      areaSet.add(info.areaName);
    }
    if (info.cityName) {
      citySet.add(info.cityName);
    }
    if (r.category) {
      categorySet.add(r.category);
    }
    for (const s of spots) {
      if (s?.name && spotNames.length < 16 && !spotNames.includes(s.name)) {
        spotNames.push(s.name);
      }
    }
  }

  const routeCount = routesList.length || cached?.routeCount || 0;
  const spotCount = liveSpotCount || cached?.spotCount || routeCount * 5;
  const maturityTier: "rich" | "growing" | "empty" =
    routeCount >= 3 ? "rich" : routeCount >= 1 ? "growing" : "empty";

  const areaNames = Array.from(areaSet);
  const shortPref = prefecture.replace(/[都府県]$/, "");
  const titleHook =
    cached?.titleHook || `${prefecture}の街歩き・散歩散策コース`;
  const subHook = cached?.subHook || "徒歩マップ・所要時間";

  const shortAreas = Array.from(
    new Set(areaNames.map((a) => formatShortAreaLabel(a)).filter(Boolean))
  );
  const areaPreview =
    shortAreas.length > 0
      ? `${shortAreas.slice(0, 4).join("・")}${shortAreas.length > 4 ? "など" : ""}`
      : prefecture;
  const spotPreview =
    spotNames.length > 0
      ? spotNames.slice(0, 3).join("、")
      : "";

  const leadSummary =
    routeCount >= 3
      ? `車なし・徒歩で半日から巡れる${prefecture}の街歩き・散歩ルート全${routeCount}コース（徒歩マップ・所要時間付き）。${areaPreview}を中心に${spotPreview ? `${spotPreview}など` : ""}計${spotCount}箇所を訪ね、土地の物語としるしを辿れます。`
      : routeCount >= 1
        ? `${prefecture}では現在、${areaPreview}をめぐる街歩きルート（全${routeCount}ルート・${spotCount}箇所のスポット）を公開中です。${spotPreview ? `${spotPreview}など、` : ""}ガイドブックだけでは見えない街の物語を徒歩で辿りながら、訪れた場所のしるし（SHUIN）を刻むことができます。順次${prefecture}内の新たな駅・エリアのルートも拡充しています。`
        : `${prefecture}エリアの街歩きルートは現在準備・拡充中です。近隣の${region}エリアで公開中のルートから気になる街を探してみてください。`;

  const topSearchKeywords =
    cached?.topSearchKeywords && cached.topSearchKeywords.length > 0
      ? cached.topSearchKeywords
      : [
          `${prefecture} 散歩コース`,
          `${shortPref} 街歩き`,
          `${shortPref} 散策コース`,
          `${shortPref} ひとり散歩 電車`,
          ...areaNames.slice(0, 6).map((a) => `${a} 街歩き`),
        ];

  return {
    prefecture,
    region,
    routeCount,
    spotCount,
    maturityTier,
    areaNames,
    cities: Array.from(citySet),
    lines: cached?.lines || [],
    categories: Array.from(categorySet),
    featuredSpots: spotNames.slice(0, 12),
    titleHook,
    subHook,
    leadSummary,
    topSearchKeywords,
  };
}

export function buildPrefectureHubSeoMetadata(
  prefecture: string,
  routesList: any[]
): Metadata {
  const siteUrl = getSiteUrl();
  const hubInfo = extractPrefectureHubSeoInfo(prefecture, routesList);
  const canonicalUrl = `${siteUrl}/areas/${encodeURIComponent(prefecture)}`;

  const shortAreas = Array.from(
    new Set(
      hubInfo.areaNames.map((a) => formatShortAreaLabel(a)).filter(Boolean)
    )
  );
  const areaPreview =
    shortAreas.length > 0
      ? `${shortAreas.slice(0, 3).join("・")}${shortAreas.length > 3 ? "など" : ""}`
      : "";

  const compactPrefTitleHook = hubInfo.titleHook.replace(
    /街歩き・散歩散策コース$/,
    "街歩き・散歩コース"
  );
  const hasCarFreeInTitle = /車なし|徒歩/.test(compactPrefTitleHook);
  const countBadge =
    hubInfo.routeCount > 0
      ? hasCarFreeInTitle
        ? `全${hubInfo.routeCount}選`
        : `車なし徒歩${hubInfo.routeCount}選`
      : hubInfo.subHook;
  const metaTail = areaPreview ? `${areaPreview} ${countBadge}` : countBadge;
  const seoTitle = `${compactPrefTitleHook}｜${metaTail}`;
  const seoDescription = hubInfo.leadSummary;

  const firstThumb = routesList.find((r) => r?.thumbnail_url)?.thumbnail_url;
  const ogImageUrl = firstThumb
    ? firstThumb.startsWith("http")
      ? firstThumb
      : `${siteUrl}${firstThumb}`
    : `${siteUrl}/shuin-logo-horizontal.png`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      ...hubInfo.topSearchKeywords,
      `${prefecture} デート`,
      `${prefecture.replace(/[都府県]$/, "")} 散歩`,
      `${prefecture} 街歩き`,
      `${prefecture.replace(/[都府県]$/, "")} 散策`,
      `${prefecture} 車なし 散歩`,
      ...hubInfo.featuredSpots.slice(0, 6),
      "SHUIN",
      "まちのしるし",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${seoTitle} | SHUIN｜知っている街の、知らない散歩道`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "SHUIN｜知っている街の、知らない散歩道",
      locale: "ja_JP",
      type: "website",
      images: [{ url: ogImageUrl, alt: seoTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | SHUIN｜知っている街の、知らない散歩道`,
      description: seoDescription,
      images: [ogImageUrl],
    },
  };
}

export function buildPrefectureHubJsonLd(
  prefecture: string,
  routesList: any[]
) {
  const siteUrl = getSiteUrl();
  const hubInfo = extractPrefectureHubSeoInfo(prefecture, routesList);
  const canonicalUrl = `${siteUrl}/areas/${encodeURIComponent(prefecture)}`;

  const collectionPage = {
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#collection`,
    name: `${hubInfo.titleHook}一覧`,
    description: hubInfo.leadSummary,
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: routesList.length,
      itemListElement: routesList.map((r: any, idx: number) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${siteUrl}/routes/${r.id}`,
        name: r.title,
        description: r.description,
      })),
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SHUIN まちのしるし",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "全国エリア別ルート一覧",
        item: `${siteUrl}/areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${prefecture}の街歩き・散歩ルート`,
        item: canonicalUrl,
      },
    ],
  };

  const shortAreas = Array.from(
    new Set(
      hubInfo.areaNames.map((a) => formatShortAreaLabel(a)).filter(Boolean)
    )
  );
  const faqPage = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${prefecture}で車なし（電車・徒歩）で巡れる街歩き・散歩コースはありますか？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: hubInfo.leadSummary,
        },
      },
      {
        "@type": "Question",
        name: `${prefecture}のルートではどのエリアやスポットをめぐることができますか？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${shortAreas.length > 0 ? `${shortAreas.join("・")}の各駅・街エリアを中心に、` : ""}${hubInfo.featuredSpots.length > 0 ? `${hubInfo.featuredSpots.slice(0, 8).join("、")}など` : ""}計${hubInfo.spotCount}箇所のスポットを一筆書きの徒歩ルートで巡ることができます。`,
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [collectionPage, breadcrumb, faqPage],
  };
}

function resolveSpotTitleAngle(spotName: string, actualSpotDesc: string): string {
  if (/駅(?:[（(][^）)]*[）)])?$/.test(spotName.trim())) {
    return "周辺の見どころ・徒歩マップ";
  }
  const isDiningOrFoodShop =
    /(?:カフェ|喫茶|cafe|restaurant|レストラン|食堂|茶屋|菓舗|菓子|パン|ベーカリー|ラーメン|そば|蕎麦|うどん|鮨|寿司|酒造|ブルワリー|朝市|市場|洋食|甘味|和菓子)/i.test(
      spotName
    ) ||
    /(?:ランチ|モーニング|名物|味わえる)/.test(actualSpotDesc);
  const isFacilityOrCraftShop =
    /(?:複合施設|ファクトリーショップ|美術館|博物館|資料館|ギャラリー|工房|案内所)/.test(
      `${spotName} ${actualSpotDesc}`
    );
  if (isDiningOrFoodShop && !isFacilityOrCraftShop) {
    if (/(?:\d{1,2}:\d{2}|営業)/.test(actualSpotDesc)) {
      return "営業時間・名物・アクセス";
    }
    if (/定休/.test(actualSpotDesc)) {
      return "定休日・名物・アクセス";
    }
    return "名物・アクセス";
  }
  if (/(?:\d{1,2}:\d{2}|営業)/.test(actualSpotDesc)) {
    return "営業時間・見どころ・アクセス";
  }
  if (/定休/.test(actualSpotDesc)) {
    return "定休日・見どころ・アクセス";
  }
  return "見どころ・アクセス";
}

const SPOT_SEARCH_READING_ALIASES: Record<string, string> = {
  "fudan cafe": "フダンカフェ",
  "b-speak": "ビースピーク",
};

function resolveSpotReadingAlias(spotName: string): string | null {
  const normalized = spotName.trim().toLowerCase();
  const alias = SPOT_SEARCH_READING_ALIASES[normalized];
  if (!alias || spotName.includes(alias)) return null;
  return alias;
}

export function buildSpotSeoMetadata(
  rally: any,
  spot: any,
  spotsList: any[],
  walkMetrics: RouteWalkMetrics
): Metadata {
  const siteUrl = getSiteUrl();
  const areaInfo = extractRouteAreaInfo(rally, spotsList);
  const spotOrder =
    spotsList.findIndex((s) => s.id === spot.id) + 1 ||
    spot.order_index ||
    1;
  const canonicalUrl = `${siteUrl}/routes/${rally.id}/spot/${spot.id}`;

  const spotName = typeof spot?.name === "string" ? spot.name : "";
  const spotReadingAlias = resolveSpotReadingAlias(spotName);
  const rallyTitle = typeof rally?.title === "string" ? rally.title : "";

  const shortPref = areaInfo.prefecture
    ? areaInfo.prefecture.replace(/[都府県]$/, "")
    : "";
  const cleanSpotCity = areaInfo.cityName
    ? stripCountyPrefix(areaInfo.cityName)
    : "";
  const cityCore = cleanSpotCity
    ? cleanSpotCity.replace(/[市区町村]$/, "")
    : "";
  const preferCityOverLongArea =
    Boolean(cleanSpotCity) &&
    areaInfo.shortAreaName.length > 7 &&
    !spotName.includes(areaInfo.shortAreaName) &&
    !/(?:空港|温泉|港|駅|宿|海岸|公園|大社|神社|城下町?)$/.test(
      areaInfo.shortAreaName
    );
  const resolvedSpotArea = preferCityOverLongArea
    ? cleanSpotCity
    : areaInfo.shortAreaName;
  const areaCore = resolvedSpotArea
    ? resolvedSpotArea.replace(/(?:駅|前|口|[市区町村])$/, "")
    : "";
  const spotOverlapsArea =
    Boolean(resolvedSpotArea && spotName.includes(resolvedSpotArea)) ||
    Boolean(areaCore.length >= 2 && spotName.includes(areaCore));

  let spotRegionTag = "";
  if (spotOverlapsArea) {
    if (cleanSpotCity && !spotName.includes(cleanSpotCity)) {
      spotRegionTag =
        shortPref && !cleanSpotCity.includes(shortPref)
          ? `${shortPref}・${cleanSpotCity}`
          : cleanSpotCity;
    } else {
      spotRegionTag = areaInfo.prefecture || cleanSpotCity || "";
    }
  } else if (resolvedSpotArea) {
    spotRegionTag =
      shortPref &&
      resolvedSpotArea !== areaInfo.prefecture &&
      !resolvedSpotArea.includes(shortPref)
        ? `${shortPref}・${resolvedSpotArea}`
        : resolvedSpotArea;
  } else {
    spotRegionTag = areaInfo.prefecture || "";
  }

  const actualSpotDesc =
    typeof spot?.description === "string" ? spot.description.trim() : "";
  const rawSpotDesc =
    actualSpotDesc ||
    `${areaInfo.fullAreaLabel}の街歩きルート「${rallyTitle}」第${spotOrder}スポット。`;
  const spotAngle = resolveSpotTitleAngle(spotName, actualSpotDesc);
  const spotHasParen = /[（(].*[)）]/.test(spotName);
  const titleParenContent = [spotReadingAlias, spotRegionTag]
    .filter(Boolean)
    .join("／");
  const seoTitle = titleParenContent
    ? spotHasParen
      ? `${spotName}｜${titleParenContent} ${spotAngle}｜${rallyTitle}`
      : `${spotName}（${titleParenContent}）｜${spotAngle}｜${rallyTitle}`
    : `${spotName}｜${spotAngle}｜${rallyTitle}`;
  const descExcerpt =
    rawSpotDesc.length > 105 ? `${rawSpotDesc.slice(0, 105)}…` : rawSpotDesc;

  const locParts = [shortPref || areaInfo.prefecture].filter(Boolean);
  const locSecondary = spotOverlapsArea
    ? cleanSpotCity && !spotName.includes(cleanSpotCity)
      ? cleanSpotCity
      : ""
    : resolvedSpotArea;
  if (
    locSecondary &&
    locSecondary !== areaInfo.prefecture &&
    locSecondary !== shortPref
  ) {
    locParts.push(locSecondary);
  }
  const spotCompactLoc = locParts.join("・") || areaInfo.fullAreaLabel;

  const compactAddress =
    spot?.address && areaInfo.prefecture && spot.address.startsWith(areaInfo.prefecture)
      ? spot.address.slice(areaInfo.prefecture.length).trim()
      : spot?.address;

  const seoDescription = `【${spotCompactLoc}】${descExcerpt}${compactAddress ? `（${compactAddress}）` : ""}｜徒歩約${walkMetrics.estimatedMinutes}分で巡る「${rallyTitle}」の立ち寄り先。`;

  const imgRaw = spot?.image_url || spot?.cover_image_url || rally?.thumbnail_url;
  const ogImageUrl = imgRaw
    ? imgRaw.startsWith("http")
      ? imgRaw
      : `${siteUrl}${imgRaw}`
    : `${siteUrl}/shuin-logo-horizontal.png`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      spot.name,
      ...(spotReadingAlias ? [spotReadingAlias] : []),
      `${spot.name} 見どころ`,
      `${spot.name} 歴史`,
      `${spot.name} アクセス`,
      `${spot.name} デート`,
      `${spot.name} 散歩`,
      `${spot.name} 街歩き`,
      areaInfo.areaName,
      `${areaInfo.areaName} デート`,
      `${areaInfo.areaName} 散策`,
      ...areaInfo.topSearchKeywords.slice(0, 5),
      "SHUIN",
      "まちのしるし",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${seoTitle} | SHUIN｜知っている街の、知らない散歩道`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "SHUIN｜知っている街の、知らない散歩道",
      locale: "ja_JP",
      type: "article",
      images: [{ url: ogImageUrl, alt: `${spot.name}（${areaInfo.areaName}）` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | SHUIN｜知っている街の、知らない散歩道`,
      description: seoDescription,
      images: [ogImageUrl],
    },
  };
}

export function buildSpotJsonLd(
  rally: any,
  spot: any,
  spotsList: any[]
) {
  const siteUrl = getSiteUrl();
  const areaInfo = extractRouteAreaInfo(rally, spotsList);
  const canonicalUrl = `${siteUrl}/routes/${rally.id}/spot/${spot.id}`;
  const routeUrl = `${siteUrl}/routes/${rally.id}`;

  const attraction = {
    "@type": "TouristAttraction",
    "@id": `${canonicalUrl}#attraction`,
    name: spot.name,
    description: spot.description || `${areaInfo.areaName}の立ち寄りスポット`,
    url: canonicalUrl,
    address: spot.address || areaInfo.fullAreaLabel,
    isPartOf: {
      "@type": "TouristTrip",
      name: rally.title,
      url: routeUrl,
    },
    ...(typeof spot.lat === "number" && typeof spot.lng === "number"
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: spot.lat,
            longitude: spot.lng,
          },
        }
      : {}),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SHUIN まちのしるし",
        item: siteUrl,
      },
      ...(areaInfo.prefecture
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: `${areaInfo.prefecture}の街歩き・散歩ルート`,
              item: `${siteUrl}/areas/${encodeURIComponent(areaInfo.prefecture)}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${areaInfo.areaName}：${rally.title}`,
              item: routeUrl,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: spot.name,
              item: canonicalUrl,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: `${areaInfo.areaName}：${rally.title}`,
              item: routeUrl,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: spot.name,
              item: canonicalUrl,
            },
          ]),
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [attraction, breadcrumb],
  };
}
