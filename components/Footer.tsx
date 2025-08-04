import React from "react";

const Footer = () => {
  return (
    <footer className="p-2 w-full border-t border-[var(--color-border)] bg-[var(--color-body-background)] text-[var(--color-text)] pt-6 text-center text-sm ">
      <p>
        &copy; {new Date().getFullYear()} Manas Anand Singh. All rights
        reserved.
      </p>
      <p className="mt-2">
        Built with{" "}
        <span className="text-blue-400 dark:text-pink-500">Next.js</span> &amp;
        💖
      </p>
    </footer>
  );
};

export default Footer;
