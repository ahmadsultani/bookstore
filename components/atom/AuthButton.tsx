import React from "react";

interface InputProps {
	fill: string;
}

export default function (props: InputProps) {
	const { fill } = props;
	return (
		<button className="flex grow justify-center font-semibold bg-green text-primary border-[1px] hover:bg-[#06b850] transition-all duration-200 ease-in-out rounded-[100px] text-[18px] py-[8px] hover">
			{fill}
		</button>
	);
}
