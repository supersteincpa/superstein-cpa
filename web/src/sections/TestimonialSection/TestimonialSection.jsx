import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Heading'
import Slider from '../../components/Slider/Slider'
import './testimonialsection.scss'
import Icon from '../../components/Icon/Icon'
import { RichText } from '../../components/RichText'
export const TestimonialSection = ({
  otherClasses,
  title,
  heading,
  desktopBackgroundImage,
  mobileBackgroundImage,
}) => {
  const testimonialSectionClasses = clsx(
    otherClasses,
    'w-full relative pt-[100px] pb-[158px] lg:py-0 lg:h-[740px] flex items-center'
  )

  const reviews = useStaticQuery(graphql`
    query TesimonialReviews {
      allSanityReviews {
        nodes {
          name
          _rawSubText
          userImage {
            ...CustomImage
          }
          logo {
            ...CustomImage
          }
        }
      }
    }
  `)

  const reviewData = reviews.allSanityReviews.nodes

  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="testimonail_arrow_box_shadow p-2 h-fit rounded-full bg-addition_button_color absolute bottom-[-62px] lg:top-2/4 left-0 translate-y-[-50%] lg:left-[-40px] xl:left-[-129px] z-10"
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
        className="testimonail_arrow_box_shadow p-2 h-fit rounded-full bg-addition_button_color absolute bottom-[-62px] lg:top-2/4 translate-y-[-50%] right-0 lg:right-[-40px] xl:right-[-129px] rotate-180 z-10"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
  }

  return (
    <section
      className={testimonialSectionClasses}
      data-testid="testimonial-section"
    >
      <Image
        imageData={desktopBackgroundImage}
        objectFit="fill"
        otherClasses="!absolute left-0 top-0 w-full h-full !hidden lg:!block"
      />
      <Image
        imageData={mobileBackgroundImage}
        objectFit="fill"
        otherClasses="!absolute left-0 top-0 w-full h-full lg:!hidden"
      />
      <div className="relative max-w-[1512px] mx-auto w-full">
        {title && (
          <div className="absolute lg:left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 ">
            <p className="text-sm leading-[18px] font-Public_Sans font-bold text-white tracking-[0.03em] w-5 whitespace-nowrap uppercase">
              {title}
            </p>
          </div>
        )}
        <div className="max-w-[800px] mx-auto w-full px-4 lg:px-0 flex flex-col gap-6 ">
          <Heading type="h2" otherClasses="font-Poppins text-white text-center">
            {heading}
          </Heading>
          <Slider
            customSettings={settings}
            customClass="testimonial_main_container"
          >
            {reviewData.map(({ logo, _rawSubText, name },index) => {
              return (
                <div className="px-4" key = {index}>
                  <div className="w-full flex flex-col items-center gap-8">
                    <article className="testimonial_rich_text">
                      <RichText richText={_rawSubText} />
                    </article>
                    <div className="h-[32px] w-[89.05px] justify-center rounded-full bg-white flex items-center">
                      <Image
                        imageData={logo}
                        otherClasses="max-w-[61.05px] max-h-[20px] "
                      />
                    </div>
                    <p className="font-Public_Sans text-base leading-6 font-bold text-white text-center tracking-[0.03em]">
                      {name}
                    </p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

export const query = graphql`
  fragment TestmionailSection on SanityTestimonials {
    __typename
    identifier
    title
    heading
    desktopBackgroundImage {
      ...CustomImage
    }
    mobileBackgroundImage {
      ...CustomImage
    }
  }
`
