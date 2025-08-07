import Container from "@/components/container";
import { Projects } from "@/components/projects";
import { projects } from "./data";

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-10 p-4">
        <section className="pt-10">
          <h2 className="text-2xl md:text-4xl mt-10 font-bold text-center mb-2 tracking-tight text-primary">
            Projects
          </h2>
          <Projects projects={projects} />
        </section>
      </Container>
    </div>
  );
}
