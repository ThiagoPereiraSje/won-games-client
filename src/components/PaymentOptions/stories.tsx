import { ComponentMeta, ComponentStory } from '@storybook/react'
import PaymentOptions from '.'
import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: 'symbol'
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, maxWidth: 400 }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof PaymentOptions>

export const Basic: ComponentStory<typeof PaymentOptions> = (args) => (
  <PaymentOptions {...args} />
)
