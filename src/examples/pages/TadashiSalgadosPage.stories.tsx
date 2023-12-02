import React from 'react'
import { Meta } from '@storybook/react'

import TadashiSalgadosPage from './TadashiSalgadosPage'

const meta: Meta = {
  title: 'Components / Examples / Tadashi Salgados',
  component: TadashiSalgadosPage,
}

export default meta

const Template = () => (
  <TadashiSalgadosPage />
)

export const Default = Template.bind({})
