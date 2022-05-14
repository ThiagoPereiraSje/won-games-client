import { ComponentMeta, ComponentStory } from '@storybook/react'
import Checkbox from 'components/Checkbox'
import CheckboxSvg from '.'

export default {
  title: 'Form/CheckboxSvg',
  component: CheckboxSvg
} as ComponentMeta<typeof CheckboxSvg>

export const Basic: ComponentStory<typeof CheckboxSvg> = (args) => (
  <div style={{ width: 300 }}>
    <CheckboxSvg {...args} label="Sara Checkbox" labelFor="sara-checkbox" />

    <Checkbox
      {...args}
      label="Willian Checkbox"
      labelFor="willian-checkbox"
      labelColor="black"
    />
  </div>
)
