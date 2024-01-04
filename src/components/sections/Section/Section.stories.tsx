import { Meta } from '@storybook/react'

import { Typography } from '@mui/material'
import Section from './Section'

const meta: Meta = {
  title: 'Components / sections / Section',
  component: Section,
}

export default meta

const Template = () => (
  <Section>
    <Typography variant='h2'>This is the content</Typography>
  </Section>
)

export const Default = Template.bind({})
