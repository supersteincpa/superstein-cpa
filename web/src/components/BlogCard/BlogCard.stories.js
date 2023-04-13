import * as React from 'react'

import BlogCard from './BlogCard'
import mocks from './mocks'

export default {
  title: 'Components/BlogCard',
  component: BlogCard,
}

const Template = (args) => <div className='w-full lg:w-[30%]'><BlogCard {...args} /></div> 

export const Default = Template.bind({})
Default.args = {...mocks}
