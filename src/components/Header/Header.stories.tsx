import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Box } from '@mui/material';

import Header, { HeaderProps } from './Header';

const meta: Meta = {
  title: 'Components / Header',
  component: Header,
}

export default meta

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <>
    <Header {...args} />

    <Box height="200vh" />
  </>
)

export const Default = Template.bind({})
Default.args = {
  links: [
    {label: 'Produtos', url: 'produtos'},
    {label: 'Equipes', url: ''},
    {label: 'Plataforma', url: ''},
    {label: 'Recursos', url: ''},
  ],
  ctaButton: {
    label: 'Whatsapp',
    action: () => console.log('Função!'),
  },
}
