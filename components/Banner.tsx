"use client";

import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-5 md:px-20 min-h-screen  mt-[5px] text-center md:text-left">
      {/* Container untuk gambar */}
      <div className="order-1 md:order-none flex justify-center mb-10 md:mb-0 md:mr-10">
        <Image
          priority
          src="/avatar_2.jpeg"
          height={250}
          width={250}
          alt="Alfin"
          className="rounded-full hover:transcale"
        />
      </div>

      {/* Container untuk konten lainnya */}
      <div className="order-none md:order-1 flex flex-col gap-6 md:mt-0 mt-[100px] tracking-tighter text-white max-w-[600px]">
        <div className="text-5xl font-semibold animate-bounce">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Hi,</span> I am
        </div>

        <div className="flex mx-auto md:mx-0 items-center gap-4">
          <div className="text-2xl font-medium tracking-tighter text-gray-300">
            Muhamad Alfin{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Pratama
            </span>
          </div>
          <Image src="/popcorn.gif" height={50} width={50} alt="chill" />
        </div>

        <p className="text-lg text-gray-200 my-5">
          Passionate Frontend Web with a focus on <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">React.js</span> development using <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Next.js</span> framework,
          dedicated to crafting elegant and user-friendly web applications.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
          <button
            className="flex z-[1] items-center justify-center w-full md:w-auto py-3 px-6 text-white font-semibold bg-transparent hover:bg-white hover:text-black border border-white rounded-3xl transition-all duration-300">
            <Link href={""}>
              Download CV <FaCloudDownloadAlt className="mx-auto" />
            </Link>
          </button>
          <button
            type="button"
            className="z-[1] w-full md:w-auto py-3 px-6 bg-white text-black font-semibold rounded-3xl hover:bg-white/90 transition-all duration-300">
            <Link href={"/project"}>
              See My Project
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
