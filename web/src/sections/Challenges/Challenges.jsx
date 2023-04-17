import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import image from '../../images/temp/challenges-icon.png'
import Icon from '../../components/Icon/Icon'

import './challenges.scss'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
import { Image } from '../../components/Image'

export const Challenges = ({
  otherClasses,
  title,
  mainHeading,
  _rawSubText,
  image,
  cards,
}) => {
  const challengesClasses = clsx(
    otherClasses,
    'w-full bg-gray-50 pb-[140px] pt-[92px] lg:py-[212px] cta-clip-path mb-[-60px] lg:mb-[-120px]'
  )

  return (
    <section className={challengesClasses} data-testid="challenges">
      <div className="w-full max-w-[1512px] mx-auto px-6 lg:px-20 xl:px-[229px] flex flex-col items-start justify-start relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start mb-10 lg:mb-16">
          <Image imageData={image} otherClasses="" />
          <div className="w-full max-w-[848px] flex flex-col gap-6">
            <Heading type="h2">{mainHeading}</Heading>
            <div className="border boder-[1px] border-[#4679E6] w-full"></div>
            <article className="challenges_section_rich_text">
              <RichText richText={_rawSubText} />
            </article>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid=cols-2 lg:grid-cols-2 gap-x-40 gap-y-6">
          {cards.map(({ icon, heading, _rawSubText }) => {
            return (
              <div className="flex flex-col items-start justify-start">
                <Heading
                  type="h5"
                  otherClasses="flex justify-center mb-3 gap-[10px]"
                >
                  <span className="min-w-[20px] min-h-[20px]">
                    <Icon icon={icon} iconWidth={20} iconHeight={20} />
                  </span>
                  {heading}
                </Heading>
                <article className="challenges_inner_rich_text">
                  <RichText richText={_rawSubText} />
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Challenges

export const query = graphql`
  fragment ChallengesSection on SanityChallengesSection {
    __typename
    identifier
    title
    image {
      ...CustomImage
    }
    mainHeading
    _rawSubText
    cards {
      icon
      heading
      _rawSubText
    }
  }
`
