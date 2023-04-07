interface AmountInputProps {
	amount: number;
	activeIndex: number;
	setAmount: React.Dispatch<React.SetStateAction<number>>;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function AmountInput(props: AmountInputProps) {
	const { amount, activeIndex, setAmount, setActiveIndex } = props;
	const formatted = Intl.NumberFormat("id-ID").format(amount);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

		const deformat = e.target.value.toString().replaceAll(".", "");

		if (Number(deformat) >= Number.MAX_SAFE_INTEGER) {
			alert("Batas");
			return;
		}

		const inputVal = Number(deformat);

		if (inputVal < 0 || Number.isNaN(inputVal))  {
      alert("Input a positive number")
      return;
    }
    

		setAmount(inputVal);
	};

	const handleFocus = () => {
		if (activeIndex !== -1) setAmount(0);
		setActiveIndex(-1);
	};

	return (
		<input
			type="text"
			placeholder="Or Set Another Amount Here"
			onChange={handleChange}
			value={amount == 0 || activeIndex !== -1 ? "" : formatted}
			onFocus={handleFocus}
			className="bg-white rounded-md py-[5px] pl-[15px] focus:outline-none "
		/>
	);
}
