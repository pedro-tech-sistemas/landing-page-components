import { CSSProperties } from 'react'

import { Box } from '@mui/material'
import Carousel from '../Carousel'

export interface ImagesCarouselProps {
  images: string[]
  height?: CSSProperties['height']
}

const ImagesCarousel = ({ images, height = '430px' }: ImagesCarouselProps) => {
  const renderImage = (image: any, index: number) => (
    <Box
      key={index}
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  )

  return <Carousel items={images} height={height} renderItem={renderImage} />
}

export default ImagesCarousel
