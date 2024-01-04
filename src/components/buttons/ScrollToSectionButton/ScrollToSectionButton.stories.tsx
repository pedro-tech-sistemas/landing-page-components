import { Meta, StoryFn } from '@storybook/react'

import { Box } from '@mui/material'
import ScrollToSectionButton, { ScrollToSectionButtonProps } from './ScrollToSectionButton'

const meta: Meta = {
  title: 'Components / buttons / ScrollToSectionButton',
  component: ScrollToSectionButton,
}

export default meta

const Template: StoryFn<ScrollToSectionButtonProps> = (args: ScrollToSectionButtonProps) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '150vh',
      justifyContent: 'space-between',
      flexShrink: 'unset',
    }}
  >
    <Box>
      <ScrollToSectionButton id='example' {...args} />
    </Box>

    <Box id='example'>
      <p>Hi there, I&apos;m the content you want to reach :D</p>
    </Box>

    <Box height='50vh'>
      <p>And I&apos;m another content</p>
    </Box>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Veja o cardápio',
}
