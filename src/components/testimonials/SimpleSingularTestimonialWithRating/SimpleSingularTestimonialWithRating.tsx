import { Avatar, Box, Rating, Stack, Typography } from '@mui/material'

export interface SimpleSingularTestimonialWithRatingProps {
  rating?: number
  testimonialText: string
  imageUrl: string
  name: string
  ratingDate: string
  align?: 'start' | 'center' | 'end'
}

const SimpleSingularTestimonialWithRating = ({
  rating = 5,
  testimonialText,
  imageUrl,
  name,
  ratingDate,
  align = 'start',
}: SimpleSingularTestimonialWithRatingProps) => {
  return (
    <Stack rowGap={2} alignItems={align}>
      <Rating name='votos' value={rating} max={5} size='medium' readOnly />

      <Typography fontWeight='500' fontSize={14} color='text.secondary' component='blockquote'>
        &quot;{testimonialText}&quot;
      </Typography>

      <Stack direction='row' alignItems='center' columnGap={2}>
        <Avatar src={imageUrl} sx={{ width: 60, height: 60 }} alt='Imagem de um avaliador' />

        <Box>
          <Typography fontWeight='600' fontSize={20}>
            {name}
          </Typography>

          <Typography color='text.secondary' fontSize={14}>
            {ratingDate}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default SimpleSingularTestimonialWithRating
