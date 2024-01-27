import { Meta, StoryFn } from '@storybook/react'
import SimpleSingularTestimonialCard, {
  SimpleSingularTestimonialCardProps,
} from './SimpleSingularTestimonialCard'

const meta: Meta = {
  title: 'components / testimonials / SimpleSingularTestimonialCard',
  component: SimpleSingularTestimonialCard,
}

export default meta

const Template: StoryFn<SimpleSingularTestimonialCardProps> = (
  args: SimpleSingularTestimonialCardProps
) => <SimpleSingularTestimonialCard {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Estou aprendendo bastante e começando a realmente me sentir um programador.',
  name: 'Mateus',
}

export const WithImage = Template.bind({})
WithImage.args = {
  ...Default.args,
  imageUrl:
    'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
}

export const WithDate = Template.bind({})
WithDate.args = {
  ...Default.args,
  ratingDate: '22 de março de 2023',
}

export const WithImageAndDate = Template.bind({})
WithImageAndDate.args = {
  ...WithImage.args,
  ...WithDate.args,
}
