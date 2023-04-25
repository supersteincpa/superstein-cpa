import React from 'react'
import clsx from 'clsx'
import GenericTwoColumn from '../../components/GenericTwoColumn/GenericTwoColumn';
import { graphql } from 'gatsby'
import './locationpagetwocolumn.scss'

export const LocationPageTwoColumn = ({
  otherClasses,
  genericSections,
  ...props
}) => {
  const locationPageTwoColumnClasses = clsx(otherClasses,'mt-[66px] lg:mt-[84px] py-[274px] two_page_two_columns_section bg-gray-900 mb-[-150px]');
  
  return (
    <section className={locationPageTwoColumnClasses} data-testid='location-page-two-column'>
     <GenericTwoColumn {...props} genericSections={genericSections} isWhite ={true}/>
    </section>
  );
};

export default LocationPageTwoColumn;



export const query = graphql`
fragment LocationPageTwoColumnSection on SanityLocationPageTwoColumnSection {
  __typename
  identifier
  genericSections {
    title
    heading
    _rawSubText
    text
    reversed
    mobileReversed
    isDecorator
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
    button {
      ...Button
    }
  }
}
`
