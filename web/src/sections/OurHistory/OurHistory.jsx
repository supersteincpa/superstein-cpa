import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import './ourhistorysection.scss'
import OurHistoryCard from '../../components/OurHistoryCard/OurHistoryCard'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
import roundedImage from '../../images/background-circle-pattern.svg'

export const OurHistory = ({
  otherClasses,
  title,
  mainHeading,
  _rawSubText,
  cards,
}) => {
  const ourHistoryClasses = clsx(
    otherClasses,
    'w-full py-16 lg:py-[100px] bg-white relative'
  )

  return (
    <section className={ourHistoryClasses} data-testid="our-history">
      <img
        src={roundedImage}
        alt="rounded-image"
        className={clsx(
          'absolute bottom-0 lg:bottom-[-400px] rotate-180 left-0'
        )}
      />
      <div className="w-full max-w-[1512px] mx-auto px-6 lg:px-[129px] flex flex-col lg:flex-row items-start justify-center gap-16 relative">
        {title && (
          <div className="absolute lg:left-6 top-[120px] left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="lg:sticky flex flex-col items-start justify-start gap-6 w-full h-fit lg:top-[86px] w-full lg:w-2/4">
          <Heading type="h2">{mainHeading}</Heading>
          <article className="our_mission_rich_text">
            <RichText richText={_rawSubText} />
          </article>
        </div>

        <div className="last_child w-full lg:w-2/4">
          {cards.map((nodes) => {
            return <OurHistoryCard {...nodes} />
          })}
        </div>
      </div>
    </section>
  )
}

export default OurHistory

export const query = graphql`
  fragment OurHistorySection on SanityOurHistory {
    __typename
    identifier
    title
    mainHeading
    _rawSubText
    cards {
      heading
      _rawSubText
    }
  }
`
