import Hero from "../components/Hero";
import Services from "../components/Services";
import Capabilities from "../components/Capabilities";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Capabilities />
      <Projects />
      <About />
      <Contact />
    </>
  );
}