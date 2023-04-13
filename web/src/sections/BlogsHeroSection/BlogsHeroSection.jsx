import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'

import './blogsherosection.scss'

export const BlogsHeroSection = ({ otherClasses }) => {
  const blogsHeroSectionClasses = clsx(otherClasses,   '  blogs_main_container bg-gray-900 mt-[80px]' )

  return (
    <section
      className={blogsHeroSectionClasses}
      data-testid="blogs-hero-section"
    >
      <div className=' px-4 pt-10 pb-[60px] relative md:pt-[118px] md:pb-[156px] pl-[118px] max-w-[1512px] mx-auto '>
       <p className='absolute left-6 translate-y-[-50%] top-[50%] -rotate-90 text-gray-500'>1.BLOG</p>
        <div className=" w-full  lg:max-w-[848px]">
          <Heading
            type="h1"
            otherClasses="lg:text-[52px] lg:leading-[78px] text-[34px] leading-[44px] mb-8 text-white font-light font-Poppins  "
          >
            Blogs
          </Heading>
          <p className='text-white font-Public_Sans font-normal tracking-[0.03em] leading-6 text-base  before:mb-6 before:w-[848px] before:h-[1px] before:bg-addition_button_color before:block  '>
          20~30 words lorem ipsum dolor sit amet consectetur. Nunc cras placerat sit faucibus in ac ornare vitae. At euismod aliquet imperdiet mattis. Nunc ornare dignissim aenean vestibulum sit molestie felis.
            </p>        
        </div>
        </div>
    </section>
  )
}

export default BlogsHeroSection
