import Container from "@/components/container";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Projects } from "@/components/projects";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "./projects/page";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-10 p-4">
        <Hero />
        <section className="pt-5 sm:pt-10 lg:pb-10 border-b-[0.15px] border-[var(--color-border)]">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 tracking-tight text-[var(--color-heading)]">
            Featured Projects
          </h2>
          <Projects projects={projects.slice(0, 2)} />
        </section>
        <SkillsSection />
        <Footer />
      </Container>
    </div>
  );
}
