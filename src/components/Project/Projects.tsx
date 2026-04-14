import Title from "../reusable/Title";
import Card from "./Card";

interface ProjectsData {
  data: {
    title: string;
    subtitle?: string;
    url: string;
    skillsUsed: string;
    github?: string;
    demo: string;
  }[];
}

export default function Projects(data: ProjectsData) {
  return (
    <div
      id="projects"
      className="grid gap-3 lg:gap-12 bg-[#2a2929d9] lg:p-12 p-4 py-6"
    >
      <Title subtitle="welcome in my gallery" title="Projects" isGallery />
      <div className="grid lg:grid-cols-3 items-start md:grid-cols-2 lg:gap-4 gap-4 lg:px-4">
        {data.data.map((item, idx) => (
          <Card item={item} idx={idx} key={idx} />
        ))}
      </div>
    </div>
  );
}
