import { site } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerInner">
          <div className="footerBrand">
            <div className="footerTitle">{site.name}</div>
            <p className="footerText">
              Commercial stainless installations and welding for clients in
              Oregon and Washington.
            </p>
          </div>

          <div className="footerContact">
            <a href="mailto:allstainls@gmail.com">allstainls@gmail.com</a>
            <a href="tel:13607729079">(360) 772-9079</a>
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
