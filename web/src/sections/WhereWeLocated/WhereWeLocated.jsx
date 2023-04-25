import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'

import './wherewelocated.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Image } from '../../components/Image'

export const WhereWeLocated = ({ otherClasses, title, mainHeading }) => {
  const whereWeLocatedClasses = clsx(
    otherClasses,
    'w-full bg-gray-900 located-clip-path -mb-10 lg:mb-[-115px] relative z-10'
  )

  const location = useStaticQuery(graphql`
    query LocationSection {
      allSanityLocationsPages {
        nodes {
          slug {
            current
          }
          desktopImage {
            ...CustomImage
          }
          mobileImage {
            ...CustomImage
          }
          heading
          city
        }
      }
    }
  `)
  const locationData = location.allSanityLocationsPages.nodes

  return (
    <section className={whereWeLocatedClasses} data-testid="where-we-located">
      <div className="w-full max-w-[1512px] mx-auto flex-col items-center justify-center px-6 pt-[91px] pb-[92px] lg:pt-[213px] lg:pb-[210px] lg:px-20 xl:px-[164px] relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <Heading
          type="h2"
          otherClasses=" text-[26px] lg:text-[36px] border-b-[1px] mx-auto font-Poppins mb-8 pb-4 border-b-addition_button_color w-full text-white lg:w-fit text-center"
        >
          {mainHeading}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-10">
          {locationData.map(
            ({
              desktopImage,
              mobileImage,
              heading,
              city,
              slug: { current },
            },index) => {
              return (
                <Link
                key ={index}
                  to={`/${current}`}
                  className="flex flex-col justify-center items-center w-full"
                >
                  <Image
                    imageData={desktopImage}
                    otherClasses="mb-6 hidden lg:!block"
                  />
                  <Image
                    imageData={mobileImage}
                    otherClasses="mb-6 lg:!hidden"
                  />
                  <Heading
                    type="h3"
                    otherClasses="text-white font-Poppins mb-2"
                  >
                    {heading}
                  </Heading>
                  <p className=" font-Public_Sans font-bold text-sm text-gray-400 tracking-[0.03em] leading-[18px]">
                    {city}
                  </p>
                </Link>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default WhereWeLocated

export const query = graphql`
  fragment WhereWeLocated on SanityLocationSection {
    __typename
    identifier
    title
    mainHeading
  }
`
