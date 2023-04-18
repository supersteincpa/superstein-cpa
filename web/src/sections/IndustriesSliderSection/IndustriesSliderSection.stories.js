import * as React from 'react'

import IndustriesSliderSection from './IndustriesSliderSection'
import mocks from './mocks'

export default {
  title: 'Sections/IndustriesSliderSection',
  component: IndustriesSliderSection,
}

const Template = (args) => <IndustriesSliderSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
