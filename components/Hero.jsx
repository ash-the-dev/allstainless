import HomeHeroGallery from "./HomeHeroGallery";
import TrackableLink from "./TrackableLink";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroShell">
          <div className="heroInner heroInnerStacked">
            <div className="heroCopy">
              <p className="heroKicker">
                Stainless installations for commercial kitchens
              </p>

              <h1 className="heroTitleLockup">
                Precision Fabrication, Welding, and Installation for{" "}
                <span className="heroTitleEm">commercial kitchens</span>.
              </h1>

              <p className="heroText">
                From stainless steel installations and commercial kitchen hoods to
                walk-in coolers and freezers, we handle the full scope of the line:
                buyout equipment including griddles, ovens, fryers, hand sinks, and
                dishwashers, plus welded stainless steel countertops fabricated for a
                seamless, continuous finish. Clean work, dependable execution, sharp
                details, and field-ready installation built to last.
              </p>

              <div className="heroInlineVideo">
                <div className="heroInlineVideoFit">
                  <video
                    className="heroInlineVideoEl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Commercial kitchen stainless fabrication and installation"
                  >
                    <source src="/Video1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <p className="heroVideoCaption">
                Fabrication, fit-up, and install in motion—equipment set, lines tied in, and
                stainless readied for the pace of a working kitchen.
              </p>

              <HomeHeroGallery />

              <div className="heroActions">
                <TrackableLink
                  href="#contact"
                  className="btn btnPrimary"
                  trackEvent="contact_click"
                  trackSource="hero_request_quote"
                  category="conversion"
                  isConversion
                >
                  Request a quote
                </TrackableLink>
                <TrackableLink
                  href="#projects"
                  className="btn btnGhost"
                  trackEvent="projects_click"
                  trackSource="hero_view_projects"
                  category="engagement"
                >
                  View projects
                </TrackableLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
