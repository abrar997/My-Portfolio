import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";

const Card = ({ item, idx }: { item: any; idx: number }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, delay: idx / 10 }}
      viewport={{ once: true }}
      className="grid p-2 h-full lg:p-4 gap-4 rounded border border-gray-500 hover:border-gray-400 transition-all duration-300 bg-main"
    >
      <img
        src={item.url}
        className="rounded rounded-b-none hover:scale-105 transition-all"
        alt=""
      />
      <div className="space-y-2">
        <div>
          <h1 className="text-xl font-primary font-semibold">{item.title}</h1>
          {item.subtitle ? (
            <span className="text-xs text-teal-600">{item.subtitle}</span>
          ) : null}
        </div>
        <h2 className="text-slate-400 text-sm">{item.skillsUsed}</h2>
      </div>
      <div className="flex gap-4 text-black lg:ml-auto pb-4 lg:pb-0">
        <a
          href={item.demo}
          target="_blank"
          className="bg-pink-600 text-white hover:bg-opacity-80 rounded px-4 py-1.5 flex justify-center items-center"
        >
          <MdOutlineOndemandVideo />
        </a>
        {item.github && (
          <a
            href={item.github}
            target="_blank"
            className="bg-teal-600 text-center text-white hover:bg-opacity-80 rounded px-4 py-1  flex items-center justify-center"
          >
            <BsGithub />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
