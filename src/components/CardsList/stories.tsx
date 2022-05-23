import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardsList from '.'

import mockCards from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: mockCards
  },
  decorators: [
    (Story) => (
      <div style={{ width: 850, maxWidth: '100%', margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof CardsList>

export const Basic: ComponentStory<typeof CardsList> = (args) => (
  <CardsList {...args} />
)
