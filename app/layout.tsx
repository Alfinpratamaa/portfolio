import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientEffects from "@/components/ClientEffects";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

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
  icons: "/avatar_2.webp",
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
        <ClientEffects />
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
