import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameInfo from '.'
import gameInfoMock from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: gameInfoMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof GameInfo>

export const Basic: ComponentStory<typeof GameInfo> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
)
