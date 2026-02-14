import React from "react";
import Title from "./reusable/Title";
import { motion } from "framer-motion";

interface ProjectsData {
  data: {
    id: number;
    title: string;
    url: string;
    skillsUsed: string;
    github?: string;
    demo: string;
  }[];
}

export default function Projects(props: ProjectsData) {
  return (
    <div
      id="projects"
      className="grid gap-3 lg:gap-12 lg:bg-[#2a2929d9] lg:p-12"
    >
      <Title subtitle="welcome in my gallery" title="Projects" isGallery />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-4 lg:px-4">
        {props.data.map((item, i) => (
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: i / 10 }}
            viewport={{ once: true }}
            key={item.id}
            className="grid p-2 lg:p-4 gap-4 rounded border border-gray-500 hover:border-gray-400 transition-all duration-300 bg-main"
          >
            <img src={item.url} className="rounded rounded-b-none" alt="" />
            <div>
              <h1 className="text-xl font-primary font-semibold">
                {item.title}
              </h1>
              <h2 className="text-text text-sm">{item.skillsUsed}</h2>
            </div>
            <div className="flex gap-4 text-black items-end">
              <a
                href={item.demo}
                target="_blank"
                className="bg-pink-600 text-white hover:bg-opacity-80 rounded px-4 py-1 flex items-center"
              >
                Demo
              </a>
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  className="bg-teal-600 text-white hover:bg-opacity-80 rounded px-4 py-1"
                >
                  Github
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
