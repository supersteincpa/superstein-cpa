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
import TwoColumnHeroesSection from '../../sections/TwoColumnHeroesSection/TwoColumnHeroesSection'
import OurBodySection from '../../sections/OurBodySection/OurBodySection'
import IndustryServicesSection from '../../sections/IndustryServicesSection/IndustryServicesSection'
import Challenges from '../../sections/Challenges/Challenges'
import IndustryTwoColumnSection from '../../sections/IndustryTwoColumnSection/IndustryTwoColumnSection'
import IndustriesSliderSection from '../../sections/IndustriesSliderSection/IndustriesSliderSection'
import MissionSection from '../../sections/MissionSection/MissionSection'
import OurHistory from '../../sections/OurHistory/OurHistory'
import MeetTheTeamSection from '../../sections/MeetTheTeamSection/MeetTheTeamSection'
import LocationTwoColumnSection from '../../sections/LocationTwoColumnSection/LocationTwoColumnSection'
import LocationPageTwoColumn from '../../sections/LocationPageTwoColumn/LocationPageTwoColumn'
import ReviewsHeroSection from '../../sections/ReviewsHeroSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }) => {
    switch (__typename) {
      case 'SanityReviewsHeroSection':
        return (
          <ReviewsHeroSection key={__typename} {...sectionData} {...props} />
        )
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
      case 'SanityTwoColumnHeroes':
        return (
          <TwoColumnHeroesSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityBlogsReference':
        return <BlogPage key={__typename} {...sectionData} {...props} />
      case 'SanityReviewsReference':
        return <ReviewsSection key={__typename} {...sectionData} {...props} />
      case 'SanityOurBodySection':
        return <OurBodySection key={__typename} {...sectionData} {...props} />
      case 'SanityIndustryServicesSection':
        return (
          <IndustryServicesSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityChallengesSection':
        return <Challenges key={__typename} {...sectionData} {...props} />
      case 'SanityIndustryTwoColumnSection':
        return (
          <IndustryTwoColumnSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityIndustriesSliderSection':
        return (
          <IndustriesSliderSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityMissionSection':
        return <MissionSection key={__typename} {...sectionData} {...props} />
      case 'SanityOurHistory':
        return <OurHistory key={__typename} {...sectionData} {...props} />
      case 'SanityMeetTheTeamSection':
        return (
          <MeetTheTeamSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityLocationTwoColumnSection':
        return (
          <LocationTwoColumnSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityLocationPageTwoColumnSection':
        return (
          <LocationPageTwoColumn key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
