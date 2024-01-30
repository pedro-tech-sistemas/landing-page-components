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

export const WithText = Template.bind({})
WithText.args = {
  text: 'Example',
  words: ['Example 1', 'Example 2', 'Example 3'],
  fontSize: '2rem',
  fontWeight: 'bold',
}

export const WithLongTexts = Template.bind({})
WithLongTexts.args = {
  text: "We're the best in",
  words: ['This', 'That', 'Everything'],
  fontSize: '2rem',
  fontWeight: 'bold',
}

export const WithCustomStyle = Template.bind({})
WithCustomStyle.args = {
  ...Default.args,
  fontWeight: 400,
  color: 'red',
}
