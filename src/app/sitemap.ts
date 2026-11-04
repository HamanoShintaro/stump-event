import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";
import { getSiteUrl } from "@/utils/seo";

export const revalidate = 3600; // 1時間ごとに再検証

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/routes`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/areas`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/map`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/llms-full.txt`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  try {
    const PAGE_SIZE = 1000;
    const routesList: {
      id: string;
      created_at?: string;
      prefecture?: string;
      spots?: { id: string }[];
    }[] = [];
    let offset = 0;

    while (true) {
      const { data, error } = await supabase
        .from("routes")
        .select("id, created_at, prefecture, spots(id)")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .range(offset, offset + PAGE_SIZE - 1);

      if (error || !data || data.length === 0) break;
      routesList.push(...(data as any[]));
      if (data.length < PAGE_SIZE) break;
      offset += PAGE_SIZE;
    }

    const prefStats = new Map<string, { count: number; latestDate: Date }>();
    const spotEntries: MetadataRoute.Sitemap = [];

    for (const route of routesList) {
      const routeDate = route.created_at ? new Date(route.created_at) : now;
      const pref = (route.prefecture || "").trim();
      if (pref) {
        const existing = prefStats.get(pref);
        if (!existing) {
          prefStats.set(pref, { count: 1, latestDate: routeDate });
        } else {
          existing.count += 1;
          if (routeDate > existing.latestDate) {
            existing.latestDate = routeDate;
          }
        }
      }

      if (Array.isArray(route.spots)) {
        for (const spot of route.spots) {
          if (spot?.id) {
            spotEntries.push({
              url: `${siteUrl}/routes/${route.id}/spot/${spot.id}`,
              lastModified: routeDate,
              changeFrequency: "weekly",
              priority: 0.72,
            });
          }
        }
      }
    }

    const prefectureEntries: MetadataRoute.Sitemap = Array.from(
      prefStats.entries()
    ).map(([pref, stat]) => ({
      url: `${siteUrl}/areas/${encodeURIComponent(pref)}`,
      lastModified: stat.latestDate,
      changeFrequency: "daily",
      // ルート数3件以上の充実エリアは高優先度、1〜2件の育成中エリアは段階的優先度
      priority: stat.count >= 3 ? 0.88 : 0.76,
    }));

    const routeEntries: MetadataRoute.Sitemap = routesList.map((route) => ({
      url: `${siteUrl}/routes/${route.id}`,
      lastModified: route.created_at ? new Date(route.created_at) : now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

    return [
      ...staticPages,
      ...prefectureEntries,
      ...routeEntries,
      ...spotEntries,
    ];
  } catch (err) {
    console.error("Failed to generate dynamic sitemap:", err);
    return staticPages;
  }
}
