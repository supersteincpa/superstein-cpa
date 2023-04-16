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
    'main_container_min_hero_section  mt-[66px] lg:mt-[84px] pt-[85px] lg:pt-[134px]  pb-[109px] lg:pb-[176px]',
    type === 'secondary',
    ' w-full relative z-10',
    type === 'primary' && 'bg-gray-900'
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
        className={clsx(
          'max-w-[1512px]  mx-auto px-6 lg:px-20 xl:px-[164px]',
          type === 'secondary' && ' items-center flex justify-center',
          type === 'primary' && ' relative'
        )}
      >
        {type === 'primary' && sectionTitle && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {sectionTitle}
            </p>
          </div>
        )}
        <div
          className={clsx(
            'w-full relative lg:max-w-[875px] flex flex-col',
            type === 'secondary' && ' justify-center items-center',
            type === 'primary' && ' w-full'
          )}
        >
          {mainHeading && (
            <Heading
              type="h6"
              otherClasses={clsx(
                'font-light text-[34px] lg:text-[52px] leading-[44px] lg:leading-[78px] text-white font-Poppins',
                type === 'secondary' ? 'text-center' : 'text-left'
              )}
            >
              {mainHeading}
            </Heading>
          )}
          {type === 'primary' && (
            <div className="bg-addition_button_color h-[2px] mb-6"></div>
          )}
          {_rawSubText && (
            <article className="mb-6 mini_hero_section_rich_text ">
              <RichText richText={_rawSubText} />
            </article>
          )}
          {button && (
            <Button
              onClick={() => toggleFunc('Contact Us')}
              {...button}
              otherClasses="w-fit"
            />
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
