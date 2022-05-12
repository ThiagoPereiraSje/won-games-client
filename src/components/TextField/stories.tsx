import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MailOutline } from '@styled-icons/material-outlined'
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
    onInput: { action: 'Changed' },
    icon: { type: 'symbol' },
    value: { type: 'string' },
    disabled: { type: 'boolean' }
  },
  component: TextField
} as ComponentMeta<typeof TextField>

export const Basic: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} icon={<MailOutline />} />
  </div>
)

export const WithError: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField
      {...args}
      icon={<MailOutline />}
      error="Oops.. something is wrong"
    />
  </div>
)
