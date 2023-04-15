import React from 'react'
import clsx from 'clsx'
import logo from '../../images/navabar-logo.svg'
import { Link } from 'gatsby'
import './navbar.scss'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import Icon from '../Icon/Icon'
import { useState } from 'react'

export const Navbar = ({ otherClasses }) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 translate-x-[-50%] left-2/4 z-20 w-full bg-black border-t-[4px] border-t-gray-600'
  )

  const [toggleNav, setToggleNav] = useState(false)
  const toggleNavbar = (elm) => {
    setToggleNav(!elm)
  }

  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
      <div className="max-w-[1512px] mx-auto px-6  lg:px-10 flex items-center justify-between relative">
        <div className="border-r-[1px] border-r-gray-800 pr-[22px] lg:hidden h-[62px] flex items-center ">
          <div className="navbar_phone_button p-2 active:p-[5px] rounded-full ">
            <Icon
              icon="white-phone-outline-icon"
              iconHeight={18}
              iconWidth={18}
            />
          </div>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[181px] h-8 lg:w-[275px] lg:h-12"
          />
        </Link>
        <div
          className={clsx(
            toggleNav ? 'flex' : 'hidden lg:flex',
            ' flex-col lg:flex-row items-center gap-8 absolute lg:static top-[62px] lg:top-0 navbar_mobile_menu_bar lg:bg-transparent bg-gray-900 lg:w-auto w-full lg:left-0 left-0 lg:p-0 px-6 pt-8'
          )}
        >
          <ul className="lg:w-auto w-full flex flex-col lg:gap-0 gap-4 lg:flex-row items-center">
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                Services
                <span className="group-hover:rotate-180 lg:group-hover:bg-addition_button_color  bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full pt-4 pb-0 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <p className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]">
                    Services
                  </p>
                  <ul className="grid lg:grid-cols-2 gap-y-5 gap-x-12 w-fit mt-5">
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Business Advisory
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Estates & Trusts
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Tax Planning & Preparation
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Audit & Assurance
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Account Services
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      IRS Representation
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                Industries
                <span className="group-hover:bg-addition_button_color bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full py-4 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <p className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]">
                    Industries
                  </p>
                  <ul className="grid lg:grid-cols-3 gap-y-5 gap-x-12 w-fit mt-5">
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Healthcare & Medical
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      International
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Family Offices & Groups
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Real Estate
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Wholesale
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Entertainers
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Construction
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Professional Services
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                About
                <span className="group-hover:bg-addition_button_color bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full py-4 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <p className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]">
                    About
                  </p>
                  <ul className="grid lg:grid-cols-1 gap-y-5 gap-x-12 w-fit mt-5">
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Meet The Team
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Testimonial
                    </li>
                    <Link to='/blog' className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Blog
                    </Link>
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                Locations
                <span className="group-hover:bg-addition_button_color bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full py-4 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <p className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]">
                    Locations
                  </p>
                  <ul className="grid lg:grid-cols-1 gap-y-5 gap-x-12 w-fit mt-5">
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Broward, Florida
                    </li>
                    <li className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]">
                      Greenville, South Carolina
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <Button
            variant="primary"
            label="Book a Call"
            otherClasses="lg:block hidden"
          />
        </div>
        <button
          onClick={() => toggleNavbar(toggleNav)}
          className="pl-[22px] border-l-[1px] border-l-gray-800 h-[62px] lg:hidden flex items-center"
        >
          <Icon icon="navbar-hamburger-menu" iconHeight={24} iconWidth={24} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
