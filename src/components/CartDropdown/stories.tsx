import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartDropdown from '.'

import mockCartItems from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: mockCartItems,
    total: 'R$ 430,00'
  },
  decorators: [
    (Story) => (
      <div
        style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartDropdown>

export const Basic: ComponentStory<typeof CartDropdown> = (args) => (
  <CartDropdown {...args} />
)
