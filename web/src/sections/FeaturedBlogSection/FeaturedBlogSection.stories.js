import * as React from 'react'

import FeaturedBlogSection from './FeaturedBlogSection'
import mocks from './mocks'

export default {
  title: 'Sections/FeaturedBlogSection',
  component: FeaturedBlogSection,
}

const Template = (args) => <FeaturedBlogSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
