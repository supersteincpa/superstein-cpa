import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import './cta.scss'

export const Cta = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  button,
  toggleFunc,
}) => {
  const ctaClasses = clsx(
    otherClasses,
    'w-full h-[572px] lg:h-[236px] relative pt-10'
  )

  return <section className={ctaClasses} data-testid="cta"></section>
}

export default Cta
