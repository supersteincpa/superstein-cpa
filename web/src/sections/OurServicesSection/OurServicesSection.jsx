import React from 'react'
import clsx from 'clsx'
import cardImage from '../../images/temp/our-services-image1.png'
import './ourservicessection.scss'
import { Heading } from '../../components/Heading'
import circleImage from '../../images/background-circle-pattern.svg'
import OurServicesCard from '../../components/OurServicesCard/OurServicesCard'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
import { useState } from 'react'
export const OurServicesSection = ({
  otherClasses,
  isBackgroundColor,
  title,
  mainHeading,
  filterBar = true,
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
      type: 'Advisory',
    },
    {
      heading: 'Business Advisory',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
      type: 'Advisory',
    },
    {
      heading: 'Business Assurance',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
      type: 'Assurance',
    },
    {
      heading: 'Business Tax',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
      type: 'Tax',
    },
    {
      heading: 'Business Tax',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
      type: 'Tax',
    },
    {
      heading: 'Business Assurance',
      _rawText:
        'Get the expert advice you need to make smart business decisions that’ll help you reach your goals.',
      image: cardImage,
      type: 'Assurance',
    },
  ]

  const uniqueChars = [...new Map(arr.map((m) => [m.type, m])).values()]

  const [toggle, setToggle] = useState('')
  const [data, setData] = useState([])
  const [active, setActive] = useState(true)

  const toggleFilter = (type, index) => {
    const filterNodes = arr.filter((e) => e.type === type)
    setActive(false)
    setData(filterNodes)
    setToggle(index)
  }

  const allData = () => {
    setData([])
    setToggle()
    setActive(true)
  }

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
        <div className={clsx('max-w-[793px]', filterBar && 'hidden')}>
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
        <div className="max-w-[1184px] mx-auto w-full border-b-[1px] border-b-gray-700">
          <Heading type="h5" otherClasses="text-white font-Poppins text-center">
            {mainHeading}
          </Heading>
          <div className="hidden lg:flex items-center justify-center mt-10 ">
            <button
              onClick={() => allData()}
              className={clsx(
                'flex flex-col items-center justify-center gap-2',
                active ? ' border-b-[3px] border-b-[#3F73E1]' : ''
              )}
            >
              <span className="our_services_button_color_icon"></span>
              <p
                className={clsx(
                  'text-base font-semibold py-3 px-12 font-Public_Sans text',
                  active ? 'text-addition_button_color' : 'text-gray-200'
                )}
              >
                all
              </p>
            </button>
            {uniqueChars.map(({ type }, index) => {
              return (
                <button
                  onClick={() => {
                    toggleFilter(type, index)
                  }}
                  className={clsx(
                    'flex flex-col items-center justify-center gap-2',
                    toggle === index ? ' border-b-[3px] border-b-[#3F73E1]' : ''
                  )}
                >
                  <span className="our_services_button_color_icon"></span>
                  <p
                    className={clsx(
                      'text-base font-semibold py-3 px-12 font-Public_Sans text',
                      toggle === index
                        ? 'text-addition_button_color'
                        : 'text-gray-200'
                    )}
                  >
                    {type}
                  </p>
                </button>
              )
            })}
          </div>
          <select
            // onChange={(link) => toggleFilter(link)}
            name="drop-down-menu"
            id="all"
          >
            <option value="all">all</option>
            {uniqueChars.map(({ type }) => {
              return <option value={type}>{type}</option>
            })}
          </select>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-y-12 gap-x-10 xl:gap-x-20 mt-6 lg:mt-16">
          {data.length === 0 ? (
            <>
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
            </>
          ) : (
            <>
              {data.map((nodes) => {
                return (
                  <OurServicesCard
                    {...nodes}
                    otherClasses={clsx(
                      isBackgroundColor && 'our_services_card_black_color'
                    )}
                  />
                )
              })}
            </>
          )}
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
