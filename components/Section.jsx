export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="siteSection">
      <div className="container">
        <div className="sectionShell">
          <div className="sectionHeading">
            {eyebrow ? <p className="sectionEyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
