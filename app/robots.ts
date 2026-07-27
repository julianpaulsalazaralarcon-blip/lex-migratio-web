import type { MetadataRoute } from "next";

// TODO: reemplazar por el dominio real cuando esté disponible (debe coincidir con SITE_URL en app/layout.tsx).
const SITE_URL = "https://www.lexmigratio.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
