import AboutSection from "@/components/AboutSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | evrea",
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
};

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen bg-transparent pt-28 pb-12 px-4 md:px-8">
      <AboutSection />
    </main>
  );
};

export default AboutPage;
