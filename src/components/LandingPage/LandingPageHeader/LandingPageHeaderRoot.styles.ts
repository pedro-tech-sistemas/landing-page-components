import styled from 'styled-components'

export const Root = styled.header<{
  $isFixed?: boolean
  $bgColor?: string
  $isBgTransparent?: boolean
  $hasBorderBottom?: boolean
}>`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;

  ${({ $isFixed }) =>
    $isFixed &&
    `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  `};
  ${({ $hasBorderBottom }) => $hasBorderBottom && `border-bottom: 1px solid #e5e7eb;`};
  ${({ $bgColor }) => $bgColor && `background: ${$bgColor};`};
  ${({ $isBgTransparent }) => $isBgTransparent && `background: transparent;`};
`
