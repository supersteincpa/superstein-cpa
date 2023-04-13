import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { differenceInDays, formatDistance, format } from 'date-fns'

import Heading from '../../components/Heading'
import Image from '../../components/Image'
import Icon from '../../components/Icon'
import RichText from '../../components/RichText'

import './blogpostsection.scss'

export const BlogPostSection = ({
  otherClasses,
  title,
  authors,
  slug,
  _rawBody,
  publishedAt,
  desktopImage,
  siteMetadata,
}) => {
  const blogPostSectionClasses = clsx(
    otherClasses,
    'px-[16px] lg:px-[156px] w-full mx-auto max-w-[1512px] mt-[180px]'
  )

  const [copied, setCopied] = useState(false)

  function copy() {
    setCopied(true)
    const el = document.createElement('input')
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  useEffect(() => {
    let timer
    if (copied) {
      timer = setTimeout(() => setCopied(false), 1000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [copied])

  const shareButtons = siteMetadata && (
    <>
      <a
        href="https://www.linkedin.com/company/audit-club?original_referer=https%3A%2F%2Fwww.google.com%2F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="linkedin-blue-icon" iconHeight={20} iconWidth={19.05} />
      </a>
      <button onClick={copy} className="relative w-[20px] h-[20px  ]">
        <p
          className={clsx(
            'absolute w-[89px] text-gray_900 fontFamily2 animate-waving-hand font-bold  text-xs bottom-[-30px] left-[-70px] sm:left-[-50px] lg:left-[-30px]',
            copied ? 'opacity-1' : 'opacity-0 '
          )}
        >
          {copied ? 'Link is Copied' : ''}
        </p>
        <Icon icon="link-blue-icon" iconHeight={15.84} iconWidth={15.84} />
      </button>
    </>
  )

  return (
    <section className={blogPostSectionClasses} data-testid="blog-post-section">
      <div className=" w-full lg:w-[800px] mx-auto mb-20">
        <Heading
          type="h1"
          otherClasses="text-gray-900 font-Poppins font-normal mb-7"
        >
          {title}
        </Heading>
        <div className="flex justify-between flex-col sm:flex-row  gap-5 sm:gap-0 sm:items-center">
          <div className="flex gap-[14px]">
            <Image
              placeholder="none"
              imageData={authors?.image}
              otherClasses="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-[14px] font-semibold font-poppins text-gray-900 leading-5 ">
                {authors?.name}
              </p>
              <p className="text-[14px] leading-5 mt-1 font-normal text-gray_800 font-Public_Sans">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM d, yyyy')}
              </p>
            </div>
          </div>
          <div className="flex gap-6">{shareButtons}</div>
        </div>
      </div>
      {desktopImage && (
        <div className="mb-20">
          <Image
            placeholder="none"
            imageData={desktopImage}
            otherClasses="max-w-[1056px] h-[350px] md:h-[460px] w-full lg:h-[490px]"
          />
        </div>
      )}
      <div className="w-full lg:w-[800px] mx-auto mb-[94px] blog_post_rich_text">
        <RichText richText={_rawBody} />
      </div>
      <div className="flex w-fit mx-auto gap-6 mb-[60px] lg:mb-[120px]">
        {shareButtons}
      </div>
    </section>
  )
}

export default BlogPostSection