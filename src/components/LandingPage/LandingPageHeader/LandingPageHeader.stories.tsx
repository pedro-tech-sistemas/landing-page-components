import { Meta, StoryFn } from '@storybook/react'

import LandingPageHeader, { LandingPageHeaderProps } from './LandingPageHeader'

const meta: Meta = {
  title: 'Components / Header',
  component: LandingPageHeader,
}

export default meta

const Template: StoryFn<LandingPageHeaderProps> = (args: LandingPageHeaderProps) => (
  <LandingPageHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {}
