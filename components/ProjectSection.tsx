'use client'
import { project_data } from "@/libs/constant";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectSection = () => {
    // Variants for the section
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    // Variants for the heading
    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Variants for the project cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            className="py-20 bg-black text-white"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex z-[1] flex-col h-screen items-center justify-center">
                <motion.h1
                    className="text-4xl font-semibold text-transparent mt-[50px] md:mt-[20px] bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 mb-10"
                    variants={headingVariants}
                >
                    My Projects
                </motion.h1>
                <motion.div
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5"
                    variants={sectionVariants}
                >
                    {project_data.map((project, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <ProjectCard
                                srcImg={project.image}
                                demoUrl={project.linkDemo}
                                srcGithub={project.linkGithub}
                                title={project.title}
                                description={project.description}
                                date={project.date}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectSection;
