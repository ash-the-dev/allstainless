import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroBackdrop" aria-hidden="true" />

      <div className="container">
        <div className="heroShell">
          <div className="heroInner">
            <div className="heroCopy">
              <p className="heroKicker">Commercial Stainless Installations</p>

              <h1>
                Precision Fabrication, Welding, and Installation for Commercial
                Environments.
              </h1>

              <p className="heroText">
                Clean stainless work with dependable execution, sharp finishes,
                and field-ready installation built to last.
              </p>

              <div className="heroActions">
                <Link href="#contact" className="btn btnPrimary">
                  Request a quote
                </Link>
                <Link href="#projects" className="btn btnGhost">
                  View projects
                </Link>
              </div>
            </div>

            <div className="heroVisual">
              <div className="heroImageFrame">
                <Image
                  src="/image-5.jpg"
                  alt="Commercial Stainless Installation"
                  width={1400}
                  height={1000}
                  priority
                  className="heroImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
