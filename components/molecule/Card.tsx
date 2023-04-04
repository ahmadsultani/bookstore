import React from 'react'
import Image from 'next/image'

interface InputProps {
	title: string;
	price: number;
	desc: string;
  source:string;
}
export default function Card(props:InputProps) {
  const{title,price,desc,source}=props;
  return (
    <main className='flex flex-col bg-blue-800 w-[300px]'>
      <div className=''>
        <Image src={`/assets/images/${source}`} alt="images" width={100} height={100}></Image>
      </div>
      <div>{title}</div>
    </main>
  )
}
