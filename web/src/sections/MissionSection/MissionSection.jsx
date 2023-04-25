import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'

import './missionsection.scss'
import { Image } from '../../components/Image'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
import GenericTwoColumn from '../../components/GenericTwoColumn/GenericTwoColumn'

export const MissionSection = ({
  otherClasses,
  title,
  image,
  mainHeading,
  _rawSubText,
  genericSections,
}) => {
  const missionSectionClasses = clsx(
    otherClasses,
    'w-full bg-gray-900 pb-[130px] pt-[110px] lg:py-[212px] mission-clip-path'
  )

  return (
    <section className={missionSectionClasses} data-testid="mission-section">
      <div className="w-full max-w-[1512px] mx-auto  flex flex-col items-start justify-start relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="flex px-6 lg:px-20 xl:px-[229px] flex-col lg:flex-row gap-6 lg:gap-10 items-start mb-10 lg:mb-16">
          <Image
            imageData={image}
            otherClasses="w-20 h-20 min-w-20 min-h-20 lg:w-[160px] lg:min-w-[160px] lg:min-h-[160px] rounded-[30px]"
          />
          <div className="w-full max-w-[848px] flex flex-col gap-6">
            <Heading type="h2" otherClasses="text-white">
              {mainHeading}
            </Heading>
            <div className="border boder-[1px] border-[#4679E6] w-full"></div>
            <article className="mission_section_rich_text">
              <RichText richText={_rawSubText} />
            </article>
          </div>
        </div>
        <GenericTwoColumn
          genericSections={genericSections}
          otherClasses="mission_two_column_section"
        />
      </div>
    </section>
  )
}

export default MissionSection

export const query = graphql`
  fragment MissionSection on SanityMissionSection {
    __typename
    identifier
    title
    image {
      ...CustomImage
    }
    mainHeading
    _rawSubText
    genericSections {
      title
      heading
      _rawSubText
      text
      reversed
      mobileReversed
      isDecorator
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      button {
        ...Button
      }
    }
  }
`
