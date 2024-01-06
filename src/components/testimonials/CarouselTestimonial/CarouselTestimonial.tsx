import { useState } from 'react'
import { Box, Button, MobileStepper, Stack, Typography } from '@mui/material'
import { West, East, FormatQuote } from '@mui/icons-material'

export interface CarouselTestimonialProps {
  testimonials: Testimonial[]
}

const hoverStyle = {
  '&:hover': {
    transform: 'scale(1.3)',
    transition: 'transform 0.2s ease-in-out',
  },
}

// Needs to be done
const CarouselTestimonial = ({ testimonials }: CarouselTestimonialProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const maxSteps = testimonials.length

  const handleNext = () => {
    setActiveTestimonial((prevActiveTestimonial) => prevActiveTestimonial + 1)
  }

  const handleBack = () => {
    setActiveTestimonial((prevActiveTestimonial) => prevActiveTestimonial - 1)
  }

  return (
    <Stack alignItems='center'>
      <Box
        width={258}
        height={258}
        sx={{
          backgroundImage: `url(${testimonials[activeTestimonial].imageUrl})`,
          borderRadius: 1,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      />

      <Box position='relative' p={3} mt={2}>
        <FormatQuote
          color='primary'
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            fontSize: 32,
          }}
        />

        <Typography component='blockquote' textAlign='center' fontSize={20} fontWeight={500}>
          {testimonials[activeTestimonial].testimonialText}
        </Typography>

        <FormatQuote
          color='primary'
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            fontSize: 32,
          }}
        />
      </Box>

      <MobileStepper
        variant='text'
        steps={maxSteps}
        position='static'
        activeStep={activeTestimonial}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeTestimonial === maxSteps - 1}
            sx={hoverStyle}
          >
            <East />
          </Button>
        }
        backButton={
          <Button
            size='small'
            onClick={handleBack}
            disabled={activeTestimonial === 0}
            sx={hoverStyle}
          >
            <West />
          </Button>
        }
        sx={{
          justifyContent: 'space-between',
        }}
      />
    </Stack>
  )
}

export default CarouselTestimonial
