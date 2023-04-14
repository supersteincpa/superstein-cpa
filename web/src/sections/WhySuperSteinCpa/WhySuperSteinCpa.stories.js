import * as React from 'react'

import WhySuperSteinCpa from './WhySuperSteinCpa'
import mocks from './mocks'

export default {
  title: 'Sections/WhySuperSteinCpa',
  component: WhySuperSteinCpa,
}

const Template = (args) => <WhySuperSteinCpa {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
