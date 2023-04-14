import * as React from 'react'

import TestimonialSection from './TestimonialSection'
import mocks from './mocks'

export default {
  title: 'Sections/TestimonialSection',
  component: TestimonialSection,
}

const Template = (args) => <TestimonialSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
