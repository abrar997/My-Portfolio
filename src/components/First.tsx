import { SocialData } from "../../public/data/data";
import ContactSocial from "./reusable/ContactSocial";

export default function First() {
  return (
    <div
      id="/"
      className="flex bg-[#2a2929d9] flex-col items-start lg:items-center lg:text-center lg:gap-4 gap-1 justify-center text-main lg:h-[450px] lg:py-0 p-4 py-6 mt-4 lg:mt-0"
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

      <div className="mt-4">
        <ContactSocial social={SocialData} isIcon />
      </div>
    </div>
  );
}
