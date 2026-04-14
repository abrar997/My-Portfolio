import React from "react";
import Title from "./reusable/Title";
import { BsDash, BsDot, BsFlower3, BsLink } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

interface ExperienceData {
  data: {
    id: number;
    for: string;
    city: string;
    job: string;
    type: string;
    date: string;
    responsibilities: { id: number; item: string }[];
    link?: string;
  }[];
}

export default function Experience(props: ExperienceData) {
  return (
    <div
      id="experience"
      className="grid gap-3 lg:gap-12 bg-[#2a2929d9] lg:p-12 p-4 py-6"
    >
      <Title subtitle="my journey as a frontend developer" title="Experience" />
      <div className="grid lg:grid-cols-3 lg:items-start gap-4 lg:gap-6 lg:px-4 overflow-hidden">
        {props.data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 90 }}
            whileInView={{ y: 0 }}
            transition={{ duration: i * 0.3 }}
            viewport={{ once: true }}
            className="border border-gray-500 flex flex-col gap-2 bg-main lg:min-h-[350px] rounded p-4 text-opacity-85 text-text"
          >
            <h1 className="flex gap-1 border-b pb-2 border-b-gray-600 tracking-wide lg:text-xl text-main font-primary items-center">
              <BsFlower3 className="text-primary" />
              <span>{item.for}</span>,<span>{item.city}</span>
            </h1>
            <div className="flex gap-1 capitalize text-sm items-center">
              <FaLeaf className="text-primary" />
              <span>{item.job}</span> - <span>{item.type}</span>
            </div>
            <p className="text-sm flex items-center gap-1">
              <FaLeaf className="text-primary" />( {item.date} )
            </p>
            <div className="grid items-start">
              <h1 className="flex items-center gap-1 text-[16px] text-main">
                <BsDash className="text-primary" /> Responsibilities :
              </h1>
              <div className="grid gap-2">
                {item.responsibilities.map((item) => (
                  <p
                    key={item.id}
                    className="flex justify-between items-start gap-1"
                  >
                    <BsDot className="text-primary text-lg mt-1 col-span-1" />
                    <span className="col-span-5 w-full">{item.item}</span>
                  </p>
                ))}
              </div>
            </div>

            {item.link && (
              <a href={item.link} className="flex items-center gap-1 text-main">
                <BsLink className="text-primary" /> Link :
                <span className="text-teal-600 hover:opacity-80">
                  {item.for}
                </span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
