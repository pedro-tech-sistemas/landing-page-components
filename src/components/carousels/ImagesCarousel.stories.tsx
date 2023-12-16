import { Meta, StoryFn } from '@storybook/react'

import ImagesCarousel, { ImagesCarouselProps } from './ImagesCarousel'

const meta: Meta = {
  title: 'Components / carousels / ImagesCarousel',
  component: ImagesCarousel,
}

export default meta

const Template: StoryFn<ImagesCarouselProps> = (args: ImagesCarouselProps) => (
  <ImagesCarousel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  images: [
    'https://http2.mlstatic.com/salgados-saborosos-para-festa-infantil-preco-de-atacado-sp-D_NQ_NP_371215-MLB25167033484_112016-F.jpg',
    'https://media.istockphoto.com/id/1205817264/pt/foto/hiking-mature-adult-woman-stops-to-look-at-view.webp?s=170667a&w=0&k=20&c=kS0D3UBWWai0wkZh-haDT3qa7EDZhb9_ZIXRgHquyOA=',
    'https://media.istockphoto.com/id/1439722742/pt/foto/sentimental-happy-couple-in-love-bonding-surrounded-by-rocks.webp?s=170667a&w=0&k=20&c=CG17n1DkCcwfw_rRiem4JrmW8PDzaoS1_4sEPCtXYzs=',
  ],
}
