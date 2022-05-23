import { ComponentMeta, ComponentStory } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
} as ComponentMeta<typeof FormProfile>

export const Basic: ComponentStory<typeof FormProfile> = () => <FormProfile />
