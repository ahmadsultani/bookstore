import Link from "next/link";

import Navbar from "@/components/organisms/Navbar";

export default function Custom404() {
  return (
    <main className="bg-gradient-to-r from-darkgreen to-primary  w-full h-screen ">
      <Navbar onLanding={true} />
      <section className="absolute flex flex-col px-20 w-1/2 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] bg-white">
        <h1 className="text-[160px] font-black bg-clip-text text-transparent bg-gradient-to-r from-darkgreen to-darkgreen text-center">
          404
        </h1>
        <p className="text-3xl font-extrabold text-primary text-center -mt-2">
          OOPS, PAGE NOT FOUND!
        </p>
        <p className="text-primary text-lg text-center mt-4 font-medium">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. You can go back to
          the homepage by clicking the button below.
        </p>
        <Link href="/" className="bg-darkgreen px-8 py-4 w-fit mx-auto mt-10 rounded-xl text-white text-lg font-semibold">
          RETURN HOME
        </Link>
      </section>
    </main>
  );
}
