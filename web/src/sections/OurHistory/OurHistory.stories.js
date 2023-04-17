import * as React from 'react'

import OurHistory from './OurHistory'

export default {
  title: 'Sections/OurHistory',
  component: OurHistory,
}

const Template = (args) => <OurHistory {...args} />

export const Default = Template.bind({})
Default.args = {}
