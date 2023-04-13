import React from 'react'
import clsx from 'clsx'
import './navbar.scss'

export const Navbar = ({ otherClasses }) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 translate-x-[-50%] left-2/4 z-20 w-full '
  )

  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
    
      
    </nav>
  )
}

export default Navbar
