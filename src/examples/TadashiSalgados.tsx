/* eslint-disable react/no-array-index-key */
import { grey, orange } from '@mui/material/colors'
import EastIcon from '@mui/icons-material/East'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import SimpleSingularTestimonialCard from 'src/components/testimonials/SimpleSingularTestimonialCard/SimpleSingularTestimonialCard'
import ScrollToSectionButton from 'src/components/buttons/ScrollToSectionButton/ScrollToSectionButton'
import Header from '../components/headers/CommonHeader/CommonHeader'
import ImagesCarousel from '../components/carousels/ImagesCarousel/ImagesCarousel'
import ScrollToTopButton from '../components/navigations/ScrollToTopButton/ScrollToTopButton'
// import SmallSectionWithVideo from '../components/sections/SmallSectionWithVideo'
import videoSrc from './images/carol-coxinhas-ex.mp4'
import Section from '../components/sections/Section/Section'
import SmallSectionWithVideo from '../components/sections/SmallSectionWithVideo/SmallSectionWithVideo'
import FullWidthSectionWithLine from '../components/sections/FullWidthSectionWithLine/FullWidthSectionWithLine'
import FoodCardImageOverflow from '../components/foods/FoodCardImageOverflow/FoodCardImageOverflow'
import RotatingText from '../components/texts/RotatingText/RotatingText'

const TadashiSalgados = () => {
  const totalItems = 4

  return (
    <Box>
      <ScrollToTopButton />

      <Header
        logo='https://th.bing.com/th/id/OIP.Xu3uhsAOutc9qQ_TVh4IkwHaHa?pid=ImgDet&w=474&h=474&rs=1'
        links={[
          { label: 'Sobre', url: '/' },
          { label: 'Cardápio', url: '/' },
          { label: 'Contato', url: '/' },
        ]}
        textColor={grey[50]}
        ctaButtonLabel='Whatsapp'
        ctaButtonAction={() => console.log('Whatsapp')}
        ctaButtonIcon={<EastIcon />}
      />

      <ImagesCarousel
        images={[
          'https://th.bing.com/th/id/OIP.qcipbdOzxf0F3akbK2FR8QHaJQ?rs=1&pid=ImgDetMain',
          'https://th.bing.com/th/id/OIP.E0rzIGDVu9-89YdysuUXBAHaHa?pid=ImgDet&w=474&h=474&rs=1',
          'https://th.bing.com/th/id/OIP.IG63nhP1qokWCJJMcpxwnQHaJQ?pid=ImgDet&w=474&h=592&rs=1',
        ]}
      />

      <Section py={8}>
        <Stack
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          alignItems='center'
          justifyContent='space-between'
          rowGap={4}
        >
          <Box display='grid' rowGap={1} sx={{ width: { xs: '100%', md: '50% ' } }}>
            <Typography variant='h2' color='primary.main'>
              O MELHOR <RotatingText variant='h2' words={['SALGADO', 'BOLO', 'DE TUDO']} /> DA
              REGIÃO!
            </Typography>

            <Typography>
              Tadashi Salgados é uma das maiores redes de franquias de salgados do Brasil. Surgiu em
              Minas Gerais e vem conquistando todo o país! O sucesso se deve a qualidade de seus
              produtos e ao perfil jovem, entusiasmado, criativo e inovador da empresa. Tanto
              reconhecimento trouxe o título de “A Coxinha Mais Amada do Brasil” e hoje, o número de
              fãs da marca (Coxifans) cresce diariamente, graças à variedade de sabores da
              organização.
            </Typography>

            <ScrollToSectionButton id='#menu'>Ver o cardápio</ScrollToSectionButton>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: '300px' },
              height: { xs: '100%', md: '300px' },
              overflow: 'hidden',
            }}
          >
            <img
              alt='random'
              src='https://th.bing.com/th/id/OIP.E0rzIGDVu9-89YdysuUXBAHaHa?rs=1&pid=ImgDetMain'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>
        </Stack>
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

      <Section py={8}>
        <Typography variant='h2' mb={4}>
          Nossas avaliações
        </Typography>

        <Grid container spacing={2} rowGap={4}>
          {Array.from({ length: totalItems }).map(() => (
            // eslint-disable-next-line react/jsx-key
            <Grid item xs={12} sm={6}>
              <SimpleSingularTestimonialCard
                text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
                name='Steven Marcetti'
                rating={5}
              />
            </Grid>
          ))}
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
              <Grid item xs={4} md={4} lg={4} key={index}>
                <Box display='flex' justifyContent='center'>
                  <FoodCardImageOverflow
                    imgUrl='https://media.istockphoto.com/id/1164397436/pt/foto/plate-with-coxinhas-a-typical-croquette-of-brazil.jpg?s=612x612&w=0&k=20&c=RMyUF1iQsTayrupjUgGe4HvUJKVoHSiJyIXHh4kGvaQ='
                    items={['Sabor Incomparável']}
                    title='Coxinha de Frango'
                    extraInfo='28G'
                    bottomTextLabel='Mais vendido'
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Section>
      </FullWidthSectionWithLine>
    </Box>
  )
}

export default TadashiSalgados
