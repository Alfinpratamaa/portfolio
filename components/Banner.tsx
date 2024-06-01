'use client';

import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';

const Banner: React.FC<{}> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const typingTexts = [
    {
      first: "Muhamad Alfin",
      second: "Pratama",
    },
    {
      first: "Student",
      second: "at Universitas Teknologi Bandung",
    },
    {
      first: "Frontend",
      second: "Developer",
    },
    {
      first: "Tech",
      second: "Enthusiast",
    },
  ];

  const texts = typingTexts.map(item => `${item.first} ${item.second}`);

  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-5 md:px-20 min-h-screen mt-[5px] text-center md:text-left"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image
        priority
        src="/avatar_2.jpeg"
        height={250}
        width={250}
        alt="Alfin"
        className="rounded-full cursor-pointer hover:animate-spin hover:duration-200 mt-[120px] md:mt-[100px]"
      />

      {/* Container untuk konten */}
      <motion.aside
        className="flex flex-col gap-6 md:mt-0 mt-8 tracking-tighter text-white max-w-[600px]"
        variants={itemVariants}
      >
        <div className="text-5xl font-semibold animate-bounce">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Hi,</span> I am
        </div>

        <div className="flex mx-auto md:mx-0 items-center gap-4">
          <div className="text-2xl font-medium tracking-tighter text-gray-300">
            <ReactTypingEffect
              text={texts}
              speed={100}
              eraseSpeed={25}
              typingDelay={800}
              eraseDelay={1000}
              displayTextRenderer={(text, i) => {
                const [first, ...rest] = text.split(" ");
                const second = rest.join(" ");
                return (
                  <>
                    <span>{first}</span>
                    {" "}
                    <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
                      {second}
                    </span>
                  </>
                );
              }}
            />
          </div>
          <Image src="/popcorn.gif" height={50} width={50} alt="chill" />
        </div>

        <p className="text-lg text-gray-200 my-5">
          Passionate Frontend Web with a focus on <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">React.js</span> development using <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Next.js</span> framework,
          dedicated to crafting elegant and user-friendly web applications.
        </p>

        <motion.div variants={itemVariants} className="flex mx-auto flex-col md:flex-row justify-center md:justify-start items-center gap-4">
          <motion.button
            className="z-[1] items-center animate-bounce justify-center w-full md:w-auto px-6 py-1 text-white font-semibold bg-transparent hover:bg-white hover:text-black border border-white rounded-3xl transition-all duration-300"
            variants={itemVariants}
          >
            <Link download={'/cv-alfin.pdf'} href={"/cv-alfin.pdf"}>
              Download CV <FaCloudDownloadAlt className="mx-auto" />
            </Link>
          </motion.button>
          <motion.button
            type="button"
            className="z-[1] w-full md:w-auto py-3 px-6 bg-white text-black font-semibold rounded-3xl hover:bg-white/90 transition-all duration-300 md:mb-0 mb-20"
            variants={itemVariants}
          >
            <Link href={"/projects"}>
              See My Project
            </Link>
          </motion.button>
        </motion.div>
      </motion.aside>
    </motion.section>
  );
};

export default Banner;
