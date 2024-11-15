'use client'
import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Skills from '@/components/Skills';
import AboutSection from '@/components/AboutSection';
import { FaArrowDownLong } from "react-icons/fa6";

export const metadata = {
    title: 'About | evrea',
    description: 'Frontendwith 1+ years of expertise. Junior Software Engineer. Specializing web apps, UX, and JavaScript technologies.',
    keywords: [
        'Developer',
        'Portfolio',
        'Developer Portflio',
        'Muhamad Alfin Pratama',
        'Next.js',
        'React',
        'ReactNative',
        'Android',
        'nodejs',
        'alfin',
        'alfin pratama',
        'muhamad alfin',
        'muhamad alfin pratama',
        'muhammad alfin pratama',
        'frontend web',
        'Frontend Developer',
        'Front-end Developer',
        'Front End Developer',
        'Frontend Engineer',
        'Front-end Engineer',
        'Front End Engineer',
        'Muhamad Alfin',
        'Alfin Pratama',
        'Muhamad',
        'Alfin',
        'Pratama',
        'evrea',
    ],
}

const AboutPage: React.FC = () => {
    return (
        <main className='bg-black'>
            <AboutSection />
            <div className='flex justify-center items-center h-5 z-[1] cursor-pointer'>
                <ScrollLink to="skills" smooth={true} duration={1000} className='z-[1] -mt-8'>
                    <FaArrowDownLong className='animate-bounce text-4xl text-white' />
                </ScrollLink>
            </div>
            <Element name="skills" className='lg:min-h-screen h-screen'>
                <Skills />
            </Element>
        </main>
    );
};

export default AboutPage;
