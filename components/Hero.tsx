// components/CTASection.tsx
"use client";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiLeetcode, SiWakatime } from "react-icons/si";
import { motion, useAnimation } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [width, setWpix] = useState<number | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWpix(window.innerWidth);
    }
  }, []);
  const sizeSecIcon = width != null && width > 1040 ? 40 : 24;
  const secondaryLinks = [
    {
      label: "Github",
      icon: <FaGithub size={sizeSecIcon} />,
      href: "https://github.com/MSAndromeda",
    },
    {
      label: "LeetCode",
      icon: <SiLeetcode size={sizeSecIcon} />,
      href: "https://leetcode.com/manasanandsingh/",
    },
    {
      label: "WakaTime",
      icon: <SiWakatime size={sizeSecIcon} />,
      href: "https://wakatime.com/@MSAndromeda",
    },
    // {
    //   label: "Frontend Mentor",
    //   icon: <SiFrontendmentor size={24} />,
    //   href: "https://www.frontendmentor.io/profile/MSAndromeda",
    // },
    {
      label: "Resume",
      icon: <FaFileAlt size={sizeSecIcon} />,
      href: "/resume.pdf",
    },
  ];
  const controlsProject = useAnimation();
  const controlsConnect = useAnimation();
  const router = useRouter();

  const handleProjectClick = async () => {
    await controlsProject.start({
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      scale: 0.9,
    });
    // Add slight delay for animation to be noticeable
    await new Promise((res) => setTimeout(res, 400));
    router.push("/projects");
  };
  const handleConnectClick = async () => {
    controlsConnect.start({
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      scale: 0.9,
    });
    await new Promise((res) => setTimeout(res, 400));
    window.open(
      "https://linkedin.com/in/manas-anand-singh-2414321b8/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <motion.section
      className="pt-10 md:py-15 px-6 lg:pt-40 lg:pb-20 text-center border-b-[0.15px] border-[var(--color-border)] mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-[var(--color-heading)] text-2xl sm:text-4xl lg:text-6xl font-bold mb-4">
        Manas Anand Singh
      </h1>
      <p className="text-lg lg:text-3xl text-[var(--color-sub-heading)] mb-8 lg:my-12">
        I&apos;m a software engineer with a passion for builiding scalable and
        efficient systems. I&apos;m currently working as a software engineer at
        my home
      </p>
      {/* Primary CTAs */}
      <div className="mb-10 sm:mb-18 lg:mt-20 flex flex-row justify-center items-center gap-4">
        <div className="perspective-[1000px] transform-3d select-text">
          <motion.button
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition duration-300 lg:text-2xl"
            whileHover={{
              rotateX: 10,
              rotateY: 25,
              rotateZ: -10,
              translateZ: 80,
              scale: 1.2,
            }}
            animate={controlsProject}
            onClick={handleProjectClick}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            View Projects
          </motion.button>
        </div>
        <div className="perspective-[1000px] transform-3d">
          <motion.button
            whileHover={{
              rotateX: 10,
              rotateY: -25,
              rotateZ: 10,
              translateZ: 80,
              scale: 1.2,
            }}
            animate={controlsConnect}
            onClick={handleConnectClick}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="cursor-pointer flex items-center-safe gap-x-2 border border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-white text-primary dark:hover:bg-white dark:hover:text-black dark:text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition duration-300 ease-in lg:text-2xl"
          >
            <FaLinkedin size={width != null && width > 640 ? 24 : 16} />
            Lets Connect
          </motion.button>
        </div>
      </div>
      {/* Secondary CTA's */}
      <div className="mb-2 pb-2 flex gap-5 lg:gap-8 justify-center">
        {secondaryLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition"
            aria-label={link.label}
          >
            <motion.button
              className="cursor-pointer"
              whileHover={{
                scale: 1.5,
              }}
              // transition={{
              //   duration: 0.3,
              //   ease: "easeInOut",
              // }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.icon}
            </motion.button>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
