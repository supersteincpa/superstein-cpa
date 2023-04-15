import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'

import BlogCard from '../../components/BlogCard'

export const BlogPage = ({ otherClasses }) => {
  const blogPageClasses = clsx(
    otherClasses,
    'px-4 lg:px-[100px] xl:px-[156px] mx-auto mt-[156px] lg:mt-[192px] w-full max-w-[1512px]'
  )

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
    <section className={blogPageClasses} data-testid="blog-page">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-[80px] lg:mb-[105px] gap-10">
        {nodes.map((data, index) => {
          return <BlogCard key={index} {...data} />
        })}
      </div>
    </section>
  )
}

export default BlogPage


export const query = graphql`
fragment BlogsSection on SanityBlogsReference {
  __typename
  identifier
}
`
