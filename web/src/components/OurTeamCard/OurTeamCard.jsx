import React from 'react'
import clsx from 'clsx'

import Heading from '../Heading/Heading'
import image from '../../images/temp/where-we-located-imageOne.png'
import { Image } from '../Image'
import { Link } from 'gatsby'

export const OurTeamCard = ({
  otherClasses,
  image,
  name,
  about,
  slug: { current },
}) => {
  const ourTeamCardClasses = clsx(
    otherClasses,
    'w-full flex flex-col items-center gap-6'
  )

  return (
    <Link
      to={`/${current}`}
      className={ourTeamCardClasses}
      data-testid="our-team-card"
    >
      <Image
        imageData={image}
        imgClassName="rounded-[30px]"
        otherClasses="w-full  rounded-[30px]"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <Heading type="h3" otherClasses="text-center ">
          {name}
        </Heading>
        <p className="font-bold  text-sm text-gary-900 leading-[18px] tracking-[0.03em]">
          {about}
        </p>
      </div>
    </Link>
  )
}

export default OurTeamCard
