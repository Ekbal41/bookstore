"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-modern-drawer/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { CartProvider } from "@/providers/CartContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  return (
    <html lang="en" className={`${colorMode}`}>
      <body className={`dark:bg-gray-900 ${inter.className}`}>
        <CartProvider>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar setColorMode={setColorMode} colorMode={colorMode} />
            <div className="" style={{ minHeight: "4.1rem" }}></div>
            <div className="mx-auto max-w-7xl w-full flex-grow p-3 md:p-6 lg:p-8">
              {children}
            </div>
            <Footer />
          </div>
        </CartProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
