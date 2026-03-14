// app/layout.js
import "./globals.css";
import { site } from "../lib/site";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: `${site.name} | ${site.tagline}`,
  description:
    "Commercial stainless installations, fabrication, and welding. Precision work, clean finishes, built for commercial environments.",
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Commercial stainless installations, fabrication, and welding. Black-and-white skeleton aesthetic with a bold American backdrop.",
    type: "website",
  },
  robots: { index: true, follow: true },
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