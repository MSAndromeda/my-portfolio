// components/CTASection.tsx
"use client";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const secondaryLinks = [
    {
      label: "Github",
      icon: <FaGithub size={24} />,
      href: "https://github.com/MSAndromeda",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/manas-anand-singh-2414321b8/",
    },
    {
      label: "Resume",
      icon: <FaFileAlt size={24} />,
      href: "/resume.pdf",
    },
  ];
  return (
    <motion.section
      className="pt-10 px-6 text-center text-primary dark:bg-gray-900 dark:text-white border-b-[0.15px] border-neutral-300 mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Manas Anand Singh</h1>
      <p className="text-lg text-secondary dark:text-gray-300 mb-8">
        I'm a software engineer with a passion for builiding scalable and
        efficient systems. I'm currently working as a software engineer at my
        home
      </p>
      {/* Primary CTAs */}
      <div className="mb-18 flex flex-col md:flex-row justify-center items-center gap-4">
        <Link
          href="/projects"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="border border-primary hover:bg-primary hover:text-white text-primary dark:border-white dark:hover:bg-white dark:hover:text-black dark:text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
        >
          Contact Me
        </Link>
      </div>
      {/* Secondary CTA's */}
      <div className="mb-2 pb-2 flex gap-5 justify-center">
        {secondaryLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black dark:text-gray-500 dark:hover:text-white transition"
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
