"use client";
import React, { useEffect, useState } from "react";
import Container from "../container";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Certifications",
      href: "/certifications",
    },
  ];
  const [mounted, setMounted] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [wpix, setWpix] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);

  let theme: boolean = false;
  if (resolvedTheme === "dark") theme = true;
  else if (resolvedTheme === "light") theme = false;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWpix(window.innerWidth);
    }
  }, []);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(
    scrollY,
    [0, 100],
    [
      wpix != null && wpix < 640
        ? "100%"
        : wpix != null && wpix < 1440
        ? "70%"
        : wpix != null && wpix < 1720
        ? "60%"
        : "40%",
      wpix != null && wpix < 640
        ? "95%"
        : wpix != null && wpix < 1440
        ? "60%"
        : wpix != null && wpix < 1720
        ? "50%"
        : "35%",
    ]
  );
  const iconSize: number = wpix != null && wpix < 1024 ? 20 : 25;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) setScrolled(true);
    else setScrolled(false);
  });
  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-navbar)" : "none",
          width,
          y,
        }}
        className="fixed inset-x-0 top-0 z-50 bg-neutral-50/5 dark:bg-neutral-900/40 rounded-full max-w-4xl mx-auto flex items-center justify-between px-4 py-2 backdrop-filter backdrop-blur-[6px]"
      >
        <Link href="/">
          <Image
            src="/avatar.jpeg"
            height={100}
            width={100}
            alt="Avatar"
            className="relative z-20 h-10 w-10 lg:h-15 lg:w-15 rounded-full"
          />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="text-sm lg:text-2xl relative px-2 py-1 lg:px-4 lg:py-2 text-[var(--color-nav-elements)] hover:text-[var(--color-nav-hover)] transition duration-300"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  // initial={{
                  //   opacity: 0,
                  // }}
                  // animate={{
                  //   opacity: 1,
                  // }}
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-20">{item.title}</span>
            </Link>
          ))}
          <motion.button
            className="px-2 py-1 lg:px-4 lg:py-2 rounded-full cursor-pointer text-[var(--color-nav-elements)] hover:text-[var(--color-nav-hover)] hover:bg-neutral-100 hover:dark:bg-neutral-800 transition duration-300"
            onClick={() => setTheme(theme ? "light" : "dark")}
          >
            {!mounted && (
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
              />
            )}
            {mounted && theme ? (
              <FiSun
                size={iconSize}
                // onClick={() => setTheme("light")}
              />
            ) : (
              <FiMoon
                size={iconSize}
                // onClick={() => setTheme("dark")}
              />
            )}
          </motion.button>
        </div>
      </motion.nav>
    </Container>
  );
};
