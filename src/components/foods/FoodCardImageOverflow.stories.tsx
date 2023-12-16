import { Meta, StoryFn } from '@storybook/react'

import { Box, Typography } from '@mui/material'
import FoodCardImageOverflow, { FoodCardImageOverflowProps } from './FoodCardImageOverflow'

const meta: Meta = {
  title: 'Components / foods / FoodCardImageOverflow',
  component: FoodCardImageOverflow,
}

export default meta

const Template: StoryFn<FoodCardImageOverflowProps> = (args: FoodCardImageOverflowProps) => (
  <Box>
    <FoodCardImageOverflow {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Só Love',
  items: [
    '1 COPO KIDS DE BATATITAS',
    '+1 COXINHA DE FRANGO OU CREMOSA',
    '+1 REFRIGERANTE 220ML',
    '+1 MOLHO ESPECIAL',
  ],
  imgUrl: 'https://receitadodia.com/wp-content/uploads/2015/07/coxinha-de-frango-01.jpg',
}

export const WithExtraInfo = Template.bind({})
WithExtraInfo.args = {
  ...Default.args,
  extraInfo: 'Escolha 9 ou 22g',
}

export const WithBottomText = Template.bind({})
WithBottomText.args = {
  ...Default.args,
  bottomTextLabel: 'Mais vendido',
}

export const WithCustomBodyList = Template.bind({})
WithCustomBodyList.args = {
  ...Default.args,
  renderItems: (items) => {
    return items.map((item) => (
      <Typography color='red' textAlign='end' key={item}>
        {item}
      </Typography>
    ))
  },
}
