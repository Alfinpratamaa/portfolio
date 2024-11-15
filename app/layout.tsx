import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import StarsCanvas from "../components/BackgroundStar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alfinpratamaa.github.io/"),
  title: "Evrea",
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
    "evrea",

  ],
  creator: "Muhamad Alfin Pratama",
  applicationName: "evrea",
  icons: "/avatar_2.jpeg",
  openGraph: {
    title: "evrea",
    description:
      "Frontendwith 1+ years of expertise. Junior Software Engineer. Specializing web apps, UX, and JavaScript technologies.",
    images: "/Me.png",
  },
  alternates: {
    canonical: "https://evrea.tech",
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
        className={`${inter.className} bg-black min-h-screen overflow-y-scroll overflow-x-hidden`}
      >
        <Analytics />
        <StarsCanvas />
        <div className="mb-[10px]">
        <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}