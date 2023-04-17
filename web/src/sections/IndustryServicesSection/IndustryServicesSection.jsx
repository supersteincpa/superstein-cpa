import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import image from '../../images/temp/services-card-image.png'

import './industryservicessection.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { RichText } from '../../components/RichText'

export const IndustryServicesSection = ({
  otherClasses,
  title,
  mainHeading,
  _rawSubText,
}) => {
  const industryServicesSectionClasses = clsx(
    otherClasses,
    'w-full my-[64px] lg:my-[100px]'
  )

  const industries = useStaticQuery(graphql`
    query IndustryData {
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
  return (
    <section
      className={industryServicesSectionClasses}
      data-testid="services-section"
    >
      <div className="w-full max-w-[1512px] mx-auto px-6 lg:px-20 xl:px-[121px] relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="max-w-[613px] mb-[64px] mx-auto">
          <Heading type="h1" otherClasses="mb-6 text-center">
            {mainHeading}
          </Heading>
          <div className="border boder-[1px] border-[#4679E6] w-full lg:w-[613px] mb-6"></div>
          <article className="industry_services_section_rich_text">
            <RichText richText={_rawSubText} />
          </article>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22px]">
          {nodes.map((nodes, index) => {
            return <ServicesCard key={index} {...nodes} />
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustryServicesSection

export const query = graphql`
  fragment IndustryServicesSection on SanityIndustryServicesSection {
    __typename
    identifier
    title
    mainHeading
    _rawSubText
  }
`
