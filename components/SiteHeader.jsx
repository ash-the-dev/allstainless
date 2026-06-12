import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";
import TrackableLink from "./TrackableLink";

function navTrackProps(href) {
  if (href.includes("contact")) {
    return {
      trackEvent: "contact_click",
      trackSource: "nav_contact",
      category: "conversion",
      isConversion: true,
    };
  }

  const slug = href
    .replace(/^\//, "")
    .replace(/^#/, "")
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_|_$/g, "");

  return {
    trackEvent: "nav_click",
    trackSource: slug ? `nav_${slug}` : "nav_home",
    category: "navigation",
    isConversion: false,
  };
}

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container">
        <div className="headerInner">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <Image
              src="/Logo.webp"
              alt={`${site.name} logo`}
              width={180}
              height={72}
              priority
              className="brandLogo"
            />
          </Link>

          <nav className="siteNav" aria-label="Main navigation">
            {site.nav.map((item) => {
              const track = navTrackProps(item.href);
              return (
                <TrackableLink key={item.href} href={item.href} {...track}>
                  {item.label}
                </TrackableLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
