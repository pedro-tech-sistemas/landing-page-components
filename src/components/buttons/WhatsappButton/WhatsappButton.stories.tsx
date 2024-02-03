import { Meta, StoryFn } from '@storybook/react'

import WhatsappButton, { WhatsappButtonProps } from './WhatsappButton'

const meta: Meta = {
  title: 'Components / buttons / WhatsappButton',
  component: WhatsappButton,
}

export default meta

const Template: StoryFn<WhatsappButtonProps> = (args: WhatsappButtonProps) => (
  <WhatsappButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  href: '#test',
}
