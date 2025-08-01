import Container from "@/components/container";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Projects } from "@/components/projects";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  const projects = [
    {
      title: "Travel from Heart",
      src: "/travelfromheart.png",
      description:
        "A full-stack tour booking site with authentication and map features.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink: "",
      githubLink: "https://github.com/MSAndromeda/Natours-Project",
    },
    {
      title: "Quick Notes",
      src: "/quickNotes.png",
      description:
        "A simple notes app that lets users perform CRUD operations with real-time syncing.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink: "",
      githubLink: "https://github.com/MSAndromeda/quicknotes",
    },
  ];
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-10 p-4">
        <Hero />
        <section className="pt-5 sm:pt-10 lg:pb-10 border-b-[0.15px] border-neutral-300">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 tracking-tight text-primary">
            Featured Projects
          </h2>
          <Projects projects={projects} />
        </section>
        <SkillsSection />
        <Footer />
      </Container>
    </div>
  );
}
