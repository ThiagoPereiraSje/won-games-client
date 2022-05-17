import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: {
    developer: 'Gearbox Software',
    releaseDate: '2020-11-21T23:00:00',
    platforms: ['windows', 'linux', 'mac'],
    rating: 'BR0',
    genres: ['Role-playing', 'Narrative']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    rating: {
      control: {
        type: 'inline-radio',
        options: ['BR0', 'BR10', 'BR12', 'BR14', 'BR16', 'BR18']
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof GameDetails>

export const Basic: ComponentStory<typeof GameDetails> = (args) => (
  <GameDetails {...args} />
)
