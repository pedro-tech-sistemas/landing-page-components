import { Meta, StoryFn } from '@storybook/react'

import CarouselTestimonial, { CarouselTestimonialProps } from './CarouselTestimonial'

const meta: Meta = {
  title: 'Components / testimonials / CarouselTestimonial',
  component: CarouselTestimonial,
}

export default meta

const Template: StoryFn<CarouselTestimonialProps> = (args: CarouselTestimonialProps) => (
  <CarouselTestimonial {...args} />
)

export const Default = Template.bind({})
Default.args = {
  testimonials: [
    {
      testimonialText:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      imageUrl:
        'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
      name: 'STEVEN MARCETTI',
    },
    {
      testimonialText:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      imageUrl:
        'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
      name: 'STEVEN MARCETTI',
    },
    {
      testimonialText:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      imageUrl:
        'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
      name: 'STEVEN MARCETTI',
    },
  ],
}
