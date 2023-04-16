import React from 'react'
import clsx from 'clsx'

import Heading from '../Heading/Heading'
import image from '../../images/temp/where-we-located-imageOne.png'

export const OurTeamCard = ({
  otherClasses
}) => {

  const ourTeamCardClasses = clsx(
    otherClasses, 'w-full rounded-[30px] flex flex-col items-center justify-center gap-6'
  )

  return (
    <div className={ourTeamCardClasses} data-testid='our-team-card'>
      <img src={image} alt="" />
      <div className='flex flex-col items-center justify-center gap-2'>
        <Heading type='h2'>Esther</Heading>
        <p className='font-bold  text-sm text-gary-900 leading-[18px] tracking-[0.03em]'>Title</p>
      </div>
    </div>
  )
}

export default OurTeamCard
