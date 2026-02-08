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
      className={`font-primary  border-[#8080804e] ${
        isFixed
          ? "fixed top-0 inset-x-0 bg-[#222222] border-b z-50 transition-all duration-300"
          : "border-b"
      }`}
    >
      <div
        className={`font-secondary  text-main lg:px-12 ${
          isFixed ? "lg:py-5" : "lg:py-4"
        }  p-4 pb-1 flex justify-between items-center`}
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
        <div className="lg:flex gap-3 hidden lg:text-lg">
          {menu.map((item) => (
            <div key={item.id}>
              <Link
                to={item.to}
                duration={300}
                smooth={true}
                spy={true}
                offset={-150}
                className="capitalize tracking-wide cursor-pointer p-1.5 nav-item"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
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
            className="grid gap-3 lg:hidden lg:text-lg px-2 items-center justify-center text-center pb-4"
          >
            {menu.map((item) => (
              <div key={item.id}>
                {item.download ? (
                  <a
                    href={item.to}
                    download={item.download}
                    className={item.className}
                  >
                    {item.title} <BiDownload className="inline-block ml-1" />
                  </a>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
