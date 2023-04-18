import React from 'react'
import clsx from 'clsx'

import './reviewscard.scss'

export const ReviewCard = ({
  otherClasses,
  name,
  logo,
  _rawSubText,
  userImage,
}) => {
  const reviewsCardClasses = clsx(otherClasses, '')

  return <div className={reviewsCardClasses} data-testid="reviews-card"></div>
}

export default ReviewCard
