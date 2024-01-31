import { Meta, StoryFn } from '@storybook/react'

import { Grid } from '@mui/material'
import FoodCard, { FoodCardProps } from './FoodCard'

const meta: Meta = {
  title: 'Components / foods / FoodCard',
  component: FoodCard,
}

export default meta

const cakesAndCandies: FoodCardProps[] = [
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.0K6FdFN2Dpu2l8zp3gbJHAHaHa?rs=1&pid=ImgDetMain',
    name: 'Bolo de Ninho com Morango',
    description:
      'Delicado pão de ló combinado com cremoso recheio de ninho e morangos frescos, criando uma harmonia perfeita de sabores.',
    price: '69.99',
    imageTitle: '',
  },
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.syKbGW8Ww0d3BF5UKhc-fAHaE8?rs=1&pid=ImgDetMain',
    name: 'Bolo de Brigadeiro Tradicional',
    description:
      'Clássico pão de ló de chocolate, enriquecido com um recheio generoso de brigadeiro cremoso, para os verdadeiros amantes do chocolate.',
    price: '69.99',
    imageTitle: '',
  },
  {
    imageUrl:
      'https://folhago.com.br/blogs/receitas-faceis/wp-content/uploads/2021/01/bolo-de-leite-ninho-2-1130x580.jpeg',
    name: 'Bolo de Ninho',
    description:
      'Sofisticado bolo de ninho, mesclando a leveza do pão de ló com o sabor suave e adocicado do recheio de ninho, uma verdadeira delícia.',
    price: '69.99',
    imageTitle: '',
  },
  {
    imageUrl:
      'https://th.bing.com/th/id/R.6851027d335dc0615376c4dd5bf7de6d?rik=r8cH7ovpmJ8RAw&pid=ImgRaw&r=0',
    name: 'Bolo de Prestígio',
    description:
      'Um clássico irresistível, combinando pão de ló de chocolate com recheio cremoso de brigadeiro e toques de coco.',
    price: '69.99',
    imageTitle: '',
  },
  {
    imageUrl: 'https://img.elo7.com.br/product/main/35B32FA/cento-brigadeiro-tradicional.jpg',
    name: 'Docinhos de Brigadeiro Tradicional',
    description:
      'Perfeita combinação de chocolate e leite condensado, enrolados à mão para proporcionar um sabor clássico e inesquecível.',
    price: '89.99',
    imageTitle: '',
  },
  {
    imageUrl:
      'https://th.bing.com/th/id/R.f0d02c5303a46132eef6fc2fa530ed16?rik=lzOXQ4Q6GbgGnA&pid=ImgRaw&r=0',
    name: 'Docinhos de Ninho',
    description:
      'Delicados e suaves, esses docinhos de ninho trazem o sabor cremoso do leite em pó em uma textura irresistível.',
    price: '89.99',
    imageTitle: '',
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/fd/94/55/fd945589a153e2997be51789eb81a0b6.png',
    name: 'Docinhos de Brigadeiro Gourmet',
    description:
      'Uma versão sofisticada do brigadeiro, com ingredientes premium que elevam este doce tradicional a um novo patamar de sabor.',
    price: '99.99',
    imageTitle: '',
  },
]

const Template: StoryFn<FoodCardProps> = (args: FoodCardProps) => <FoodCard {...args} />

const InAGrid: StoryFn<FoodCardProps> = () => (
  <Grid container justifyContent='center' spacing={4} mt={3}>
    {cakesAndCandies.map((newItem) => (
      <Grid item xs={12} sm={6} md={4} key={newItem.name}>
        <FoodCard {...newItem} />
      </Grid>
    ))}
  </Grid>
)

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

export const WithPriceDetail = Template.bind({})
WithPriceDetail.args = {
  ...WithPrice.args,
  priceDetail: 'kg',
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

export const ItemsInAGrid = InAGrid.bind({})
