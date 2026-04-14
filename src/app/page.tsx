"use client";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Project/Projects";
import Skills from "@/components/Skills";
import { DataComponents } from "../../public/data/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <p className="opacity-0">Loading</p>;

  return (
    <div
      className="bg-main text-main font-sans lg:pt-3 overflow-hidden"
      style={{
        backgroundSize: "6px",
        backgroundImage: "url('/assets/bg.png')",
      }}
    >
      <Header menu={DataComponents.menu} />
      <div className="lg:px-12 lg:pt-6 grid lg:gap-10 gap-6 p-2">
        <First />
        <Skills
          frontend={DataComponents.skillsData.frontend}
          tools={DataComponents.skillsData.tools}
          cicd={DataComponents.skillsData.cicd}
        />
        <Experience data={DataComponents.experienceData} />
        <Projects data={DataComponents.projects} />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
