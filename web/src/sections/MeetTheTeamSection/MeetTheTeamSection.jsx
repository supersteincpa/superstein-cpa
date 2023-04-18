import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'

export const MeetTheTeamSection = ({ otherClasses }) => {
  const meetTheTeamSectionClasses = clsx(otherClasses)

  const profiles = useSTate

  return (
    <section
      className={meetTheTeamSectionClasses}
      data-testid="meet-the-team-section"
    >
      New Section!
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
