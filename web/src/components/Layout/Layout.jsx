import React from 'react'
import clsx from 'clsx'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
