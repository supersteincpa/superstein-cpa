import React from 'react'
import clsx from 'clsx'
import Image from '../Image'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import { differenceInDays, format, formatDistance } from 'date-fns'

export const BlogCard = ({
  otherClasses,
  image,
  slug,
  mobileImage,
  blogCategory: { category },
  publishedAt,
  title,
}) => {
  const BlogCardClasses = clsx(otherClasses, 'w-full')

  return (
    <div className={BlogCardClasses} data-testid="post-card">
      <Image imageData={mobileImage} otherClasses="h-[240px] w-full mb-6" />
      <p className="text-primary_green_800 font-semibold font-raleway tracking-[0.11em] text-sm leading-[18px] opacity-40 mb-4">
        {category} /{' '}
        {differenceInDays(new Date(publishedAt), new Date()) > 3
          ? formatDistance(new Date(publishedAt), new Date())
          : format(new Date(publishedAt), 'MMMM d, yyyy')}
      </p>
      <Heading
        type="h4"
        otherClasses="text-2xl leading-[34px] font-semibold font-crimson_pro text-primary_green_800"
      >
        {title}
      </Heading>
      <Button
        variant="text-link-secondary"
        label="Learn More"
        slug={slug}
        otherClasses="lg:flex mt-4 hidden sm:w-fit"
      />
    </div>
  )
}

export default BlogCard
