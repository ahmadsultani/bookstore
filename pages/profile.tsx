import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Topupmodal from "@/components/molecule/Topupmodal";
import { useState } from "react";

export default function profile() {
	const shadow = "shadow-[0_5px_5px_2px_rgba(0,0,0,0.2)]";
	let name = "Chu Kang Park Ir";
	let email = "oppatamvan99@gmail.com";
	const first = name.split(" ")[0];

	const [showTopup,setShowTopup]=useState(false);

	const handleShowTopup= ()=>{
		setShowTopup(true);
	}


	return (
		<>
			<Head>
				<title>Profile</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main>
				<Navbar onLanding={false} />
				<div className="flex h-screen overflow-hidden bg-darkgreen justify-center items-center">
					<Image
						src={"/assets/images/Library.webp"}
						alt=""
						width={4000}
						height={4000}
						className="object-cover h-screen opacity-70 absolute"
					/>

					<div className=" top-0 bottom-0 flex max-w-screen gap-[30px] w-[calc(calc(100vw-20%))] h-[calc(100vh-20%)] z-20">
						<aside
							className={`p-[5px] flex flex-col w-[300px] bg-white h-[100%] ${shadow} rounded-lg overflow-hidden`}
						>
							<div className="flex  h-[100px] px-[15px] items-center border-b-[1px] border-[rgba(0,0,0,1)]">
								<div className="flex gap-[10px] ">
									<Image
										className="h-[50px] w-[50px] rounded-full object-cover"
										src={"/assets/images/TestPic.jpg"}
										alt="profile"
										width={100}
										height={100}
									/>
									<div className="flex flex-col ">
										<h1 className="grow mt-[-2	px] font-semibold text-[15px]">
											Hi! {first}
										</h1>
										<h1 className="mb-[5px] font-bold text-[rgba(0,0,0,0.5)] text-[10px]">
											{email}
										</h1>
									</div>
								</div>
							</div>
							<div className="gap-[20px] bg-white flex flex-col grow p-[30px]">
								<section className="flex justify-between">
									{/* saldo*/}
									<div className="flex items-center gap-[10px]">
										<Image
											src={"/assets/icons/cash.svg"}
											alt=""
											width={100}
											height={100}
											className="h-[25px] w-[25px]"
										/>
										<h2 className="font-semibold">Saldo</h2>
									</div>
									<div className="flex gap-2">
										<h2>IDR</h2>
										<h2>1000000</h2>
									</div>
								</section>
								<section>
									<button onClick={handleShowTopup} className="flex gap-[5px] bg-green rounded-lg text-primary font-bold w-[100%] p-[10px] justify-center items-center hover:bg-[#06b850] duration-[200ms] ease-in-out">
										<h1 className="-mt-[4px]">Topup</h1>
										<Image
											src={"/assets/icons/cashadd.svg"}
											alt=""
											width={100}
											height={100}
											className="h-[15px] w-[15px]"
										/>
									</button>
								</section>
							</div>
						</aside>
						{/* Left Side*/}
						<section
							className={`${shadow} bg-white grow p-[20px] rounded-lg`}
						></section>
					</div>
				</div>
				{showTopup && <Topupmodal />}
			</main>
		</>
	);
}
