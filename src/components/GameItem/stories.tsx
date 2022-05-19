import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as ComponentMeta<typeof GameItem>

export const Basic: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
)
