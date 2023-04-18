import React from 'react'
import clsx from 'clsx'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import circleImage from '../../images/background-circle-pattern.svg'
import { graphql, useStaticQuery } from 'gatsby'

export const ReviewsSection = ({ otherClasses }) => {
  const reviewsSectionClasses = clsx(
    otherClasses,
    'w-full mt-[60px] mb-[60px] relative lg:mb-[100px] lg:mt-[98px]'
  )

  const {
    allSanityReviews: { nodes },
  } = useStaticQuery(graphql`
    query Reviews {
      allSanityReviews(sort: { _createdAt: ASC }) {
        nodes {
          name
          userImage {
            ...CustomImage
          }
          logo {
            ...CustomImage
          }
          _rawSubText
        }
      }
    }
  `)

  const halfWayIndex = Math.ceil(nodes.length / 2)
  const firstHalfOfArray = nodes.slice(0, halfWayIndex)
  const secondHalfOfArray = nodes.slice(halfWayIndex)

  return (
    <section className={reviewsSectionClasses} data-testid="reviews-section">
      <img
        src={circleImage}
        alt="circle-image"
        className="absolute  bottom-[-180px] right-0 "
      />
      <div className="max-w-[1512px] relative mx-auto w-full px-4 lg:px-[100px] xl:px-[156px] flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-2/4 flex flex-col gap-12">
          {firstHalfOfArray.map((item, index) => {
            return <ReviewCard {...item} key={index} />
          })}
        </div>
        <div className="w-full lg:w-2/4 flex flex-col gap-12">
          {secondHalfOfArray.map((item, index) => {
            return <ReviewCard {...item} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection

export const query = graphql`
  fragment ReviewsPageSection on SanityReviewsReference {
    __typename
    identifier
  }
`
