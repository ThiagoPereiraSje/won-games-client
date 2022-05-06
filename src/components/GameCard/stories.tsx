import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero.png',
    price: '251,00'
  }
} as ComponentMeta<typeof GameCard>

export const Basic: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)