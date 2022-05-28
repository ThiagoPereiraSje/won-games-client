import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartIcon>

export const Basic: ComponentStory<typeof CartIcon> = () => <CartIcon />

export const WithItems: ComponentStory<typeof CartIcon> = (args) => (
  <CartIcon {...args} />
)

WithItems.args = {
  quantity: 3
}
