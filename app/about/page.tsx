"use client";
// import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/container";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <Container className="min-h-10 p-4 pt-20 md:pb-10">
      <h1 className="text-2xl text-center md:text-4xl font-bold tracking-tight text-heading">
        About Me
      </h1>

      {/* Avatar + Bio Row */}
      <div className="flex flex-col md:flex-row gap-8 m-auto pt-6 max-w-xl md:max-w-2xl">
        {/* Avatar image
          <div className="w-92 h-100 relative rounded-full overflow-hidden border border-border shadow-md">
            <Image
              src="/avatar.png" // 👈 add your avatar image to /public/avatar.png
              alt="Avatar of Manas Anand Singh"
              fill
              className="object-cover"
            />
          </div> */}

        {/* Bio and personality */}
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="space-y-4 text-sub-heading text-sm md:text-base"
        >
          <p>
            Hi, I'm <strong>Manas Anand Singh</strong> a self-taught Web
            developer passionate about building interactive, minimalist user
            interfaces.
          </p>

          <p>
            I started with HTML, CSS, and JavaScript, slowly diving into
            building real-world projects with <strong>React</strong>. Over time,
            I became obsessed with animations now exploring{" "}
            <strong>Framer Motion</strong> and <strong>Anime.js</strong> to
            bring smooth, expressive UI to life.
          </p>

          <p>
            I’m currently learning <strong>advanced React patterns</strong>,
            reusable component design, and end-to-end app development using{" "}
            <strong>Next.js, Node.js, Express, and MongoDB</strong>.
          </p>

          <p>
            I also focus deeply on Data Structures and Algorithms solving
            problems daily on <strong>LeetCode</strong> and following{" "}
            <strong>Striver’s DSA roadmap</strong> to build a strong
            problem-solving mindset.
          </p>

          <p>
            My learning approach is highly project-based. Whether it's
            animation-heavy portfolios, dashboards, or full-stack applications I
            build to truly understand.
          </p>

          <p>
            I enjoy simplifying complex problems and translating them into
            clean, accessible UI. I’m constantly pushing my limits to create
            performant, creative, and impactful user experiences.
          </p>

          <p>
            When I’m not coding, I’m probably sketching ideas, writing notes,
            building my component library, or exploring new frameworks and dev
            tools.
          </p>
          <p className="italic text-sm">
            Fun fact: I love breaking down complex problems and animating ideas
            to life.
          </p>
        </motion.div>
      </div>

      {/* Spacer before footer */}
      <div className="h-15" />

      <Footer />
    </Container>
  );
}
