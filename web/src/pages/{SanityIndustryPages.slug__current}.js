import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'

const IndustryTemplate = (props) => {
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

export default IndustryTemplate

export const query = graphql`
  query IndustryQuery($id: String!) {
    page: sanityIndustryPages(id: { eq: $id }) {
      __typename
      seoTitle
      metaDescription
      pageBuilder {
        ...TwoColumnHeroesSection
        ...ChallengesSection
        ...OurServicesSection
        ...IndustryTwoColumnSection
        ...TestmionailSection
        ...WhereWeLocated
        ...CTASection
      }
    }
  }
`
