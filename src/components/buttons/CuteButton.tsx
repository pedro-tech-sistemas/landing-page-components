import { ButtonBase, ButtonBaseProps } from '@mui/material'

export interface CuteButtonProps extends ButtonBaseProps {}

const CuteButton = ({ children, ...restProps }: CuteButtonProps) => {
  return (
    <ButtonBase
      {...restProps}
      sx={{
        py: 1,
        px: 4,
        borderRadius: '30px',
        fontSize: '1.5rem',
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'Denk One',
        boxShadow: '0px 12px 9px -6px rgba(0,0,0,0.3)',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(2px)',
          boxShadow: '0px 15px 12px -6px rgba(0,0,0,0.4)',
        },
        ...restProps.sx,
      }}
    >
      {children}
    </ButtonBase>
  )
}

export default CuteButton
