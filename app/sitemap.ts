import type { MetadataRoute } from "next";

import { landings } from "@/lib/landings";

// TODO: reemplazar por el dominio real cuando esté disponible (debe coincidir con SITE_URL en app/layout.tsx).
const SITE_URL = "https://www.lexmigratio.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...Object.values(landings).map((content) => ({
      url: `${SITE_URL}/${content.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
