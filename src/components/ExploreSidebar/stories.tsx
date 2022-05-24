import { ComponentMeta, ComponentStory } from '@storybook/react'
import ExploreSidebar from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ExploreSidebar>

export const Basic: ComponentStory<typeof ExploreSidebar> = () => (
  <ExploreSidebar />
)
