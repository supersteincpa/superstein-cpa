import * as React from 'react'

import BlogsHeroSection from './BlogsHeroSection'

export default {
  title: 'Sections/BlogsHeroSection',
  component: BlogsHeroSection,
}

const Template = (args) => <BlogsHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}
