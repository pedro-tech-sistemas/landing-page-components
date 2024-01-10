import { Meta, StoryFn } from '@storybook/react'
import { Box } from '@mui/material'

import CommonHeader, { CommonHeaderProps } from './CommonHeader'

const meta: Meta = {
  title: 'Components / headers / CommonHeader',
  component: CommonHeader,
}

export default meta

const Template: StoryFn<CommonHeaderProps> = (args: CommonHeaderProps) => (
  <>
    <CommonHeader {...args} />

    <Box height='200vh' />
  </>
)

export const Default = Template.bind({})
Default.args = {
  links: [
    { label: 'Produtos', url: 'produtos' },
    { label: 'Equipes', url: '' },
    { label: 'Plataforma', url: '' },
    { label: 'Recursos', url: '' },
  ],
  ctaButtonAction: () => console.log('Function'),
  ctaButtonLabel: 'Whatsapp',
}

export const Logo = Template.bind({})
Logo.args = {
  ...Default.args,
  logo: 'https://media.istockphoto.com/id/1473300198/pt/foto/infinity-road-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=X-8962AwBZaG0HBwvlfCer4FBOxB3yNQ-bBVtjt8vMQ=',
}

export const DifferentTextColor = Template.bind({})
DifferentTextColor.args = {
  ...Default.args,
  textColor: '#fff',
}

export const HideOnScroll = Template.bind({})
HideOnScroll.args = {
  ...Default.args,
  hideOnScrollDown: true,
}

export const Gradient = Template.bind({})
Gradient.args = {
  ...Default.args,
  hasGradientBackground: true,
}

export const HideOnScrollAndGradient = Template.bind({})
HideOnScrollAndGradient.args = {
  ...HideOnScroll.args,
  ...Gradient.args,
}
