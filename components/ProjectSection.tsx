"use client";

import { project_data } from "@/libs/constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCalendar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      className="col-span-full lg:col-span-2 bg-neutral-900/50 border border-neutral-700 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaGithub className="text-orange-400 text-xl" />
        <h3 className="text-lg font-bold text-white">Projects</h3>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar Project List */}
        <div className="col-span-1 flex flex-col space-y-3 text-sm">
          {project_data.map((proj, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left transition-colors truncate ${
                activeIndex === index
                  ? "text-orange-400 border-l-2 border-orange-400 pl-2"
                  : "text-gray-400 hover:text-white pl-2"
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="col-span-3">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={project_data[activeIndex].image}
              alt={project_data[activeIndex].title}
              width={60}
              height={40}
              className="rounded-md border border-neutral-600 object-cover"
            />
            <h4 className="text-white font-semibold text-base">
              {project_data[activeIndex].title}
            </h4>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
            <FaCalendar className="text-xs" />
            {project_data[activeIndex].date}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project_data[activeIndex].description}
          </p>

          {/* Links */}
          <div className="flex gap-3">
            {project_data[activeIndex].linkDemo && (
              <Link
                href={project_data[activeIndex].linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm"
              >
                <FaExternalLinkAlt className="text-xs" /> Demo
              </Link>
            )}
            {project_data[activeIndex].linkGithub && (
              <Link
                href={project_data[activeIndex].linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm"
              >
                <FaGithub className="text-xs" /> Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
