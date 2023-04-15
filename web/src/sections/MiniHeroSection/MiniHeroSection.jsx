import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import './miniherosection.scss'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Heading'
import { RichText } from '../../components/RichText'
import { Button } from '../../components/Button'

export const MiniHeroSection = ({
  otherClasses,
  toggleFunc,
  backgroundDesktopImage,
  backgroundMobileImage,
  mainHeading,
  _rawSubText,
  type,
  sectionTitle,
  button,
}) => {
  const miniHeroSectionClasses = clsx(
    otherClasses,
    _rawSubText ? 'lg:h-[480px]' : 'lg:h-[390px]',
    type === 'secondary',
    ' w-full relative mt-[66px] lg:mt-[84px] z-10',
    type === 'primary' &&
      '  mini_hero_section_main_container bg-gray-900 mt-[60px] lg:mt-[84px]'
  )

  return (
    <section className={miniHeroSectionClasses} data-testid="mini-hero-section">
      {backgroundDesktopImage && type === 'secondary' && (
        <Image
          objectFit="fill"
          imageData={backgroundDesktopImage}
          otherClasses="!absolute left-0 top-0 w-full h-full !hidden md:!block"
        />
      )}
      {backgroundMobileImage && type === 'secondary' && (
        <Image
          objectFit="fill"
          imageData={backgroundMobileImage}
          otherClasses="!absolute left-0 top-0 w-full h-full md:!hidden"
        />
      )}
      <div
        className={clsx('max-w-[1512px]  mx-auto',
          type === 'secondary' &&
            ' items-center flex justify-center px-6 pt-10 pb-[70px] md:pb-[170px] lg:pl-20 xl:pl-[164px] lg:pr-0 ',
          _rawSubText ? 'md:pt-[80px]' : 'md:pt-[134px]',
          type === 'primary' &&
            ' px-6 pt-10 pb-[60px] relative md:pt-[118px] md:pb-[156px] lg:pl-[118px] '
        )}
      >
        {type === 'primary' && sectionTitle && (
          <p className="hidden lg:block absolute left-6 translate-y-[-50%] top-[50%] -rotate-90 text-gray-500">
            {sectionTitle}
          </p>
        )}
        <div
          className={clsx(
            type === 'secondary' &&
              ' w-full relative lg:max-w-[875px] flex flex-col justify-center items-center',
            type === 'primary' && ' w-full  lg:max-w-[848px]'
          )}
        >
          {mainHeading && (
            <Heading
              type="h1"
              otherClasses="lg:text-[52px] lg:leading-[78px] text-[34px] leading-[44px] mb-8 text-white font-light font-Poppins "
            >
              {mainHeading}
            </Heading>
          )}
          {type === 'primary' && <div className='bg-addition_button_color h-[2px] mb-6'></div>}
          {_rawSubText && (
            <article className="mb-6 mini_hero_section_rich_text ">
              <RichText richText={_rawSubText} />
            </article>
          )}
          {button && (
            <Button onClick={() => toggleFunc('Contact Us')} {...button} />
          )}
        </div>
      </div>
    </section>
  )
}

export default MiniHeroSection

export const query = graphql`
  fragment MiniHeroSection on SanityMiniHeroSection {
    __typename
    identifier
    type
    sectionTitle
    backgroundDesktopImage {
      ...CustomImage
    }
    backgroundMobileImage {
      ...CustomImage
    }
    mainHeading
    button {
      ...Button
    }
    _rawSubText
  }
`
