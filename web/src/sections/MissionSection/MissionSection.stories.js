import * as React from 'react'

import MissionSection from './MissionSection'

export default {
  title: 'Sections/MissionSection',
  component: MissionSection,
}

const Template = (args) => <MissionSection {...args} />

export const Default = Template.bind({})
Default.args = {}
