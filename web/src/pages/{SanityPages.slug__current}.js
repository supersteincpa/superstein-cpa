import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'

const IndexPage = (props) => {
  return (
    <Layout>
      <EntryRenderer pageBuilderData={props.data.page.pageBuilder} />
    </Layout>
  )
}

export const Head = ({
  data: {
    page: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default IndexPage

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPages(id: { eq: $id }) {
      seoTitle
      metaDescription
      pageBuilder {
        ...HeroSection
        ...GenericTwoColumnSection
        ...OurServicesSection
        ...IndustrySection
        ...WhySuperSteinCPASection
        ...TestmionailSection
        ...FeaturedBlogSection
        ...WhereWeLocated
        ...CTASection
        ...MiniHeroSection
        ...BlogsSection
        ...ReviewsPageSection
        ...IndustryServicesSection
        ...MissionSection
        ...OurHistorySection
      }
    }
  }
`
