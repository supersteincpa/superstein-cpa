import React from 'react'
import clsx from 'clsx'
import logo from '../../images/navabar-logo.svg'
import { Link } from 'gatsby'
import './navbar.scss'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import Icon from '../Icon/Icon'
import { useState } from 'react'
import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'

export const Navbar = ({
  otherClasses,
  toggleFunc,
  services,
  industries,
  locations,
}) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 left-0 z-20 w-full bg-black border-t-[4px] border-t-gray-600'
  )

  const [toggleNav, setToggleNav] = useState(false)
  const toggleNavbar = (elm) => {
    setToggleNav(!elm)
  }

  if (toggleNav) {
    hideBodyScroll()
  } else {
    showBodyScroll()
  }
  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
      <div className="max-w-[1512px] mx-auto px-6 xl:px-10 flex items-center justify-between relative">
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
            toggleNav
              ? 'flex navbar_clip_path_rounde right-0 top-[62px]'
              : ' flex top-[62px] right-0',
            ' flex-col lg:flex-row items-center gap-6 xl:gap-8 absolute lg:static  lg:top-0 navbar_mobile_menu_bar lg:bg-transparent bg-gray-900 lg:w-auto w-full lg:left-0  lg:p-0 px-6 pt-8'
          )}
        >
          <ul className="lg:w-auto w-full flex flex-col lg:gap-0 gap-4 lg:flex-row items-center">
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-4 xl:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                Services
                <span className="group-hover:rotate-180 lg:group-hover:bg-addition_button_color  bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full pt-4 pb-0 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <Link
                    to="/services"
                    className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]"
                  >
                    Services
                  </Link>
                  <ul className="grid lg:grid-cols-2 gap-y-5 gap-x-12 w-fit mt-5">
                    {services.map(({ title, slug: { current } }, index) => {
                      return (
                        <Link
                          key={index}
                          to={`/${current}`}
                          className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]"
                        >
                          {title}
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-4 xl:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                Industries
                <span className="group-hover:rotate-180 lg:group-hover:bg-addition_button_color  bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full py-4 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <Link
                    to="/industries"
                    className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]"
                  >
                    Industries
                  </Link>
                  <ul className="grid lg:grid-cols-3 gap-y-5 gap-x-12 w-fit mt-5">
                    {industries.map(({ title, slug: { current } }) => {
                      return (
                        <Link
                          to={`/${current}`}
                          className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]"
                        >
                          {title}
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-4 xl:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                About
                <span className="group-hover:rotate-180 lg:group-hover:bg-addition_button_color  bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full py-4 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <Link
                    to="/about"
                    className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]"
                  >
                    About
                  </Link>
                  <ul className="grid lg:grid-cols-1 gap-y-5 gap-x-12 w-fit mt-5">
                    <Link
                      to="/meet-the-team"
                      className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]"
                    >
                      Meet The Team
                    </Link>
                    <Link
                      to="/about/testimonials"
                      className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]"
                    >
                      Testimonials
                    </Link>
                    <Link
                      to="/blog"
                      className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]"
                    >
                      Blog
                    </Link>
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-col lg:flex-row lg:items-center navbar_menu_list_wrapper w-full lg:w-auto">
              <button className="flex lg:px-4 xl:px-8 lg:group-hover:bg-gray-900 border-gray-600 lg:border-gray-800 border-b-[1px] lg:border-b-[0px] lg:border-x-[1px] items-center justify-between lg:justify-start w-full pb-3 lg:pb-0 lg:h-20 gap-2 text-xl lg:text-base font-normal font-Public_Sans leading-[30px] lg:leading-6 text-white tracking-[0.03em] navbar_drop_down_button">
                Locations
                <span className="group-hover:rotate-180 lg:group-hover:bg-addition_button_color  bg-white block navbar_drop_down_chevron"></span>
              </button>
              <div className="flex flex-col items-center lg:absolute lg:top-20 lg:left-0 w-full py-4 lg:py-8 bg-gray-900 lg:border-y-[1px] lg:border-y-gray-800">
                <div className="w-full lg:w-fit">
                  <Link
                    to="/locations"
                    className="text-base lg:text-xl leading-6 lg:leading-[30px] font-normal font-Public_Sans text-white tracking-[0.03em]"
                  >
                    Locations
                  </Link>
                  <ul className="grid lg:grid-cols-1 gap-y-5 gap-x-12 w-fit mt-5">
                    {locations.map(({ title, slug: { current } }) => {
                      return (
                        <Link
                          to={`/${current}`}
                          className="text-base leading-6 font-normal font-Public_Sans text-white tracking-[0.03em]"
                        >
                          {title}
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <Button
            variant="primary"
            onClick={() => toggleFunc('Contact Us')}
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
