import { Meta, StoryFn } from '@storybook/react'

import EastIcon from '@mui/icons-material/East'
import CTAButton, { CTAButtonProps } from './CTAButton'

const meta: Meta = {
  title: 'Components / buttons / CTAButton',
  component: CTAButton,
}

export default meta

const Template: StoryFn<CTAButtonProps> = (args: CTAButtonProps) => <CTAButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Começar',
  sx: {
    bgcolor: '#6161ff',
  },
  endIcon: <EastIcon />,
}
