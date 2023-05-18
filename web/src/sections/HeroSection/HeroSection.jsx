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
    'lg:h-[627px] w-full relative mt-[66px] lg:mt-[84px] z-10 main_container_min_hero_section'
  )

  return (
    <>
      <section className={heroSectionClasses} data-testid="hero-section">
        <Image
          objectFit="fill"
          imageData={backgroundDesktopImage}
          otherClasses="!absolute left-0 top-0 w-full h-full !hidden md:!block mini_hero_backgrounde_image"
        />
        <Image
          objectFit="fill"
          imageData={backgroundMobileImage}
          otherClasses="!absolute left-0 top-0 w-full h-full md:!hidden mini_hero_backgrounde_image"
        />
        <div className="max-w-[1512px] mx-auto  px-4 pt-10 pb-[70px] md:pt-[110px] md:pb-[170px] lg:pl-20 xl:pl-[164px] lg:pr-0 ">
          <div className=" w-full relative lg:max-w-[875px]">
            <Heading
              type="h1"
              otherClasses="lg:text-[52px] lg:leading-[78px] text-[34px] leading-[44px] mb-8 text-white font-light font-Poppins "
            >
              {mainHeading}
            </Heading>
            <div className="mb-6 hero_section_rich_text">
              <RichText richText={_rawSubText} />
            </div>
            <Button onClick={() => toggleFunc('Contact Us')} {...button} />
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
