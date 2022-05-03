import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Button>

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Basic.args = {
  children: 'Buy now'
}
