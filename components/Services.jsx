import Section from "./Section";

const services = [
  {
    title: "Stainless Installations",
    desc: "On-site stainless installs for commercial spaces, including counters, cladding, splash, trim, supports, and custom fit work.",
  },
  {
    title: "Fabrication and Fit-up",
    desc: "Shop fabrication and field fit-up with tight tolerances, built to match drawings and real-world site conditions.",
  },
  {
    title: "Welding Services",
    desc: "TIG and MIG stainless welding for commercial assemblies, repairs, retrofits, and new-build components.",
  },
  {
    title: "Sanitary, Cleanable Builds",
    desc: "Smooth transitions, practical detailing, and clean finishes for spaces where maintenance and durability matter.",
  },
  {
    title: "Custom Brackets and Supports",
    desc: "Structural and finish supports aligned, anchored, and built for daily commercial use.",
  },
  {
    title: "Retrofits and Modifications",
    desc: "Upgrades to existing stainless systems without turning the jobsite into chaos.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Commercial Stainless Services"
      subtitle="Fabrication, fit-up, installation, and welding with clean execution and field-tested discipline."
    >
      <div className="cards">
        {services.map((service, index) => (
          <article className="card serviceCard" key={service.title}>
            <div className="cardIndex">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </article>
        ))}
      </div>

      <div className="scopeNote">
        <span className="scopeLabel">Scope note</span>
        <span>Commercial work only. No grease ducts or hood work.</span>
      </div>
    </Section>
  );
}
