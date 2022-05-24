import { ComponentMeta, ComponentStory } from '@storybook/react'
import OrdersList from '.'

import mockGameItems from 'components/GameItem/mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  argTypes: {
    items: {
      type: 'symbol'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: 850, maxWidth: '100%', margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof OrdersList>

export const Basic: ComponentStory<typeof OrdersList> = (args) => (
  <OrdersList items={mockGameItems} {...args} />
)

export const WithoutItems: ComponentStory<typeof OrdersList> = (args) => (
  <OrdersList {...args} />
)
