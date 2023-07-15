import styled from 'styled-components'

export const Root = styled.a<{
  $color: string
  $colorOnHover: string
  $isClicable: boolean
}>`
  color: ${({ $color }) => $color};
  font-weight: 500;

  & + & {
    margin-left: 32px;
  }

  &:hover {
    cursor: ${({ $isClicable }) => ($isClicable ? `pointer` : `default`)};
    color: ${({ $colorOnHover }) => $colorOnHover};
  }
`
