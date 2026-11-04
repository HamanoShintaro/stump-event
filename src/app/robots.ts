import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/utils/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const publicPaths = ["/", "/routes", "/guide", "/map", "/llms.txt", "/llms-full.txt"];
  const privatePaths = ["/api/", "/mypage/", "/settings/", "/login/", "/notifications/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: publicPaths,
        disallow: privatePaths,
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: publicPaths,
        disallow: privatePaths,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
