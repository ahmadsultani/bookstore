import Image from "next/image";

interface InputProps {
  placeholder: string;
  icon: string;
  value: string | undefined;
	type?: "text" | "email" | "number" ;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export default function Input(props: InputProps) {
  const { placeholder, icon, value, onChange, type="text" } = props;
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
				type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
