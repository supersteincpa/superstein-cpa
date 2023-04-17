import React from 'react'
import clsx from 'clsx'
import GenericTwoColumn from '../../components/GenericTwoColumn/GenericTwoColumn'
import { graphql } from 'gatsby'
import './twocolumnheroessection.scss'

export const TwoColumnHeroesSection = ({ otherClasses, genericSections }) => {
  const twoColumnHeroesSectionClasses = clsx(
    otherClasses,
    'mt-[66px] lg:mt-[84px] two_columns_hero_section_main_container pt-[64px] lg:pt-[96px]'
  )

  return (
    <section
      className={twoColumnHeroesSectionClasses}
      data-testid="two-column-heroes-section"
    >
      <GenericTwoColumn genericSections={genericSections} />
    </section>
  )
}

export default TwoColumnHeroesSection

export const query = graphql`
  fragment TwoColumnHeroesSection on SanityTwoColumnHeroes {
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
