import React from 'react'

function Navbar() {
  return (
    <nav className="">
        <div>
          <p>BookStore</p>
        </div>
        <ul className="">
            <li className= "flex w-[180px] text-[15px] font-normal justify-center align-middle h-[80px] bg-white" >Home</li>
            <li className=''>Shop</li>
            <li className="">Categories</li>
            <li className="">About Us</li>
        </ul>
        <div className="flex items-center justify-center gap-[20px] bg-black">
          <button className="">Sign In</button>
          <button className="">Sign Up</button>
        </div>

    </nav>
  )
}

export default Navbar