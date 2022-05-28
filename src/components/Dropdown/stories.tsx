import { ComponentMeta, ComponentStory } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Dropdown>

export const Basic: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

Basic.args = {
  title: 'Click here',
  children: 'content'
}
