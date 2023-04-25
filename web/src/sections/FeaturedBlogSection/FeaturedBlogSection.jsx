import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import circleImage from '../../images/background-circle-pattern.svg'

import Heading from '../../components/Heading'
import { BlogCard } from '../../components/BlogCard'

export const FeaturedBlogSection = ({ otherClasses, heading, title }) => {
  const FeaturedBlogSectionClasses = clsx(
    otherClasses,
    'w-full  px-4 lg:px-20 overflow-hidden xl:px-[156px] mx-auto max-w-[1512px] mb-[60px] lg:mb-[120px] relative mt-[112px] '
  )

  const FeaturedBlogs = useStaticQuery(graphql`
    query FeaturedBlogs {
      allSanityBlogs(
        sort: { _updatedAt: DESC }
        limit: 3
        filter: { featured: { eq: true } }
      ) {
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
      {title && (
        <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
          <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
            {title}
          </p>
        </div>
      )}
      <img
        src={circleImage}
        alt="circle"
        className="absolute left-0 bottom-[-475px]  lg:rotate-180 lg:top-auto lg:bottom-[-930px] lg:h-[1236px] lg:w-[1236px]"
      />
      {heading && (
        <Heading
          type="h2"
          otherClasses={clsx(
            'font-nornal text-gray-900 mb-8 font-Poppins relative after:block after:mt-4 after:w-[125px] after:h-[1px] after:bg-addition_button_color'
          )}
        >
          {heading}
        </Heading>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {nodes.map((data, index) => {
          return <BlogCard key={index} {...data} />
        })}
      </div>
    </section>
  )
}

export default FeaturedBlogSection

export const query = graphql`
  fragment FeaturedBlogSection on SanityFeaturedBlogsSection {
    __typename
    identifier
    title
    heading
  }
`