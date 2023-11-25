import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import Footer, { FooterProps } from './Footer'

const meta: Meta = {
  title: 'Components / Footer',
  component: Footer,
}

export default meta

const Template: StoryFn<FooterProps> = (args: FooterProps) => (
  <Footer
    copy='2023 Airbnb, Inc.'
    links={[
      { href: '#', labelText: 'blabla' },
      { href: '#', labelText: 'blabla' },
    ]}
    socialLinks={[
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'linkedin',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ]}
  />
)

export const Default = Template.bind({})
Default.args = {}
