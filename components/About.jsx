import Image from "next/image";
import Section from "./Section";
import { site } from "../lib/site";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Who we are"
      title="Built for commercial work"
      subtitle="Measure, cut, weld, finish. Clean execution without the extra noise."
    >
      <div className="aboutWrap">
        <div className="aboutPanel">
          <div className="aboutBadge">{site.name}</div>

          <h3 className="aboutHeadline">
            Stainless installation and welding done with precision, discipline,
            and a clean handoff.
          </h3>

          <p className="aboutText">
            We focus on commercial stainless installations and welding with one
            simple goal: deliver work that looks sharp, lasts, and installs
            clean. If you have drawings, dimensions, and a schedule, we bring
            the heat in the right way: controlled, precise, and tidy.
          </p>
        </div>

        <div className="aboutVisual">
          <div className="aboutVisualFrame">
            <Image
              src="/Logo.webp"
              alt=""
              width={700}
              height={700}
              className="aboutLogoArt"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
