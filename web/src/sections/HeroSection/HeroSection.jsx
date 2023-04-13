import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'

import Image from '../../components/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText'
import Button from '../../components/Button'

import './herosection.scss'

export const HeroSection = ({
  otherClasses,
  backgroundDesktopImage,
  backgroundMobileImage,
  mainHeading,
  _rawSubText,
  toggleFunc,
  button,
}) => {
  const heroSectionClasses = clsx(
    otherClasses,
    'lg:h-[613px] w-full relative mt-[64px] lg:mt-[110px]'
  )

  return (
    <>
      <Image
        imageData={backgroundDesktopImage}
        otherClasses="!absolute left-0 top-0 w-full h-full !hidden md:!block"
      />
      <Image
        imageData={backgroundMobileImage}
        otherClasses="!absolute left-0 top-0 w-full h-full md:!hidden"
      />
      <section className={heroSectionClasses} data-testid="hero-section">
        <div
          className={clsx(
            'flex gap-8 lg:gap-0 flex-col-reverse lg:flex-row lg:items-center h-full  relative',

            'pb-[263px] lg:pb-0 pl-4 lg:pr-0 lg:pl-[100px] xl:pl-[156px]'
          )}
        >
          <div
            className={clsx(
              'w-full lg:w-2/4  ml-auto',

              'pr-4 lg:pr-0 lg:max-w-[690px]'
            )}
          >
            <Heading
              type="h1"
              otherClasses="lg:text-[52px] lg:leading-[78px] text-[38px] text-primary_blue_200  mb-6 leading-[42px]  font-medium font-petrona "
            >
              {mainHeading}
            </Heading>
            <article
              className={clsx(
                'mb-6 hero_section_rich_text',
                'text-left font-figtree'
              )}
            >
              <RichText richText={_rawSubText} />
            </article>
            <div>
              <Button onClick={() => toggleFunc('Contact Us')} {...button} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSection on SanityHeroSection {
    __typename
    identifier
    mainHeading
    _rawSubText
    backgroundDesktopImage {
      ...CustomImage
    }
    backgroundMobileImage {
      ...CustomImage
    }
    button {
      ...Button
    }
  }
`
