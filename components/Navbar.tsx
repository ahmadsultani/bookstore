import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.NavContainer}>
        <div>
          <p>BookStore</p>
        </div>
        <ul className={styles.NavItemsCtr}>
            <li className={styles.NavItems}>Home</li>
            <li className={styles.NavItems}>Shop</li>
            <li className={styles.NavItems}>Categories</li>
            <li className={styles.NavItems}>About Us</li>
        </ul>
        <div className="flex items-center justify-center gap-[20px]">
          <button className={styles.signin}>Sign In</button>
          <button className={styles.signup}>Sign Up</button>
        </div>

    </nav>
  )
}

export default Navbar