import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BiDownload } from "react-icons/bi";

const MobileVersion = ({
  setIsOpen,
  menu,
}: {
  setIsOpen: (isOpen: boolean) => void;
  menu: any[];
}) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0.7 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col gap-4 lg:hidden lg:text-lg px-2 items-center justify-center text-center pb-8"
    >
      {menu.map((item, idx) => (
        <Link
          key={idx}
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
        className="flex items-center gap-1 border-pink-500 hover:bg-pink-600 transition-colors duration-300 border rounded px-3 py-1.5"
      >
        <span>Resume</span>
        <span>
          <BiDownload className="inline-block ml-1" />
        </span>
      </a>
    </motion.div>
  );
};

export default MobileVersion;
