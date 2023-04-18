import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import Slider from '../../components/Slider/Slider'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import './industriesslidersection.scss'

export const IndustriesSliderSection = ({
  otherClasses,
  title,
  mainHeading,
}) => {
  const industriesSliderSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] px-6 lg:pl-20 xl:pl-[156px] relative lg:my-[120px]'
  )

  const industries = useStaticQuery(graphql`
    query IndustrySliderData {
      allSanityIndustryPages {
        nodes {
          slug {
            current
          }
          industryCard {
            image {
              ...CustomImage
            }
            heading
            _rawSubText
          }
        }
      }
    }
  `)
  const nodes = industries.allSanityIndustryPages.nodes

  const settings = {
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <section
      className={industriesSliderSectionClasses}
      data-testid="industries-slider-section"
    >
      {title && (
        <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
          <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
            {title}
          </p>
        </div>
      )}
      <Heading type="h2" otherClasses="text-gray-900 font-normal font-Poppins">
        {mainHeading}
      </Heading>
      <div className="mt-10">
        <Slider customSettings={settings} customClass="industries_slider_container">
          {nodes.map((nodes, index) => {
            return (
              <div className="px-[11px]">
                <ServicesCard
                  otherClasses="min-h-[363px]"
                  key={index}
                  {...nodes}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default IndustriesSliderSection

export const query = graphql`
  fragment IndustriesSliderSection on SanityIndustriesSliderSection {
    __typename
    identifier
    title
    mainHeading
  }
`
