import Container from "@/components/container";
import Footer from "@/components/Footer";
import { Certificates } from "@/components/Certificates";

export default function ProjectPage() {
  const certificates = [
    {
      title: "Foundations of User Experience (UX) Design",
      src: "/FoundationOfUIUX.png",
      description:
        "Introduced the core principles of user-centered design, usability, and wireframing — laying a strong foundation for crafting intuitive digital interfaces.",
      Link: "https://www.coursera.org/account/accomplishments/verify/XE2FKY3HI8NZ",
    },
    {
      title: "The Complete JavaScript Course 2025: From Zero to Expert!",
      src: "/javascript2025ZeroToExpert.png",
      description:
        "Covered modern JavaScript from fundamentals to advanced topics, including DOM manipulation, asynchronous programming, and real-world projects solidifying JS as a core development skill.",
      Link: "https://www.udemy.com/certificate/UC-b80197c7-4b5a-4ebc-8ebb-8953632f6c9a/",
    },
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
      src: "/udemyBackendNodejsCertificate.png",
      description:
        "Learned backend development from scratch, including building RESTful APIs, authentication, and MongoDB integration — with a focus on building scalable full-stack applications.",
      Link: "https://www.udemy.com/certificate/UC-a54c60d4-9cb2-4c80-9764-75e1f9d0f5a3/",
    },
    {
      title: "Certificate of Selection",
      src: "/internshipSelection.png",
      description:
        "Awarded for successfully clearing the selection process for a web development internship, demonstrating strong foundational skills in HTML, CSS, JavaScript, and project readiness.",
      Link: "https://internshala.com/verify_certificate",
    },
    {
      title: "Calculus for Machine Learning and Data Science",
      src: "/calculusforML.png",
      description:
        "Focused on essential calculus concepts like derivatives, chain rule, and multivariable functions emphasizing how they underpin ML algorithms and optimization.",
      Link: "https://www.coursera.org/account/accomplishments/verify/2JV8AHR5QRZR",
    },
    {
      title: "Linear Algebra for Machine Learning and Data Science",
      src: "/linearAlgebraForML.png",
      description:
        "Explored vectors, matrices, eigenvalues, and transformations; Foundational for understanding high-dimensional data and ML model behavior.",
      Link: "https://www.coursera.org/account/accomplishments/verify/DNQM5ZMJDZJR",
    },
    {
      title: "Python Data Structures",
      src: "/pythonDataSctructuresCertification.png",
      description:
        "Learned Python fundamentals: lists, dictionaries, tuples, and file handling enabling structured problem-solving using Python.",
      Link: "https://www.coursera.org/account/accomplishments/verify/WCJA43GRUVS7",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      src: "/PythonIntroductoryCertificate.png",
      description:
        "An introductory course covering Python syntax, control flow, and basic programming logic — aimed at beginners stepping into the world of software development.",
      Link: "https://www.coursera.org/account/accomplishments/verify/3SEBP7DJ9DP7",
    },
  ];
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-10 p-4">
        <section className="pt-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center sm:mb-2 tracking-tight text-primary">
            Certiciates
          </h2>
          <Certificates certificates={certificates} />
        </section>
        <Footer />
      </Container>
    </div>
  );
}
