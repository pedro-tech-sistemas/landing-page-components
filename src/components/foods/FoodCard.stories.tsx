import { Meta, StoryFn } from '@storybook/react'

import FoodCard, { FoodCardProps } from './FoodCard'

const meta: Meta = {
  title: 'Components / foods / FoodCard',
  component: FoodCard,
}

export default meta

const Template: StoryFn<FoodCardProps> = (args: FoodCardProps) => <FoodCard {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Veg Mixer',
  description: 'Tomato Salad & Carrot',
  imageUrl: 'https://th.bing.com/th/id/OIP.KNgUj-k9ue5Uzjaa6zmjNgHaGv?rs=1&pid=ImgDetMain',
  imageTitle: 'veg mixer',
}

export const WithPrice = Template.bind({})
WithPrice.args = {
  ...Default.args,
  price: '5,99',
}

export const WithRating = Template.bind({})
WithRating.args = {
  ...Default.args,
  stars: '5.0',
  votes: 57,
}

export const WithPriceAndRating = Template.bind({})
WithPriceAndRating.args = {
  ...WithPrice.args,
  ...WithRating.args,
}
