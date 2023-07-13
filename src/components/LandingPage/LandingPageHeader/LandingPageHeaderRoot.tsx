import React from 'react'
import * as S from './LandingPageHeaderRoot.styles'

export interface LandingPageHeaderProps {
  isFixed?: boolean
  bgColor?: string
  isBgTransparent?: boolean
  hasBorderBottom?: boolean
  children: React.ReactNode
}

export default function LandingPageHeader({
  isFixed = false,
  bgColor = 'white',
  isBgTransparent = false,
  hasBorderBottom = true,
  children,
}: LandingPageHeaderProps) {
  return (
    <S.Root $isFixed={isFixed} $bgColor={bgColor} $isBgTransparent={isBgTransparent} $hasBorderBottom={hasBorderBottom}>
      {children}
    </S.Root>
  )
}
