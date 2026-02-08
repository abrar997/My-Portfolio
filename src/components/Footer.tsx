import React from "react";
import { BsGithub, BsTelephone } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const date = new Date();
  return (
    <div className="bg-[#222222] lg:py-6 p-4 lg:gap-4 gap-3 grid">
      <div className="text-sm lg:text-lg lg:text-center lg:justify-center grid lg:items-center">
        <p className="lg:text-center font-primary -ml-1 lg:ml-0">
          @ {date.getFullYear()}{" "}
          <span className="text-primary"> Abrar Muthana R</span>.
        </p>
      </div>
      <div className="flex gap-4 text-gray-200 items-center lg:justify-center">
        <a
          href="mailto:abraralrawi997@gmail.com"
          className="border rounded-full p-1 hover:border-primary"
        >
          <MdEmail size={18} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=9647831190254`}
          className="border rounded-full p-1 hover:border-primary"
        >
          <BsTelephone size={16} />
        </a>
        <a
          href="https://github.com/abrar997"
          className="border rounded-full p-1 hover:border-primary"
        >
          <BsGithub size={18} />
        </a>
      </div>
    </div>
  );
}
