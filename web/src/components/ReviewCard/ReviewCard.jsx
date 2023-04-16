import React from 'react'
import clsx from 'clsx'

import RichText from '../RichText'
import Image from '../Image'

import './reviewscard.scss'

export const ReviewCard = ({
  otherClasses,
  name,
  logo,
  _rawSubText,
  userImage,
}) => {
  const reviewsCardClasses = clsx(
    otherClasses,
    'z-10 rounded-[15px] bg-gray-50 reviews_conatiner_box_shadow h-fit p-8 '
  )

  return (
    <div className={reviewsCardClasses} data-testid="reviews-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          {userImage.asset && (
            <Image
              imgClassName="rounded-full"
              imageData={userImage}
              otherClasses="min-w-10 min-h-10 h-10 w-10"
            />
          )}
          <p className="font-bold font-Public_Sans leading-6 text-base  text-gray-900 tracking-[0.03em] ">
            {name}
          </p>
        </div>
      <Image imageData={logo} otherClasses="w-auto h-auto" />
      </div>
      <article className="reviews_rich_text mt-4">
        <RichText
          richText={_rawSubText}
          otherClasses="text-base text-[16px] font-medium text-typography_body montserrat leading-[24px] "
        />
      </article>
    </div>
  )
}

export default ReviewCard
