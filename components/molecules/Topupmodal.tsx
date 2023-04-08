import React, { useEffect } from "react";
import Image from "next/image";
import Amountbtn from "../atoms/Amountbtn";
import AmountInput from "../atoms/AmountInput";
import { useState } from "react";
import { topup } from "@/service/user";

interface TopupModalProps {
  isVisible: boolean;
  handleOpenModal: () => void;
  setIsCompletedTopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Topupmodal(props: TopupModalProps) {
  const { isVisible, handleOpenModal, setIsCompletedTopup } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [amount, setAmount] = useState(0);

  const amounts = [50000, 100000, 150000, 200000, 250000, 300000];

  useEffect(() => {
    console.log("i am", amount);
  }, [amount]);

  const handleTopup = async () => {
    if (amount <= 0) return;
    const result = await topup(amount);
    if (result.error) {
      alert("Failed to topup");
      return;
    }
    setIsCompletedTopup(true);
		alert("Topup Success");
    handleOpenModal();
		setActiveIndex(-1);
  };

  const able =
    amount > 0
      ? "bg-green text-primary hover:bg-[#06b850]"
      : "text-white cursor-not-allowed bg-[rgb(93,120,95)] ";

  const show = isVisible == false ? "hidden" : "flex flex-col";

  return (
    <main
      className={`fixed ${show} top-0 z-50 w-screen bg-black bg-opacity-70 h-screen items-center justify-center`}
    >
      <div className="bg-primary p-[30px] flex gap-[30px] flex-col h-[540px] rounded-lg overflow-hidden ">
        <section className=" justify-end flex">
          <button onClick={handleOpenModal} className="bg-green">
            Exit
          </button>
        </section>
        <section className="flex gap-[10px] justify-center">
          <Image
            src={"/assets/logos/Bookstore.svg"}
            alt="images"
            width={80}
            height={80}
            className=""
          />
          <h1 className="text-[30px]  text-green">Bookstore</h1>
        </section>
        <section className="gap-[30px] flex flex-col  rounded-lg">
          <div className="grid grid-cols-3 gap-[30px]">
            {amounts.map((item, index) => (
              <Amountbtn
                amount={item}
                key={index}
                index={index}
                setAmount={setAmount}
                setActiveIndex={setActiveIndex}
                isActive={activeIndex === index}
              />
            ))}
          </div>
          <AmountInput
            amount={amount}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            setAmount={setAmount}
          />
          <button
            className={`font-semibold  rounded-md p-[10px] ${able} duration-[200ms] `}
            onClick={handleTopup}
          >
            Confirm
          </button>
        </section>
      </div>
    </main>
  );
}
