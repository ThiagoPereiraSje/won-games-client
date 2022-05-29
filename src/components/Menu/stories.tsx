import { ComponentMeta, ComponentStory } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Menu>

export const Basic: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Logeed: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

Logeed.args = {
  username: 'John Doe'
}
