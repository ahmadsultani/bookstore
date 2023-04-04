import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const bgclass = scrollPosition > 720 ? " bg-primary shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]" : " bg-gradient-to-b from-black to-[rgb(0,0,0,0.3)] ";
	const buttonhover = scrollPosition >720? "hover:bg-darkgreen":"hover:text-green";

	return (
		<nav className={`duration-[400ms] z-50 fixed text-white flex w-[100%] top-0 max-w-[100vw] ${bgclass} px-[100px] py-[15px]`}> 
			<div className="flex grow items-center px-[20px] font-bold text-white text-[24px]">
				<p>BookStore</p>
			</div>
			<ul className="flex gap-[10px]">
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] ${buttonhover}  items-center duration-[200ms] hover:duration-[200ms] `}>
					Home
				</li>
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] ${buttonhover}  items-center duration-[200ms] hover:duration-[200ms] `}>
					Shop
				</li>
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] ${buttonhover}  items-center duration-[200ms] hover:duration-[200ms] `}>
					Categories
				</li>
				<li className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] ${buttonhover}  items-center duration-[200ms] hover:duration-[200ms] `}>
					About Us
				</li>
			</ul>
			<div className="flex items-center justify-center px-[20px] gap-[20px]">
				<Link
					href={"login"}
					className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] ${buttonhover}  items-center duration-[200ms] hover:duration-[200ms] `}
				>
					Sign In
				</Link>
				<Link
					href={"signup"}
					className="flex items-center py-[12px] justify-center w-[100px] rounded-[8px] text-primary border-[1px] bg-green hover:bg-transparent  hover:border-green hover:text-green border-green duration-[200ms] hover:duration-[200ms]"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
