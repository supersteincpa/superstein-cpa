import React from 'react'
import clsx from 'clsx'
import logo from '../../images/navabar-logo.svg'
import { Link } from 'gatsby'
import './navbar.scss'
import Button from '../Button/Button'

export const Navbar = ({ otherClasses }) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 translate-x-[-50%] left-2/4 z-20 w-full bg-gray-900'
  )

  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
      <div className="max-w-[1512px] mx-auto px-10 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[181px] h-8 lg:w-[275px] lg:h-12"
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul>
            <li className="group relative">
              <button className='flex items-center gap-2'>
                Services
                <span className="bg-white block navbar_drop_down_chevron"></span>
              </button>
            </li>
          </ul>
          <Button variant="primary" label="Book a Call" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
