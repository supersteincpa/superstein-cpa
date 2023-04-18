import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'

export const SubscribeForm = ({ otherClasses }) => {
  const subscribeFormClasses = clsx(
    otherClasses,
    'w-full bg-gray-50 flex flex-col items-center justify-center py-10 px-6 lg:px-[207px] rounded-[15px]'
  )

  return (
    <div className={subscribeFormClasses} data-testid="subscribe-form">
      <Heading type="h4" otherClasses="mb-6 text-[28px] text-center">
        Subscribe Heading
      </Heading>
      <p className="font-normal text-base leading-6 text-center text-typography mb-12 font-Public_Sans tracking-[0.03em] w-full max-w-[480px]">
        15-20 words lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis
      </p>
      <div className="flex flex-col md:flex-row items-end md:items-center justify-center gap-4 lg:gap-2 w-full max-w-[575px]">
        <input
          type="text"
          className="px-6 w-full rounded-full border-[1px] border-gray-300 py-3 placeholder:text-gray-300"
          placeholder="Enter your email address"
        />
        <Button
          variant="primary"
          label="Subscribe"
          otherClasses="w-full md:w-fit"
        />
      </div>
    </div>
  )
}

export default SubscribeForm
