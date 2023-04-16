import React from 'react'
import HeroSection from '../../sections/HeroSection/HeroSection'
import GenericTwoColumn from '../GenericTwoColumn/GenericTwoColumn'
import OurServicesSection from '../../sections/OurServicesSection/OurServicesSection'
import IndustriesSection from '../../sections/IndustriesSection/IndustriesSection'
import WhySuperSteinCpa from '../../sections/WhySuperSteinCpa/WhySuperSteinCpa'
import TestimonialSection from '../../sections/TestimonialSection/TestimonialSection'
import FeaturedBlogSection from '../../sections/FeaturedBlogSection/FeaturedBlogSection'
import WhereWeLocated from '../../sections/WhereWeLocated/WhereWeLocated'
import Cta from '../Cta/Cta'
import MiniHeroSection from '../../sections/MiniHeroSection/MiniHeroSection'
import BlogPage from '../../sections/BlogPage/BlogPage'
import ReviewsSection from '../../sections/ReviewsSection/ReviewsSection'

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
      case 'SanityIndustriesSection':
        return (
          <IndustriesSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityWhySuperSteinCpa':
        return <WhySuperSteinCpa key={__typename} {...sectionData} {...props} />
      case 'SanityTestimonials':
        return (
          <TestimonialSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityFeaturedBlogsSection':
        return (
          <FeaturedBlogSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityLocationSection':
        return <WhereWeLocated key={__typename} {...sectionData} {...props} />
      case 'SanityCta':
        return <Cta key={__typename} {...sectionData} {...props} />
      case 'SanityMiniHeroSection':
        return <MiniHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityBlogsReference':
        return <BlogPage key={__typename} {...sectionData} {...props} />
      case 'SanityReviewsReference':
        return <ReviewsSection key={__typename} {...sectionData} {...props} />
      default:
        return null
    }
  })
}

export default EntryRenderer
