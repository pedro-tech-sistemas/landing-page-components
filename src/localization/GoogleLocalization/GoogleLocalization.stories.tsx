import { Meta, StoryFn } from '@storybook/react'

import GoogleLocalization, { GoogleLocalizationProps } from './GoogleLocalization'

const meta: Meta = {
  title: 'Components / localization / GoogleLocalization',
  component: GoogleLocalization,
}

export default meta

const Template: StoryFn<GoogleLocalizationProps> = (args: GoogleLocalizationProps) => (
  <GoogleLocalization {...args} />
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.094164131254!2d-46.98775392505921!3d-22.687538279410003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8e97ad2d99a49%3A0x7aec869e1f477187!2sTadashi%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1705164731646!5m2!1spt-BR!2sbr',
}

export const WithCustomSize = Template.bind({})
WithCustomSize.args = {
  ...Default.args,
  width: '500px',
  height: '500px',
}

export const WithCustomStyle = Template.bind({})
WithCustomStyle.args = {
  ...Default.args,
  ...WithCustomSize.args,
  style: {
    border: '4px solid red',
  },
}
