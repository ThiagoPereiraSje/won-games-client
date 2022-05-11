import { ComponentMeta, ComponentStory } from '@storybook/react'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'Checked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Checkbox>

export const Basic: ComponentStory<typeof Checkbox> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="1"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Adventure" labelFor="2" {...args} />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Strategy" labelFor="3" {...args} />
    </div>
  </>
)
