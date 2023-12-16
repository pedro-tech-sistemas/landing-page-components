import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import CuteButton, { CuteButtonProps } from './CuteButton';

const meta: Meta = {
  title: 'Components / buttons / CuteButton',
  component: CuteButton,
}

export default meta

const Template: StoryFn<CuteButtonProps> = (args: CuteButtonProps) => (
  <CuteButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Combos',
  sx: { bgcolor: 'red' },
}
