import { Typography, TypographyProps } from '@mui/material';

export default function Body1Typography(props: TypographyProps) {
  return (
    <Typography variant="body1" {...props}>{props.children}</Typography>
  );
}
