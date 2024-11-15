import { About } from "@/components/about";
import { Metadata } from "next";


export const metadata: Metadata = {
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
        <div>
            <About />
        </div>
    );
};

export default AboutPage;
