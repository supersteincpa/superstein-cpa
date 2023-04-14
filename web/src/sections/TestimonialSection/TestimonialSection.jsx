import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Heading'
import image1 from '../../images/temp/google-logo.png'
import Slider from '../../components/Slider/Slider'
import './testimonialsection.scss'
import Icon from '../../components/Icon/Icon'
export const TestimonialSection = ({
  otherClasses,
  title,
  heading,
  desktopBackgroundImage,
  mobileBackgroundImage,
}) => {
  const testimonialSectionClasses = clsx(
    otherClasses,
    'w-full relative py-[158px] lg:h-[740px] flex items-center'
  )

  const arr = [
    {
      name: 'Lisa Chancey',
      _rawText:
        'I have been a client of the firm for 30 years and have always been able to count on Superstein PA for the best tax advice and planning. I am extremely happy with the technical knowledge and superior service. This firm is the place you want to have your business and personal returns prepared!',
      company: image1,
    },
    {
      name: 'Lisa Chancey',
      _rawText:
        'I have been a client of the firm for 30 years and have always been able to count on Superstein PA for the best tax advice and planning. I am extremely happy with the technical knowledge and superior service. This firm is the place you want to have your business and personal returns prepared!',
      company: image1,
    },
    {
      name: 'Lisa Chancey',
      _rawText:
        'I have been a client of the firm for 30 years and have always been able to count on Superstein PA for the best tax advice and planning. I am extremely happy with the technical knowledge and superior service. This firm is the place you want to have your business and personal returns prepared!',
      company: image1,
    },
  ]

  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="testimonail_arrow_box_shadow p-2 h-fit rounded-full bg-addition_button_color absolute bottom-[-62px] lg:top-2/4 left-0 translate-y-[-50%] lg:left-[-40px] xl:left-[-129px]"
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
        className="testimonail_arrow_box_shadow p-2 h-fit rounded-full bg-addition_button_color absolute bottom-[-62px] lg:top-2/4 translate-y-[-50%] right-0 lg:right-[-40px] xl:right-[-129px] rotate-180"
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
          <p className="absolute -left-6 translate-y-[-50%] top-2/4 left hidden lg:block -rotate-90 text-sm leading-[18px] font-Public_Sans font-bold text-white tracking-[0.03em] ">
            {title}
          </p>
        )}
        <div className="max-w-[800px] mx-auto w-full px-4 lg:px-0 flex flex-col gap-6 ">
          <Heading type="h2" otherClasses="font-Poppins text-white text-center">
            {heading}
          </Heading>
          <Slider
            customSettings={settings}
            customClass="testimonial_main_container"
          >
            {arr.map(({ company, _rawText, name }) => {
              return (
                <div className="px-4">
                  <div className="w-full flex flex-col items-center gap-8">
                    <p className="text-xl font-normal leading-[30px] text-center text-white">
                      {_rawText}
                    </p>
                    <div className="px-4 py-[6px] rounded-full bg-white">
                      <img
                        src={company}
                        alt={name}
                        className="max-w-[61.05px] max-h-[20px] "
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
