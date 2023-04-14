import React from 'react'
import HeroSection from '../../sections/HeroSection/HeroSection'
import GenericTwoColumn from '../GenericTwoColumn/GenericTwoColumn'
import OurServicesSection from '../../sections/OurServicesSection/OurServicesSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }) => {
    switch (__typename) {
      case 'SanityHeroSection':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityTwoColumnGenericSections':
        return <GenericTwoColumn key={__typename} {...sectionData} {...props} />
      case 'SanityServicesSection':
        return (
          <OurServicesSection key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
