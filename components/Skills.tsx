import Image from 'next/image';
import { Frontend_skill, Skill_data, android_skill, ml_skills, tools } from "@/libs/constant";

const SkillData = ({ src, width, height, alt }: any) => (
    <div className="flex flex-col items-center">
        <Image src={src} width={width} height={height} alt={alt} className="rounded-md" />
        <p className="mt-2 text-white text-center text-sm">{alt}</p>
    </div>
);

const Skills = () => {
    const skillsCategories = [
        { title: "General Skills", data: Skill_data },
        { title: "Frontend Skills", data: Frontend_skill },
        { title: "Tools", data: tools },
        { title: "Android Skills", data: android_skill },
        { title: "Machine Learning Skills", data: ml_skills },
    ];

    return (
        <section
            id='skills'
            className='flex flex-col items-center bg-transparent justify-center gap-6 py-20 px-4'
            style={{ transform: "scale(0.9)" }}
        >
            <h1 className="font-bold text-4xl lg:text-6xl mt-1 text-white text-center">Skills</h1>
            {skillsCategories.map((category, index) => (
                <div key={index} className="flex flex-col items-center mt-6">
                    <h2 className="font-semibold text-2xl text-white">{category.title}</h2>
                    <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
                        {category.data.map((skill, index) => (
                            <SkillData key={index} src={skill.Image} width={60} height={60} alt={skill.skill_name} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
