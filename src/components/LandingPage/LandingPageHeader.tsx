import React from 'react'
import * as S from './LandingPageHeader.styles.ts'

export interface LandingPageHeaderProps {
  isFixed?: boolean
  bgColor?: string
  isBgTransparent?: boolean
}

export default function LandingPageHeader({
  isFixed = false,
  bgColor = 'white',
  isBgTransparent = false,
}: LandingPageHeaderProps) {
  return (
    <S.Root $isFixed={isFixed} $bgColor={bgColor} $isBgTransparent={isBgTransparent}>
      <h1>Logo</h1>
      <button>Home</button>
    </S.Root>
  )
}
