import { Meta, StoryFn } from '@storybook/react'

import RotatingText, { RotatingTextProps } from './RotatingText'

const meta: Meta = {
  title: 'Components / texts / RotatingText',
  component: RotatingText,
}

export default meta

const Template: StoryFn<RotatingTextProps> = (args: RotatingTextProps) => <RotatingText {...args} />

export const Default = Template.bind({})
Default.args = {
  words: ['Example 1', 'Example 2', 'Example 3'],
  fontSize: '2rem',
  fontWeight: 'bold',
}
