import { ComponentMeta, ComponentStory } from '@storybook/react'
import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof UserDropdown>

export const Basic: ComponentStory<typeof UserDropdown> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
)
