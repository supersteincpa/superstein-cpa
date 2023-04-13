import React from 'react'
import clsx from 'clsx'

import BlogCard from '../../components/BlogCard'
import Heading from '../../components/Heading'

export const BlogSection = ({ otherClasses, nodes, heading }) => {
  const blogSectionClasses = clsx(
    otherClasses,
    'w-full  px-4 lg:px-[100px] xl:px-[156px] mx-auto max-w-[1512px] mb-[60px] lg:mb-[120px]'
  )

  return (
    <section className={blogSectionClasses} data-testid="blog-section">
    {heading&&   <Heading
        type="h2"
        otherClasses={clsx(
          'font-bold text-black mb-8 font-montserrat relative before:block before:mb-6 before:w-[60px] before:h-[6px] before:bg-primary_blue_600'
        )}
      >
        {heading}
      </Heading>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {nodes.map((data, index) => {
          return <BlogCard key={index} {...data} />
        })}
      </div>
    </section>
  )
}

export default BlogSection