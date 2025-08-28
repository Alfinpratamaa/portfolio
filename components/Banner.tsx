"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);
const FaCloudDownloadAlt = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaCloudDownloadAlt),
  { ssr: false }
);

const Banner: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };
  return (
    <motion.section
      className="flex items-center justify-center min-h-screen px-4 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/30 rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl"
        variants={cardVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <div className="bg-neutral-700/50 p-6 rounded-2xl backdrop-blur-sm border border-neutral-600/30">
              <Image
                priority
                src="/avatar_2.webp"
                height={220}
                width={220}
                alt="Alfin"
                className="rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 space-y-6 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <h1 className="banner-heading">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                  Hi,
                </span>
                I'm Alfin
              </h1>
            </motion.div>
            {/* Typing Effect Card */}
            <motion.div
              className="bg-neutral-700/30 rounded-xl p-4 border border-neutral-600/20"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="text-xl md:text-2xl font-medium text-gray-200">
                  <TypeAnimation
                    sequence={[
                      "Fullstack Developer",
                      1000,
                      "DevOps Engineer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-neutral-700/20 rounded-xl p-5 border border-neutral-600/20"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-base md:text-lg text-gray-200 leading-relaxed">
                Passionate Fullstack Developer with a focus on
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                  React.js,php,golang,nodejs
                </span>
                development using
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                  Next.js,laravel,gofiber,expressjs
                </span>
                framework, dedicated to crafting elegant and user-friendly web
                applications.
              </h2>
            </motion.div>
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              {/* 1. Tombol "Download CV" diubah menjadi <a> sepenuhnya */}
              <motion.a
                href={"/cv-alfin.pdf"}
                target="_blank"
                rel="noopener noreferrer" // Tambahkan untuk keamanan saat menggunakan target="_blank"
                className="group flex items-center justify-center gap-2 relative overflow-hidden bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 min-h-[48px]" // Tambahkan kelas flex & min-h
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV <FaCloudDownloadAlt />
              </motion.a>

              <motion.div // Gunakan motion.div sebagai wrapper untuk animasi
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/blogs"}
                  className="flex items-center justify-center bg-neutral-700/50 backdrop-blur-sm border border-neutral-600/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-neutral-600/50 transition-all duration-300 min-h-[48px]" // Tambahkan kelas flex & min-h
                >
                  See My blogs
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
