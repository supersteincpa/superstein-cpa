import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import './footer.scss'
import logo from '../../images/footer-logo.svg'
import Icon from '../../components/Icon/Icon'

export const Footer = ({ otherClasses }) => {
  const footerClasses = clsx(
    otherClasses,
    'w-full h-full lg:h-[559px] relative bg_clip_path pt-20 pb-10 lg:pt-[190px]'
  )

  const Year = new Date().getFullYear()

  return <div className={footerClasses} data-testid="footer">
    <div className='w-full max-w-[1512px] px-[50px] lg:px-[50px] xl:px-[156px] text-white mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-5 items-start mb-0 lg:mb-20'>
        <Link to='/' className=' sm:col-span-2 w-fit mx-auto lg:mx-0'>
          <img src={logo} alt="footer_logo" className='h-[48.22px] w-[275px]' />
        </Link>
        <ul className='flex flex-col gap-3'>
          <li className='text-white font-semibold text-base leading-6 mb-2 lg:mb-3'>Services</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Business Advisory</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Tax Planning & Preparation</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Estates & Trusts</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>IRS Representation</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Audit & Assurance</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Accounting Services</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='text-white font-semibold text-base leading-6 mb-2 lg:mb-3'>Company</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>About Us</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Meet the Team</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Industries</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Testimonials</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Case Studies</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Blog</li>
        </ul>
        <ul className='flex flex-col'>
          <li className='text-white font-semibold text-base leading-6 mb-2'>Broward Office</li>
          <li className='mb-6 font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>3830 Hollywood Blvd. Suite 101
            Hollywood FL 33021
            954-602-9100</li>
          <li className='text-white font-semibold text-base leading-6 mb-2'>Greenville Office</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>355 South Main Street
            1st & 2nd Floors Greenville, SC 29601
            123-456-7890</li>
        </ul>
      </div>
      <div className='flex flex-col mt-6 gap-[26px] lg:gap-0 lg:flex-row items-start lg:justify-between'>
        <ul className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start lg:items-center justify-start lg:space-x-4'>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>©2023 Superstein PA</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Privacy Policy</li>
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70'>Accessibility Statement</li>
          {/* <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70 flex gap-2 items-center justify-center'>
            <span>Industries</span>  <Icon icon='dropdown-arrow' iconWidth={8} /> */}
          <li className="group relative ">
            <p className=" font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70 flex gap-2 items-center">
              Industries
              <Icon
                iconWidth={8}
                icon="dropdown-arrow"
              />
            </p>
            <ul className="group-hover:flex hidden flex-col ml-7 lg:ml-0 gap-2 min-w-[200px] p-6 rounded-2xl bg-white absolute bottom-4 translate-x-[-50%] left-2/4 ">
              <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-gray-600 hover:text-gray-900 hover:font-bold cursor-pointer'>About Us</li>
              <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-gray-600 hover:text-gray-900 hover:font-bold cursor-pointer'>Meet the Team</li>
              <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-gray-600 hover:text-gray-900 hover:font-bold cursor-pointer'>Industries</li>
              <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-gray-600 hover:text-gray-900 hover:font-bold cursor-pointer'>Testimonials</li>
              <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-gray-600 hover:text-gray-900 hover:font-bold cursor-pointer'>Case Studies</li>
            </ul>
          </li>
          {/* </li> */}
          <li className=' font-Public_Sans font-normal text-sm leading-[20px] tracking-[0.03em] text-white opacity-70 flex space-x-1 items-center justify-center'><span>Powered by</span> <Icon icon='nest-logo' iconWidth={75.5} /></li>
        </ul>
        <div className='flex space-x-[30px]'>
          <a href="/">
            <Icon icon='linkedIn-generate' iconWidth={16.67} />
          </a>
          <a href="/">
            <Icon icon='facebook-generate' iconWidth={10.28} />
          </a>
          <a href="/">
            <Icon icon='twitter-generate' iconWidth={18.92} />
          </a>
          <a href="/">
            <Icon icon='youtube-generate' iconWidth={20} />
          </a>
        </div>
      </div>
    </div>
  </div>

}
export default Footer
