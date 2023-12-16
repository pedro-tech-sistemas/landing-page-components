import { Meta, StoryFn } from '@storybook/react'

import { Stack } from '@mui/material'
import Content, { ContentProps } from './Content'

const meta: Meta = {
  title: 'Components / sections / Content',
  component: Content,
}

export default meta

const Template: StoryFn<ContentProps> = (args: ContentProps) => <Content {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <Stack>
      <p>This is a paragraph</p>
      <span>This is a span</span>
    </Stack>
  ),
}
