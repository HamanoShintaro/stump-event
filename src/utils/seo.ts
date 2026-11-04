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

const byRouteIdMap = (seoAreaKeywordsData?.byRouteId || {}) as Record<
  string,
  AreaKeywordEntry
>;
const byAreaNameMap = (seoAreaKeywordsData?.byAreaName || {}) as Record<
  string,
  AreaKeywordEntry
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
    const cleanCity = cityName
      .replace(/^.+?郡/, "")
      .replace(/[市区町村]$/, "")
      .trim();
    if (cleanCity.length >= 2) {
      return cleanCity;
    }
  }

  return null;
}

export interface RouteAreaSeoInfo {
  areaName: string;
  cityName: string | null;
  prefecture: string;
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
  const prefecture = (rally?.prefecture || "").trim();

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
    (cityName ? cityName.replace(/^.+?郡/, "").replace(/[市区町村]$/, "") : "") ||
    prefecture ||
    "街歩き";

  const matchedEntry = matchedByRoute || byAreaNameMap[areaName];

  const resolvedCity = cityName || matchedEntry?.city || null;
  const fullAreaLabel = [
    prefecture,
    resolvedCity && resolvedCity !== areaName ? resolvedCity : null,
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
    matchedEntry?.titleHook || `${areaName}の観光・街歩きモデルコース`;
  const subHook = matchedEntry?.subHook || "徒歩マップ・所要時間";
  const topSearchKeywords =
    matchedEntry?.topSearchKeywords && matchedEntry.topSearchKeywords.length > 0
      ? matchedEntry.topSearchKeywords
      : [
          `${areaName} 観光 モデルコース`,
          `${areaName} 街歩き`,
          `${areaName} 散歩コース`,
          `${areaName} 観光 所要時間`,
          `${areaName} おすすめスポット`,
        ];

  return {
    areaName,
    cityName: resolvedCity,
    prefecture,
    fullAreaLabel: fullAreaLabel || areaName,
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

  const seoTitle = `${info.titleHook}｜${rally.title}（徒歩約${mins}分・${info.subHook}）`;

  const spotsPreview =
    info.spotNames.length > 0
      ? `${info.spotNames.slice(0, 3).join("・")}${info.spotNames.length > 3 ? "など" : ""}`
      : "";

  const rawDesc = typeof rally?.description === "string" ? rally.description.trim() : "";
  const descExcerpt = rawDesc.length > 90 ? `${rawDesc.slice(0, 90)}…` : rawDesc;

  const seoDescription = `【${info.fullAreaLabel}・${info.titleHook}】${
    spotsPreview ? `${spotsPreview}の全${spotCount}箇所を` : `全${spotCount}箇所を`
  }徒歩約${mins}分（約${distKm}km・予算目安${info.budgetLabel}）でめぐる物語「${rally.title}」。${descExcerpt}`;

  const keywordSet = new Set<string>([
    ...info.topSearchKeywords,
    ...(info.cityName
      ? [`${info.cityName} 観光`, `${info.cityName} 街歩き`]
      : []),
    ...info.spotNames.slice(0, 5),
    "SHUIN",
    "まちのしるし",
  ]);

  const canonicalUrl = `${siteUrl}/routes/${rally.id}`;
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
      title: `${seoTitle} | SHUIN まちのしるし`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "SHUIN まちのしるし",
      locale: "ja_JP",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          alt: `${info.titleHook}「${rally.title}」`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | SHUIN まちのしるし`,
      description: seoDescription,
      images: [ogImageUrl],
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
              name: `${info.prefecture}の観光・街歩きルート`,
              item: `${siteUrl}/routes?prefecture=${encodeURIComponent(info.prefecture)}`,
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
          text: `${info.areaName}（${info.fullAreaLabel}）を徒歩でめぐるこのルートは、全${spotCount}箇所・歩行距離約${distKm}kmで、所要時間は約${mins}分が目安です。車なしで気軽に巡る半日観光や街歩きコースとして楽しめます。`,
        },
      },
      {
        "@type": "Question",
        name: `この${info.areaName}ルートではどんな観光スポット・立ち寄り先をめぐりますか？`,
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
