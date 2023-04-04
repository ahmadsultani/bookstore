import React from "react";

interface AuthButtonProps {
  fill: string;
  onClick: () => void;
}

export default function AuthButton(props: AuthButtonProps) {
  const { fill, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex grow justify-center font-semibold bg-green text-primary border-[1px] hover:bg-[#06b850] transition-all duration-200 ease-in-out rounded-[100px] text-[18px] py-[8px] hover"
    >
      {fill}
    </button>
  );
}
