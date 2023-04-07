import React from "react";
import Image from "next/image";

interface InputProps {
	title: string;
	author: string;
	source: string;
	price: number;
}
export default function Card(props: InputProps) {
	const { title, author, source, price } = props;
	return (
		<main className="flex flex-col p-[20px] bg-[rgba(248,248,248,0.5)] hover:bg-[#0000003b] h-[420px] w-[250px] duration-300 rounded-md items-center shadow-[0_2px_5px_2px_rgba(0,0,0,0.2)]">
			<div className="px-[35px] py-[20px]">
				<Image
					className="rounded-lg duration-[300ms] shadow-[-6px_5px_5px_2px_rgba(0,0,0,0.3)]"
					src={`/assets/images/${source}`}
					alt="images"
					width={200}
					height={200}
				></Image>
			</div>
			<div className="flex justify-between border-t-2 py-[10px] h-full  border-darkgreen w-[90%]">
				<div className="flex flex-col grow">
					<section className="flex flex-col ">
						<div className="max-h-[60px] font-semibold text-[18px] line-clamp-2 overflow-hidden overflow-ellipsis  ">
							{title}
						</div>
						<div className="text-[15px] text-[rgba(0,0,0,0.4)] font-bold m-0">
							{author}
						</div>
					</section>
					<div className="flex flex-col font-semibold text-[20px]  grow text-darkgreen justify-end">
						IDR. {price}
					</div>
				</div>
			</div>
		</main>
	);
}
