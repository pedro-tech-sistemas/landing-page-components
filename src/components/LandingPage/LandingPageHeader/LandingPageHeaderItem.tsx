import React from 'react'
import * as S from './LandingPageHeaderItem.styles'

export interface LandingPageHeaderItemProps {
  redirectTo?: string
  scrollTo?: string
  color?: string
  colorOnHover?: string
  children?: React.ReactNode
}

export default function LandingPageHeaderItem({
  redirectTo,
  scrollTo,
  color = '#e4e4e4',
  colorOnHover = '#f03d3d',
  children,
}: LandingPageHeaderItemProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (scrollTo) {
      event.preventDefault()
      const targetElement = document.getElementById(scrollTo)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <S.Root href={scrollTo ? undefined : redirectTo} onClick={handleClick} $color={color} $colorOnHover={colorOnHover}>
      {children}
    </S.Root>
  )
}
