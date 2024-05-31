// components/AboutPage.tsx

import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineWork } from "react-icons/md";
import Image from 'next/image';
import Skills from '@/components/Skills';


const AboutPage: React.FC = () => {

    const socials = [
        {
            icon: <FaInstagram />,
            href: "https://www.instagram.com"
        },
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com"
        },
        {
            icon: <FaGithub />,
            href: "https://www.github.com"
        },
        {
            icon: <FaWhatsapp />,
            href: "https://wa.me"
        },
        {
            icon: <FaTelegram />,
            href: "https://t.me"
        }
    ]

    return (
        <>
            <div className="max-w-4xl flex items-center h-auto  lg:h-screen flex-wrap mx-auto my-5 lg:my-0 text-white">
            <div
                id="profile"
                className="w-full z-[1] lg:w-3/5 mt-[120px] justify-center rounded-lg  lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-transparent mx-6 lg:mx-0"
            >
                <div className="p-4 md:p-12 text-center   gap-10 flex lg:text-left">

                    <div
                            className="cursor-pointer lg:mt-8 flex-none items-center pr-10 justify-center shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                        >
                            <Image src={'/Me.png'} alt={'alfin'} height={200} width={200} className='rounded-full' />
                        </div>
                    <div className='flex-none -mt-10  '>
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Muhamad Alfin Pratamae</h1>
                            <div className="relative mx-auto lg:mx-0 w-4/5 pt-3">
                                <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"></div>
                            </div>
                            <div className="flex items-center space-x-2 mt-4">
                                <MdOutlineWork className="w-4 h-4 text-grad from-purple-500 to-orange-400" />
                                <p className="text-base font-bold">
                            Student | Frontend Web
                        </p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                                <FaLocationDot className=" h-4 w-4 text-grad from-purple-500 to-orange-400" />
                                <p className="text-gray-400 text-xs lg:text-sm">
                            Bandung city, West Java, Indonesia
                        </p>
                            </div>
                            <p className="pt-8 text-sm"></p>
                            I am a frontend developer proficient in React, Next.js, and Tailwind CSS.<br /> I have experience building responsive and interactive web applications.<br /> I am passionate about creating user-friendly interfaces and delivering high-quality code.<br /> Let's work together to bring your ideas to life!
                        <div className="pt-12 pb-8 ">
                            <button className="bg-gradient-to-r from-purple-500 to-orange-400 hover:bg-gradient-to-r hover:from-purple-500/45 hover:to-orange-400/45 text-white font-bold py-2 px-4 rounded-full">
                                Get In Touch
                            </button>
                        </div>
                        <div className="pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex  items-center ">
                            {socials.map((social, index) => (
                                <Link href={social.href} key={index} className='border-white hover:bg-white  rounded-full border-b-2'>
                                    <p className="bg-transparent cursor-pointer  text-white  hover:text-black rounded-full w-20 h-20 flex items-center justify-center">
                                        {social.icon}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className=' lg:h-screen'>

                <Skills />
            </div>
        </>
    );
};

export default AboutPage;
