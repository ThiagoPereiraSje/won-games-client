import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as ComponentMeta<typeof GameInfo>

export const Basic: ComponentStory<typeof GameInfo> = (args) => (
  <GameInfo {...args} />
)

Basic.args = {
  title: 'Borderlands 3',
  description:
    'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
  price: '215.00'
}
