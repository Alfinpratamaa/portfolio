"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Frontend_skill, Backend_Skill, tools } from "@/libs/constant";

const categories = [
  {
    title: "Frontend",
    data: Frontend_skill,
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Backend",
    data: Backend_Skill,
    color: "from-blue-500/20 to-purple-500/20",
  },
  { title: "Tools", data: tools, color: "from-orange-500/20 to-red-500/20" },
];

const Skills = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Technologies and tools I work with
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className={`
                            relative overflow-hidden
                            bg-gradient-to-br ${cat.color}
                            backdrop-blur-xl 
                            border border-white/10
                            rounded-3xl p-8
                            shadow-2xl shadow-black/20
                            hover:shadow-3xl hover:shadow-black/30
                            transition-all duration-300
                        `}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <div className="w-8 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {cat.data.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.1 + idx * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="group"
                  >
                    <div
                      className="
                                            flex flex-col items-center text-center
                                            p-3 rounded-2xl
                                            
                                            transition-all duration-300
                                            cursor-pointer
                                        "
                    >
                      <div
                        className="
                                                relative w-12 h-12 mb-3
                                                flex items-center justify-center
                                                bg-white/10 rounded-xl
                                                group-hover:bg-white/20
                                                transition-all duration-300
                                            "
                      >
                        <Image
                          src={skill.Image}
                          width={32}
                          height={32}
                          alt={skill.skill_name}
                          className="object-contain filter group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p
                        className="
                                                text-xs font-medium text-gray-300 
                                                group-hover:text-white
                                                transition-colors duration-300
                                                leading-tight
                                            "
                      >
                        {skill.skill_name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Count */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center">
                  {cat.data.length} skills
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
