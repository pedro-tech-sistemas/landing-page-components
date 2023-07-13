import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import LandingPageHeader, { LandingPageHeaderProps } from './LandingPageHeaderRoot'
import LandingPageHeaderItem from './LandingPageHeaderItem'

const meta: Meta = {
  title: 'Components / Landing Page / Header / Root',
  component: LandingPageHeader,
}

export default meta

const Template: StoryFn<LandingPageHeaderProps> = (args: LandingPageHeaderProps) => (
  <>
    <LandingPageHeader {...args} />
    <div style={{ height: '1000px', marginTop: '100vh' }}></div>
  </>
)

const TemplateComplete: StoryFn<LandingPageHeaderProps> = (args: LandingPageHeaderProps) => (
  <LandingPageHeader {...args}>
    <LandingPageHeaderItem>This is the Company name</LandingPageHeaderItem>
    <div style={{ display: 'flex' }}>
      <LandingPageHeaderItem>Item 1</LandingPageHeaderItem>
      <LandingPageHeaderItem>Item 2</LandingPageHeaderItem>
    </div>
  </LandingPageHeader>
)

export const Default = Template.bind({})
Default.args = { bgColor: '#2e2eb6' }

export const Transparent = Template.bind({})
Transparent.args = { isBgTransparent: true }

export const Fixed = Template.bind({})
Fixed.args = { isFixed: true, bgColor: '#2e2eb6' }

export const Complete = TemplateComplete.bind({})
Complete.args = { bgColor: '#2e2eb6' }
