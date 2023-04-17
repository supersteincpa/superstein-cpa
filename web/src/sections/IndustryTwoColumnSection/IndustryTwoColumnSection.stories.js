import * as React from 'react'

import IndustryTwoColumnSection from './IndustryTwoColumnSection'
import mocks from './mocks'

export default {
  title: 'Sections/IndustryTwoColumnSection',
  component: IndustryTwoColumnSection,
}

const Template = (args) => <IndustryTwoColumnSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
