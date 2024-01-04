import { Meta, StoryFn } from '@storybook/react'

import SimpleSingularTestimonialWithRating, {
  SimpleSingularTestimonialWithRatingProps,
} from './SimpleSingularTestimonialWithRating'

const meta: Meta = {
  title: 'Components / testimonials / SimpleSingularTestimonialWithRating',
  component: SimpleSingularTestimonialWithRating,
}

export default meta

const Template: StoryFn<SimpleSingularTestimonialWithRatingProps> = (
  args: SimpleSingularTestimonialWithRatingProps
) => <SimpleSingularTestimonialWithRating {...args} />

export const Default = Template.bind({})
Default.args = {
  testimonialText:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  imageUrl:
    'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
  name: 'Steven Marcetti',
  ratingDate: '18 de março de 2023',
}

export const WithCustomRating = Template.bind({})
WithCustomRating.args = {
  ...Default.args,
  rating: 3,
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
  ...Default.args,
  align: 'center',
}

export const AlignEnd = Template.bind({})
AlignEnd.args = {
  ...Default.args,
  align: 'end',
}
