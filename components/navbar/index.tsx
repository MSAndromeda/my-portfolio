"use client";
import React, { useEffect, useState } from "react";
import Container from "../container";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

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
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [wpix, setWpix] = useState<number | null>(null);
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
      wpix != null && wpix < 640 ? "100%" : "70%",
      wpix != null && wpix < 640 ? "90%" : "60%",
    ]
  );

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
        className="fixed inset-x-0 top-0 z-50 rounded-full max-w-4xl mx-auto flex items-center justify-between px-4 py-2 dark:bg-neutral-900 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-[6px] bg-opacity-10"
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
              className="text-sm lg:text-2xl relative px-2 py-1 lg:px-4 lg:py-2"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-20 text-secondary hover:text-primary transition duration-300">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
