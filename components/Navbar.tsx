"use client";
import { NavbarLinks } from "@/libs/NavbarLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[5px] bg-['#111'] fixed backdrop-blur-sm py-12 z-50 px-10">
      <motion.div
        variants={containerVariants}
        className="w-full h-full flex flex-row items-center justify-between px-[10px]"
      >
        <Link
          title="Evrea logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <motion.h1
            variants={navItemVariants}
            className=" bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-transparent text-2xl font-bold"
          >
            Evrea
          </motion.h1>
        </Link>

        {/* Navbar for desktop (sudah benar) */}
        <div className="md:flex hidden">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex gap-5 items-center"
          >
            {NavbarLinks.map((nav) => (
              <motion.li key={nav.href} variants={navItemVariants}>
                <Link
                  className="group text-white transition-all duration-300 ease-in-out"
                  href={nav.href}
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-purple-500 to-orange-500 font-bold bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    {nav.text}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Navbar for mobile (bagian yang diperbaiki) */}
        <div className="block md:hidden">
          {/* PERBAIKAN 1: Mengubah div menjadi button untuk aksesibilitas */}
          <button
            onClick={handleNav}
            className="cursor-pointer"
            aria-label={nav ? "Close menu" : "Open menu"} // Memberi label yang jelas
            aria-expanded={nav} // Menandakan status menu (terbuka/tertutup)
            aria-controls="mobile-menu" // Menghubungkan tombol dengan menu
          >
            {nav ? (
              <AiOutlineClose className="text-white" size={20} />
            ) : (
              <AiOutlineMenu size={20} className="text-white" />
            )}
          </button>

          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] min-h-screen bg-gradient-to-r from-purple-500 to-orange-500 z-[1] ease-in-out duration-500"
                : "fixed left-[-100%] top-0 ease-in-out duration-500"
            }
          >
            {/* PERBAIKAN 2: Judul dipindahkan ke luar <ul> */}
            <h1 className="p-4 text-center text-2xl font-bold text-white">
              Evrea
            </h1>

            <ul id="mobile-menu">
              {" "}
              {/* Menambahkan ID untuk dihubungkan dengan aria-controls */}
              {/* PERBAIKAN 3: Struktur <li> -> <Link> dibenarkan */}
              {NavbarLinks.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-b-white rounded-xl top-10 hover:bg-black duration-300 border-gray-600"
                >
                  <Link
                    href={item.href}
                    onClick={() => setNav(false)}
                    className="block p-4 text-black hover:text-white cursor-pointer" // 'block' agar link mengisi seluruh area <li>
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
