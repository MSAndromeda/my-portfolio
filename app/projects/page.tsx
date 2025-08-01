import Container from "@/components/container";
import Footer from "@/components/Footer";
import { Projects } from "@/components/projects";

export const projects = [
  {
    title: "Travel from Heart",
    src: "/travelfromheart.png",
    description:
      "A full-stack tour booking application with user authentication, map integration, and backend API using Node.js and MongoDB.",
    techStack: ["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"],
    liveLink: "",
    githubLink: "https://github.com/MSAndromeda/Natours-Project",
  },
  {
    title: "Quick Notes",
    src: "/quickNotes.png",
    description:
      "A real-time note-taking app with full CRUD functionality, TypeScript support, and backend integration using Node.js and MongoDB.",
    techStack: [
      "HTML",
      "TailwindCSS",
      "TypeScript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    liveLink: "",
    githubLink: "https://github.com/MSAndromeda/quicknotes",
  },
  {
    title: "Minimal Code Editor",
    src: "/MinimalCodeEditor.png",
    description:
      "A browser-based code playground to write and preview HTML, CSS, and JavaScript in real time with instant rendering.",
    techStack: ["HTML", "TailwindCSS", "JavaScript"],
    liveLink: "https://msandromeda.github.io/mini-code-editor/",
    githubLink: "https://github.com/MSAndromeda/mini-code-editor",
  },
  {
    title: "Tic-Tac-Toe Game",
    src: "/tictactoe.png",
    description:
      "A two-player tic-tac-toe game built using React, demonstrating state management, component structure, and conditional rendering.",
    techStack: ["React", "TailwindCSS"],
    liveLink: "https://your-live-link.com/tic-tac-toe",
    githubLink: "https://github.com/MSAndromeda/tic-tac-toe",
  },
  {
    title: "Investment Calculator",
    src: "/InvestmentCalculator.png",
    description:
      "A React-based tool to simulate investment growth over time using compound interest logic and live data visualization.",
    techStack: ["React", "JavaScript", "CSS"],
    liveLink: "https://msandromeda.github.io/InvestmetCalculator/",
    githubLink: "https://github.com/MSAndromeda/InvestmetCalculator",
  },
  {
    title: "Smart Student Dashboard",
    src: "/SmartStudentDashBoard.png",
    description:
      "A data dashboard that filters, displays, and manages student performance using modern JavaScript array methods and logic.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://msandromeda.github.io/smart-student-dashboard/",
    githubLink: "https://github.com/MSAndromeda/smart-student-dashboard",
  },
];

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
        <Footer />
      </Container>
    </div>
  );
}
