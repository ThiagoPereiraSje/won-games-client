import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero.png',
    price: 'R$ 251,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: {
      action: 'onFav'
    },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof GameCard>

export const Basic: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF'
}
