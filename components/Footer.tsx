import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-neutral-800 bg-white dark:bg-black text-gray-700 dark:text-white pt-6 text-center text-sm ">
      <p>
        &copy; {new Date().getFullYear()} Manas Anand Singh. All rights
        reserved.
      </p>
      <p className="mt-2">
        Built with{" "}
        <span className="text-blue-600 dark:text-pink-500">Next.js</span> &amp;
        💖
      </p>
    </footer>
  );
};

export default Footer;
