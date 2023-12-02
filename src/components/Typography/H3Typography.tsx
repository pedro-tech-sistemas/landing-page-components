import { Typography, TypographyProps } from '@mui/material';

export default function H3Typography(props: TypographyProps) {
  return (
    <Typography variant="h3" {...props}>{props.children}</Typography>
  );
}
