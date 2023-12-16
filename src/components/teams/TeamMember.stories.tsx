import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import TeamMember, { TeamMemberProps } from './TeamMember'

const meta: Meta = {
  title: 'Components / teams / TeamMember',
  component: TeamMember,
}

export default meta

const Template: StoryFn<TeamMemberProps> = (args: TeamMemberProps) => (
  <TeamMember {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
  name: 'Adam Cuppy',
  position: 'founder',
}
