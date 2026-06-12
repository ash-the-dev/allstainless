import { site } from "../lib/site";
import TrackableAnchor from "./TrackableAnchor";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerInner">
          <div className="footerBrand">
            <div className="footerTitle">{site.name}</div>
            <p className="footerText">
                All Stainless Installations provides stainless steel installation,
                fabrication, and welding for commercial kitchens across Oregon and
                Washington including:

                Portland,
                Salem,
                Eugene,
                Bend,
                Vancouver,
                Seattle,
                Tacoma,
                Spokane & Surrounding Areas.
            </p>
          </div>

          <div className="footerContact">
            <TrackableAnchor
              href="mailto:allstainls@gmail.com"
              trackEvent="contact_click"
              trackSource="footer_email"
              category="conversion"
              isConversion
            >
              allstainls@gmail.com
            </TrackableAnchor>
            <TrackableAnchor
              href="tel:13607729079"
              trackEvent="contact_click"
              trackSource="footer_phone"
              category="conversion"
              isConversion
            >
              (360) 772-9079
            </TrackableAnchor>
          </div>
        </div>

        <div className="footerBottom">
          <p>Mon – Fri · 8am – 5pm</p>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
