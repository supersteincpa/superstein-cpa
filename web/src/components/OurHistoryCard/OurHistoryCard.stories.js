import * as React from 'react'

import OurHistoryCard from './OurHistoryCard'

export default {
  title: 'Components/OurHistoryCard',
  component: OurHistoryCard,
}

const Template = (args) => <OurHistoryCard {...args} />

export const Default = Template.bind({})
Default.args = {}
