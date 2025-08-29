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
      className="flex items-center justify-center min-h-screen px-3 sm:px-4 py-6 sm:py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl w-full shadow-2xl"
        variants={cardVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <div className="bg-neutral-700/50 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-neutral-600/30">
              <Image
                priority
                src="/avatar_2.webp"
                height={160}
                width={160}
                alt="Alfin"
                className="rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300 w-32 h-32 sm:w-40 sm:h-40 md:w-[220px] md:h-[220px] object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left w-full"
            variants={itemVariants}
          >
            <motion.div
              className="space-y-1 sm:space-y-2"
              variants={itemVariants}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                  Hi,
                </span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">I'm Alfin</span>
              </h1>
            </motion.div>

            {/* Typing Effect Card */}
            <motion.div
              className="bg-neutral-700/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-neutral-600/20"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center lg:justify-start">
                <div className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 text-center lg:text-left">
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
              className="bg-neutral-700/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-neutral-600/20"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                Passionate Fullstack Developer with a focus on{" "}
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                  React.js, php, golang, nodejs
                </span>{" "}
                development using{" "}
                <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                  Next.js, laravel, gofiber, expressjs
                </span>{" "}
                framework, dedicated to crafting elegant and user-friendly web
                applications.
              </h2>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full"
              variants={itemVariants}
            >
              <motion.a
                href={"/cv-alfin.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 relative overflow-hidden bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 min-h-[44px] sm:min-h-[48px] text-sm sm:text-base w-full sm:w-auto"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV{" "}
                <FaCloudDownloadAlt className="text-sm sm:text-base" />
              </motion.a>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={"/blogs"}
                  className="flex items-center justify-center bg-neutral-700/50 backdrop-blur-sm border border-neutral-600/30 text-white font-semibold px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl hover:bg-neutral-600/50 transition-all duration-300 min-h-[44px] sm:min-h-[48px] text-sm sm:text-base w-full"
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
