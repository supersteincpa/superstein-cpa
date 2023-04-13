import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'

import Heading from '../../components/Heading'
import { BlogCard } from '../../components/BlogCard'
import Icon from '../../components/Icon/Icon'

export const FeaturedBlogSection = ({
  otherClasses,
  mainHeading,

}) => {
  const FeaturedBlogSectionClasses = clsx(
    otherClasses,
    'w-full  px-4 lg:px-[100px] xl:px-[156px] mx-auto max-w-[1512px] mb-[60px] lg:mb-[120px] relative mt-[112px]'
  )

  const FeaturedBlogs = useStaticQuery(graphql`
    query FeaturedBlogs {
      allSanityBlogs(sort:{ _updatedAt: DESC }, limit: 3, filter: {featured: {eq: true}}) {
        nodes {
          slug {
            current
          }
          mobileImage {
            ...CustomImage
          }
          title
          blogCategory {
            category
          }
          publishedAt
        }
      }
    }
  `)

  const nodes = FeaturedBlogs?.allSanityBlogs?.nodes
  return (
    <section className={FeaturedBlogSectionClasses} data-testid="blog-section">
      {mainHeading&&   <Heading
        type="h2"
        otherClasses={clsx(
          'font-bold text-black mb-8 font-montserrat relative before:block before:mb-6 before:w-[60px] before:h-[6px] before:bg-primary_blue_600'
        )}
      >
        {mainHeading}
      </Heading>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {nodes.map((data, index) => {
          return <BlogCard key={index} {...data} />
        })}
      </div>
      <Icon icon='circle-pattern' iconHeight={1236} iconWidth={1236}/>
    </section>
  )
}

export default FeaturedBlogSection

export const query = graphql`
  fragment FeaturedBlogSection on SanityFeaturedBlogsSection {
    __typename
    identifier
    mainHeading
  }
`