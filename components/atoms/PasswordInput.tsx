import Image from "next/image";
import { useState } from "react";

interface PasswordInputProps {
  placeholder: string;
  icon: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export default function Input(props: PasswordInputProps) {
  const { placeholder, icon, value, onChange } = props;

  const [isShowing, setIsShowing] = useState(false);

  const handleShowPassword = () => {
    console.log("show password");
    setIsShowing(!isShowing);
  };

  return (
    <div className="bg-white flex  gap-[10px] p-[10px] rounded-[30px] w-full shadow-sm border-[1px] text-[15px] border-slate-400 ">
      <Image
        className="object-contain aspect-[4/3]"
        src={`/assets/icons/${icon}`}
        width={35}
        height={35}
        alt={icon}
      />
      <input
        className="bg-transparent focus:outline-none w-full"
        type={isShowing ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button onClick={handleShowPassword}>
        <Image
          className="object-contain aspect-[4/3]"
          src={
            isShowing ? "/assets/icons/eye-slash.svg" : "/assets/icons/eye.svg"
          }
          width={35}
          height={35}
          alt="show/hide password"
        />
      </button>
    </div>
  );
}
