import { Meta, StoryFn } from '@storybook/react'

import { Typography } from '@mui/material'
import Footer, { BasicFooterProps } from './BasicFooter'

const meta: Meta = {
  title: 'Components / footers / BasicFooter',
  component: Footer,
}

export default meta

const Template: StoryFn<BasicFooterProps> = (args: BasicFooterProps) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  copy: '2023 Airbnb, Inc.',
  links: [
    { href: '#', labelText: 'blabla' },
    { href: '#', labelText: 'blabla' },
  ],
  socialLinks: [
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
  ],
}

export const WithoutBorderTop = Template.bind({})
WithoutBorderTop.args = {
  ...Default.args,
  hasBorder: false,
}

export const WithoutSocialMedias = Template.bind({})
WithoutSocialMedias.args = {
  ...Default.args,
  socialLinks: undefined,
}

export const WithOtherLeftOptions = Template.bind({})
WithOtherLeftOptions.args = {
  ...Default.args,
  otherLeftOptions: <Typography>This is my custom left option</Typography>,
}

export const WithOtherRightOptions = Template.bind({})
WithOtherRightOptions.args = {
  ...Default.args,
  otherRightOptions: <Typography>This is my custom right option</Typography>,
}
