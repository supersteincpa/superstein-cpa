import React from 'react'
import clsx from 'clsx'

import './cta.scss'
import Button from '../../components/Button/Button'
import Heading from '../Heading/Heading'
import { graphql } from 'gatsby'
import { RichText } from '../RichText'

export const Cta = ({
  otherClasses,
  title,
  mainHeading,
  _rawSubText,
  ctaButtons,
}) => {
  const ctaClasses = clsx(
    otherClasses,
    'w-full cta-clip-path bg-gray-50 py-[91px] lg:py-[210px] -mb-8 lg:mb-[-65px]'
  )
  console.log(ctaButtons);

  return (
    <section className={ctaClasses} data-testid="cta">
      <div className="w-full max-w-[1512px] mx-auto flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-20 justify-center gap-6 relative">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <Heading
          type="h2"
          otherClasses="w-[200px] lg:w-[185px] lg:min-w-[185px] text-[28px] lg:text-4xl font-normal leading-[42px]"
        >
          {mainHeading}
        </Heading>
        <div className="border boder-[1px] border-[#4679E6] w-full h-0 lg:w-0 lg:h-[114px] float-left"></div>
        <div className="lg:max-w-[308px]">
          <article className="cta_rich_text">
            <RichText richText={_rawSubText} />
          </article>
        </div>
        <div className="flex gap-6">
          {(ctaButtons||[]).map((nodes) => {
            return <Button {...nodes} otherClasses="whitespace-nowrap" />
          })}
        </div>
      </div>
    </section>
  )
}

export default Cta

export const query = graphql`
  fragment CTASection on SanityCta {
    __typename
    identifier
    title
    mainHeading
    _rawSubText
    ctaButtons: button {
      ...Button
    }
  }
`
