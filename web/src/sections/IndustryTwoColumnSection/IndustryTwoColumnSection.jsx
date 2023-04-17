import React from 'react'
import clsx from 'clsx'
import GenericTwoColumn from '../../components/GenericTwoColumn/GenericTwoColumn'
import { graphql } from 'gatsby'

export const IndustryTwoColumnSection = ({ otherClasses, genericSections }) => {
  const industryTwoColumnSectionClasses = clsx(
    otherClasses,
    'py-[100px] lg:py-[90px] lg:bg-gray-50 my-[-110px]'
  )

  return (
    <section
      className={industryTwoColumnSectionClasses}
      data-testid="industry-two-column-section"
    >
      <GenericTwoColumn genericSections={genericSections} />
    </section>
  )
}

export default IndustryTwoColumnSection

export const query = graphql`
  fragment IndustryTwoColumnSection on SanityIndustryTwoColumnSection {
    __typename
    identifier
    genericSections {
      title
      heading
      _rawSubText
      text
      reversed
      mobileReversed
      isDecorator
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      button {
        ...Button
      }
    }
  }
`
