import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/BackgroundStar";
import Navbar from "@/components/Navbar";
import { NebulaEffect } from "@/components/NebulaEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alfinpratamaa.github.io/"),
  title: "Muhamad Alfin Pratama",
  description:
    "Frontendwith 1+ years of expertise. Junior Software Engineer. Specializing web apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Muhamad Alfin Pratama",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
    "nodejs",
    "alfin",
    "alfin pratama",
    "muhamad alfin",
    "muhamad alfin pratama",
    "muhammad alfin pratama",
    "frontend web",
    "Frontend Developer",
    "Front-end Developer",
    "Front End Developer",
    "Frontend Engineer",
    "Front-end Engineer",
    "Front End Engineer",
    "Muhamad Alfin",
    "Alfin Pratama",
    "Muhamad",
    "Alfin",
    "Pratama",
  ],
  creator: "Muhamad Alfin Pratama",
  applicationName: "Muhamad Alfin Pratama",
  icons: "/avatar_2.jpeg",
  openGraph: {
    title: "Muhamad Alfin Pratama",
    description:
      "Frontendwith 1+ years of expertise. Junior Software Engineer. Specializing web apps, UX, and JavaScript technologies.",
    images: "/Me.png",
  },
  alternates: {
    canonical: "https://muhamadalfinpratama.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="shortcut icon" href="/avatar_2.jpeg" />
      </head>
      <body
        className={`${inter.className} min-h-screen overflow-y-scroll overflow-x-hidden relative bg-black`}
      >
        <StarsCanvas />
        <NebulaEffect />
        <div className="relative z-[2]">
          <div className="mb-[10px]">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
