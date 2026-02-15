import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "./reusable/Title";
import { GiButterflyFlower } from "react-icons/gi";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Social {
  id: number;
  title: string;
  url: string;
  text: string;
}

interface ContactDataProps {
  social: Social[];
}

interface ContactProps {
  ContactDataProps: ContactDataProps;
}

export default function Contact({ ContactDataProps }: ContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/email", {
        name,
        phone,
        email,
        message,
      });
      setIsSend(true);
      toast("We will contact you within 48 hours", {
        className: "bg-transparent",
      });
    } catch (error) {
      console.log("there is issue with axios post data");
    }
  };

  useEffect(() => {
    if (isSend) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setIsSend(false);
    }
  }, [isSend]);

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
              <GiButterflyFlower className="lg:text-5xl text-primary" />
            </span>
            Thank you for visiting my portfolio! If you have any questions,
            project inquiries, or just want to say hello, feel free to reach
            out.I&#39;m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </h1>
          <div className="flex gap-3">
            <span className="hidden lg:flex">
              <GiButterflyFlower className="lg:text-5xl text-primary" />
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              {ContactDataProps.social.map((item) => (
                <li key={item.id} className="grid">
                  {item.title === "email" && (
                    <a
                      href={`mailto:${item.url}`}
                      target="_blank"
                      className="flex gap-1"
                    >
                      <span className="text-text capitalize">{item.title}</span>
                      <span>:</span>
                      <span>{item.text}</span>
                    </a>
                  )}
                  {item.title === "phone" && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=${item.url}`}
                      target="_blank"
                      className="flex gap-1"
                    >
                      <span className="text-text capitalize">{item.title}</span>
                      <span>:</span>
                      <span>{item.text}</span>
                    </a>
                  )}

                  {item.title === "github" && (
                    <a
                      href={`${item.url}`}
                      target="_blank"
                      className="flex gap-1"
                    >
                      <span className="text-text capitalize">{item.title}</span>
                      <span>:</span>
                      <span>{item.text}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="border lg:p-4 px-2 py-4 flex flex-col gap-5 shadow rounded border-gray-500"
        >
          <div className="grid w-full">
            <label htmlFor={name}>Name</label>
            <input
              type="text"
              name={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
              value={name}
            />
          </div>
          <div className="grid w-full">
            <label htmlFor={email}>Email</label>

            <input
              type="email"
              name={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="abraralrawi997@gmail.com"
              value={email}
              className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
            />
          </div>
          <div className="grid w-full">
            <label htmlFor={phone}>Phone</label>

            <input
              type="phone"
              name={phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="123456789"
              className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
            />
          </div>
          <div className="grid w-full">
            <label htmlFor={message}>Message</label>
            <textarea
              name={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              value={message}
              placeholder="hello abrar '-' "
              className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
            />
          </div>
          <button className="bg-teal-600 text-white  hover:border border border-slate-600 gap-1 col-span-2 rounded px-4 py-2 ml-auto hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
            Send
            <span>
              <GiButterflyFlower className="lg:text-xl" />
            </span>
          </button>
        </form>
      </div>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          progressStyle={{ backgroundColor: "#eee" }}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          theme="dark"
          closeButton={true}
          bodyClassName={() =>
            "rounded-lg text-teal-300 lg:w-[450px] p-2 flex items-center justify-center"
          }
          className="bg-[#222222]"
        />
      </div>
    </div>
  );
}
