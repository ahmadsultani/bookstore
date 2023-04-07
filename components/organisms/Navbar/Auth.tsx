import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

import { JWTPayloadTypes } from "@/types";
import Loader from "@/components/organisms/Loader";

interface AuthProps {
  buttonhover: boolean;
}

export default function Auth(props: AuthProps) {
  const { buttonhover } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [onDropdown, setOnDropdown] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwtDecode<JWTPayloadTypes>(token);
      const firstName = decoded.name.split(" ")[0];
      setName(firstName);
      setIsLogin(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isLogin) {
    return (
      <div className="relative ml-5 border-l px-5 flex flex-col items-center ">
        <div className="flex px-5 gap-5 items-center">
          <p>Halo, {name}!</p>
          <button
            className="bg-primary rounded-full border-2 overflow-hidden w-[45px] h-[45px]"
            onClick={() => setOnDropdown(!onDropdown)}
          >
            <Image
              src="/assets/images/TestPic.jpg"
              width={45}
              height={45}
              alt="profile"
            />
          </button>
        </div>
        {onDropdown && (
          <div className="absolute w-full top-[62px] flex flex-col items-center text-white pb-4 rounded-b-lg bg-primary">
            <Link
              href="/profile"
              className="flex justify-between py-4 px-10 hover:bg-darkgreen text-left bg-opacity-20 w-full"
            >
              <p>Profile</p>
              <Image
                className="brightness-100 saturate-100 contrast-100"
                src="/assets/icons/setting.svg"
                alt="profile"
                width={20}
                height={20}
              />
            </Link>
            <button
              className="flex justify-between py-4 px-10 hover:bg-darkgreen text-left bg-opacity-20 w-full"
              onClick={onLogout}
            >
              <p>Log Out</p>
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={20}
                height={20}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center px-5 gap-5">
      <Link
        href={"login"}
        className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px]  hover:bg-darkgreen ${buttonhover} items-center duration-[200ms] hover:duration-[200ms] `}
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
  );
}
