import * as React from 'react'

import ContactForm from './ContactForm'
import mocks from './mocks'

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
}

const Template = (args) => <ContactForm {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
