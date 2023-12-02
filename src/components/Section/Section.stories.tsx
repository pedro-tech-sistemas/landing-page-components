import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import Section, { SectionProps } from './Section'

const meta: Meta = {
  title: 'Components / Section',
  component: Section,
}

export default meta

const Template: StoryFn<SectionProps> = (args: SectionProps) => (
  <Section {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: <p>Text example...</p>,
  hasBorderBottom: true,
  hasBorderTop: true,
  imgUrl: 'https://th.bing.com/th/id/OIP.FVh4xjSOYGGaMQfS88KqXAHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain'
}
