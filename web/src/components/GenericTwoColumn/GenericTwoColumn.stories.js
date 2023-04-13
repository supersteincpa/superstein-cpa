import * as React from 'react'

import GenericTwoColumn from './GenericTwoColumn'
import mocks from './mocks'

export default {
  title: 'Components/GenericTwoColumn',
  component: GenericTwoColumn,
}

const Template = (args) => <GenericTwoColumn {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
