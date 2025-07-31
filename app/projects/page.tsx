import Container from "@/components/container";
import Footer from "@/components/Footer";
import { Projects } from "@/components/projects";

export default function ProjectPage() {
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
    {
      title: "Minimal Code Editor",
      src: "/MinimalCodeEditor.png",
      description:
        "A browser-based editor to write and preview HTML, CSS, and JS in real time.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://msandromeda.github.io/mini-code-editor/",
      githubLink: "https://github.com/MSAndromeda/mini-code-editor",
    },
    {
      title: "Tic-Tac-Toe Game",
      src: "/tictactoe.png",
      description:
        "A classic two-player game built with React, demonstrating state management and conditional rendering.",
      techStack: ["React", "JavaScript", "CSS"],
      liveLink: "https://your-live-link.com/tic-tac-toe",
      githubLink: "https://github.com/MSAndromeda/tic-tac-toe",
    },
    {
      title: "Investment Calculator",
      src: "/InvestmentCalculator.png",
      description:
        "A financial calculator to simulate investment growth using compound interest logic in React.",
      techStack: ["React", "JavaScript", "CSS"],
      liveLink: "https://msandromeda.github.io/InvestmetCalculator/",
      githubLink: "https://github.com/MSAndromeda/InvestmetCalculator",
    },
    {
      title: "Smart Student Dashboard",
      src: "/SmartStudentDashBoard.png",
      description:
        "A dynamic dashboard to manage and filter student data using core JavaScript methods.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://msandromeda.github.io/smart-student-dashboard/",
      githubLink: "https://github.com/MSAndromeda/smart-student-dashboard",
    },
  ];
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-10 p-4">
        <section className="pt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight text-primary">
            Projects
          </h2>
          <Projects projects={projects} />
        </section>
        <Footer />
      </Container>
    </div>
  );
}
