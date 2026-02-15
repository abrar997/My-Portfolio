import { BsTelephone, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function First() {
  return (
    <div
      id="/"
      className="flex bg-[#2a2929d9] flex-col lg:items-center lg:text-center lg:gap-4 gap-1 justify-center text-main lg:h-[450px] lg:py-0 p-4 py-6"
    >
      <h2 className="lg:text-2xl text-[16px] font-main font-primary lg:opacity-90 opacity-80">
        Hello I&#39;m ,
      </h2>
      <div className="font-main font-primary flex flex-col lg:gap-3 lg:items-center text-primary">
        <p className="text-[28px] lg:text-6xl font-bold font-main font-secondary text-primary">
          Abrar Muthana Rakea
        </p>
        <p className="text-lg lg:text-3xl lg:text-center font-bold font-main font-secondary text-teal-500">
          Frontend Developer with Design Passion
        </p>
      </div>

      <div className="grid gap-2 mt-4 lg:text-lg">
        <div className="flex gap-4 text-gray-200 items-center lg:justify-center">
          <a
            href="mailto:abraralrawi997@gmail.com"
            className="border rounded-full lg:p-2 p-1.5 bg-main hover:border-primary"
          >
            <MdEmail size={18} />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=9647831190254`}
            className="border rounded-full lg:p-2 p-1.5 bg-main hover:border-primary"
          >
            <BsTelephone size={16} />
          </a>
          <a
            href="https://github.com/abrar997"
            className="border rounded-full lg:p-2 p-1.5 bg-main hover:border-primary"
          >
            <BsGithub size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
