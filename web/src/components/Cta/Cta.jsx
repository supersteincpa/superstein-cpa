import React from 'react'
import clsx from 'clsx'


import './cta.scss'
import Button from '../../components/Button/Button'
import Heading from '../Heading/Heading'

export const Cta = ({
  otherClasses,

}) => {
  const ctaClasses = clsx(
    otherClasses,
    'w-full cta-clip-path bg-gray-50 py-[91px] lg:py-[210px] '
  )

  return <section className={ctaClasses} data-testid="cta">
    <div className='w-full max-w-[1512px] mx-auto flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-20 justify-center gap-6 relative'>
      <p className='absolute top-[50%] left-0 text-sm font-bold text-gray-300 transition sm:hidden -translate-y-[-50%] -rotate-90 hidden lg:block'>
        08. contact us
      </p>
      <Heading type='h2' otherClasses='w-[200px] lg:w-[185px] lg:min-w-[185px] text-[28px] lg:text-4xl font-normal leading-[42px]'>Let’s Work Together</Heading>
      <div className='border boder-[1px] border-[#4679E6] w-full h-0 lg:w-0 lg:h-[114px] float-left'></div>
      <div className='lg:max-w-[308px]'>
        <p className='text-sm lg:text-base font-normal leading-6 text-typography tracking-[0.03em] w-full'>
          If you're dealing with intricate and complex finances, you need Superstein PA on your side. Reach out to us today.
        </p>
      </div>
      <div className='flex gap-6'>
        <Button variant='secondary' label='Contact us' otherClasses="whitespace-nowrap" />
        <Button variant='primary' label='Book a call' otherClasses="whitespace-nowrap" />
      </div>
    </div>
  </section>
}

export default Cta
