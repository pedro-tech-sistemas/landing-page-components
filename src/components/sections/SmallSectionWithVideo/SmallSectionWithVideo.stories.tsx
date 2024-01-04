import { Meta, StoryFn } from '@storybook/react'

import { Button, Stack, Typography } from '@mui/material'
import SmallSectionWithVideo, { SmallSectionWithVideoProps } from './SmallSectionWithVideo'
import videoSrc from '../../../examples/images/carol-coxinhas-ex.mp4'

const meta: Meta = {
  title: 'Components / sections / SmallSectionWithVideo',
  component: SmallSectionWithVideo,
}

export default meta

const Template: StoryFn<SmallSectionWithVideoProps> = (args: SmallSectionWithVideoProps) => (
  <SmallSectionWithVideo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  videoSrc,
  children: (
    <Stack alignItems='center' spacing={3}>
      <Typography variant='h2' color='white'>
        Presente em todo Brasil
      </Typography>

      <Button variant='outlined' color='secondary' sx={{ borderRadius: 0, width: 'fit-content' }}>
        Whatsapp
      </Button>
    </Stack>
  ),
}
