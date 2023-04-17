import * as React from 'react'

import OurBodySection from './OurBodySection'
import mocks from './mocks'

export default {
  title: 'Sections/OurBodySection',
  component: OurBodySection,
}

const Template = (args) => <OurBodySection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
