import React from 'react';
import Skills from '@/components/Skills';
import AboutSection from '@/components/AboutSection';


const AboutPage: React.FC = () => {
    return (
        <>
            <AboutSection />
            <div className=' lg:min-h-screen  '>
                <Skills />
            </div>
        </>
    );
};

export default AboutPage;
