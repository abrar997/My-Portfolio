import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import useHandler from "../app/hooks/useHandler";
import DesktopVersion from "./Header/DesktopVersion";
import MobileVersion from "./Header/MobileVersion";

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
  const { isFixed, isOpen, setIsOpen } = useHandler();

  return (
    <motion.div
      animate={{
        height: isFixed ? 80 : 72,
        backgroundColor: "#222222",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`font-primary border-[#8080804e] ${isFixed ? "fixed inset-x-0 border-b z-50 " : "border-b"} lg:mx-12`}
    >
      <div
        className={`font-secondary text-main lg:px-10 p-4 pb-1 flex justify-between items-center h-full ${
          isFixed ? "lg:py-5" : "lg:py-4"
        }`}
      >
        <DesktopVersion setIsOpen={setIsOpen} menu={menu} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-main text-2xl"
        >
          {!isOpen ? <BiMenu /> : <CgClose className="text-xl" />}
        </button>
      </div>
      <div className="bg-main absolute z-50 inset-x-0 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isOpen && <MobileVersion setIsOpen={setIsOpen} menu={menu} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
