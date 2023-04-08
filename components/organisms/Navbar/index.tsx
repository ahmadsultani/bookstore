import Cookies from "js-cookie";
import Link from "next/link";
import { useState, useEffect } from "react";
import Auth from "./Auth";

function Navbar({ onLanding }: { onLanding?: boolean }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    console.log("token", Cookies.get("token"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const bgclass =
    scrollPosition < 720 &&
    "bg-transparent bg-gradient-to-b from-black to-[rgb(0,0,0,0.3)] ";
  const buttonhover =
    scrollPosition < 720 ? "hover:text-green hover:bg-transparent": "";  

  const navitems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Category",
      href: "/category",
    },
    {
      title: "About us",
      href: "/about-us",
    },
  ];

  return (
    <nav
      className={` duration-[400ms] z-50 bg-primary ${
        onLanding ? "fixed " + bgclass : "sticky"
      } text-white flex w-[100%] top-0 max-w-[100vw] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] px-[100px] py-[15px] `}
    >
      <div className="flex grow items-center px-[20px] font-bold text-white text-[24px]">
        <p>BookStore</p>
      </div>
      <ul className="flex gap-[10px]">
        {navitems.map((navitem, index) => (
          <Link
            key={index}
            href={navitem.href}
            className={`flex w-[120px] py-[12px] font-normal justify-center align-middle rounded-[8px] hover:bg-darkgreen ${
              onLanding && buttonhover
            }  items-center duration-[200ms] hover:duration-[200ms] `}
          >
            {navitem.title}
          </Link>
        ))}
      </ul>
      <Auth buttonhover={buttonhover} />
    </nav>
  );
}

export default Navbar;
