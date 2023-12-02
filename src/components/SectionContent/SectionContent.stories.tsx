import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import SectionContent, { SectionContentProps } from './SectionContent'
import { Stack } from '@mui/material'

const meta: Meta = {
  title: 'Components / SectionContent',
  component: SectionContent,
}

export default meta

const Template: StoryFn<SectionContentProps> = (args: SectionContentProps) => (
  <SectionContent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <Stack>
      <p>This is a paragraph</p>
      <span>This is a span</span>
    </Stack>
  )
}
