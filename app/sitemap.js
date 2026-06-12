import { site } from "../lib/site";

/** Canonical site origin (matches metadata in layout.js) */
const base = `https://www.${site.domain}`;

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/commercial-kitchens`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
