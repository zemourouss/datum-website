"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import AOS from "aos";

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "aos/dist/aos.css"; // import the CSS file

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      easing: "linear",
      once: true,
    });
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { useEffect } from "react";
