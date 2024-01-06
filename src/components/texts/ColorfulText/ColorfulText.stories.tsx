import { Meta, StoryFn } from '@storybook/react'

import ColorfulText, { ColorfulTextProps } from './ColorfulText'

const meta: Meta = {
  title: 'Components / texts / ColorfulText',
  component: ColorfulText,
}

export default meta

const Template: StoryFn<ColorfulTextProps> = (args: ColorfulTextProps) => (
  <ColorfulText {...args}>Text here</ColorfulText>
)

export const Default = Template.bind({})
Default.args = {
  colors: ['red', 'blue', 'yellow', 'green'],
}

export const WithAnimation = Template.bind({})
WithAnimation.args = {
  ...Default.args,
  hasAnimation: true,
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  colors: ['pink', 'yellow'],
  hasAnimation: true,
  sx: {
    fontSize: '100px',
    fontWeight: 500,
  },
}
