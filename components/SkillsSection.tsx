"use client";

import { motion } from "motion/react";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Anime.js", icon: "/icons/anime.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

const SkillsSection = () => {
  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Tech I Work With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:shadow-indigo-500/40 transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-3"
              loading="lazy"
            />
            <span className="text-white font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
