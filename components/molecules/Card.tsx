import React from "react";
import Image from "next/image";
import Link from "next/link";

interface InputProps {
  id: string;
  title: string;
  author: string;
  source: string;
  price: number;
}
export default function Card(props: InputProps) {
  const { id, title, author, source, price } = props;
  return (
    <Link
      href={`book/${id}`}
      className="flex flex-col px-8 py-5 bg-primary hover:bg-opacity-70 w-[300px] duration-300 rounded-md items-center shadow-[0_3px_5px_2px_rgba(256,256,256,0.1)]"
    >
      <div className="px-[35px] py-[20px]">
        <Image
          className="rounded-lg duration-[300ms] shadow-[-6px_5px_5px_2px_rgba(0,0,0,0.3)]"
          src={`/assets/images/${source}`}
          alt="images"
          width={160}
          height={160}
        />
      </div>
      <div className="text-[#F5f5f5] opacity-80 flex flex-col justify-between border-t-2 py-[10px] border-green w-full grow gap-4">
        <section className="flex flex-col ">
          <p className="font-semibold text-[20px] line-clamp-2 overflow-hidden overflow-ellipsis ">
            {title}
          </p>
          <p className="text-[15px] text-gray-400 font-medium m-0">
            {author}
          </p>
        </section>
        <p className="flex flex-col font-semibold text-[20px] text-green ">
          IDR {Intl.NumberFormat("id-ID").format(price)}
        </p>
      </div>
    </Link>
  );
}
