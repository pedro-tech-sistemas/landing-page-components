import { grey, orange } from '@mui/material/colors'
import EastIcon from '@mui/icons-material/East'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import SimpleSingularTestimonialCard from 'src/components/testimonials/SimpleSingularTestimonialCard/SimpleSingularTestimonialCard'
import FoodCard from 'src/components/foods/FoodCard/FoodCard'
import GoogleLocalization from 'src/components/localization/GoogleLocalization/GoogleLocalization'
import FooterWithLogo from 'src/components/footers/FooterWithLogo/FooterWithLogo'
import FullWidthWithImage from 'src/components/sections/FullWidthWithImage/FullWidthWithImage'
import Header from '../components/headers/CommonHeader/CommonHeader'
import ImagesCarousel from '../components/carousels/ImagesCarousel/ImagesCarousel'
import ScrollToTopButton from '../components/navigations/ScrollToTopButton/ScrollToTopButton'
import videoSrc from './images/carol-coxinhas-ex.mp4'
import Section from '../components/sections/Section/Section'
import SmallSectionWithVideo from '../components/sections/SmallSectionWithVideo/SmallSectionWithVideo'
import FullWidthSectionWithLine from '../components/sections/FullWidthSectionWithLine/FullWidthSectionWithLine'
import FoodCardImageOverflow from '../components/foods/FoodCardImageOverflow/FoodCardImageOverflow'

