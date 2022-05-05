import { ComponentMeta, ComponentStory } from '@storybook/react'
import Ribbon from '.'

export default {
  title: 'Ribbon',
  component: Ribbon
} as ComponentMeta<typeof Ribbon>

export const Basic: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
