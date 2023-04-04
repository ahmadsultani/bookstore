import React from 'react'
import Card from '@/components/molecule/Card'
import MainNav from '@/components/organisms/MainNav'

export default function home() {
  return (
    <main className='bg-[#F4F0EA] flex flex-col h-[4000px] '>
      <MainNav/>
      <div className='flex'>
      <Card title={'Follow Me To Ground'} price={1000000} source={'TestPic.jpg'}/>
      <Card title={'Follow Me To Ground Where We Should Belong'} price={1000000} source={'TestPic.jpg'}/>
      </div>
    
    </main>
  )
}
