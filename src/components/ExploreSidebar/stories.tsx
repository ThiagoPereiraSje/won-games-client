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
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ExploreSidebar>

export const Basic: ComponentStory<typeof ExploreSidebar> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValues: ComponentStory<typeof ExploreSidebar> = (
  args
) => <ExploreSidebar {...args} />

WithInitialValues.args = {
  initialValues: { windows: true, sort_by: 'low-to-high' }
}
