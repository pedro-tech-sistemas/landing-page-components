import { Box, Stack, Typography } from '@mui/material'

export interface TeamMemberProps {
  imageUrl: string
  name: string
  position: string
}

const TeamMember = ({ imageUrl, name, position }: TeamMemberProps) => {
  return (
    <Stack alignItems='center' textAlign='center'>
      <Box
        width={258}
        height={258}
        sx={{
          backgroundImage: `url(${imageUrl})`,
          borderRadius: 1,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
        }}
      />

      <Box mt={3}>
        <Typography
          fontSize={14}
          textTransform='uppercase'
          fontWeight={600}
          color='primary'
          display='block'
          variant='caption'
        >
          {position}
        </Typography>

        <Typography fontSize={20} fontWeight={500} variant='caption'>
          {name}
        </Typography>
      </Box>
    </Stack>
  )
}

export default TeamMember
