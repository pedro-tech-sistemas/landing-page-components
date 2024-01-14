import { CSSProperties, ReactNode } from 'react'

import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export interface FoodCardImageOverflowProps {
  items: string[]
  renderItems?: (items: string[]) => ReactNode
  title: string
  imgUrl: string
  extraInfo?: string
  bottomTextLabel?: string
  bottomTextColor?: CSSProperties['color']
}

const FoodCardImageOverflow = ({
  renderItems,
  items,
  title,
  imgUrl,
  extraInfo,
  bottomTextLabel,
  bottomTextColor,
}: FoodCardImageOverflowProps) => {
  const content = renderItems
    ? renderItems(items)
    : items.map((item) => (
        <Typography key={item} color='text.secondary' fontWeight={500} textAlign='center'>
          {item}
        </Typography>
      ))

  return (
    <Box width='100%'>
      <Box
        src={imgUrl}
        component='img'
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
        }}
      />

      <Card
        sx={{
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .2)',
          borderRadius: 0,
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          marginTop: '-6px',
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            sx: {
              fontSize: { xs: 32, md: 32 },
            },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            color: 'text.secondary',
            fontFamily: 'Denk One',
          }}
        />

        <CardContent>
          {content}

          {extraInfo && (
            <Typography mt={2} fontWeight={700} textTransform='uppercase' textAlign='center'>
              {extraInfo}
            </Typography>
          )}
        </CardContent>
      </Card>

      {bottomTextLabel && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: bottomTextColor || 'primary.main',
            width: '70%',
            height: '28px',
            borderBottomLeftRadius: '30px',
            borderBottomRightRadius: '30px',
            borderColor: grey[800],
            borderTopStyle: 'dashed',
            borderWidth: '3px',
            margin: '0 auto',
          }}
        >
          <Typography variant='caption' fontWeight={700} textTransform='uppercase' color={grey[50]}>
            {bottomTextLabel}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default FoodCardImageOverflow
