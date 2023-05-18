import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { Heading } from '../Heading'
import { RichText } from '../RichText'
import { Button } from '../Button'
import { Image } from '../Image'
import './generic.scss'
import roundedImage from '../../images/background-circle-pattern.svg'

export const GenericTwoColumn = ({
  otherClasses,
  toggleFunc,
  isWhite,
  genericSections: {
    title,
    heading,
    _rawSubText,
    text,
    reversed,
    mobileReversed,
    isDecorator,
    desktopImage,
    mobileImage,
    button,
  },
}) => {
  const genericTwoColumnClasses = clsx(otherClasses, 'relative w-full')

  return (
    <div className={genericTwoColumnClasses} data-testid="generic-two-column">
      {isDecorator && (
        <img
          src={roundedImage}
          alt="rounded"
          className={clsx(
            'absolute translate-y-[-50%] top-2/4 custom_class',
            reversed ? 'left-0 rotate-180' : ' right-0'
          )}
        />
      )}
      <div
        className={clsx(
          'flex max-w-[1512px] mx-auto w-full gap-10 xl:gap-[64px] px-6 lg:px-20 xl:px-[156px] items-center my-[64px] lg:my-[128px] relative',
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
          mobileReversed ? 'flex-col-reverse' : 'flex-col'
        )}
      >
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="w-full lg:w-2/4 flex flex-col ">
          {heading && (
            <Heading
              type="h2"
              otherClasses={clsx(isWhite ?'text-white' : 'text-gray-900' ,"  mb-6 after:mt-6 after:w-full after:h-[1px] after:bg-addition_button_color after:block")}
            >
              {heading}
            </Heading>
          )}
          <div className={clsx(isWhite ? "generic_rich_text_white mb-6": "generic_rich_text mb-6")}>
            <RichText richText={_rawSubText} />
          </div>
          {button && (
            <Button
              onClick={() => toggleFunc(button?.form)}
              otherClasses="w-fit"
              {...button}
            />
          )}
        </div>

        <div className="w-full lg:w-2/4 relative">
          <Image
            placeholder="none"
            imageData={desktopImage}
            otherClasses={clsx(
              'relative z-10',
              reversed ? 'float-right' : 'float-left',
              mobileImage && 'w-full lg:w-auto !hidden sm:!block'
            )}
          />
          {mobileImage && (
            <Image
              placeholder="none"
              objectFit="contain"
              imageData={mobileImage}
              otherClasses="w-full sm:!hidden"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GenericTwoColumn

export const query = graphql`
  fragment GenericTwoColumnSection on SanityTwoColumnGenericSections {
    __typename
    identifier
    genericSections {
      title
      heading
      _rawSubText
      text
      reversed
      mobileReversed
      mobileImage {
        ...CustomImage
      }
      isDecorator
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      button {
        ...Button
      }
    }
  }
`
