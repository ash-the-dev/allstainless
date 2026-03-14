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
            <Link href="#services">Services</Link>
            <Link href="#capabilities">Capabilities</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
