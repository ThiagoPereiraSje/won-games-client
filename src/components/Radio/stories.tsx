import { ComponentMeta, ComponentStory } from '@storybook/react'
import Radio from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'Checked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Radio>

export const Basic: ComponentStory<typeof Radio> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="collections"
        label="Action"
        labelFor="action"
        value="action"
        defaultChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        name="collections"
        label="Adventure"
        labelFor="adventure"
        value="adventure"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        name="collections"
        label="Strategy"
        labelFor="strategy"
        value="strategy"
        {...args}
      />
    </div>
  </>
)
