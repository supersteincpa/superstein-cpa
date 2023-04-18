import React from 'react'
import clsx from 'clsx'

import image from '../../images/temp/review-card-user-image.png'
import logoImage from '../../images/temp/google-logo.png'
// import Image from '../../components/Image/Image'
import './reviewscard.scss'

export const ReviewCard = ({ otherClasses }) => {
  const reviewsCardClasses = clsx(
    otherClasses,
    'rounded-[15px] bg-gray-50 h-fit p-8'
  )

  return (
    <div className={reviewsCardClasses} data-testid="reviews-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* {image.asset && (
            <Image
              imgClassName="rounded-full"
              imageData={image}
              otherClasses="min-w-10 min-h-10 h-10 w-10"
            />
          )} */}
          <img
            src={image}
            alt=""
            className="min-w-10 min-h-10 h-10 w-10 rounded-full"
          />
          <p className="font-bold font-source_sans_pro leading-6 text-base text-gray-900 ">
            username
          </p>
        </div>
        {/* <Image imageData={logoImage} otherClasses="w-auto h-auto" /> */}
        <img src={logoImage} alt="" className="w-20" />
      </div>
      {/* <article className="reviews_rich_text mt-4">
        <RichText
          richText={_rawUserOverview}
          otherClasses="text-base text-[16px] font-medium text-typography_body montserrat leading-[24px] "
        />
      </article> */}
      <p otherClasses="text-base text-[16px] font-medium text-typography_body montserrat leading-[24px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis
        enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
        orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
        tortor condimentum lacinia quis vel eros donec ac odio tempor orci
        dapibus ultrices in iaculis nunc sed augue lacus
      </p>
    </div>
  )
}

export default ReviewCard
