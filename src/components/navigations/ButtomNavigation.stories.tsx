import { Meta, StoryFn } from '@storybook/react'

import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ButtomNavigation, { ButtonNavigationProps } from './ButtomNavigation'

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
  contentComponents: [<p key='1'>1</p>, <p key='2'>2</p>, <p key='3'>3</p>],
}
