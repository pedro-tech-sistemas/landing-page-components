import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import LandingPageHeaderItem, { LandingPageHeaderItemProps } from './LandingPageHeaderItem'
import LandingPageHeaderRoot from './LandingPageHeaderRoot'

const meta: Meta = {
  title: 'Components / Landing Page / Header / Item',
  component: LandingPageHeaderItem,
}

export default meta

const Template: StoryFn<LandingPageHeaderItemProps> = (args: LandingPageHeaderItemProps) => {
  return <LandingPageHeaderItem {...args}>{args.children}</LandingPageHeaderItem>
}

const TemplateWithScroll: StoryFn<LandingPageHeaderItemProps> = (args: LandingPageHeaderItemProps) => {
  return (
    <>
      <LandingPageHeaderItem {...args}>{args.children}</LandingPageHeaderItem>
      <div id='scrollTarget' style={{ height: '1000px', marginTop: '100vh' }}>
        Content goes here
      </div>
    </>
  )
}

const TemplateWithHeader: StoryFn<LandingPageHeaderItemProps> = (args: LandingPageHeaderItemProps) => {
  return (
    <>
      <LandingPageHeaderRoot bgColor='#ce8585'>
        <LandingPageHeaderItem {...args}>{args.children}</LandingPageHeaderItem>
      </LandingPageHeaderRoot>
      <div id='scrollTarget' style={{ height: '1000px', marginTop: '100vh' }}>
        Content goes here
      </div>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: 'Docs',
}

export const WithColor = Template.bind({})
WithColor.args = {
  children: 'Docs',
  color: '#ff0000',
  colorOnHover: '#00ff00',
}

export const WithScroll = TemplateWithScroll.bind({})
WithScroll.args = {
  children: 'Click to scroll',
  color: '#ff0000',
  scrollTo: 'scrollTarget',
  colorOnHover: '#00ff00',
}

export const Complete = TemplateWithHeader.bind({})
Complete.args = {
  children: 'Click to scroll',
  color: '#169741',
  scrollTo: 'scrollTarget',
  colorOnHover: '#00ff00',
}
