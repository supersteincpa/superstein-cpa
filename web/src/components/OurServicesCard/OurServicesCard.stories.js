import * as React from 'react'

import OurServicesCard from './OurServicesCard'

export default {
  title: 'Components/OurServicesCard',
  component: OurServicesCard,
}

const Template = (args) => <OurServicesCard {...args} />

export const Default = Template.bind({})
Default.args = {}
