import "./globals.css";
import { site } from "../lib/site";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} | Commercial Stainless Steel Installation & Welding`,
  description:
    "Commercial stainless steel installation, fabrication, and welding for restaurants, commercial kitchens, and industrial environments across Oregon and Washington.",
  keywords: [
    "commercial stainless steel installation",
    "stainless steel welding contractor",
    "stainless steel fabrication",
    "commercial kitchen stainless installation",
    "stainless steel contractor Oregon",
    "stainless steel contractor Washington",
  ],
  icons: {
    icon: "/Logo.webp",
  },
  openGraph: {
    title: `${site.name} | Commercial Stainless Steel Installation & Welding`,
    description:
      "Commercial stainless steel installation, fabrication, and welding for restaurants, commercial kitchens, and industrial environments across Oregon and Washington.",
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}