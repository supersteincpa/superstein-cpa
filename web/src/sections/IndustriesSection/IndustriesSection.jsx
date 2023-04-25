import React from 'react'
import clsx from 'clsx'
import './industriessection.scss'
import circleImage from '../../images/background-circle-pattern.svg'
import { graphql } from 'gatsby'
import { Heading } from '../../components/Heading'
import { RichText } from '../../components/RichText'
import { Image } from '../../components/Image'
import Button from '../../components/Button/Button'
export const IndustriesSection = ({
  otherClasses,
  title,
  mainHeading,
  _rawSubText,
  isBackground,
  _rawListText,
  image,
  button,
}) => {
  const industriesSectionClasses = clsx(
    otherClasses,
    ' w-full',
    isBackground
      ? 'py-[91px] lg:py-[190px] industries_main_container bg-gray-50 mb-[-30px] lg:mb-[-110px]'
      : 'lg:py-[140px] py-[64px] relative overflow-x-clip'
  )

  return (
    <section
      className={industriesSectionClasses}
      data-testid="industries-section"
    >
      {!isBackground && (
        <img
          src={circleImage}
          alt="circle"
          className="absolute right-0 top-0 lg:top-auto lg:bottom-[-238px]"
        />
      )}
      <div className="max-w-[1512px] mx-auto w-full px-6 lg:px-20 xl:px-[164px] relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center mb-6">
          <Heading type='h2' otherClasses="font-Poppins text-gray-900 w-full lg:min-w-[337px] lg:w-[337px] pb-6 lg:pr-8 border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-b-addition_button_color lg:border-r-addition_button_color">
            {mainHeading}
          </Heading>
          <article className="industries_rich_text w-full">
            <RichText richText={_rawSubText} />
          </article>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
          <div className="w-full lg:w-2/4">
            <article className="industries_list_text">
              <RichText richText={_rawListText} />
            </article>
            <div className="mt-8 lg:mt-10">
              <Button {...button} />
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <Image imageData={image} otherClasses="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection

export const query = graphql`
  fragment IndustrySection on SanityIndustriesSection {
    __typename
    identifier
    title
    mainHeading
    _rawSubText
    isBackground
    _rawListText
    image {
      ...CustomImage
    }
    button {
      ...Button
    }
  }
`
