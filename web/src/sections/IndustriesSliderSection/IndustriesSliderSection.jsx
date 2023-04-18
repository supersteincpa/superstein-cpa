import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import Slider from '../../components/Slider/Slider'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import './industriesslidersection.scss'
import Icon from '../../components/Icon/Icon'

export const IndustriesSliderSection = ({
  otherClasses,
  title,
  mainHeading,
}) => {
  const industriesSliderSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] relative mb-[140px] mt-[64px] lg:my-[120px]'
  )
  // px-6 lg:pr-0 lg:pl-20 xl:pl-[156px]
  const industries = useStaticQuery(graphql`
    query IndustrySliderData {
      allSanityIndustryPages {
        nodes {
          slug {
            current
          }
          industryCard {
            image {
              ...CustomImage
            }
            heading
            _rawSubText
          }
        }
      }
    }
  `)
  const nodes = industries.allSanityIndustryPages.nodes

  const location = typeof window !== 'undefined' && window.location.pathname
  const currentLocation =
    location &&
    location.substring(0, location.length - 1).slice(1, location.length - 1)
  console.log(currentLocation)

  const filterBypathName = nodes.filter(
    (nodes) => nodes.slug.current != currentLocation
  )

  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="testimonail_arrow_box_shadow p-2 h-fit rounded-full bg-addition_button_color absolute bottom-[-62px] left-4 lg:left-20 xl:left-[120px] z-10"
      >
        <Icon
          iconWidth={18}
          iconHeight={18}
          icon="testimonail-left-blue-icon"
        />
      </button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="testimonail_arrow_box_shadow p-2 h-fit rounded-full bg-addition_button_color absolute bottom-[-62px] right-4 lg:right-20 xl:right-[120px] rotate-180 z-10"
      >
        <Icon
          iconWidth={18}
          iconHeight={18}
          icon="testimonail-left-blue-icon"
        />
      </button>
    )
  }

  const settings = {
    infinite: true,
    speed: 1000,
    dots: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section
      className={industriesSliderSectionClasses}
      data-testid="industries-slider-section"
    >
      {title && (
        <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
          <p className="text-sm leading-[18px] font-Public_Sans font-bold text-gray-500 tracking-[0.03em] w-5 whitespace-nowrap uppercase">
            {title}
          </p>
        </div>
      )}
      <Heading
        type="h2"
        otherClasses="lg:block hidden text-gray-900 font-normal font-Poppins px-6 lg:px-20 xl:px-[156px]"
      >
        {mainHeading}
      </Heading>
      <div className="lg:mt-10 industries_slider_container overflow-x-clip w-full relative after:hidden md:after:block after:absolute after:right-0 after:w-[472px] after:h-full after:top-0">
        <Slider
          customSettings={settings}
          customClass="industries_inner_slider px-6 lg:pr-0 lg:pl-20 xl:pl-[156px]"
        >
          {filterBypathName.map((nodes, index) => {
            return (
              <div className="px-[11px]">
                <ServicesCard
                  otherClasses="min-h-[363px]"
                  key={index}
                  {...nodes}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default IndustriesSliderSection

export const query = graphql`
  fragment IndustriesSliderSection on SanityIndustriesSliderSection {
    __typename
    identifier
    title
    mainHeading
  }
`
