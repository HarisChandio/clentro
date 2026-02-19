// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date("2026-02-08T12:14:03.317Z"); // update per page

  return [
    {
      url: "https://clentro.io/",
      lastModified: lastmod,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://clentro.io/methodology",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://clentro.io/contact",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://clentro.io/blog/custom-mobile-app-development",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://clentro.io/blog/ai-development-services-intelligent-applications",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://clentro.io/blog/saas-development-services-build-ship-fast",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://clentro.io/blog/modern-data-platform-architecture",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://clentro.io/blog/autonomous-ai-agents",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://clentro.io/blog/intelligent-application-development",
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
