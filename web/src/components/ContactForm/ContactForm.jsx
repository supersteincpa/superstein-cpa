import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'
import Button from '../Button'
import Heading from '../Heading'
import './contactform.scss'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

export const ContactForm = ({
  otherClasses,
  toggleCancel,
  services,
  industries,
  locations,
}) => {
  const contactFormClasses = clsx(
    otherClasses,
    'max-w-[720px] bg-white overflow-y-auto h-full'
  )

  const messageRef = useRef('')
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
      console.log(response)
      const { status } = response
      if (status === 200) {
        messageRef.current.innerHTML =
          'Thank you for for submission! We will get in touch with you shortly.'
        setState({})
        form.reset()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const [toggleState, setToggleState] = useState('book-meeting')
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className={contactFormClasses} data-testid="contact-form">
      <div className="flex justify-between items-center px-6 py-4 border-b-[1px] border-b-gray-200">
        <div className="flex items-center gap-2 cursor-pointer">
          <Icon icon="phone-outline-black" iconHeight={24} iconWidth={24} />
          <a
            href="tel:7603491750"
            className="font-crimson_pro text-primary_green_600 font-bold text-base "
          >
            (760) 349-1750
          </a>
        </div>
        <button onClick={() => toggleCancel()}>
          <Icon icon="cancel-icon" iconHeight={12} iconWidth={12} />
        </button>
      </div>
      <div className="pb-10 px-4 md:px-[84px] w-full mt-8">
        <Heading
          type="h3"
          otherClasses="text-center font-raleway font-semibold text-primary_green_800 mb-8"
        >
          Contact Us
        </Heading>
        <div className="w-full flex flex-row items-center">
          <button
            onClick={() => toggleTab('book-meeting')}
            className={clsx(
              'flex items-center gap-2 justify-center text-xs sm:text-sm  font-sm leading-5 font-raleway font-semibold w-full py-[10px] rounded-tl-full rounded-bl-full',
              toggleState === 'book-meeting'
                ? 'bg-addition_button_color text-white '
                : 'bg-gray-50 text-gray-400'
            )}
          >
            <span
              className={clsx(
                'calender_book_a_meeting',
                toggleState === 'book-meeting'
                  ? 'bg-white'
                  : 'bg-black opacity-40'
              )}
            ></span>
            Book a meeting
          </button>
          <button
            onClick={() => toggleTab('send-message')}
            className={clsx(
              'flex items-center gap-2 justify-center text-xs sm:text-sm font-sm leading-5 font-raleway font-semibold w-full py-[10px] rounded-tr-full rounded-br-full',
              toggleState === 'send-message'
                ? 'bg-addition_button_color text-white '
                : 'bg-gray-50 text-gray-400'
            )}
          >
            <span
              className={clsx(
                'eamil_send_a_message',
                toggleState === 'send-message'
                  ? 'bg-white'
                  : 'bg-black opacity-40'
              )}
            ></span>
            Send us a message
          </button>
        </div>

        {toggleState === 'book-meeting' && (
          <div className="mt-8">
            <Heading
              type="h4"
              otherClasses="font-raleway font-bold text-gray-900 mb-4"
            >
              Let's Start a Conversation
            </Heading>
            <p className="font-crimson_pro font-normal text-base text-gray-600 ">
              Take this brief questionnaire to find out how Shared Vision Wealth
              can help you.
            </p>
          </div>
        )}

        {toggleState === 'send-message' && (
          <form
            onSubmit={handleSubmit}
            name="Contact Us"
            method="post"
            action=""
            className={clsx('w-full mt-5 md:mt-8')}
          >
            <p
              className="font-Work-Sans text-gray-800  text-base font-bold mb-4"
              ref={messageRef}
            ></p>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="font-mulish text-sm font-semibold text-gray-900 "
              >
                Name
              </label>
              <input
                name="name"
                id="name"
                required
                type="text"
                onChange={handleChange}
                className="w-full border-[1px] pl-4 font-raleway border-gray-300 rounded-full h-12 mt-2 focus:border-addition_button_color outline-offset-2 outline-[3px] outline-[#C7D7F7]"
              />
            </div>
            <div className="mb-6 flex flex-col md:flex-row gap-5 lg:gap-[21px]">
              <div className="w-full md:w-2/4">
                <label
                  htmlFor="phone"
                  className="font-mulish text-sm font-semibold text-gray-900 "
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                  type="text"
                  className="w-full border-[1px] pl-4 font-raleway border-gray-300 rounded-full h-12 mt-2 focus:border-addition_button_color outline-offset-2 outline-[3px] outline-[#C7D7F7]"
                />
              </div>
              <div className="w-full md:w-2/4">
                <label
                  htmlFor="email"
                  className="font-mulish text-sm font-semibold text-gray-900  "
                >
                  Email Address
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  className="w-full border-[1px] pl-4 font-raleway border-gray-300 rounded-full h-12 mt-2 focus:border-addition_button_color outline-offset-2 outline-[3px] outline-[#C7D7F7]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mb-6">
              <label
                htmlFor="option"
                className="font-mulish text-sm font-semibold text-gray-900 "
              >
                What Can We Help You With?
              </label>
              <select
                id="option"
                type="text"
                onChange={handleChange}
                name="What Can We Help You With?"
                className="w-full border-[1px]  border-gray-300 flex justify-between px-4 h-12 items-center rounded-full  text-base font-normal font-Work-Sans focus:ring-0 focus:border-addition_button_color  focus:border-[1px] focus:outline-offset-2 focus:outline-[3px] outline-[#C7D7F7]"
              >
                <option value="Select one...">Select one...</option>
                {services.map(({ title }, index) => {
                  return (
                    <option key={index} value={'Interested in ' + title}>
                      I’m interested in {title}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="description"
                className="font-mulish text-sm font-semibold text-gray-900 "
              >
                Message (optional)
              </label>
              <textarea
                type="text"
                onChange={handleChange}
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="w-full border-[1px] font-raleway pl-4 pt-4 border-gray-300 rounded-[30px] min-h-[136px] max-h-[136px] mt-2 focus:border-addition_button_color outline-offset-2 outline-[3px] outline-[#C7D7F7]"
              ></textarea>
            </div>
            <Button label="Submit" />
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm
