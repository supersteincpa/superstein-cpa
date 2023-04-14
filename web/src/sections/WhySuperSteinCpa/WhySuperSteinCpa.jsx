import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import Icon from '../../components/Icon/Icon'

import './whysuperstein.scss'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'

export const WhySuperSteinCpa = ({
  otherClasses,
  title,
  mainHeading,
  cards,
}) => {
  const whySuperSteinCpaClasses = clsx(
    otherClasses,
    'w-full bg-gray-50 cta-clip-path py-[90px] lg:py-[210px]'
  )

  return (
    <section
      className={whySuperSteinCpaClasses}
      data-testid="why-super-stein-cpa"
    >
      <div className="w-full max-w-[1512px] mx-auto flex-col lg:px-20 xl:px-[165px] px-6 items-center justify-start relative">
        {title && (
          <p className="absolute -left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] ">
            {title}
          </p>
        )}
        <Heading type="h2" otherClasses="mb-4">
          {mainHeading}
        </Heading>
        <div className="border boder-[1px] border-[#4679E6] w-[125px] mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-x-10 xl:gap-x-20 lg:gap-y-8">
          {cards.map(({ icon, heading, _rawSubText }) => {
            return (
              <div className="flex flex-col items-start justify-start">
                <Heading
                  type="h5"
                  otherClasses="flex items-start justify-center mb-3 gap-2"
                >
                  <span className="min-w-[20px] min-h-[20px] h-5 w-5">
                    <Icon icon={icon} iconWidth={20} iconHeight={20} />
                  </span>
                  {heading}
                </Heading>
                <article className="why_super_stein_cpa_rich_text">
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

export default WhySuperSteinCpa

export const query = graphql`
  fragment WhySuperSteinCPASection on SanityWhySuperSteinCpa {
    __typename
    identifier
    title
    mainHeading
    cards {
      icon
      heading
      _rawSubText
    }
  }
`
