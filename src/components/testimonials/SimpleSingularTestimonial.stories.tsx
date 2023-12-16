import { Meta, StoryFn } from '@storybook/react'

import SimpleSingularTestimonial, {
  SimpleSingularTestimonialProps,
} from './SimpleSingularTestimonial'

const meta: Meta = {
  title: 'Components / testimonials / SimpleSingularTestimonial',
  component: SimpleSingularTestimonial,
}

export default meta

const Template: StoryFn<SimpleSingularTestimonialProps> = (
  args: SimpleSingularTestimonialProps
) => <SimpleSingularTestimonial {...args} />

export const Default = Template.bind({})
Default.args = {
  testimonialText:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  imageUrl:
    'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
  name: 'STEVEN MARCETTI',
}
