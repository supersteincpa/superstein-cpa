import * as React from 'react'

import BlogPage from './BlogPage'

export default {
  title: 'Sections/BlogPage',
  component: BlogPage,
}

const Template = (args) => <BlogPage {...args} />

export const Default = Template.bind({})
Default.args = {}
