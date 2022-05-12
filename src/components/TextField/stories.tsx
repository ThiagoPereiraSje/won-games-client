import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MailOutline, Chat } from '@styled-icons/material-outlined'
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
    iconLeft: { type: 'symbol' },
    iconRight: { type: 'symbol' }
  },
  component: TextField
} as ComponentMeta<typeof TextField>

export const Basic: ComponentStory<typeof TextField> = (args) => (
  <>
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} iconLeft={<MailOutline />} />
    </div>

    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} iconRight={<MailOutline />} />
    </div>

    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} iconLeft={<MailOutline />} iconRight={<Chat />} />
    </div>
  </>
)
