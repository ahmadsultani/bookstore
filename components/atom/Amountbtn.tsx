import React from "react";
import Image from "next/image";
import { useState } from "react";

interface AmountbtnProps {
  amount: number;
  isActive: boolean;
  index: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const shadow = "shadow-[0_3px_10px_3px_rgba(0,0,0,0.9)]";
export default function Amountbtn(props: AmountbtnProps) {
  const { amount, isActive, setActiveIndex, setAmount, index  } = props;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isActive) {
      setActiveIndex(index);
      setAmount(amount);
    } else {
      setActiveIndex(-1);
      setAmount(0);
    }
  }

  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (!isActive) {
      setActiveIndex(index);
      setAmount(amount);
    } else {
      setActiveIndex(-1);
      setAmount(0);
    }
  }

  return (
    <button
      className={`p-[5px] overflow-hidden rounded-lg flex flex-col ${shadow} gap-[10px] w-[100px] h-[100px] border-[2px] justify-center items-center hover:  duration-[200ms] 
      ${isActive ? "border-darkgreen border-[3px] bg-[rgba(255,255,255,0.6)] " : "bg-white "}`}
      onClick={handleClick}
    >
      <div className="flex w-[100%] justify-end">
        <input type="checkbox" className="accent-green" hidden checked={isActive} onChange={handleChange} />
      </div>
      <Image
        src={"/assets/icons/coin.svg"}
        alt=""
        width={100}
        height={100}
        className="h-[40px] w-[40px]"
      />
      <h1>IDR {new Intl.NumberFormat('id-ID').format(amount)}</h1>
    </button>
  );
}