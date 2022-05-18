import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameDetails from '.'

import mockGameDetails from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mockGameDetails,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
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
    },
    genres: {
      control: {
        type: 'inline-check',
        options: [
          'Role-playing',
          'Narrative',
          'Action',
          'Adventure',
          'Strategy'
        ]
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
