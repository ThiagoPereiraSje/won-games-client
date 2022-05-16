import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as ComponentMeta<typeof GameInfo>

export const Basic: ComponentStory<typeof GameInfo> = (args) => (
  <GameInfo {...args} />
)
