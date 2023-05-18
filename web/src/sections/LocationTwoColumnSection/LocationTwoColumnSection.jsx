import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'

import Icon from '../../components/Icon/Icon'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Image } from '../../components/Image'
import { RichText } from '../../components/RichText'
import './locationtwocolumnsection.scss'
export const LocationTwoColumnSection = ({
  otherClasses,
  desktopImage,
  mobileImage,
}) => {
  const locationTwoColumnSectionClasses = clsx(
    otherClasses,
    'w-full my-[64px] lg:my-[110px]'
  )
 
 const location = useStaticQuery(graphql`
    query LocationSectionQuery {
      allSanityLocationsPages {
        nodes {
          slug {
            current
          }
          mobileImage {
            ...CustomImage
          }
          heading
          _rawStreetText
        }
      }
    }
  `)
  const nodes = location?.allSanityLocationsPages?.nodes

  return (
    <section
      className={locationTwoColumnSectionClasses}
      data-testid="location-two-column-section"
    >
      <div className="w-full max-w-[1512px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-14 xl:gap-20 px-6 lg:px-20 xl:px-[156px]">
        <div className="flex flex-col w-full lg:w-2/4 items-cemter justify-center gap-12">
          {nodes.map(
            ({ mobileImage, heading, _rawStreetText, slug: { current } }) => {
              return (
                <Link
                  to={`/${current}`}
                  className="flex flex-col lg:flex-row items-center justify-start gap-[29px] group cursor-pointer"
                >
                  <div className="w-[140px] h-[132px] min-w-[140px] min-h-[132px] relative rounded-[15px] overflow-hidden  hidden lg:block">
                    <Image
                      imageData={mobileImage}
                      imgClassName="rounded-[15px]"
                      otherClasses="w-[140px] h-[132px] min-w-[140px] min-h-[132px] rounded-[15px]"
                    />
                    <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center text-white bg-black opacity-0 transition duration-500 w-full group-hover:opacity-50 ">
                      <Icon
                        icon="white-plus-icon"
                        iconHeight={32}
                        iconWidth={32}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:max-w-[391px] border-b-[1px] border-b-gray-300 group-hover:border-b-blue-400">
                    <Heading
                      type="h5"
                      otherClasses="flex items-center justify-between mb-4 group-hover:text-blue-400"
                    >
                      {heading}
                      <span className="our_services_card_share_icon bg-typography group-hover:bg-blue-400"></span>
                    </Heading>
                    <div className="location_two_column_rich_text pb-6">
                      <RichText richText={_rawStreetText} />
                    </div>
                  </div>
                </Link>
              )
            }
          )}
        </div>

        <div className="w-full lg:w-2/4 rounded-[15px]">
          <Image
            imageData={desktopImage}
            otherClasses="w-full !hiddem lg:!block"
          />
          <Image imageData={mobileImage} otherClasses="w-full lg:!hidden" />
        </div>
      </div>
    </section>
  )
}

export default LocationTwoColumnSection

export const query = graphql`
  fragment LocationTwoColumnSection on SanityLocationTwoColumnSection {
    __typename
    identifier
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
  }
`
