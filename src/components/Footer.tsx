import React from "react";
import { BsGithub, BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const date = new Date();
  return (
    <div className="lg:py-6 p-4 lg:gap-4 gap-3 grid">
      <div className="text-sm lg:text-lg text-center justify-center grid items-center">
        <p className="lg:text-center font-primary -ml-1 lg:ml-0">
          @ {date.getFullYear()}{" "}
          <span className="text-primary"> Abrar Muthana R</span>.
        </p>
      </div>
      <div className="flex gap-4 text-gray-200 items-center justify-center">
        <a
          href="mailto:abraralrawi997@gmail.com"
          className="border rounded-full lg:p-2 p-1 bg-main hover:border-primary"
        >
          <MdEmail size={18} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=9647831190254`}
          className="border rounded-full lg:p-2 p-1 bg-main hover:border-primary"
        >
          <BsTelephone size={16} />
        </a>
        <a
          href="https://github.com/abrar997"
          className="border rounded-full lg:p-2 p-1 bg-main hover:border-primary"
        >
          <BsGithub size={18} />
        </a>
      </div>
    </div>
  );
}
