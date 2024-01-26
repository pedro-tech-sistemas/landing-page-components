import { Meta, StoryFn } from '@storybook/react'

import { Box, Grid, Typography } from '@mui/material'
import FoodCardImageOverflow, { FoodCardImageOverflowProps } from './FoodCardImageOverflow'

const meta: Meta = {
  title: 'Components / foods / FoodCardImageOverflow',
  component: FoodCardImageOverflow,
}

export default meta

const menuItems = [
  {
    imageUrl:
      'https://img.freepik.com/fotos-gratis/comida-brasileira-e-arranjo-de-molhos_23-2148875237.jpg?w=740&t=st=1706143248~exp=1706143848~hmac=78ecfe8460ee92cde9f22e92ae0d16f50dffe1ffe276cf9fed4bbdf52afc2d25',
    items: ['Sabor Incomparável'],
    title: 'Coxinha de Frango',
    extraInfo: '28G',
    bottomTextLabel: 'Mais vendido',
  },
  {
    imageUrl:
      'https://img.freepik.com/fotos-gratis/arranjo-de-croquetes-para-comida-de-angulo-alto_23-2149202668.jpg?w=740&t=st=1706143322~exp=1706143922~hmac=db8d17decba49c1c7532d906a74f0ab2d184a5bf56a67c1fe539ecffe87fe933',
    items: ['Queijo muzarela extremamente cremoso'],
    title: 'Bolinha de Queijo',
    extraInfo: '28G',
    bottomTextLabel: 'Mais aguardado',
  },
  {
    imageUrl: 'https://assets.unileversolutions.com/recipes-v2/54635.jpg',
    items: ['Calabresa saborosa', 'Muito tomate e queijo'],
    title: 'Calabresa com Queijo',
    extraInfo: '28G',
    bottomTextLabel: 'Mais aguardado',
  },
  {
    imageUrl:
      'https://img.freepik.com/fotos-gratis/comida-brasileira-e-arranjo-de-molhos_23-2148875237.jpg?w=740&t=st=1706143248~exp=1706143848~hmac=78ecfe8460ee92cde9f22e92ae0d16f50dffe1ffe276cf9fed4bbdf52afc2d25',
    items: ['Sabor Incomparável'],
    title: 'Coxinha de Frango',
    extraInfo: '28G',
    bottomTextLabel: 'Mais vendido',
  },
  {
    imageUrl:
      'https://img.freepik.com/fotos-gratis/arranjo-de-croquetes-para-comida-de-angulo-alto_23-2149202668.jpg?w=740&t=st=1706143322~exp=1706143922~hmac=db8d17decba49c1c7532d906a74f0ab2d184a5bf56a67c1fe539ecffe87fe933',
    items: ['Queijo muzarela extremamente cremoso'],
    title: 'Bolinha de Queijo',
    extraInfo: '28G',
    bottomTextLabel: 'Mais aguardado',
  },
  {
    imageUrl: 'https://assets.unileversolutions.com/recipes-v2/54635.jpg',
    items: ['Calabresa saborosa', 'Muito tomate e queijo'],
    title: 'Calabresa com Queijo',
    extraInfo: '28G',
    bottomTextLabel: 'Mais aguardado',
  },
]

const Template: StoryFn<FoodCardImageOverflowProps> = (args: FoodCardImageOverflowProps) => (
  <Box>
    <FoodCardImageOverflow {...args} />
  </Box>
)

const InAGrid: StoryFn<FoodCardImageOverflowProps> = () => (
  <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
    {menuItems.map((item) => (
      <Grid item xs={4} md={4} lg={4} key={item.title}>
        <FoodCardImageOverflow {...item} />
      </Grid>
    ))}
  </Grid>
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
  imageUrl: 'https://receitadodia.com/wp-content/uploads/2015/07/coxinha-de-frango-01.jpg',
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

export const ItemsInAGrid = InAGrid.bind({})
InAGrid.args = {
  ...Default.args,
  bottomTextLabel: 'Mais vendido',
}
