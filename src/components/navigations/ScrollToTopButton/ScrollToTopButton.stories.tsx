import { Meta, StoryFn } from '@storybook/react'

import { Box } from '@mui/material'
import ScrollToTopButton, { ScrollToTopButtonProps } from './ScrollToTopButton'

const meta: Meta = {
  title: 'Components / navigations / ScrollToTopButton',
  component: ScrollToTopButton,
}

export default meta

const Template: StoryFn<ScrollToTopButtonProps> = (args: ScrollToTopButtonProps) => (
  <Box height='200vh'>
    <ScrollToTopButton {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {}
