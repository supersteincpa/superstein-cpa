import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import BlogPage from '../sections/BlogPage/BlogPage'
import BlogsHeroSection from '../sections/BlogsHeroSection/BlogsHeroSection'

const AuditClubBlogs = () => {
  const {
    allSanityBlogs: { nodes },
  } = useStaticQuery(graphql`
    query GetAllBlogs {
      allSanityBlogs(sort: {_updatedAt: DESC}) {
        nodes {
          title
          publishedAt
          slug {
            current
          }
          mobileImage {
            asset {
              gatsbyImageData
            }
          }
          blogCategory {
            category
          }
        }
      }
    }
  `)

  return (
  <>
    <BlogsHeroSection/>
      <BlogPage nodes={nodes} />
      </>
  )
}

export const Head = () => (
  <Seo
    description="Learn from the experts and gain valuable insights from AuditClub's accounting and CPA blog."
    title="Accounting Blog | AuditClub"
  />
)
export default AuditClubBlogs