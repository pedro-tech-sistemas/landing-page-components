import { Meta, StoryFn } from '@storybook/react'

import { Box, Stack, Typography } from '@mui/material'
import FullWidthWithImage, { FullWidthWithImageProps } from './FullWidthWithImage'

const meta: Meta = {
  title: 'Components / sections / FullWidthWithImage',
  component: FullWidthWithImage,
}

export default meta

const Template: StoryFn<FullWidthWithImageProps> = (args: FullWidthWithImageProps) => (
  <FullWidthWithImage {...args}>
    <Typography variant='h1'>Hi there!</Typography>
    <Typography variant='h2'>This is the content!</Typography>
    <Typography>The content is fully editable by the parent</Typography>
    <Typography variant='body1'>via children</Typography>
  </FullWidthWithImage>
)

const RealExampleTemplate = () => (
  <Box>
    <Typography>Other sections here</Typography>

    <FullWidthWithImage
      bgcolor='secondary.main'
      imageUrl='https://th.bing.com/th/id/R.61e82649496666cc5ff5c6cdc433cd9a?rik=wf%2bVOIQ6zZiyXg&riu=http%3a%2f%2fportuguese.beverageproductionline.com%2fphoto%2fbeverageproductionline%2feditor%2f20180215141537_91175.jpg&ehk=MCN%2fPxFHDZRnqN0iEZlxh3vD5sFy23RObi7vt7Pwecs%3d&risl=&pid=ImgRaw&r=0'
    >
      <Stack height='100%' justifyContent='center' spacing={4}>
        <Typography variant='h1' color='primary.main'>
          Sobre a Empresa
        </Typography>

        <Typography fontWeight='500'>
          Tadashi Salgados tem 4 anos de história na fabricação de salgados, e possui distribuição
          quase todos os estados do país, atendendo à demanda de grandes redes de redes de fast
          food. food. A empresa elabora mais de 100 tipos de salgados, entre pães de queijo,
          croissants e pães de batata, além de uma extensa linha de produtos que dispensam as fases
          descongelamento e fermentação. O diferencial está na alta qualidade dos produtos,
          elaborados a partir de matérias-primas rigorosamente selecionadas. Seu processo de
          produção conta com uma equipe técnica composta por nutricionistas e engenheiros de
          alimentos, garantindo qualidade e segurança alimentar aos produtos. O sucesso da UAI
          Salgados é resultado da relação de confiança com os distribuidores, clientes e
          consumidores, que propiciam histórias de crescimento mútuo. Em constante busca por
          aprimoramento, seus valores estão consolidados em inovação, qualidade, honestidade,
          transparência e humanização em um ambiente participativo.
        </Typography>
      </Stack>
    </FullWidthWithImage>

    <Typography>Other sections here</Typography>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://th.bing.com/th/id/OIP.UtwDNmhc0eoz-UAfJd4_PwHaDt?rs=1&pid=ImgDetMain',
}

export const WithCustomHeight = Template.bind({})
WithCustomHeight.args = {
  ...Default.args,
  height: '50vh',
}

export const WithCustomSx = Template.bind({})
WithCustomSx.args = {
  ...Default.args,
  sx: {
    backgroundColor: 'red',
  },
}

export const WithRealExample = RealExampleTemplate.bind({})
