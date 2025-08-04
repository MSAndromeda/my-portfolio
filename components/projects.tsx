"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { CercularIconGen } from "./CercularIconGen";
import Link from "next/link";

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
      <p className="text-[var(--color-sub-heading)] text-center text-lg md:text-xl lg:text-2xl pt-4 lg:my-6">
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
            className="group relative flex flex-col items-center gap-4"
          >
            <Image
              src={project.src}
              alt={project.title}
              height={300}
              width={300}
              className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
            />
            <h3 className="text-xl sm:text-3xl font-medium tracking-tight text-[var(--color-sub-heading)]">
              {project.title}
            </h3>
            <p className="text-[1rem] sm:text-2xl text-[var(--color-text)]">
              {project.description}
            </p>
            <CercularIconGen icons={project.techStack} />
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer flex items-center-safe gap-x-2 border border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-white text-primary dark:hover:bg-white dark:hover:text-black dark:text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs font-medium transition duration-300 lg:text-xl">
                Github Link
              </button>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
