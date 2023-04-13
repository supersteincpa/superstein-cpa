import * as React from 'react'

import BlogSection from './BlogSection'

export default {
  title: 'Sections/BlogSection',
  component: BlogSection,
}

const Template = (args) => <BlogSection {...args} />

export const Default = Template.bind({})
Default.args = {}
