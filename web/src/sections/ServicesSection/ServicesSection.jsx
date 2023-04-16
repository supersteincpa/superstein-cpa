import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import image from '../../images/temp/services-card-image.png'

import './servicessection.scss'

export const ServicesSection = ({
  otherClasses
}) => {
  const servicesSectionClasses = clsx(otherClasses, 'w-full py-[70px] lg:py-[92px] service-clip-path');

  const arr = [
    {
      id: '01',
      image: image,
      title: 'Healthcare & Medical',
      _rawText: ' 15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '02',
      image: image,
      title: 'Real Estate',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '03',
      image: image,
      title: 'Construction',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '04',
      image: image,
      title: 'International',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '05',
      image: image,
      title: 'Wholesale',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '06',
      image: image,
      title: 'Professional Services',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '07',
      image: image,
      title: 'Family Offices & Groups',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
    {
      id: '08',
      image: image,
      title: 'Entertainers & Athletes',
      _rawText: '15-20 words Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq purus sit amet luctu venenatis'
    },
  ]

  return (
    <section className={servicesSectionClasses} data-testid='services-section'>
      <div className='w-full max-w-[1512px] mx-auto flex flex-col px-6 lg:px-[121px] items-center justify-center relative'>
        <p className='absolute top-[50%] left-0 text-sm font-bold text-gray-500 transition sm:hidden -translate-y-[-50%] -rotate-90 hidden lg:block'>
          01. - services
        </p>
        <Heading type='h1' otherClasses='mb-6'>Services</Heading>
        <div className='border boder-[1px] border-[#4679E6] w-full lg:w-[613px] mb-6'></div>

        <div className='w-full max-w-[613px] mx-auto text-center mb-16'>
          <p className='font-normal font-Public_Sans text-sm lg:text-base text-typography leading-6 tracking-[0.03em]'>20-30 words lorem ipsum dolor sit amet consectetur. Nisi orci in tellus ut elementum elementum venenatis pellentesque amet. Nisl nibh pulvinar fermentum justo amet vitae feugiat</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6'>
          {
            arr.map((nodes) => {
              return <ServicesCard key={nodes.id} {...nodes} />
            })
          }

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
