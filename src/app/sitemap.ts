import type { MetadataRoute } from "next";
import { productsData } from "@/data/products";
import { SITE_URL } from "@/data/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "products", priority: 0.9, changeFrequency: "weekly" },
    { path: "clients", priority: 0.8, changeFrequency: "monthly" },
    { path: "careers", priority: 0.7, changeFrequency: "monthly" },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  // Add categories
  for (const cat of productsData) {
    routes.push({
      path: `products/${cat.id}`,
      priority: 0.85,
      changeFrequency: "weekly",
    });

    // Add subproducts
    if (cat.subProducts) {
      for (const sub of cat.subProducts) {
        routes.push({
          path: `products/${cat.id}/${sub.id}`,
          priority: 0.8,
          changeFrequency: "weekly",
        });
      }
    }
  }

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const cleanPath = route.path ? `${route.path}/` : "";
    const arUrl = `${SITE_URL}/ar/${cleanPath}`;
    const enUrl = `${SITE_URL}/en/${cleanPath}`;

    sitemapEntries.push({
      url: arUrl,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ar: arUrl,
          en: enUrl,
        },
      },
    });

    sitemapEntries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ar: arUrl,
          en: enUrl,
        },
      },
    });
  }

  return sitemapEntries;
}
