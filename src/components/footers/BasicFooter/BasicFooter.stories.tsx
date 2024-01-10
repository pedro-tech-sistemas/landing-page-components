import { Meta, StoryFn } from '@storybook/react'

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
