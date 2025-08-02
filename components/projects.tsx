"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { CercularIconGen } from "./CercularIconGen";

interface Proj {
  title: string;
  src: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

export const Projects = ({ projects }: { projects: Proj[] }) => {
  return (
    <div className="text-center">
      <p className="text-secondary text-center text-lg md:text-xl lg:text-3xl pt-4 lg:my-6">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-4">
        {projects.map((project, idx) => (
          <motion.article
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.15,
              ease: "easeInOut",
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            viewport={{ once: true }}
            key={idx}
            className="group relative"
          >
            <Image
              src={project.src}
              alt={project.title}
              height={300}
              width={300}
              className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
            />
            <h2 className="my-4 text-xl sm:text-3xl font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="mt-1 mb-4 text-[1rem] sm:text-2xl text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
            <CercularIconGen icons={project.techStack} />
          </motion.article>
        ))}
      </div>
    </div>
  );
};
