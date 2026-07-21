import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${process.env.SITE_URL}`,
    },
    {
      url: `${process.env.SITE_URL}/politica-de-privacidade`,
    },
  ];

  return sitemap;
}
