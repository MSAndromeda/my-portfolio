"use client";
import React, { useState } from "react";
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
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["50%", "40%"]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const filter = useMotionTemplate`blur(${useTransform(
    scrollY,
    [0, 100],
    [0, 10]
  )}px)`;

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
          opacity,
          // filter,
        }}
        // transition={{
        //   duration: 0.6,
        //   ease: "easeInOut",
        // }}
        className="fixed inset-x-0 top-0 z-50 rounded-full bg-white max-w-4xl mx-auto flex items-center justify-between px-4 py-2 dark:bg-neutral-900"
      >
        <Link href="/">
          <Image
            src="/avatar.jpeg"
            height={100}
            width={100}
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="text-sm relative px-2 py-1"
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
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
