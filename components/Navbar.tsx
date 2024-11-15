'use client';
import { NavbarLinks } from "@/libs/NavbarLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[5px] bg-['#111'] fixed backdrop-blur-sm py-12 z-50 px-10">
      <motion.div variants={containerVariants} className="w-full h-full flex flex-row items-center justify-between px-[10px]">
        <Link
          title="Evrea logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <motion.h1 variants={navItemVariants} className=" bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-transparent text-2xl font-bold">Alfin</motion.h1>
        </Link>
        {/* Navbar for desktop */}
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
        {/* Navbar for mobile */}
        <div >
          <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose className="text-white" size={20} /> : <AiOutlineMenu size={20} className="text-white" />}
          </div>
          <ul
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-[60%] min-h-screen bg-gradient-to-r from-purple-500 to-orange-500 z-[1]  ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            <h1 className="p-4 text-center text-2xl font-bold text-white">Alfin</h1>

            {/* Mobile Navigation Items */}
            {NavbarLinks.map(item => (
              <Link key={item.href} href={item.href}>
                <li
                  key={item.href}
                  onClick={() => setNav(false)}
                  className='p-4 border-b border-b-white rounded-xl top-10 hover:bg-black hover:text-white duration-300 text-black cursor-pointer border-gray-600'
                >
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
