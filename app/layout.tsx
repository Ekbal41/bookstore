import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-modern-drawer/dist/index.css'
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Store",
  description: "The #1 Collection of Free and Premium Web Resourcese",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
