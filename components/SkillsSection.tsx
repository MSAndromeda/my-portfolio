"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFigma,
  SiShadcnui,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

type Skill = {
  name: string;
  icon: ReactElement;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={40} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-600" />,
  },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
  },
  {
    name: "Motion",
    icon: <SiFramer size={40} className="text-black dark:text-white" />,
  },
  {
    name: "ShadCN",
    icon: <SiShadcnui size={40} />,
  },

  // Backend
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpress size={40} className="text-gray-700 dark:text-white" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="text-green-600" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} className="text-blue-700 dark:text-blue-500" />,
  },

  // Tools & Misc
  {
    name: "Postman",
    icon: <SiPostman size={40} className="text-orange-600" />,
  },
  { name: "Figma", icon: <SiFigma size={40} className="text-pink-500" /> },
  {
    name: "Java",
    icon: <DiJava size={40} className="text-blue-600 dark:text-blue-400" />,
  },
  { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
];

const SkillsSection = () => {
  return (
    <motion.section
      className="py-10 px-6 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 tracking-tight text-[var(--color-heading)]">
        Tech I Work With
      </h2>
      <div className="grid justify-items-center-safe grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="p-1 rounded-md"
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 1000, damping: 7 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
