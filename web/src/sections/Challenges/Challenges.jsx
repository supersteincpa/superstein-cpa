import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading';
import image from '../../images/temp/challenges-icon.png'
import Icon from '../../components/Icon/Icon'

import './challenges.scss'

export const Challenges = ({
  otherClasses
}) => {
  const challengesClasses = clsx(otherClasses, 'w-full bg-gray-50 py-[92px] lg:py-[212px] cta-clip-path');

  const arr = [
    {
      icon: 'chat-circle',
      title: 'Challenge',
      _rawText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      icon: 'statistic-icon',
      title: 'Challenge',
      _rawText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      icon: 'model-game',
      title: 'Challenge',
      _rawText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      icon: 'law-icon',
      title: 'Challenge',
      _rawText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
  ]

  return (
    <section className={challengesClasses} data-testid='challenges'>
      <div className='w-full max-w-[1512px] mx-auto px-6 lg:px-[229px] flex flex-col items-start justify-start relative'>
        <p className='absolute top-[50%] left-0 text-sm font-bold text-gray-300 transition sm:hidden -translate-y-[-50%] -rotate-90 hidden lg:block'>
          02. challenges
        </p>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-start mb-10 lg:mb-16'>
          <div className='w-20 lg:w-[160px] rounded-[30px]'>
            <img src={image} alt="" className='w-full 
            '/>
          </div>
          <div className='w-full max-w-[848px] flex flex-col gap-6'>
            <Heading type='h2'>Unique Challenges Heading</Heading>
            <div className='border boder-[1px] border-[#4679E6] w-full'></div>
            <p className='font-normal text-base text-gray-800 leading-6 tracking-[0.03em]'>~30 words lorem ipsum dolor sit amet consectetur. Nunc cras placerat sit faucibus in ac ornare vitae. At euismod aliquet imperdiet mattis. Nunc ornare dignissim aenean vestibulum sit molestie felis.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid=cols-2 lg:grid-cols-2 items-center gap-x-40 gap-y-6'>

          {
            arr.map((nodes) => {
              return <div className='flex flex-col items-start justify-start'>

                <Heading type='h5' otherClasses='flex items-center justify-center mb-3 gap-[10px]'>
                  <Icon icon={nodes.icon} iconWidth={20} iconHeight={20} />
                  {nodes.title}
                </Heading>

                <p className=' font-Public_Sans font-normal text-sm lg:text-base leading-6 tracking-[0.03em] text-gray-900'>{nodes._rawText}</p>
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Challenges;
