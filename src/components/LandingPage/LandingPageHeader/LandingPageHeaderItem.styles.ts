import styled from 'styled-components'

export const Root = styled.a<{ $color: string; $colorOnHover: string }>`
  color: ${({ $color }) => $color};
  font-weight: 500;

  & + & {
    margin-left: 32px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ $colorOnHover }) => $colorOnHover};
  }
`
