import { Meta, StoryFn } from '@storybook/react'

import LandingPageHeader, { LandingPageHeaderProps } from './LandingPageHeader'
import React from 'react'

const meta: Meta = {
  title: 'Components / Header',
  component: LandingPageHeader,
}

export default meta

const Template: StoryFn<LandingPageHeaderProps> = (args: LandingPageHeaderProps) => (
  <LandingPageHeader bgColor='blue' isBgTransparent={true} {...args} />
)

export const Default = Template.bind({})
Default.args = {}
