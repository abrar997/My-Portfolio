import React from "react";
import Title from "./reusable/Title";
import { BsDot } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { TbToolsOff } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";

interface SkillItem {
  id: number;
  name: string;
}

interface FrontendSkills {
  languages: SkillItem[];
  styling: SkillItem[];
  framework: SkillItem[];
  api: SkillItem[];
  library: SkillItem[];
}

interface SkillsProps {
  frontend: FrontendSkills;
  cicd: SkillItem[];
  tools: SkillItem[];
}

const TitleSkill = ({ text, icon }: { text: string; icon: any }) => (
  <div>
    <h1 className="text-xl flex gap-2 items-center border-gray-600 font-primary text-slate-50">
      {icon}
      {text}
    </h1>
  </div>
);

export default function Skills({ frontend, tools, cicd }: SkillsProps) {
  const skillSections = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <CgWebsite className="text-primary text-sm lg:text-lg" />,
      groups: [
        { title: "Programming Languages", items: frontend.languages },
        { title: "Styling", items: frontend.styling },
        { title: "Framework", items: frontend.framework },
        { title: "State & API", items: frontend.api },
        { title: "Libraries", items: frontend.library },
      ],

      animation: { initial: { x: 30 }, animate: { x: 0 } },
    },

    {
      id: "CI/CD",
      title: "CI/CD",
      icon: <GrDeploy className="text-primary text-sm lg:text-lg" />,
      data: cicd,
      animation: { initial: { x: 50 }, animate: { x: 0 } },
    },
    {
      id: "tools",
      title: "Designing Tools",
      icon: <TbToolsOff className="text-primary text-sm lg:text-lg" />,
      data: tools,
      animation: { initial: { x: 50 }, animate: { x: 0 } },
    },
  ];

  return (
    <div
      id="skills"
      className="bg-[#2a2929d9]  grid gap-3 lg:gap-12 rounded lg:shadow-lg lg:py-12 lg:px-12 overflow-hidden p-4 py-6"
    >
      <Title subtitle="what skills i have" title="Skills" />
      <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 lg:items-start overflow-hidden text-text">
        {skillSections.map((section, idx) => (
          <div
            className={`${section.id === "frontend" ? "lg:col-span-2" : "col-span-1"} `}
            key={idx}
          >
            <TitleSkill icon={section.icon} text={section.title} />

            {section.id === "frontend" ? (
              <div className="grid gap-3 col-span-2 w-full border rounded-tl-none py-3 px-3 lg:min-h-[230px] border-t-0 rounded-xl border-teal-500">
                {(section as any).groups.map((group: any, idx: any) => (
                  <div key={idx}>
                    <h3 className="text-sm font-semibold text-teal-400 mb-1">
                      {group.title}
                    </h3>

                    <ul className="grid grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-1 text-slate-300">
                      {group.items.map((item: any, idx: any) => (
                        <li key={idx} className="flex items-center gap-1">
                          <BsDot className="text-teal-600" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="flex flex-col gap-1 col-span-1 text-slate-300 border rounded-tl-none py-3 px-3 lg:min-h-[230px] border-t-0 rounded-xl border-teal-500">
                {(section as any).data.map((item: any) => (
                  <li key={item.id} className="flex items-center gap-1">
                    <BsDot className="text-teal-600" />
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
