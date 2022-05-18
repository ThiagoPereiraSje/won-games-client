import { ComponentMeta, ComponentStory } from '@storybook/react'
import Gallery from '.'

import mockGalleryImages from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items: mockGalleryImages
  },
  parameters: {
    backgrounds: {
      layout: 'fullscreen',
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Gallery>

export const Basic: ComponentStory<typeof Gallery> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
