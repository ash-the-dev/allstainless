import Image from "next/image";

const projectImages = [
  { src: "/image-1.jpg", alt: "Commercial stainless installation project 1" },
  { src: "/image-2.jpg", alt: "Commercial stainless installation project 2" },
  { src: "/image-3.jpg", alt: "Commercial stainless installation project 3" },
  { src: "/image-4.jpg", alt: "Commercial stainless installation project 4" },
  { src: "/image-5.jpg", alt: "Commercial stainless installation project 5" },
  { src: "/image-6.jpg", alt: "Commercial stainless installation project 6" },
];

export default function Projects() {
  return (
    <section id="projects" className="siteSection">
      <div className="container">
        <div className="sectionShell">
          <div className="sectionHeading">
            <p className="sectionEyebrow">Featured work</p>
            <h2>Selected projects</h2>
            <p>
              Recent fabrication and installation work, shown cleanly and
              without the fluff.
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
