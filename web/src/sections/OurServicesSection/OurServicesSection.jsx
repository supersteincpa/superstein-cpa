import React from 'react'
import clsx from 'clsx'
import cardImage from '../../images/temp/our-services-image1.png'
import './ourservicessection.scss'
import { Heading } from '../../components/Heading'
import circleImage from '../../images/background-circle-pattern.svg'
import OurServicesCard from '../../components/OurServicesCard/OurServicesCard'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
export const OurServicesSection = ({
  otherClasses,
  isBackgroundColor,
  title,
  mainHeading,
  _rawSubText,
}) => {
  const ourServicesSectionClasses = clsx(
    otherClasses,
    'our_services_main_container w-full  py-[100px] lg:py-[150px] relative',
    isBackgroundColor ? 'bg-transparent' : 'bg-gray-900'
  )

  const arr = [
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
    },
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
    },
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
    },
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
    },
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
    },
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
    },
  ]

  return (
    <section
      className={ourServicesSectionClasses}
      data-testid="our-services-section"
    >
      {isBackgroundColor && (
        <img
          src={circleImage}
          alt="circle-img"
          className="absolute left-[10px] bottom-[-740px] rotate-180 hidden lg:block"
        />
      )}
      <div className="max-w-[1512px] mx-auto w-full px-6 lg:px-20 xl:px-[164px] relative">
        {title && (
          <p className="absolute -left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] ">
            {title}
          </p>
        )}
        <div className="max-w-[793px]">
          <Heading
            type="h2"
            otherClasses={clsx(
              'mb-6 font-Poppins ',
              isBackgroundColor ? 'text-gray-900' : 'text-white'
            )}
          >
            {mainHeading}
          </Heading>
          <article
            className={clsx(
              isBackgroundColor
                ? 'our_services_section_rich_text_black'
                : 'our_services_section_rich_text_white'
            )}
          >
            <RichText richText={_rawSubText} />
          </article>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-y-12 gap-x-10 xl:gap-x-20 mt-6 lg:mt-16">
          {arr.map((nodes) => {
            return (
              <OurServicesCard
                {...nodes}
                otherClasses={clsx(
                  isBackgroundColor && 'our_services_card_black_color'
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection

export const query = graphql`
  fragment OurServicesSection on SanityOurServicesSection {
    __typename
    identifier
    isBackgroundColor
    title
    mainHeading
    _rawSubText
  }
`
