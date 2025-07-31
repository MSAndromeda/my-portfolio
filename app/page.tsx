import Container from "@/components/container";
import CTASection from "@/components/CTASection";
import { Projects } from "@/components/projects";

export default function Home() {
  const projects = [
    {
      title: "Minimal Code Editor",
      src: "/MinimalCodeEditor.png",
      href: "#",
      description:
        "A browser-based editor to write and preview HTML, CSS, and JS in real time.",
    },
    {
      title: "Travel from Heart",
      src: "/travelfromheart.png",
      href: "#",
      description:
        "A full-stack tour booking site with authentication and map features.",
    },
  ];
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-10 p-4 md:pb-10">
        <CTASection />
        <section className="py-10">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
            Featured Projects
          </h2>
          <Projects projects={projects} />
        </section>
      </Container>
    </div>
  );
}
