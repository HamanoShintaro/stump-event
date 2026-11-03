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
  ];

  try {
    const PAGE_SIZE = 1000;
    const routesList: { id: string; created_at?: string; prefecture?: string }[] = [];
    let offset = 0;

    while (true) {
      const { data, error } = await supabase
        .from("routes")
        .select("id, created_at, prefecture")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .range(offset, offset + PAGE_SIZE - 1);

      if (error || !data || data.length === 0) break;
      routesList.push(...data);
      if (data.length < PAGE_SIZE) break;
      offset += PAGE_SIZE;
    }

    const routeEntries: MetadataRoute.Sitemap = routesList.map((route) => ({
      url: `${siteUrl}/routes/${route.id}`,
      lastModified: route.created_at ? new Date(route.created_at) : now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

    return [...staticPages, ...routeEntries];
  } catch (err) {
    console.error("Failed to generate dynamic sitemap:", err);
    return staticPages;
  }
}
