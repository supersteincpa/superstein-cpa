import React from 'react'
import clsx from 'clsx'

import Heading from '../Heading/Heading'
import Icon from '../Icon/Icon'
import { Image } from '../Image'
import { RichText } from '../RichText'
import './servicescard.scss'
import { Link } from 'gatsby'

export const ServicesCard = ({
  otherClasses,
  slug: { current },
  industryCard: { image, heading, _rawSubText },
}) => {
  const servicesCardClasses = clsx(
    otherClasses,
    'w-full flex flex-col items-start justify-start bg-gray-50 p-6 rounded-[15px] cursor-pointer group hover:shadow-md'
  )

  return (
    <Link
      to={`/${current}`}
      className={servicesCardClasses}
      data-testid="services-card"
    >
      <div className="rounded-[15px] relative w-[125px] overflow-hidden mb-6">
        <Image
          imageData={image}
          otherClasses="w-[125px] h-[125px] rounded-[15px]"
          imgClassName="rounded-[15px]"
        />
        <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center text-white bg-black opacity-0 transition duration-500 w-full group-hover:opacity-50 ">
          <Icon icon="white-plus-icon" iconHeight={32} iconWidth={32} />
        </div>
      </div>
      <Heading
        type="h5"
        otherClasses="mb-4 group-hover:text-addition_button_color"
      >
        {heading}
      </Heading>
      <article className="services_card_rich_text">
        <RichText richText={_rawSubText} />
      </article>
    </Link>
  )
}

export default ServicesCard
