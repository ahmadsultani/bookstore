import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Card from "@/components/molecule/Card"
import Hero from "@/components/organisms/Hero"

export default function Home() {
	return (
		<>
			<Head>
				<title>BookStore</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main className="flex flex-col">
				<Navbar />
				<Hero/>
				
				<div className="flex flex-wrap px-[200px] gap-[40px]">
					<Card title={'The Ugly Monster '} author={'Dilul'} source='TestPic.jpg ' price={100000} />
					<Card title={'The Ugly Monster Who Saved The World Then Got a Harem (sekedar test)'} author={'Dilul'} source='TestPic.jpg' price={100000} />
					<Card title={'The Ugly Monster Who Saved The World Then Got a Harem (sekedar test)'} author={'Dilul'} source='TestPic.jpg' price={100000} />
					<Card title={'The Ugly Monster Who Saved The World Then Got a Harem (sekedar test)'} author={'Dilul'} source='TestPic.jpg' price={100000} />
					<Card title={'The Ugly Monster Who Saved The World Then Got a Harem (sekedar test)'} author={'Dilul'} source='TestPic.jpg' price={100000} />
					<Card title={'The Ugly Monster Who Saved The World Then Got a Harem (sekedar test)'} author={'Dilul'} source='TestPic.jpg' price={100000} />
					<Card title={'The Ugly Monster Who Saved The World Then Got a Harem (sekedar test)'} author={'Dilul'} source='TestPic.jpg' price={100000} />
				</div>


			</main>
		</>
	);
}