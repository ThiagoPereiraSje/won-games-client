import { ComponentMeta, ComponentStory } from '@storybook/react'
import highlightsMock from 'components/Highlight/mock'
import gameCardsMock from 'components/GameCardSlider/mock'
import Showcase from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    highlight: {
      type: 'symbol'
    },
    games: {
      type: 'symbol'
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Showcase>

export const Basic: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

Basic.args = {
  title: 'Showcase heading',
  highlight: highlightsMock[0],
  games: gameCardsMock
}

export const WithoutHighlight: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Showcase heading',
  games: gameCardsMock
}

export const WithoutGames: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Showcase heading',
  highlight: highlightsMock[2]
}
