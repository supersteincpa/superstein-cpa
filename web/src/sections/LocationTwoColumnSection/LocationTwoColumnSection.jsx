import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'

import icon from '../../images/temp/location-two-column.png'
import image from '../../images/temp/location-two-column-map.png'
import Icon from '../../components/Icon/Icon'

export const LocationTwoColumnSection = ({ otherClasses }) => {
  const locationTwoColumnSectionClasses = clsx(
    otherClasses,
    'w-full py-[78.5px] py-12'
  )

  const arr = [
    {
      icon: icon,
      title: 'Broward',
      _rawText: '3830 Hollywood Blvd.Suite 101Hollywood FL 33021954-602-9100',
    },
    {
      icon: icon,
      title: 'Greenville',
      _rawText:
        '355 South Main Street 1st & 2nd FloorsGreenville, SC 29601123-456-7890',
    },
  ]

  return (
    <section
      className={locationTwoColumnSectionClasses}
      data-testid="location-two-column-section"
    >
      <div className="w-full max-w-[1512px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-14 xl:gap-20 px-6 lg:px-20 xl:px-[156px]">
        <div className="flex flex-col w-full lg:w-2/4 items-cemter justify-center gap-12">
          {arr.map((nodes) => {
            return (
              <div className="flex flex-col lg:flex-row items-center justify-start gap-[29px] group cursor-pointer">
                <div className="w-[132px] relative rounded-[15px] overflow-hidden  hidden lg:block">
                  <img src={nodes.icon} alt="" className="full" />
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
                    {nodes.title}{' '}
                    <span className="our_services_card_share_icon bg-typography group-hover:bg-blue-400"></span>
                  </Heading>
                  <p className=" font-Public_Sans font-normal leading-6 tracking-[0.03em] text-typography text-base mb-4">
                    {nodes._rawText}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-full lg:w-2/4 rounded-[15px]">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default LocationTwoColumnSection
