import { motion } from "framer-motion";
import Icon from "./Icon";

interface TextProps {
  subtitle?: string;
  title?: string;
  isGallery?: true;
}

export default function Title({ title, subtitle, isGallery }: TextProps) {
  return (
    <motion.div
      initial={{ y: -40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="grid lg:items-center lg:justify-center lg:text-center gap-1"
    >
      <h1 className="lg:text-4xl text-3xl flex text-primary font-semibold font-primary gap-1 lg:justify-center">
        {title}
        <Icon size="lg:text-xl" />
      </h1>
      <h3 className="text-text text-sm">{subtitle} .</h3>
      {isGallery && (
        <p className="text-gray-500 lg:text-sm text-[10px]">
          <span className="text-primary">!!</span> If Babylon.js is among the
          libraries used in project, it means the project needs a few extra
          seconds to load.The result is worth your wait :)
        </p>
      )}
    </motion.div>
  );
}
