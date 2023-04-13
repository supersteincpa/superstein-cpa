import React from 'react'
import clsx from 'clsx'

import './footer.scss'

export const Footer = ({ otherClasses }) => {
  const footerClasses = clsx(
    otherClasses,
    ''
  )

  const Year = new Date().getFullYear()

  return <div className={footerClasses} data-testid="footer"></div>
}

export default Footer
