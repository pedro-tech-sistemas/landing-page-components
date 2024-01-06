import { CSSProperties, ReactNode } from 'react'

import { Box } from '@mui/material'
import Carousel from '../Carousel'

export interface NodesCarouselProps {
  items: ReactNode[]
  height?: CSSProperties['height']
}

const NodesCarousel = ({ items, height = '430px' }: NodesCarouselProps) => {
  const renderItem = (item: ReactNode, index: number) => (
    <Box
      key={index}
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {item}
    </Box>
  )

  return <Carousel items={items} height={height} renderItem={renderItem} />
}

export default NodesCarousel
