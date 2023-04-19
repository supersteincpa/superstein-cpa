import React from 'react'
import clsx from 'clsx'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'
import { useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { graphql, useStaticQuery } from 'gatsby'

export const Layout = ({ children }) => {
  const [toggle, setToggle] = useState()
  const [isScrollToTop, setIsScrollToTop] = useState(true)
  const isDesktop = useMediaPredicate('(min-width: 768px)')

  React.useEffect(() => {
    if (toggle) {
      hideBodyScroll()
    } else {
      showBodyScroll()
    }
  }, [isDesktop, setToggle, toggle])

  useEffect(() => {
    setIsScrollToTop(true)
  }, [])

  const toggleFunc = (flag) => {
    setToggle(flag)
  }
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { toggleFunc })
    }
    return child
  })

  useEffect(() => {
    window.setTimeout(() => window.scrollTo(0, 10), 10)
  }, [isScrollToTop])

  const layoutLinks = useStaticQuery(graphql`
    query LayoutLinks {
      allSanityServicesPages {
        nodes {
          title
          slug {
            current
          }
        }
      }
      allSanityIndustryPages {
        nodes {
          title
          slug {
            current
          }
        }
      }
      allSanityLocationsPages {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `)

  const pageData = {
    services: layoutLinks?.allSanityServicesPages?.nodes,
    industries: layoutLinks?.allSanityIndustryPages?.nodes,
    locations: layoutLinks?.allSanityLocationsPages?.nodes,
  }

  return (
    <>
      <Navbar />
      <div
        className={clsx(
          'w-full fixed top-0 right-0 flex justify-end h-full z-[100] overflow-hidden',
          toggle === 'Contact Us' ? 'w-full' : 'w-0'
        )}
      >
        <button
          aria-label="button"
          onClick={() => toggleFunc()}
          className="w-full h-full absolute left-0 top-0 bg-[#00000083]"
        ></button>
        <ContactForm
          {...pageData}
          formType="Contact Us"
          toggleCancel={toggleFunc}
          otherClasses={clsx(
            'z-10 transition-width ',
            toggle === 'Contact Us' ? 'w-full' : 'w-0'
          )}
        />
      </div>
      <main>{childrenWithProps}</main>
      <Footer />
    </>
  )
}

export default Layout
