import { Box, BoxProps, Container } from '@mui/material'

export interface SectionProps extends BoxProps {}

const Section = ({ children, ...restProps }: SectionProps) => (
  <Box {...restProps}>
    <Container maxWidth='lg'>{children}</Container>
  </Box>
)

export default Section
