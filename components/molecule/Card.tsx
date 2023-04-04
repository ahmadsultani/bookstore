import React from "react";
import Image from "next/image";

interface InputProps {
	title: string;
	price: number;
	source: string;
}
export default function Card(props: InputProps) {
	const { title, price, source } = props;
	return (
		<main className="flex pb-[20px]">
			<div className="flex flex-col hover:bg-[#0000003b] p-[15px] duration-300 rounded-md">
				<div className="px-[35px] py-[20px]">
					<Image
						className="rounded-lg duration-[300ms]"
						src={`/assets/images/${source}`}
						alt="images"
						width={150}
						height={150}
					></Image>
				</div>
				<div className="flex justify-between border-t-2 p-[5px] border-darkgreen">
					<div className="flex flex-col">
						<div className="max-h-[60px] font-semibold text-[20px] line-clamp-2 overflow-hidden overflow-ellipsis max-w-[200px] ">
							{title}
						</div>
						<div className="flex items-end">
							<div className="text-[15px] m-0">RP.</div>
							<div className="text-[15px] font-bold m-0">{price}</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
