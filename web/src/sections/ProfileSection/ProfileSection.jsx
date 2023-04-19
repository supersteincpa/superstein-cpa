import React, { useState } from 'react'
import clsx from 'clsx'
import { Image } from '../../components/Image'
import Icon from '../../components/Icon/Icon'
import { Heading } from '../../components/Heading'
import contactImage from '../../images/contact-book.png'
import linkRotate from '../../images/link-rotate.png'
import starProfile from '../../images/stars-profile.png'
import chatCircleImage from '../../images/chat-circle-blue-icon.png'
import './profilesection.scss'
import { RichText } from '../../components/RichText'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
export const ProfileSection = ({
  otherClasses,
  image,
  name,
  about,
  _rawInfoText,
  phone,
  email,
  linkedIn,
  _rawBiographyText,
  _rawAffiliationText,
  _rawExpertiseText,
  reviewCards,
}) => {
  const profileSectionClasses = clsx(
    otherClasses,
    ' mt-[136px] lg:mt-[184px] mb-[64px] lg:mb-[100px] max-w-[1512px] mx-auto px-6 lg:px-20 xl:px-[156px] flex flex-col lg:flex-row gap-10 xl:gap-20'
  )

  const [toggleTab, setToggleTab] = useState('bio')
  const toggleTabFunc = (elm) => {
    setToggleTab(elm)
  }
  const mobileFilterFunc = (e) => {
    setToggleTab(e.target.value)
  }

  const myArray = name.split(' ')

  return (
    <section className={profileSectionClasses} data-testid="profile-section">
      <div className="w-full lg:w-[40%]">
        <Image
          imageData={image}
          otherClasses="w-full max-h-[347px] rounded-[30px] mb-6"
          imgClassName="rounded-[30px]"
        />
        {phone && (
          <a
            href={`tel:${phone}`}
            className="mb-3 flex items-center gap-2 text-base font-normal leading-6 text-addition_button_color tracking-[0.03em] font-Public_Sans underline"
          >
            <Icon icon="phone-blue-icon" iconHeight={24} iconWidth={24} />
            {phone}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="mb-3 flex items-center gap-2 text-base font-normal leading-6 text-addition_button_color tracking-[0.03em] font-Public_Sans underline"
          >
            <Icon icon="email-blue-icon" iconHeight={24} iconWidth={24} />
            {email}
          </a>
        )}
        {linkedIn && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${linkedIn}`}
            className="flex items-center gap-2 text-base font-normal leading-6 text-addition_button_color tracking-[0.03em] font-Public_Sans underline"
          >
            <Icon icon="linkedin-blue-icon" iconHeight={24} iconWidth={24} />
            {name}
          </a>
        )}
      </div>
      <div className="w-full lg:w-[60%]">
        <Heading type="h1" otherClasses="font-Poppins text-gray-900">
          {name}
        </Heading>
        <p className="mt-4 font-Public_Sans font-bold text-sm text-gray-800">
          {about}
        </p>

        <div className="border-b-[1px] border-gray-400 hidden lg:flex mt-12">
          {_rawBiographyText && (
            <button
              onClick={() => toggleTabFunc('bio')}
              className={clsx(
                'flex flex-col items-center gap-2 pb-3 w-full text-base font-Public_Sans leading-6 tracking-[0.03em] border-b-[2px]',
                toggleTab === 'bio'
                  ? 'text-addition_button_color font-semibold border-b-addition_button_color'
                  : 'font-normal text-gray-400 border-b-transparent'
              )}
            >
              <span
                className={clsx(
                  toggleTab === 'bio'
                    ? 'active_image_blue'
                    : 'gray_disabled_image'
                )}
              >
                <img src={contactImage} alt="contact-image" />
              </span>
              Biography
            </button>
          )}
          {_rawAffiliationText && (
            <button
              onClick={() => toggleTabFunc('Affiliation')}
              className={clsx(
                'flex flex-col items-center gap-2 pb-3 w-full text-base font-Public_Sans leading-6 tracking-[0.03em] border-b-[2px]',
                toggleTab === 'Affiliation'
                  ? 'text-addition_button_color font-semibold border-b-addition_button_color'
                  : 'font-normal text-gray-400 border-b-transparent'
              )}
            >
              <span
                className={clsx(
                  toggleTab === 'Affiliation'
                    ? 'active_image_blue'
                    : 'gray_disabled_image'
                )}
              >
                <img src={linkRotate} alt="contact-image" />
              </span>
              Affiliation
            </button>
          )}
          {_rawExpertiseText && (
            <button
              onClick={() => toggleTabFunc('Expertise')}
              className={clsx(
                'flex flex-col items-center gap-2 pb-3 w-full text-base font-Public_Sans leading-6 tracking-[0.03em] border-b-[2px]',
                toggleTab === 'Expertise'
                  ? 'text-addition_button_color font-semibold border-b-addition_button_color'
                  : 'font-normal text-gray-400 border-b-transparent'
              )}
            >
              <span
                className={clsx(
                  toggleTab === 'Expertise'
                    ? 'active_image_blue'
                    : 'gray_disabled_image'
                )}
              >
                <img src={starProfile} alt="contact-image" />
              </span>
              Areas of Expertise
            </button>
          )}
          {reviewCards && (
            <button
              onClick={() => toggleTabFunc('Reviews')}
              className={clsx(
                'flex flex-col items-center gap-2 pb-3 w-full text-base font-Public_Sans leading-6 tracking-[0.03em] border-b-[2px]',
                toggleTab === 'Reviews'
                  ? 'text-addition_button_color font-semibold border-b-addition_button_color'
                  : 'font-normal text-gray-400 border-b-transparent'
              )}
            >
              <span
                className={clsx(
                  toggleTab === 'Reviews'
                    ? 'active_image_blue'
                    : 'gray_disabled_image'
                )}
              >
                <img src={chatCircleImage} alt="contact-image" />
              </span>
              Reviews
            </button>
          )}
        </div>
        <select
          onChange={(e) => mobileFilterFunc(e)}
          name="drop-down-menu"
          id="all"
          className="mt-6 lg:hidden w-full py-3 px-4 font-Poppins font-normal text-base leading-6 bg-transparent text-gray-900 rounded-full border-[1px] border-gray-900"
        >
          <option
            value="bio"
            className="font-Poppins text-gray-900 font-normal text-base leading-6 capitalize"
          >
            Biography
          </option>
          <option
            value="Affiliation"
            className="font-Poppins text-gray-900 font-normal text-base leading-6 capitalize"
          >
            Affiliation
          </option>
          <option
            value="Expertise"
            className="font-Poppins text-gray-900 font-normal text-base leading-6 capitalize"
          >
            Areas of Expertise
          </option>
          <option
            value="Reviews"
            className="font-Poppins text-gray-900 font-normal text-base leading-6 capitalize"
          >
            Reviews
          </option>
        </select>
        {toggleTab === 'bio' && (
          <div className="w-full mt-12">
            <Heading
              type="h2"
              otherClasses="font-normal font-Poppins text-gray-900 mb-6"
            >
              Biography
            </Heading>
            <article className="profile_section_rich_text">
              <RichText richText={_rawBiographyText} />
            </article>
          </div>
        )}
        {toggleTab === 'Affiliation' && (
          <div className="w-full mt-12">
            <Heading
              type="h2"
              otherClasses="font-normal font-Poppins text-gray-900 mb-6"
            >
              Professional Affiliations
            </Heading>
            <article className="profile_section_rich_text">
              <RichText richText={_rawAffiliationText} />
            </article>
          </div>
        )}
        {toggleTab === 'Expertise' && (
          <div className="w-full mt-12">
            <Heading
              type="h2"
              otherClasses="font-normal font-Poppins text-gray-900 mb-6"
            >
              Areas of Expertise
            </Heading>
            <article className="profile_section_rich_text">
              <RichText richText={_rawExpertiseText} />
            </article>
          </div>
        )}
        {toggleTab === 'Reviews' && (
          <div className="w-full mt-12">
            <Heading
              type="h2"
              otherClasses="font-normal font-Poppins text-gray-900 mb-6"
            >
              What Clients Say About Working With {myArray[0]}
            </Heading>
            <div>
              {reviewCards.map((nodes) => {
                return <ReviewCard {...nodes} />
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProfileSection
