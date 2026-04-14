import { BiDownload } from "react-icons/bi";
import { Link } from "react-scroll";
import Icon from "../reusable/Icon";

const DesktopVersion = ({
  menu,
  setIsOpen,
}: {
  menu: any;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      <Link
        to="first"
        duration={300}
        smooth={true}
        spy={true}
        className="flex text-2xl lg:text-4xl items-start cursor-pointer"
      >
        A
        <Icon size="lg:text-3xl" />
      </Link>
      <div className="lg:flex gap-4 w-full items-center justify-center hidden m-auto text-[20px]">
        {menu.map((item: any) => (
          <Link
            key={item.id}
            to={item.to}
            duration={300}
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
        className="hidden lg:flex items-center gap-1 text-lg border-pink-500 border rounded px-3 py-1.5 hover:border-teal-600 transition-colors hover:text-teal-300"
      >
        <span>Resume</span>
        <span>
          <BiDownload className="inline-block ml-1" />
        </span>
      </a>
    </>
  );
};

export default DesktopVersion;
