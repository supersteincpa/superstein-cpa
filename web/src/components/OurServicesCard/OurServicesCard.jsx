import React from 'react'
import clsx from 'clsx'
import './ourservicescard.scss'
import { Heading } from '../Heading'
import Icon from '../Icon/Icon'
import { Image } from '../Image'
import { RichText } from '../RichText'
import { Link } from 'gatsby'

export const OurServicesCard = ({
  otherClasses,
  slug: { current },
  servicesCard: { heading, _rawSubText, image },
}) => {
  const ourServicesCardClasses = clsx(
    otherClasses,
    'w-full flex items-center gap-[29px] group'
  )

  return (
    <Link
      to={`/${current}`}
      className={ourServicesCardClasses}
      data-testid="our-services-card"
    >
      <div className="relative lg:block hidden">
        <div className="absolute  min-w-[132px] min-h-[140px] w-[132px] h-[140px] left-0 top-0  bg-[#00000080] hidden group-hover:flex rounded-[15px]  group-hover:z-10 items-center justify-center">
          <Icon icon="white-plus-icon" iconHeight={32} iconWidth={32} />
        </div>
        <Image
          imageData={image}
          otherClasses="min-w-[132px] min-h-[140px] w-[132px] h-[140px] rounded-[15px]"
        />
      </div>
      <div className="w-full relative pb-6 border-b-[1px] group-hover:border-b-addition_button_color border-b-white">
        <Heading
          type="h5"
          otherClasses="text-white group-hover:text-addition_button_color font-Poppins mb-4 flex items-center justify-between"
        >
          {heading}
          <span className="our_services_card_share_icon group-hover:bg-addition_button_color bg-white block"></span>
        </Heading>
        <article className="our_services_rich_text">
          <RichText richText={_rawSubText} />
        </article>
      </div>
    </Link>
  )
}

export default OurServicesCard
