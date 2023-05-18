import React from 'react'
import clsx from 'clsx'

import Image from '../../components/Image/Image'
import './reviewscard.scss'
import { RichText } from '../RichText'

export const ReviewCard = ({
  otherClasses,
  userImage,
  logoImage,
  name,
  _rawSubText,
}) => {
  const reviewsCardClasses = clsx(
    otherClasses,
    'rounded-[15px] bg-gray-50 h-fit p-8'
  )

  return (
    <div className={reviewsCardClasses} data-testid="reviews-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {userImage?.asset && (
            <Image
              imgClassName="rounded-full"
              imageData={userImage}
              otherClasses="min-w-10 min-h-10 h-10 w-10"
            />
          )}

          <p className="font-bold font-source_sans_pro leading-6 text-base text-gray-900 ">
            {name}
          </p>
        </div>
        {logoImage?.asset && (
          <Image imageData={logoImage} otherClasses="w-auto h-auto" />
        )}
      </div>
      <div className="reviews_rich_text mt-4">
        <RichText
          richText={_rawSubText}
          otherClasses="text-base text-[16px] font-medium text-typography_body montserrat leading-[24px] "
        />
      </div>
    </div>
  )
}

export default ReviewCard
