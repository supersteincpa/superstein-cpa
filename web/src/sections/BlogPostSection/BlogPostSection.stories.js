import * as React from 'react'

import BlogPostSection from './BlogPostSection'

export default {
  title: 'Sections/BlogPostSection',
  component: BlogPostSection,
}

const Template = (args) => <BlogPostSection {...args} />

export const Default = Template.bind({})
Default.args = {}
