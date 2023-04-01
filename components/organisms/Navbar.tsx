import Link from "next/link";

function Navbar() {
	const data = ["Home"];
	return (
		<nav className="text-white flex sticky top-0 max-w-[100vw] bg-primary px-[100px] py-[15px]">
			<div className="flex grow items-center px-[20px] font-bold text-white text-[24px]">
				<p>BookStore</p>
			</div>
			<ul className="flex gap-[10px]">
				<li className="flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen items-center duration-[200ms] hover:duration-[200ms] ">
					Home
				</li>
				<li className="flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen items-center duration-[200ms] hover:duration-[200ms]">
					Shop
				</li>
				<li className="flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen items-center duration-[200ms] hover:duration-[200ms]">
					Categories
				</li>
				<li className="flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen items-center duration-[200ms] hover:duration-[200ms]">
					About Us
				</li>
			</ul>
			<div className="flex items-center justify-center px-[20px] gap-[20px]">
				<Link
					href={"login"}
					className="flex items-center py-[12px] justify-center w-[100px] rounded-[8px] border-[1px] border-transparent hover:border-darkgreen hover:bg-darkgreen duration-[200ms] hover:duration-[200ms]"
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
