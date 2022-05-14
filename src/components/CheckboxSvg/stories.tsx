import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckboxSvg from '.'

export default {
  title: 'Form/CheckboxSvg',
  component: CheckboxSvg
} as ComponentMeta<typeof CheckboxSvg>

export const Basic: ComponentStory<typeof CheckboxSvg> = (args) => (
  <CheckboxSvg {...args} />
)
