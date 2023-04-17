import * as React from 'react'

import Challenges from './Challenges'
import mocks from './mocks'

export default {
  title: 'Sections/Challenges',
  component: Challenges,
}

const Template = (args) => <Challenges {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
