/* eslint-disable react/no-array-index-key */
import { Box, IconButton } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { grey } from '@mui/material/colors'

export interface ImagesCarouselProps {
  images: string[]
}

const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0)

  const handleChangeImage = useCallback(
    (increment: number) => {
      setCurrentImage((prev) => (prev + increment + images.length) % images.length)
    },
    [images.length]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      handleChangeImage(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [handleChangeImage])

  return (
    <Box sx={{ position: 'relative', height: '430px', width: '100%' }}>
      {images.map((image, index) => (
        <Box
          key={image}
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}

      <IconButton
        onClick={() => handleChangeImage(-1)}
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
        onClick={() => handleChangeImage(1)}
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
        {Array.from({ length: images.length }).map((_, index) => (
          <CircleIcon
            key={index}
            onClick={() => setCurrentImage(index)}
            fontSize='small'
            sx={{
              color: grey[50],
              opacity: index === currentImage ? 1 : 0.5,
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ImagesCarousel
