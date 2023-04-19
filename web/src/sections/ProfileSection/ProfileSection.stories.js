import * as React from 'react'

import ProfileSection from './ProfileSection'

export default {
  title: 'Sections/ProfileSection',
  component: ProfileSection,
}

const Template = (args) => <ProfileSection {...args} />

export const Default = Template.bind({})
Default.args = {}
