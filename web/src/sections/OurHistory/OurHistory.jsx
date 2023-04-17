import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading';
import './ourhistorysection.scss'
import OurHistoryCard from '../../components/OurHistoryCard/OurHistoryCard';

export const OurHistory = ({
  otherClasses
}) => {
  const ourHistoryClasses = clsx(otherClasses, 'w-full py-16 lg:py-[100px] bg-white');

  const arr = [
    {
      title: '1950s',
      _rawText: 'The Bamberg and Superstein CPA Firm is created and is one of the first CPA firms to be recognized in the state of Florida. It’s the start of a long tradition of excellent service. Co-founder Norman Superstein is a highly decorated war hero who was the recipient of The Legion of Honor, the highest French decoration. He had a distinguished 70-year career with the CPA firm he helped create and was also a Rotarian and Toastmaster.'
    },
    {
      title: '1989',
      _rawText: 'Norman Superstein, CPA, and Esther Superstein, CPA, merge to create Superstein & Superstein, PA.'
    },
    {
      title: '2000',
      _rawText: 'The company opens its second office in Delray Beach, Florida, expanding services to Palm Beach County.'
    },
    {
      title: '2009',
      _rawText: 'Norma Superstein retires after a long career as a Certified Public Accountant. With a staff of three, the company moves from the Bay Harbor office, where it had been located for 18 years, to a new office building on Presidential Circle on Hollywood Boulevard in Hollywood, Florida.'
    },
    {
      title: '2020',
      _rawText: 'Drew Superstein becomes a third-generation family member to make partner. '
    },
    {
      title: '2023',
      _rawText: 'The company expands to South Carolina and is positioned for continued growth both regionally and nationally. '
    },
  ]

  return (
    <section className={ourHistoryClasses} data-testid='our-history'>
      <div className='w-full max-w-[1512px] mx-auto px-6 lg:px-[129px] flex flex-col lg:flex-row items-start justify-center gap-16 '>
        <div className='lg:sticky flex flex-col items-start justify-start gap-6 w-full h-fit lg:top-0 max-w-[444px]'>
          <Heading type='h2'>Our Firm’s History</Heading>
          <p className=' font-Public_Sans text-xl text-typography tracking-[0.03em] leading-[30px]'>Our story began 70 years ago in downtown Miami before the “big four accounting firms” arrived in Florida. Like many firms, it all started with a family—we were actually Florida’s first father and daughter-in-law firm and were doing audits for organizations like the Miami Aquarium.
            <div className='py-4'>
              Today, we’re at the forefront of our field and are proud to be growing while still holding to our principles and the belief that our clients deserve only the best work.
            </div>
          </p>
        </div>

        <div className='last_child'>

          {
            arr.map((nodes) => {
              return <OurHistoryCard {...nodes} />
            })
          }
        </div>


      </div>
    </section>
  );
};

export default OurHistory;
