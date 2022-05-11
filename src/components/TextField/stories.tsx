import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextField from '.'

export default {
  title: 'TextField',
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'thiago@gmail.com'
  },
  argTypes: {
    onInput: { action: 'Changed' }
  },
  component: TextField
} as ComponentMeta<typeof TextField>

export const Basic: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
