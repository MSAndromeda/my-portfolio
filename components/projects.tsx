"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

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
      <p className="text-secondary text-center text-sm md:text-sm pt-4">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-4">
        {projects.map((project, idx) => (
          <motion.div
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
            <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="max-w-sm mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
