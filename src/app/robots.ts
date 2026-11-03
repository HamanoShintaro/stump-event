import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/utils/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/routes", "/guide", "/map"],
        disallow: ["/api/", "/mypage/", "/settings/", "/login/", "/notifications/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
