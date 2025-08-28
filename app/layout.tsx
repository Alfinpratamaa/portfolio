import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientEffects from "@/components/ClientEffects";
import { ClientProvider } from "@/provider/ClientProvicer";
import CursorBackground from "@/components/CursorBacground";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfinpratamaa.github.io/"),
  title: "Muhamad Alfin Pratama",
  description:
    "Fullstack Developer & DevOps Engineer with 1+ years of expertise in JavaScript, TypeScript, Golang, and PHP. Experienced with Next.js, React.js, Laravel frameworks, Docker containerization, VPS hosting, and CI/CD pipelines.",
  keywords: [
    "Fullstack Developer",
    "DevOps Engineer",
    "Portfolio",
    "Developer Portfolio",
    "Muhamad Alfin Pratama",
    "Next.js",
    "React",
    "ReactNative",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Golang",
    "PHP",
    "Docker",
    "VPS Hosting",
    "CI/CD",
    "DevOps",
    "Backend Developer",
    "Frontend Developer",
    "Fullstack",
    "Web Developer",
    "Software Engineer",
    "Software Developer",
    "Devops Engineer",
    "web development",
    "programming",
    "alfin",
    "alfin pratama",
    "muhamad alfin",
    "muhamad alfin pratama",
    "muhammad alfin pratama",
    "Muhamad Alfin",
    "Alfin Pratama",
    "Muhamad",
    "Alfin",
    "Pratama",
    "evrea",
  ],
  creator: "Muhamad Alfin Pratama",
  applicationName: "evrea",
  icons: "/avatar_2.webp",
  openGraph: {
    title: "Muhamad Alfin Pratama",
    description:
      "Fullstack Developer & DevOps Engineer with 1+ years of expertise in JavaScript, TypeScript, Golang, and PHP. Specializing in Next.js, React.js, Laravel, Docker, VPS hosting, and CI/CD pipelines.",
    images: "/Avatar_2.webp",
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
        <link
          rel="preload"
          as="image"
          href="/avatar_2.webp"
          type="image/webp"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/avatar_2.jpeg" />
      </head>
      <body
        className={`${poppins.className} min-h-screen overflow-y-scroll overflow-x-hidden relative bg-black`}
      >
        <CursorBackground>
          <ClientProvider />
          <ClientEffects />
          <div className="relative z-[2]">
            <div className="mb-[10px]">
              <Navbar />
            </div>
            {children}
          </div>
        </CursorBackground>
      </body>
    </html>
  );
}
