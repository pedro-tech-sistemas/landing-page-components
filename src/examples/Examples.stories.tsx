import { Meta } from '@storybook/react'

import TadashiSalgadosLandingPage from './TadashiSalgados'

const meta: Meta = {
  title: 'Examples',
}

export default meta

const TadashiSalgados = () => <TadashiSalgadosLandingPage />

export const Default = TadashiSalgados.bind({})
