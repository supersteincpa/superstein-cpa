import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'
import ProfileSection from '../sections/ProfileSection/ProfileSection'
import Cta from '../components/Cta/Cta'
import mocks from '../components/Cta/mocks'

const ProfileTemplate = (props) => {
  const data = props?.data?.page
  return (
    <Layout>
      <ProfileSection {...data} />
      <Cta {...mocks} />
    </Layout>
  )
}

export const Head = ({
  data: {
    page: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default ProfileTemplate

export const query = graphql`
  query ProfileQuery($id: String!) {
    page: sanityProfileSection(id: { eq: $id }) {
      seoTitle
      metaDescription
      image {
        ...CustomImage
      }
      name
      about
      _rawInfoText
      phone
      email
      linkedIn
      _rawBiographyText
      _rawAffiliationText
      _rawExpertiseText
      reviewCards {
        name
        _rawSubText
        userImage {
          ...CustomImage
        }
        logo {
          ...CustomImage
        }
      }
    }
  }
`
