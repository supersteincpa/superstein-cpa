import { graphql } from 'gatsby'
import React from 'react'
import BlogPostSection from '../sections/BlogPostSection/BlogPostSection'
import BlogSection from '../sections/BlogSection/BlogSection'
import Seo from '../components/seo'

const BlogPostTemplate = (props) => {
  const { data } = props
  const post = data && data.sanityBlogs
  const site = data && data.site
  const blogSection = data && data?.allSanityBlogs?.nodes

  return (
    <>
      {post && <BlogPostSection {...post} {...site} />}
      <BlogSection  nodes={blogSection} />
      </>
  )
}

export const Head = ({
  data: {
    sanityBlogs: { seoTitle, metaDescription },
  },
}) => {
  return <Seo title={seoTitle} description={metaDescription} />
}

export default BlogPostTemplate

export const query = graphql`
query BlogPostQuery($id: String!) {
    sanityBlogs(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      publishedAt
      seoTitle
      metaDescription
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      authors {
        name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    allSanityBlogs(limit: 3, filter: { featured: { eq: true } }) {
      nodes {
        slug {
          current
        }
        mobileImage {
          asset {
            gatsbyImageData
          }
        }
        title
        blogCategory {
          category
        }
        publishedAt
      }
    }
  }
 `