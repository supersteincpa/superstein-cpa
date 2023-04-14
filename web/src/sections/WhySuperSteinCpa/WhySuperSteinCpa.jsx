import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import Icon from '../../components/Icon/Icon';

import './whysuperstein.scss'

export const WhySuperSteinCpa = ({
  otherClasses
}) => {
  const whySuperSteinCpaClasses = clsx(otherClasses, 'w-full bg-gray-50 cta-clip-path');

  const arr = [
    {
      title: 'We Get to Know You',
      _rawText: 'We take the time to answer your questions and understand your goals so we can help you succeed and grow.',
      icon: 'chat-circle'
    },
    {
      title: 'We Put in the Work',
      _rawText: 'Everything we do is research-based, so you get the best strategies and solutions to fit your needs.',
      icon: 'statistic-icon'
    },
    {
      title: 'We’re Thorough',
      _rawText: 'Our work undergoes a stringent review process before we deliver it to you, so you get a professional product.',
      icon: 'star-icon'
    },
    {
      title: 'We’re Industry Veterans',
      _rawText: 'You’ll get the utmost professionalism and competence from our team and benefit from our passion for high standards.',
      icon: 'model-game'
    },
    {
      title: 'We’re Fair & Honest',
      _rawText: 'We put in an honest day’s work and bill our clients fairly, so you get the value we promise.',
      icon: 'law-icon'
    },
    {
      title: 'We Use the Best Tools',
      _rawText: 'We use industry-leading software to ensure our work is of the highest quality from start to finish.',
      icon: 'laptop-setting'
    }

  ]

  return (
    <section className={whySuperSteinCpaClasses} data-testid='why-super-stein-cpa'>
      <div className='w-full max-w-[1512px] mx-auto flex-col py-[90px] px-6 lg:py-[210px] lg:px-[165px]  items-center justify-start relative'>
        <p className='absolute top-[50%] left-0 text-sm font-bold text-gray-300 transition sm:hidden -translate-y-[-50%] -rotate-90 hidden lg:block'>
          04. Why Superstien CPA
        </p>
        <Heading type='h2' otherClasses='mb-4'> Reasons to Count on Us</Heading>
        <div className='border boder-[1px] border-[#4679E6] w-[125px] mb-8'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-y-6 gap-x-20 lg:gap-y-8'>

          {
            arr.map((nodes) => {
              return <div className='flex flex-col items-start justify-start'>

                <Heading type='h5' otherClasses='flex items-center justify-center mb-3 gap-[10px]'>
                  <Icon icon={nodes.icon} iconWidth={20} iconHeight={20} />
                  {nodes.title}
                </Heading>

                <p className=' font-Public_Sans font-normal text-sm lg:text-base leading-6 tracking-[0.03em] text-gray-800'>{nodes._rawText}</p>
              </div>
            })
          }

        </div>
      </div>
    </section>
  );
};

export default WhySuperSteinCpa;
