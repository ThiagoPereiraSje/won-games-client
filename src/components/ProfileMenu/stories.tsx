import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  args: {
    activeLink: '/profile/me'
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
} as ComponentMeta<typeof ProfileMenu>

export const Basic: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)
