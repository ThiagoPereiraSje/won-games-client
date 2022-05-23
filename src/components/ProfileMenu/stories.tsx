import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ProfileMenu>

export const Basic: ComponentStory<typeof ProfileMenu> = () => <ProfileMenu />
