import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { login } from "@/service/auth";

import Input from "@/components/atom/Input";
import PasswordInput from "@/components/atom/PasswordInput";
import AuthButton from "@/components/atom/AuthButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }

    const result = await login({ email, password });

    if (result.error) {
      alert(result.error);
    }

    alert("Login Success");
    router.push("/home");
  };

  return (
    <div className="flex flex-col grow py-10 px-[80px] justify-center bg-white gap-[50px]">
      <h1 className="text-darkgreen font-bold text-[40px] text-center">
        Sign In
      </h1>
      <div className="flex flex-col gap-[20px]">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          icon="user.svg"
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          icon="locks.svg"
        />
        <div className="flex justify-between text-darkgreen text-[12px] ">
          <div className="flex gap-[5px]">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <Link
            className="hover:font-semibold hover:underline underline-offset-2"
            href={"/"}
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <AuthButton onClick={onSubmit} fill={"Sign In"} />
      </div>
      <div className="flex self-center gap-1 text-[15px]">
        <p>New to Bookstore?</p>
        <Link
          href={"signup"}
          className="text-darkgreen font-bold hover:underline underline-offset-2"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
