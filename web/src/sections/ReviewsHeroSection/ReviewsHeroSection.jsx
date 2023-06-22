import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import './reviewsherosection.scss'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Heading'
import { RichText } from '../../components/RichText'
import { Button } from '../../components/Button'
import { useState } from 'react'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import Icon from '../../components/Icon/Icon'
import facebookLogo from '../../images/facebook-logo.png'
import yelpLogo from '../../images/yelp-logo.png'
import googleLogo from '../../images/google.png'

export const ReviewsHeroSection = ({
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
  const ReviewsHeroSectionClasses = clsx(
    otherClasses,
    'main_container_min_hero_section  mt-[66px] lg:mt-[84px] pt-[85px] lg:pt-[134px]  pb-[109px] lg:pb-[176px] relative z-10',
    type === 'secondary' && ' w-full relative z-10',
    type === 'primary' && '  reviews_hero_section_main_container bg-gray-900 '
  )
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(true)
  }
  const toggleCancel = () => {
    setShow(false)
  }

  return (
    <section className={ReviewsHeroSectionClasses} data-testid="reviews-hero-section">
      {backgroundDesktopImage && type === 'secondary' && (
        <Image
          objectFit="fill"
          imageData={backgroundDesktopImage}
          otherClasses="!absolute left-0 top-0 w-full h-full !hidden md:!block reviews_hero_backgrounde_image"
        />
      )}
      {backgroundMobileImage && type === 'secondary' && (
        <Image
          objectFit="fill"
          imageData={backgroundMobileImage}
          otherClasses="!absolute left-0 top-0 w-full h-full md:!hidden reviews_hero_backgrounde_image"
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
              type="h1"
              otherClasses={clsx(
                'font-light text-[34px] lg:text-[52px] leading-[44px] lg:leading-[78px] text-white font-Poppins',
                type === 'secondary' ? 'text-center' : 'text-left'
              )}
            >
              {mainHeading}
            </Heading>
          )}
          {type === 'primary' && (
            <div className="bg-addition_button_color h-[2px] my-6 "></div>
          )}
          {_rawSubText && (
            <div
              className={clsx(
                'mb-6 reviews_hero_section_rich_text ',
                type === 'secondary' && 'text-center'
              )}
            >
              <RichText richText={_rawSubText} />
            </div>
          )}
          {/* {button && (
            <Button
              onClick={() => toggleFunc('Contact Us')}
              {...button}
              otherClasses="w-fit"
            />
          )} */}
          {button?.label && <Button {...button} onClick={() => toggleShow()} otherClasses="w-fit"/>}
        </div>
      </div>
      <ModalComponent
        handleClose={toggleCancel}
        show={show}
        otherClasses="max-w-[584px] w-full p-4 rounded-lg"
      >
        <div className="pb-16">
          <div className="flex justify-end mb-7">
            <button onClick={() => toggleCancel()}>
              <Icon
                icon="black-cancel-icon"
                iconHeight={11.67}
                iconWidth={11.67}
              />
            </button>
          </div>
          <Heading
            type="h4"
            otherClasses="mb-6 text-gray-900 font-light font-Manrope text-center"
          >
            Pick a platform to leave your review!
          </Heading>
          <div className="flex flex-col gap-6 items-center">
            <button className="w-[288px] h-[56px] rounded-full border-[1px] border-gray-200 flex justify-center items-center">
            <a href="https://www.facebook.com/PengilleyMyersAPC" target="_blank">
              <img
                src={facebookLogo}
                alt="facebook-logo"
                className="max-w-[115px] max-h-[28px]"
              /></a>
            </button>
            <button className="w-[288px] h-[56px] rounded-full border-[1px] border-gray-200 flex justify-center items-center">
              <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LM7INsgxz043YLRSNaiwMEixNDVOTTU1STNLM7cwtTKoSDI3NDC1MDMzNktLTjEyNvQSLkjNS8_MyUmtVMitTC0qVkgsSAYAIAcWUw&q=pengilley+myers+apc&oq=pengilley+myers+&aqs=chrome.1.69i59j46i175i199i512j69i57j69i60l3.7276j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80d953ee54f6f785:0xb710586636fcd231,1" target="_blank">
              <img
                src={googleLogo}
                alt="google-logo"
                className="max-w-[115px] max-h-[28px]"
              /></a>
            </button>
            <button className="w-[288px] h-[56px] rounded-full border-[1px] border-gray-200 flex justify-center items-center">
            <a href="https://www.yelp.com/biz/pengilley-myers-apc-san-diego" target="_blank">
              <img
                src={yelpLogo}
                alt="yelp-logo"
                className="max-w-[115px] max-h-[28px]"
              /></a>
            </button>
          </div>
        </div>
      </ModalComponent>
    </section>
  )
}

export default ReviewsHeroSection

export const query = graphql`
  fragment ReviewsHeroSection on SanityReviewsHeroSection {
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
