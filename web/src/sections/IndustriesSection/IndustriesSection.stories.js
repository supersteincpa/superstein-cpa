import * as React from 'react'

import IndustriesSection from './IndustriesSection'
import mocks from './mocks'

export default {
  title: 'Sections/IndustriesSection',
  component: IndustriesSection,
}

const Template = (args) => <IndustriesSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
