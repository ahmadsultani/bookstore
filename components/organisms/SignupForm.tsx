import Link from "next/link";
import { useState } from "react";

import AuthButton from "@/components/atoms/AuthButton";
import Input from "@/components/atoms/Input";
import PasswordInput from "@/components/atoms/PasswordInput";
import { useRouter } from "next/router";
import { signup } from "@/service/auth";

export default function SignupForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const onSubmit = async () => {
		if (password !== confirmPassword) {
			alert("Password not match");
			return;
		}

		const result = await signup({ name, email, password, confirmPassword });

		if (result.error) {
			alert("Signup Failed: " + result.message);
			return;
		}

		alert("Signup Success!");
		router.push("/login");
	};

	return (
		<div className="flex flex-col grow py-10 px-[80px] justify-center bg-white gap-[50px]">
			<h1 className="text-darkgreen text-[40px] font-bold text-center">
				Sign Up
			</h1>
			<div className="flex flex-col gap-[20px]">
				<Input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Set Display Name"
					icon="user.svg"
				/>
				<Input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Set Email"
					icon="adduser.svg"
				/>
				<PasswordInput
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Set Password"
					icon="addpass.svg"
				/>
				<PasswordInput
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder="Confirm Password"
					icon="passcheck.svg"
				/>
			</div>
			<div className="flex justify-center">
				<AuthButton fill={"Sign Up"} onClick={onSubmit} />
			</div>
			<div className="flex self-center gap-1 text-[15px]">
				<p>Already Have Account?</p>
				<Link
					href={"login"}
					className="text-darkgreen font-bold hover:underline "
				>
					Login
				</Link>
			</div>
		</div>
	);
}
