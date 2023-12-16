import { Avatar, Stack, Typography } from '@mui/material';

export interface SimpleSingularTestimonialProps extends Testimonial {}

export default function SimpleSingularTestimonial({
  testimonialText,
  imageUrl,
  name,
}: SimpleSingularTestimonialProps) {
  return (
    <Stack
      alignItems="center"
      maxWidth={320}
      spacing={3}
    >
      <Avatar
        src={imageUrl}
        sx={{ width: 80, height: 80 }}
        alt="Imagem de um avaliador"
      />

      <Typography
        fontWeight="500"
        color="text.secondary"
        textAlign="center"
        component="blockquote"
      >
        "
        {testimonialText}
        "
      </Typography>

      <Typography fontWeight="500" textTransform="uppercase">
        - {name}
      </Typography>
    </Stack>
  )
}