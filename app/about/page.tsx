'use client'
import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Skills from '@/components/Skills';
import AboutSection from '@/components/AboutSection';
import { FaArrowDownLong } from "react-icons/fa6";

const AboutPage: React.FC = () => {
    return (
        <>
            <AboutSection />
            <div className='flex justify-center items-center h-5 z-[1] cursor-pointer'>
                <ScrollLink to="skills" smooth={true} duration={1000} className='z-[1] -mt-8'>
                    <FaArrowDownLong className='animate-bounce text-4xl' />
                </ScrollLink>
            </div>
            <Element name="skills" className='lg:min-h-screen'>
                <Skills />
            </Element>
        </>
    );
};

export default AboutPage;
