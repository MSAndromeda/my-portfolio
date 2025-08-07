import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Analytics />
    </>
  );
}
