import { IframeHTMLAttributes } from 'react'

export type GoogleLocalizationProps = IframeHTMLAttributes<HTMLIFrameElement>

const GoogleLocalization = (props: GoogleLocalizationProps) => {
  return (
    <iframe
      title='Maps Localization'
      width='100%'
      height='auto'
      style={{ border: '0' }}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      {...props}
    />
  )
}

export default GoogleLocalization
