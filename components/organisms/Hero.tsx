import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<main className="flex items-center justify-center bg-darkgreen max-h-screen overflow-hidden ">
			<div className="h-[100%] w-[100%] ">
				<Image
					src={"/assets/images/Library.webp"}
					alt=""
					width={4000}
					height={4000}
					className="object-cover opacity-70"
				/>
			</div>
			<div className="flex font-bold text-white absolute h-[100%] w-[100%] px-[25px] pb-[25px]  pt-[100px]">
				<div className="flex flex-col gap-[40px] h-[100%] w-[100%] items-center justify-center ">
					<section className="flex flex-col items-center">
						<h1 className="font-bold text-[80px]">Where Books Are Treasured</h1>
						<h2 className="text-[30px] text-[rgba(255,255,255,0.8)]">
							The start of a lifelong adventure
						</h2>
					</section>
					<Link
						href={"signup"}
						className="flex text-[20px] items-center px-[40px] py-[16px] justify-center rounded-[8px] text-primary border-[1px] bg-green hover:bg-transparent  hover:border-green hover:text-green border-green duration-[200ms] hover:duration-[200ms]"
					>
						Get Started
					</Link>
				</div>
			</div>
		</main>
	);
}
