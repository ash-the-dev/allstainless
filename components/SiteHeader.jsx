import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";

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
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
