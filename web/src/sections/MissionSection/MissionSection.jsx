import React from 'react'
import clsx from 'clsx'

import icon from '../../images/temp/challenges-icon.png'
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button'
import image from '../../images/temp/mission-image.png'

import './missionsection.scss'

export const MissionSection = ({
  otherClasses
}) => {
  const missionSectionClasses = clsx(otherClasses, 'w-full bg-gray-900 py-[92px] lg:py-[212px] mission-clip-path');

  return (
    <section className={missionSectionClasses} data-testid='mission-section'>
      <div className='w-full max-w-[1512px] mx-auto px-6 lg:px-[229px] flex flex-col items-start justify-start relative'>
        <p className='absolute top-[50%] left-0 text-sm font-bold text-gray-300 transition sm:hidden -translate-y-[-50%] -rotate-90 hidden lg:block'>
          02. mission
        </p>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-start mb-10 lg:mb-16'>
          <div className='w-20 lg:w-[160px] rounded-[30px]'>
            <img src={icon} alt="" className='w-full 
            '/>
          </div>
          <div className='w-full max-w-[848px] flex flex-col gap-6'>
            <Heading type='h2' otherClasses='text-white'>What Drives Us</Heading>
            <div className='border boder-[1px] border-[#4679E6] w-full'></div>
            <p className='font-normal text-base text-white leading-6 tracking-[0.03em]'>Our mission is to simplify complicated finances, so our clients understand their options. We’re hard-working, fair, and always willing to put in an honest day’s work to deliver excellence.</p>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[70px] xl::gap-[125px]'>
          <div className='flex flex-col gap-6'>
            <Heading type='h1' otherClasses='text-white'>Your Dedicated Professionals</Heading>
            <p className='font-normal text-base text-white leading-6 tracking-[0.03em]'>You’ll be backed by a team of experienced managers, supervisors, seniors, and staff professionals—all of whom have distinguished education and backgrounds. With Superstein PA, you’ll see an immediate impact on the profitability and growth of your company.
              <div className='mt-4'>
                We’re a firm known for providing exceptional service and for going the extra mile for our clients, and we invite you to learn more about our team members.
              </div>
            </p>
            <div className='w-full flex items-start justify-start'>
              <Button variant='primary' label='Meet the Team' />
            </div>
          </div>
          <img src={image} alt="" className='w-full lg:w-[424px]' />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
