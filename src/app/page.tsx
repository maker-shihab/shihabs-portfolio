import { Contact } from "@/components/features/contact/contact";
import { Experience } from "@/components/features/homepage/experience";
import { HashScrollHandler } from "@/components/features/homepage/hash-scroll-handler";
import { Hero } from "@/components/features/homepage/hero";
import { Skills } from "@/components/features/homepage/skills";
import { Testimonials } from "@/components/features/homepage/testimonials";
import { Projects } from "@/components/features/projects/projects";

export default function HomePage() {
  return (
    <div className="flex-1">
      <HashScrollHandler />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
