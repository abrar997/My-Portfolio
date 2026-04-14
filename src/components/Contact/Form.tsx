import useHandler from "@/app/hooks/useHandler";
import { formInputs } from "../../../public/data/data";
import InputForm from "./InputForm";

const Form = () => {
  const { onSubmit, userData, setUserData } = useHandler();
  return (
    <form
      onSubmit={onSubmit}
      className="border lg:p-4 px-2 py-4 flex flex-col gap-5 shadow rounded border-gray-500"
    >
      {formInputs.map((input, idx) => {
        if (input.key === "message") {
          return (
            <InputForm
              key={idx}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              value={userData[input.key as keyof typeof userData]}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [input.key]: e.target.value,
                }))
              }
              isMessage
            />
          );
        } else {
          return (
            <InputForm
              key={idx}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              value={userData[input.key as keyof typeof userData]}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [input.key]: e.target.value,
                }))
              }
            />
          );
        }
      })}
      <button className="bg-teal-600 text-white hover:border border border-slate-600 gap-1 col-span-2 rounded px-4 py-2 ml-auto hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
        Send
      </button>
    </form>
  );
};

export default Form;
