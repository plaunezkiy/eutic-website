import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { MantineProvider } from "@mantine/core";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EUTIC",
  description: "Edinburgh University Trading and Investment Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //#deae29
  return (
    <html lang="en">
      <body className="bg-white">
        <MantineProvider defaultColorScheme="light">
          <div className="min-h-screen flex flex-col items-center gap-12">
            <Navbar />
            <div className="mb-auto w-full md:w-4/5 px-4">{children}</div>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
