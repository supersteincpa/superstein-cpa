import * as React from 'react'

import OurTeamCard from './OurTeamCard'

export default {
  title: 'Components/OurTeamCard',
  component: OurTeamCard,
}

const Template = (args) => <OurTeamCard {...args} />

export const Default = Template.bind({})
Default.args = {}
