import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartDropdown from '.'

export default {
  title: 'CartDropdown',
  component: CartDropdown
} as ComponentMeta<typeof CartDropdown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Basic: ComponentStory<typeof CartDropdown> = (args: any) => (
  <CartDropdown {...args} />
)
