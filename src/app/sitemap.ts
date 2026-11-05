import type { MetadataRoute } from "next";
import { exploreArticles } from "@/data/explore";
import { roomRouteSlugs } from "@/data/roomRoutes";

const siteUrl = "https://themountainresorts.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1.0 },
    { path: "/rooms", priority: 0.9 },
    { path: "/amenities", priority: 0.7 },
    { path: "/tour", priority: 0.7 },
    { path: "/explore", priority: 0.7 },
    { path: "/gallery", priority: 0.6 },
    { path: "/events", priority: 0.7 },
    { path: "/contact", priority: 0.5 },
  ];

  return [
    ...staticPages.map(({ path, priority }) => ({ url: `${siteUrl}${path}`, priority })),
    ...roomRouteSlugs.map((slug) => ({ url: `${siteUrl}/rooms/${slug}-room`, priority: 0.7 })),
    ...exploreArticles.map((article) => ({ url: `${siteUrl}/explore/${article.id}`, priority: 0.6 })),
  ];
}
