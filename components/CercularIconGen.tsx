"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export const CercularIconGen = ({
  icons = ["HTML", "CSS", "JavaScript"],
}: {
  icons: string[];
}) => {
  const [width, setWpix] = useState<number | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWpix(window.innerWidth);
    }
  }, []);
  const iconsize = width != null && width > 1040 ? 25 : 18;
  const iconMap: { [key: string]: ReactElement } = {
    HTML: <FaHtml5 size={iconsize} className="text-orange-500" />,
    CSS: <FaCss3Alt size={iconsize} className="text-blue-500" />,
    TailwindCSS: <SiTailwindcss size={iconsize} className="text-sky-400" />,
    JavaScript: <FaJsSquare size={iconsize} className="text-yellow-400" />,
    React: <FaReact size={iconsize} className="text-cyan-400" />,
    TypeScript: <SiTypescript size={iconsize} className="text-blue-600" />,
    NodeJs: <FaNodeJs size={iconsize} className="text-green-500" />,
    ExpressJs: <SiExpress size={iconsize} className="text-gray-500" />,
    MongoDB: <SiMongodb size={iconsize} className="text-green-700" />,
    Tailwind: <SiTailwindcss size={iconsize} className="text-sky-400" />,
    NextJs: (
      <SiNextdotjs size={iconsize} className="text-black dark:text-white" />
    ),
    Framer: <SiFramer size={iconsize} className="text-pink-500" />,
    Postman: <SiPostman size={iconsize} className="text-orange-600" />,
  };
  const containerVariants = {
    initial: { zIndex: 0 },
    hover: { zIndex: 10 },
  };
  const iconVariants = {
    initial: { scaleX: 0, opacity: 0, width: "0px", x: 0 },
    hover: { scaleX: 1, opacity: 1, width: "auto", x: 2 },
  };

  return (
    <div className="flex items-center justify-center my-5">
      {icons.map((icon, idx) => {
        const IconComponent = iconMap[icon];
        return (
          <motion.div
            key={idx}
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            className={`w-fit h-fit p-1 lg:p-2 rounded-full border-1 border-[var(--color-border)] bg-[var(--color-container-background)] flex items-center justify-start text-xl ${
              idx !== 0 ? "-ml-3" : ""
            } ${idx !== 0 ? "lg:-ml-4" : ""}`}
          >
            <div>{IconComponent}</div>
            <motion.span
              variants={iconVariants}
              transition={{
                ease: "easeInOut",
              }}
              className="opacity-0 text-xs lg:text-sm text-[var(--color-text)] select-none origin-left inline-block"
            >
              {icon}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};
