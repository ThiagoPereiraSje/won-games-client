import { ComponentMeta, ComponentStory } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

export const Basic: ComponentStory<typeof Logo> = (args: any) => (
  <Logo {...args} />
)
