import { Meta, StoryFn } from '@storybook/react'

import Centered, { CenteredProps } from './Centered'

const meta: Meta = {
  title: 'Components / sections / Centered',
  component: Centered,
}

export default meta

const Template: StoryFn<CenteredProps> = (args: CenteredProps) => <Centered {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Seu trabalho flui. Seu negócio voa.',
  bgcolor: 'red',
  height: '100vh',
  direction: 'row',
}
