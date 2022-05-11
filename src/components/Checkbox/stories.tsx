import { ComponentMeta, ComponentStory } from '@storybook/react'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Buy now',
    labelFor: 'buy-now'
  }
} as ComponentMeta<typeof Checkbox>

export const Basic: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)
