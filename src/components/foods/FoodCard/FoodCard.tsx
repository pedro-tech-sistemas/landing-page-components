import { Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export interface FoodCardProps {
  imageUrl: string
  imageTitle: string
  name: string
  description: string
  price?: string
  priceDetail?: string
  stars?: string
  votes?: number
}

const FoodCard = ({
  imageUrl,
  imageTitle,
  name,
  description,
  price,
  priceDetail,
  stars,
  votes,
}: FoodCardProps) => {
  const hasCardRating = !!(stars && votes)

  return (
    <Card sx={{ width: '100%', minWidth: 120, boxShadow: 'none', height: '100%' }}>
      <CardMedia
        sx={{
          height: 180,
          display: 'flex',
          alignItems: 'end',
          boxSizing: 'border-box',
          paddingBottom: 2,
          paddingLeft: 2,
        }}
        image={imageUrl}
        title={imageTitle}
      >
        {hasCardRating && (
          <Stack
            direction='row'
            alignItems='center'
            spacing={0.5}
            sx={{
              bgcolor: grey[50],
              paddingY: 0.5,
              paddingX: 2,
              width: 'fit-content',
              borderRadius: '50px',
            }}
          >
            <Rating name='votos' value={1} max={1} size='medium' readOnly />

            <Typography variant='h5' fontSize={14}>
              {stars}
            </Typography>

            <Typography fontSize={12} color='text.secondary' fontWeight={500}>
              ({votes})
            </Typography>
          </Stack>
        )}
      </CardMedia>

      <CardContent
        sx={{
          background: grey[100],
          height: '100%',
        }}
      >
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>

        <Typography variant='body2' color='text.secondary' fontWeight='500'>
          {description}
        </Typography>

        {price && (
          <Typography variant='h4' mt={2} display='inline-flex'>
            R${price}
            <Typography variant='caption' color='text.secondary' marginLeft={0.5}>
              {priceDetail}
            </Typography>
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default FoodCard
