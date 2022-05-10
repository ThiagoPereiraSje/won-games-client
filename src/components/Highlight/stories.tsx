import { ComponentMeta, ComponentStory } from '@storybook/react'
import Highlight from '.'
import items from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Highlight>

export const Basic: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Basic.args = items[0]

export const WithFloatImage: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = items[1]

export const BorderlandsSample: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

BorderlandsSample.args = items[2]
