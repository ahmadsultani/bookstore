import React from 'react'
import Link from 'next/link';

export default function MainNav() {


  return (
<nav className={`duration-[400ms] z-50  text-white flex w-[100%] top-0 max-w-[100vw] sticky bg-primary shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] px-[100px] py-[15px]`}> 
			<div className="flex grow items-center px-[20px] font-bold text-white text-[24px]">
				<p>BookStore</p>
			</div>
			<ul className="flex gap-[10px]">
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen  items-center duration-[200ms] hover:duration-[200ms] `}>
					Home
				</li>
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen  items-center duration-[200ms] hover:duration-[200ms] `}>
					Shop
				</li>
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen  items-center duration-[200ms] hover:duration-[200ms] `}>
					Categories
				</li>
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen  items-center duration-[200ms] hover:duration-[200ms] `}>
					About Us
				</li>
			</ul>

		</nav>
  )
}
