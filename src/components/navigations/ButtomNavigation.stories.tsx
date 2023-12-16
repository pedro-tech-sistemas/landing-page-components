import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import ButtomNavigation, { ButtonNavigationProps } from './ButtomNavigation';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

const meta: Meta = {
  title: 'Components / navigations / ButtomNavigation',
  component: ButtomNavigation,
}

export default meta

const Template: StoryFn<ButtonNavigationProps> = (args: ButtonNavigationProps) => (
  <ButtomNavigation {...args} />
)

export const Default = Template.bind({})
Default.args = {
  buttons: [
    {
      label: 'Recentes',
      icon: <RestoreIcon />,
    },
    {
      label: 'Favoritos',
      icon: <FavoriteIcon />,
    },
  ],
  contentComponents: [
    (
      <p>1</p>
    ),
    (
      <p>2</p>
    ),
    (
      <p>3</p>
    ),
  ]
}
