import * as React from 'react'

import ReviewCard from './ReviewCard'
import mocks from './mocks'

export default {
  title: 'Components/ReviewCard',
  component: ReviewCard,
}

const Template = (args) => <ReviewCard  {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
