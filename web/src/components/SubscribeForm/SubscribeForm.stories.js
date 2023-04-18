import * as React from 'react'

import SubscribeForm from './SubscribeForm'

export default {
  title: 'Components/SubscribeForm',
  component: SubscribeForm,
}

const Template = (args) => <SubscribeForm {...args} />

export const Default = Template.bind({})
Default.args = {}
