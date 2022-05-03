import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-sharp/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Basic.args = {
  children: 'Buy now'
}

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
