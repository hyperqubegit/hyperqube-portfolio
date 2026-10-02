import type { MetadataRoute } from "next";
import { SEO } from "@/lib/seo-config";

/**
 * Next.js auto-generates /robots.txt from this file.
 * Tells search engines to crawl everything and where the sitemap is.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SEO.siteUrl}/sitemap.xml`,
  };
}
