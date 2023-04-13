import * as React from 'react'

import Cta from './Cta'
import mocks from './mocks'

export default {
  title: 'Components/Cta',
  component: Cta,
}

const Template = (args) => <Cta {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
