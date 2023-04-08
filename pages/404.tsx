import Navbar from "@/components/organisms/Navbar";

export default function Custom404() {
  return (
    <main className="bg-gradient-to-r from-darkgreen to-primary  w-full h-screen ">
      <Navbar onLanding={true}/>
      <section className="absolute w-1/2 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] bg-white">
        <h1 className="text-9xl bg-clip-text text-transparent bg-gradient-to-r from-darkgreen to-primary text-center">404</h1>
      </section>
    </main>
  );
}
