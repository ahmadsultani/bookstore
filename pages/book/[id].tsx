import { useRouter } from "next/router";
import Navbar from "@/components/organisms/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import { getBookById } from "@/service/book";
import { BookTypes } from "@/types";
import { GetServerSideProps } from "next";

export default function BookDetail({book}:{book:BookTypes}) {
	const { id } = useRouter().query;
	const shadow = "shadow-[-5px_0px_15px_8px_rgba(0,0,0,0.25)]";
  const btnstyle ="px-[15px] py-[5px] bg-white items-center justify-center"

	return (
		<>
			<Head>
				<title>{id}</title>
				<meta name="description" content="Generated by create next app" />
			</Head>

			<Navbar />
			<main className={` flex px-[60px] py-[65px] bg-[#FBF8F4] gap-[50px]`}>
				<section className="flex shrink-0">
					{" "}
					{/*Left */}
					<div className={` bg-[#d9d9d965] px-[40px] py-[20px] rounded-md `}>
						<Image
							src={"/assets/images/Book.png"}
							alt={""}
							height={300}
							width={300}
							className={`overflow-hidden aspect-auto w-[250px] rounded-lg ${shadow}`}
						/>
					</div>
				</section>
				<section className="flex flex-col gap-[15px]">
					{/*Mid */}
					<h1 className="font-bold text-[36px]">
						{/*Title*/}
						{book.title}
					</h1>
					<h2 className="text-[15px] text-[rgb(90,90,90)] font-semibold ">
						{/*Author*/}
            DeLuca Jen
					</h2>
					<div>Rating</div>
					<div className="flex gap-[8px] text-[30px] ">
						<p className="font-semibold">IDR</p>
						<p className="font-semibold">1000000</p>
					</div>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
						corporis nobis ipsum itaque voluptatem molestiae quae sapiente
						magnam asperiores accusantium, molestias harum tenetur nemo
						explicabo in libero similique unde architecto aliquid? Saepe sequi
						quam voluptatibus recusandae, dolores obcaecati iste repudiandae
						vero architecto. Tempore magni ratione inventore sed quas iure minus
						commodi sapiente, enim itaque porro eos atque fuga laudantium.
						Veritatis ipsa veniam magni vel, sint rerum nulla, ipsum voluptatum
						nisi cum impedit! Sequi, ullam at, dolore in asperiores expedita
						pariatur illo laboriosam provident voluptatum ipsum non! Libero,
						soluta recusandae! Voluptatum iure temporibus quidem nulla
						reprehenderit soluta reiciendis recusandae libero sequi!
					</div>
				</section>
				<section>
					{/*Right */}
					<div className="flex flex-col bg-green rounded-md p-[30px]">
            <h1>Quantity</h1>
            <div className="flex gap-[20px] rounded-md border-[1px] border-black items-center justify-center overflow-hidden">
              <button className={`${btnstyle}`}>
                +
              </button>
              <section className="items-center justify-center">
sds
              </section>
              <button className={`${btnstyle}`}>
                -
              </button>
            </div>
          </div>
				</section>
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { id } = useRouter().query;

  const stringId = id ? id.toString() : "";
  
  const result = await getBookById(stringId);
  
  const book: BookTypes = result.data;
  
  return {
    props: {
      book,
    },
  }
}
