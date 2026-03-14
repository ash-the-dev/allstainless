import Section from "./Section";

const caps = [
  {
    title: "Materials",
    desc: "304 and 316 stainless selected per environment, exposure, and project specification.",
  },
  {
    title: "Processes",
    desc: "TIG and MIG welding, cut-fit-finish workflow, and field planning that respects the site.",
  },
  {
    title: "Finishes",
    desc: "Brushed, smooth, and practical finishes designed for commercial durability and clean presentation.",
  },
  {
    title: "Install discipline",
    desc: "Measured layout, protected surfaces, clean sequencing, and punch-list aware execution.",
  },
  {
    title: "Coordination",
    desc: "Works alongside other trades, inspections, schedules, and real-world jobsite constraints.",
  },
  {
    title: "Documentation",
    desc: "Photo updates, progress visibility, punch readiness, and straightforward communication.",
  },
];

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="How we work"
      title="Built on process and precision"
      subtitle="The structure underneath the finish: planning, consistency, coordination, and repeatable quality."
    >
      <div className="cards">
        {caps.map((capability) => (
          <article className="card capabilityCard" key={capability.title}>
            <h3>{capability.title}</h3>
            <p>{capability.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
