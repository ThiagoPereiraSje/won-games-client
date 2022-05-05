import { ComponentMeta, ComponentStory } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'By now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Banner>

export const Basic: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
)
