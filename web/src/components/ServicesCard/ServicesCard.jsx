import React from 'react'
import clsx from 'clsx'

import Heading from '../Heading/Heading'
import Icon from '../Icon/Icon'

export const ServicesCard = ({
  otherClasses, image, title, _rawText
}) => {

  const servicesCardClasses = clsx(
    otherClasses, 'w-full flex flex-col items-start justify-start bg-gray-50 p-6 rounded-[15px] cursor-pointer group hover:shadow-md'
  )

  return (
    <div className={servicesCardClasses} data-testid='services-card'>
      <div className='rounded-[15px] relative w-[125px] overflow-hidden mb-6'>
        <img src={image} alt="" />
        <div className='absolute top-0 left-0 bottom-0 flex items-center justify-center text-white bg-black opacity-0 transition duration-500 w-full group-hover:opacity-50 '><Icon icon="white-plus-icon" iconHeight={32} iconWidth={32} /></div>
      </div>
      <Heading type='h5' otherClasses='mb-4 group-hover:text-addition_button_color'>{title}</Heading>
      <p className='font-normal text-typography text-base leading-6 tracking-[0.03em]'>
        {_rawText}
      </p>
    </div>
  )
}

export default ServicesCard
