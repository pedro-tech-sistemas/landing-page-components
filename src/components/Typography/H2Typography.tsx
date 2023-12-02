import { Typography, TypographyProps } from '@mui/material';

export default function H2Typography(props: TypographyProps) {
  return (
    <Typography variant="h2">{props.children}</Typography>
  );
}
