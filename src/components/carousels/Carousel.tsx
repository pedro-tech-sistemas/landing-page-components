import { CSSProperties, ReactNode, useCallback, useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { grey } from '@mui/material/colors'

export interface CarouselProps {
  items: ReactNode[]
  height?: CSSProperties['height']
  renderItem: (item: ReactNode, index: number) => ReactNode
}

const Carousel = ({ items, height = '430px', renderItem }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleChangeIndex = useCallback(
    (increment: number) => {
      setCurrentIndex((prev) => (prev + increment + items.length) % items.length)
    },
    [items]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      handleChangeIndex(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [handleChangeIndex])

  return (
    <Box sx={{ position: 'relative', height, width: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {renderItem(items[currentIndex], currentIndex)}
      </Box>

      <IconButton
        onClick={() => handleChangeIndex(-1)}
        sx={{
          position: 'absolute',
          left: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          background: grey[900],
          opacity: 0.5,
          '&:hover': { opacity: 1, background: grey[900] },
        }}
      >
        <ChevronLeftIcon sx={{ color: grey[100] }} />
      </IconButton>

      <IconButton
        onClick={() => handleChangeIndex(1)}
        sx={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          background: grey[900],
          opacity: 0.5,
          '&:hover': { opacity: 1, background: grey[900] },
        }}
      >
        <ChevronRightIcon sx={{ color: grey[100] }} />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 12,
          display: 'flex',
        }}
      >
        {Array.from({ length: items.length }).map((_, index) => (
          <CircleIcon
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => setCurrentIndex(index)}
            fontSize='small'
            sx={{
              color: grey[50],
              opacity: index === currentIndex ? 1 : 0.5,
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Carousel
