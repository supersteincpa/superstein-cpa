import React from 'react'
import clsx from 'clsx'

import './ourhistorycard.scss'

import Heading from '../Heading/Heading'
import { RichText } from '../RichText'

export const OurHistoryCard = ({ otherClasses, heading, _rawSubText }) => {
  const ourHistoryCardClasses = clsx(
    otherClasses,
    'w-full relative gap-6 border-l-2 border-blue-400 pl-6 pb-6 lg:px-10 lg:pb-10'
  )

  return (
    <div className={ourHistoryCardClasses} data-testid="our-history-card">
      <Heading
        type="h2"
        otherClasses="relative before:translate-y-[-50%] before:absolute before:left-[-31px] lg:before:left-[-47px] before:top-2/4 before:block before:rounded-full before:h-3 before:w-3 before:bg-blue-600"
      >
        {heading}
      </Heading>
      <div className="our_history_card_rich_text mt-4">
        <RichText richText={_rawSubText} />
      </div>
    </div>
  )
}

export default OurHistoryCard
