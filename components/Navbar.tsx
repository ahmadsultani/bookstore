import React from 'react'

function Navbar() {
  return (
    <nav>
        <div>
          <p>BookStore</p>
        </div>
        <ul>
            <li className= "flex w-[180px] text-[15px] font-normal justify-center align-middle h-[80px] bg-white" >Home</li>
            <li className=''>Shop</li>
            <li>Categories</li>
            <li>About Us</li>
        </ul>
        <div className="flex items-center justify-center gap-[20px] bg-black">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>

    </nav>
  )
}

export default Navbar