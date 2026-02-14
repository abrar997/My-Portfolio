import { motion, AnimatePresence } from "framer-motion";
import { BsTelephone, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function First() {
  return (
    <div
      id="/"
      className="flex lg:bg-[#2a2929d9] flex-col lg:items-center lg:text-center lg:gap-4 gap-1 justify-center text-main lg:h-[450px] pt-6 lg:py-0"
    >
      <h2 className="lg:text-2xl text-lg font-main font-primary">
        Hello I&#39;m,
      </h2>
      <div className="font-main font-primary flex flex-col gap-2 items-center text-primary overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            initial={{ y: "-200px" }}
            animate={{ y: 0 }}
            className="text-[28px] lg:text-6xl font-bold font-main font-secondary text-primary flex overflow-hidden col-span-5"
            viewport={{ once: true }}
          >
            Abrar Muthana Rakea
          </motion.p>
          <motion.p
            initial={{ y: "-200px" }}
            animate={{ y: 0 }}
            exit={{ y: "200px" }}
            className="text-[28px] lg:text-3xl text-center font-bold font-main font-secondary text-teal-500 flex overflow-hidden col-span-5"
          >
            Frontend Developer with Design Passion
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="grid gap-2 mt-4 lg:text-lg">
        <div className="flex gap-4 text-gray-200 items-center lg:justify-center">
          <a
            href="mailto:abraralrawi997@gmail.com"
            className="border rounded-full p-2 bg-main hover:border-primary"
          >
            <MdEmail size={18} />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=9647831190254`}
            className="border rounded-full p-2 bg-main hover:border-primary"
          >
            <BsTelephone size={16} />
          </a>
          <a
            href="https://github.com/abrar997"
            className="border rounded-full p-2 bg-main hover:border-primary"
          >
            <BsGithub size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
