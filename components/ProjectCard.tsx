'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    srcImg: string;
    demoUrl: string;
    srcGithub: string;
    title: string;
    description: string;
    date: string;
}

const ProjectCard = ({
    srcImg,
    demoUrl,
    srcGithub,
    title,
    description,
    date
}: ProjectCardProps) => {

    // Variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    // Variants for the image
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    // Variants for the text
    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg z-[1] text-white max-w-md mx-auto flex flex-col justify-between h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className='mb-5' variants={containerVariants}>
                <motion.div className="relative w-full h-56" variants={imageVariants}>
                    <Image src={srcImg} alt={title} layout="fill" objectFit="cover" className="rounded-lg cursor-pointer object-contain hover:scale-105 transition-all duration-500" />
                </motion.div>
                <motion.div className="flex justify-between items-center mt-4" variants={textVariants}>
                    <span className="text-sm text-gray-400">{date}</span>
                </motion.div>
                <motion.h3 className="mt-2 text-xl font-semibold text-white" variants={textVariants}>{title}</motion.h3>
                <motion.p className="mt-2 text-gray-300" variants={textVariants}>{description}</motion.p>
            </motion.div>
            <motion.div className="flex justify-center items-center gap-4 mt-auto" variants={textVariants}>
                <Link href={srcGithub}>
                    <div className="w-6 h-6 rounded-full">
                        <FaGithub className='w-full h-full' />
                    </div>
                </Link>
                <Link href={demoUrl}>
                    <div className="w-6 h-6 rounded-full">
                        <FaLink className='w-full h-full' />
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
