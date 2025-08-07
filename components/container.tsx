import React from "react";
import Footer from "./Footer";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-5xl mx-auto w-full bg-[var(--color-container-background)] ${className}`}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Container;
