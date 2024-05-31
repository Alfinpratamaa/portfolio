import { Frontend_skill, Skill_data, android_skill, ml_skills, tools } from "@/libs/constant"
import SkillData from "@/provider/SkillData"

const Skills = () => {
    return (
        <section
            id='skills'
            className='flex flex-col items-center bg-transparent justify-center gap-3 h-full relative overflow-hidden py-20 '
            style={{ transform: "scale(0.9" }}

        >
            <h1 className="font-bold text-6xl  mt-10 text-white">Skills</h1>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {/* SkillData */}
                {Skill_data.map((skill, index) => (
                    <SkillData src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {/* SkillData */}
                {Frontend_skill.map((skill, index) => (
                    <SkillData src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {/* SkillData */}
                {tools.map((skill, index) => (
                    <SkillData src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {/* SkillData */}
                {android_skill.map((skill, index) => (
                    <SkillData src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {/* SkillData */}
                {ml_skills.map((skill, index) => (
                    <SkillData src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Skills