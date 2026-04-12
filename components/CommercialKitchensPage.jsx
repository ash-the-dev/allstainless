import Link from "next/link";
import FlagBackdrop from "./FlagBackdrop";

const coreServices = [
  {
    title: "Commercial kitchen fabrication",
    desc: "Counters, line builds, and custom stainless tailored to your kitchen layout and equipment schedule.",
  },
  {
    title: "Kitchen hood systems",
    desc: "Custom hood shells, transitions, and related ventilation metalwork fabricated and fitted for clean integration.",
  },
  {
    title: "Walk-in cooler & freezer installation",
    desc: "Stainless trim, panels, and metal interfaces installed with attention to thermal lines and daily wash-down.",
  },
  {
    title: "Replacements & repairs",
    desc: "Swap failing sections, restore worn assemblies, and get production back online without unnecessary rework.",
  },
  {
    title: "Food-safe stainless solutions",
    desc: "Smooth, cleanable details and finishes suited to health department expectations and real-world cleaning.",
  },
  {
    title: "On-site & custom metal work",
    desc: "Field measuring, fitting, and adjustment so fabricated pieces land right the first time in active kitchens.",
  },
  {
    title: "TIG & MIG welding — all metals",
    desc: "Precision stainless joins plus support for carbon steel and aluminum where your scope calls for it.",
  },
];

const protective = [
  {
    title: "Stainless steel cladding",
    desc: "Durable wall and face panels that protect substrates and present a uniform commercial finish.",
  },
  {
    title: "Stainless flashing",
    desc: "Transitions and closures that shed water and soil while staying neat at corners and penetrations.",
  },
  {
    title: "Splash guards",
    desc: "Protection and sanitation at sinks, prep zones, and equipment lines — built for daily wipe-down.",
  },
  {
    title: "Corner guards",
    desc: "Impact-resistant corners that reduce damage in high-traffic aisles and cart paths.",
  },
  {
    title: "Wall caps",
    desc: "Finished tops and terminations that close out wall assemblies cleanly.",
  },
  {
    title: "Column wraps",
    desc: "Custom-fitted enclosures that integrate columns into the kitchen’s finished look.",
  },
];

const materials = [
  {
    grade: "316 stainless",
    badge: "Premium",
    desc: "High-end, domestically sourced 316 where corrosion resistance and long service life matter most — ideal for aggressive cleaning and harsh line conditions.",
  },
  {
    grade: "304 stainless",
    badge: "Workhorse",
    desc: "The standard for most commercial kitchen surfaces: strong, cleanable, and cost-effective without sacrificing a professional appearance.",
  },
  {
    grade: "Steel & mixed metals",
    badge: "Integrated",
    desc: "Carbon steel and other metals integrated with stainless for backing plates, mixed assemblies, and welded transitions when the scope requires it.",
  },
];

const galleryPlaceholders = [
  { id: "line-upgrade", title: "Line fabrication" },
  { id: "hood-fit", title: "Hood & ventilation metal" },
  { id: "walkin", title: "Walk-in interface" },
];

