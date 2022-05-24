import { ComponentMeta, ComponentStory } from '@storybook/react'
import ExploreSidebar from '.'

import mockSidebarItems from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: mockSidebarItems
  },
  argTypes: {
    items: {
      type: 'symbol'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ExploreSidebar>

export const Basic: ComponentStory<typeof ExploreSidebar> = (args) => (
  <ExploreSidebar {...args} />
)
