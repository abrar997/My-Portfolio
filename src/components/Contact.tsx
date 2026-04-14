import Title from "./reusable/Title";
import { Bounce, ToastContainer } from "react-toastify";
import Form from "./Contact/Form";
import Icon from "./reusable/Icon";
import { SocialData } from "../../public/data/data";
import ContactSocial from "./reusable/ContactSocial";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  return (
    <div
      id="contact"
      className="grid gap-3 lg:gap-12 lg:pb-16 p-4 py-6 bg-[#2a2929d9] lg:p-12"
    >
      <Title subtitle="send me a message" title="Contact us" />
      <div className="grid lg:grid-cols-2 lg:gap-12 gap-3">
        <div className="grid lg:gap-8 gap-4 lg:py-16">
          <h1 className="text-text flex gap-3">
            <span className="hidden lg:flex">
              <Icon size="lg:text-5xl" isTeal />
            </span>
            Thank you for visiting my portfolio! If you have any questions,
            project inquiries , or just want to say hello , feel free to reach
            out . I&#39;m always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision .
          </h1>

          <div className="flex gap-3">
            <span className="hidden lg:flex">
              <Icon size="lg:text-5xl" isTeal />
            </span>
            <div className="flex flex-col gap-2 tracking-wide">
              <ContactSocial social={SocialData} />
              <p>
                <span className="text-text capitalize pr-1"> Location : </span>
                <span className="text-pink-300">Iraq</span>
              </p>
            </div>
          </div>
        </div>
        {/* input form */}
        <Form />
      </div>
      <ToastContainer
        progressStyle={{ backgroundColor: "#eee" }}
        transition={Bounce}
        theme="dark"
        bodyClassName={() =>
          "rounded-lg text-teal-300 lg:w-[450px] p-2 flex items-center justify-center"
        }
        className="bg-[#222222]"
      />
    </div>
  );
}
