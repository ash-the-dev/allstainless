import Image from "next/image";

const projectImages = [
  {
    src: "/image-16.jpg",
    alt: "Custom stainless hood and wall cladding installation",
    title: "Custom hood and wall stainless package",
    description:
      "A recent install featuring a full stainless wall package and ventilation hood integration for a clean, durable prep line.",
  },
  {
    src: "/image-17.jpg",
    alt: "Walk-in cooler stainless enclosure and door system",
    title: "Walk-in stainless enclosure buildout",
    description:
      "Recent project with precision-fitted stainless wall panels and commercial walk-in door systems built for daily service use.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="siteSection">
      <div className="container">
        <div className="sectionShell">
          <div className="sectionHeading">
            <p className="sectionEyebrow">Recent projects</p>
            <h2>Recent project highlights</h2>
            <p>
              A focused look at recent stainless installs and field-ready buildouts.
            </p>
          </div>

          <div className="projectsGrid">
            {projectImages.map((image) => (
              <article className="projectCard" key={image.src}>
                <div className="projectImageWrap">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="projectImage"
                  />
                </div>
                <div className="projectBody">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
