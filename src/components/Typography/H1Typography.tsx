import { Typography, TypographyProps } from '@mui/material';

export default function H1Typography(props: TypographyProps) {
  return (
    <Typography variant="h1" {...props}>{props.children}</Typography>
  );
}
