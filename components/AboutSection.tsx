"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTelegram,
  FaWhatsapp,
  FaCalendar,
} from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import Skills from "./Skills";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectsSection } from "./ProjectSection";

// Data untuk media sosial
const socials = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/visfiveor5" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/alfinpr" },
  { icon: <FaGithub />, href: "https://www.github.com/Alfinpratamaa" },
  { icon: <FaWhatsapp />, href: "https://wa.me/6285175369960" },
  { icon: <FaTelegram />, href: "https://t.me/visfiveor5" },
];

const AboutSection = () => {
  // Varian animasi untuk container utama (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Setiap anak akan muncul dengan jeda 0.1 detik
      },
    },
  };

  // Varian animasi untuk setiap item di dalam grid
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ======================================= */}
      {/* KARTU 1: PROFIL UTAMA                 */}
      {/* ======================================= */}
      <motion.div
        className="col-span-full md:col-span-2 row-span-2 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6"
        variants={itemVariants}
      >
        <div className="flex-shrink-0">
          <Image
            src="/Me.png"
            alt="Muhamad Alfin Pratama"
            width={120}
            height={120}
            className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">
            Muhamad Alfin Pratama
          </h1>
          <div className="relative mx-auto md:mx-0 w-3/4 mt-2 mb-3">
            <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"></div>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-4">
            <MdOutlineWork className="text-purple-400" />
            <p className="text-sm font-semibold text-white">
              Student | Frontend Web
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <FaLocationDot className="text-orange-400" />
            <p className="text-xs text-gray-400">
              Bandung, West Java, Indonesia
            </p>
          </div>
        </div>
      </motion.div>

      {/* ======================================= */}
      {/* KARTU 2: DESKRIPSI DIRI               */}
      {/* ======================================= */}
      <motion.div
        className="col-span-full md:col-span-1 lg:col-span-2 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6"
        variants={itemVariants}
      >
        <p className="text-sm text-gray-300 leading-relaxed">
          I am a frontend developer with expertise in React, Next.js, and
          Tailwind CSS. Passionate about creating user-friendly interfaces and
          delivering high-quality code. Let's work together!
        </p>
      </motion.div>

      {/* ======================================= */}
      {/* KARTU 3: MEDIA SOSIAL                 */}
      {/* ======================================= */}
      <motion.div
        className="col-span-full md:col-span-1 lg:col-span-2 row-span-1 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex items-center justify-center"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center gap-4">
          {socials.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ======================================= */}
      {/* KARTU 4: EXPERIENCE                   */}
      {/* ======================================= */}
      <motion.div
        className="col-span-full lg:col-span-2 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-4">
          <MdOutlineWork className="text-purple-400 text-xl" />
          <h3 className="text-lg font-bold text-white">Experience</h3>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-purple-400 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-white font-semibold">
                Frontend Developer Intern
              </h4>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="https://pilihjurusan.id/favicon.ico"
                alt="Pilih Jurusan Logo"
                width={16}
                height={16}
                className="rounded"
              />
              <Link
                href="https://pilihjurusan.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors"
              >
                Pilih Jurusan
              </Link>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <FaCalendar className="text-gray-400 text-xs" />
              <p className="text-gray-400 text-xs">
                September 2024 - December 2024
              </p>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                • Reorganized assets and components to improve code cleanliness
                and reusability
              </li>
              <li>
                • Adapted and implemented unit testing using Cypress according
                to the latest code
              </li>
              <li>
                • Developed new sections and pages based on project manager
                requests
              </li>
              <li>
                • Built CMS with Firebase integration and data interaction using
                server actions in Next.js
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* ======================================= */}
      {/* KARTU 5: PROJECTS                     */}
      {/* ======================================= */}
      <ProjectsSection />

      {/* ======================================= */}
      {/* KARTU 6: SKILLS                       */}
      {/* ======================================= */}
      <motion.div
        className="col-span-full row-span-2 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6"
        variants={itemVariants}
      >
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
