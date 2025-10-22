import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dev/"],
    },
    sitemap: "https://hiteshshetty.com/sitemap.xml",
  };
}
