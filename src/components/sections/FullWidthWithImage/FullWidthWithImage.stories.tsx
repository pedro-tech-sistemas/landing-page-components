import { Meta, StoryFn } from '@storybook/react'

import FullWidthWithImage, { FullWidthWithImageProps } from './FullWidthWithImage'

const meta: Meta = {
  title: 'Components / sections / FullWidthWithImage',
  component: FullWidthWithImage,
}

export default meta

const Template: StoryFn<FullWidthWithImageProps> = (args: FullWidthWithImageProps) => (
  <FullWidthWithImage {...args}>
    <p>oi galera!</p>
  </FullWidthWithImage>
)

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://th.bing.com/th/id/OIP.UtwDNmhc0eoz-UAfJd4_PwHaDt?rs=1&pid=ImgDetMain',
}
