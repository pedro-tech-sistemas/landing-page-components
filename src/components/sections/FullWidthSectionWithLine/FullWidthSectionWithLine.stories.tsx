import { Meta, StoryFn } from '@storybook/react'

import FullWidthSectionWithLine, { FullWidthSectionWithLineProps } from './FullWidthSectionWithLine'

const meta: Meta = {
  title: 'Components / sections / FullWidthSectionWithLine',
  component: FullWidthSectionWithLine,
}

export default meta

const Template: StoryFn<FullWidthSectionWithLineProps> = (args: FullWidthSectionWithLineProps) => (
  <FullWidthSectionWithLine {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Cardápio',
}
