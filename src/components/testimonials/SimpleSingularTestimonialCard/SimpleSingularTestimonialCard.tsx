import { Avatar, Box, Card, CardContent, CardProps, Rating, Typography } from '@mui/material'

export interface SimpleSingularTestimonialCardProps extends CardProps {
  text: string
  name: string
  rating?: number
  imageUrl?: string
}

const SimpleSingularTestimonialCard = ({
  text,
  name,
  rating = 5,
  imageUrl,
}: SimpleSingularTestimonialCardProps) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent
        sx={{
          boxSizing: 'border-box',
          pt: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontWeight={500} color='text.secondary' component='blockquote'>
          {text}
        </Typography>

        <Box display='flex' alignItems='center' columnGap={1} mt={2}>
          {imageUrl && (
            <Avatar src={imageUrl} sx={{ width: 40, height: 40 }} alt='Imagem de um avaliador' />
          )}

          <Box display='flex' flexDirection={imageUrl ? 'column' : 'row'} columnGap={1}>
            <Typography pl={imageUrl && rating ? '2px' : 0}>{name}</Typography>

            {rating && <Rating name='votos' value={rating} max={5} size='medium' readOnly />}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SimpleSingularTestimonialCard
