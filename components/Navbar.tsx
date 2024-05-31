"use client";;
import { NavbarLinks } from "@/libs/NavbarLinks";
import Link from "next/link";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[5px] bg-['#111'] fixed backdrop-blur-sm py-12 z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between  px-[10px]">
        <Link
          title="Alfin logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <h1 className="text-white text-2xl font-bold">Alfin</h1>
        </Link>

        <div className="md:flex hidden">
          <ul>
            <div className="flex gap-5 items-center">
              {NavbarLinks.map((nav) => (
                <li key={nav.href}>
                  <Link className="group text-white transition-all duration-300 ease-in-out" href={nav.href}>
                    <span className="bg-left-bottom bg-gradient-to-r from-white to-white font-bold bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {nav.text}
                    </span>
                  </Link>


                </li>
              ))}
            </div>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;