'use client';
import { NavbarLinks } from "@/libs/NavbarLinks";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC<{}> = () => {
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full h-[5px] bg-['#111'] fixed backdrop-blur-sm py-12 z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
        <Link
          title="Alfin logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <h1 className="text-white text-2xl font-bold">Alfin</h1>
        </Link>

        <div className="md:flex hidden">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex gap-5 items-center"
          >
              {NavbarLinks.map((nav) => (
                <motion.li key={nav.href} variants={navItemVariants}>
                  <Link className="group text-white transition-all duration-300 ease-in-out" href={nav.href}>
                    <span className="bg-left-bottom bg-gradient-to-r from-purple-500 to-orange-500 font-bold bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out">
                      {nav.text}
                    </span>
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