const TadashiSalgados = () => {
  return (
    <Box>
      <ScrollToTopButton />

      <Header
        logo='https://th.bing.com/th/id/OIP.i1FtORNJy2Jz1Q5_d4L2-AAAAA?rs=1&pid=ImgDetMain'
        links={[
          { label: 'Sobre', url: '/' },
          { label: 'Cardápio', url: '/' },
          { label: 'Contato', url: '/' },
        ]}
        hideOnScrollDown
        textColor={grey[50]}
        ctaButtonLabel='Whatsapp'
        ctaButtonAction={() => console.log('Whatsapp')}
        ctaButtonIcon={<EastIcon />}
      />

      <ImagesCarousel
        images={[
          'https://media.istockphoto.com/id/1164397436/pt/foto/plate-with-coxinhas-a-typical-croquette-of-brazil.jpg?s=612x612&w=is&k=20&c=TukJDdAYRNjfcKD0l0AOBqbn4jjKNNnx_mFkSOhJ7bM=',
          'https://media.istockphoto.com/id/1424050486/pt/foto/coxinha-de-frango-1.jpg?s=1024x1024&w=is&k=20&c=PD1ga8geQi1EaHJR5uBgPST6ZiSdlMPlIQyuQ1XLWmw=',
          'https://media.istockphoto.com/id/1126232098/pt/foto/appetizers-called-teque%C3%B1os-made-of-fried-corn-filled-with-cheese.jpg?s=1024x1024&w=is&k=20&c=BTmOGG_Ti9X7f7bj87U_HTp8GD3wyKWiu60wlxHw4fE=',
        ]}
      />

      <FullWidthWithImage
        bgcolor='secondary.main'
        imageUrl='https://th.bing.com/th/id/R.61e82649496666cc5ff5c6cdc433cd9a?rik=wf%2bVOIQ6zZiyXg&riu=http%3a%2f%2fportuguese.beverageproductionline.com%2fphoto%2fbeverageproductionline%2feditor%2f20180215141537_91175.jpg&ehk=MCN%2fPxFHDZRnqN0iEZlxh3vD5sFy23RObi7vt7Pwecs%3d&risl=&pid=ImgRaw&r=0'
      >
        <Stack height='100%' justifyContent='center' spacing={4}>
          <Typography variant='h3' color='primary.main'>
            Empresa
          </Typography>

          <Typography fontWeight='500'>
            Tadashi Salgados tem 4 anos de história na fabricação de salgados, e possui distribuição
            em quase todos os estados do país, atendendo à demanda de grandes redes de redes de fast
            food. A empresa elabora mais de 100 tipos de salgados, entre pães de queijo, croissants
            e pães de batata, além de uma extensa linha de produtos que dispensam as fases
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

      <Section py={8} bgcolor='#312601'>
        <Typography
          variant='h3'
          color='#312601'
          textAlign='center'
          width='fit-content'
          px={4}
          py={1}
          borderRadius={1}
          margin='0 auto'
          sx={{ backgroundColor: 'secondary.main' }}
        >
          Últimos Lançamentos
        </Typography>

        <Typography variant='subtitle2' mt={1} color={grey[50]} textAlign='center'>
          Confira os produtos lançados recentemente
        </Typography>

        <Grid container justifyContent='center' spacing={4} mt={3}>
          <Grid item xs={12} sm={6} md={4}>
            <FoodCard
              name='Bauru'
              description='Delicioso queijo mussarela com um presunto de alta qualidade.'
              imageTitle=''
              imageUrl='https://media.istockphoto.com/id/1300351234/pt/foto/brazilian-snack-chicken-coxinha.jpg?s=612x612&w=is&k=20&c=KxO7AeIE7unhprXRqYZm5801Bsw-wUnz2tPMb1MYRR0='
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FoodCard
              name='Kibe recheado de catupiry'
              description='Deliciosa massa de kibe tradicional recheado com o melhor do catupiry.'
              imageTitle=''
              imageUrl='https://media.istockphoto.com/id/1300351412/pt/foto/kibe-roast-brazilian-snack.jpg?s=612x612&w=is&k=20&c=_fAFeVG0dqKUyeql3gjZ2r1M3cQPYPRogdR_pmH6qh0='
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FoodCard
              name='Kibe recheado de catupiry'
              description='Deliciosa massa de kibe tradicional recheado com o melhor do catupiry.'
              imageTitle=''
              imageUrl='https://media.istockphoto.com/id/1300351412/pt/foto/kibe-roast-brazilian-snack.jpg?s=612x612&w=is&k=20&c=_fAFeVG0dqKUyeql3gjZ2r1M3cQPYPRogdR_pmH6qh0='
            />
          </Grid>
        </Grid>
      </Section>

      <SmallSectionWithVideo height='60vh' videoSrc={videoSrc}>
        <Stack alignItems='center' spacing={3}>
          <Typography variant='h3' textAlign='center' color='white'>
            Tadashi Salgados é a felicidade de todos
          </Typography>

          <Button
            variant='outlined'
            color='secondary'
            sx={{ borderRadius: 0, width: 'fit-content' }}
          >
            Chamar no Whatsapp
          </Button>
        </Stack>
      </SmallSectionWithVideo>

      <Section
        py={8}
        position='relative'
        sx={{
          '&::before': {
            position: 'absolute',
            content: "''",
            width: '400px',
            height: '400px',
            backgroundColor: 'secondary.main',
            borderRadius: '100%',
            zIndex: -1,
            top: '50%',
            left: '-20%',
            transform: 'translateY(-50%)',
          },
        }}
      >
        <Typography variant='h3' mb={2}>
          Nossas avaliações
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <SimpleSingularTestimonialCard
              text='Os salgados são muito bons, sequinhos e de grande qualidade. Atendentes são simpáticos e educados. Recomendo a todos.'
              name='Marcelo CTS'
              imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SimpleSingularTestimonialCard
              text='O melhor salgado que já provei!! Excelente qualidade.'
              name='Sheila Figueira'
              imageUrl='https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SimpleSingularTestimonialCard
              text='Só tenho elogios! Podem comprar que vale muito a pena; peguei kit festas; salgadinhos secos e muuuuito saborosos, docinhos e bolos INCRÍVEIS. Super recomendo, é só pego com eles!'
              name='Camilo Cruz'
              imageUrl='https://images.unsplash.com/photo-1582152629442-4a864303fb96?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SimpleSingularTestimonialCard
              text='Os salgados tem um tamanho bom, são muito saborosos, muito bem feitos, crocantes, sequinhos e o preço é otimo'
              name='Gustavo Piccin'
              imageUrl='https://images.unsplash.com/photo-1603112579965-e24332cc453a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Grid>
        </Grid>
      </Section>

      <FullWidthSectionWithLine
        title='Cardápio'
        color={grey[50]}
        titleColor={grey[50]}
        bgcolor={orange[800]}
        py={4}
        id='#menu'
      >
        <Section mt={4}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from({ length: 8 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item xs={4} md={4} lg={4} key={index}>
                <FoodCardImageOverflow
                  imageUrl='https://media.istockphoto.com/id/1164397436/pt/foto/plate-with-coxinhas-a-typical-croquette-of-brazil.jpg?s=612x612&w=0&k=20&c=RMyUF1iQsTayrupjUgGe4HvUJKVoHSiJyIXHh4kGvaQ='
                  items={['Sabor Incomparável']}
                  title='Coxinha de Frango'
                  extraInfo='28G'
                  bottomTextLabel='Mais vendido'
                />
              </Grid>
            ))}
          </Grid>
        </Section>
      </FullWidthSectionWithLine>

      <GoogleLocalization
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.094164131254!2d-46.98775392505921!3d-22.687538279410003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8e97ad2d99a49%3A0x7aec869e1f477187!2sTadashi%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1705164731646!5m2!1spt-BR!2sbr'
        height='500px'
      />

      <FooterWithLogo
        logoSrc='https://i.pinimg.com/originals/fe/8f/ad/fe8fadd178bda6ea8a33bfa7a3ad4b8a.png'
        centerText='O melhor salgado da região'
        copy='2023 Tadashi Salgados. Todos os direitos reservados'
        socialLinks={[
          {
            icon: 'facebook',
            url: '',
          },
          {
            icon: 'instagram',
            url: '',
          },
        ]}
      />
    </Box>
  )
}

export default TadashiSalgados
