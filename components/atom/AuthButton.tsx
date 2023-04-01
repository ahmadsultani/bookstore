import React from 'react'

interface InputProps {
	fill: string;

}

export default function (props: InputProps) {
  const {fill} = props;
  return (
    <>
      <button className='flex bg-green text-darkgreen border-[1px] border-green hover:bg-transparent hover:text-green hover:duration-[100ms] duration-[100ms] rounded-[100px] px-[40px] text-[20px] py-[5px] hover'>{fill}</button>

    </>
  )
}
