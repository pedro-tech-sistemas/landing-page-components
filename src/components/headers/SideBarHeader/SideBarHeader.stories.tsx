import { Meta, StoryFn } from '@storybook/react'
import { Box, Typography } from '@mui/material'

import SideBarHeader, { SideBarHeaderProps } from './SideBarHeader'

const meta: Meta = {
  title: 'Components / headers / SideBarHeader',
  component: SideBarHeader,
}

export default meta

const Template: StoryFn<SideBarHeaderProps> = (args: SideBarHeaderProps) => (
  <SideBarHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  links: [
    { label: 'Test 1', url: '#' },
    { label: 'Test 2', url: '#' },
    { label: 'Test 3', url: '#' },
  ],
}

export const WithLogo = Template.bind({})
WithLogo.args = {
  ...Default.args,
  logo: 'https://media.istockphoto.com/id/1473300198/pt/foto/infinity-road-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=X-8962AwBZaG0HBwvlfCer4FBOxB3yNQ-bBVtjt8vMQ=',
}

export const WithCtaButton = Template.bind({})
WithCtaButton.args = {
  ...Default.args,
  ctaButtonLabel: 'Whatsapp',
  ctaButtonAction: () => console.log('whatsapp'),
}

export const WithCustomBackgroundColor = Template.bind({})
WithCustomBackgroundColor.args = {
  ...Default.args,
  bgcolor: 'black',
}

export const WithLightBackground = Template.bind({})
WithLightBackground.args = {
  ...Default.args,
  bgcolor: 'yellow',
  textColor: 'black',
  isDarkBackground: false,
}

export const WithCopy = Template.bind({})
WithCopy.args = {
  ...Default.args,
  copy: (
    <Box>
      <Typography fontSize={12} color='#fff'>
        Exemplo de Copy®
      </Typography>

      <Typography fontSize={12} color='#fff'>
        ©2024 - All rights reserved
      </Typography>
    </Box>
  ),
}

export const Complete = Template.bind({})
Complete.args = {
  ...WithLogo.args,
  ...WithCtaButton.args,
  ...WithCopy.args,
}
