import { Meta, StoryFn } from '@storybook/react'

import FooterWithLogo, { FooterWithLogoProps } from './FooterWithLogo'

const meta: Meta = {
  title: 'Components / footers / FooterWithLogo',
  component: FooterWithLogo,
}

export default meta

const Template: StoryFn<FooterWithLogoProps> = (args: FooterWithLogoProps) => (
  <FooterWithLogo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  logoSrc: 'https://i.pinimg.com/originals/fe/8f/ad/fe8fadd178bda6ea8a33bfa7a3ad4b8a.png',
}

export const WithCenterText = Template.bind({})
WithCenterText.args = {
  ...Default.args,
  centerText: 'Os melhores da região',
}

export const WithCopy = Template.bind({})
WithCopy.args = {
  ...Default.args,
  copy: '2023 Tadashi Salgados. Todos os direitos reservados',
}

export const WithSocialMedias = Template.bind({})
WithSocialMedias.args = {
  ...Default.args,
  socialLinks: [
    {
      icon: 'facebook',
      url: '',
    },
    {
      icon: 'instagram',
      url: '',
    },
  ],
}

export const Complete = Template.bind({})
Complete.args = {
  ...Default.args,
  ...WithCenterText.args,
  ...WithCopy.args,
  ...WithSocialMedias.args,
}

export const WithCustomBackgroundColor = Template.bind({})
WithCustomBackgroundColor.args = {
  ...Complete.args,
  bgColor: 'greenyellow',
  isDarkBackground: false,
}

export const WithCustomTextColor = Template.bind({})
WithCustomTextColor.args = {
  ...WithCustomBackgroundColor.args,
  textColor: 'aqua',
}
