import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HeadingProps } from 'components/Heading'
import highlightsMock from 'components/Highlight/mock'
import gameCardsMock from 'components/GameCardSlider/mock'
import Showcase from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Showcase>

const headingProps: HeadingProps = {
  children: 'Showcase heading'
}

export const Basic: ComponentStory<typeof Showcase> = (args) => (
  <Showcase
    heading={headingProps}
    highlight={highlightsMock[0]}
    gameCards={gameCardsMock}
    {...args}
  />
)
