export default function sitemap() {
  const base = "https://www.allstainlessinstallations.com";
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: `${base}/commercial-kitchens`, lastModified: now },
  ];
}
