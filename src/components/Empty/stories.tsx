import { ComponentMeta, ComponentStory } from '@storybook/react'
import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

export const Basic: ComponentStory<typeof Empty> = (args) => <Empty {...args} />
