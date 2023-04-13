import React from 'react'
import { graphql, Link } from 'gatsby'
import clsx from 'clsx'

import Icon from '../Icon/Icon'

import './button.scss'

export const Button = ({
  label = '',
  variant = 'primary',
  otherClasses,
  form,
  slug,
  onClick,
}) => {
  const buttonClasses = clsx(
    otherClasses,
    variant === 'primary' &&
      `px-6 lg:px-10 py-[5px] lg:py-[9px] bg-addition_button_color rounded-full text-sm lg:text-lg font-normal text-white font-Poppins leading-6 primary_button_hover_transition`,
    variant === 'secondary' &&
      `px-6 lg:px-10 py-[7px] lg:py-[9px] bg-transparent rounded-full text-sm lg:text-lg font-normal text-addition_button_color font-Poppins leading-6 active:py-[5px] lg:active:py-[7px] active:px-[22px] lg:active:px-[38px] secondary_button_hover_transition`,
    variant === 'text-link-light' &&
      `px-4 py-2 bg-transparent rounded-full text-base font-normal text-addition_button_color tracking-[0.03em] font-Poppins leading-6 hover:bg-primary_blue_50 active:py-[5px] active:px-[13px] text_link_light_button_hover_transition`,
    variant === 'text-link-dark' &&
      `px-4 py-2 bg-transparent rounded-full text-base font-normal text-white tracking-[0.03em] font-Poppins leading-6 hover:text-addition_button_color hover:bg-primary_blue_50 active:py-[5px] active:px-[13px] active:text-white text_link_dark_button_hover_transition`
  )

  const withIcon = variant === 'text-link'

  if (slug && !form) {
    const { current } = slug
    return (
      <Link to={`/${current}`} className={buttonClasses}>
        {label}
        {withIcon && (
          <Icon icon="button-right-arrow" iconWidth={24} iconHeight={24} />
        )}
      </Link>
    )
  }

  return (
    <button
      onClick={(e) => {
        onClick && onClick(form, e)
      }}
      className={buttonClasses}
      data-testid="button"
    >
      {label}
      {withIcon && (
        <Icon icon="button-right-arrow" iconWidth={24} iconHeight={24} />
      )}
    </button>
  )
}

export default Button

export const query = graphql`
  fragment Button on SanityButton {
    label
    variant
    action
    form
    slug {
      current
    }
  }
`
