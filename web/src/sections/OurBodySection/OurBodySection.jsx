import React from 'react'
import clsx from 'clsx'
import { Link, graphql } from 'gatsby'
import './ourbodysection.scss'
import { Heading } from '../../components/Heading'
import { RichText } from '../../components/RichText'
import { useState } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icon from '../../components/Icon/Icon'
import { Button } from '../../components/Button'
export const OurBodySection = ({
  otherClasses,
  title,
  mainHeading,
  _rawSubText,
  cards,
}) => {
  const ourBodySectionClasses = clsx(
    otherClasses,
    'w-full bg-gray-900 py-[92px] lg:py-[212px] our_body_section_main_container relative z-10'
  )

  const [isMounted, setIsMounted] = useState(false) // Need this for the react-tooltip
  useEffect(() => {
    setIsMounted(true)
  }, [])

  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.refresh()
  if (isMounted) {
    gsap.utils.toArray('.solution_section').forEach((elem, i) => {
      var color_id = document.querySelectorAll('#temp_link_' + i)
      const smallTimeline = gsap.timeline()

      ScrollTrigger.create({
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
        animation: smallTimeline,
        toggleActions: 'play reverse play reverse',

        onEnter: () => {
          document.querySelector('#temp_link_' + i)?.classList.add('active-btn')
        },
        onEnterBack: () => {
          document.querySelector('#temp_link_' + i)?.classList.add('active-btn')
        },
        onLeave: () => {
          document
            .querySelector('#temp_link_' + i)
            ?.classList.remove('active-btn')
        },
        onLeaveBack: () => {
          document
            .querySelector('#temp_link_' + i)
            ?.classList.remove('active-btn')
        },
      })

      if (i === 0) {
        smallTimeline.to(color_id, { duration: 0.25, opacity: 1 }, 0)
      } else {
        smallTimeline.to(color_id, { duration: 0.25, opacity: 1 }, 0)
      }
    })
  }

  const location = typeof window !== 'undefined' && window.location.pathname
  const currentLocation = location && location.substring(0, location.length - 1)

  return (
    <section className={ourBodySectionClasses} data-testid="our-body-section">
      <div className="max-w-[1512px] px-6 lg:px-20 xl:px-[156px] relative">
        {title && (
          <div className="absolute lg:left-6 top-[100px] left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="max-w-[720px] lg:mb-[88px]">
          <Heading type="h2" otherClasses="text-white font-normal font-Poppins">
            {mainHeading}
          </Heading>
          {_rawSubText && (
            <article className="mt-6 our_body_main_container_rich_text">
              <RichText richText={_rawSubText} />
            </article>
          )}
        </div>
        <div className="flex lg:gap-10 xl:gap-20">
          <div className="w-[35%] h-fit sticky top-[84px] hidden lg:block">
            <ul className="flex flex-col gap-6 items-start ">
              {cards.map(({ title }, index) => {
                const linkId = title?.split(' ').join('')
                if (!currentLocation) return null
                return (
                  <li id={`temp_link_${index}`}>
                    <Link
                      to={`${currentLocation}#${linkId}`}
                      className="px-4 py-2 rounded-full text-base font-Public_Sans text-gray-200 leading-6 tracking-[0.03em] flex items-center gap-1"
                    >
                      {title}
                      <span className="min-w-[24px] min-h-[24px] rotate-180 hidden">
                        <Icon
                          icon="testimonail-left-blue-icon"
                          iconHeight={24}
                          iconWidth={24}
                        />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="our_body_card_border_bottom_mobile w-full lg:w-[65%]">
            {cards.map(({ heading, _rawSubText, button, title }) => {
              const linkId = title?.split(' ').join('')
              return (
                <div
                  id={linkId}
                  className="solution_section pt-8 pb-1 lg:pb-8 lg:pt-6 lg:px-5 xl:px-10 border-b-[1px] border-b-gray-300 scroll-mt-[200px]"
                >
                  {heading && (
                    <Heading
                      type="h3"
                      otherClasses="text-white font-normal font-Poppins mb-6"
                    >
                      {heading}
                    </Heading>
                  )}
                  <article className="our_body_card_rich_text">
                    <RichText richText={_rawSubText} />
                  </article>
                  <Button {...button} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBodySection

export const query = graphql`
  fragment OurBodySection on SanityOurBodySection {
    __typename
    identifier
    title
    mainHeading
    _rawSubText
    cards {
      title
      heading
      _rawSubText
      button {
        ...Button
      }
    }
  }
`
