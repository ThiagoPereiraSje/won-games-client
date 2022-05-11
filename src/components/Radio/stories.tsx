import { ComponentMeta, ComponentStory } from '@storybook/react'
import Radio from '.'

export default {
  title: 'Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

export const Basic: ComponentStory<typeof Radio> = (args) => <Radio {...args} />
