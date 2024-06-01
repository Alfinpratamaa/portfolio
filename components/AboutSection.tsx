'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineWork } from 'react-icons/md';
import { motion } from 'framer-motion';

const AboutSection = () => {
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
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        hover: { scale: 1.1, filter: 'grayscale(0%)', transition: { duration: 0.5 } },
    };

    return (
        <motion.section initial="hidden" animate="visible" variants={containerVariants}>
            <div className="max-w-4xl mx-auto px-4 lg:px-0 flex items-center  h-auto lg:h-screen flex-wrap my-5 lg:my-0 text-white">
                <motion.div
                    id="profile"
                    className="w-full lg:w-3/5 mt-[120px] justify-center z-[1] rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-transparent"
                    variants={itemVariants}
                >
                    <div className="p-4 md:p-12 text-center lg:text-left flex flex-col lg:flex-row gap-10">
                        <motion.div
                            className="cursor-pointer mx-auto lg:mt-8 flex-none items-center justify-center shadow-xl h-48 w-48 bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all hover:duration-200"
                            whileHover="hover"
                            variants={imageVariants}
                        >
                            <Image src={'/Me.png'} alt={'alfin'} height={200} width={200} className='rounded-full' />
                        </motion.div>
                        <motion.div className='flex-none' variants={itemVariants}>
                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Muhamad Alfin Pratamae</h1>
                            <div className="relative mx-auto lg:mx-0 w-4/5 pt-3">
                                <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"></div>
                            </div>
                            <div className="flex items-center space-x-2 mt-4">
                                <MdOutlineWork className="w-4 h-4 text-grad from-purple-500 to-orange-400" />
                                <p className="text-base font-bold">Student | Frontend Web</p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                                <FaLocationDot className="h-4 w-4 text-grad from-purple-500 to-orange-400" />
                                <p className="text-gray-400 text-xs lg:text-sm">Bandung city, West Java, Indonesia</p>
                            </div>
                            <p className="pt-8 text-sm">
                                I am a frontend developer proficient in React, Next.js, and Tailwind CSS.<br />
                                I have experience building responsive and interactive web applications.<br />
                                I am passionate about creating user-friendly interfaces and delivering high-quality code.<br />
                                Let's work together to bring your ideas to life!
                            </p>
                            <div className="pt-12 pb-8">
                                <button className="bg-gradient-to-r from-purple-500 to-orange-400 hover:bg-gradient-to-r hover:from-purple-500/45 hover:to-orange-400/45 text-white font-bold py-2 px-4 rounded-full">
                                    Get In Touch
                                </button>
                            </div>
                            <motion.div className="pb-16 lg:pb-0 w-full mx-auto flex items-center justify-center lg:justify-start space-x-4" variants={itemVariants}>
                                {socials.map((social, index) => (
                                    <Link href={social.href} key={index} className='border-white hover:bg-white rounded-full border-b-2'>
                                        <p className="bg-transparent cursor-pointer text-white hover:text-black rounded-full w-12 h-12 flex items-center justify-center">
                                            {social.icon}
                                        </p>
                                    </Link>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
