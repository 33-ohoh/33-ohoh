interface inputFormProps {
  children?: React.ReactNode;
  labelId?: string;
  placeholder?: string;
  inputType?: string;
  inputName?: string;
  value?: string;
  className?: string;
}

const InputForm = ({
  children,
  labelId,
  placeholder,
  inputName,
  value,
  className,
}: inputFormProps) => {
  return (
    <div className="flex flex-col mb-[30px] w-full">
      <label
        htmlFor={labelId}
        className="mb-[10px] text-neutral80 font-semibold"
      >
        {children}
      </label>
      <input
        type="text"
        id={labelId}
        name={inputName}
        value={value}
        placeholder={placeholder}
        className={`border rounded-radius15 h-[60px] py-[15px] pl-[20px] border-neutral50 text-neutral50 ${className}`}
      />
    </div>
  );
};

export default InputForm;
