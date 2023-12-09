import { Meta, StoryFn } from '@storybook/react';

import FoodCard, { FoodCardProps } from './FoodCard';

const meta: Meta = {
  title: 'Components / Food / FoodCard',
  component: FoodCard,
}

export default meta

const Template: StoryFn<FoodCardProps> = (args: FoodCardProps) => (
  <FoodCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Só love',
  // content: (
    
  // )
}
