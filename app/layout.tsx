import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "My developer portfolio showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
