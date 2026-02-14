"use client";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import DataComponents from "../components/data/data";

export default function Home() {
  return (
    <div className="bg-main text-main font-sans">
      <Header menu={DataComponents.menu} />
      <div
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: "6px",
        }}
        className="lg:p-12 grid lg:gap-10 gap-10 p-4"
      >
        <First />
        <Skills
          frontend={DataComponents.skillsData.frontend}
          tools={DataComponents.skillsData.tools}
          language={DataComponents.skillsData.language}
          cicd={DataComponents.skillsData.cicd}
        />
        <Experience data={DataComponents.experienceData} />
        <Projects data={DataComponents.projects} />
        <Contact ContactDataProps={DataComponents.contact} />
      </div>
      <Footer />
    </div>
  );
}
