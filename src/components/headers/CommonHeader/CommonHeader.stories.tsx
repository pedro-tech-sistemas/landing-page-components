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
