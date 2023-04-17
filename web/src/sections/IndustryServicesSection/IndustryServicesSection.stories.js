import * as React from 'react'

import IndustryServicesSection from './IndustryServicesSection'
import mocks from './mocks'

export default {
  title: 'Sections/IndustryServicesSection',
  component: IndustryServicesSection,
}

const Template = (args) => <IndustryServicesSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
