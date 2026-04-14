type InputProps = {
  placeholder?: string;
  label?: string;
  value?: any;
  onChange?: (e: any) => void;
  isMessage?: boolean;
  id?: string;
  type?: string;
};

const InputForm = ({
  placeholder,
  label,
  value,
  onChange,
  isMessage,
  id,
  type,
}: InputProps) => {
  return (
    <div className="grid w-full gap-2">
      <label htmlFor={id}>{label}</label>
      {isMessage ? (
        <textarea
          onChange={onChange}
          rows={4}
          value={value}
          placeholder={placeholder}
          className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
          required
        />
      )}
    </div>
  );
};

export default InputForm;
