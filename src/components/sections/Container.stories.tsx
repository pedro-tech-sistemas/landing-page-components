import { Meta, StoryFn } from '@storybook/react'

import Container, { ContainerProps } from './Container'

const meta: Meta = {
  title: 'Components / sections / Container',
  component: Container,
}

export default meta

const Template: StoryFn<ContainerProps> = (args: ContainerProps) => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <p>Text example...</p>,
  hasBorderBottom: true,
  hasBorderTop: true,
  imgUrl:
    'https://th.bing.com/th/id/OIP.FVh4xjSOYGGaMQfS88KqXAHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain',
}
