import { Meta, StoryFn } from '@storybook/react'

import { Typography } from '@mui/material'
import FullWidthWithImage, { FullWidthWithImageProps } from './FullWidthWithImage'

const meta: Meta = {
  title: 'Components / sections / FullWidthWithImage',
  component: FullWidthWithImage,
}

export default meta

const Template: StoryFn<FullWidthWithImageProps> = (args: FullWidthWithImageProps) => (
  <FullWidthWithImage {...args}>
    <Typography variant='h1'>Hi there!</Typography>
    <Typography variant='h2'>This is the content!</Typography>
    <Typography>The content is fully editable by the parent</Typography>
    <Typography variant='body1'>via children</Typography>
  </FullWidthWithImage>
)

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://th.bing.com/th/id/OIP.UtwDNmhc0eoz-UAfJd4_PwHaDt?rs=1&pid=ImgDetMain',
}

export const WithCustomHeight = Template.bind({})
WithCustomHeight.args = {
  ...Default.args,
  height: '50vh',
}

export const WithCustomSx = Template.bind({})
WithCustomSx.args = {
  ...Default.args,
  sx: {
    backgroundColor: 'red',
  },
}
