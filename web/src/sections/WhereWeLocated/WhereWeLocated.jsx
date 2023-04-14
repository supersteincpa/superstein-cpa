import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading';
import imageOne from '../../images/temp/where-we-located-imageOne.png'
import imageTwo from '../../images/temp/where-we-located-imageTwo.png'

import './wherewelocated.scss'

export const WhereWeLocated = ({
  otherClasses
}) => {
  const whereWeLocatedClasses = clsx(otherClasses, 'w-full bg-gray-900 cta-clip-path');

  const arr = [
    {
      image: imageOne,
      title: 'Broward',
      _rawText: 'Florida'
    },
    {
      image: imageTwo,
      title: 'Greenville',
      _rawText: 'South carolina'
    }
  ]

  return (
    <section className={whereWeLocatedClasses} data-testid='where-we-located'>
      <div className='w-full max-w-[1512px] mx-auto flex-col items-center justify-center px-6 pt-[91px] pb-[92px] lg:pt-[213px] lg:pb-[210px] lg:px-20 xl:px-[164px] relative'>

        <p className='absolute top-[50%] left-0 text-sm font-bold text-gray-300 transition sm:hidden -translate-y-[-50%] -rotate-90 hidden lg:block'>
          07. Location
        </p>

        <Heading type='h2' otherClasses='border-b text-[26px] lg:text-[36px] border-b-[1px] mx-auto font-Poppins mb-8 pb-4 border-b-addition_button_color w-full text-white lg:w-fit text-center'>Where We’re Located</Heading>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center gap-10'>

          {
            arr.map((nodes) => {
              return <div className='flex flex-col justify-center items-center'>
                <img src={nodes.image} alt="" className='w-[594px] mb-6' />
                <Heading type='h3' otherClasses='text-white font-Poppins mb-2'>{nodes.title}</Heading>
                <p className=' font-Public_Sans font-bold text-sm text-gray-400 tracking-[0.03em] leading-[18px]'>{nodes._rawText}</p>
              </div>
            })}

        </div>
      </div>
    </section>
  );
};

export default WhereWeLocated;
