import styled from 'styled-components'

export const Root = styled.header<{
  $isFixed?: boolean
  $bgColor?: string
  $isBgTransparent?: boolean
}>`
  width: 100%;
  padding: 1.5rem;
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
  ${({ $bgColor }) => $bgColor && `background: ${$bgColor};`};
  ${({ $isBgTransparent }) => $isBgTransparent && `background: transparent;`};
  /* position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'relative')}; */
`
