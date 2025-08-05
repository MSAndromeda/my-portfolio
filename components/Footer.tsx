import React from "react";

const Footer = () => {
  return (
    <footer className="py-2 w-full border-t border-[var(--color-border)] text-[var(--color-text)] text-center text-sm ">
      <p>
        &copy; {new Date().getFullYear()} Manas Anand Singh. All rights
        reserved. Built with{" "}
        <span className="text-blue-400 dark:text-pink-500">Next.js</span> &amp;
        💖
      </p>
    </footer>
  );
};

export default Footer;
