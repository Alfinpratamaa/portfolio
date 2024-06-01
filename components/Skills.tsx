'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Frontend_skill, Skill_data, android_skill, ml_skills, tools } from "@/libs/constant";

const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const SkillData = ({ src, width, height, alt }: any) => (
    <motion.div
        className="flex flex-col items-center"
        variants={skillVariants}
    >
        <Image src={src} width={width} height={height} alt={alt} className="rounded-md" />
        <p className="mt-2 text-white text-center text-sm">{alt}</p>
    </motion.div>
);

const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Interval waktu antar anak
        },
    },
};

const Skills = () => {
    const skillsCategories = [
        { title: "General Skills", data: Skill_data },
        { title: "Frontend Skills", data: Frontend_skill },
        { title: "Tools", data: tools },
        { title: "Android Skills", data: android_skill },
        { title: "Aditional Skills", data: ml_skills },
    ];

    return (
        <motion.section
            id='skills'
            className='flex flex-col items-center bg-transparent justify-center gap-6 py-20 px-4'
            style={{ transform: "scale(0.9)" }}
            initial="hidden"
            animate="visible"
            variants={categoryVariants}
        >
            <motion.h1
                className="font-bold text-4xl lg:text-6xl mt-1 text-white text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Skills
            </motion.h1>
            {skillsCategories.map((category, index) => (
                <div key={index} className="flex flex-col items-center mt-6">
                    <motion.h2
                        className="font-semibold text-2xl text-white"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {category.title}
                    </motion.h2>
                    <motion.div
                        className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
                        variants={categoryVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {category.data.map((skill, skillIndex) => (
                            <SkillData key={skillIndex} src={skill.Image} width={60} height={60} alt={skill.skill_name} />
                        ))}
                    </motion.div>
                </div>
            ))}
        </motion.section>
    );
};

export default Skills;
