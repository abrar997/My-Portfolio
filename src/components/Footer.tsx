import { SocialData } from "../../public/data/data";
import ContactSocial from "./reusable/ContactSocial";

export default function Footer() {
  const date = new Date();
  return (
    <div className="lg:py-6 p-4 lg:gap-4 gap-3 grid">
      <div className="text-sm lg:text-lg text-center justify-center grid items-center">
        <p className="lg:text-center font-primary">
          <span className="text-primary"> Abrar Muthana R</span> @{" "}
          {date.getFullYear()}
        </p>
      </div>

      <div className="m-auto">
        <ContactSocial social={SocialData} isIcon />
      </div>
    </div>
  );
}
