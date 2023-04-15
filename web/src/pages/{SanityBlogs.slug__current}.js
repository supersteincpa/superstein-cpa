import { graphql } from 'gatsby'
import React from 'react'
import BlogPostSection from '../sections/BlogPostSection/BlogPostSection'
import BlogSection from '../sections/BlogSection/BlogSection'
import Seo from '../components/seo'
import Layout from '../components/Layout/Layout'
import Cta from '../components/Cta/Cta'

const CTA_DATA = 
  {
    __typename: 'SanityCta',
    identifier: 'Global CTA',
    title: '08. contact us',
    mainHeading: 'Let’s Work Together',
    _rawSubText: [
      {
        _key: '07dfbf9c7833',
        _type: 'block',
        children: [
          {
            _key: '0ce341d16ee40',
            _type: 'span',
            marks: [],
            text: "If you're dealing with intricate and complex finances, you need Superstein PA on your side. Reach out to us today.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    ctaButtons: [
      {
        label: 'Book a Call',
        variant: 'secondary',
        action: null,
        form: null,
        slug: null,
      },
      {
        label: 'Contact Us',
        variant: 'primary',
        action: null,
        form: null,
        slug: null,
      },
    ],
  }


const BlogPostTemplate = (props) => {
  const { data } = props
  const post = data && data.sanityBlogs
  const site = data && data.site
  const blogSection = data && data?.allSanityBlogs?.nodes
  return (
    <Layout>
      {post && <BlogPostSection {...post} {...site} />}
      <BlogSection nodes={blogSection} />
      <Cta {...CTA_DATA} />
    </Layout>
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
