import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import OurTeamCard from '../../components/OurTeamCard/OurTeamCard'

export const MeetTheTeamSection = ({ otherClasses }) => {
  const meetTheTeamSectionClasses = clsx(
    otherClasses,
    'w-full relative my-[64px] lg:my-[100px]'
  )

  const profiles = useStaticQuery(graphql`
    query profileSection {
      allSanityProfileSection {
        nodes {
          slug {
            current
          }
          image {
            ...CustomImage
          }
          name
          about
        }
      }
    }
  `)
  const nodes = profiles.allSanityProfileSection.nodes
  return (
    <section
      className={meetTheTeamSectionClasses}
      data-testid="meet-the-team-section"
    >
      <div className="max-w-[1512px] px-6 lg:px-20 xl:px-[117px] grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mx-auto">
        {nodes.map((nodes) => {
          return <OurTeamCard {...nodes} />
        })}
      </div>
    </section>
  )
}

export default MeetTheTeamSection

export const query = graphql`
  fragment MeetTheTeamSection on SanityMeetTheTeamSection {
    __typename
    identifier
  }
`