export default function CommercialKitchensPage() {
  return (
    <div className="ckShell">
      <div className="ckFlagLayer">
        <FlagBackdrop variant="dark" className="ckFlagSvg" svgId="ck-flag" />
      </div>
      <div className="ckScrim" aria-hidden="true" />

      <div className="ckContent">
        <header className="ckHero">
          <div className="container">
            <div className="ckHeroPanel">
              <p className="ckEyebrow">Primary service area</p>
              <h1 className="ckTitle">Commercial kitchens</h1>
              <p className="ckLead">
                Fabrication, installation, upgrades, repairs, and replacements
                for high-use foodservice environments — stainless systems built
                for inspection-ready cleanliness and long shifts on the line.
              </p>
              <div className="ckHeroActions">
                <Link href="/#contact" className="btn btnPrimary ckBtnPrimary">
                  Request a kitchen quote
                </Link>
                <Link href="/#projects" className="btn btnGhost ckBtnGhost">
                  View project work
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="ckSection" aria-labelledby="ck-services-heading">
          <div className="container">
            <div className="ckSectionHead">
              <h2 id="ck-services-heading">Kitchen scope we deliver</h2>
              <p>
                One focused team for stainless-intensive kitchen work — from
                hood-related metal and line fabrication to walk-ins, repairs,
                and turn-key replacements.
              </p>
            </div>
            <ul className="ckServiceGrid">
              {coreServices.map((item) => (
                <li key={item.title}>
                  <article className="ckCard">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="ckSection ckSection--tight"
          aria-labelledby="ck-protect-heading"
        >
          <div className="container">
            <div className="ckSectionHead">
              <h2 id="ck-protect-heading">
                Stainless &amp; protective metalwork
              </h2>
              <p>
                Wall and corner protection that stays neat under carts, racks,
                and daily cleaning — specified, fabricated, and installed for
                commercial traffic.
              </p>
            </div>
            <ul className="ckProtectGrid">
              {protective.map((item) => (
                <li key={item.title}>
                  <article className="ckCard ckCard--compact">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ckSection" aria-labelledby="ck-materials-heading">
          <div className="container">
            <div className="ckSectionHead">
              <h2 id="ck-materials-heading">Materials</h2>
              <p>
                Right alloy for the exposure — presented clearly so owners and
                GCs know what they are buying.
              </p>
            </div>
            <ul className="ckMaterials">
              {materials.map((m) => (
                <li key={m.grade}>
                  <article className="ckMaterialCard">
                    <div className="ckMaterialTop">
                      <h3>{m.grade}</h3>
                      <span className="ckMaterialBadge">{m.badge}</span>
                    </div>
                    <p>{m.desc}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="ckSection ckSection--darkPanel"
          aria-labelledby="ck-foodsys-heading"
        >
          <div className="container">
            <div className="ckFoodPanel">
              <div className="ckSectionHead ckSectionHead--onDark">
                <h2 id="ck-foodsys-heading">Food service systems</h2>
                <p>
                  Fabrication and installation of food service system
                  components for demanding kitchens — including custom kitchen
                  hood systems and ventilation-related metal fabrication. We
                  pair that with stainless solutions shaped around how your
                  kitchen actually runs: access, cleaning, and equipment
                  clearances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ckSection" aria-labelledby="ck-gallery-heading">
          <div className="container">
            <div className="ckSectionHead">
              <h2 id="ck-gallery-heading">Before &amp; after</h2>
              <p>
                Project photography coming soon. Replace placeholders with
                your images — each slot is a fixed aspect ratio for easy
                drop-in.
              </p>
            </div>
            <ul className="ckBaList">
              {galleryPlaceholders.map((row) => (
                <li key={row.id}>
                  <figure className="ckBaRow">
                    <figcaption className="ckBaCaption">{row.title}</figcaption>
                    <div className="ckBaPair">
                      <div className="ckPhotoSlot">
                        <span className="ckPhotoLabel">Before</span>
                        <div
                          className="ckPhotoPlaceholder"
                          role="img"
                          aria-label={`Before photo placeholder: ${row.title}`}
                        />
                      </div>
                      <div className="ckPhotoSlot">
                        <span className="ckPhotoLabel">After</span>
                        <div
                          className="ckPhotoPlaceholder"
                          role="img"
                          aria-label={`After photo placeholder: ${row.title}`}
                        />
                      </div>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ckCta" aria-label="Contact call to action">
          <div className="container">
            <div className="ckCtaPanel">
              <div>
                <h2 className="ckCtaTitle">Plan your kitchen metal scope</h2>
                <p className="ckCtaText">
                  Send drawings, photos, and timeline — we will align
                  fabrication, field fit, and installation with your opening or
                  remodel schedule.
                </p>
              </div>
              <Link href="/#contact" className="btn btnPrimary ckBtnPrimary">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
