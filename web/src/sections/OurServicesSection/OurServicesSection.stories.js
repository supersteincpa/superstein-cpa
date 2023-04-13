import * as React from 'react'

import OurServicesSection from './OurServicesSection'
import mocks from './mocks'

export default {
  title: 'Sections/OurServicesSection',
  component: OurServicesSection,
}

const Template = (args) => <OurServicesSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
