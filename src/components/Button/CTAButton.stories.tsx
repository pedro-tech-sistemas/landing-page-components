import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import CTAButton, { CTAButtonProps } from './CTAButton';
import EastIcon from '@mui/icons-material/East';

const meta: Meta = {
  title: 'Components / CTAButton',
  component: CTAButton,
}

export default meta

const Template: StoryFn<CTAButtonProps> = (args: CTAButtonProps) => (
  <CTAButton
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Começar',
  sx: {
    bgcolor: '#6161ff'
  },
  endIcon: <EastIcon />,
}
