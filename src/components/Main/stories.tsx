import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Título padrão',
    description: 'Descrição padrão'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />

Basic.args = {
  title: 'Título básico',
  description: 'Descrição básica'
}

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
