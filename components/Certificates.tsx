"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

interface Certificate {
  title: string;
  src: string;
  description: string;
  Link: string;
}

export const Certificates = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  return (
    <div className="text-center">
      <p className="text-[var(--color-sub-heading)] text-center text-lg md:text-xl lg:test-2xl pt-4">
        Various certifications that i have recieved
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-4">
        {certificates.map((certificate, idx) => (
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
            viewport={{ once: true }}
            key={idx}
            className="group relative"
          >
            <Image
              src={certificate.src}
              alt={certificate.title}
              height={300}
              width={300}
              className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
            />
            <h2 className="mt-2 font-medium md:text-base lg:text-xl tracking-tight text-[var(--color-sub-heading)]">
              {certificate.title}
            </h2>
            <p className="mt-1 text-xs md:text-sm lg:text-base text-[var(--color-text)]">
              {certificate.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
