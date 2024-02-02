import { Meta, StoryFn } from '@storybook/react'

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import NodesCarousel, { NodesCarouselProps } from './NodesCarousel'

const meta: Meta = {
  title: 'Components / carousels / NodesCarousel',
  component: NodesCarousel,
}

export default meta

const Template: StoryFn<NodesCarouselProps> = (args: NodesCarouselProps) => (
  <NodesCarousel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  items: [
    <Box key={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant='h4'>Bem-vindo ao Carrossel!</Typography>
    </Box>,
    <Card key={2} sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image='https://source.unsplash.com/random'
        alt='Imagem Aleatória'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Imagem Aleatória
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Esta é uma imagem aleatória do Unsplash.
        </Typography>
      </CardContent>
    </Card>,
    <Typography key={3} variant='h6' sx={{ textAlign: 'center' }}>
      Explore o conteúdo!
    </Typography>,
  ],
}

export const WithCustomBackgroundColor = Template.bind({})
WithCustomBackgroundColor.args = {
  ...Default.args,
  bgcolor: 'green',
}
