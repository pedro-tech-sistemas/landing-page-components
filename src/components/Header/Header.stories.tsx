import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Header, { HeaderProps } from './Header';

const meta: Meta = {
  title: 'Components / Header',
  component: Header,
}

export default meta

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <Header
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {
  links: [
    {label: 'Produtos', url: 'produtos'},
    {label: 'Equipes', url: ''},
    {label: 'Plataforma', url: ''},
    {label: 'Recursos', url: ''},
  ],
}
