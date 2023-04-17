import React from 'react'
import clsx from 'clsx'

import Heading from '../Heading/Heading'

export const OurHistoryCard = ({
  otherClasses, title, _rawText
}) => {

  const ourHistoryCardClasses = clsx(
    otherClasses, 'w-full max-w-[506px] relative gap-6 border-l-2 border-blue-400 before:rounded-full before:h-3 before:w-3 before:bg-blue-600 before:absolute before:-left-[7px] pl-6 pb-6 lg:px-10 lg:pb-10'
  )

  return (
    <div className={ourHistoryCardClasses} data-testid='our-history-card'>
      <Heading type='h2'>{title}</Heading>
      <p className='font-Public_Sans text-base font-normal text-typography leading-6 tracking-[0.03em]'>{_rawText}</p>
    </div>
  )
}

export default OurHistoryCard
