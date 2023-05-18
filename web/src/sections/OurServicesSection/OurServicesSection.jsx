import React from 'react'
import clsx from 'clsx'
import './ourservicessection.scss'
import { Heading } from '../../components/Heading'
import circleImage from '../../images/background-circle-pattern.svg'
import OurServicesCard from '../../components/OurServicesCard/OurServicesCard'
import { graphql, useStaticQuery } from 'gatsby'
import { RichText } from '../../components/RichText'
import { useState } from 'react'
import allServicesImage from '../../images/all-services-icon.png'
import advisoryBulb from '../../images/advisory-bulb-icon.png'
import taxCalculatorIcon from '../../images/tax-calculator-icon.png'
import assuranceIcon from '../../images/assurance-icon.png'
export const OurServicesSection = ({
  otherClasses,
  isBackgroundColor,
  title,
  mainHeading,
  isFilterBar,
  _rawText,
}) => {
  const ourServicesSectionClasses = clsx(
    otherClasses,
    'our_services_main_container w-full relative z-10',
    isBackgroundColor ? 'bg-transparent' : 'bg-gray-900',
    isFilterBar
      ? 'mb-[34px] lg:mb-[-108px] pt-[100px] pb-[150px] lg:pt-[230px] lg:pb-[230px]'
      : 'py-[100px] lg:py-[200px]'
  )

  const {allSanityServicesPages} = useStaticQuery(graphql`
    query sanityServicesSection { 
      allSanityServicesPages {
        nodes {
          slug {
            current
          }
          servicesCard {
            heading
            _rawSubText
            image {
              ...CustomImage
            }
            servicesType
          }
        }
      }
    }
  `)

  const nodes = allSanityServicesPages.nodes

  const uniqueChars = [
    ...new Map(nodes.map((m) => [m.servicesCard.servicesType, m])).values(),
  ]

  const [toggle, setToggle] = useState('')
  const [data, setData] = useState([])
  const [active, setActive] = useState(true)

  const toggleFilter = (type, index) => {
    const filterNodes = nodes.filter(
      (e) => e.servicesCard.servicesType === type
    )
    setActive(false)
    setData(filterNodes)
    setToggle(index)
  }

  const mobileFilterFunc = (e) => {
    const value = e.target.value
    const filterNodes = nodes.filter(
      (e) => e.servicesCard.servicesType === value
    )
    setData(filterNodes)
  }

  const allData = () => {
    setData([])
    setToggle()
    setActive(true)
  }

  const location = typeof window !== 'undefined' && window.location.pathname
  const currentLocation =
    location &&
    location.substring(0, location.length - 1).slice(1, location.length - 1)

  const filterBypathName = nodes.filter(
    (nodes) => nodes.slug.current !== currentLocation
  )

  let orderArr = [
    'Business Advisory',
    'Tax Planning & Preparation',
    'Estates & Trusts',
    'IRS Representation',
    'Audit & Assurance',
    'Accounting Services',
  ]
  
  let orderedNodes = orderArr.map((item) =>
  nodes.find(({servicesCard:{heading}}) => heading === item)
  )
  return (
    <section
      className={ourServicesSectionClasses}
      data-testid="our-services-section"
    >
      {isBackgroundColor && (
        <img
          src={circleImage}
          alt="circle"
          className="absolute left-[10px] bottom-[-740px] rotate-180 hidden lg:block"
        />
      )}
      <div className="max-w-[1512px] mx-auto w-full px-6 lg:px-20 xl:px-[164px] relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className={clsx('max-w-[793px]', isFilterBar && 'hidden')}>
          <Heading
            type="h2"
            otherClasses={clsx(
              'mb-6 font-Poppins ',
              isBackgroundColor ? 'text-gray-900' : 'text-white'
            )}
          >
            {mainHeading}
          </Heading>
          {_rawText && (
            <div
              className={clsx(
                isBackgroundColor
                  ? 'our_services_section_rich_text_black'
                  : 'our_services_section_rich_text_white'
              )}
            >
              <RichText richText={_rawText} />
            </div>
          )}
        </div>
        <div
          className={clsx(
            'max-w-[1184px] mx-auto w-full lg:border-b-[1px] lg:border-b-gray-700',
            isFilterBar ? 'block mt-[112px]' : 'hidden'
          )}
        >
          <Heading
            type="h5"
            otherClasses="text-white font-Poppins text-center lg:block hidden"
          >
            {mainHeading}
          </Heading>
          <Heading
            type="h2"
            otherClasses="text-white font-Poppins text-left lg:hidden mb-6"
          >
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
              <span
                className={clsx(
                  'our_services_button_color_icon',
                  active && 'active_services_hub_icon'
                )}
              >
                <img
                  src={allServicesImage}
                  alt="all-services-icon"
                  className="w-6 h-6"
                />
              </span>
              <p
                className={clsx(
                  'text-base font-semibold pb-3 px-12 font-Public_Sans text capitalize',
                  active ? 'text-addition_button_color' : 'text-gray-200'
                )}
              >
                All Services
              </p>
            </button>
            {uniqueChars.map(({ servicesCard: { servicesType } }, index) => {
              return (
                <button
                key = {index}
                  onClick={() => {
                    toggleFilter(servicesType, index)
                  }}
                  className={clsx(
                    'flex flex-col items-center justify-center gap-2 capitalize',
                    toggle === index ? ' border-b-[3px] border-b-[#3F73E1]' : ''
                  )}
                >
                  <span
                    className={clsx(
                      'our_services_button_color_icon',
                      toggle === index && 'active_services_hub_icon'
                    )}
                  >
                    {servicesType === 'Advisory' && (
                      <img
                        src={advisoryBulb}
                        alt="all-services-icon"
                        className="w-6 h-6"
                      />
                    )}
                    {servicesType === 'Tax' && (
                      <img
                        src={taxCalculatorIcon}
                        alt="all-services-icon"
                        className="w-6 h-6"
                      />
                    )}
                    {servicesType === 'Assurance' && (
                      <img
                        src={assuranceIcon}
                        alt="all-services-icon"
                        className="w-6 h-6"
                      />
                    )}
                  </span>
                  <p
                    className={clsx(
                      'text-base font-semibold pb-3 px-12 font-Public_Sans text',
                      toggle === index
                        ? 'text-addition_button_color'
                        : 'text-gray-200'
                    )}
                  >
                    {servicesType}
                  </p>
                </button>
              )
            })}
          </div>
          <select
            onChange={(e) => mobileFilterFunc(e)}
            name="drop-down-menu"
            id="all"
            className="lg:hidden w-full py-3 px-4 font-Poppins font-normal text-base leading-6 bg-transparent text-white rounded-full border-[1px] border-white"
          >
            <option
              value="all"
              className="font-Poppins text-gray-900 font-normal text-base leading-6 capitalize"
            >
              All
            </option>
            {uniqueChars.map(({ servicesCard: { servicesType } },index) => {
              return (
                <option
                key = {index}
                  value={servicesType}
                  className="font-Poppins text-gray-900 font-normal text-base leading-6 capitalize"
                >
                  {servicesType}
                </option>
              )
            })}
          </select>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-y-12 gap-x-10 xl:gap-x-20 mt-6 lg:mt-16">
          {isBackgroundColor ? (
            <>
              {filterBypathName.map((nodes,index) => {
                return (
                  <OurServicesCard
                  key = {index}
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
              {data.length === 0 ? (
                <>
                  {orderedNodes.map((nodes,index) => {
                    return (
                      <OurServicesCard
                      key ={index}
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
                  {data.map((nodes,index) => {
                    return (
                      <OurServicesCard
                        {...nodes}
                        key ={index}
                        otherClasses={clsx(
                          isBackgroundColor && 'our_services_card_black_color'
                        )}
                      />
                    )
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection

export const query = graphql`
  fragment OurServicesSection on SanityServicesSection {
    __typename
    identifier
    title
    mainHeading
    _rawText
    isBackgroundColor
    isFilterBar
  }
`
