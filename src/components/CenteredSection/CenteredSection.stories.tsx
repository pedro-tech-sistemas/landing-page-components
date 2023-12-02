import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import CenteredSection, { CenteredSectionProps } from './CenteredSection'

const meta: Meta = {
  title: 'Components / CenteredSection',
  component: CenteredSection,
}

export default meta

const Template: StoryFn<CenteredSectionProps> = (args: CenteredSectionProps) => (
  <CenteredSection
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {
  isH1: true,
  title: 'Seu trabalho flui. Seu negócio voa.',
  subtitle: 'O que você gostaria de gerenciar com a monday.com?',
  bgcolor: 'red',
  height: '100vh',
  direction: 'row',
  bannerUrl: 'https://th.bing.com/th/id/OIP._9BCnQIsggbjsJMyRGQ66wHaFY?rs=1&pid=ImgDetMain'
}
