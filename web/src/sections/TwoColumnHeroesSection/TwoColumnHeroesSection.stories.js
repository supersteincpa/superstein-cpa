import * as React from 'react'

import TwoColumnHeroesSection from './TwoColumnHeroesSection'
import mocks from './mocks'

export default {
  title: 'Sections/TwoColumnHeroesSection',
  component: TwoColumnHeroesSection,
}

const Template = (args) => <TwoColumnHeroesSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
