import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { site } from "../lib/site";
import { getWipTrackerScriptSrc, WIP_SITE_KEY } from "../lib/wipTracker";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FloatingContactPill from "../components/FloatingContactPill";

export const metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} | Stainless for Commercial Kitchens — Installation & Welding`,
  description:
    "Stainless steel installation, fabrication, and welding for commercial kitchens and foodservice environments across Oregon and Washington.",
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
    title: `${site.name} | Stainless for Commercial Kitchens — Installation & Welding`,
    description:
      "Stainless steel installation, fabrication, and welding for commercial kitchens and foodservice environments across Oregon and Washington.",
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/Logo.webp",
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${site.name} | Stainless for Commercial Kitchens — Installation & Welding`,
    description:
      "Stainless steel installation, fabrication, and welding for commercial kitchens and foodservice environments across Oregon and Washington.",
    images: ["/Logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const wipTrackerSrc = getWipTrackerScriptSrc();
  const googleTagId = "G-QKC4GQ5N9D";

  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingContactPill />
        <Analytics />
        <Script
          id="wip-tracker"
          async
          src={wipTrackerSrc}
          data-site-key={WIP_SITE_KEY}
          strategy="afterInteractive"
        />
        <Script
          id="google-gtag-src"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
      </body>
    </html>
  );
}