import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import ServicesSection from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}

