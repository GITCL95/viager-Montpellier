import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/contact", priority: 0.9 },
    { path: "/estimation-viager-montpellier", priority: 0.9 },
    { path: "/vendre-en-viager-montpellier", priority: 0.9 },
    { path: "/acheter-en-viager-montpellier", priority: 0.9 },
    { path: "/vente-a-terme-montpellier", priority: 0.8 },
    { path: "/viager-libre-montpellier", priority: 0.9 },
    { path: "/viager-occupe-montpellier", priority: 0.9 },
    { path: "/viager-herault", priority: 0.8 },
    { path: "/viager-sete", priority: 0.7 },
    { path: "/viager-nimes", priority: 0.7 },
    { path: "/viager-beziers", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
