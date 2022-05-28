import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartList from '.'
import mockCartItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockCartItems,
    total: 'R$ 430,00'
  },
  argTypes: {
    items: {
      type: 'symbol'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartList>

export const Basic: ComponentStory<typeof CartList> = (args) => (
  <CartList {...args} />
)

export const WithButton: ComponentStory<typeof CartList> = (args) => (
  <CartList {...args} hasButton />
)
