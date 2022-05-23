import { ComponentMeta, ComponentStory } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 860, margin: 'auto' }}>
        <Story />
      </div>
    )
  ],
  component: FormProfile
} as ComponentMeta<typeof FormProfile>

export const Basic: ComponentStory<typeof FormProfile> = () => <FormProfile />
