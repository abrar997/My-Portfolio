import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { GiButterflyFlower } from "react-icons/gi";
import { BiDownload, BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

type HeaderProps = {
  menu: {
    id: number;
    title: string;
    to: string;
    className?: string;
    download?: string;
    isDownload?: boolean;
  }[];
};

export default function Header({ menu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setISFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setISFixed(true);
    } else {
      setISFixed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  return (
    <motion.div
      animate={{
        height: isFixed ? 80 : 72,
        backgroundColor: isFixed ? "#222222" : "",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`font-primary border-[#8080804e] ${isFixed ? "fixed inset-x-0 border-b z-50 " : "border-b"} lg:mx-12`}
    >
      <div
        className={`font-secondary text-main lg:px-10 p-4 pb-1 flex justify-between items-center h-full ${
          isFixed ? "lg:py-5" : "lg:py-4"
        }`}
      >
        <Link
          to="first"
          duration={300}
          smooth={true}
          spy={true}
          className="flex text-2xl lg:text-4xl items-start cursor-pointer"
        >
          A
          <GiButterflyFlower className="text-primary lg:text-3xl lg:-ml-0.5" />
        </Link>
        <div className="lg:flex gap-4 w-full items-center justify-center hidden m-auto text-[20px]">
          {menu.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              duration={300}
              translate="yes"
              smooth={true}
              spy={true}
              offset={-130}
              onClick={() => setIsOpen(false)}
              className="capitalize tracking-wide cursor-pointer p-1 nav-item"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <a
          href={"/files/resume.pdf"}
          download={"Abrar Muthana Resume"}
          className="hidden lg:flex items-center gap-1 text-lg border-pink-500 border rounded px-3 py-1.5 hover:bg-pink-600 transition-colors duration-500"
        >
          <span>Resume</span>
          <span>
            <BiDownload className="inline-block ml-1" />
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-main text-2xl"
        >
          {!isOpen ? <BiMenu /> : <CgClose className="text-xl" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid gap-4 lg:hidden lg:text-lg px-2 items-center justify-center text-center pb-8 bg-main"
          >
            {menu.map((item) => (
              <Link
                to={item.to}
                duration={300}
                translate="yes"
                smooth={true}
                spy={true}
                offset={-130}
                onClick={() => setIsOpen(false)}
                className="capitalize tracking-wide cursor-pointer p-1 nav-item px-4"
              >
                {item.title}
              </Link>
            ))}
            <a
              href={"/files/resume.pdf"}
              download={"Abrar Muthana Resume"}
              className="flex items-center gap-1 border-pink-500 hover:bg-pink-600 transition-colors duration-500 border rounded px-3 py-1.5"
            >
              <span>Resume</span>
              <span>
                <BiDownload className="inline-block ml-1" />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
