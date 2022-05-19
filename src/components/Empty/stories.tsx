import { ComponentMeta, ComponentStory } from '@storybook/react'
import Empty from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Empty>

export const Basic: ComponentStory<typeof Empty> = (args) => <Empty {...args} />

Basic.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
