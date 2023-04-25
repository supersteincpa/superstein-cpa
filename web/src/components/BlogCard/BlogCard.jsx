import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

import Image from '../Image'
import Heading from '../Heading/Heading'
import { differenceInDays, format, formatDistance } from 'date-fns'

export const BlogCard = ({
  otherClasses,
  image,
  slug:{current},
  mobileImage,
  blogCategory: { category },
  publishedAt,
  title,
}) => {
  const BlogCardClasses = clsx(otherClasses, 'w-full group')

  return (
    <Link   to={`/${current}`} className={BlogCardClasses} data-testid="post-card">
      <Image imageData={mobileImage} otherClasses="h-[240px] w-full mb-6 rounded-[30px]" />
      <p className="text-gray-800 font-bold font-Public_Sans tracking-[0.03em] text-[14px] leading-[18px] uppercase  mb-4">
        {category} /{' '}
        {differenceInDays(new Date(publishedAt), new Date()) > 3
          ? formatDistance(new Date(publishedAt), new Date())
          : format(new Date(publishedAt), 'MMMM d, yyyy')}
      </p>
      <Heading
        type="h4"
        otherClasses="text-[18px] leading-[24px] font-normal font-Poppins text-gray-900  group-hover:text-[#4679E6] "
      >
        {title}
      </Heading>
    </Link>
  )
}

export default BlogCard
