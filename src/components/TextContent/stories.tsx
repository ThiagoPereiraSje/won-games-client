import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextContent from '.'

import mockTextContent from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: mockTextContent,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof TextContent>

export const Basic: ComponentStory<typeof TextContent> = (args) => (
  <TextContent {...args} />
)
