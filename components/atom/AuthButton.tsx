import React from 'react'

interface InputProps {
	fill: string;

}

export default function (props: InputProps) {
  const {fill} = props;
  return (
    <>
      <button className='flex bg-green text-darkgreen rounded-[100px] px-[40px] text-[20px] py-[5px]'>{fill}</button>

    </>
  )
}
